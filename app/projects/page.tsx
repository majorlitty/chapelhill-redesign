import { Metadata } from 'next';
import ProjectsPageClient from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Our Projects | ChapelHill Multicompany Limited — Completed & Ongoing Developments',
  description:
    'Explore our portfolio of completed and ongoing residential and commercial developments crafted with precision, enduring quality, and architectural excellence across prime Lagos corridors.',
  alternates: {
    canonical: 'https://chapelhill.com.ng/projects',
  },
  openGraph: {
    title: 'Our Projects | ChapelHill Multicompany Limited',
    description:
      'Completed and ongoing architectural developments in Lekki, Abijo GRA, and Ogudu GRA, Lagos.',
    type: 'website',
    images: [
      {
        url: '/Chapelhill-Company-Logo.png',
        width: 1200,
        height: 630,
        alt: 'ChapelHill Multicompany Limited Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | ChapelHill Multicompany Limited',
    description:
      'Completed and ongoing architectural developments across prime Lagos locations.',
    images: ['/Chapelhill-Company-Logo.png'],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
