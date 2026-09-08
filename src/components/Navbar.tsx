"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  TrendingUp,
  Landmark,
  Menu,
  X,
  Sparkles,
  Gavel,
  HeartHandshake,
  ArrowUpRight,
  Presentation,
} from "lucide-react";
import ExecutivePresentationModal from "@/components/ExecutivePresentationModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Dashboard", icon: Sparkles },
    { href: "/roadmap", label: "25 Inisiatif", icon: Compass },
    { href: "/regulasi", label: "Regulasi", icon: Gavel },
    { href: "/dampak-publik", label: "Dampak Publik", icon: HeartHandshake },
    { href: "/simulasi", label: "Simulasi Fiskal", icon: TrendingUp },
    { href: "/kelembagaan", label: "Kelembagaan", icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="app-container h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Compact Title */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 p-0.5 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
              <span className="font-black text-xs sm:text-sm bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                STP
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black tracking-tight text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
              Solo Technopark
            </span>
            <span className="hidden md:inline-block text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/70">
              Roadmap 2026–2030
            </span>
          </div>
        </Link>

        {/* Desktop & Tablet Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive ? "text-blue-600" : "text-slate-400"
                  }`}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Minimal Target & Quick CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPresentationOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 font-bold text-xs transition-all shadow-xs active:scale-95"
            title="Buka Mode Paparan Rapat Walikota"
          >
            <Presentation className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden sm:inline">Mode Paparan</span>
          </button>

          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Target: Rp 50,5 M
          </div>

          <Link
            href="/simulasi"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs shadow-xs transition-all"
          >
            <span>Simulasi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:text-slate-950 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Compact Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-3 space-y-1 shadow-lg overflow-hidden"
          >
            {/* Quick Presentation Button in Drawer */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsPresentationOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs sm:text-sm transition-all mb-2 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Presentation className="w-4 h-4 text-amber-700" />
                <span>Mode Paparan Walikota</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 font-bold">
                5 Slide Inti
              </span>
            </button>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200/80 font-bold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-blue-600" : "text-slate-400"
                      }`}
                    />
                    {link.label}
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  )}
                </Link>
              );
            })}

            <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between px-3 text-xs">
              <span className="text-slate-500 font-medium">Target 2030 (100% Mandiri):</span>
              <span className="font-mono font-bold text-emerald-700">Rp 50,5 M</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Executive Presentation Modal */}
      <ExecutivePresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </header>
  );
}
