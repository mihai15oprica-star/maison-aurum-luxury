"use client";
import { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";
import { cn } from "@/lib/cn";

export default function TiltCard({
  children,
  className,
  max = 8,
  speed = 800,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  speed?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    // Skip tilt on touch/mobile — no hover, and the listeners cost more than they're worth.
    if (reduce || coarse || !ref.current) return;
    VanillaTilt.init(ref.current, {
      max,
      speed,
      glare,
      "max-glare": 0.15,
      perspective: 1200,
      scale: 1.02,
      gyroscope: false,
    });
    const node = ref.current as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };
    return () => node.vanillaTilt?.destroy();
  }, [max, speed, glare]);
  return (
    <div ref={ref} className={cn("transform-gpu will-change-transform", className)}>
      {children}
    </div>
  );
}
