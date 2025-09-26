"use client";
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
        // 1️⃣ Detect UTM params from URL
        const url = new URL(window.location.href);
        let platform = url.searchParams.get("utm_source");

        // 2️⃣ Fallback: use referrer if no UTM
        if (!platform) {
          const ref = document.referrer || "";
          if (ref.includes("facebook")) platform = "facebook";
          else if (ref.includes("instagram")) platform = "instagram";
          else if (ref.includes("whatsapp")) platform = "whatsapp";
          else platform = "direct";
        }

        // 3️⃣ Get geo info (from ipapi)
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        // 4️⃣ Send all info (including platform) to your API
        await fetch("/api/admin/visits", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            countryCode: data.country_code,
            platform, // ✅ now platform will be saved
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
