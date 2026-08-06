import type { DestinationSlug } from "@/data/destinations";
import { destinationList } from "@/data/destinations";

// Villas & yachts below are REAL client inventory — specs from booking.com / Airbnb /
// charter sites (source URL in each line's trailing comment), lead photos self-hosted
// in /public/listings/<slug>.jpg. Cars & beach-clubs are still placeholder (TBD-3).

export type ListingCategory = "villas" | "yachts" | "cars" | "beach-clubs";
export type Badge = "SELLING FAST" | "SIGNATURE PICK" | "HIGH DEMAND";

export interface Listing {
  slug: string;
  category: ListingCategory;
  destination: DestinationSlug;
  name: string;
  image: string; // TBD-6
  location: string;
  area?: string; // neighbourhood / zone — filterable for villas & beach-clubs
  distanceToCenter?: string;
  stats: { label: string; value: string }[];
  badge?: Badge;
  // filterable attributes (per category)
  bedrooms?: number;
  guests?: number;
  boatType?: string;
  capacity?: number;
  carType?: string;
  transmission?: string;
}

/**
 * Alt text for a listing's lead photo.
 *
 * Names the subject and its type rather than being left empty. The card heading
 * repeats the name, but an empty alt would strip the photo out of image search on
 * a site whose whole product is the property.
 */
export function listingAlt(l: Listing): string {
  const kind: Record<ListingCategory, string> = {
    villas: "villa",
    yachts: "yacht charter",
    cars: "car hire",
    "beach-clubs": "beach club",
  };
  // Car listings put a service promise in `location` ("Delivered · Ibiza"), so name
  // the destination instead — "car hire in Delivered · Ibiza" is not a sentence.
  const place =
    l.category === "cars"
      ? destinationList.find((d) => d.slug === l.destination)?.name ?? l.location
      : l.location;
  return `${l.name} — ${kind[l.category]} in ${place}`;
}

export type FilterMatch = "exact" | "min";
export interface FilterDef {
  key: string; // query-param name
  field: keyof Listing;
  label: string;
  match: FilterMatch;
  options: { label: string; value: string }[];
}

// The Destination filter is shared by every category; options come from the data.
export const destinationFilter: FilterDef = {
  key: "destination",
  field: "destination",
  label: "Destination",
  match: "exact",
  options: destinationList.map((d) => ({ label: d.name, value: d.slug })),
};

const U = (id: string, w = 1000) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;
const IMG = {
  villa: "1613977257363-707ba9348227",
  villa2: "1512917774080-9991f1c4c750",
  yacht: "1605281317010-fe5ffe798166",
  yacht2: "1567899378494-47b22a2ae96a",
  car: "1503376780353-7e6692767b70",
  car2: "1544636331-e26879cd4d9b",
  beach: "1544551763-46a013bb70d5",
  beach2: "1520250497591-112f2f40a3f4",
};

export interface CategoryConfig {
  category: ListingCategory;
  eyebrow: string;
  // Title adapts to the active destination filter (e.g. "…in Ibiza").
  titleFor: (destName?: string) => string;
  subtitle: string;
  hero: string; // TBD-6
  extraFilters: FilterDef[]; // destination filter is prepended by the shell
}

