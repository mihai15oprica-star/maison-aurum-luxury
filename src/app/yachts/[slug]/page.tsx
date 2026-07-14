import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ListingDetail from "@/components/ListingDetail";
import { findListing, listingsByCategory } from "@/data/listings";

export function generateStaticParams() {
  return listingsByCategory("yachts").map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = findListing("yachts", params.slug);
  return { title: l ? l.name : "Yachts" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const l = findListing("yachts", params.slug);
  if (!l) notFound();
  return <ListingDetail listing={l} />;
}
