import DestinationSelector from "@/components/DestinationSelector";
import JsonLd from "@/components/JsonLd";
import { organisationSchema, websiteSchema } from "@/lib/schema";

// "/" — Welcome / destination selector (Ibiza · Mykonos · Saint Tropez).
// The organisation and website blocks live here, on the one page that is the site
// itself; every other block references them by @id rather than repeating them.
export default function HomePage() {
  return (
    <>
      <JsonLd data={organisationSchema()} />
      <JsonLd data={websiteSchema()} />
      <DestinationSelector />
    </>
  );
}
