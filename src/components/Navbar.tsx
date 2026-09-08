"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  TrendingUp,
  Landmark,
  Layers,
  Menu,
  X,
  Sparkles,
  Gavel,
  HeartHandshake,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Dashboard", icon: Sparkles },
    { href: "/roadmap", label: "25 Inisiatif Roadmap", icon: Compass },
    { href: "/regulasi", label: "Paket Regulasi Walikota", icon: Gavel },
    { href: "/dampak-publik", label: "Dampak Publik & UMKM", icon: HeartHandshake },
    { href: "/simulasi", label: "Simulasi Finansial", icon: TrendingUp },
    { href: "/kelembagaan", label: "Kelembagaan", icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl shadow-sm">
      <div className="app-container h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-all">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <span className="font-black text-xl bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                STP
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black tracking-wider text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                SOLO TECHNOPARK
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                BLUD MANDIRI
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Roadmap Strategis 2026–2030 • Menuju Mandiri 100%
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Status Indicator */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Target 2030: Rp 50,5 M
          </div>

          <Link
            href="/roadmap"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            25 Inisiatif
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 bg-slate-100 border border-slate-200 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl px-4 pt-4 pb-7 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Target Kemandirian 2030:</span>
              <span className="text-xs font-mono font-bold text-emerald-700">Rp 50,5 Miliar</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
