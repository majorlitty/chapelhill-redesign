import JsonLd from '@/components/seo/JsonLd';
import { buildHomepageSchema } from '@/lib/seo/schema';
import HomePageClient from '@/components/HomePageClient';

export default function HomePage() {
  const schema = buildHomepageSchema({
    name: 'Property Development & Construction in Nigeria | ChapelHill',
    description:
      'ChapelHill Multicompany Limited provides property development, construction, property management and development partnerships across Nigeria.',
    primaryImagePathOrUrl: '/videos/ivy-frame.jpg',
    primaryImageWidth: 1920,
    primaryImageHeight: 1080,
    primaryImageCaption:
      'ChapelHill Multicompany Limited — Property Development & Construction in Nigeria',
  });

  return (
    <>
      <JsonLd id="chapelhill-identity-jsonld" data={schema} />
      <HomePageClient />
    </>
  );
}
