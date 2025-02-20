import "./globals.css";
import type { Metadata } from "next";
import { Inter, Do_Hyeon } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

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
        className={`flex justify-center items-center min-h-screen w-full ${inter.className}`}
      >
        <div className="w-full max-w-lg mx-auto p-4 h-60 -translate-y-40 font-questrial">
          <div className="text-left">
              <Navbar />
              {children}
              <SpeedInsights />
              <Analytics />
          </div>
        </div>
        <Script src="./node_modules/preline/dist/preline.js"></Script>
      </body>
    </html>
  );
}
