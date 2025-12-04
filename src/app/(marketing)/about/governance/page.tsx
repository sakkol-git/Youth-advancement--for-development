import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared";
import { GovernanceGrid, CTASection } from "@/features/home";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Meet the leadership team behind Youth Advancement for Development.",
};

export default function GovernancePage() {
  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Leadership"
            subtitle="Meet the dedicated team guiding YAD's mission to empower Cambodian youth"
          />
        </div>
      </div>
      <GovernanceGrid />
      <CTASection />
    </>
  );
}
