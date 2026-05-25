"use client";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function CTA({
  eyebrow = "— The first introduction",
  heading,
  body,
  primary = { label: "Begin a conversation", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-32 md:py-48 bg-noir overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gold/5 blur-[160px]" />
      </div>
      <div className="container-luxe text-center max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-8">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="display-1 text-balance">{heading}</h2>
        </Reveal>
        {body && (
          <Reveal delay={0.3}>
            <p className="body-lg mt-10 max-w-2xl mx-auto">{body}</p>
          </Reveal>
        )}
        <Reveal delay={0.45}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <MagneticButton href={primary.href} variant="gold">{primary.label}</MagneticButton>
            {secondary && <MagneticButton href={secondary.href}>{secondary.label}</MagneticButton>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
