import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CTA from "@/components/sections/CTA";
import { Category } from "@/data/categories";

export default function CategoryPage({ c }: { c: Category }) {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} image={c.hero} />

      <section className="relative py-32 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">— A note from the desk</p>
              <div className="hairline" />
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.15}>
              <p className="font-serif text-3xl md:text-4xl leading-[1.2] text-noir/95 text-balance">{c.intro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-cream">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— The standard</p>
            <h2 className="display-3 mb-16 text-balance max-w-3xl">
              How the House holds <span className="italic gold-text">this pillar.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {c.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="border-t border-pearl pt-8 h-full">
                  <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">— No. 0{i + 1}</span>
                  <h3 className="font-serif text-3xl mt-5 mb-4">{p.title}</h3>
                  <p className="body-lg">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— From the portfolio</p>
            <div className="flex items-end justify-between gap-8 mb-16">
              <h2 className="display-2 text-balance">
                A glimpse of <span className="italic gold-text">the book.</span>
              </h2>
              <p className="hidden md:block max-w-md body-lg">
                The full portfolio is presented privately, after introduction. Below: a small selection.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {c.listings.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="group relative overflow-hidden card-luxe h-full">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
                        style={{ backgroundImage: `url(${l.image})` }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                      <span className="absolute top-5 left-5 font-sans text-[10px] tracking-[0.4em] uppercase text-gold/90 bg-noir/60 backdrop-blur px-3 py-1.5">
                        N° 0{i + 1}
                      </span>
                    </div>
                    <div className="p-6 md:p-7 border-t border-pearl">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="font-serif text-2xl text-noir group-hover:text-gold transition-colors">{l.name}</h3>
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold whitespace-nowrap">{l.price}</span>
                      </div>
                      <p className="font-sans text-xs uppercase tracking-[0.3em] text-noir/50">{l.location}</p>
                      <p className="font-sans text-sm text-noir/70 mt-3">{l.spec}</p>
                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-gold link-underline"
                      >
                        Enquire
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-y border-pearl bg-cream">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">— Questions answered</p>
              <h2 className="display-3 text-balance">A few <span className="italic gold-text">considerations.</span></h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 divide-y divide-gold/10">
            {c.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.1}>
                <div className="py-8">
                  <h3 className="font-serif text-2xl mb-3">{f.q}</h3>
                  <p className="body-lg">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading={<>Begin with <span className="italic gold-text">a name.</span></>}
        body="A short note. A date. We respond within the day, from a real person."
      />
    </>
  );
}
