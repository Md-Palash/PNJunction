import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PNJunction — Where technology connects",
  description:
    "PNJunction is a technology platform covering AI, Windows, Android, web development, Linux, and cybersecurity — plus a set of fast, free everyday tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
