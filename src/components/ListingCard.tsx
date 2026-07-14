import Link from "next/link";
import type { Listing } from "@/data/listings";

// Single listing card: image, badge, name, location, distance, quick stats, and a
// "Show More" link to the detail route (/{category}/{slug}). Detail vs. modal is
// TBD-8 — implemented here as a simple dynamic route.
export default function ListingCard({ listing: l }: { listing: Listing }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden card-luxe">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
          style={{ backgroundImage: `url(${l.image})` }}
          aria-hidden="true"
        />
        {l.badge && (
          <span className="absolute left-4 top-4 bg-noir-900/80 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-gold backdrop-blur">
            {l.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-noir transition-colors group-hover:text-gold">{l.name}</h3>
        <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.25em] text-noir/50">{l.location}</p>
        {l.distanceToCenter && (
          <p className="mt-1 font-sans text-xs text-noir/45">{l.distanceToCenter}</p>
        )}

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-pearl pt-4">
          {l.stats.map((s) => (
            <span key={s.label} className="flex items-baseline gap-1.5">
              <span className="font-serif text-base text-noir">{s.value}</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-noir/45">{s.label}</span>
            </span>
          ))}
        </div>

        <Link
          href={`/${l.category}/${l.slug}`}
          className="mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold link-underline"
        >
          Show More <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
