import { BUSINESS_IDENTITY } from '@/lib/seo/businessIdentity';
import type { Property } from '@/lib/propertiesData';
import { getProjectSeoMetadata } from '@/lib/projectSeoMetadata';

/**
 * Schema.org context constant for all JSON-LD graphs and documents.
 */
export const SCHEMA_CONTEXT = 'https://schema.org' as const;

/**
 * Primitive and recursive JSON-LD value types for strict compile-time safety.
 */
export type JsonLdPrimitive = string | number | boolean | null;

export type JsonLdReference = {
  readonly '@id': string;
};

export type JsonLdValue =
  | JsonLdPrimitive
  | JsonLdReference
  | JsonLdObject
  | readonly JsonLdValue[];

export interface JsonLdObject {
  readonly [key: string]: JsonLdValue | undefined;
}

export interface JsonLdNode extends JsonLdObject {
  readonly '@type': string | readonly string[];
  readonly '@id'?: string;
}

export interface JsonLdDocument extends JsonLdNode {
  readonly '@context': typeof SCHEMA_CONTEXT;
}

export interface JsonLdGraph {
  readonly '@context': typeof SCHEMA_CONTEXT;
  readonly '@graph': readonly JsonLdNode[];
}

export type JsonLdInput = JsonLdDocument | JsonLdGraph;

export type PageEntityFragment = 'webpage' | 'breadcrumb';

const ROOT_CANONICAL_URL = BUSINESS_IDENTITY.canonicalUrl;
const CANONICAL_ORIGIN = BUSINESS_IDENTITY.baseUrl;

/**
 * Permanent, canonical Schema.org `@id` identifiers anchored to
 * `https://chapelhill.com.ng/`.
 */
export const SCHEMA_ENTITY_IDS = {
  organization: `${ROOT_CANONICAL_URL}#organization`,
  lagosOffice: `${ROOT_CANONICAL_URL}#lagos-office`,
  website: `${ROOT_CANONICAL_URL}#website`,
  logo: `${ROOT_CANONICAL_URL}#logo`,
} as const;

/**
 * Reusable structured-data logo metadata consuming `BUSINESS_IDENTITY.schemaLogo`
 * (`512 × 512` PNG on white background) without altering the website UI logo.
 */
export const SCHEMA_LOGO = {
  id: SCHEMA_ENTITY_IDS.logo,
  path: BUSINESS_IDENTITY.schemaLogo.path,
  url: BUSINESS_IDENTITY.schemaLogo.url,
  width: BUSINESS_IDENTITY.schemaLogo.width,
  height: BUSINESS_IDENTITY.schemaLogo.height,
  caption: BUSINESS_IDENTITY.schemaLogo.alt,
} as const;

/**
 * Normalizes a route path or absolute URL into a canonical ChapelHill URL.
 * - Root (`/`, `''`, `https://chapelhill.com.ng`, `https://chapelhill.com.ng/`)
 *   resolves to `https://chapelhill.com.ng/`.
 * - Subpaths strip query/hash fragments and trailing slashes, resolving to
 *   `https://chapelhill.com.ng/<path>`.
 */
