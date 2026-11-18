import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title:
    'Our Services | ChapelHill Multicompany Limited — Development, Construction, Facility Management & Joint Ventures',
  description:
    'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships by ChapelHill Multicompany Limited.',
  openGraph: {
    title: 'Our Services | ChapelHill Multicompany Limited',
    description:
      'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships.',
    type: 'website',
    images: [
      {
        url: '/Chapelhill-Company-Logo.png',
        width: 1200,
        height: 630,
        alt: 'ChapelHill Multicompany Limited Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | ChapelHill Multicompany Limited',
    description:
      'Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships.',
    images: ['/Chapelhill-Company-Logo.png'],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
