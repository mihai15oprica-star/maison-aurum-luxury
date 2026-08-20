"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { destinationList } from "@/data/destinations";
import { brand } from "@/data/site";
import { cn } from "@/lib/cn";

// The "/" welcome selector. Plain white background (per brief / MADE). Desktop:
// destinations stacked vertically, hovering one reveals its image behind the type.
// Mobile: a compact image-tile grid so all three fit without excessive scroll.
export default function DestinationSelector() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-white pt-24">
      {/* Hover-reveal image layer (desktop). Empty by default → clean white. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <AnimatePresence>
          {active && (
            <motion.div
              key={active}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${destinationList.find((d) => d.slug === active)?.selectorImage})`,
              }}
            />
          )}
        </AnimatePresence>
        {/* The photograph carries at full strength and this veil takes it back down,
            rather than fading the photograph itself: a half-transparent image over
            white washes out its darks and the picture goes grey, while a white veil
            over a full-strength image keeps the contrast and only lightens it. 62%
            is where the three destination names stay comfortably above 4.5:1 on the
            busiest of the three photographs. */}
        <div className={cn("absolute inset-0 transition-colors duration-700", active ? "bg-white/[0.62]" : "bg-white")} />
      </div>

      <div className="container-luxe relative flex min-h-[calc(100svh-6rem)] flex-col justify-center py-16">
        {/* Slogan */}
        <div className="mb-10 text-center md:mb-16">
          <p className="eyebrow mb-5">{brand.name} · {brand.since}</p>
          <h1 className="display-2 mx-auto max-w-3xl text-noir text-balance">
            Where daydreams <span className="italic gold-text">become reality.</span>
          </h1>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.4em] text-noir/50">
            Choose your destination
          </p>
        </div>

        {/* Desktop — vertical stack, hover reveals image */}
        <div className="hidden flex-col items-center md:flex">
          {destinationList.map((d) => {
            const dim = active !== null && active !== d.slug;
            return (
              <Link
                key={d.slug}
                href={`/${d.slug}`}
                onMouseEnter={() => setActive(d.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(d.slug)}
                onBlur={() => setActive(null)}
                className="group py-2"
              >
                <span
                  className={cn(
                    "display-hero block transition-all duration-500",
                    // Dimming the other two used to drop them to 25% — legible on
                    // plain white, invisible once a photograph appears behind them.
                    dim ? "text-noir/45" : "text-noir",
                    active === d.slug && "italic gold-text"
                  )}
                >
                  {d.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile — compact image-tile grid; images static, tap navigates */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {destinationList.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="relative flex h-40 items-end overflow-hidden rounded-[4px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${d.selectorImage})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/20 to-transparent" />
              <div className="relative p-5">
                <span className="block font-serif text-3xl text-white">{d.name}</span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.3em] text-white/80">
                  {d.tagline}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