export function getCanonicalUrl(pathOrUrl: string = '/'): string {
  const trimmed = pathOrUrl.trim();
  if (!trimmed || trimmed === '/' || trimmed === CANONICAL_ORIGIN || trimmed === ROOT_CANONICAL_URL) {
    return ROOT_CANONICAL_URL;
  }

  let pathname = trimmed;
  if (/^https?:\/\//i.test(trimmed)) {
    const parsed = new URL(trimmed);
    pathname = parsed.pathname;
  } else {
    pathname = trimmed.split(/[?#]/)[0] ?? '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedPath = withLeadingSlash.replace(/\/+$/, '');

  if (!normalizedPath) {
    return ROOT_CANONICAL_URL;
  }

  return `${CANONICAL_ORIGIN}${normalizedPath}`;
}

/**
 * Builds the canonical URL for an individual project detail route.
 */
export function getProjectCanonicalUrl(slug: string): string {
  const cleanSlug = slug.trim().replace(/^\/+|\/+$/g, '');
  return getCanonicalUrl(`/projects/${cleanSlug}`);
}

/**
 * Resolves a relative public asset path or URL to an absolute HTTPS URL
 * under `https://chapelhill.com.ng`.
 */
export function getAbsoluteAssetUrl(assetPathOrUrl: string): string {
  const trimmed = assetPathOrUrl.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  const normalizedPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return new URL(normalizedPath, CANONICAL_ORIGIN).href;
}

/**
 * Builds a canonical page-scoped Schema.org `@id` identifier by appending
 * `#<fragment>` to the normalized canonical page URL.
 */
export function getEntityId(pathOrUrl: string, fragment: string): string {
  const canonicalUrl = getCanonicalUrl(pathOrUrl);
  const cleanFragment = fragment.trim().replace(/^#+/, '');
  return `${canonicalUrl}#${cleanFragment}`;
}

/**
 * Returns the canonical `#webpage` entity identifier for a page.
 * Example: `https://chapelhill.com.ng/#webpage`, `https://chapelhill.com.ng/about#webpage`.
 */
export function getWebPageId(pathOrUrl: string = '/'): string {
  return getEntityId(pathOrUrl, 'webpage');
}

/**
 * Returns the canonical `#breadcrumb` entity identifier for a page.
 * Example: `https://chapelhill.com.ng/services#breadcrumb`.
 */
export function getBreadcrumbId(pathOrUrl: string = '/'): string {
  return getEntityId(pathOrUrl, 'breadcrumb');
}

/**
 * Creates a typed JSON-LD `@id` reference object.
 */
export function schemaRef(id: string): JsonLdReference {
  return { '@id': id };
}

/**
 * Wraps one or more typed Schema.org nodes in a unified `@context` / `@graph`
 * envelope.
 */
export function createSchemaGraph(
  nodes: readonly JsonLdNode[]
): JsonLdGraph {
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': nodes,
  };
}

/**
 * Serializes a JSON-LD payload safely for HTML `<script>` injection by escaping
 * `<` characters to prevent premature script tag termination / XSS.
 */
export function serializeJsonLd(data: JsonLdInput): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function buildNigeriaCountry(): JsonLdObject {
  return {
    '@type': 'Country',
    name: BUSINESS_IDENTITY.address.addressCountry,
  };
}

function buildLagosPostalAddress(): JsonLdObject {
  return {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_IDENTITY.address.streetAddress,
    addressLocality: BUSINESS_IDENTITY.address.addressLocality,
    addressRegion: BUSINESS_IDENTITY.address.addressRegion,
    addressCountry: BUSINESS_IDENTITY.address.countryCode,
  };
}

function buildOpeningHoursSpecification(): readonly JsonLdObject[] {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...BUSINESS_IDENTITY.operatingHours.dayOfWeek],
      opens: BUSINESS_IDENTITY.operatingHours.opens,
      closes: BUSINESS_IDENTITY.operatingHours.closes,
    },
  ];
}

/**
 * Builds the canonical `Organization` JSON-LD node anchored at
 * `https://chapelhill.com.ng/#organization`.
 */
export function buildOrganizationNode(): JsonLdNode {
  const nigeria = buildNigeriaCountry();

  return {
    '@type': 'Organization',
    '@id': SCHEMA_ENTITY_IDS.organization,
    name: BUSINESS_IDENTITY.companyName,
    alternateName: BUSINESS_IDENTITY.brandName,
    url: BUSINESS_IDENTITY.canonicalUrl,
    description: BUSINESS_IDENTITY.corporateDescription,
    slogan: BUSINESS_IDENTITY.slogan,
    email: BUSINESS_IDENTITY.contact.email,
    telephone: BUSINESS_IDENTITY.contact.phones.map((phone) => phone.e164),
    logo: {
      '@type': 'ImageObject',
      '@id': SCHEMA_LOGO.id,
      url: SCHEMA_LOGO.url,
      contentUrl: SCHEMA_LOGO.url,
      width: SCHEMA_LOGO.width,
      height: SCHEMA_LOGO.height,
      caption: SCHEMA_LOGO.caption,
    },
    image: schemaRef(SCHEMA_LOGO.id),
    address: buildLagosPostalAddress(),
    contactPoint: BUSINESS_IDENTITY.contact.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone.e164,
      email: BUSINESS_IDENTITY.contact.email,
      areaServed: nigeria,
    })),
    areaServed: nigeria,
    location: schemaRef(SCHEMA_ENTITY_IDS.lagosOffice),
  };
}

/**
 * Builds the verified physical Lagos headquarters `LocalBusiness` node
 * anchored at `https://chapelhill.com.ng/#lagos-office`.
 */
export function buildLagosLocalBusinessNode(): JsonLdNode {
  return {
    '@type': 'LocalBusiness',
    '@id': SCHEMA_ENTITY_IDS.lagosOffice,
    name: BUSINESS_IDENTITY.companyName,
    url: BUSINESS_IDENTITY.canonicalUrl,
    description: BUSINESS_IDENTITY.headquartersDescription,
    image: schemaRef(SCHEMA_LOGO.id),
    address: buildLagosPostalAddress(),
    telephone: BUSINESS_IDENTITY.contact.primaryPhone.e164,
    email: BUSINESS_IDENTITY.contact.email,
    openingHoursSpecification: buildOpeningHoursSpecification(),
    parentOrganization: schemaRef(SCHEMA_ENTITY_IDS.organization),
    areaServed: buildNigeriaCountry(),
  };
}

