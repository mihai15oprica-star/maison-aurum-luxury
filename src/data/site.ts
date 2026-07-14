import { whatsappHref } from "@/data/contact";

export const brand = {
  name: "Baboó",
  since: "Since 2019",
  slogan: "Where Daydreams Become Reality",
  location: "Bucharest, Romania",
};

// Primary navigation — same count/type as MADE. "Contact Us" is a WhatsApp link,
// handled separately (see contactHref) rather than an internal route.
export const nav: { label: string; href: string }[] = [
  { label: "Villas", href: "/villas" },
  { label: "Yachts", href: "/yachts" },
  { label: "Cars", href: "/cars" },
  { label: "Clubs", href: "/clubs" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Beach Clubs", href: "/beach-clubs" },
  { label: "Extra Services", href: "/extra-services" },
  // TBD-7: "About" destination undecided — dedicated page vs. anchor. Points to a
  // provisional /about page for now.
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/" }, // Destinations → the "/" selector
];

// The Contact Us button (header, footer, menu) opens WhatsApp — never a form.
export const contactHref = whatsappHref(
  "Hello Baboó — I would like to enquire about your services."
);

// Membership banner shown at the top of every destination page.
export const membership = {
  // TBD-2: final copy for the membership band
  text: "MEMBERSHIP REQUEST",
  subtext: "Access to Baboó's private network is by application.",
  ctaLabel: "Apply",
};

// 6 brand highlight tiles (mirror of MADE's DIFFERENCE / PRIORITY ACCESS / ...).
// TBD-2: final titles + copy, rewritten with the client.
export const brandHighlights: { title: string; body: string }[] = [
  { title: "Baboó Difference", body: "A single, dedicated point of contact who knows the islands — and knows you." }, // TBD-2
  { title: "Priority Access", body: "The tables, villas and daybeds that are never available. They are, for you." }, // TBD-2
  { title: "24/7 Assistance", body: "Day or night, in season or out, someone answers. Immediately." }, // TBD-2
  { title: "Your Own Concierge", body: "Not a call centre. One person, one number, the entire trip." }, // TBD-2
  { title: "VIP Experience", body: "Arrivals without queues, entrances without ropes, service without limits." }, // TBD-2
  { title: "Unlimited Requests", body: "Ask for anything. If it can be arranged, we arrange it." }, // TBD-2
];

// 3 trust blocks (text + image), mirror of MADE's trust row.
// TBD-2: final copy, rewritten with the client.
export const trustBlocks: { title: string; body: string; image: string }[] = [
  {
    title: "24/7 Support for Guests",
    body: "From landing to departure, a real person is one message away — for the plan and for the unplanned.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", // TBD-6
  },
  {
    title: "Professional Villa Inspections",
    body: "Every home in our book is visited, verified and photographed by us — never a listing taken on trust.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80", // TBD-6
  },
  {
    title: "Best Price Guarantee",
    body: "Direct relationships with owners and venues mean the rate you receive is the rate we would pay ourselves.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80", // TBD-6
  },
];

// "Our Services" grid on each destination page. Each card links to that destination's
// own scoped service page (/[destination]/[category]).
export const serviceCards: { title: string; href: (d: string) => string; image: string }[] = [
  { title: "Villas Booking", href: (d) => `/${d}/villas`, image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&q=80" }, // TBD-6
  { title: "Car Rental", href: (d) => `/${d}/cars`, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80" }, // TBD-6
  { title: "Yacht Charter", href: (d) => `/${d}/yachts`, image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1000&q=80" }, // TBD-6
  { title: "Beach Clubs", href: (d) => `/${d}/beach-clubs`, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&q=80" }, // TBD-6
  { title: "Restaurants", href: (d) => `/${d}/restaurants`, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80" }, // TBD-6
  { title: "Clubs", href: (d) => `/${d}/clubs`, image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1000&q=80" }, // TBD-6
  { title: "Extra Services", href: (d) => `/${d}/extra-services`, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80" }, // TBD-6
];
