import Reveal from "@/components/Reveal";
import type { ExtraService } from "@/data/extra-services";
import { cn } from "@/lib/cn";

// Alternating text / image row (mirror of MADE's /extra-services layout).
export default function ExtraServiceRow({
  service,
  reversed,
  index,
}: {
  service: ExtraService;
  reversed?: boolean;
  index: number;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <Reveal className={cn(reversed && "md:order-2")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[3px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-noir/5" />
        </div>
      </Reveal>
      <Reveal delay={0.1} className={cn(reversed && "md:order-1")}>
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            No. {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="mt-4 font-serif text-3xl text-noir md:text-4xl">{service.title}</h2>
          <p className="body-lg mt-5">{service.description}</p>
        </div>
      </Reveal>
    </div>
  );
}
