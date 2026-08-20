import type { Metadata } from "next";
import ListingsView from "@/components/ListingsView";

export const metadata: Metadata = {
  title: "Beach Clubs",
  description:
    "The beach clubs of Ibiza, Mykonos and Saint Tropez. Front-row daybeds and tables that are never available — reserved through Baboó.",
  // Filters live in the query string and render this same page with a narrowed
  // grid, so every filtered URL points search engines back here.
  alternates: { canonical: "/beach-clubs" },
};

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="beach-clubs" searchParams={searchParams} />;
}
