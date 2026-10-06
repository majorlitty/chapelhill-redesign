import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Chapelhill Multicompany International — Property Development, Construction & Maintenance',
  description:
    'Excellence in property development, construction, remodeling, renovation, and maintenance. Meet our executive leadership team and explore our mission, vision, and core capabilities.',
  openGraph: {
    title: 'About Us | Chapelhill Multicompany International',
    description:
      'Excellence in property development, construction, remodeling, renovation, and maintenance. Where Home Meets Happiness.',
    type: 'website',
    images: [
      {
        url: '/Chapelhill-Company-Logo.png',
        width: 1200,
        height: 630,
        alt: 'Chapelhill Multicompany International',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Chapelhill Multicompany International',
    description:
      'Excellence in property development, construction, remodeling, renovation, and maintenance. Where Home Meets Happiness.',
    images: ['/Chapelhill-Company-Logo.png'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
