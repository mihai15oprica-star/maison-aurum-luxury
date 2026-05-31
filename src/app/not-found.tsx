import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center justify-center py-32">
      <div className="container-luxe text-center max-w-2xl">
        <p className="eyebrow mb-6">— Error 404</p>
        <h1 className="display-1 mb-8">
          A page <span className="italic gold-text">unfound.</span>
        </h1>
        <p className="body-lg mb-10">
          The door you tried is not one of ours. Return to the foyer, and we will show you in.
        </p>
        <div className="flex justify-center gap-5 flex-wrap">
          <MagneticButton href="/" variant="gold">Return home</MagneticButton>
          <MagneticButton href="/contact">Write the House</MagneticButton>
        </div>
        <p className="mt-12 font-sans text-xs text-noir/30">
          <Link href="/destinations" className="hover:text-gold">Or visit our atlas →</Link>
        </p>
      </div>
    </section>
  );
}
