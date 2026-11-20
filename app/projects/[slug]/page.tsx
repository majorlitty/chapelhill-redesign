import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyById, getAllProperties } from '@/lib/propertiesData';
import ProjectOverviewClient from '@/components/ProjectOverviewClient';

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
      title: 'Project Not Found | ChapelHill Multicompany Limited',
    };
  }

  return {
    title: `${project.name} | ChapelHill Multicompany Limited`,
    description: `${project.tagline}. ${project.description} Located at ${project.location}.`,
    alternates: {
      canonical: `https://chapelhill.com.ng/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | ChapelHill Multicompany Limited`,
      description: project.description,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | ChapelHill Multicompany Limited`,
      description: project.description,
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

  return <ProjectOverviewClient project={project} />;
}
