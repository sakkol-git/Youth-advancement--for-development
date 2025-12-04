import type { Partner } from "@/types";

export const partners: Partner[] = [
  {
    id: "1",
    name: "Global Education Fund",
    tier: "platinum",
    description:
      "Our primary funding partner supporting scholarship programs and infrastructure development.",
    website: "https://example.com",
  },
  {
    id: "2",
    name: "Tech for Good Foundation",
    tier: "gold",
    description:
      "Providing technology resources and digital training curriculum support.",
    website: "https://example.com",
  },
  {
    id: "3",
    name: "Cambodia Youth Alliance",
    tier: "gold",
    description:
      "Collaborative partner in youth development initiatives across Cambodia.",
    website: "https://example.com",
  },
  {
    id: "4",
    name: "Southeast Asia Development Bank",
    tier: "silver",
    description:
      "Supporting community development and financial literacy programs.",
    website: "https://example.com",
  },
  {
    id: "5",
    name: "International Volunteers Network",
    tier: "silver",
    description:
      "Connecting international volunteers with our education programs.",
    website: "https://example.com",
  },
  {
    id: "6",
    name: "Local Business Association",
    tier: "bronze",
    description:
      "Providing mentorship and internship opportunities for our students.",
    website: "https://example.com",
  },
];

export const partnershipTiers = [
  {
    tier: "platinum" as const,
    title: "Platinum Partners",
    description: "Our cornerstone supporters providing transformational funding",
    color: "from-slate-300 to-slate-400",
  },
  {
    tier: "gold" as const,
    title: "Gold Partners",
    description: "Major contributors to our programs and initiatives",
    color: "from-yellow-400 to-amber-500",
  },
  {
    tier: "silver" as const,
    title: "Silver Partners",
    description: "Valued supporters of our community outreach efforts",
    color: "from-gray-300 to-gray-400",
  },
  {
    tier: "bronze" as const,
    title: "Bronze Partners",
    description: "Essential contributors to our growing network",
    color: "from-orange-400 to-amber-600",
  },
];
