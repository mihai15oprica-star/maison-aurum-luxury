import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/site";

export const metadata = { title: "Services — Six pillars" };

const extras = [
  { t: "Private Aviation", b: "Aircraft on a season's contract, charter on a moment's notice, helicopter to anywhere." },
  { t: "Security & Drivers", b: "Discreet protection, advance teams and chauffeurs trained at the EPP." },
  { t: "Health & Wellness", b: "Confidential medical, in-home consultations, longevity programmes." },
  { t: "Family & Education", b: "Tutors, nannies, school applications and family-office logistics." },
  { t: "Art & Auctions", b: "Private viewings, advisory representation, post-sale logistics." },
  { t: "Fashion & Watches", b: "Atelier appointments, allocation lists, archive access." },
];

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="— Six pillars · twenty disciplines"
        title="What we do."
        subtitle="Six pillars built on twenty years of practice. Whatever your hour, whatever your hemisphere, the answer is yes — and then we begin the work."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80"
      />

      <section className="relative py-32 md:py-48 bg-cream">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <Link
                    href={`/${s.slug}`}
                    className="group relative block h-[500px] overflow-hidden card-luxe"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${s.cover})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                    <div className="relative h-full flex flex-col justify-between p-10">
                      <div className="flex items-start justify-between">
                        <span className="text-gold/70 text-xs tracking-[0.4em]">N° 0{i + 1}</span>
                        <span className="text-gold text-3xl">{s.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-4xl text-noir mb-3 group-hover:text-gold transition-colors duration-500">
                          {s.title}
                        </h3>
                        <p className="font-sans text-sm text-noir/70 leading-relaxed max-w-sm">{s.blurb}</p>
                        <span className="mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
                          Enter
                          <span className="block h-px w-8 bg-gold group-hover:w-14 transition-all duration-500" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-48">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— And further still</p>
            <h2 className="display-2 mb-16 text-balance">
              The quieter <span className="italic gold-text">disciplines.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
            {extras.map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <div className="border-t border-pearl pt-6">
                  <h3 className="font-serif text-2xl mb-3">{x.t}</h3>
                  <p className="body-lg">{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading={<>The list <span className="italic gold-text">is not the list.</span></>}
        body="If you do not find it written, ask. We have done it before, or we have already begun."
      />
    </>
  );
}
