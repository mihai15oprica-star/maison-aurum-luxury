import type { Metadata } from "next";
import ListingsView from "@/components/ListingsView";

export const metadata: Metadata = {
  title: "Yachts",
  description:
    "Yacht and catamaran charters across Ibiza, Mykonos and Saint Tropez. Day charters and weeks aboard, crewed and arranged end to end by Baboó.",
  // Filters live in the query string and render this same page with a narrowed
  // grid, so every filtered URL points search engines back here.
  alternates: { canonical: "/yachts" },
};

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="yachts" searchParams={searchParams} />;
}
