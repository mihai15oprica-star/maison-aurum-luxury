import Reveal from "@/components/Reveal";
import { brandHighlights } from "@/data/site";

// 6 brand-highlight tiles (mirror of MADE's DIFFERENCE / PRIORITY ACCESS / ...).
// Copy is TBD-2 (drafts live in site.ts).
export default function BrandHighlights() {
  return (
    <section className="relative border-y border-pearl bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6">— Why Baboó</p>
          <h2 className="display-3 mb-14 max-w-2xl text-balance">
            The difference is <span className="italic gold-text">in the detail.</span>
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-pearl bg-pearl sm:grid-cols-2 lg:grid-cols-3">
          {brandHighlights.map((h, i) => (
            <Reveal key={h.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-cream p-8 md:p-10">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
                  No. 0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-noir">{h.title}</h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.75] text-noir/70">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
