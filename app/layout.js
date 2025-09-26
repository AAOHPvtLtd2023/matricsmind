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
        // Get visitor IP & location using free API
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        // Send data to your Next.js API
        await fetch("/api/track-visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            countryCode: data.country_code,
            platform: data.platform, // Let backend detect platform
          }),
        });
      } catch (err) {
        console.error("Visitor tracking error:", err);
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
