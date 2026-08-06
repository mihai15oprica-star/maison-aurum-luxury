import { membership } from "@/data/site";
import { whatsappHref } from "@/data/contact";

// Thin band at the very top of every destination page (mirror of MADE's
// "MEMBERSHIP REQUEST" strip). Apply → WhatsApp.
export default function MembershipBanner({ destinationName }: { destinationName: string }) {
  const href = whatsappHref(
    `Hello Baboó — I would like to apply for membership (${destinationName}).`
  );
  return (
    <div className="bg-noir-900 text-white">
      <div className="container-luxe flex flex-col items-center justify-center gap-2 py-3 text-center sm:flex-row sm:gap-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold">
          {membership.text}
        </p>
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <p className="font-sans text-[11px] text-white/70">{membership.subtext}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target font-sans text-[10px] uppercase tracking-[0.3em] text-white underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          {membership.ctaLabel}
        </a>
      </div>
    </div>
  );
}
