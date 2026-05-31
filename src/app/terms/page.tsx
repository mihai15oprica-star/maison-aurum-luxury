import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="— The House"
        title="Terms of engagement."
        subtitle="A short summary of the understanding between Maison Aurum and its members."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80"
      />
      <section className="py-32 md:py-40">
        <div className="container-luxe max-w-3xl space-y-10">
          {[
            { h: "01 · Membership", b: "Membership in Maison Aurum is by introduction and at the discretion of the directors. It is non-transferable and may be paused or concluded at any time by either party." },
            { h: "02 · Fees", b: "Annual fees and project fees are agreed in writing at the outset of the relationship. The House does not accept commission from suppliers; our independence is your guarantee." },
            { h: "03 · Confidentiality", b: "All staff are bound by lifelong confidentiality. No client name, itinerary or preference is shared, published or referenced." },
            { h: "04 · Force majeure", b: "Acts of God, sovereign decision, war, pandemic and weather may impair service. The House will, in all cases, do what a House does — find another way." },
          ].map((s, i) => (
            <Reveal key={s.h} delay={i * 0.1}>
              <article className="border-t border-pearl pt-8">
                <h2 className="font-serif text-3xl mb-4">{s.h}</h2>
                <p className="body-lg">{s.b}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
