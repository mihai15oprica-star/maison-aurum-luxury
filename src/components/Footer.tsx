import Link from "next/link";
import { brand, nav } from "@/data/site";

const label = "font-sans text-[10px] uppercase tracking-[0.35em] text-gold";
const linkCls = "font-sans text-sm text-white/85 hover:text-gold transition-colors duration-300";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-noir-900 text-white">
      {/* top full-width gold line */}
      <div className="h-px w-full bg-gold/60" />

      <div className="container-luxe py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className={`${label} mb-6`}>The House</p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-white mb-6">
              By invitation, <br />
              by introduction, <span className="italic text-gold">by design.</span>
            </h2>
            <p className="font-sans text-[15px] leading-[1.8] text-white/75 max-w-md">
              Maison Aurum is a private concierge service operating across thirty-seven cities. We answer only to our clients, and only to the standard they expect.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className={`${label} mb-6`}>Navigate</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={linkCls}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <p className={`${label} mb-3`}>Concierge desk</p>
              <a href={`tel:${brand.phone}`} className="block font-serif text-2xl text-white hover:text-gold transition-colors">{brand.phone}</a>
              <a href={`mailto:${brand.email}`} className={`block mt-2 ${linkCls}`}>{brand.email}</a>
            </div>
            <div>
              <p className={`${label} mb-3`}>Office</p>
              <address className="not-italic font-serif text-lg text-white/90 leading-snug">{brand.address}</address>
            </div>
            <div>
              <p className={`${label} mb-3`}>Press &amp; Partnerships</p>
              <p className="font-sans text-sm text-white/75">press@maisonaurum.com</p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 my-16" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8C8378]">
            © {year} {brand.name} · {brand.established}
          </p>
          <ul className="flex items-center gap-8">
            <li><Link href="/privacy" className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8C8378] hover:text-gold transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8C8378] hover:text-gold transition-colors">Terms</Link></li>
            <li><Link href="/imprint" className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8C8378] hover:text-gold transition-colors">Imprint</Link></li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10">
        <div className="flex animate-marquee whitespace-nowrap py-6 text-[12vw] md:text-[10vw] font-serif italic text-gold/80 tracking-tight gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>Maison Aurum · Discretion · Service · Maison Aurum · Discretion · Service ·&nbsp;</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
