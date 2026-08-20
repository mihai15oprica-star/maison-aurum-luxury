import type { Metadata } from "next";
import ListingsView from "@/components/ListingsView";

export const metadata: Metadata = {
  title: "Villas",
  description:
    "Private villas and estates in Ibiza, Mykonos and Saint Tropez — inspected, photographed and booked through Baboó. Filter by destination, bedrooms and guests.",
  // Filters live in the query string and render this same page with a narrowed
  // grid, so every filtered URL points search engines back here.
  alternates: { canonical: "/villas" },
};

type SearchParams = Record<string, string | string[] | undefined>;

// TBD-4: listings are unified with a Destination filter (recommended). Split per
// destination later if the client insists — the data already carries the slug.
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="villas" searchParams={searchParams} />;
}
