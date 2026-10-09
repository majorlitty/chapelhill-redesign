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
      title: 'Project Not Found | Chapelhill Multicompany International',
    };
  }

  return {
    title: `${project.name} | Chapelhill Multicompany International`,
    description: `${project.tagline}. ${project.description} Located at ${project.location}.`,
    openGraph: {
      title: `${project.name} | Chapelhill Developments`,
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
      title: `${project.name} | Chapelhill`,
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
