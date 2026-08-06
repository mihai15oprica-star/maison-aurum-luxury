import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import ListingTabs from "@/components/ListingTabs";
import { destinations } from "@/data/destinations";
import { SOCIALS, INSTAGRAM_HANDLE, whatsappHref, isRealHref } from "@/data/contact";
import { listingAlt, type Listing, type ListingCategory } from "@/data/listings";

const categoryLabel: Record<ListingCategory, string> = {
  villas: "Villas",
  yachts: "Yachts",
  cars: "Cars",
  "beach-clubs": "Beach Clubs",
};

// Representative amenities per category (real per-listing amenities are TBD-3).
const typicalAmenities: Record<ListingCategory, string[]> = {
  villas: ["Private pool", "Air-conditioning", "High-speed Wi-Fi", "Fully-equipped kitchen", "Daily housekeeping (on request)", "Private parking", "Sound system", "Dedicated concierge", "Sun terrace"],
  yachts: ["Professional crew", "Water toys & tender", "Al fresco dining", "Sun deck & loungers", "High-speed Wi-Fi", "Premium sound system", "Fully-equipped galley", "Dedicated concierge"],
  cars: ["Delivered valeted & fuelled", "Full insurance included", "Chauffeur (on request)", "Cross-border delivery", "24/7 roadside support", "Dedicated concierge"],
  "beach-clubs": ["Front-row daybeds", "Reserved tables", "Sunset DJ sets", "Food & beverage service", "Priority entry", "Dedicated concierge"],
};

// IG + WhatsApp glyphs for the hero (small).
const IG_PATH = "M12 8.9A3.1 3.1 0 1 0 15.1 12 3.1 3.1 0 0 0 12 8.9Zm0 5.1A2 2 0 1 1 14 12a2 2 0 0 1-2 2Zm3.2-5.3a.72.72 0 1 0 .72.72.72.72 0 0 0-.72-.72ZM12 5.6c1.95 0 2.18 0 2.95.05a4 4 0 0 1 1.36.25 2.4 2.4 0 0 1 1.38 1.38 4 4 0 0 1 .25 1.36c.04.77.05 1 .05 2.95s0 2.18-.05 2.95a4 4 0 0 1-.25 1.36 2.4 2.4 0 0 1-1.38 1.38 4 4 0 0 1-1.36.25c-.77.04-1 .05-2.95.05s-2.18 0-2.95-.05a4 4 0 0 1-1.36-.25 2.4 2.4 0 0 1-1.38-1.38 4 4 0 0 1-.25-1.36C5.6 14.18 5.6 13.95 5.6 12s0-2.18.05-2.95a4 4 0 0 1 .25-1.36A2.4 2.4 0 0 1 7.28 6.3a4 4 0 0 1 1.36-.25C9.42 5.6 9.65 5.6 12 5.6m0-1.3c-2 0-2.24 0-3.02.05a5.3 5.3 0 0 0-1.78.34A3.7 3.7 0 0 0 5.09 7.2a5.3 5.3 0 0 0-.34 1.78C4.7 9.76 4.7 10 4.7 12s0 2.24.05 3.02a5.3 5.3 0 0 0 .34 1.78 3.7 3.7 0 0 0 2.11 2.11 5.3 5.3 0 0 0 1.78.34c.78.05 1.02.05 3.02.05s2.24 0 3.02-.05a5.3 5.3 0 0 0 1.78-.34 3.7 3.7 0 0 0 2.11-2.11 5.3 5.3 0 0 0 .34-1.78c.05-.78.05-1.02.05-3.02s0-2.24-.05-3.02a5.3 5.3 0 0 0-.34-1.78 3.7 3.7 0 0 0-2.11-2.11 5.3 5.3 0 0 0-1.78-.34C14.24 4.3 14 4.3 12 4.3Z";
const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885";

export default function ListingDetail({ listing: l }: { listing: Listing }) {
  const dest = destinations[l.destination];
  const enquireMsg = `Hello Baboó — I'm interested in ${l.name} (${dest.name}).`;

  return (
    <>
      {/* ---- HERO ---- */}
      <section className="relative flex h-[82svh] min-h-[520px] w-full items-end overflow-hidden pt-16">
        {/* The hero photo is this page's LCP element, so it loads eagerly at full
            viewport width rather than being lazy-loaded behind the scrim. */}
        <Image
          src={l.image}
          alt={listingAlt(l)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-luxe relative pb-14">
          {l.badge && (
            <span className="mb-4 inline-block bg-noir-900/80 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-gold backdrop-blur">
              {l.badge}
            </span>
          )}
          <p className="eyebrow mb-3">{dest.name}</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="display-1 text-balance text-noir">{l.name}</h1>
              <p className="mt-4 font-sans text-[12px] uppercase tracking-[0.3em] text-noir/60">
                {l.location}
                {l.distanceToCenter ? <span className="text-noir/40"> · {l.distanceToCenter}</span> : null}
              </p>
            </div>
            {/* social / contact icons, like MADE */}
            <div className="flex items-center gap-3">
              {/* Not a link until TBD-5 supplies the profile URL — see isRealHref. */}
              {isRealHref(SOCIALS.instagram) ? (
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Baboó on Instagram ${INSTAGRAM_HANDLE}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-noir/20 text-noir/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4"><path d={IG_PATH} /></svg>
                </a>
              ) : (
                <span
                  role="img"
                  aria-label={`Baboó on Instagram ${INSTAGRAM_HANDLE}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-noir/20 text-noir/70"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4"><path d={IG_PATH} /></svg>
                </span>
              )}
              <a
                href={whatsappHref(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-noir/20 text-noir/70 transition-colors hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4"><path d={WA_PATH} /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- STAT ROW ---- */}
      <section className="border-b border-pearl bg-cream">
        <div className="container-luxe flex flex-wrap items-center gap-y-6 py-8">
          {l.stats.map((s, i) => (
            <div key={s.label} className={`px-8 first:pl-0 ${i > 0 ? "md:border-l md:border-pearl" : ""}`}>
              <p className="font-serif text-3xl leading-none text-noir">{s.value}</p>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-noir/45">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- OVERVIEW + TABS ---- */}
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">— Overview</p>
            <p className="font-serif text-2xl leading-[1.4] text-noir/90 text-balance md:text-[2rem]">
              {l.name} in {l.location}
              {l.distanceToCenter ? ` — ${l.distanceToCenter}` : ""}. {/* TBD-2: real per-listing description */}
              Inspected and held by Baboó, arranged around you from arrival to departure.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <ListingTabs
              amenities={typicalAmenities[l.category]}
              area={l.area}
              location={l.location}
              distance={l.distanceToCenter}
            />
          </div>
        </div>
      </section>

      {/* ---- CONCIERGE CTA ---- */}
      <section className="border-y border-pearl bg-cream py-20 md:py-24">
        <div className="container-luxe grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">— Your personal luxury concierge</p>
            <h2 className="display-3 text-balance">
              Available on request. <span className="italic gold-text">Confirmed within the day.</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="body-lg mb-6">
              A single message to your dedicated concierge. Availability, rates and the full
              presentation of {l.name} follow immediately.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <WhatsAppButton variant="inline" label="Enquire on WhatsApp" message={enquireMsg} />
              <Link
                href={`/${l.category}`}
                className="tap-target inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.3em] text-noir/50 link-underline"
              >
                <span aria-hidden>←</span> Back to {categoryLabel[l.category]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
