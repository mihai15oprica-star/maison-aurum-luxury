export const brand = {
  name: "Maison Aurum",
  tagline: "Private Luxury Concierge",
  established: "Established MMXVI",
  phone: "+377 99 99 00 00",
  email: "concierge@maisonaurum.com",
  address: "12 Avenue de la Costa, Monte-Carlo 98000",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Villas", href: "/villas" },
  { label: "Yachts", href: "/yachts" },
  { label: "Cars", href: "/cars" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Clubs", href: "/clubs" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of discretion" },
  { value: 47, suffix: "", label: "Destinations curated" },
  { value: 2400, suffix: "+", label: "Members served" },
  { value: 24, suffix: "/7", label: "Concierge availability" },
];

export const services = [
  {
    slug: "villas",
    title: "Private Villas",
    blurb: "Ultra-private estates with full staff, chef, and security in the world's most coveted enclaves.",
    icon: "▲",
    cover: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
  },
  {
    slug: "yachts",
    title: "Yacht Charters",
    blurb: "Sailing and motor yachts from 30 to 130 metres, with itineraries tailored to the wind and your wishes.",
    icon: "◆",
    cover: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1600&q=80",
  },
  {
    slug: "cars",
    title: "Motorcar Hire",
    blurb: "From the Pagani Huayra to a chauffeured Rolls-Royce Phantom. Delivered to your doorstep.",
    icon: "●",
    cover: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    blurb: "Tables that don't exist on any list. From three-Michelin starred salons to chef's-only counters.",
    icon: "✦",
    cover: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
  },
  {
    slug: "clubs",
    title: "Private Clubs",
    blurb: "Guaranteed access and private tables at the season's most desired venues — without the velvet rope.",
    icon: "✶",
    cover: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80",
  },
  {
    slug: "experiences",
    title: "Bespoke Experiences",
    blurb: "Helicopter to a vineyard for lunch. Helmut Newton's old studio for the afternoon. Whatever you imagine.",
    icon: "✧",
    cover: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
  },
];

