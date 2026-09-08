"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  TrendingUp,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Building,
} from "lucide-react";
import { SCENARIO_DATA, formatRupiah } from "@/lib/data";

type ScenarioType = "baseline" | "A" | "B" | "C";

export default function ScenarioSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>("B");
  const [selectedYear, setSelectedYear] = useState<number>(2030);

  const currentData = SCENARIO_DATA.find((d) => d.year === selectedYear) || SCENARIO_DATA[4];

  // Calculate revenue for active scenario
  const getRevenue = (item: typeof currentData) => {
    switch (selectedScenario) {
      case "baseline":
        return item.baseline;
      case "A":
        return item.scenarioA_Konservatif;
      case "B":
        return item.scenarioB_Progresif;
      case "C":
        return item.scenarioC_Agresif;
    }
  };

  const revenue = getRevenue(currentData);
  const expense = currentData.belanjaRutin;
  const surplus = Math.max(0, revenue - expense);
  const padContribution = Math.round(surplus * 0.2); // 20% PAD dividend assumption

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"],
    });
  };

  const scenarioMeta = {
    baseline: {
      name: "Baseline Rutin",
      prob: "100%",
      desc: "Hanya 8 program dasar tanpa terobosan regulasi baru",
      badgeColor: "border-slate-300 bg-slate-100 text-slate-700",
      accent: "text-slate-700",
      borderActive: "border-slate-400 bg-slate-50 shadow-sm",
    },
    A: {
      name: "Skenario A (Konservatif)",
      prob: "90%",
      desc: "Realisasi 70% inisiatif terobosan baru secara bertahap",
      badgeColor: "border-blue-200 bg-blue-50 text-blue-800",
      accent: "text-blue-700",
      borderActive: "border-blue-400 bg-blue-50/50 shadow-sm",
    },
    B: {
      name: "Skenario B (Progresif - Rekomendasi)",
      prob: "75%",
      desc: "Realisasi 85% inisiatif didukung percepatan regulasi Perwali",
      badgeColor: "border-emerald-200 bg-emerald-50 text-emerald-800",
      accent: "text-emerald-700",
      borderActive: "border-emerald-500 bg-emerald-50/50 shadow-sm",
    },
    C: {
      name: "Skenario C (Agresif Penuh)",
      prob: "60%",
      desc: "100% Inisiatif terobosan terealisasi penuh dengan dukungan Walikota",
      badgeColor: "border-amber-200 bg-amber-50 text-amber-800",
      accent: "text-amber-700",
      borderActive: "border-amber-500 bg-amber-50/50 shadow-sm",
    },
  };

  return (
    <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Interactive Fiscal Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Simulasi Skenario Pertumbuhan Pendapatan BLUD
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Uji sensitivitas fiskal proyeksi kemandirian anggaran UPTD KST STP (2026–2030)
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 self-start md:self-auto shadow-inner">
          {[2026, 2027, 2028, 2029, 2030].map((yr) => (
            <button
              key={yr}
              onClick={() => {
                setSelectedYear(yr);
                if (yr === 2030 && selectedScenario === "C") triggerCelebration();
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedYear === yr
                  ? "bg-blue-600 text-white shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-6 relative z-10">
        {(["baseline", "A", "B", "C"] as ScenarioType[]).map((scKey) => {
          const meta = scenarioMeta[scKey];
          const isSelected = selectedScenario === scKey;
          return (
            <motion.button
              key={scKey}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedScenario(scKey);
                if (scKey === "C" && selectedYear === 2030) triggerCelebration();
              }}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? meta.borderActive
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${meta.badgeColor}`}>
                    Probabilitas {meta.prob}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">{meta.name}</div>
                <div className="text-[11px] text-slate-500 leading-snug line-clamp-2">{meta.desc}</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Main Results Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2 relative z-10">
        {/* Metric 1: Total Revenue */}
        <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-sm relative overflow-hidden">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Proyeksi Pendapatan ({selectedYear})</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-blue-700 my-2 font-mono tracking-tight">
            {formatRupiah(revenue)}
          </div>
          <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            {selectedYear === 2030 && selectedScenario === "C"
              ? "🎯 Target Terobosan Tertinggi Rp 50,5 Miliar"
              : `Baseline Rp ${Math.round(currentData.baseline / 1e9)} M + Inisiatif Baru`}
          </div>
        </div>

        {/* Metric 2: Surplus Operasional */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-sm relative overflow-hidden">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Surplus Mandiri Bersih BLUD</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-700 my-2 font-mono tracking-tight">
            {formatRupiah(surplus)}
          </div>
          <div className="text-xs text-slate-600 mt-2">
            Setelah belanja pokok: <span className="text-emerald-800 font-semibold">{formatRupiah(expense)}</span>
          </div>
        </div>

        {/* Metric 3: Estimasi Dividen PAD ke Kasda */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 shadow-sm relative overflow-hidden">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Estimasi Dividen PAD Kasda</span>
            <Building className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-amber-700 my-2 font-mono tracking-tight">
            {formatRupiah(padContribution)}
          </div>
          <div className="text-xs text-slate-600 mt-2">
            Asumsi dividen 20% surplus disetor ke Pemkot
          </div>
        </div>
      </div>

      {/* 5-Year Trajectory Bar Chart */}
      <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Lintasan Pertumbuhan 5 Tahun (2026 – 2030) dalam Skenario Ini:
          </h4>
          {selectedScenario === "C" && (
            <button
              onClick={triggerCelebration}
              className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Rayakan Target 2030
            </button>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2 sm:gap-4 items-end h-44 pt-4">
          {SCENARIO_DATA.map((d) => {
            const yrRev = getRevenue(d);
            const heightPct = Math.round((yrRev / 50500000000) * 100);
            const isCurr = d.year === selectedYear;

            return (
              <div
                key={d.year}
                onClick={() => setSelectedYear(d.year)}
                className="cursor-pointer group flex flex-col items-center justify-end h-full"
              >
                <div className="text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-blue-600 mb-2 transition-colors font-mono">
                  {formatRupiah(yrRev, true)}
                </div>
                <div className="w-full bg-slate-100 border border-slate-200 rounded-t-xl overflow-hidden h-32 flex items-end p-1 shadow-inner">
                  <motion.div
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.4 }}
                    className={`w-full rounded-t-lg transition-all ${
                      isCurr
                        ? "bg-gradient-to-t from-blue-700 via-blue-500 to-sky-400 shadow-md"
                        : "bg-slate-300 group-hover:bg-blue-300"
                    }`}
                  />
                </div>
                <div
                  className={`mt-2 text-xs font-bold transition-colors ${
                    isCurr ? "text-blue-700 font-extrabold" : "text-slate-500 group-hover:text-slate-800"
                  }`}
                >
                  {d.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
