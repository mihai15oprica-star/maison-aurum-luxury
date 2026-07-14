import type { Partner, DestinationSlug } from "@/data/destinations";
import { DESTINATION_SLUGS } from "@/data/destinations";

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
