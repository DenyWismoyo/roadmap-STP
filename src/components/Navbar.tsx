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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="app-container h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.5)] transition-all">
            <div className="w-full h-full bg-[#070d1e] rounded-[10px] flex items-center justify-center">
              <span className="font-black text-xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                STP
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black tracking-wider text-base text-white group-hover:text-cyan-300 transition-colors">
                SOLO TECHNOPARK
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                BLUD MANDIRI
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
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
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_16px_rgba(6,182,212,0.15)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Status Indicator */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Target 2030: Rp 50,5 M
          </div>

          <Link
            href="/roadmap"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-95 text-white font-bold text-xs shadow-[0_0_18px_rgba(37,99,235,0.4)] transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            18 Inisiatif
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 focus:outline-none"
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
            className="lg:hidden border-t border-white/10 bg-[#070d1e]/95 backdrop-blur-2xl px-4 pt-4 pb-7 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Target Kemandirian 2030:</span>
              <span className="text-xs font-mono font-bold text-emerald-400">Rp 50,5 Miliar</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
