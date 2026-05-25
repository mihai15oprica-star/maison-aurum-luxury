"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { services } from "@/data/site";

export default function ServicesGrid() {
  return (
    <section className="relative py-32 md:py-48 bg-noir-900">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">— Service No. 01–06</p>
              <h2 className="display-2 text-balance">
                Six pillars. <br />
                <span className="italic gold-text">One standard.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <Reveal delay={0.2}>
              <p className="body-lg">
                Each chapter of the House operates as its own atelier, staffed by specialists with two decades in their territory — the sommelier who knows the cellarmaster, the broker who knows the owner, the captain who knows the harbour.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <TiltCard className="h-full">
                <Link
                  href={`/${s.slug}`}
                  className="group relative block h-[440px] overflow-hidden bg-noir-700 border border-gold/10 hover:border-gold/40 transition-colors duration-500"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.cover})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="flex items-start justify-between">
                      <span className="text-gold/70 text-xs tracking-[0.4em]">N° 0{i + 1}</span>
                      <span className="text-gold text-2xl">{s.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-3 group-hover:text-gold transition-colors duration-500">
                        {s.title}
                      </h3>
                      <p className="font-sans text-sm text-ivory/70 leading-relaxed line-clamp-3 max-w-xs">{s.blurb}</p>
                      <span className="mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
                        Discover
                        <span className="block h-px w-8 bg-gold group-hover:w-14 transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
