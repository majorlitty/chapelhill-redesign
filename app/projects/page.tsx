import { Metadata } from 'next';
import ProjectsPageClient from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Property Development Projects in Nigeria | ChapelHill',
  description:
    "Explore ChapelHill's property developments and construction projects across Nigeria, including residential developments in Lagos and other locations.",
  alternates: {
    canonical: 'https://chapelhill.com.ng/projects',
  },
  openGraph: {
    title: 'Property Development Projects in Nigeria | ChapelHill',
    description:
      "Explore ChapelHill's property developments and construction projects across Nigeria, including residential developments in Lagos and other locations.",
    url: 'https://chapelhill.com.ng/projects',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
        width: 1536,
        height: 1024,
        alt: 'ChapelHill Multicompany Limited — Property Development Projects in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Development Projects in Nigeria | ChapelHill',
    description:
      "Explore ChapelHill's property developments and construction projects across Nigeria, including residential developments in Lagos and other locations.",
    images: ['/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg'],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
