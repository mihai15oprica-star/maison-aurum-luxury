import Link from "next/link";
import { brand, nav } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-noir border-t border-gold/10 mt-32">
      <div className="container-luxe py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">The House</p>
            <h2 className="display-3 mb-6">
              By invitation, <br />
              by introduction, <span className="gold-text italic">by design.</span>
            </h2>
            <p className="body-lg max-w-md">
              Maison Aurum is a private concierge service operating across thirty-seven cities. We answer only to our clients, and only to the standard they expect.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors link-underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <p className="eyebrow mb-3">Concierge desk</p>
              <a href={`tel:${brand.phone}`} className="block font-serif text-2xl link-underline">{brand.phone}</a>
              <a href={`mailto:${brand.email}`} className="block mt-2 font-sans text-sm text-ivory/70 link-underline">{brand.email}</a>
            </div>
            <div>
              <p className="eyebrow mb-3">Office</p>
              <address className="not-italic font-serif text-lg text-ivory/90 leading-snug">{brand.address}</address>
            </div>
            <div>
              <p className="eyebrow mb-3">Press & Partnerships</p>
              <p className="font-sans text-sm text-ivory/70">press@maisonaurum.com</p>
            </div>
          </div>
        </div>

        <div className="hairline my-16" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40">
            © {year} {brand.name} · {brand.established}
          </p>
          <ul className="flex items-center gap-8">
            <li><Link href="/privacy" className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40 hover:text-gold transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40 hover:text-gold transition-colors">Terms</Link></li>
            <li><Link href="/imprint" className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40 hover:text-gold transition-colors">Imprint</Link></li>
          </ul>
        </div>
      </div>
      <div className="overflow-hidden border-t border-gold/10">
        <div className="flex animate-marquee whitespace-nowrap py-6 text-[12vw] md:text-[10vw] font-serif italic text-gold/10 tracking-tight gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>Maison Aurum · Discretion · Service · Maison Aurum · Discretion · Service ·&nbsp;</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
