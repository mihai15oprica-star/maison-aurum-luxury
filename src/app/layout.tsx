import type { Metadata } from "next";
import { Bodoni_Moda, Jost, Playfair_Display } from "next/font/google";
import { SITE_URL, IS_PRODUCTION_HOST } from "@/lib/site-url";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";
import WhatsAppButton from "@/components/WhatsAppButton";

// Brand typography — direction A, "Italian fashion house", approved by the client
// 06.08.2026. Bodoni Moda carries the headings, Jost the running text.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  // Next has no metrics for Bodoni Moda, so it cannot generate size-adjust
  // overrides and warns on every build. Opt out and pick the fallback by hand:
  // Times is a far closer match for a Didone's proportions than Georgia, whose
  // larger x-height and heavier strokes make the swap obvious.
  adjustFontFallback: false,
  fallback: ["Times New Roman", "Times", "serif"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// The wordmark has its own role rather than inheriting --font-display: the client
// approved direction A for the site but rejected the logo, so the two have to be
// able to move independently. Still Playfair until the logo direction is settled.
const logo = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  // Every canonical, Open Graph URL and image reference in the app resolves against
  // this. Without it Next emits relative OG URLs, which no social crawler accepts.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Baboó — Luxury Concierge · Ibiza, Mykonos, Saint Tropez",
    template: "%s · Baboó",
  },
  description:
    "Baboó is a luxury concierge curating private villas, yachts, cars, beach clubs, restaurants and bespoke experiences across Ibiza, Mykonos and Saint Tropez. Where daydreams become reality.",
  applicationName: "Baboó",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Baboó — Luxury Concierge",
    description: "Where daydreams become reality. Ibiza · Mykonos · Saint Tropez.",
    type: "website",
    siteName: "Baboó",
    locale: "en_GB",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baboó — Luxury Concierge",
    description: "Where daydreams become reality. Ibiza · Mykonos · Saint Tropez.",
  },
  // Preview and local builds share the same 56 listings as production. Letting them
  // be indexed would publish a dozen duplicates of every page under other hostnames.
  robots: IS_PRODUCTION_HOST
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable} ${logo.variable}`}>
      <body className="font-sans antialiased bg-white text-noir">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-noir focus:font-sans focus:text-xs focus:uppercase focus:tracking-[0.3em]"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Nav />
        <RouteTransition>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
        </RouteTransition>
        <Footer />
        {/* Floating WhatsApp — fixed, visible on every page (TBD-1 number) */}
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
