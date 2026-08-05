import Link from "next/link";
import type { Listing } from "@/data/listings";

// Single listing card — the WHOLE card links to the detail route (/{category}/{slug}).
// "View" is just a visual affordance, not a separate link.
export default function ListingCard({ listing: l }: { listing: Listing }) {
  return (
    <Link href={`/${l.category}/${l.slug}`} className="group flex h-full flex-col overflow-hidden card-luxe">
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

        <span className="mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          View
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
