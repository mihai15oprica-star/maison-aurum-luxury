/**
 * Emits one JSON-LD block.
 *
 * Server-rendered into the markup rather than injected on the client: crawlers that
 * do not execute JavaScript are exactly the audience for structured data.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The payload is our own data, not user input, and JSON.stringify escapes the
      // string contents. `<` is the one character that could still close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
