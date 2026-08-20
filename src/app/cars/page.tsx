import type { Metadata } from "next";
import ListingsView from "@/components/ListingsView";

// Decision: Cars is a real listing page (not a PDF, unlike MADE).
export const metadata: Metadata = {
  title: "Cars",
  description:
    "Luxury car hire in Ibiza, Mykonos and Saint Tropez — supercars, convertibles and 4x4s delivered to your villa, yacht or airport by Baboó.",
  // Filters live in the query string and render this same page with a narrowed
  // grid, so every filtered URL points search engines back here.
  alternates: { canonical: "/cars" },
};

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="cars" searchParams={searchParams} />;
}