export const categoryConfig: Record<ListingCategory, CategoryConfig> = {
  villas: {
    category: "villas",
    eyebrow: "— Villas & Estates",
    titleFor: (d) => `Find Your Perfect Villa${d ? ` in ${d}` : ""}`,
    subtitle:
      "Private, staffed homes — cliffside, beachfront and hidden inland — inspected and photographed by us.",
    hero: U(IMG.villa, 1600),
    extraFilters: [
      {
        key: "area",
        field: "area",
        label: "Area",
        match: "exact",
        options: [
          { label: "Beachfront", value: "Beachfront" },
          { label: "Hillside", value: "Hillside" },
          { label: "Town", value: "Town" },
          { label: "Countryside", value: "Countryside" },
        ],
      },
      {
        key: "bedrooms",
        field: "bedrooms",
        label: "Bedrooms",
        match: "min",
        options: [
          { label: "4+", value: "4" },
          { label: "6+", value: "6" },
          { label: "8+", value: "8" },
        ],
      },
      {
        key: "guests",
        field: "guests",
        label: "Guests",
        match: "min",
        options: [
          { label: "8+", value: "8" },
          { label: "12+", value: "12" },
          { label: "16+", value: "16" },
        ],
      },
    ],
  },
  yachts: {
    category: "yachts",
    eyebrow: "— Yachts & Charters",
    titleFor: (d) => `Charter a Yacht${d ? ` in ${d}` : ""}`,
    subtitle: "Motor, sail and catamaran, crewed and provisioned, ready at the dock.",
    hero: U(IMG.yacht, 1600),
    extraFilters: [
      {
        key: "boatType",
        field: "boatType",
        label: "Type",
        match: "exact",
        options: [
          { label: "Motor Yacht", value: "Motor Yacht" },
          { label: "Sailing Yacht", value: "Sailing Yacht" },
          { label: "Catamaran", value: "Catamaran" },
          { label: "Speed Boat", value: "Speed Boat" },
        ],
      },
      {
        key: "capacity",
        field: "capacity",
        label: "Guests",
        match: "min",
        options: [
          { label: "6+", value: "6" },
          { label: "10+", value: "10" },
          { label: "12+", value: "12" },
        ],
      },
    ],
  },
  cars: {
    category: "cars",
    eyebrow: "— Motorcars",
    titleFor: (d) => `Rent a Car${d ? ` in ${d}` : ""}`,
    subtitle: "Delivered valeted and fuelled to your villa, hotel or the FBO.",
    hero: U(IMG.car, 1600),
    extraFilters: [
      {
        key: "carType",
        field: "carType",
        label: "Type",
        match: "exact",
        options: [
          { label: "Convertible", value: "Convertible" },
          { label: "Sports", value: "Sports" },
          { label: "SUV", value: "SUV" },
          { label: "Sedan", value: "Sedan" },
        ],
      },
      {
        key: "transmission",
        field: "transmission",
        label: "Transmission",
        match: "exact",
        options: [
          { label: "Automatic", value: "Automatic" },
          { label: "Manual", value: "Manual" },
        ],
      },
    ],
  },
  "beach-clubs": {
    category: "beach-clubs",
    eyebrow: "— Beach Clubs",
    titleFor: (d) => `Beach Clubs${d ? ` in ${d}` : ""}`,
    subtitle: "Front-row daybeds and the tables that are never available — held for you.",
    hero: U(IMG.beach, 1600),
    extraFilters: [
      {
        key: "area",
        field: "area",
        label: "Area",
        match: "exact",
        options: [
          { label: "Beachfront", value: "Beachfront" },
          { label: "Bay", value: "Bay" },
          { label: "Peninsula", value: "Peninsula" },
        ],
      },
    ],
  },
};

