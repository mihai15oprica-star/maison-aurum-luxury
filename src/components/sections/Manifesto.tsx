"use client";
import Reveal, { RevealLines } from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow mb-6">— The House</p>
              <div className="hairline" />
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-balance">
              <RevealLines text="A concierge is not a service." />
              <br />
              <span className="text-ivory/40">
                <RevealLines text="It is a relationship." delay={0.3} />
              </span>
              <br />
              <span className="italic gold-text">
                <RevealLines text="Built over years." delay={0.6} />
              </span>
            </h2>
            <Reveal delay={0.6} className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
              <p className="body-lg">
                For more than a decade, Maison Aurum has served a small, deliberately limited circle of families, founders and figures who require absolute discretion, instinctive taste and the kind of access that cannot be purchased — only earned.
              </p>
              <p className="body-lg">
                We do not advertise. We do not publish lists. We work, every day, to make the impossible feel inevitable: a table held at midnight, a villa unlocked at dawn, a Phantom waiting where you thought a road did not exist.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gold/5 blur-[120px]" />
    </section>
  );
}
