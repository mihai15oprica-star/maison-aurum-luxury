import type { Metadata } from "next";
import { destinationList } from "@/data/destinations";
import { listingAlt, type Listing, type ListingCategory } from "@/data/listings";

const KIND: Record<ListingCategory, string> = {
  villas: "Private villa",
  yachts: "Yacht charter",
  cars: "Car hire",
  "beach-clubs": "Beach club",
};

/**
 * Search and social metadata for one listing page.
 *
 * The description is assembled from the listing's own stats rather than a generic
 * sentence, so the 56 detail pages do not all read identically in a results page.
 * The lead photo becomes the Open Graph image: these links are shared over WhatsApp
 * more than anywhere else, and a card with the actual villa in it is the product.
 */
export function listingMetadata(l: Listing, path: string): Metadata {
  const destination = destinationList.find((d) => d.slug === l.destination)?.name ?? "";
  const specs = l.stats.map((s) => `${s.label}: ${s.value}`).join(" · ");
  const description = `${KIND[l.category]} in ${destination}. ${l.name} — ${l.location}. ${specs}. Booked through Baboó, your concierge across Ibiza, Mykonos and Saint Tropez.`;

  return {
    title: l.name,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${l.name} · Baboó`,
      description,
      type: "website",
      url: path,
      images: [{ url: l.image, alt: listingAlt(l) }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${l.name} · Baboó`,
      description,
      images: [l.image],
    },
  };
}
