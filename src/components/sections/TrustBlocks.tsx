import Reveal from "@/components/Reveal";
import { trustBlocks } from "@/data/site";

// 3 trust blocks (image + title + copy). Copy is TBD-2, images TBD-6 (both in site.ts).
export default function TrustBlocks() {
  return (
    <section className="relative py-28 md:py-32">
      <div className="container-luxe">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {trustBlocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <article className="h-full">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[3px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${b.image})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-noir/10" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-noir">{b.title}</h3>
                <p className="mt-3 body-lg">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
