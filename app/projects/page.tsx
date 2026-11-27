import { Metadata } from 'next';
import ProjectsPageClient from '@/components/ProjectsPageClient';
import JsonLd from '@/components/seo/JsonLd';
import { buildProjectsPageSchema } from '@/lib/seo/schema';

const PROJECTS_PAGE_TITLE =
  'Property Development Projects in Nigeria | ChapelHill';
const PROJECTS_PAGE_DESCRIPTION =
  "Explore ChapelHill's property developments and construction projects across Nigeria, including residential developments in Lagos and other locations.";
const PROJECTS_IMAGE_PATH =
  '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg';
const PROJECTS_IMAGE_ALT =
  'ChapelHill Multicompany Limited — Property Development Projects in Nigeria';

export const metadata: Metadata = {
  title: PROJECTS_PAGE_TITLE,
  description: PROJECTS_PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://chapelhill.com.ng/projects',
  },
  openGraph: {
    title: PROJECTS_PAGE_TITLE,
    description: PROJECTS_PAGE_DESCRIPTION,
    url: 'https://chapelhill.com.ng/projects',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: PROJECTS_IMAGE_PATH,
        width: 1536,
        height: 1024,
        alt: PROJECTS_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PROJECTS_PAGE_TITLE,
    description: PROJECTS_PAGE_DESCRIPTION,
    images: [PROJECTS_IMAGE_PATH],
  },
};

export default function ProjectsPage() {
  const schema = buildProjectsPageSchema({
    name: PROJECTS_PAGE_TITLE,
    description: PROJECTS_PAGE_DESCRIPTION,
    primaryImagePathOrUrl: PROJECTS_IMAGE_PATH,
    primaryImageWidth: 1536,
    primaryImageHeight: 1024,
    primaryImageCaption: PROJECTS_IMAGE_ALT,
  });

  return (
    <>
      <JsonLd id="chapelhill-page-jsonld" data={schema} />
      <ProjectsPageClient />
    </>
  );
}
