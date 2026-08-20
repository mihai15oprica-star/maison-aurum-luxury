export type DestinationSlug = "ibiza" | "mykonos" | "saint-tropez";

export interface Partner {
  name: string;
  logo: string; // placeholder image/logo — TBD-3
  url?: string; // TBD-3
}

/**
 * A destination's own photography.
 *
 * All three used to share a single stock image apiece that showed somewhere else
 * entirely — Saint Tropez was a seaplane in the Maldives — which makes the hover
 * reveal on "/" actively misleading rather than merely generic. Each image below is
 * of the place it names. TBD-6 until the commissioned photography arrives.
 */
export interface Destination {
  slug: DestinationSlug;
  name: string;
  tagline: string;
  heroImage: string; // TBD-6
  selectorImage: string; // shown on hover in the "/" selector — TBD-6
  heroHeadline: string; // TBD-2: final hero copy
  welcomeText: string[]; // 2–3 paragraphs — TBD-2
  partners: Partner[]; // TBD-3
}

// Ordered list drives both the "/" selector and generateStaticParams.
export const DESTINATION_SLUGS: DestinationSlug[] = ["ibiza", "mykonos", "saint-tropez"];

// Placeholder partner grid — same list per destination until real partners arrive.
// TBD-3: real clubs / restaurants / beach-club partners, with logos + links.
const placeholderPartners: Partner[] = [
  { name: "Partner One", logo: "" }, // TBD-3
  { name: "Partner Two", logo: "" }, // TBD-3
  { name: "Partner Three", logo: "" }, // TBD-3
  { name: "Partner Four", logo: "" }, // TBD-3
  { name: "Partner Five", logo: "" }, // TBD-3
  { name: "Partner Six", logo: "" }, // TBD-3
];

const U = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const destinations: Record<DestinationSlug, Destination> = {
  ibiza: {
    slug: "ibiza",
    name: "Ibiza",
    tagline: "The island that never really sleeps.",
    // Cala San Vicente from the pines above it.
    heroImage: U("1596377940590-9ac8e3d22b79"), // TBD-6
    // Sunset over the west-coast cliffs — the island's own postcard.
    selectorImage: U("1582368312260-04dd28d21248", 1200), // TBD-6
    heroHeadline: "Live your daydream in Ibiza.", // TBD-2
    welcomeText: [
      // TBD-2: final welcome copy for Ibiza
      "Ibiza is two islands at once — the sunrise one of hidden coves and pine-scented hills, and the after-dark one of the world's greatest clubs. Baboó gives you both, on your terms.",
      "From a cliffside villa above Cala Jondal to a front-row table at the season's defining night, every door here opens a little faster when you arrive with us.",
      "Tell us the trip you're dreaming of. We'll have it waiting before you land.",
    ],
    partners: placeholderPartners,
  },
  mykonos: {
    slug: "mykonos",
    name: "Mykonos",
    tagline: "Where the Aegean meets the velvet rope.",
    // The Kato Mili windmills above Chora.
    heroImage: U("1653051145435-b13b5563a134"), // TBD-6
    // Little Venice, where the houses stand in the water.
    selectorImage: U("1695441396429-0c53cf57c29b", 1200), // TBD-6
    heroHeadline: "Live your daydream in Mykonos.", // TBD-2
    welcomeText: [
      // TBD-2: final welcome copy for Mykonos
      "Whitewashed lanes, sun-bleached linen and water the colour of glass — then, as the light drops, the most electric nights in the Cyclades. Mykonos rewards those who know where to be.",
      "Baboó holds the daybeds at Nammos, the tables at Scorpios and the keys to clifftop estates in Aleomandra — the ones that are never quite available to everyone else.",
      "Arrive to an island already arranged around you.",
    ],
    partners: placeholderPartners,
  },
  "saint-tropez": {
    slug: "saint-tropez",
    name: "Saint Tropez",
    tagline: "The Riviera, at its most golden.",
    // The Vieux Port from a deck in it.
    heroImage: U("1744393995459-9ce6752889d6"), // TBD-6
    // The pastel old town seen from the water.
    selectorImage: U("1662895450073-0cc13cfc562f", 1200), // TBD-6
    heroHeadline: "Live your daydream in Saint Tropez.", // TBD-2
    welcomeText: [
      // TBD-2: final welcome copy for Saint Tropez
      "A fishing village that became the summer capital of the Côte d'Azur — Saint Tropez is lunch at Club 55, a Riva to Pampelonne, and an evening that finds its own rhythm.",
      "Baboó secures the moorings, the villas above the vineyards and the tables that vanish from the phone by June.",
      "Whatever the day should hold, consider it done.",
    ],
    partners: placeholderPartners,
  },
};

export const destinationList: Destination[] = DESTINATION_SLUGS.map((s) => destinations[s]);
