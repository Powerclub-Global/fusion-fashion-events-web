import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Fusion Fashion Events — Miami Runway Shows & Swim Week",
    template: "%s | Fusion Fashion Events",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${bebas.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-body">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
