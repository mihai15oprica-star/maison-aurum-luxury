import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ListingDetail from "@/components/ListingDetail";
import { findListing, listingsByCategory } from "@/data/listings";
import { listingMetadata } from "@/lib/listing-meta";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, listingSchema } from "@/lib/schema";

export function generateStaticParams() {
  return listingsByCategory("yachts").map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = findListing("yachts", params.slug);
  return l ? listingMetadata(l, `/yachts/${l.slug}`) : { title: "Yachts" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const l = findListing("yachts", params.slug);
  if (!l) notFound();
  const path = `/yachts/${l.slug}`;
  return (
    <>
      <JsonLd data={listingSchema(l, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Yachts", path: "/yachts" },
          { name: l.name, path },
        ])}
      />
      <ListingDetail listing={l} />
    </>
  );
}
