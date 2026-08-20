import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { brand } from "@/data/site";
import { LOCATION, PHONES, EMAIL } from "@/data/contact";

export const metadata = { title: "Imprint", alternates: { canonical: "/imprint" } };

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="— Legal"
        title="Imprint."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80" /* TBD-6 */
      />
      <section className="py-28 md:py-40">
        <div className="container-luxe max-w-3xl space-y-12">
          <Reveal>
            <h2 className="mb-4 font-serif text-3xl">{brand.name}</h2>
            {/* TBD-5: registered company name, address and details */}
            <address className="not-italic body-lg whitespace-pre-line">
              {LOCATION}
              {"\n"}
              {PHONES.map((p) => p.number).join(" · ")}
              {EMAIL ? `\n${EMAIL}` : ""}
            </address>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-3 font-serif text-2xl">Registration</h2>
            {/* TBD-5: registration / VAT numbers */}
            <p className="body-lg">Company registration and VAT details — to be confirmed.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="mb-3 font-serif text-2xl">Editorial</h2>
            <p className="body-lg">Photography: placeholder imagery pending final assets (TBD-6).</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
