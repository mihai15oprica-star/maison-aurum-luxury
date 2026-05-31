"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { destinations } from "@/data/site";

export default function DestinationsScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-cream" aria-label="Destinations">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="container-luxe mb-12 md:mb-16">
          <div className="flex items-end justify-between gap-8">
            <Reveal>
              <p className="eyebrow mb-6">— Atlas of the House</p>
              <h2 className="display-2 text-balance">
                Where we <span className="italic gold-text">are.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/destinations" className="link-underline font-sans text-[11px] uppercase tracking-[0.3em] text-noir/70 hover:text-gold">
                View all destinations
              </Link>
            </Reveal>
          </div>
        </div>
        <motion.div
          style={reduce ? undefined : { x }}
          className="flex gap-8 px-6 md:px-20 will-change-transform"
        >
          {destinations.map((d, i) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative shrink-0 w-[80vw] md:w-[60vw] lg:w-[44vw] h-[68vh] overflow-hidden bg-white border border-pearl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${d.cover})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
                <span className="text-gold/80 text-[11px] tracking-[0.4em]">N° {String(i + 1).padStart(2, "0")}</span>
                <span className="text-noir/60 text-[11px] tracking-[0.4em]">{d.coords}</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-noir/60 text-[11px] tracking-[0.4em] uppercase mb-3">{d.country} · {d.season}</p>
                <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-noir group-hover:text-gold transition-colors duration-500">{d.name}</h3>
                <p className="mt-3 font-serif italic text-lg text-noir/70 max-w-md">{d.tagline}</p>
              </div>
            </Link>
          ))}
          <div className="shrink-0 w-[40vw] flex items-center">
            <Link href="/destinations" className="font-serif text-4xl italic text-gold link-underline">
              And forty-one more →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
