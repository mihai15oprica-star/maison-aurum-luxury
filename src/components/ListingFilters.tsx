"use client";
import { useRouter, usePathname } from "next/navigation";
import type { FilterDef } from "@/data/listings";

type Current = Record<string, string | string[] | undefined>;

// Premium filter bar. Reads/writes the URL query string so deep-links land pre-filtered
// and every change is shareable / back-button friendly.
export default function ListingFilters({ filters, current }: { filters: FilterDef[]; current: Current }) {
  const router = useRouter();
  const pathname = usePathname();

  const val = (key: string) => {
    const v = current[key];
    return typeof v === "string" ? v : "";
  };

  const commit = (key: string, value: string) => {
    const params = new URLSearchParams();
    for (const f of filters) {
      const v = f.key === key ? value : val(f.key);
      if (v) params.set(f.key, v);
    }
    const qs = params.toString();
    // push, not replace: replace overwrites the current history entry, so Back
    // skipped every filter state and left the listing page entirely.
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const clearAll = () => router.push(pathname, { scroll: false });
  const activeCount = filters.filter((f) => val(f.key)).length;

  return (
    <div className="container-luxe relative z-20 -mt-10 md:-mt-12">
      <div className="mx-auto max-w-4xl rounded-[10px] border border-pearl bg-white shadow-[0_20px_60px_-20px_rgba(22,19,13,0.28)]">
        <div className="flex flex-col divide-y divide-pearl md:flex-row md:divide-x md:divide-y-0">
          {filters.map((f) => {
            const active = val(f.key);
            return (
              <label
                key={f.key}
                className="group relative flex-1 cursor-pointer px-6 py-4 transition-colors hover:bg-cream/60"
              >
                <span className="mb-1.5 block font-sans text-[10px] uppercase tracking-[0.3em] text-gold-label">
                  {f.label}
                </span>
                <div className="relative">
                  <select
                    value={active}
                    onChange={(e) => commit(f.key, e.target.value)}
                    className="w-full cursor-pointer appearance-none truncate bg-transparent pr-7 font-serif text-lg text-noir focus:outline-none"
                  >
                    <option value="">Any</option>
                    {f.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 12 8"
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 h-2 w-3 -translate-y-1/2 text-gold transition-transform duration-300 group-focus-within:rotate-180"
                  >
                    <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* active-field underline accent */}
                <span
                  className={`absolute inset-x-6 bottom-0 h-px origin-left bg-gold transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </label>
            );
          })}

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="flex items-center justify-center gap-2 px-6 py-4 font-sans text-[10px] uppercase tracking-[0.3em] text-noir/45 transition-colors hover:text-gold md:px-7"
            >
              Clear
              <span aria-hidden className="text-sm leading-none">✕</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