/**
 * Builds the `WebSite` JSON-LD node anchored at
 * `https://chapelhill.com.ng/#website`.
 */
export function buildWebSiteNode(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': SCHEMA_ENTITY_IDS.website,
    url: BUSINESS_IDENTITY.canonicalUrl,
    name: BUSINESS_IDENTITY.brandName,
    description: BUSINESS_IDENTITY.corporateDescription,
    publisher: schemaRef(SCHEMA_ENTITY_IDS.organization),
  };
}

/**
 * Builds the Phase 3C.3 homepage `@graph` combining `Organization`,
 * Lagos `LocalBusiness`, and `WebSite`.
 */
export function buildHomepageIdentitySchema(): JsonLdGraph {
  return createSchemaGraph([
    buildOrganizationNode(),
    buildLagosLocalBusinessNode(),
    buildWebSiteNode(),
  ]);
}

export interface BreadcrumbItemInput {
  readonly name: string;
  readonly pathOrUrl: string;
}

/**
 * Builds a `BreadcrumbList` JSON-LD node anchored at `<canonicalUrl>#breadcrumb`
 * with sequential `ListItem` positions starting at 1 and absolute canonical URLs.
 */
export function buildBreadcrumbListNode(
  pagePathOrUrl: string,
  items: readonly BreadcrumbItemInput[]
): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': getBreadcrumbId(pagePathOrUrl),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.pathOrUrl),
    })),
  };
}

export interface PageSchemaOptions {
  readonly canonicalUrl: string;
  readonly name: string;
  readonly description: string;
  readonly breadcrumb?: JsonLdReference;
  readonly about?: JsonLdReference;
  readonly mainEntity?: JsonLdReference;
  readonly publisher?: JsonLdReference;
  readonly primaryImagePathOrUrl?: string;
  readonly primaryImageWidth?: number;
  readonly primaryImageHeight?: number;
  readonly primaryImageCaption?: string;
  readonly spatialCoverageName?: string;
}

function buildPrimaryImageObject(
  options: PageSchemaOptions
): JsonLdObject | undefined {
  if (!options.primaryImagePathOrUrl) {
    return undefined;
  }

  const imageUrl = getAbsoluteAssetUrl(options.primaryImagePathOrUrl);
  return {
    '@type': 'ImageObject',
    url: imageUrl,
    contentUrl: imageUrl,
    ...(options.primaryImageWidth ? { width: options.primaryImageWidth } : {}),
    ...(options.primaryImageHeight ? { height: options.primaryImageHeight } : {}),
    ...(options.primaryImageCaption ? { caption: options.primaryImageCaption } : {}),
  };
}

function buildBasePageNode(
  pageType: 'WebPage' | 'AboutPage' | 'CollectionPage',
  options: PageSchemaOptions
): JsonLdNode {
  const url = getCanonicalUrl(options.canonicalUrl);
  const primaryImage = buildPrimaryImageObject(options);

  return {
    '@type': pageType,
    '@id': getWebPageId(url),
    url,
    name: options.name,
    description: options.description,
    isPartOf: schemaRef(SCHEMA_ENTITY_IDS.website),
    ...(options.breadcrumb ? { breadcrumb: options.breadcrumb } : {}),
    ...(options.about ? { about: options.about } : {}),
    ...(options.mainEntity ? { mainEntity: options.mainEntity } : {}),
    ...(options.publisher ? { publisher: options.publisher } : {}),
    ...(primaryImage ? { primaryImageOfPage: primaryImage } : {}),
    ...(options.spatialCoverageName
      ? {
          spatialCoverage: {
            '@type': 'Place',
            name: options.spatialCoverageName,
          },
        }
      : {}),
  };
}

/**
 * Builds a reusable `WebPage` JSON-LD node anchored at `<canonicalUrl>#webpage`.
 */
export function buildWebPageNode(options: PageSchemaOptions): JsonLdNode {
  return buildBasePageNode('WebPage', options);
}

/**
 * Builds a reusable `AboutPage` JSON-LD node anchored at `<canonicalUrl>#webpage`.
 */
export function buildAboutPageNode(options: PageSchemaOptions): JsonLdNode {
  return buildBasePageNode('AboutPage', {
    ...options,
    about: options.about ?? schemaRef(SCHEMA_ENTITY_IDS.organization),
    mainEntity: options.mainEntity ?? schemaRef(SCHEMA_ENTITY_IDS.organization),
  });
}

