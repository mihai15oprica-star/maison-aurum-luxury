import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { destinations } from "@/data/destinations";
import type { Listing, ListingCategory } from "@/data/listings";

const categoryLabel: Record<ListingCategory, string> = {
  villas: "Villas",
  yachts: "Yachts",
  cars: "Cars",
  "beach-clubs": "Beach Clubs",
};

// Provisional detail page for a listing (TBD-8: page vs. modal — page for now).
export default function ListingDetail({ listing: l }: { listing: Listing }) {
  const dest = destinations[l.destination];
  return (
    <>
      <section className="relative flex h-[70svh] min-h-[460px] w-full items-end overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${l.image})` }} aria-hidden="true" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-luxe relative pb-12">
          {l.badge && (
            <span className="mb-4 inline-block bg-noir-900/80 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-gold backdrop-blur">
              {l.badge}
            </span>
          )}
          <p className="eyebrow mb-3">{dest.name}</p>
          <h1 className="display-1 text-balance text-noir">{l.name}</h1>
          <p className="mt-4 font-sans text-[12px] uppercase tracking-[0.3em] text-noir/55">{l.location}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">— The details</p>
            {/* TBD-2: real per-listing description */}
            <p className="font-serif text-2xl leading-[1.4] text-noir/90 text-balance md:text-3xl">
              {l.name} sits in {l.location}
              {l.distanceToCenter ? ` — ${l.distanceToCenter}` : ""}. Inspected and held by Baboó, arranged around you from arrival to departure.
            </p>
            <p className="body-lg mt-6">
              This is placeholder copy — the full presentation, availability and rates are shared privately once you reach out. Tell us your dates and we&rsquo;ll take care of the rest.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-pearl pt-8">
              {l.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-noir">{s.value}</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-noir/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="card-luxe p-8">
              <p className="eyebrow mb-3">Enquire</p>
              <h2 className="font-serif text-2xl text-noir">Available on request</h2>
              <p className="mt-3 font-sans text-sm text-noir/70">
                A single message. One dedicated concierge. A reply within the day.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  variant="inline"
                  label="Enquire on WhatsApp"
                  message={`Hello Baboó — I'm interested in ${l.name} (${dest.name}).`}
                  className="w-full"
                />
              </div>
            </div>
            <Link
              href={`/${l.category}`}
              className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.3em] text-noir/50 link-underline"
            >
              <span aria-hidden>←</span> Back to {categoryLabel[l.category]}
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
