import type { MetadataRoute } from 'next';
import { getAllProperties } from '@/lib/propertiesData';

const CANONICAL_BASE_URL = 'https://chapelhill.com.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${CANONICAL_BASE_URL}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${CANONICAL_BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CANONICAL_BASE_URL}/services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CANONICAL_BASE_URL}/projects`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = getAllProperties().map((property) => ({
    url: `${CANONICAL_BASE_URL}/projects/${property.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
