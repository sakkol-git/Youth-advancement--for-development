import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared";
import { TeamGrid, alumni, CTASection } from "@/features/home";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Discover the success stories of YAD alumni who continue to inspire and lead in their communities.",
};

export default function AlumniPage() {
  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Alumni"
            subtitle="Graduates who continue to inspire and lead, making a difference in their communities"
          />
        </div>
      </div>
      <TeamGrid title="" members={alumni} />
      <CTASection />
    </>
  );
}
