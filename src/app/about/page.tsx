import PageHero from "@/components/PageHero";
import Reveal, { RevealLines } from "@/components/Reveal";
import StatsBand from "@/components/sections/StatsBand";
import CTA from "@/components/sections/CTA";
import Parallax from "@/components/Parallax";

const principles = [
  { n: "01", t: "Discretion", b: "Names, addresses and itineraries never leave the dossier. Encrypted operations, single-point contact, sworn staff." },
  { n: "02", t: "Anticipation", b: "We do not wait to be asked. We have already booked the table, dispatched the car, and confirmed the suite." },
  { n: "03", t: "Taste", b: "Our standard is the one set by a great Italian tailor or a Burgundy of unimpeachable provenance — felt, not explained." },
  { n: "04", t: "Loyalty", b: "We work with our clients for decades. The same concierge, the same standards, the same name they trust." },
];

const team = [
  { name: "Alessandra Vitale", role: "Founder & Maître de Maison", years: "20 yrs of practice", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80" },
  { name: "Lorenzo Cattaneo", role: "Director, Yachts & Aviation", years: "Ex-Edmiston", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80" },
  { name: "Camille Lefebvre", role: "Director, Villas & Estates", years: "Ex-Knight Frank Private", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80" },
  { name: "Adrien Khoury", role: "Director, Tables & Cellars", years: "Ex-Le Cinq", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" },
];

export const metadata = { title: "About — The House" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— The House"
        title="A maison, not a service."
        subtitle="Maison Aurum is a privately held concierge atelier headquartered in Monte-Carlo, with permanent ateliers in Milan, Paris, London, Dubai and St. Barth."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      />

      <section className="relative py-32 md:py-48">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">— A short history</p>
              <h2 className="display-2 text-balance">
                Founded in <span className="italic gold-text">MMXVI.</span>
                <br />
                Built every day since.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6">
            <Reveal delay={0.2}>
              <p className="body-lg">
                The House began as a private office serving four families across Lugano, Milan and London. A decade later, we serve a deliberately small membership across thirty-seven cities — never advertising, never publishing client names, never accepting an introduction without consideration.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="body-lg">
                Our staff have come from the great hotels and the great houses — the Ritz, Le Bristol, the Cipriani, the Splendido. They were trained for a world in which a guest&apos;s standard is set before they arrive, and met before they ask.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="body-lg">
                We are, finally, a house. Membership is for life. The door, once opened, is yours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-48 bg-noir-900 overflow-hidden">
        <Parallax speed={0.1} className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none flex items-center">
          <div className="font-serif italic text-[18vw] leading-none tracking-tight text-gold whitespace-nowrap select-none">
            principles
          </div>
        </Parallax>
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— The four principles</p>
            <h2 className="display-2 mb-20 text-balance max-w-4xl">
              <RevealLines text="The work is invisible." />
              <br />
              <span className="italic gold-text">
                <RevealLines text="The standards are not." delay={0.3} />
              </span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="border-t border-gold/20 pt-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">— No. {p.n}</span>
                    <span className="font-serif italic text-ivory/30 text-2xl">{p.n}</span>
                  </div>
                  <h3 className="font-serif text-4xl mb-5">{p.t}</h3>
                  <p className="body-lg max-w-md">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="relative py-32 md:py-48">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— The directors</p>
            <h2 className="display-2 mb-20 text-balance">
              People you will <span className="italic gold-text">know by name.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <figure className="group">
                  <div className="relative overflow-hidden aspect-[4/5] bg-noir-700">
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-[1.4s] group-hover:scale-105"
                      style={{ backgroundImage: `url(${m.img})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="font-serif text-2xl group-hover:text-gold transition-colors">{m.name}</h3>
                    <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold/80 mt-1">{m.role}</p>
                    <p className="font-sans text-xs text-ivory/50 mt-2">{m.years}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading={<>The kind of <span className="italic gold-text">relationship</span> that grows quieter with time.</>}
        body="To begin, an introduction. To continue, a conversation. Decades follow."
      />
    </>
  );
}
