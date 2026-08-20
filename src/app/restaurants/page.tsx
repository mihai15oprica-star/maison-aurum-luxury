import PartnerPageLayout from "@/components/PartnerPageLayout";
import { restaurantPartners } from "@/data/partners";

export const metadata = { title: "Restaurants", alternates: { canonical: "/restaurants" } };

export default function Page() {
  return (
    <PartnerPageLayout
      eyebrow="— Restaurants"
      title="Our Restaurants, Best Selection"
      // TBD-2: final subtitle copy
      subtitle="Our trusted partners for every table — from beachfront lunches to the reservations that vanish by June."
      cta="Book your table with us"
      partners={restaurantPartners}
      image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" /* TBD-6 */
    />
  );
}
