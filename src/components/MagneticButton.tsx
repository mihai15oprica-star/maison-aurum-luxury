"use client";
import { useRef, useState, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "outline" | "gold";
  strength?: number;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "outline",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [focused, setFocused] = useState(false);

  const onMove = (e: MouseEvent) => {
    if (focused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * strength, y: y * strength });
  };

  const reset = () => setT({ x: 0, y: 0 });
  const klass = cn(variant === "gold" ? "btn-gold" : "btn-luxe", className);
  const style = { transform: `translate(${t.x}px, ${t.y}px)`, transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)" };

  const inner = (
    <>
      <span data-magnetic>{children}</span>
      <span aria-hidden="true" className="inline-block">→</span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={klass}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); reset(); }}
        style={style}
        data-magnetic
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={klass}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onFocus={() => setFocused(true)}
      onBlur={() => { setFocused(false); reset(); }}
      style={style}
      data-magnetic
    >
      {inner}
    </button>
  );
}
