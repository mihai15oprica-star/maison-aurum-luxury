import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { brand } from "@/data/site";

export const metadata = { title: "Imprint" };

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="— The House"
        title="Imprint."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=80"
      />
      <section className="py-32 md:py-40">
        <div className="container-luxe max-w-3xl space-y-12">
          <Reveal>
            <h2 className="font-serif text-3xl mb-4">{brand.name} S.A.M.</h2>
            <address className="not-italic body-lg whitespace-pre-line">
              {brand.address}{"\n"}Principality of Monaco{"\n"}{brand.phone}{"\n"}{brand.email}
            </address>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl mb-3">Registration</h2>
            <p className="body-lg">RCI MC 16P 09876 — VAT FR 00 000 000 000</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="font-serif text-2xl mb-3">Editorial</h2>
            <p className="body-lg">Director of Publication: A. Vitale · Editorial: the directors of the House · Photography: archive and partners.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
