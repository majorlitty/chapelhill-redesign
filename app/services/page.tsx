import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Property Development & Construction Services | ChapelHill',
  description:
    "Explore ChapelHill's property development, construction, facility management and strategic development partnership services across Nigeria.",
  alternates: {
    canonical: 'https://chapelhill.com.ng/services',
  },
  openGraph: {
    title: 'Property Development & Construction Services | ChapelHill',
    description:
      "Explore ChapelHill's property development, construction, facility management and strategic development partnership services across Nigeria.",
    url: 'https://chapelhill.com.ng/services',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
        width: 1020,
        height: 765,
        alt: 'ChapelHill Multicompany Limited — Property Development & Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Development & Construction Services | ChapelHill',
    description:
      "Explore ChapelHill's property development, construction, facility management and strategic development partnership services across Nigeria.",
    images: [
      '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
    ],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
