"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";
import { RevealLines } from "@/components/Reveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-label="Introduction"
    >
      {/* Parallax video layer */}
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
          poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3018669/3018669-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-noir/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir" />
        <div className="absolute inset-0 bg-noir-vignette" />
      </motion.div>

      {/* Foreground: three rows — eyebrow / centered title block / scroll indicator */}
      <motion.div
        style={reduce ? undefined : { opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col"
      >
        <div className="container-luxe pt-32 md:pt-36 lg:pt-40">
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[11px] font-sans uppercase tracking-[0.2em] text-gold"
          >
            Maison Aurum &nbsp;·&nbsp; Private Concierge &nbsp;·&nbsp; Est. MMXVI
          </motion.p>
        </div>

        <div className="container-luxe flex-1 flex flex-col justify-center py-12">
          <div className="max-w-5xl">
            <h1 className="display-1 text-balance text-ivory">
              <RevealLines text="The world's most" delay={0.3} />
              <br />
              <span className="italic">
                <RevealLines text="discreet" delay={0.5} />{" "}
                <span className="gold-text not-italic">
                  <RevealLines text="address." delay={0.7} />
                </span>
              </span>
            </h1>
            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="body-lg mt-8 md:mt-10 max-w-xl text-ivory/80"
            >
              From villas in St. Barth to tables in Milan, motorcars in Monaco to yachts off the Cyclades — every wish, answered before it is asked.
            </motion.p>
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.35 }}
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-5"
            >
              <MagneticButton href="/contact" variant="gold">
                Apply for Membership
              </MagneticButton>
              <MagneticButton href="/services">View the House</MagneticButton>
            </motion.div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex flex-col items-center gap-3 pb-8 md:pb-10"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/50">
            Scroll
          </span>
          <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 md:h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
