import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Maison Aurum — Private Luxury Concierge",
    template: "%s · Maison Aurum",
  },
  description:
    "A discreet, world-class concierge service curating private villas, yachts, restaurants, clubs, motorcars and bespoke experiences across Milan, Mykonos, St. Barth, Dubai and beyond.",
  openGraph: {
    title: "Maison Aurum — Private Luxury Concierge",
    description:
      "The world's most discerning private concierge. By invitation, by introduction, by design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-noir">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-noir focus:font-sans focus:text-xs focus:uppercase focus:tracking-[0.3em]"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <RouteTransition>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
        </RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
