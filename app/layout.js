"use client"; // make sure this is client-side

import { useEffect } from "react";
import ClientLayout from "./ClientLayout";
import { Archivo_Black, Noto_Sans } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    async function trackVisit() {
      try {
        await fetch("/api/track-visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}), // empty for now
        });
      } catch (err) {
        console.error("❌ Tracking error:", err);
      }
    }
    trackVisit();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${notoSans.variable} antialiased bg-black text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
