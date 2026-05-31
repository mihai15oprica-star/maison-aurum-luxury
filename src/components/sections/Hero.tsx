"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-label="Introduction"
    >
      {/* Full-bleed media */}
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3018669/3018669-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* very subtle wash + bottom scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/15" />
        <div className="absolute inset-0 hero-scrim" />
      </motion.div>

      {/* Foreground — bottom-left */}
      <motion.div
        style={reduce ? undefined : { opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end"
      >
        <div className="w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-20">
          <div className="mx-auto w-full max-w-[1280px]">
            {/* Eyebrow with gold rule */}
            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.35em] text-gold-label mb-8"
            >
              <span aria-hidden className="h-px w-10 bg-gold" />
              Private Concierge · Est. MMXVI
            </motion.p>

            <h1 className="font-serif text-[clamp(72px,8vw,120px)] leading-[0.95] tracking-[-0.02em] text-noir">
              <span className="block">The world&apos;s most</span>
              <span className="block italic">discreet.</span>
            </h1>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-sans text-[18px] leading-[1.8] text-noir max-w-[480px] mt-8"
            >
              From villas in St. Barth to tables in Milan, motorcars in Monaco to yachts off the Cyclades — every wish, answered before it is asked.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/contact" variant="gold">
                Apply for Membership
              </MagneticButton>
              <MagneticButton href="/services">View the House</MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — centered bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-noir/50">
          Scroll
        </span>
        <motion.span
          animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
