/**
 * Authoritative, centralized business identity, contact, office address,
 * operating hours, service divisions, and geographic positioning for
 * ChapelHill Multicompany Limited.
 *
 * Safe for both Next.js Server Components and Client Components.
 */

export interface PhoneContact {
  readonly display: string;
  readonly e164: string;
  readonly telHref: string;
  readonly digits: string;
  readonly label: string;
}

export interface ServiceDivisionIdentity {
  readonly id:
    | 'development-sales'
    | 'construction-management'
    | 'facility-management'
    | 'joint-ventures';
  readonly code: 'A' | 'B' | 'C' | 'D';
  readonly number: '01' | '02' | '03' | '04';
  readonly name: string;
  readonly href: `/services#${string}`;
  readonly url: `https://chapelhill.com.ng/services#${string}`;
}

const CANONICAL_BASE_URL = 'https://chapelhill.com.ng' as const;
const CANONICAL_URL = 'https://chapelhill.com.ng/' as const;
const OFFICIAL_EMAIL = 'chapelhillmulticompanyltd@gmail.com' as const;

const PRIMARY_PHONE: PhoneContact = {
  display: '+234 803 286 5488',
  e164: '+2348032865488',
  telHref: 'tel:+2348032865488',
  digits: '2348032865488',
  label: 'Primary Phone & WhatsApp',
} as const;

const SECONDARY_PHONE: PhoneContact = {
  display: '+234 903 913 0207',
  e164: '+2349039130207',
  telHref: 'tel:+2349039130207',
  digits: '2349039130207',
  label: 'Secondary Advisory Line',
} as const;

const OFFICIAL_WHATSAPP_URL = `https://wa.me/${PRIMARY_PHONE.digits}` as const;

export const BUSINESS_IDENTITY = {
  companyName: 'ChapelHill Multicompany Limited',
  brandName: 'ChapelHill',
  canonicalUrl: CANONICAL_URL,
  baseUrl: CANONICAL_BASE_URL,
  slogan: 'Where Home Meets Happiness',
  corporateDescription:
    'ChapelHill Multicompany Limited is a Nigerian property development, construction and property management company operating nationwide.',
  headquartersDescription:
    'ChapelHill is headquartered in Lagos and provides property development, construction and property management services across Nigeria.',
  contact: {
    email: OFFICIAL_EMAIL,
    emailHref: `mailto:${OFFICIAL_EMAIL}`,
    primaryPhone: PRIMARY_PHONE,
    secondaryPhone: SECONDARY_PHONE,
    phones: [PRIMARY_PHONE, SECONDARY_PHONE] as readonly PhoneContact[],
    whatsappUrl: OFFICIAL_WHATSAPP_URL,
  },
  address: {
    full: 'Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction, Lekki, Lagos State, Nigeria',
    compact: 'Abraham Adesanya Junction, Lekki, Lagos',
    streetAddress: 'Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction',
    addressLocality: 'Lekki',
    addressRegion: 'Lagos State',
    addressCountry: 'Nigeria',
    countryCode: 'NG',
    officeLocationLabel: 'Lagos, Nigeria',
  },
  operatingHours: {
    days: 'Monday–Saturday',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ] as readonly string[],
    closedDay: 'Sunday',
    opens: '09:00',
    closes: '17:00',
    opensDisplay: '9:00 AM',
    closesDisplay: '5:00 PM',
    timezone: 'Africa/Lagos',
    timezoneLabel: 'WAT',
    utcOffset: 'UTC+1',
    display: 'Monday–Saturday, 9:00 AM–5:00 PM WAT',
    displayWithClosed: 'Monday–Saturday, 9:00 AM–5:00 PM WAT (Sunday: Closed)',
  },
  geographicCoverage: {
    physicalOffice: 'Lagos, Nigeria',
    hasAbujaOffice: false as const,
    coverageSummary: 'Nationwide across Nigeria, including Abuja and Lagos',
    areaServed: ['Nigeria', 'Lagos', 'Abuja'] as readonly string[],
    hqBadge: 'Lagos HQ · Operating Nationwide',
  },
  logo: {
    path: '/Chapelhill-Company-Logo.png',
    url: `${CANONICAL_BASE_URL}/Chapelhill-Company-Logo.png`,
    width: 238,
    height: 107,
    alt: 'ChapelHill Multicompany Limited',
  },
  serviceDivisions: [
    {
      id: 'development-sales',
      code: 'A',
      number: '01',
      name: 'Property Development and Sales',
      href: '/services#development-sales',
      url: `${CANONICAL_BASE_URL}/services#development-sales`,
    },
    {
      id: 'construction-management',
      code: 'B',
      number: '02',
      name: 'Construction and Project Management',
      href: '/services#construction-management',
      url: `${CANONICAL_BASE_URL}/services#construction-management`,
    },
    {
      id: 'facility-management',
      code: 'C',
      number: '03',
      name: 'Property and Facility Management',
      href: '/services#facility-management',
      url: `${CANONICAL_BASE_URL}/services#facility-management`,
    },
    {
      id: 'joint-ventures',
      code: 'D',
      number: '04',
      name: 'Joint Ventures and Investment Partnerships',
      href: '/services#joint-ventures',
      url: `${CANONICAL_BASE_URL}/services#joint-ventures`,
    },
  ] as readonly ServiceDivisionIdentity[],
} as const;

export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return BUSINESS_IDENTITY.contact.whatsappUrl;
  }
  return `${BUSINESS_IDENTITY.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