/**
 * Builds a reusable `CollectionPage` JSON-LD node anchored at `<canonicalUrl>#webpage`.
 */
export function buildCollectionPageNode(options: PageSchemaOptions): JsonLdNode {
  return buildBasePageNode('CollectionPage', {
    ...options,
    about: options.about ?? schemaRef(SCHEMA_ENTITY_IDS.organization),
  });
}

/**
 * Builds the homepage `@graph` combining `Organization`, Lagos `LocalBusiness`,
 * `WebSite`, and `WebPage` (no breadcrumbs on the root homepage).
 */
export function buildHomepageSchema(
  homePage: Omit<PageSchemaOptions, 'canonicalUrl' | 'breadcrumb'>
): JsonLdGraph {
  return createSchemaGraph([
    buildOrganizationNode(),
    buildLagosLocalBusinessNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      ...homePage,
      canonicalUrl: BUSINESS_IDENTITY.canonicalUrl,
      about: homePage.about ?? schemaRef(SCHEMA_ENTITY_IDS.organization),
    }),
  ]);
}

/**
 * Builds the `/about` `@graph` with an `AboutPage` entity and connected
 * `BreadcrumbList` (`Home > About`).
 */
export function buildAboutPageSchema(
  page: Omit<PageSchemaOptions, 'canonicalUrl' | 'breadcrumb'>
): JsonLdGraph {
  const canonicalUrl = getCanonicalUrl('/about');

  return createSchemaGraph([
    buildAboutPageNode({
      ...page,
      canonicalUrl,
      breadcrumb: schemaRef(getBreadcrumbId(canonicalUrl)),
    }),
    buildBreadcrumbListNode(canonicalUrl, [
      { name: 'Home', pathOrUrl: '/' },
      { name: 'About', pathOrUrl: canonicalUrl },
    ]),
  ]);
}

/**
 * Builds the `/services` `@graph` with a `WebPage` entity and connected
 * `BreadcrumbList` (`Home > Services`).
 */
export function buildServicesPageSchema(
  page: Omit<PageSchemaOptions, 'canonicalUrl' | 'breadcrumb'>
): JsonLdGraph {
  const canonicalUrl = getCanonicalUrl('/services');

  return createSchemaGraph([
    buildWebPageNode({
      ...page,
      canonicalUrl,
      breadcrumb: schemaRef(getBreadcrumbId(canonicalUrl)),
      about: page.about ?? schemaRef(SCHEMA_ENTITY_IDS.organization),
    }),
    buildBreadcrumbListNode(canonicalUrl, [
      { name: 'Home', pathOrUrl: '/' },
      { name: 'Services', pathOrUrl: canonicalUrl },
    ]),
  ]);
}

/**
 * Builds the `/projects` `@graph` with a `CollectionPage` entity and connected
 * `BreadcrumbList` (`Home > Projects`).
 */
export function buildProjectsPageSchema(
  page: Omit<PageSchemaOptions, 'canonicalUrl' | 'breadcrumb'>
): JsonLdGraph {
  const canonicalUrl = getCanonicalUrl('/projects');

  return createSchemaGraph([
    buildCollectionPageNode({
      ...page,
      canonicalUrl,
      breadcrumb: schemaRef(getBreadcrumbId(canonicalUrl)),
    }),
    buildBreadcrumbListNode(canonicalUrl, [
      { name: 'Home', pathOrUrl: '/' },
      { name: 'Projects', pathOrUrl: canonicalUrl },
    ]),
  ]);
}

/**
 * Builds a dynamic `WebPage` + `BreadcrumbList` (`Home > Projects > Project Name`)
 * `@graph` for a verified project, preserving its canonical `/projects/[slug]`
 * URL and verified location.
 */
export function buildProjectWebPageSchema(property: Property): JsonLdGraph {
  const seo = getProjectSeoMetadata(property);
  const canonicalUrl = getProjectCanonicalUrl(property.slug);

  return createSchemaGraph([
    buildWebPageNode({
      canonicalUrl,
      name: seo.title,
      description: seo.description,
      breadcrumb: schemaRef(getBreadcrumbId(canonicalUrl)),
      publisher: schemaRef(SCHEMA_ENTITY_IDS.organization),
      primaryImagePathOrUrl: property.heroImage,
      primaryImageWidth: seo.imageWidth,
      primaryImageHeight: seo.imageHeight,
      primaryImageCaption: property.name,
      spatialCoverageName: property.location,
    }),
    buildBreadcrumbListNode(canonicalUrl, [
      { name: 'Home', pathOrUrl: '/' },
      { name: 'Projects', pathOrUrl: '/projects' },
      { name: property.name, pathOrUrl: canonicalUrl },
    ]),
  ]);
}
