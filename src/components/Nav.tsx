"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { nav, brand } from "@/data/site";
import { cn } from "@/lib/cn";

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

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
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
          "fixed top-0 inset-x-0 z-50 bg-white border-b transition-all duration-500",
          scrolled
            ? "py-3 border-gold/40 shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
            : "py-5 border-gold/40"
        )}
      >
        <nav aria-label="Primary" className="container-luxe grid grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {/* Logo — left, stacked; same-line wordmark + tagline below */}
          <Link
            href="/"
            aria-label="Maison Aurum, established 2016 — home"
            className="group flex flex-col items-start justify-self-start leading-none whitespace-nowrap"
          >
            <span aria-hidden="true" className="flex items-baseline gap-1.5">
              <span className="font-sans text-[13px] font-normal tracking-[0.4em] uppercase text-[#0A0A0A]">
                MAISON
              </span>
              <span className="font-serif text-[22px] italic text-gold">
                Aurum
              </span>
            </span>
            <span aria-hidden="true" className="mt-0.5 font-sans text-[8px] tracking-[0.35em] uppercase text-[#6B6258]">
              Established MMXVI
            </span>
          </Link>

          {/* Nav links — center */}
          <ul className="hidden lg:flex items-center justify-center gap-8">
            {nav.slice(1, -1).map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative font-sans text-[10px] uppercase tracking-[0.3em] transition-colors duration-300",
                      active ? "text-noir" : "text-noir hover:text-noir"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500",
                        active ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* APPLY — right */}
          <div className="flex items-center gap-4 justify-self-end">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center font-sans text-[10px] uppercase tracking-[0.3em] text-white bg-noir-900 rounded-[6px] px-7 py-3.5 hover:bg-gold hover:text-noir-900 transition-colors duration-500"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block w-6 h-px bg-noir" />
              <span className="block w-6 h-px bg-noir" />
              <span className="block w-4 h-px bg-gold ml-auto" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden lg:flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block w-7 h-px bg-noir" />
              <span className="block w-7 h-px bg-noir" />
              <span className="block w-5 h-px bg-gold ml-auto" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at 100% 0%)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="container-luxe min-h-screen flex flex-col">
              <div className="flex items-center justify-between py-6">
                <span className="font-serif text-2xl">
                  MAISON <span className="gold-text">AURUM</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-sans text-[11px] uppercase tracking-[0.3em] text-noir hover:text-gold transition-colors"
                  aria-label="Close menu"
                  autoFocus
                >
                  Close ✕
                </button>
              </div>
              <div className="hairline" />
              <div className="flex-1 grid lg:grid-cols-[1.4fr_1fr] gap-12 py-12 md:py-20">
                <ul className="flex flex-col gap-1 md:gap-2">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.25 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-6 py-2"
                      >
                        <span className="text-gold/50 font-sans text-[11px] tracking-[0.3em]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-5xl md:text-7xl text-noir group-hover:text-gold group-hover:italic transition-all duration-500">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.aside
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-10 self-end"
                >
                  <div>
                    <p className="eyebrow mb-3">Concierge</p>
                    <a href={`tel:${brand.phone}`} className="font-serif text-2xl link-underline">{brand.phone}</a>
                    <br />
                    <a href={`mailto:${brand.email}`} className="font-sans text-sm text-noir/70 link-underline">{brand.email}</a>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Office</p>
                    <p className="font-serif text-xl text-noir/90">{brand.address}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Hours</p>
                    <p className="font-sans text-sm text-noir/70">24 / 7 · 365</p>
                  </div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
