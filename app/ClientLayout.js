"use client";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

import Header1 from "../components/mvpblocks/header-1";
import FooterGlow from "./components/Footer";
import FloatingBackground from "./FloatingBackground";
import FloatingSocialButtons from "./FloatingSocialButtons";



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
  
  // Hide header on blog detail pages and project detail pages
  const hideHeader = (pathname?.startsWith('/blog/') && pathname !== '/blog') ||
                    (pathname?.startsWith('/projects/') && pathname !== '/projects');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* <FloatingBackground /> */}
        {!hideHeader && <Header1 />}
        <main className={hideHeader ? "px-4" : "pt-24 px-4"}>
          {children}
          <Toaster richColors position="top-right" />
        </main>
        <FooterGlow />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}