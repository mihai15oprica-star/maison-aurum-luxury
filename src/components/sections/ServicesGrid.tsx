import Link from "next/link";
import Reveal from "@/components/Reveal";
import { serviceCards } from "@/data/site";

// "Our Services" — one card per category, each deep-linking to a listing page
// pre-filtered on the current destination.
export default function ServicesGrid({ destination }: { destination: string }) {
  return (
    <section className="relative py-28 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6">— Our Services</p>
          <h2 className="display-2 mb-14 max-w-3xl text-balance">
            Everything, <span className="italic gold-text">arranged.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {serviceCards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link href={s.href(destination)} className="group block h-full card-luxe overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <h3 className="font-serif text-xl text-white md:text-2xl">{s.title}</h3>
                    <span className="font-sans text-lg text-gold transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
