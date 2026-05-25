"use client";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/site";

export default function StatsBand() {
  return (
    <section className="relative py-24 md:py-32 border-y border-gold/10 bg-noir-900">
      <div className="container-luxe">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:border-l md:border-gold/10 md:first:border-l-0 md:px-8">
              <p className="font-serif text-6xl md:text-7xl lg:text-8xl text-ivory leading-none">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
