export const SITE_CONFIG = {
  name: "Youth Advancement for Development",
  shortName: "YAD",
  description:
    "Empowering Cambodian youth through education, digital innovation, and leadership programs.",
  url: "https://yad.org.kh",
  email: "yad2025@edu.kh",
  phone: "+855 99 332 289",
  address: "#30, St. 261, Boeung Salang, TK, Phnom Penh, Cambodia",
  social: {
    facebook: "https://facebook.com/yad",
    telegram: "https://t.me/yad",
    youtube: "https://youtube.com/@yad",
  },
} as const;

export const DONATION_AMOUNTS = [10, 25, 50, 100, 250, 500] as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.6,
} as const;
