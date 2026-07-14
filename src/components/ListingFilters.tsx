"use client";
import { useRouter, usePathname } from "next/navigation";
import type { FilterDef } from "@/data/listings";

type Current = Record<string, string | string[] | undefined>;

// Client island for the listing filters. The page is server-rendered from the URL's
// query string; this component only *writes* to that query string (router.replace),
// which re-renders the server component with the new filter set. Deep-links from the
// destination pages (?destination=ibiza) therefore land pre-filtered and SSR'd.
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
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const clearAll = () => router.replace(pathname, { scroll: false });
  const activeCount = filters.filter((f) => val(f.key)).length;

  return (
    <div className="border-y border-pearl bg-cream">
      <div className="container-luxe flex flex-wrap items-end gap-x-6 gap-y-5 py-6">
        {filters.map((f) => (
          <label key={f.key} className="flex flex-col gap-1.5">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-label">{f.label}</span>
            <select
              value={val(f.key)}
              onChange={(e) => commit(f.key, e.target.value)}
              className="min-w-[9rem] rounded-[4px] border border-pearl bg-white px-3 py-2.5 font-sans text-sm text-noir focus-visible:border-gold"
            >
              <option value="">All {f.label.toLowerCase()}</option>
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        ))}

        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto self-center font-sans text-[10px] uppercase tracking-[0.3em] text-noir/50 underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
          >
            Clear ({activeCount})
          </button>
        )}
      </div>
    </div>
  );
}
