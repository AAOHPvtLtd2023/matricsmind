import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // new wrapper

export const metadata = {
  title: "Matrics Mind - Digital Marketing Experts",
  description: "Matrics Mind delivers impactful digital marketing solutions in Abu Dhabi.",
  icons: {
    icon:  [
      { url: "/MarticMind.png", type: "image/png", sizes: "32x32" },
      { url: "/MarticMind.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/MarticMind.png",
    apple: "/MarticMind.png",
  },
  openGraph: {
    title: "Matrics Mind - Digital Marketing Experts",
    description: "We provide top-class digital marketing strategies to grow your business.",
    url: "https://matricsmind.com",
    siteName: "Matrics Mind",
    images: [
      {
        url: "/MarticMind.png",
        width: 1200,
        height: 630,
        alt: "Matrics Mind",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