export const listings: Listing[] = [
  // ---- VILLAS ----
  // Real Ibiza villas (client inventory, specs from booking.com). Photos still placeholder — TBD-6.
  { slug: "villa-can-furnet", category: "villas", destination: "ibiza", name: "Villa Moderne Can Furnet", image: "/listings/villa-can-furnet.jpg", location: "Can Furnet, Ibiza", area: "Hillside", distanceToCenter: "5 km to Ibiza Town", bedrooms: 4, guests: 8, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "Pool", value: "Infinity" }] }, // booking.com/hotel/es/superbe-villa-moderne-4chambres-en-suite-piscine-a-debordement
  { slug: "villa-es-pujolet", category: "villas", destination: "ibiza", name: "Villa Es Pujolet", image: "/listings/villa-es-pujolet.jpg", location: "Sant Joan, Ibiza", area: "Countryside", distanceToCenter: "2.6 km to Sant Joan", bedrooms: 3, guests: 6, stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "6" }, { label: "Pool", value: "Saltwater" }] }, // booking.com/hotel/es/villa-es-pujolet-renovada
  { slug: "villa-lux-mar", category: "villas", destination: "ibiza", name: "Villa Lux Mar", image: "/listings/villa-lux-mar.jpg", location: "Cala Llenya, Ibiza", area: "Beachfront", distanceToCenter: "100 m to the beach", bedrooms: 3, guests: 10, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "10" }, { label: "Beach", value: "100 m" }] }, // booking.com/hotel/es/villa-lux-mar
  { slug: "can-lluc", category: "villas", destination: "ibiza", name: "Can Lluc Country Villas", image: "/listings/can-lluc.jpg", location: "Sant Rafel, Ibiza", area: "Countryside", distanceToCenter: "2.6 km to Sant Rafel", bedrooms: 2, guests: 4, badge: "SELLING FAST", stats: [{ label: "Bedrooms", value: "2" }, { label: "Guests", value: "4" }, { label: "On-site", value: "Spa" }] }, // booking.com/hotel/es/can-lluc
  // Additional Ibiza villas from Airbnb (client inventory). Photos placeholder — TBD-6.
  { slug: "can-tastem", category: "villas", destination: "ibiza", name: "Can Tastem", image: "/listings/can-tastem.jpg", location: "Ibiza", area: "Countryside", bedrooms: 4, guests: 6, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "6" }, { label: "Pool", value: "Private" }] }, // airbnb.com/rooms/1704484236181578732
  { slug: "villa-natura", category: "villas", destination: "ibiza", name: "Villa Natura", image: "/listings/villa-natura.jpg", location: "Ibiza", area: "Hillside", bedrooms: 3, guests: 4, stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "4" }, { label: "View", value: "Nature" }] }, // airbnb.com/rooms/42174453
  { slug: "casa-lotus", category: "villas", destination: "ibiza", name: "Casa Lotus", image: "/listings/casa-lotus.jpg", location: "Santa Gertrudis, Ibiza", area: "Town", bedrooms: 3, guests: 6, stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "6" }, { label: "Setting", value: "Village" }] }, // airbnb.com/rooms/855442702217983282
  { slug: "villa-can-pep-simo", category: "villas", destination: "ibiza", name: "Villa Can Pep Simó", image: "/listings/villa-can-pep-simo.jpg", location: "Can Pep Simó, Ibiza", area: "Hillside", bedrooms: 5, guests: 10, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "5" }, { label: "Guests", value: "10" }, { label: "View", value: "Castle" }] }, // airbnb.com/rooms/1578347269907890472
  { slug: "villa-maria", category: "villas", destination: "ibiza", name: "Villa Maria", image: "/listings/villa-maria.jpg", location: "Ibiza", area: "Countryside", bedrooms: 4, guests: 8, badge: "SELLING FAST", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "Style", value: "Eco" }] }, // airbnb.com/rooms/654337396696437149
  // Real Mykonos villas (client inventory, specs from booking.com). Photos still placeholder — TBD-6.
  { slug: "villa-coralba", category: "villas", destination: "mykonos", name: "Villa Coralba", image: "/listings/villa-coralba.jpg", location: "Houlakia, Mykonos", area: "Hillside", distanceToCenter: "4 km to Mykonos Town", bedrooms: 7, guests: 14, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "7" }, { label: "Guests", value: "14" }, { label: "Pool", value: "Private" }] }, // booking.com/hotel/gr/villa-coralba
  { slug: "seafront-serenity", category: "villas", destination: "mykonos", name: "Seafront Serenity", image: "/listings/seafront-serenity.jpg", location: "Kalafatis, Mykonos", area: "Beachfront", distanceToCenter: "11 km to Mykonos Town", bedrooms: 9, guests: 20, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "9" }, { label: "Guests", value: "20" }, { label: "View", value: "Sea" }] }, // booking.com/hotel/gr/seafront-9bdr-serenity-in-mykonos
  { slug: "splendid-waterfront", category: "villas", destination: "mykonos", name: "Splendid Waterfront Villa", image: "/listings/splendid-waterfront.jpg", location: "Mykonos Town", area: "Beachfront", distanceToCenter: "5 km to Mykonos Town", bedrooms: 10, guests: 20, stats: [{ label: "Bedrooms", value: "10" }, { label: "Guests", value: "20" }, { label: "View", value: "Sea" }] }, // booking.com/hotel/gr/pyrgi-3-bdr-villa-mykonos
  { slug: "villa-k", category: "villas", destination: "mykonos", name: "Villa K", image: "/listings/villa-k.jpg", location: "Panormos, Mykonos", area: "Beachfront", distanceToCenter: "6 km to Mykonos Town", bedrooms: 6, guests: 16, badge: "SELLING FAST", stats: [{ label: "Bedrooms", value: "6" }, { label: "Guests", value: "16" }, { label: "Beach", value: "200 m" }] }, // booking.com/hotel/gr/villa-k-mykonos
  { slug: "primadonna", category: "villas", destination: "mykonos", name: "Primadonna Luxury Villas", image: "/listings/primadonna.jpg", location: "Mykonos", area: "Countryside", distanceToCenter: "2.6 km to Mykonos Town", bedrooms: 12, guests: 24, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "12" }, { label: "Guests", value: "24" }, { label: "Type", value: "Estate" }] }, // booking.com/hotel/gr/primadonna-luxury-villas
  { slug: "splendid-luxury-villas", category: "villas", destination: "mykonos", name: "Splendid Luxury Villas & Suites", image: "/listings/splendid-luxury-villas.jpg", location: "Mykonos Town", area: "Town", distanceToCenter: "1.5 km to Mykonos Town", bedrooms: 9, guests: 18, stats: [{ label: "Bedrooms", value: "9" }, { label: "Guests", value: "18" }, { label: "Pool", value: "Private" }] }, // booking.com/hotel/gr/splendid-villas-mykonos
  // Additional Mykonos villas from Airbnb (client inventory). Photos placeholder — TBD-6.
  { slug: "villa-zeus", category: "villas", destination: "mykonos", name: "Villa Zeus", image: "/listings/villa-zeus.jpg", location: "Mykonos", area: "Hillside", bedrooms: 5, guests: 12, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "5" }, { label: "Guests", value: "12" }, { label: "Pool", value: "Private" }] }, // airbnb.com/rooms/1298275214434785992
  { slug: "villa-hom", category: "villas", destination: "mykonos", name: "Villa HoM", image: "/listings/villa-hom.jpg", location: "Mykonos", area: "Hillside", bedrooms: 4, guests: 8, stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "View", value: "Sea" }] }, // airbnb.com/rooms/1204880749364068921
  { slug: "villa-mystic-heaven", category: "villas", destination: "mykonos", name: "Villa Mystic Heaven", image: "/listings/villa-mystic-heaven.jpg", location: "Mykonos", area: "Countryside", bedrooms: 2, guests: 6, stats: [{ label: "Bedrooms", value: "2" }, { label: "Guests", value: "6" }, { label: "Rated", value: "5.0" }] }, // airbnb.com/rooms/1346521718555625938
  { slug: "villa-citadel", category: "villas", destination: "mykonos", name: "Citadel Villa", image: "/listings/villa-citadel.jpg", location: "Mykonos", area: "Hillside", bedrooms: 4, guests: 12, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "12" }, { label: "Style", value: "Stone" }] }, // airbnb.com/rooms/1190849843100424239
  { slug: "villa-sofia", category: "villas", destination: "mykonos", name: "Mint Villa Sofia", image: "/listings/villa-sofia.jpg", location: "Ano Mera, Mykonos", area: "Countryside", distanceToCenter: "8 km to Mykonos Town", bedrooms: 4, guests: 8, stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "View", value: "Sea" }] }, // airbnb.com/rooms/1491427527610452960
  { slug: "villa-aquadise", category: "villas", destination: "mykonos", name: "Villa Aquadise", image: "/listings/villa-aquadise.jpg", location: "Mykonos", area: "Beachfront", bedrooms: 3, guests: 7, badge: "SELLING FAST", stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "7" }, { label: "View", value: "Sea" }] }, // airbnb.com/rooms/805669413404542828
  // Real Saint Tropez villas (client inventory, specs from booking.com). Photos still placeholder — TBD-6.
  { slug: "villa-gigi", category: "villas", destination: "saint-tropez", name: "Villa Gigi", image: "/listings/villa-gigi.jpg", location: "Saint Tropez", area: "Beachfront", distanceToCenter: "2.6 km to Saint-Tropez", bedrooms: 4, guests: 8, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "View", value: "Sea" }] }, // booking.com/hotel/fr/villa-gigi-saint-tropez-luxe-design-face-mer
  { slug: "villa-acacias", category: "villas", destination: "saint-tropez", name: "Villa Acacias", image: "/listings/villa-acacias.jpg", location: "Central Saint Tropez", area: "Town", distanceToCenter: "300 m to the centre", bedrooms: 8, guests: 16, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "8" }, { label: "Guests", value: "16" }, { label: "Pool", value: "Private" }] }, // booking.com/hotel/fr/villa-acacias-au-coeur-de-saint-tropez
  { slug: "villa-joia", category: "villas", destination: "saint-tropez", name: "Villa Joia", image: "/listings/villa-joia.jpg", location: "Gassin, Saint Tropez", area: "Hillside", distanceToCenter: "3 km to Saint-Tropez", bedrooms: 5, guests: 10, stats: [{ label: "Bedrooms", value: "5" }, { label: "Guests", value: "10" }, { label: "Beach", value: "Private" }] }, // booking.com/hotel/fr/villa-joia-gassin
  { slug: "villa-jetset", category: "villas", destination: "saint-tropez", name: "Villa JetSet", image: "/listings/villa-jetset.jpg", location: "Saint Tropez", area: "Countryside", distanceToCenter: "5 km to Saint-Tropez", bedrooms: 6, guests: 12, badge: "SELLING FAST", stats: [{ label: "Bedrooms", value: "6" }, { label: "Guests", value: "12" }, { label: "Pool", value: "Private" }] }, // booking.com/hotel/fr/villa-jetset-saint-tropez
  // Additional Saint Tropez villas from Airbnb (client inventory). Photos placeholder — TBD-6.
  { slug: "villa-place-des-lices", category: "villas", destination: "saint-tropez", name: "Villa Place des Lices", image: "/listings/villa-place-des-lices.jpg", location: "Central Saint Tropez", area: "Town", distanceToCenter: "5 min to Place des Lices", bedrooms: 5, guests: 10, badge: "SIGNATURE PICK", stats: [{ label: "Bedrooms", value: "5" }, { label: "Guests", value: "10" }, { label: "Setting", value: "Central" }] }, // airbnb.com/rooms/572112356434714323
  { slug: "villa-du-golf", category: "villas", destination: "saint-tropez", name: "Villa Du Golf", image: "/listings/villa-du-golf.jpg", location: "Sainte-Maxime", area: "Countryside", distanceToCenter: "14 km to Saint-Tropez", bedrooms: 4, guests: 8, stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "Setting", value: "Golf" }] }, // airbnb.com/rooms/1457987670870655927
  { slug: "villa-gassin-hills", category: "villas", destination: "saint-tropez", name: "Villa Gassin Hills", image: "/listings/villa-gassin-hills.jpg", location: "Gassin, Saint Tropez", area: "Hillside", distanceToCenter: "6 km to Saint-Tropez", bedrooms: 4, guests: 10, badge: "HIGH DEMAND", stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "10" }, { label: "Pool", value: "Heated" }] }, // airbnb.com/rooms/1709537830333525648
  { slug: "villa-provencale", category: "villas", destination: "saint-tropez", name: "Villa Provençale", image: "/listings/villa-provencale.jpg", location: "Gassin, Saint Tropez", area: "Hillside", distanceToCenter: "7 km to Saint-Tropez", bedrooms: 4, guests: 8, stats: [{ label: "Bedrooms", value: "4" }, { label: "Guests", value: "8" }, { label: "View", value: "Bay" }] }, // airbnb.com/rooms/1690546885412085465
  { slug: "villa-tropezienne", category: "villas", destination: "saint-tropez", name: "Villa Tropézienne", image: "/listings/villa-tropezienne.jpg", location: "Saint Tropez", area: "Town", distanceToCenter: "3 km to Saint-Tropez", bedrooms: 3, guests: 6, stats: [{ label: "Bedrooms", value: "3" }, { label: "Guests", value: "6" }, { label: "Pool", value: "Heated" }] }, // airbnb.com/rooms/1449404921042522235

  // ---- YACHTS ----
  // Real Ibiza yachts & speed boats (Xaloc Charter). Photos placeholder — TBD-6.
  { slug: "riva-argo-90", category: "yachts", destination: "ibiza", name: "Riva Argo 90", image: "/listings/riva-argo-90.jpg", location: "Marina Ibiza", boatType: "Motor Yacht", capacity: 12, badge: "HIGH DEMAND", stats: [{ label: "Length", value: "28.7 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "4" }] }, // xaloccharter.com/en/yacht-charter-ibiza/riva-argo-90
  { slug: "predator-84", category: "yachts", destination: "ibiza", name: "Sunseeker Predator 84", image: "/listings/predator-84.jpg", location: "Marina Ibiza", boatType: "Motor Yacht", capacity: 12, badge: "SIGNATURE PICK", stats: [{ label: "Length", value: "27.5 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "4" }] }, // xaloccharter.com/en/yacht-charter-ibiza/sunseeker-predator-84-ariyas
  { slug: "azimut-60", category: "yachts", destination: "ibiza", name: "Azimut 60", image: "/listings/azimut-60.jpg", location: "Marina Ibiza", boatType: "Motor Yacht", capacity: 12, stats: [{ label: "Length", value: "17.5 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "3" }] }, // xaloccharter.com/en/yacht-charter-ibiza/azimut-60
  { slug: "astondoa-53", category: "yachts", destination: "ibiza", name: "Astondoa 53 Open", image: "/listings/astondoa-53.jpg", location: "Marina Ibiza", boatType: "Speed Boat", capacity: 12, stats: [{ label: "Length", value: "16.5 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "2" }] }, // xaloccharter.com/en/yacht-charter-ibiza/astondoa-53-open
  { slug: "pardo-50c", category: "yachts", destination: "ibiza", name: "Pardo 50C", image: "/listings/pardo-50c.jpg", location: "Marina Ibiza", boatType: "Speed Boat", capacity: 12, stats: [{ label: "Length", value: "16.3 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "2" }] }, // xaloccharter.com/en/yacht-charter-ibiza/pardo-50c
  { slug: "de-antonio-d50", category: "yachts", destination: "ibiza", name: "De Antonio D50 Coupe", image: "/listings/de-antonio-d50.jpg", location: "Marina Ibiza", boatType: "Speed Boat", capacity: 11, stats: [{ label: "Length", value: "15.5 m" }, { label: "Guests", value: "11" }, { label: "Cabins", value: "2" }] }, // xaloccharter.com/en/yacht-charter-ibiza/d50-coupe
  { slug: "vanquish-45", category: "yachts", destination: "ibiza", name: "Vanquish 45 T", image: "/listings/vanquish-45.jpg", location: "Marina Ibiza", boatType: "Speed Boat", capacity: 11, badge: "SELLING FAST", stats: [{ label: "Length", value: "13.6 m" }, { label: "Guests", value: "11" }, { label: "Cabins", value: "1" }] }, // xaloccharter.com/en/yacht-charter-ibiza/vanquish-45-t
  // Real Mykonos yachts (Mykonos Gold + viravira.co). Photos placeholder — TBD-6.
  { slug: "my-george-p", category: "yachts", destination: "mykonos", name: "M/Y George P", image: "/listings/my-george-p.jpg", location: "Mykonos", boatType: "Motor Yacht", capacity: 12, badge: "SIGNATURE PICK", stats: [{ label: "Length", value: "35 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "5" }] }, // mykonosgold.com/fleet/sunseeker-george-p-35m
  { slug: "my-for-ever", category: "yachts", destination: "mykonos", name: "M/Y For Ever", image: "/listings/my-for-ever.jpg", location: "Mykonos", boatType: "Motor Yacht", capacity: 8, badge: "HIGH DEMAND", stats: [{ label: "Length", value: "24 m" }, { label: "Guests", value: "8" }, { label: "Speed", value: "48 kn" }] }, // mykonosgold.com/fleet/pershing-for-ever-24m
  { slug: "cat-lagoon-51", category: "yachts", destination: "mykonos", name: "Catamaran Lagoon 51", image: "/listings/cat-lagoon-51.jpg", location: "Mykonos", boatType: "Catamaran", capacity: 12, stats: [{ label: "Length", value: "15.6 m" }, { label: "Guests", value: "12" }, { label: "Cabins", value: "6" }] }, // viravira.co/catamaran-charter/mykonos/catamaran-charter-28595-b
  { slug: "cat-aura-51", category: "yachts", destination: "mykonos", name: "Catamaran Aura 51", image: "/listings/cat-aura-51.jpg", location: "Platis Gialos, Mykonos", boatType: "Catamaran", capacity: 8, stats: [{ label: "Length", value: "15.5 m" }, { label: "Guests", value: "8" }, { label: "Cabins", value: "4" }] }, // viravira.co/catamaran-charter/platis-gialos/catamaran-charter-24649-b
  // Real Saint Tropez yachts (Princess Charter Yachts). Photos placeholder — TBD-6.
  { slug: "my-millesime", category: "yachts", destination: "saint-tropez", name: "M/Y Millesime", image: "/listings/my-millesime.jpg", location: "Port de Saint-Tropez", boatType: "Motor Yacht", capacity: 10, badge: "SIGNATURE PICK", stats: [{ label: "Length", value: "37 m" }, { label: "Guests", value: "10" }, { label: "Cabins", value: "5" }] }, // princesscharteryachts.com/products/m-y-millesime-luxury-yacht-charter-cannes
  { slug: "my-kora", category: "yachts", destination: "saint-tropez", name: "M/Y Kora", image: "/listings/my-kora.jpg", location: "Port de Saint-Tropez", boatType: "Motor Yacht", capacity: 10, badge: "HIGH DEMAND", stats: [{ label: "Length", value: "25 m" }, { label: "Guests", value: "10" }, { label: "Cabins", value: "5" }] }, // princesscharteryachts.com/products/m-y-kora-yacht-charter-monaco
  { slug: "my-twins", category: "yachts", destination: "saint-tropez", name: "M/Y Twins", image: "/listings/my-twins.jpg", location: "Port de Saint-Tropez", boatType: "Motor Yacht", capacity: 11, stats: [{ label: "Length", value: "28.5 m" }, { label: "Guests", value: "11" }, { label: "Cabins", value: "5" }] }, // princesscharteryachts.com/products/m-y-twins-yacht-charter-amalfi-coast

  // ---- CARS ----
  { slug: "car-huracan-ibz", category: "cars", destination: "ibiza", name: "Lamborghini Huracán", image: U(IMG.car), location: "Delivered · Ibiza", carType: "Sports", transmission: "Automatic", badge: "HIGH DEMAND", stats: [{ label: "Seats", value: "2" }, { label: "Gearbox", value: "Auto" }, { label: "Power", value: "640 hp" }] },
  { slug: "car-defender-ibz", category: "cars", destination: "ibiza", name: "Land Rover Defender", image: U(IMG.car2), location: "Delivered · Ibiza", carType: "SUV", transmission: "Automatic", stats: [{ label: "Seats", value: "5" }, { label: "Gearbox", value: "Auto" }, { label: "Drive", value: "4x4" }] },
  { slug: "car-mini-myk", category: "cars", destination: "mykonos", name: "Mini Moke Cabrio", image: U(IMG.car), location: "Delivered · Mykonos", carType: "Convertible", transmission: "Manual", badge: "SELLING FAST", stats: [{ label: "Seats", value: "4" }, { label: "Gearbox", value: "Manual" }, { label: "Roof", value: "Open" }] },
  { slug: "car-gwagon-myk", category: "cars", destination: "mykonos", name: "Mercedes-AMG G 63", image: U(IMG.car2), location: "Delivered · Mykonos", carType: "SUV", transmission: "Automatic", stats: [{ label: "Seats", value: "5" }, { label: "Gearbox", value: "Auto" }, { label: "Power", value: "585 hp" }] },
  { slug: "car-ferrari-st", category: "cars", destination: "saint-tropez", name: "Ferrari Portofino", image: U(IMG.car), location: "Delivered · Saint Tropez", carType: "Convertible", transmission: "Automatic", badge: "SIGNATURE PICK", stats: [{ label: "Seats", value: "2+2" }, { label: "Gearbox", value: "Auto" }, { label: "Roof", value: "Retractable" }] },
  { slug: "car-bentley-st", category: "cars", destination: "saint-tropez", name: "Bentley Continental GT", image: U(IMG.car2), location: "Delivered · Saint Tropez", carType: "Sedan", transmission: "Automatic", stats: [{ label: "Seats", value: "4" }, { label: "Gearbox", value: "Auto" }, { label: "Power", value: "650 hp" }] },

  // ---- BEACH CLUBS ----
  { slug: "bc-blue-marlin", category: "beach-clubs", destination: "ibiza", name: "Blue Cala Club", image: U(IMG.beach), location: "Cala Jondal, Ibiza", area: "Bay", badge: "HIGH DEMAND", stats: [{ label: "Style", value: "Daybeds" }, { label: "Music", value: "Sunset DJ" }] },
  { slug: "bc-experimental", category: "beach-clubs", destination: "ibiza", name: "Cap Beach", image: U(IMG.beach2), location: "Cap des Falcó, Ibiza", area: "Beachfront", stats: [{ label: "Style", value: "Boho" }, { label: "Table", value: "Front row" }] },
  { slug: "bc-nammos", category: "beach-clubs", destination: "mykonos", name: "Psarou Sands", image: U(IMG.beach), location: "Psarou, Mykonos", area: "Beachfront", badge: "SIGNATURE PICK", stats: [{ label: "Style", value: "Iconic" }, { label: "Table", value: "Reserved" }] },
  { slug: "bc-scorpios", category: "beach-clubs", destination: "mykonos", name: "Paraga Point", image: U(IMG.beach2), location: "Paraga, Mykonos", area: "Peninsula", stats: [{ label: "Style", value: "Sundown" }, { label: "Bed", value: "Front row" }] },
  { slug: "bc-club55", category: "beach-clubs", destination: "saint-tropez", name: "Pampelonne 55", image: U(IMG.beach), location: "Pampelonne, Saint Tropez", area: "Beachfront", badge: "SELLING FAST", stats: [{ label: "Style", value: "Legendary" }, { label: "Lunch", value: "Reserved" }] },
  { slug: "bc-nikki", category: "beach-clubs", destination: "saint-tropez", name: "Baie Beach", image: U(IMG.beach2), location: "Pampelonne, Saint Tropez", area: "Bay", stats: [{ label: "Style", value: "Party" }, { label: "Bed", value: "VIP" }] },
];

export function listingsByCategory(category: ListingCategory): Listing[] {
  return listings.filter((l) => l.category === category);
}

export function findListing(category: ListingCategory, slug: string): Listing | undefined {
  return listings.find((l) => l.category === category && l.slug === slug);
}
