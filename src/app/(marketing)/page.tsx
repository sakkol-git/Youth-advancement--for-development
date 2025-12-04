import {
  HeroCarousel,
  ImpactStats,
  PrinciplesSection,
  GovernanceGrid,
  TeamGrid,
  CTASection,
  residents,
  alumni,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ImpactStats />
      <PrinciplesSection />
      <GovernanceGrid />
      <TeamGrid
        title="Our Residents"
        subtitle="Meet the current DYTP students transforming their futures"
        members={residents}
      />
      <TeamGrid
        title="Our Alumni"
        subtitle="Graduates who continue to inspire and lead"
        members={alumni}
      />
      <CTASection />
    </>
  );
}
