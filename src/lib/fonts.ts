// Note: Using CSS variable approach for fonts
// In production with internet access, you can use Google Fonts like this:
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// For environments without internet access, we use system fonts
// These CSS variables are used in tailwind.config.ts

export const inter = {
  variable: "--font-inter",
  className: "font-inter",
};

export const plusJakarta = {
  variable: "--font-jakarta",
  className: "font-jakarta",
};
