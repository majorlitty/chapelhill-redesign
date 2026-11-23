import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyById, getAllProperties } from '@/lib/propertiesData';
import { getProjectSeoMetadata } from '@/lib/projectSeoMetadata';
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
      title: 'Property Not Found | ChapelHill',
    };
  }

  const seo = getProjectSeoMetadata(property);
  const canonicalUrl = `https://chapelhill.com.ng/projects/${property.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: 'ChapelHill Multicompany Limited',
      type: 'website',
      images: [
        {
          url: property.heroImage,
          width: seo.imageWidth,
          height: seo.imageHeight,
          alt: property.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [property.heroImage],
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
