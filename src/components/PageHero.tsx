"use client";
import { motion, useReducedMotion } from "framer-motion";
import { RevealLines } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  align?: "center" | "left";
};

export default function PageHero({ eyebrow, title, subtitle, image, align = "left" }: Props) {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        initial={reduce ? { opacity: 0 } : { scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-noir/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir" />
      </motion.div>
      <div className={`relative h-full container-luxe flex flex-col justify-end pb-20 ${align === "center" ? "items-center text-center" : ""}`}>
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="eyebrow mb-8"
        >
          {eyebrow}
        </motion.p>
        <h1 className="display-1 max-w-5xl text-balance">
          {typeof title === "string" ? <RevealLines text={title} delay={0.6} /> : title}
        </h1>
        {subtitle && (
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="body-lg mt-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
