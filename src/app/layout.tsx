import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Passport | Build Your Global Career with International Skills",
  description:
    "Gain practical international skills, certifications, internship support, and career guidance through World Passport. Partnered with CIT (Canadian Institute of Technology).",
  keywords:
    "international skills, career training, IELTS, internship, placement support, World Passport, CIT, global career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <AOSProvider />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
