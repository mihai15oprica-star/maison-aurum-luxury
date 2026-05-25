import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DestinationsScroll from "@/components/sections/DestinationsScroll";
import StatsBand from "@/components/sections/StatsBand";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesGrid />
      <StatsBand />
      <DestinationsScroll />
      <Testimonial />
      <CTA
        heading={<>An <span className="italic gold-text">audience</span> with the House.</>}
        body="Maison Aurum admits new members by introduction only. If you have been referred — or believe your standard requires us — write."
        primary={{ label: "Apply for Membership", href: "/contact" }}
        secondary={{ label: "Speak to a concierge", href: "/contact#desk" }}
      />
    </>
  );
}
