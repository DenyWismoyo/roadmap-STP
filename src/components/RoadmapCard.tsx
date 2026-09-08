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

  // Risk styling in clean executive theme
  const riskStyles = {
    Rendah: "bg-emerald-50 text-emerald-800 border-emerald-200",
    Sedang: "bg-amber-50 text-amber-800 border-amber-200",
    Tinggi: "bg-rose-50 text-rose-800 border-rose-200",
  }[roadmap.risk_level] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle top hover accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-700 font-mono">
              #{roadmap.number}
            </span>
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                isAggressive
                  ? "bg-amber-50 text-amber-800 border-amber-200"
                  : "bg-blue-50 text-blue-800 border-blue-200"
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
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
          <IconComponent className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="tracking-wide">{roadmap.cluster}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 line-clamp-2 leading-snug">
          {roadmap.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {roadmap.summary}
        </p>
      </div>

      {/* Footer Info Box */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        {/* Revenue Banner */}
        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
              Estimasi Potensi / Thn
            </div>
            <div className="text-base font-black text-emerald-700 font-mono tracking-tight">
              {formatRupiah(roadmap.potential_annual_revenue)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Target Waktu
            </div>
            <div className="text-xs font-bold text-slate-800">
              {roadmap.timeline_stage.split(";")[0] || roadmap.target_year}
            </div>
          </div>
        </div>

        {/* PIC & Action Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 max-w-[65%] truncate">
            <UserCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="truncate">{roadmap.pic}</span>
          </div>

          <Link
            href={`/roadmap/${roadmap.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5 transition-transform"
          >
            Pelajari <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
