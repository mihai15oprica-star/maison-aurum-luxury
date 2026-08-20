import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { listings, listingsByCategory, findListing, listingAlt } from "@/data/listings";
import { DESTINATION_SLUGS, destinations } from "@/data/destinations";
import sitemap from "@/app/sitemap";

const CATEGORIES = ["villas", "yachts", "cars", "beach-clubs"] as const;

describe("listing data", () => {
  it("has the inventory the client signed off", () => {
    expect(listingsByCategory("villas")).toHaveLength(30);
    expect(listingsByCategory("yachts")).toHaveLength(14);
    expect(listingsByCategory("cars")).toHaveLength(6);
    expect(listingsByCategory("beach-clubs")).toHaveLength(6);
  });

  it("has no duplicate slugs", () => {
    // Slugs are the URLs. A duplicate silently shadows a listing at build time
    // rather than failing, so the page simply renders the wrong property.
    const slugs = listings.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("points every listing at a destination that exists", () => {
    for (const l of listings) {
      expect(DESTINATION_SLUGS).toContain(l.destination);
    }
  });

  it("resolves every listing through findListing, and nothing else", () => {
    for (const l of listings) {
      expect(findListing(l.category, l.slug)?.name).toBe(l.name);
    }
    expect(findListing("villas", "no-such-villa")).toBeUndefined();
    // Slugs are only unique per category in the URL space, so a villa must not be
    // reachable under /yachts.
    expect(findListing("yachts", listingsByCategory("villas")[0].slug)).toBeUndefined();
  });

  it("gives every photo alt text that names the subject", () => {
    for (const l of listings) {
      const alt = listingAlt(l);
      expect(alt).toContain(l.name);
      expect(alt.length).toBeGreaterThan(l.name.length);
    }
  });

  it("has the self-hosted photo on disk for every listing that claims one", () => {
    // Cars and beach clubs still point at stock URLs (see docs/foto-brief.md); a
    // local path that does not exist would render as a broken image in production.
    const missing = listings
      .filter((l) => l.image.startsWith("/"))
      .filter((l) => !existsSync(path.join(process.cwd(), "public", l.image)))
      .map((l) => l.image);
    expect(missing).toEqual([]);
  });
});

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("lists every listing detail page", () => {
    for (const l of listings) {
      expect(urls.some((u) => u.endsWith(`/${l.category}/${l.slug}`))).toBe(true);
    }
  });

  it("lists every destination and destination-category page", () => {
    for (const d of DESTINATION_SLUGS) {
      expect(urls.some((u) => u.endsWith(`/${d}`))).toBe(true);
      for (const c of CATEGORIES) {
        expect(urls.some((u) => u.endsWith(`/${d}/${c}`))).toBe(true);
      }
    }
  });

  it("carries no duplicates and no query strings", () => {
    expect(new Set(urls).size).toBe(urls.length);
    // Filtered URLs are the same document with a narrowed grid; they canonical back
    // to the unfiltered route and must not be offered to crawlers as separate pages.
    expect(urls.filter((u) => u.includes("?"))).toEqual([]);
  });

  it("covers every destination defined in the data", () => {
    expect(Object.keys(destinations).sort()).toEqual([...DESTINATION_SLUGS].sort());
  });
});
