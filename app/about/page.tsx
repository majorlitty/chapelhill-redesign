import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';
import JsonLd from '@/components/seo/JsonLd';
import { buildAboutPageSchema } from '@/lib/seo/schema';

const ABOUT_PAGE_TITLE = 'About ChapelHill | Nigerian Property Development Company';
const ABOUT_PAGE_DESCRIPTION =
  'Discover ChapelHill Multicompany Limited, a Nigerian property development and construction company delivering projects and property solutions nationwide.';
const ABOUT_IMAGE_PATH = '/images/joint-venture-partnerships.jpg';
const ABOUT_IMAGE_ALT =
  'ChapelHill Multicompany Limited — Architectural Planning & Corporate Advisory';

export const metadata: Metadata = {
  title: ABOUT_PAGE_TITLE,
  description: ABOUT_PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://chapelhill.com.ng/about',
  },
  openGraph: {
    title: ABOUT_PAGE_TITLE,
    description: ABOUT_PAGE_DESCRIPTION,
    url: 'https://chapelhill.com.ng/about',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: ABOUT_IMAGE_PATH,
        width: 1200,
        height: 896,
        alt: ABOUT_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ABOUT_PAGE_TITLE,
    description: ABOUT_PAGE_DESCRIPTION,
    images: [ABOUT_IMAGE_PATH],
  },
};

export default function AboutPage() {
  const schema = buildAboutPageSchema({
    name: ABOUT_PAGE_TITLE,
    description: ABOUT_PAGE_DESCRIPTION,
    primaryImagePathOrUrl: ABOUT_IMAGE_PATH,
    primaryImageWidth: 1200,
    primaryImageHeight: 896,
    primaryImageCaption: ABOUT_IMAGE_ALT,
  });

  return (
    <>
      <JsonLd id="chapelhill-page-jsonld" data={schema} />
      <AboutPageClient />
    </>
  );
}