const U = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const destinations = [
  {
    slug: "milan",
    name: "Milan",
    country: "Italy",
    tagline: "The capital of quiet luxury.",
    season: "Sept — Apr",
    coords: "45.4642° N, 9.1900° E",
    cover: U("1520175480921-4edfa2983e0f", 2400),
    intro:
      "Milan does not announce itself. It is the city of the boardroom and the salon, of Brera ateliers and unmarked doors on Via Manzoni. We open them.",
    highlights: [
      { title: "Quadrilatero della Moda", body: "Private after-hours showings at Armani, Bottega Veneta, Cucinelli — the doors close, the espresso arrives, the collection appears." },
      { title: "Lake Como Estates", body: "Helicopter transfer to a Cernobbio villa, with steward, chef and a varnished Riva at the dock." },
      { title: "Salone del Mobile", body: "Access to the closed previews, the private dinners, and the after-hours at Nilufar Depot." },
    ],
    images: [
      U("1520175480921-4edfa2983e0f"),
      U("1540555700478-4be289fbecef"),
      U("1414235077428-338989a2e8c0"),
      U("1503376780353-7e6692767b70"),
    ],
  },
  {
    slug: "mykonos",
    name: "Mykonos",
    country: "Greece",
    tagline: "Where the Aegean meets the velvet rope.",
    season: "May — Oct",
    coords: "37.4467° N, 25.3289° E",
    cover: U("1533105079780-92b9be482077", 2400),
    intro:
      "The island sets a stage — clifftop villas, white marble, sun-bleached linens. We curate the season for you, from Nammos at noon to Scorpios at sundown.",
    highlights: [
      { title: "Clifftop Villas", body: "Eight to fourteen-bedroom estates in Aleomandra and Agios Lazaros with private beach access and full staff." },
      { title: "Beach Clubs", body: "Front-row daybeds at Nammos, Principote and Scorpios — reserved months in advance, ready when you land." },
      { title: "Private Cycladic Cruises", body: "70-metre motor yacht to Delos, Rhenia and the secret coves of Naxos. Chef and DJ aboard." },
    ],
    images: [
      U("1533105079780-92b9be482077"),
      U("1548574505-5e239809ee19"),
      U("1605281317010-fe5ffe798166"),
      U("1613977257363-707ba9348227"),
    ],
  },
  {
    slug: "st-barth",
    name: "St. Barth",
    country: "French West Indies",
    tagline: "The Caribbean, by invitation only.",
    season: "Nov — Apr",
    coords: "17.9000° N, 62.8333° W",
    cover: U("1548574505-5e239809ee19", 2400),
    intro:
      "Eight square miles of perfect coastline, French restraint and quiet wealth. The villas are private. The yachts are anchored. The reservations were made last September.",
    highlights: [
      { title: "Cliff-Side Villas", body: "Anse des Cayes and Pointe Milou estates with infinity pools, full crew and the season's most sought-after sunset orientations." },
      { title: "New Year on the Rock", body: "The week between Christmas and Jan 2 — yacht moorings, Nikki Beach tables, Eden Rock cabanas, all confirmed." },
      { title: "Le Ti, Le Toiny, Bonito", body: "Tables that vanish from the phone in November. Yours, every night you wish." },
    ],
    images: [
      U("1548574505-5e239809ee19"),
      U("1605281317010-fe5ffe798166"),
      U("1613977257363-707ba9348227"),
      U("1414235077428-338989a2e8c0"),
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    tagline: "Where ambition was given a skyline.",
    season: "Oct — Apr",
    coords: "25.2048° N, 55.2708° E",
    cover: U("1512453979798-5ea266f8880c", 2400),
    intro:
      "The newest of the world's old capitals. Penthouse views, private aviation, desert-edge palaces and the discreet hospitality of the Gulf.",
    highlights: [
      { title: "Palm Jumeirah & Bulgari Residences", body: "Three to eight-bedroom penthouses with private elevator, beach club and house staff." },
      { title: "Desert Majlis", body: "Sunset banquet by your own chef in a private dune camp, with falconry and astronomical guide." },
      { title: "DIFC & Atlantis The Royal", body: "Tables at Cipriani, Nobu, La Mer; suites at the Royal Mansion confirmed before you land." },
    ],
    images: [
      U("1512453979798-5ea266f8880c"),
      U("1540555700478-4be289fbecef"),
      U("1503376780353-7e6692767b70"),
      U("1414235077428-338989a2e8c0"),
    ],
  },
  {
    slug: "monaco",
    name: "Monaco",
    country: "Monaco",
    tagline: "The carré d'or of the Riviera.",
    season: "Apr — Oct",
    coords: "43.7384° N, 7.4246° E",
    cover: U("1494522855154-9297ac14b55f", 2400),
    intro:
      "Grand Prix week, the Yacht Show, the season at Monte-Carlo. Our quietest territory and the one we know best.",
    highlights: [
      { title: "Grand Prix Terraces", body: "Hairpin and Casino-corner terraces with butler, sommelier and helicopter return." },
      { title: "Hôtel de Paris Suites", body: "Princess Grace and Winston Churchill suites — released only to introductions." },
      { title: "Monaco Yacht Show", body: "Owner-only previews of the season's superyacht inventory." },
    ],
    images: [
      U("1494522855154-9297ac14b55f"),
      U("1605281317010-fe5ffe798166"),
      U("1503376780353-7e6692767b70"),
      U("1414235077428-338989a2e8c0"),
    ],
  },
  {
    slug: "courchevel",
    name: "Courchevel",
    country: "France",
    tagline: "The high altar of alpine luxury.",
    season: "Dec — Mar",
    coords: "45.4154° N, 6.6347° E",
    cover: U("1540555700478-4be289fbecef", 2400),
    intro:
      "1850 itself: the Cheval Blanc, the K2, the chalets above the piste with their butlers and ski valets and after-dinner caviar.",
    highlights: [
      { title: "Ski-In Chalets", body: "12-bedroom chalets with spa, cinema, ski-valet and Michelin chef in residence." },
      { title: "Le 1947 & La Table du Kilimandjaro", body: "Three-star tables held for the season." },
      { title: "Heliski Mont Blanc", body: "Private heliski with mountain guide and on-glacier champagne service." },
    ],
    images: [
      U("1540555700478-4be289fbecef"),
      U("1613977257363-707ba9348227"),
      U("1414235077428-338989a2e8c0"),
      U("1503376780353-7e6692767b70"),
    ],
  },
];
