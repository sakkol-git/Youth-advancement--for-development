// System font fallback configuration
// When deploying to production with internet access, you can use Google Fonts:
//
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// export const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
//
// For now, we use CSS variables that fall back to system fonts defined in tailwind.config.ts

export const inter = {
  variable: "--font-inter",
};

export const plusJakarta = {
  variable: "--font-jakarta",
};
