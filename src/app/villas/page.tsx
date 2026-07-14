import ListingsView from "@/components/ListingsView";

export const metadata = { title: "Villas" };

type SearchParams = Record<string, string | string[] | undefined>;

// TBD-4: listings are unified with a Destination filter (recommended). Split per
// destination later if the client insists — the data already carries the slug.
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="villas" searchParams={searchParams} />;
}
