"use client";
import { useState } from "react";
import Link from "next/link";

// Tabbed info block, mirroring MADE's detail page (Amenities / Services / Where We Are
// / Distances) in our design.
export default function ListingTabs({
  amenities,
  area,
  location,
  distance,
}: {
  amenities: string[];
  area?: string;
  location: string;
  distance?: string;
}) {
  const tabs = [
    { key: "amenities", label: "Amenities" },
    { key: "services", label: "Services" },
    { key: "where", label: "Where We Are" },
    { key: "distances", label: "Distances" },
  ] as const;
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("amenities");

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-pearl">
        {tabs.map((t) => {
          const on = active === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.key)}
              className={`relative pb-4 font-sans text-[11px] uppercase tracking-[0.3em] transition-colors ${
                on ? "text-noir" : "text-noir/40 hover:text-noir/70"
              }`}
            >
              {t.label}
              {on && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gold" />}
            </button>
          );
        })}
      </div>

      <div className="pt-8 md:pt-10">
        {active === "amenities" && (
          <ul className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <li key={a} className="flex items-center gap-3 font-sans text-[15px] text-noir/80">
                <span className="h-px w-4 flex-shrink-0 bg-gold" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        )}

        {active === "services" && (
          <div className="max-w-2xl">
            <p className="body-lg">
              Every stay comes with your dedicated concierge and a full menu of bespoke extra
              services — private chef, transfers, security, babysitting, beauty and more, arranged
              around you.
            </p>
            <Link
              href="/extra-services"
              className="mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold link-underline"
            >
              Explore Extra Services <span aria-hidden>→</span>
            </Link>
          </div>
        )}

        {active === "where" && (
          <div className="max-w-2xl">
            <p className="font-serif text-2xl leading-[1.35] text-noir/90">
              {area ? `${area} — ` : ""}
              {location}.
            </p>
            <p className="body-lg mt-4">
              Your concierge shares the exact location, the neighbourhood and the best of what&rsquo;s
              nearby once your dates are confirmed.
            </p>
          </div>
        )}

        {active === "distances" && (
          <div className="max-w-2xl">
            <p className="font-serif text-2xl leading-[1.35] text-noir/90">
              {distance ?? "Distances on request"}.
            </p>
            <p className="body-lg mt-4">
              Full distances — beach, town, airport and marina — are confirmed with your concierge.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
