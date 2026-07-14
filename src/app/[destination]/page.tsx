import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, DESTINATION_SLUGS, type DestinationSlug } from "@/data/destinations";
import MembershipBanner from "@/components/sections/MembershipBanner";
import DestinationHero from "@/components/sections/DestinationHero";
import WelcomeSection from "@/components/sections/WelcomeSection";
import PartnersGrid from "@/components/sections/PartnersGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BrandHighlights from "@/components/sections/BrandHighlights";
import TrustBlocks from "@/components/sections/TrustBlocks";

type Params = { destination: string };

// Pre-render exactly the three destination homepages.
export function generateStaticParams() {
  return DESTINATION_SLUGS.map((destination) => ({ destination }));
}

function getDestination(slug: string) {
  if (!(DESTINATION_SLUGS as string[]).includes(slug)) return null;
  return destinations[slug as DestinationSlug];
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const d = getDestination(params.destination);
  if (!d) return {};
  return {
    title: `${d.name} — Luxury Concierge`,
    description: d.welcomeText[0],
  };
}

export default function DestinationPage({ params }: { params: Params }) {
  const d = getDestination(params.destination);
  if (!d) notFound();

  return (
    <>
      {/* Clear the fixed header (h≈75px) so the membership strip below is visible */}
      <div aria-hidden className="h-[71px] md:h-[75px]" />
      <MembershipBanner destinationName={d.name} />
      <DestinationHero
        headline={d.heroHeadline}
        image={d.heroImage}
        cta={{ label: "Our Villas", href: `/${d.slug}/villas` }}
      />
      <WelcomeSection name={d.name} paragraphs={d.welcomeText} />
      <PartnersGrid partners={d.partners} />
      <ServicesGrid destination={d.slug} />
      <BrandHighlights />
      <TrustBlocks />
    </>
  );
}
