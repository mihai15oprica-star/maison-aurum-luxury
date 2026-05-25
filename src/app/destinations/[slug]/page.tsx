import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import GalleryGrid from "@/components/GalleryGrid";
import { destinations } from "@/data/site";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const d = destinations.find((x) => x.slug === params.slug);
  return { title: d ? `${d.name} — ${d.country}` : "Destination" };
}

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const d = destinations.find((x) => x.slug === params.slug);
  if (!d) return notFound();
  const others = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`— ${d.country} · ${d.season}`}
        title={d.name}
        subtitle={d.tagline}
        image={d.cover}
      />

      <section className="relative py-32 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">— The setting</p>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-ivory/50">{d.coords}</p>
              <div className="hairline mt-6" />
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.15}>
              <p className="font-serif text-3xl md:text-4xl leading-[1.2] text-ivory/95 text-balance">{d.intro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-noir-900">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— What the season offers</p>
            <h2 className="display-2 mb-16 text-balance">
              Three things <span className="italic gold-text">only we can do</span> here.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {d.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="border-t border-gold/20 pt-8 h-full">
                  <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">— No. 0{i + 1}</span>
                  <h3 className="font-serif text-3xl mt-5 mb-4">{h.title}</h3>
                  <p className="body-lg">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— A glimpse</p>
            <h2 className="display-3 mb-12 text-balance">In {d.name}, <span className="italic gold-text">last season.</span></h2>
          </Reveal>
          <GalleryGrid images={d.images.map((src, i) => ({ src, alt: `${d.name} — view ${i + 1}` }))} />
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-y border-gold/10 bg-noir-900">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— Continue the atlas</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.1}>
                <Link
                  href={`/destinations/${o.slug}`}
                  className="group relative block h-[340px] overflow-hidden bg-noir-700 border border-gold/10 hover:border-gold/40 transition-colors duration-500"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
                    style={{ backgroundImage: `url(${o.cover})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-2">{o.country}</p>
                    <h3 className="font-serif text-3xl group-hover:text-gold transition-colors">{o.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading={<>Begin a season in <span className="italic gold-text">{d.name}.</span></>}
        body="Tell us the dates. We will tell you what is already possible."
      />
    </>
  );
}
