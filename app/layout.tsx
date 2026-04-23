import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Sanchez",
  description: "Personal website for Julian Sanchez.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`w-full bg-white text-black ${inter.className}`}>
        <div className="w-full font-questrial">
          <Navbar />
          <main>
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
          <footer className="container mx-auto px-4 py-8 text-sm text-gray-600 text-center">
            <p>Inspired by dank memes and big dreams :)</p>
            <p>Last Modified 04/22/2026</p>
          </footer>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/preline@2.1.0/dist/preline.min.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
