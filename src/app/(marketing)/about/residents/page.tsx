import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared";
import { TeamGrid, residents, CTASection } from "@/features/home";

export const metadata: Metadata = {
  title: "Residents",
  description:
    "Meet the current DYTP students transforming their futures through education and leadership.",
};

export default function ResidentsPage() {
  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Residents"
            subtitle="First-generation students from rural Cambodia transforming their futures through YAD's DYTP program"
          />
        </div>
      </div>
      <TeamGrid title="" members={residents} />
      <CTASection />
    </>
  );
}
