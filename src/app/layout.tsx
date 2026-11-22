import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mecforge-industrial.vercel.app"),
  title: {
    default: `${siteConfig.name} | Precision Aluminium Piston Manufacturer India`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "MECFORGE (Krishna Industries) - 18+ years experienced Indian manufacturer of aluminium pistons for diesel and oil engines. In-house melting, die casting, and CNC turning for global export.",
  keywords: [
    "Aluminium Piston Manufacturer in India",
    "Diesel Engine Piston Manufacturer",
    "Oil Engine Pistons",
    "Custom Piston Manufacturer",
    "Industrial Engine Pistons",
    "Krishna Industries Rajkot",
    "Jeet MECFORGE",
    "Piston Gravity Die Casting India",
    "Piston Export Manufacturer",
  ],
  authors: [{ name: "MECFORGE (Krishna Industries)" }],
  creator: "MECFORGE",
  publisher: "Krishna Industries",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mecforge-industrial.vercel.app",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Precision Aluminium Piston Manufacturer`,
    description: siteConfig.subtitle,
    images: [
      {
        url: "/images/hero-piston.jpg",
        width: 1200,
        height: 630,
        alt: "MECFORGE Aluminium Piston Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Precision Aluminium Pistons`,
    description: siteConfig.subtitle,
    images: ["/images/hero-piston.jpg"],
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="text-brand-slate flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
