import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyById, getAllProperties } from '@/lib/propertiesData';
import { getProjectSeoMetadata } from '@/lib/projectSeoMetadata';
import ProjectOverviewClient from '@/components/ProjectOverviewClient';
import JsonLd from '@/components/seo/JsonLd';
import { buildProjectWebPageSchema } from '@/lib/seo/schema';

interface ProjectPageProps {
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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPropertyById(slug);

  if (!project) {
    return {
      title: 'Project Not Found | ChapelHill',
    };
  }

  const seo = getProjectSeoMetadata(project);
  const canonicalUrl = `https://chapelhill.com.ng/projects/${project.slug}`;

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
          url: project.heroImage,
          width: seo.imageWidth,
          height: seo.imageHeight,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectOverviewPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPropertyById(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id="chapelhill-page-jsonld"
        data={buildProjectWebPageSchema(project)}
      />
      <ProjectOverviewClient project={project} />
    </>
  );
}
