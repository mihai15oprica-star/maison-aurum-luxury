"use client";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const quotes = [
  {
    body: "They arranged in seventy-two hours what my office had been working on for seven months. Without anyone knowing we asked.",
    author: "S.K.",
    title: "Family Office, Geneva",
  },
  {
    body: "There is a particular hush around true service. With Maison Aurum, the room simply arranges itself.",
    author: "P.D.A.",
    title: "Collector, London",
  },
  {
    body: "We have the same concierge today that we had eleven years ago. That is what we pay for.",
    author: "L.M.",
    title: "Industrialist, Milano",
  },
];

export default function Testimonial() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <Parallax speed={0.15} className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none">
        <div className="font-serif italic text-[18vw] leading-none tracking-tight text-gold whitespace-nowrap select-none">
          discretion · taste · trust
        </div>
      </Parallax>
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-12 text-center">— From the dossier</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <figure className="relative">
                <span aria-hidden className="absolute -top-12 -left-2 font-serif text-8xl text-gold/30 leading-none">&ldquo;</span>
                <blockquote className="font-serif text-xl md:text-2xl leading-snug text-ivory/90 italic text-balance">
                  {q.body}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gold/10">
                  <p className="font-serif text-lg text-gold">{q.author}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/50 mt-1">{q.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
