"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    const title = document.title || "Page";
    setAnnounce(`Navigated to ${title}`);
    // Move focus to main for a11y
    const main = document.getElementById("main");
    if (main) main.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <div role="status" aria-live="polite" className="sr-only">{announce}</div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
