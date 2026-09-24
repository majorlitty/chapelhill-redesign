import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyById, getAllProperties } from '@/lib/propertiesData';
import PropertyDetailsClient from '@/components/PropertyDetailsClient';

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyById(slug);

  if (!property) {
    return {
      title: 'Property Not Found | Chapelhill Private Advisory',
    };
  }

  return {
    title: `${property.name} | Chapelhill Private Real Estate`,
    description: `${property.tagline}. ${property.description} Located at ${property.location}. ${property.financials.startingPrice}.`,
    openGraph: {
      title: `${property.name} | Chapelhill`,
      description: property.description,
      images: [
        {
          url: property.heroImage,
          width: 1200,
          height: 630,
          alt: property.name,
        },
      ],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyById(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailsClient property={property} />;
}
