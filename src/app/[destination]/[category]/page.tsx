import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, DESTINATION_SLUGS, type DestinationSlug } from "@/data/destinations";
import ListingsView from "@/components/ListingsView";
import PartnerPageLayout from "@/components/PartnerPageLayout";
import ExtraServicesSection from "@/components/ExtraServicesSection";
import { clubPartnersByDestination, restaurantPartnersByDestination } from "@/data/partners";
import type { ListingCategory } from "@/data/listings";

const LISTING_CATEGORIES = ["villas", "yachts", "cars", "beach-clubs"] as const;
const ALL_CATEGORIES = [...LISTING_CATEGORIES, "clubs", "restaurants", "extra-services"] as const;
type Category = (typeof ALL_CATEGORIES)[number];

type Params = { destination: string; category: string };
type SearchParams = Record<string, string | string[] | undefined>;

function resolve(destination: string, category: string): { dest: DestinationSlug; cat: Category } | null {
  if (!(DESTINATION_SLUGS as string[]).includes(destination)) return null;
  if (!(ALL_CATEGORIES as readonly string[]).includes(category)) return null;
  return { dest: destination as DestinationSlug, cat: category as Category };
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const v = resolve(params.destination, params.category);
  if (!v) return {};
  const label = params.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `${destinations[v.dest].name} — ${label}` };
}

export default function Page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const v = resolve(params.destination, params.category);
  if (!v) notFound();
  const { dest, cat } = v;
  const d = destinations[dest];
  const back = { href: `/${dest}`, label: d.name };

  if ((LISTING_CATEGORIES as readonly string[]).includes(cat)) {
    return (
      <ListingsView category={cat as ListingCategory} searchParams={searchParams} lockedDestination={dest} />
    );
  }

  if (cat === "clubs") {
    return (
      <PartnerPageLayout
        eyebrow="— Clubs"
        title={`${d.name} Clubs`}
        subtitle="Our trusted partners for every night worth remembering — guaranteed entry, the right table, and never the queue." /* TBD-2 */
        cta="Book your night with us"
        partners={clubPartnersByDestination[dest]}
        image="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80" /* TBD-6 */
        back={back}
      />
    );
  }

  if (cat === "restaurants") {
    return (
      <PartnerPageLayout
        eyebrow="— Restaurants"
        title={`${d.name} Restaurants`}
        subtitle="Our trusted partners for every table — from beachfront lunches to the reservations that vanish by June." /* TBD-2 */
        cta="Book your table with us"
        partners={restaurantPartnersByDestination[dest]}
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" /* TBD-6 */
        back={back}
      />
    );
  }

  // extra-services
  return <ExtraServicesSection destinationName={d.name} back={back} />;
}
