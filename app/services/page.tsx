import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';
import JsonLd from '@/components/seo/JsonLd';
import { buildServicesPageSchema } from '@/lib/seo/schema';

const SERVICES_PAGE_TITLE =
  'Property Development & Construction Services | ChapelHill';
const SERVICES_PAGE_DESCRIPTION =
  "Explore ChapelHill's property development, construction, facility management and strategic development partnership services across Nigeria.";
const SERVICES_IMAGE_PATH =
  '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg';
const SERVICES_IMAGE_ALT =
  'ChapelHill Multicompany Limited — Property Development & Construction Services';

export const metadata: Metadata = {
  title: SERVICES_PAGE_TITLE,
  description: SERVICES_PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://chapelhill.com.ng/services',
  },
  openGraph: {
    title: SERVICES_PAGE_TITLE,
    description: SERVICES_PAGE_DESCRIPTION,
    url: 'https://chapelhill.com.ng/services',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: SERVICES_IMAGE_PATH,
        width: 1020,
        height: 765,
        alt: SERVICES_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SERVICES_PAGE_TITLE,
    description: SERVICES_PAGE_DESCRIPTION,
    images: [SERVICES_IMAGE_PATH],
  },
};

export default function ServicesPage() {
  const schema = buildServicesPageSchema({
    name: SERVICES_PAGE_TITLE,
    description: SERVICES_PAGE_DESCRIPTION,
    primaryImagePathOrUrl: SERVICES_IMAGE_PATH,
    primaryImageWidth: 1020,
    primaryImageHeight: 765,
    primaryImageCaption: SERVICES_IMAGE_ALT,
  });

  return (
    <>
      <JsonLd id="chapelhill-page-jsonld" data={schema} />
      <ServicesPageClient />
    </>
  );
}
