import type { Metadata } from "next";
import { inter, plusJakarta } from "@/lib/fonts";
import { BackToTop } from "@/components/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Youth Advancement for Development | Empowering Cambodian Youth",
    template: "%s | YAD",
  },
  description:
    "Youth Advancement for Development Organization empowers Cambodian youth through education, digital innovation, and leadership programs.",
  keywords: [
    "Cambodia youth education",
    "NGO programs",
    "youth empowerment",
    "digital literacy",
    "community development",
    "DYTP",
    "Phnom Penh",
  ],
  authors: [{ name: "YAD" }],
  creator: "Youth Advancement for Development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yad.org.kh",
    title: "Youth Advancement for Development",
    description:
      "Empowering Cambodian youth through education, digital innovation, and leadership programs.",
    siteName: "YAD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Advancement for Development",
    description:
      "Empowering Cambodian youth through education, digital innovation, and leadership programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
