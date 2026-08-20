import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PHONES } from "@/data/contact";

export const metadata = { title: "Privacy", alternates: { canonical: "/privacy" } };

/**
 * Placeholder policy, not legal advice.
 *
 * TBD-5: this needs a lawyer before launch. It names no data controller, no legal
 * basis, no retention period and no supervisory authority, all of which the GDPR
 * requires of a Romanian company. Two claims were removed rather than left standing:
 * that data never leaves our staff (every enquiry travels through WhatsApp, i.e.
 * Meta) and that it sits on Swiss servers (it does not).
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="— Legal"
        title="Privacy."
        subtitle="Discretion is not a clause. It is the founding principle of Baboó."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80" /* TBD-6 */
      />
      <section className="py-32 md:py-40">
        <div className="container-luxe max-w-3xl space-y-10">
          {[
            { h: "01 · Information we hold", b: "We collect only what is necessary to serve you — name, contact, preferences, dossier notes. Nothing is sold, and nothing is shared beyond the staff who serve your account. Enquiries reach us over WhatsApp, which is operated by Meta and carries its own privacy terms." },
            { h: "02 · How we use it", b: "Exclusively for the service you have asked us to provide. Anniversaries, preferences and prior bookings are recorded so you are not asked the same question twice." },
            { h: "03 · How we protect it", b: "Encrypted transport, access limited to the staff on your account. No mass-market analytics and no advertising trackers — this site sets no cookies of its own." },
            { h: "04 · Your rights", b: `You may request your details, correct them, or have them erased. Reach your concierge on ${PHONES[0].number} and we will respond within seventy-two hours.` }, /* TBD-5: add the email route once the address exists */
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
