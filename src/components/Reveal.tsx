"use client";
import { motion, useInView, useReducedMotion, type MotionProps } from "framer-motion";
import { useRef, ReactNode, ComponentType } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p" | "section";
  once?: boolean;
};

export default function Reveal({ children, delay = 0, y = 40, className, as = "div", once = true }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as ComponentType<MotionProps & { ref?: React.Ref<HTMLElement>; className?: string; children?: ReactNode }>;

  return (
    <MotionTag
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : undefined}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function RevealLines({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={reduce ? { y: 0, opacity: 0 } : { y: "100%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 1, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
