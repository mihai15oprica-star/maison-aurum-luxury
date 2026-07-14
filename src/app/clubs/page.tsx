import PartnerPageLayout from "@/components/PartnerPageLayout";
import { clubPartners } from "@/data/partners";

export const metadata = { title: "Clubs" };

export default function Page() {
  return (
    <PartnerPageLayout
      eyebrow="— Clubs"
      title="Our Clubs, Best Selection"
      // TBD-2: final subtitle copy
      subtitle="Our trusted partners for every night worth remembering — guaranteed entry, the right table, and never the queue."
      cta="Book your night with us"
      partners={clubPartners}
      image="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80" /* TBD-6 */
    />
  );
}
