export type Listing = {
  name: string;
  location: string;
  spec: string;
  price: string;
  image: string;
};

export type Category = {
  slug: "villas" | "yachts" | "cars" | "restaurants" | "clubs" | "experiences";
  hero: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  pillars: { title: string; body: string }[];
  listings: Listing[];
  faq: { q: string; a: string }[];
};

const U = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const ID = {
  home: "1544551763-46a013bb70d5",
  destinations: "1533105079780-92b9be482077",
  villa: "1613977257363-707ba9348227",
  yacht: "1544551763-46a013bb70d5",
  milan: "1520175480921-4edfa2983e0f",
  mykonos: "1533105079780-92b9be482077",
  stbarth: "1590523741831-ab7e8b8f9c7f",
  dubai: "1512453979798-5ea266f8880c",
  car: "1503376780353-7e6692767b70",
  dining: "1414235077428-338989a2e8c0",
  club: "1566417713940-fe7c737a9ef2",
  lifestyle: "1540555700478-4be289fbecef",
};

export const categories: Record<Category["slug"], Category> = {
  villas: {
    slug: "villas",
    eyebrow: "— Pillar No. 01 · Villas & Estates",
    title: "Private villas.",
    subtitle:
      "Ultra-private homes — cliffside, vineyard, beachfront, alpine — with full staff, chef, and security. From a week to a season.",
    intro:
      "Our villas are not on rental platforms. They are private residences whose owners have, over years, come to trust us with their keys. Eight to twenty bedrooms. Full staff in residence. A chef who already knows your child's allergies.",
    hero: U(ID.villa, 2400),
    pillars: [
      { title: "Owner-known portfolio", body: "Two hundred and forty residences across Mediterranean, Caribbean and Alpine markets — every key handed over personally." },
      { title: "Resident staff", body: "Butler, housekeeper, chef, driver, security. Where required, a personal nanny and tutor in residence." },
      { title: "Full provisioning", body: "Pantry stocked to your preferences, flowers arranged in your suite, wines decanted at your hour." },
    ],
    listings: [
      { name: "Villa La Fiorita", location: "Cernobbio, Lake Como", spec: "12 BR · Private mooring · 7 ha", price: "from €185,000 / wk", image: U(ID.villa) },
      { name: "Villa Asteri", location: "Aleomandra, Mykonos", spec: "10 BR · Private beach · Heliport", price: "from €240,000 / wk", image: U(ID.mykonos) },
      { name: "Maison du Toiny", location: "Anse de Toiny, St. Barth", spec: "8 BR · 3 pools · Tennis", price: "from $220,000 / wk", image: U(ID.stbarth) },
      { name: "Palazzo Manzoni", location: "Brera, Milan", spec: "8 BR · Frescoes · Private garden", price: "POA", image: U(ID.milan) },
      { name: "Chalet Mont Cervin", location: "Courchevel 1850", spec: "14 BR · Ski-in · Spa · Cinema", price: "from €290,000 / wk", image: U(ID.lifestyle) },
      { name: "Bulgari Penthouse", location: "Palm Jumeirah, Dubai", spec: "6 BR · Private beach · 2,400 sqm", price: "from $180,000 / wk", image: U(ID.dubai) },
    ],
    faq: [
      { q: "How quickly can a villa be confirmed?", a: "Within hours, if the dates exist. For high season we begin conversations nine to twelve months ahead." },
      { q: "Do you accept off-market enquiries?", a: "Always. Many of our finest residences are not listed at all and are released only to introductions." },
    ],
  },
  yachts: {
    slug: "yachts",
    eyebrow: "— Pillar No. 02 · Yachts & Aviation",
    title: "Yacht charters.",
    subtitle:
      "Sail and motor yachts from 30 to 130 metres. Crewed itineraries from Porto Cervo to the Cyclades, from the Bahamas to the Maldives.",
    intro:
      "We curate a private fleet whose owners — many of whom we have known for fifteen years — release their boats only to our members. The captain knows the wind. The chef has the second Michelin star. The itinerary is yours.",
    hero: U(ID.yacht, 2400),
    pillars: [
      { title: "Owner-direct fleet", body: "Forty motor yachts and twelve sailing yachts across three oceans, released to our members before broker listing." },
      { title: "Itinerary atelier", body: "Cycladic, Balearic, Tyrrhenian and Adriatic itineraries drawn by hand — every cove, port and table arranged." },
      { title: "Aviation pairing", body: "Helicopter-to-yacht transfer and jet positioning in the same booking. One concierge, both legs." },
    ],
    listings: [
      { name: "M/Y Sereno", location: "Ferretti · 38m", spec: "5 cabins · 10 guests · 8 crew", price: "from €280,000 / wk", image: U(ID.yacht) },
      { name: "M/Y Onyx", location: "Benetti · 65m", spec: "7 cabins · 14 guests · helideck", price: "from €1.2M / wk", image: U(ID.yacht) },
      { name: "S/Y Galene", location: "Perini Navi · 56m", spec: "5 cabins · 12 guests · sail", price: "from €310,000 / wk", image: U(ID.mykonos) },
      { name: "M/Y Velaria", location: "Lürssen · 88m", spec: "10 cabins · 18 guests · spa", price: "from €2.4M / wk", image: U(ID.yacht) },
      { name: "M/Y Aurelia", location: "Heesen · 50m", spec: "5 cabins · 12 guests", price: "from €420,000 / wk", image: U(ID.stbarth) },
      { name: "S/Y Vento", location: "Wally · 40m", spec: "4 cabins · 8 guests · regatta-ready", price: "from €185,000 / wk", image: U(ID.yacht) },
    ],
    faq: [
      { q: "Can a charter be arranged on short notice?", a: "Yes — we hold release agreements with many owners precisely for moments like that." },
      { q: "Do you handle the air leg too?", a: "Always. Jet, helicopter, and customs are one conversation, one bill, one concierge." },
    ],
  },
  cars: {
    slug: "cars",
    eyebrow: "— Pillar No. 03 · Motorcars",
    title: "Motorcars on call.",
    subtitle:
      "From the chauffeured Phantom waiting at the FBO to the Pagani Huayra delivered to your villa. Self-drive and driven, by the hour or the season.",
    intro:
      "Our garage holds three hundred and forty motorcars across Europe — modern hypercars, classic Ferraris, restomod Defenders, and the city Phantoms most of our members ride in. Vehicles arrive valeted, fuelled, and detailed.",
    hero: U(ID.car, 2400),
    pillars: [
      { title: "Hypercar collection", body: "Pagani, Bugatti, Koenigsegg, Ferrari Icona series — drivable, properly insured, delivered." },
      { title: "Chauffeured fleet", body: "Phantoms, Cullinans, Mercedes-Maybach. Drivers EPP-trained, multilingual, NDA-bound." },
      { title: "Cross-border delivery", body: "Pick up in Milan, return in Saint-Tropez. Paperwork is ours." },
    ],
    listings: [
      { name: "Rolls-Royce Phantom EWB", location: "Chauffeured · Monte-Carlo", spec: "City & airport · day rates from €2,400", price: "€2,400 / day", image: U(ID.car) },
      { name: "Pagani Huayra Roadster", location: "Self-drive · Milan", spec: "764 hp · Carbon-titanium chassis", price: "€12,500 / day", image: U(ID.car) },
      { name: "Ferrari 250 GT Lusso (1964)", location: "Classic · Milan", spec: "Concorso-grade · with road book", price: "€8,800 / day", image: U(ID.car) },
      { name: "Bentley Continental GT Speed", location: "Self-drive · Cannes", spec: "Four-seat grand tourer", price: "€2,900 / day", image: U(ID.car) },
      { name: "Mercedes-Maybach S-Class", location: "Chauffeured · Dubai", spec: "Executive rear · multilingual driver", price: "$1,800 / day", image: U(ID.car) },
      { name: "Land Rover Defender — restomod", location: "Mountain · Courchevel", spec: "Bespoke interior · ski rails", price: "€1,400 / day", image: U(ID.car) },
    ],
    faq: [
      { q: "Are deliveries handled door-to-door?", a: "Yes, to your villa, hotel, or FBO. Returns can be in a different city or country." },
      { q: "Insurance & paperwork?", a: "Comprehensive — the policy travels with the car. Authentication documents for classics included." },
    ],
  },
  restaurants: {
    slug: "restaurants",
    eyebrow: "— Pillar No. 04 · Tables & Cellars",
    title: "Restaurants.",
    subtitle:
      "Tables held when the book is closed. Chef's-only counters. Private dining rooms with the door locked behind you.",
    intro:
      "Our House Maître is the former Director of one of Europe's great three-star houses. He travels with a book that has every Maître's mobile number, every chef's private cellar key, and the standing reservations our members enjoy at four hundred and twelve restaurants worldwide.",
    hero: U(ID.dining, 2400),
    pillars: [
      { title: "Standing reservations", body: "Tables held in your name at four hundred restaurants — released only when you have asked us to." },
      { title: "Chef's table dinners", body: "Private dining with three-star chefs at residence, or your villa." },
      { title: "Cellar audiences", body: "Vertical tastings of grand cru wines, hosted by chef-sommeliers." },
    ],
    listings: [
      { name: "Sushi Saito", location: "Tokyo · Akasaka", spec: "3★ · 8 seats · invitation-only", price: "POA", image: U(ID.dining) },
      { name: "Le Cinq", location: "Paris · 8e", spec: "3★ · George V · cellar tour", price: "POA", image: U(ID.dining) },
      { name: "Da Vittorio", location: "Brusaporto · Bergamo", spec: "3★ · chef's table available", price: "POA", image: U(ID.dining) },
      { name: "Le Toiny", location: "St. Barth · Anse de Toiny", spec: "Private terrace · ocean", price: "POA", image: U(ID.stbarth) },
      { name: "Nammos", location: "Mykonos · Psarou", spec: "Front-row daybed table", price: "POA", image: U(ID.mykonos) },
      { name: "Zuma", location: "Dubai · DIFC", spec: "Robata bar · private room", price: "POA", image: U(ID.dubai) },
    ],
    faq: [
      { q: "Same-night tables?", a: "Usually, yes. If the city is one we cover, the answer is yes by midnight." },
      { q: "Dietary, allergy, family considerations?", a: "Held in your member dossier. Chefs are briefed in advance, every time." },
    ],
  },
  clubs: {
    slug: "clubs",
    eyebrow: "— Pillar No. 05 · Clubs & Members' Rooms",
    title: "Private clubs.",
    subtitle:
      "Membership reciprocity, guaranteed entry and private tables at the season's most desired clubs — without the queue.",
    intro:
      "We hold founding or honorary memberships in ninety-six clubs and members' rooms. Where we cannot give you a key, we will introduce you to the door — and the table on the inside.",
    hero: U(ID.club, 2400),
    pillars: [
      { title: "Reciprocal memberships", body: "Direct access through our roster of ninety-six clubs across nineteen cities." },
      { title: "Guaranteed entry, never the queue", body: "Private entrance, your table waiting, your bottle already on ice." },
      { title: "Discreet exits", body: "When the night ends, the car is at the door no one else uses." },
    ],
    listings: [
      { name: "The Garden Room", location: "London · Berkeley Square", spec: "Members' dining · top-floor lounge", price: "Reciprocal", image: U(ID.club) },
      { name: "Casa Tua", location: "Miami · Aspen · Paris", spec: "Members' dining · upstairs lounge", price: "Reciprocal", image: U(ID.dining) },
      { name: "Scorpios", location: "Mykonos · Paraga", spec: "Front-row daybed · DJ booth view", price: "Guest list", image: U(ID.mykonos) },
      { name: "Twiga Beach Club", location: "Forte dei Marmi", spec: "Cabana · evening reservation", price: "Guest list", image: U(ID.stbarth) },
      { name: "Soho House Greek Street", location: "London · Soho", spec: "Private room · roof terrace", price: "Reciprocal", image: U(ID.club) },
      { name: "Billionaire Mayfair", location: "London", spec: "Private VIP table", price: "Guest list", image: U(ID.club) },
    ],
    faq: [
      { q: "Will you guarantee entry on a busy night?", a: "If we accept the booking, yes. The Maison's word at the door is our currency." },
      { q: "Can you arrange private rooms for events?", a: "Often, even in clubs that don't publish private hire — provided the night is right." },
    ],
  },
  experiences: {
    slug: "experiences",
    eyebrow: "— Pillar No. 06 · Bespoke",
    title: "Bespoke experiences.",
    subtitle:
      "The things that cannot be bought, only arranged. The things you remember twenty years later — and tell only your closest friends.",
    intro:
      "A private after-hours tour of a great museum, conducted by its director. A vineyard lunch in a Tuscan cellar, prepared by a chef who only cooks for friends. An evening at a private observatory in the Atacama. The list is not a list.",
    hero: U(ID.lifestyle, 2400),
    pillars: [
      { title: "Private museum hours", body: "After-close tours of the world's great institutions, hosted by directors and curators." },
      { title: "Cultural audiences", body: "Conversations with artists, designers, writers and chefs — in their studios, ateliers and kitchens." },
      { title: "Once-only journeys", body: "Sahara, Antarctica, Galápagos — your route, our logistics, no other guests." },
    ],
    listings: [
      { name: "Museum After-Hours", location: "Florence", spec: "Closed doors · private guide", price: "from €38,000", image: U(ID.lifestyle) },
      { name: "Atacama Observatory Night", location: "San Pedro · Chile", spec: "Private dome · chef · astronomer", price: "from $42,000", image: U(ID.lifestyle) },
      { name: "Sahara Camp & Bivouac", location: "Erg Chebbi · Morocco", spec: "Private silk camp · falconry", price: "from $26,000 / night", image: U(ID.lifestyle) },
      { name: "Burgundy Cellar Audience", location: "Côte de Nuits · France", spec: "Domaine lunch · vertical tasting", price: "POA", image: U(ID.dining) },
      { name: "Helicopter Glacier Picnic", location: "Mont Blanc · Chamonix", spec: "Private chef · guide · champagne", price: "from €18,000", image: U(ID.lifestyle) },
      { name: "Designer's Atelier Visit", location: "Paris · undisclosed", spec: "Private fitting · archives shown", price: "By introduction", image: U(ID.lifestyle) },
    ],
    faq: [
      { q: "Is the listing exhaustive?", a: "Never. It is a fraction. Tell us your imagined day, and we will build it." },
      { q: "How long do you need?", a: "For some, a week. For the most elaborate, six months. We will tell you immediately what is possible." },
    ],
  },
};
