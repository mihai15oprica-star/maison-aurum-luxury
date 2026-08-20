import type { Partner, DestinationSlug } from "@/data/destinations";
import { DESTINATION_SLUGS } from "@/data/destinations";

/**
 * Whether the partner rosters are real yet.
 *
 * They are not: every entry below is a numbered placeholder with no logo and no link,
 * and a wall of grey tiles reading "IBIZA CLUB 3" tells a visitor the site is
 * unfinished far more loudly than an absent section does. Every component that
 * renders partners checks this flag and omits its section entirely.
 *
 * TBD-3: flip to true in the same commit that lands the real names, logos and links.
 */
export const PARTNERS_PUBLISHED = false;

// Placeholder partner rosters, now PER DESTINATION (Ibiza's clubs ≠ Mykonos's clubs).
// TBD-3: replace with real partners (names, logos, links) for each destination.
function make(prefix: string, n: number): Partner[] {
  return Array.from({ length: n }, (_, i) => ({ name: `${prefix} ${i + 1}`, logo: "" })); // TBD-3
}

export const clubPartnersByDestination: Record<DestinationSlug, Partner[]> = {
  ibiza: make("Ibiza Club", 8),
  mykonos: make("Mykonos Club", 8),
  "saint-tropez": make("St-Tropez Club", 8),
};

export const restaurantPartnersByDestination: Record<DestinationSlug, Partner[]> = {
  ibiza: make("Ibiza Restaurant", 8),
  mykonos: make("Mykonos Restaurant", 8),
  "saint-tropez": make("St-Tropez Restaurant", 8),
};

// Flattened rosters for the global (all-destinations) /clubs and /restaurants pages.
export const clubPartners: Partner[] = DESTINATION_SLUGS.flatMap((s) => clubPartnersByDestination[s]);
export const restaurantPartners: Partner[] = DESTINATION_SLUGS.flatMap((s) => restaurantPartnersByDestination[s]);
