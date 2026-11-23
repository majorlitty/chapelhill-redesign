import type { Property } from '@/lib/propertiesData';

export interface ProjectSeoEntry {
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const PROJECT_SEO_BY_SLUG: Record<string, ProjectSeoEntry> = {
  'lekki-phase-1-project': {
    title: 'IVY Heights Ikate, Lekki Phase 1 | 2 & 3 Bed Apartments',
    description:
      'Explore IVY Heights, a residential development featuring 2- and 3-bedroom apartments in Ikate, Lekki Phase 1, Lagos, by ChapelHill.',
    imageWidth: 1536,
    imageHeight: 1024,
  },
  'ivy-homes-abijo': {
    title: 'Ivy Homes Abijo GRA, Lekki | 1, 2 & 3 Bed Finished Flats',
    description:
      'Explore Ivy Homes Abijo GRA, featuring 1-, 2- and 3-bedroom apartments in Lekki, Lagos, with fitted kitchens and solar-backed power.',
    imageWidth: 2160,
    imageHeight: 3840,
  },
  'ogudu-gra-project': {
    title: 'IVY Homes, Ogudu GRA | 5-Bedroom Penthouse (Sold Out)',
    description:
      'Discover IVY Homes in Ogudu GRA, Lagos, a residential development featuring a 5-bedroom penthouse by ChapelHill Multicompany Limited.',
    imageWidth: 2160,
    imageHeight: 3840,
  },
  'royal-garden-5-bed-duplex-1': {
    title: 'Royal Gardens 5-Bed Duplex & BQ Phase 1 | Lekki-Ajah',
    description:
      'Explore a 5-bedroom detached duplex with BQ in Royal Gardens Estate, Lekki-Ajah, Lagos, featuring a double-volume living area and fitted kitchen.',
    imageWidth: 810,
    imageHeight: 1080,
  },
  'royal-garden-5-bed-duplex-2': {
    title: 'Royal Gardens 5-Bed Duplex & BQ Phase 2 | Lekki-Ajah',
    description:
      'Discover Royal Gardens Phase 2, a contemporary 5-bedroom detached duplex with BQ and dual lounges in Lekki-Ajah, Lagos.',
    imageWidth: 828,
    imageHeight: 1029,
  },
  'beachwood-lagos': {
    title: 'Beachwood Lagos 5-Bed Semi-Detached Duplex | Ibeju-Lekki',
    description:
      'Ongoing direct-client 5-bedroom semi-detached duplex in Beachwood Estate, Ibeju-Lekki, Lagos with rooftop terrace, dedicated borehole, and 24/7 power.',
    imageWidth: 1080,
    imageHeight: 607,
  },
};

export function getProjectSeoMetadata(property: Property): ProjectSeoEntry {
  const entry = PROJECT_SEO_BY_SLUG[property.slug];
  if (entry) {
    return entry;
  }

  return {
    title: `${property.name} | ChapelHill`,
    description: `${property.description} Located at ${property.location}.`.slice(0, 160),
    imageWidth: 1200,
    imageHeight: 630,
  };
}
