import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ListingDetail from "@/components/ListingDetail";
import { findListing, listingsByCategory } from "@/data/listings";
import { listingMetadata } from "@/lib/listing-meta";

export function generateStaticParams() {
  return listingsByCategory("beach-clubs").map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = findListing("beach-clubs", params.slug);
  return l ? listingMetadata(l, `/beach-clubs/${l.slug}`) : { title: "Beach Clubs" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const l = findListing("beach-clubs", params.slug);
  if (!l) notFound();
  return <ListingDetail listing={l} />;
}
