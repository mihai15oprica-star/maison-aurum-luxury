import { SITE_URL, absoluteUrl } from "@/lib/site-url";
import { brand } from "@/data/site";
import { EMAIL, PHONES, SOCIALS, isRealHref } from "@/data/contact";
import { destinationList } from "@/data/destinations";
import type { Listing } from "@/data/listings";

/**
 * The concierge itself. Emitted once, on the homepage, with an @id every other block
 * can point at instead of repeating the organisation.
 */
export function organisationSchema() {
  const sameAs = Object.values(SOCIALS).filter(isRealHref);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: brand.name,
    url: SITE_URL,
    slogan: brand.slogan,
    description:
      "Luxury concierge curating private villas, yachts, cars, beach clubs, restaurants and bespoke experiences across Ibiza, Mykonos and Saint Tropez.",
    logo: absoluteUrl("/opengraph-image"),
    image: absoluteUrl("/opengraph-image"),
    address: { "@type": "PostalAddress", addressLocality: "Bucharest", addressCountry: "RO" },
    areaServed: destinationList.map((d) => ({ "@type": "Place", name: d.name })),
    // Placeholder contact details (TBD-1/TBD-5) are deliberately not published as
    // structured data: telling Google a fake number is worse than telling it nothing.
    ...(sameAs.length ? { sameAs } : {}),
    ...(EMAIL.endsWith("@baboo.com") ? {} : { email: EMAIL }),
    ...(PHONES[0]?.number.includes("700 000 000")
      ? {}
      : { telephone: PHONES[0]?.number }),
  };
}

/** The site as a whole, so search engines attribute pages to one property. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: brand.name,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * Breadcrumb trail for a listing page.
 *
 * Mirrors the back link the page already shows, which is the condition for the trail
 * to be legitimate: the markup describes navigation the visitor can actually see.
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

/**
 * A single listing.
 *
 * Villas map to `Accommodation`, everything else to `Product`. No `offers` block is
 * emitted anywhere: the site quotes on enquiry and publishes no prices, and a
 * Product without a price is a structured-data error rather than a rich result.
 */
export function listingSchema(l: Listing, path: string) {
  const destination = destinationList.find((d) => d.slug === l.destination)?.name ?? "";
  const common = {
    "@context": "https://schema.org",
    name: l.name,
    url: absoluteUrl(path),
    image: l.image.startsWith("http") ? l.image : absoluteUrl(l.image),
    description: `${l.name} — ${l.location}. Arranged by ${brand.name}.`,
    brand: { "@id": `${SITE_URL}/#organization` },
  };

  if (l.category === "villas") {
    return {
      ...common,
      "@type": "Accommodation",
      address: { "@type": "PostalAddress", addressLocality: destination },
      ...(l.bedrooms ? { numberOfBedrooms: l.bedrooms } : {}),
      ...(l.guests ? { occupancy: { "@type": "QuantitativeValue", maxValue: l.guests } } : {}),
      amenityFeature: l.stats.map((s) => ({
        "@type": "LocationFeatureSpecification",
        name: s.label,
        value: s.value,
      })),
    };
  }

  return {
    ...common,
    "@type": "Product",
    category: l.category,
    additionalProperty: l.stats.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  };
}
