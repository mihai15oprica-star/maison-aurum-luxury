import Link from "next/link";
import ExtraServiceRow from "@/components/ExtraServiceRow";
import WhatsAppButton from "@/components/WhatsAppButton";
import { extraServices } from "@/data/extra-services";

// Extra-services content, reused by the global /extra-services page and the scoped
// /[destination]/extra-services page. `back` links a scoped page to its destination.
export default function ExtraServicesSection({
  destinationName,
  back,
}: {
  destinationName?: string;
  back?: { href: string; label: string };
}) {
  return (
    <>
      <section className="relative flex h-[52svh] min-h-[380px] w-full items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80)" }} /* TBD-6 */
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-luxe relative pb-12">
          {back ? (
            <Link href={back.href} className="eyebrow mb-4 inline-block link-underline">
              ← {back.label}
            </Link>
          ) : (
            <p className="eyebrow mb-4">— Extra Services</p>
          )}
          <h1 className="display-2 max-w-3xl text-balance text-noir">
            Everything else you could wish for{destinationName ? ` in ${destinationName}` : ""}.
          </h1>
          <p className="body-lg mt-5 text-noir/75">
            The details that turn a stay into a memory — arranged, staffed and delivered by Baboó.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe space-y-20 md:space-y-28">
          {extraServices.map((s, i) => (
            <ExtraServiceRow key={s.title} service={s} reversed={i % 2 === 1} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-pearl bg-cream py-20">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <h2 className="display-3 max-w-2xl text-balance">
            Ask for anything. <span className="italic gold-text">We arrange it.</span>
          </h2>
          <WhatsAppButton variant="inline" label="Contact Us" />
        </div>
      </section>
    </>
  );
}
