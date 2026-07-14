import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import WhatsAppButton from "@/components/WhatsAppButton";

// TBD-7: the "About" menu item's final destination is undecided (dedicated page vs.
// anchor). This provisional page keeps the nav item working meanwhile.

const principles = [
  { n: "01", t: "Discretion", b: "Names, dates and itineraries stay between us. One point of contact, sworn to keep it that way." },
  { n: "02", t: "Anticipation", b: "We don't wait to be asked. The table is booked, the car dispatched, the villa readied before you land." },
  { n: "03", t: "Access", b: "Direct relationships with the owners, venues and captains who matter across all three islands." },
  { n: "04", t: "Devotion", b: "The same concierge, season after season — someone who learns exactly how you like to travel." },
];

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— About Baboó"
        title="Your daydream, handled."
        subtitle="Baboó is a luxury concierge for Ibiza, Mykonos and Saint Tropez — curating villas, yachts, cars, tables and the moments in between since 2019."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" /* TBD-6 */
      />

      <section className="relative py-28 md:py-40">
        <div className="container-luxe grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">— Since 2019</p>
              <h2 className="display-2 text-balance">
                Built for the islands <span className="italic gold-text">we love.</span>
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            {/* TBD-2: final About copy */}
            <Reveal delay={0.2}>
              <p className="body-lg">
                Baboó began with a simple idea: that a summer in Ibiza, Mykonos or Saint Tropez should be effortless — the right villa, the right table, the right boat, without the chasing.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="body-lg">
                From our base in Bucharest we run a deliberately small membership, with a single dedicated concierge for every guest and direct lines to the owners, venues and crews who make these islands what they are.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="body-lg">
                Tell us the trip you&rsquo;re dreaming of. We make it real — that&rsquo;s the whole promise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-28 md:py-40">
        <Parallax speed={0.1} className="pointer-events-none absolute inset-0 -z-10 flex items-center opacity-[0.05]">
          <div className="whitespace-nowrap select-none font-serif text-[18vw] italic leading-none tracking-tight text-gold">
            baboó
          </div>
        </Parallax>
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">— How we work</p>
            <h2 className="display-2 mb-16 max-w-3xl text-balance">
              The work is invisible. <span className="italic gold-text">The standard is not.</span>
            </h2>
          </Reveal>
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="border-t border-pearl pt-8">
                  <div className="mb-5 flex items-baseline justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">— No. {p.n}</span>
                    <span className="font-serif text-2xl italic text-noir/30">{p.n}</span>
                  </div>
                  <h3 className="mb-4 font-serif text-3xl md:text-4xl">{p.t}</h3>
                  <p className="body-lg max-w-md">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-pearl py-24">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <h2 className="display-3 max-w-2xl text-balance">
            Let&rsquo;s make it <span className="italic gold-text">real.</span>
          </h2>
          <WhatsAppButton variant="inline" label="Contact Us" />
        </div>
      </section>
    </>
  );
}
