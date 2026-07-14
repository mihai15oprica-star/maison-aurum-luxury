import Reveal from "@/components/Reveal";

// "Welcome to [Destination]" — 2–3 descriptive paragraphs (TBD-2 copy).
export default function WelcomeSection({ name, paragraphs }: { name: string; paragraphs: string[] }) {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-luxe grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">— Welcome</p>
            <h2 className="display-3 text-balance">
              Welcome to <span className="italic gold-text">{name}.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className={i === 0 ? "font-serif text-2xl leading-[1.35] text-noir/90 text-balance md:text-3xl" : "body-lg mt-6"}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
