import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { destinations } from "@/data/site";

export const metadata = { title: "Destinations — An Atlas" };

const others = [
  "Paris", "London", "Aspen", "Tulum", "Capri", "Ibiza", "Sardinia",
  "Maldives", "Marbella", "Marrakech", "Bodrum", "Megève", "Gstaad",
  "Porto Cervo", "Lake Como", "Hvar", "Bahamas", "Mustique", "Bali",
  "Tokyo", "Kyoto", "Seoul", "Singapore", "Hong Kong",
  "Beverly Hills", "Aspen", "New York", "The Hamptons", "Miami",
  "Bridgetown", "Mustique", "Mallorca", "Menorca", "Cap-Ferrat", "Saint-Tropez",
  "Antibes", "Cannes", "Ravello", "Positano", "Amalfi", "Forte dei Marmi",
];

export default function DestinationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="— Forty-seven cities, three oceans"
        title="An atlas of the season."
        subtitle="A permanent presence in the destinations our members return to. Local ateliers, local relationships, local instinct."
        image="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80"
      />

      <section className="relative py-32 md:py-48 bg-cream">
        <div className="container-luxe space-y-8">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05}>
              <Link
                href={`/destinations/${d.slug}`}
                className="group grid md:grid-cols-12 items-center gap-6 md:gap-10 py-10 border-t border-pearl hover:border-noir/40 transition-colors duration-500"
              >
                <div className="md:col-span-1">
                  <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">N° {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-4 overflow-hidden">
                  <div
                    className="aspect-[16/10] bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
                    style={{ backgroundImage: `url(${d.cover})` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-4xl md:text-6xl text-noir group-hover:text-gold group-hover:italic transition-all duration-500">
                    {d.name}
                  </h3>
                  <p className="font-serif italic text-noir/60 mt-2">{d.tagline}</p>
                </div>
                <div className="md:col-span-2 md:text-right space-y-1">
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-noir/50">{d.country}</p>
                  <p className="font-sans text-xs text-noir/40">{d.season}</p>
                  <p className="font-sans text-[10px] text-noir/30 mt-2">{d.coords}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-32 md:py-40 border-t border-pearl">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— And further still</p>
            <h2 className="display-3 mb-12 text-balance max-w-3xl">
              Forty-one more cities, three more oceans, <span className="italic gold-text">and counting.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 font-serif text-lg md:text-xl text-noir/70">
              {others.map((c, i) => (
                <li key={`${c}-${i}`} className="hover:text-gold transition-colors">
                  <span>{c}</span>
                  {i < others.length - 1 && <span className="ml-8 text-gold/30">·</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTA
        heading={<>Tell us <span className="italic gold-text">where</span> — and when.</>}
        body="Your season, our preparation. Months before you arrive."
      />
    </>
  );
}
