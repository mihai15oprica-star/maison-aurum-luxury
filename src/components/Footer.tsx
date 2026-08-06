import Link from "next/link";
import { brand } from "@/data/site";
import { EMAIL, PHONES, LOCATION, INSTAGRAM_HANDLE, WHATSAPP_NUMBER, SOCIALS, isRealHref } from "@/data/contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const label = "font-sans text-[10px] uppercase tracking-[0.35em] text-gold";

// Quick links — Home + a couple of key routes (mirrors MADE's short footer nav).
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Villas", href: "/villas" },
  { label: "Destinations", href: "/" },
];

// TBD-5: social profile URLs live in contact.ts (SOCIALS).
const socials: { name: string; href: string; path: string }[] = [
  { name: "TikTok", href: SOCIALS.tiktok, path: "M16.5 5.5a4.5 4.5 0 0 0 3.5 1.7V10a7.7 7.7 0 0 1-3.9-1.1v5.6a5.5 5.5 0 1 1-5.5-5.5c.2 0 .4 0 .6.02v2.6a2.9 2.9 0 1 0 2 2.75V2h2.7c.05 1.3.5 2.5 1.3 3.5Z" },
  { name: "WhatsApp", href: SOCIALS.whatsapp, path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
  { name: "Facebook", href: SOCIALS.facebook, path: "M13.5 21v-8h2.6l.4-3h-3V8.1c0-.86.24-1.45 1.48-1.45H17V3.97c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9V10H8.3v3h2.62v8h2.58Z" },
  { name: "Instagram", href: SOCIALS.instagram, path: "M12 8.9A3.1 3.1 0 1 0 15.1 12 3.1 3.1 0 0 0 12 8.9Zm0 5.1A2 2 0 1 1 14 12a2 2 0 0 1-2 2Zm3.2-5.3a.72.72 0 1 0 .72.72.72.72 0 0 0-.72-.72ZM12 5.6c1.95 0 2.18 0 2.95.05a4 4 0 0 1 1.36.25 2.4 2.4 0 0 1 1.38 1.38 4 4 0 0 1 .25 1.36c.04.77.05 1 .05 2.95s0 2.18-.05 2.95a4 4 0 0 1-.25 1.36 2.4 2.4 0 0 1-1.38 1.38 4 4 0 0 1-1.36.25c-.77.04-1 .05-2.95.05s-2.18 0-2.95-.05a4 4 0 0 1-1.36-.25 2.4 2.4 0 0 1-1.38-1.38 4 4 0 0 1-.25-1.36C5.6 14.18 5.6 13.95 5.6 12s0-2.18.05-2.95a4 4 0 0 1 .25-1.36A2.4 2.4 0 0 1 7.28 6.3a4 4 0 0 1 1.36-.25C9.42 5.6 9.65 5.6 12 5.6m0-1.3c-2 0-2.24 0-3.02.05a5.3 5.3 0 0 0-1.78.34A3.7 3.7 0 0 0 5.09 7.2a5.3 5.3 0 0 0-.34 1.78C4.7 9.76 4.7 10 4.7 12s0 2.24.05 3.02a5.3 5.3 0 0 0 .34 1.78 3.7 3.7 0 0 0 2.11 2.11 5.3 5.3 0 0 0 1.78.34c.78.05 1.02.05 3.02.05s2.24 0 3.02-.05a5.3 5.3 0 0 0 1.78-.34 3.7 3.7 0 0 0 2.11-2.11 5.3 5.3 0 0 0 .34-1.78c.05-.78.05-1.02.05-3.02s0-2.24-.05-3.02a5.3 5.3 0 0 0-.34-1.78 3.7 3.7 0 0 0-2.11-2.11 5.3 5.3 0 0 0-1.78-.34C14.24 4.3 14 4.3 12 4.3Z" },
];

export default function Footer() {
  return (
    <footer className="relative bg-noir-900 text-white">
      <div className="h-px w-full bg-gold/60" />

      <div className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Slogan + Contact */}
          <div className="md:col-span-5">
            <p className={`${label} mb-6`}>{brand.name}</p>
            <h2 className="display-3 mb-8 text-white">
              Where daydreams <span className="italic text-gold">become reality.</span>
            </h2>
            <WhatsAppButton variant="inline" label="Contact Us" />
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className={`${label} mb-6`}>Navigate</p>
            <ul className="space-y-3">
              {quickLinks.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="tap-target inline-block font-sans text-sm text-white/85 transition-colors duration-300 hover:text-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-8 md:col-span-4">
            <div>
              <p className={`${label} mb-3`}>Follow</p>
              {/* Instagram handle shown large, like MADE. Plain text until TBD-5 lands. */}
              {isRealHref(SOCIALS.instagram) ? (
                <a href={SOCIALS.instagram} className="block font-serif text-3xl text-white transition-colors hover:text-gold">
                  {INSTAGRAM_HANDLE}
                </a>
              ) : (
                <p className="block font-serif text-3xl text-white">{INSTAGRAM_HANDLE}</p>
              )}
              {/* WhatsApp number shown separately */}
              <p className="mt-2 font-sans text-sm text-white/70">
                WhatsApp · +{WHATSAPP_NUMBER}
              </p>
            </div>
            <div>
              <p className={`${label} mb-3`}>Concierge</p>
              {PHONES.map((p) => (
                <a key={p.number} href={`tel:${p.number.replace(/\s/g, "")}`} className="tap-target block w-fit font-sans text-sm text-white/85 transition-colors hover:text-gold">
                  {p.number}
                </a>
              ))}
              <a href={`mailto:${EMAIL}`} className="tap-target mt-1 block w-fit font-sans text-sm text-white/85 transition-colors hover:text-gold">
                {EMAIL}
              </a>
            </div>
            <div>
              <p className={`${label} mb-3`}>Office</p>
              <address className="not-italic font-serif text-lg leading-snug text-white/90">{LOCATION}</address>
            </div>
          </div>
        </div>

        <div className="my-14 h-px w-full bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Copyright (fixed per brand spec) */}
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8C8378]">
            © 2026 by BABOÓ
          </p>
          <ul className="flex items-center gap-5">
            {socials.map((s) => {
              const icon = (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d={s.path} />
                </svg>
              );
              const box = "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70";
              return (
                <li key={s.name}>
                  {/* Not a link until TBD-5 supplies the profile URL — see isRealHref. */}
                  {isRealHref(s.href) ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className={`${box} transition-colors hover:border-gold hover:text-gold`}
                    >
                      {icon}
                    </a>
                  ) : (
                    <span role="img" aria-label={s.name} className={box}>
                      {icon}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10">
        <div className="flex animate-marquee gap-12 whitespace-nowrap py-6 font-serif text-[12vw] italic tracking-tight text-gold/80 md:text-[9vw]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>Where Daydreams Become Reality&nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
