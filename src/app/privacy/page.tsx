import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="— The House"
        title="Privacy."
        subtitle="Discretion is not a clause. It is the founding principle of Maison Aurum."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80"
      />
      <section className="py-32 md:py-40">
        <div className="container-luxe max-w-3xl space-y-10">
          {[
            { h: "01 · Information we hold", b: "We collect only what is necessary to serve you — name, contact, preferences, dossier notes. Nothing is shared, sold, or transmitted beyond the staff who serve your account." },
            { h: "02 · How we use it", b: "Exclusively for the service you have asked us to provide. Anniversaries, preferences and prior bookings are recorded so you are not asked the same question twice." },
            { h: "03 · How we protect it", b: "Encrypted operations, segmented access, sworn staff, on-shore servers in Switzerland. No mass-market analytics, no advertising trackers." },
            { h: "04 · Your rights", b: "You may request your dossier, correct it, or have it erased. Write to privacy@maisonaurum.com and a director will respond within seventy-two hours." },
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
