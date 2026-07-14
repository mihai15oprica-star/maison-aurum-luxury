import Link from "next/link";
import Reveal from "@/components/Reveal";
import ListingFilters from "@/components/ListingFilters";
import ListingCard from "@/components/ListingCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { destinations, DESTINATION_SLUGS, type DestinationSlug } from "@/data/destinations";
import {
  categoryConfig,
  destinationFilter,
  listingsByCategory,
  type ListingCategory,
} from "@/data/listings";

type SearchParams = Record<string, string | string[] | undefined>;

// Server component: reads the URL query string, filters, and renders the whole page.
// `lockedDestination` scopes the page to one destination (used by /[destination]/[category]):
// the Destination dropdown is dropped and only that destination's listings show.
export default function ListingsView({
  category,
  searchParams,
  lockedDestination,
}: {
  category: ListingCategory;
  searchParams: SearchParams;
  lockedDestination?: DestinationSlug;
}) {
  const cfg = categoryConfig[category];
  // When locked, the destination filter is fixed → show only the category-specific filters.
  const filters = lockedDestination ? cfg.extraFilters : [destinationFilter, ...cfg.extraFilters];

  const get = (k: string) => {
    const v = searchParams[k];
    return typeof v === "string" ? v : undefined;
  };

  const paramDest = get("destination");
  const activeDest = lockedDestination
    ? lockedDestination
    : paramDest && (DESTINATION_SLUGS as string[]).includes(paramDest)
      ? (paramDest as DestinationSlug)
      : undefined;
  const destName = activeDest ? destinations[activeDest].name : undefined;

  const results = listingsByCategory(category).filter((l) => {
    if (lockedDestination && l.destination !== lockedDestination) return false;
    return filters.every((f) => {
      const v = get(f.key);
      if (!v) return true;
      const fieldVal = l[f.field];
      if (f.match === "min") return Number(fieldVal ?? 0) >= Number(v);
      return String(fieldVal ?? "") === v;
    });
  });

  return (
    <>
      {/* Header band */}
      <section className="relative flex h-[52svh] min-h-[380px] w-full items-end overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cfg.hero})` }} aria-hidden="true" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-luxe relative pb-12">
          {lockedDestination ? (
            <Link href={`/${lockedDestination}`} className="eyebrow mb-4 inline-block link-underline">
              ← {destName}
            </Link>
          ) : (
            <p className="eyebrow mb-4">{cfg.eyebrow}</p>
          )}
          <h1 className="display-2 max-w-3xl text-balance text-noir">{cfg.titleFor(destName)}</h1>
          <p className="body-lg mt-5 text-noir/75">{cfg.subtitle}</p>
        </div>
      </section>

      {/* Filters (URL-synced client island) */}
      <ListingFilters filters={filters} current={searchParams} />

      {/* Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-luxe">
          <p className="mb-8 font-sans text-[11px] uppercase tracking-[0.3em] text-noir/45">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {results.map((l, i) => (
                <Reveal key={l.slug} delay={(i % 3) * 0.06}>
                  <ListingCard listing={l} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="border border-pearl bg-cream px-8 py-20 text-center">
              <p className="font-serif text-2xl text-noir">Nothing matches those filters.</p>
              <p className="body-lg mx-auto mt-3">
                Tell us what you have in mind — we source beyond the book every day.
              </p>
              <div className="mt-8 flex justify-center">
                <WhatsAppButton variant="inline" label="Ask the concierge" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-pearl bg-cream py-20">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <h2 className="display-3 max-w-2xl text-balance">
            Can&rsquo;t find it here? <span className="italic gold-text">Just ask.</span>
          </h2>
          <WhatsAppButton variant="inline" label="Contact Us" />
        </div>
      </section>
    </>
  );
}
