import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Roadmap Strategis UPTD KST Solo Technopark 2026–2030 | Paparan Walikota",
  description:
    "Rencana strategis optimalisasi pendapatan BLUD Solo Technopark 2026–2030 melalui unlocking idle assets, AI Tech Hub, Green Energy, dan kemandirian fiskal paripurna 100% tanpa APBD.",
  keywords: [
    "Solo Technopark",
    "STP Surakarta",
    "BLUD STP",
    "BRIDA Surakarta",
    "Roadmap 2026-2030",
    "Kawasan Sains dan Teknologi",
    "Paparan Walikota",
  ],
  icons: {
    icon: "/stp.svg",
    shortcut: "/stp.svg",
    apple: "/stp.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 bg-civic-grid relative selection:bg-blue-100 selection:text-blue-900 antialiased">
        {/* Subtle Ambient Soft Light Overlay */}
        <div className="fixed inset-0 bg-radial-glow pointer-events-none z-0 opacity-60" />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
