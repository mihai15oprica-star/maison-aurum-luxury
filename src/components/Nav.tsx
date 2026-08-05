"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { nav, brand, contactHref } from "@/data/site";
import { EMAIL, PHONES, LOCATION, INSTAGRAM_HANDLE } from "@/data/contact";
import { cn } from "@/lib/cn";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <span
        className={cn(
          "font-serif tracking-[0.02em] text-noir",
          compact ? "text-2xl" : "text-[26px] md:text-[30px]"
        )}
      >
        Bab<span className="gold-text">oó</span>
      </span>
      <span className="mt-1 font-sans text-[8px] uppercase tracking-[0.4em] text-[#6B6258]">
        {brand.since}
      </span>
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-white/95 backdrop-blur transition-all duration-500",
          scrolled ? "py-3 shadow-[0_1px_20px_rgba(0,0,0,0.06)]" : "py-4"
        )}
      >
        <nav aria-label="Primary" className="container-luxe grid grid-cols-3 items-center">
          {/* Hamburger — left */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-fit flex-col gap-[5px] p-2 justify-self-start"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="block h-px w-7 bg-noir" />
            <span className="block h-px w-7 bg-noir" />
            <span className="ml-auto block h-px w-5 bg-gold" />
          </button>

          {/* Logo — centre */}
          <Link
            href="/"
            aria-label={`${brand.name}, ${brand.since} — home`}
            className="justify-self-center"
          >
            <Wordmark />
          </Link>

          {/* Contact Us (WhatsApp) — right; floating button covers mobile */}
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden justify-self-end rounded-[6px] bg-noir-900 px-6 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-gold hover:text-noir-900 md:inline-flex"
          >
            Contact Us
          </a>
          <span className="md:hidden" />
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at 0% 0%)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at 0% 0%)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at 0% 0%)" }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[60] bg-white"
          >
            {/*
              Lenis preventDefaults wheel events and scrolls the page itself, so
              body overflow:hidden can't lock it and this panel never receives the
              wheel. Without data-lenis-prevent the menu can't scroll and the items
              below the fold are unreachable on short viewports. It sits on a plain
              div because motion.div filters data attributes out.
            */}
            <div data-lenis-prevent className="h-full overflow-y-auto">
              <div className="container-luxe flex min-h-full flex-col">
                <div className="flex items-center justify-between py-5">
                  <Wordmark compact />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="font-sans text-[11px] uppercase tracking-[0.3em] text-noir transition-colors hover:text-gold"
                    aria-label="Close menu"
                    autoFocus
                  >
                    Close ✕
                  </button>
                </div>
                <div className="hairline" />
                <div className="grid flex-1 gap-12 py-10 md:grid-cols-[1.4fr_1fr] md:py-16">
                  <ul className="flex flex-col gap-0.5 md:gap-1">
                    {nav.map((item, i) => (
                      <motion.li
                        key={item.label}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link href={item.href} className="group flex items-baseline gap-5 py-1.5">
                          <span className="font-sans text-[11px] tracking-[0.3em] text-gold/50">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-4xl text-noir transition-all duration-500 group-hover:italic group-hover:text-gold md:text-6xl">
                            {item.label}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.aside
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.55 }}
                    className="flex flex-col gap-8 self-end"
                  >
                    <a
                      href={contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-[6px] bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-noir-900 transition-colors duration-500 hover:bg-gold-bright"
                    >
                      Contact Us
                    </a>
                    <div>
                      <p className="eyebrow mb-3">Concierge</p>
                      {PHONES.map((p) => (
                        <a
                          key={p.number}
                          href={`tel:${p.number.replace(/\s/g, "")}`}
                          className="block font-serif text-2xl link-underline"
                        >
                          {p.number}
                        </a>
                      ))}
                      <a href={`mailto:${EMAIL}`} className="mt-2 block font-sans text-sm text-noir/70 link-underline">
                        {EMAIL}
                      </a>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Follow</p>
                      <p className="font-serif text-xl text-noir/90">{INSTAGRAM_HANDLE}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Office</p>
                      <p className="font-serif text-lg text-noir/90">{LOCATION}</p>
                    </div>
                  </motion.aside>
                  </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
