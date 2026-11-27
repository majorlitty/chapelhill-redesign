import { serializeJsonLd, type JsonLdInput } from '@/lib/seo/schema';

export interface JsonLdProps {
  /**
   * Strongly typed Schema.org JSON-LD document or `@graph` payload.
   */
  readonly data: JsonLdInput;
  /**
   * Optional DOM `id` attribute for the `<script>` tag.
   */
  readonly id?: string;
}

/**
 * Server-rendered JSON-LD `<script type="application/ld+json">` component.
 * Emits directly in initial SSR HTML without client hydration delays,
 * `useEffect`, or browser-only APIs, and escapes `<` for safe serialization.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  const serialized = serializeJsonLd(data);

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}

export default JsonLd;
