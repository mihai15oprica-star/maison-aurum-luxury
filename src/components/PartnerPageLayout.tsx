import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PARTNERS_PUBLISHED } from "@/data/partners";
import type { Partner } from "@/data/destinations";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string; // TBD-2 copy
  cta: string; // e.g. "BOOK YOUR TABLE WITH US"
  partners: Partner[]; // TBD-3
  image: string; // TBD-6
  back?: { href: string; label: string }; // scoped pages link back to the destination
};

// Shared layout for /clubs and /restaurants (mirror of MADE's /clubs page):
// title, subtitle, prominent CTA → WhatsApp, and a grid of partner logos.
export default function PartnerPageLayout({ eyebrow, title, subtitle, cta, partners, image, back }: Props) {
  return (
    <>
      <section className="relative flex h-[56svh] min-h-[420px] w-full items-end overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-luxe relative pb-12">
          {back ? (
            <Link href={back.href} className="eyebrow mb-4 inline-block link-underline">
              ← {back.label}
            </Link>
          ) : (
            <p className="eyebrow mb-4">{eyebrow}</p>
          )}
          <h1 className="display-1 max-w-3xl text-balance text-noir">{title}</h1>
          <p className="body-lg mt-5 text-noir/75">{subtitle}</p>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-y border-pearl bg-cream py-16 md:py-20">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <h2 className="display-3 max-w-2xl text-balance uppercase tracking-[0.02em]">{cta}</h2>
          <WhatsAppButton variant="inline" label="Contact Us" />
        </div>
      </section>

      {/* Partner grid — hidden until the real roster lands (PARTNERS_PUBLISHED). */}
      {PARTNERS_PUBLISHED && (
        <section className="py-20 md:py-28">
          <div className="container-luxe">
            <Reveal>
              <p className="eyebrow mb-10">— Our trusted partners</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {partners.map((p, i) => (
                <Reveal key={i} delay={(i % 4) * 0.05}>
                  <div className="flex aspect-[3/2] items-center justify-center rounded-[3px] border border-pearl bg-cream">
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.logo} alt={p.name} className="max-h-12 max-w-[70%] object-contain opacity-80" />
                    ) : (
                      <span className="px-2 text-center font-sans text-[11px] uppercase tracking-[0.25em] text-noir/40">
                        {p.name}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
