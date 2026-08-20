import Reveal from "@/components/Reveal";
import type { Partner } from "@/data/destinations";
import { PARTNERS_PUBLISHED } from "@/data/partners";

// "Our Partners" — grid of partner logos. TBD-3.
export default function PartnersGrid({ partners }: { partners: Partner[] }) {
  // Hidden until the real roster lands: see PARTNERS_PUBLISHED.
  if (!PARTNERS_PUBLISHED) return null;

  return (
    <section className="relative border-y border-pearl bg-cream py-24 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6">— Our Partners</p>
          <h2 className="display-3 mb-14 max-w-2xl text-balance">
            The names that make <span className="italic gold-text">the island.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex aspect-[3/2] items-center justify-center rounded-[3px] border border-pearl bg-white/70">
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={p.name} className="max-h-10 max-w-[70%] object-contain opacity-80" />
                ) : (
                  <span className="px-2 text-center font-sans text-[10px] uppercase tracking-[0.25em] text-noir/40">
                    {p.name}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
