"use client";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import Header1 from "../components/mvpblocks/header-1";
import FooterGlow from "./components/Footer";
import FloatingBackground from "./FloatingBackground";
import FloatingSocialButtons from "./FloatingSocialButtons";

import { Archivo_Black, Noto_Sans } from "next/font/google";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Hide header/footer on blog detail, project detail, and admin pages
  const hideHeader =
    (pathname?.startsWith("/blog/") && pathname !== "/blog") ||
    (pathname?.startsWith("/projects/") && pathname !== "/projects") ||
    pathname === "/admin/visits";

  const hideFooter = pathname === "/admin/visits";

  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${notoSans.variable} antialiased bg-black text-white`}
      >
        {/* <FloatingBackground /> */}
        {!hideHeader && <Header1 />}
        <main className={hideHeader ? "px-4" : "pt-24 px-4"}>
          {children}
          <Toaster richColors position="top-right" />
        </main>
        {!hideFooter && <FooterGlow />}
        {!hideFooter && <FloatingSocialButtons />}
      </body>
    </html>
  );
}
