"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Native scroll on touch/mobile — Lenis rAF is costly there and fights momentum scroll.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.085,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Bring focused offscreen elements into view (a11y)
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        lenis.scrollTo(target, { offset: -120, duration: 0.6 });
      }
    };
    document.addEventListener("focusin", onFocusIn);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("focusin", onFocusIn);
      lenis.destroy();
    };
  }, []);
  return null;
}
