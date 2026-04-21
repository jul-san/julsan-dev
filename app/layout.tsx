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
      <body
        className={`flex justify-center items-center min-h-screen w-full bg-white text-black ${inter.className}`}
      >
        <div className="w-full p-4 font-questrial">
            <Navbar />
            <main className="mt-4">
              {children}
            </main>
            <SpeedInsights />
            <Analytics />
                    <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20 py-8 text-sm text-gray-600 flex flex-col items-center justify-center">
          <p>© 2026 Julian Sanchez. All Rights Reserved.</p>
          <p>Last Modified 02/01/2026</p>
        </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/preline@2.1.0/dist/preline.min.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
