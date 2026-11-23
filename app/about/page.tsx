import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About ChapelHill | Nigerian Property Development Company',
  description:
    'Discover ChapelHill Multicompany Limited, a Nigerian property development and construction company delivering projects and property solutions nationwide.',
  alternates: {
    canonical: 'https://chapelhill.com.ng/about',
  },
  openGraph: {
    title: 'About ChapelHill | Nigerian Property Development Company',
    description:
      'Discover ChapelHill Multicompany Limited, a Nigerian property development and construction company delivering projects and property solutions nationwide.',
    url: 'https://chapelhill.com.ng/about',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: '/images/joint-venture-partnerships.jpg',
        width: 1200,
        height: 896,
        alt: 'ChapelHill Multicompany Limited — Architectural Planning & Corporate Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ChapelHill | Nigerian Property Development Company',
    description:
      'Discover ChapelHill Multicompany Limited, a Nigerian property development and construction company delivering projects and property solutions nationwide.',
    images: ['/images/joint-venture-partnerships.jpg'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
