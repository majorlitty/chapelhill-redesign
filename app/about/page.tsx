import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title:
    'About Us | ChapelHill Multicompany Limited — Property Development, Construction, Facility Management & Partnerships',
  description:
    'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships across Nigeria.',
  alternates: {
    canonical: 'https://chapelhill.com.ng/about',
  },
  openGraph: {
    title: 'About Us | ChapelHill Multicompany Limited',
    description:
      'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships.',
    type: 'website',
    images: [
      {
        url: '/Chapelhill-Company-Logo.png',
        width: 1200,
        height: 630,
        alt: 'ChapelHill Multicompany Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ChapelHill Multicompany Limited',
    description:
      'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships.',
    images: ['/Chapelhill-Company-Logo.png'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
