import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="— Legal"
        title="Terms of engagement."
        subtitle="A short summary of the understanding between Baboó and its guests."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80" /* TBD-6 */
      />
      <section className="py-32 md:py-40">
        <div className="container-luxe max-w-3xl space-y-10">
          {[
            { h: "01 · Membership", b: "Access to Baboó is by application and at our discretion. It is personal, non-transferable, and may be paused or concluded at any time by either party." },
            { h: "02 · Fees", b: "Service and booking fees are agreed in writing before anything is confirmed. No surprises appear on your final statement." },
            { h: "03 · Confidentiality", b: "Our team is bound by confidentiality. No guest name, itinerary or preference is shared, published or referenced." },
            { h: "04 · Force majeure", b: "Weather, sovereign decision, strike or pandemic may impair a booking. In every case, Baboó will do what a concierge does — find another way." },
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
