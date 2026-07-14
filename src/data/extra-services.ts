export interface ExtraService {
  title: string;
  description: string; // TBD-2: final copy
  image: string; // TBD-6
}

const U = (id: string, w = 1000) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

// Decision: "Private Jets / Helicopter" and "Horse Riding" from the client's notes are
// folded into VIP Services (rather than standalone rows) — see the VIP entry below.
export const extraServices: ExtraService[] = [
  { title: "Chef Services", description: "Private chefs and full brigades for a single dinner or the whole stay — from island tavern classics to Michelin-trained tasting menus.", image: U("1556910103-1c02745aae4d") },
  { title: "Event Planning", description: "Birthdays, weddings and after-parties, produced end to end: venue, talent, décor, catering and the guest list.", image: U("1519671482749-fd09be7ccebf") },
  { title: "Private Transfer", description: "Airport pickups, chauffeured cars and boat transfers, coordinated around your schedule to the minute.", image: U("1503376780353-7e6692767b70") },
  { title: "Butler Services", description: "A discreet, professional butler in residence — unpacking, service, and the details you never have to ask for twice.", image: U("1551218808-94e220e084d2") },
  { title: "Babysitting", description: "Vetted, multilingual nannies and babysitters, so the grown-ups' evening can begin.", image: U("1503454537195-1dcabb73ffb9") },
  { title: "Beauty and Health", description: "In-villa hair, make-up, massage, personal training and wellness — the spa comes to you.", image: U("1540555700478-4be289fbecef") },
  { title: "VIP Services", description: "The extraordinary, arranged: private jets and helicopters, wine tasting, horse riding, scuba diving and the local experiences worth crossing the island for.", image: U("1566073771259-6a8506099945") }, // includes Private Jets/Helicopter + Horse Riding per client notes
  { title: "Security Services", description: "Close protection and residence security, briefed and coordinated with total discretion.", image: U("1521737604893-d14cc237f11d") },
  { title: "Shopping Services", description: "Personal shopping, private boutique appointments and delivery — from provisioning to the season's collections.", image: U("1441984904996-e0b6ba687e04") },
  { title: "Maid Services", description: "Daily housekeeping and turndown that keeps every villa immaculate for the length of your stay.", image: U("1584622650111-993a426fbf0a") },
];
