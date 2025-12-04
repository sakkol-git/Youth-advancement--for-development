export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  features: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

export interface Partner {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  logo?: string;
  website?: string;
  description?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface CoreValue {
  title: string;
  description: string;
}
