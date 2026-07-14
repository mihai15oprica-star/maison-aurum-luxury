"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { RevealLines } from "@/components/Reveal";

type Props = {
  headline: string; // TBD-2
  image: string; // TBD-6
  cta: { label: string; href: string };
};

// Destination hero: full-bleed image, big headline, primary CTA (e.g. "Our Villas"
// → /villas?destination=slug).
export default function DestinationHero({ headline, image, cta }: Props) {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[90svh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        initial={reduce ? { opacity: 0 } : { scale: 1.14, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-white/15" />
        <div className="absolute inset-0 hero-scrim" />
      </motion.div>

      <div className="container-luxe relative flex h-full flex-col justify-end pb-20">
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow mb-6"
        >
          — Baboó Concierge
        </motion.p>
        <h1 className="display-1 max-w-4xl text-balance text-noir">
          <RevealLines text={headline} delay={0.5} />
        </h1>
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-3 rounded-[6px] bg-noir-900 px-8 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-gold hover:text-noir-900"
          >
            {cta.label}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
