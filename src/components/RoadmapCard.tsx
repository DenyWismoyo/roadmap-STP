"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  UserCheck,
  Sparkles,
  Award,
  Building2,
  Cpu,
  Zap,
  Briefcase,
  Laptop,
  CheckCircle2,
  Globe2,
  ShoppingCart,
  Factory,
  HeartPulse,
  Store,
  ShieldCheck,
  Cog,
  Tv,
} from "lucide-react";
import { RoadmapItem } from "@/lib/types";
import { formatRupiah } from "@/lib/data";

const ICON_MAP: Record<string, any> = {
  Briefcase,
  Award,
  CheckCircle2,
  TrendingUp,
  Clock,
  Laptop,
  Globe2,
  ShoppingCart,
  Building2,
  Factory,
  HeartPulse,
  Store,
  Sparkles,
  Cpu,
  Zap,
  ShieldCheck,
  Cog,
  Tv,
};

interface Props {
  roadmap: RoadmapItem;
  index?: number;
}

export default function RoadmapCard({ roadmap, index = 0 }: Props) {
  const IconComponent = (roadmap.icon && ICON_MAP[roadmap.icon]) || Sparkles;
  const isAggressive = roadmap.category.toLowerCase().includes("aggressive");

  // Risk styling in dark civic theme
  const riskStyles = {
    Rendah: "bg-emerald-950/60 text-emerald-400 border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.15)]",
    Sedang: "bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.15)]",
    Tinggi: "bg-rose-950/60 text-rose-300 border-rose-500/30 shadow-[0_0_8px_rgba(244,63,94,0.15)]",
  }[roadmap.risk_level] || "bg-slate-900 text-slate-300 border-slate-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-slate-900/75 backdrop-blur-xl border-y sm:border-x border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle top hover glow beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-slate-800/90 border border-white/10 flex items-center justify-center text-xs font-black text-slate-200 font-mono">
              #{roadmap.number}
            </span>
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                isAggressive
                  ? "bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  : "bg-cyan-950/60 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              }`}
            >
              {isAggressive ? "Terobosan Agresif" : "Baseline Strategis"}
            </span>
          </div>

          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${riskStyles}`}>
            Risiko {roadmap.risk_level}
          </span>
        </div>

        {/* Cluster & Icon */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
          <IconComponent className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="tracking-wide">{roadmap.cluster}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 line-clamp-2 leading-snug">
          {roadmap.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {roadmap.summary}
        </p>
      </div>

      {/* Footer Info Box */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        {/* Revenue Banner */}
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between shadow-[0_0_15px_rgba(16,185,129,0.08)]">
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-400/80 tracking-wider">
              Estimasi Potensi / Thn
            </div>
            <div className="text-base font-black text-emerald-400 font-mono tracking-tight">
              {formatRupiah(roadmap.potential_annual_revenue)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Target Waktu
            </div>
            <div className="text-xs font-bold text-slate-200">
              {roadmap.timeline_stage.split(";")[0] || roadmap.target_year}
            </div>
          </div>
        </div>

        {/* PIC & Action Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 max-w-[65%] truncate">
            <UserCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="truncate">{roadmap.pic}</span>
          </div>

          <Link
            href={`/roadmap/${roadmap.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-200 transition-colors group-hover:translate-x-0.5 transition-transform"
          >
            Pelajari <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
