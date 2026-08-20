import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ListingDetail from "@/components/ListingDetail";
import { findListing, listingsByCategory } from "@/data/listings";
import { listingMetadata } from "@/lib/listing-meta";

export function generateStaticParams() {
  return listingsByCategory("villas").map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = findListing("villas", params.slug);
  return l ? listingMetadata(l, `/villas/${l.slug}`) : { title: "Villas" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const l = findListing("villas", params.slug);
  if (!l) notFound();
  return <ListingDetail listing={l} />;
}
