import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { DESTINATION_SLUGS } from "@/data/destinations";
import { listings } from "@/data/listings";

const CATEGORIES = ["villas", "yachts", "cars", "beach-clubs"] as const;

/**
 * Every indexable URL on the site.
 *
 * Built from the same data the pages are, so a listing added to `listings.ts` or a
 * destination added to `destinations.ts` appears here without a second edit — a
 * hand-maintained list would silently drift the moment inventory changes.
 *
 * Filtered listing URLs (`/villas?destination=ibiza`) are deliberately absent: they
 * are the same page with a narrowed grid, and every one of them canonicals back to
 * the unfiltered route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    ...CATEGORIES.map((c) => ({ url: url(`/${c}`), changeFrequency: "weekly" as const, priority: 0.9 })),
    { url: url("/clubs"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/restaurants"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/extra-services"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.5 },
    { url: url("/imprint"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/privacy"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATION_SLUGS.flatMap((d) => [
    { url: url(`/${d}`), changeFrequency: "weekly" as const, priority: 0.9 },
    ...CATEGORIES.map((c) => ({
      url: url(`/${d}/${c}`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]);

  const listingRoutes: MetadataRoute.Sitemap = listings.map((l) => ({
    url: url(`/${l.category}/${l.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...listingRoutes].map((e) => ({
    lastModified,
    ...e,
  }));
}
