import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/data/site";

export const metadata = { title: "Contact — The Desk" };

const desks = [
  { city: "Monte-Carlo", role: "Head Office", phone: "+377 99 99 00 00", email: "monaco@maisonaurum.com", hours: "24 / 7 · 365" },
  { city: "Milan", role: "Italy & Cellars", phone: "+39 02 0000 0000", email: "milan@maisonaurum.com", hours: "24 / 7 · 365" },
  { city: "London", role: "United Kingdom", phone: "+44 20 0000 0000", email: "london@maisonaurum.com", hours: "24 / 7 · 365" },
  { city: "Dubai", role: "GCC & Indian Ocean", phone: "+971 4 000 0000", email: "dubai@maisonaurum.com", hours: "24 / 7 · 365" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="— A short note begins"
        title="Write the House."
        subtitle="Membership is by introduction. Enquiries are read by a director. We answer, always, within the day."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80"
      />

      <section id="desk" className="relative py-32 md:py-40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">— Concierge desks</p>
              <h2 className="display-3 mb-10 text-balance">
                Four desks. <br />
                <span className="italic gold-text">One House.</span>
              </h2>
            </Reveal>
            <div className="space-y-10">
              {desks.map((d, i) => (
                <Reveal key={d.city} delay={i * 0.08}>
                  <div className="border-t border-gold/20 pt-6">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-serif text-2xl">{d.city}</h3>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">N° 0{i + 1}</span>
                    </div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/50 mb-4">{d.role}</p>
                    <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="block font-serif text-xl link-underline mb-1">{d.phone}</a>
                    <a href={`mailto:${d.email}`} className="block font-sans text-sm text-ivory/70 link-underline">{d.email}</a>
                    <p className="mt-3 font-sans text-xs text-ivory/40">{d.hours}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-noir-900 border border-gold/10 p-8 md:p-12">
                <p className="eyebrow mb-6">— Membership enquiry</p>
                <h2 className="display-3 mb-3 text-balance">An introduction begins here.</h2>
                <p className="body-lg max-w-md mb-10">
                  Tell us what brings you, and to whom we should write back.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-t border-gold/10 bg-noir-900">
        <div className="container-luxe grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-6">— Visiting</p>
            <h2 className="display-3 mb-6 text-balance">By appointment, <span className="italic gold-text">always.</span></h2>
            <address className="not-italic font-serif text-2xl text-ivory/95 leading-snug">{brand.address}</address>
            <p className="body-lg mt-6 max-w-md">
              The Monte-Carlo office sits one street back from the Casino, between two private banks. There is no signage. The door is unmarked. We will direct you.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
                alt="A view of the Monte-Carlo carré d'or near the Maison Aurum office"
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="font-serif text-2xl">Monte-Carlo</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">43.7384° N · 7.4246° E</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
