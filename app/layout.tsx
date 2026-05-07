import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../app/components/Navbar";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Julian Sanchez",
  description: "Personal website for Julian Sanchez.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-full bg-white text-[#37352f]">
        <Navbar />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Script src="https://cdn.jsdelivr.net/npm/preline@2.1.0/dist/preline.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
