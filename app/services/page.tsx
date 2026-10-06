import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services | Chapelhill Multicompany International — Property Development, Construction & Maintenance',
  description:
    'Comprehensive real estate development, civil construction, carcass-to-turnkey remodeling, facility maintenance, and project management in Lagos, Nigeria.',
  openGraph: {
    title: 'Our Services | Chapelhill Multicompany International',
    description:
      'Empowering You to Make the Right Move. Property Development, Remodeling & Renovation, Property Maintenance, and Project Management.',
    type: 'website',
    images: [
      {
        url: '/Chapelhill-Company-Logo.png',
        width: 1200,
        height: 630,
        alt: 'Chapelhill Multicompany International Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Chapelhill Multicompany International',
    description:
      'Empowering You to Make the Right Move. Property Development, Remodeling & Renovation, Property Maintenance, and Project Management.',
    images: ['/Chapelhill-Company-Logo.png'],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
