"use client";
import { ReactNode } from "react";
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
}: Props) {
  const klass = cn(variant === "gold" ? "btn-gold" : "btn-luxe", "relative", className);

  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="inline-block">→</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={klass}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={klass}>
      {inner}
    </button>
  );
}
