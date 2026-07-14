import MagneticButton from "@/components/MagneticButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center py-32">
      <div className="container-luxe max-w-2xl text-center">
        <p className="eyebrow mb-6">— Error 404</p>
        <h1 className="display-1 mb-8">
          A page <span className="italic gold-text">unfound.</span>
        </h1>
        <p className="body-lg mb-10 mx-auto">
          The door you tried isn&apos;t one of ours. Head back to the start and choose your destination.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <MagneticButton href="/" variant="gold">Choose a destination</MagneticButton>
          <WhatsAppButton variant="inline" label="Contact Us" />
        </div>
      </div>
    </section>
  );
}
