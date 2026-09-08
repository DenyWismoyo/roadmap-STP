import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building,
  Layers,
  ArrowRight,
  Gavel,
  HeartHandshake,
} from "lucide-react";
import { getAllRoadmaps } from "@/lib/markdown";
import { CLUSTERS } from "@/lib/data";
import RoadmapCard from "@/components/RoadmapCard";
import ScenarioSimulator from "@/components/ScenarioSimulator";
import FinancialProportionChart from "@/components/FinancialProportionChart";

export default function HomePage() {
  const roadmaps = getAllRoadmaps();
  const breakthroughItems = roadmaps.filter((r) =>
    r.category.toLowerCase().includes("aggressive")
  );

  return (
    <div className="space-y-20 pb-24">
      {/* HERO PRESENTASI WALIKOTA */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="app-container space-y-8 text-center relative z-10">
          {/* Executive Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Paparan Strategis Walikota Surakarta • Road to BLUD Mandiri 2030
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
            Transformasi Kemandirian Fiskal & Akselerasi Ekosistem Riset Terapan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
              Solo Technopark
            </span>
          </h1>

          {/* Executive Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Peta jalan komprehensif melepaskan ketergantungan belanja APBD Kota Surakarta (0% subsidi rutin), mengeliminasi potensi defisit Rp 2,4 M pasca-Pertamina, dan mewujudkan ekosistem inovasi berpendapatan hingga <strong className="text-emerald-400">Rp 50,5 M – 67,5 Miliar</strong> per tahun pada 2030.
          </p>

          {/* Action Callouts */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/regulasi"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2"
            >
              <Gavel className="w-4 h-4 text-slate-950" />
              Paket Regulasi Walikota
            </Link>

            <Link
              href="/roadmap"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              25 Inisiatif Roadmap
            </Link>

            <Link
              href="/dampak-publik"
              className="px-6 py-3.5 rounded-2xl bg-rose-950/70 hover:bg-rose-900/80 text-rose-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-rose-500/40 shadow-lg transition-all flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              Dampak Publik & UMKM
            </Link>

            <Link
              href="/simulasi"
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 shadow-lg transition-all flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Simulasi Fiskal
            </Link>

            <Link
              href="/kelembagaan"
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs uppercase tracking-wider border border-white/10 shadow-lg transition-all flex items-center gap-2"
            >
              <Building className="w-4 h-4 text-slate-400" />
              Dasar Hukum & APBD
            </Link>
          </div>
        </div>

        {/* 4 BENTO METRIC CARDS IN LUXURY DARK GLASS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 relative z-10">
          {/* Bento 1: Target Agregat */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.12)] relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center justify-between">
              <span>Target Agregat 2030</span>
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-white my-2 font-mono">
              Rp 50,5M - 67,5M
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Rp 28 M Baseline + Rp 39,5 M Terobosan Baru
            </div>
          </div>

          {/* Bento 2: Rasio Kemandirian */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.12)] relative overflow-hidden group hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center justify-between">
              <span>Kemandirian BLUD 2026</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-emerald-400 my-2 font-mono">
              99,61%
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Pagu APBD murni 2026 tersisa 0,39% (Rp 103 Jt)
            </div>
          </div>

          {/* Bento 3: Portfolio Program */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.12)] relative overflow-hidden group hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center justify-between">
              <span>Inisiatif Strategis</span>
              <Layers className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white my-2 font-mono">
              25 Program
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              17 Terobosan Agresif + 8 Inisiatif Baseline
            </div>
          </div>

          {/* Bento 4: Belanja Rutin */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.12)] relative overflow-hidden group hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-1 flex items-center justify-between">
              <span>Beban Rutin Pokok</span>
              <Building className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white my-2 font-mono">
              Rp 8,08 M
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Ditutup penuh oleh pendapatan mandiri BLUD
            </div>
          </div>
        </div>

        {/* EXECUTIVE CIVIC & SROI IMPACT HIGHLIGHT BANNER */}
        <div className="mt-8 -mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-950/70 via-slate-900/90 to-blue-950/70 border-y sm:border-x border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
              SROI 1 : 3,82 • Kemaslahatan Publik & Sektor Non-Profit
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Surplus Komersial BLUD Dialirkan untuk Kesejahteraan Warga & UMKM Surakarta
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Kemandirian 100% tanpa APBD digunakan untuk mendanai beasiswa vokasi inklusif difabel, klinik HAKI batik gratis, lab uji mutu UMKM, dan open living lab bengkel rakyat senilai <strong className="text-emerald-400">Rp 124 Miliar / tahun</strong>.
            </p>
          </div>

          <Link
            href="/dampak-publik"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all shrink-0 flex items-center gap-2"
          >
            Pelajari Kerangka SROI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* KLUSTER STRATEGIS OVERVIEW */}
      <section className="app-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              Pilar Sektoral
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              5 Kluster Optimalisasi Ekosistem STP
            </h2>
          </div>
          <Link
            href="/roadmap"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
          >
            Lihat Seluruh Roadmap <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLUSTERS.filter((c) => c.id !== "all").map((cluster) => (
            <Link
              key={cluster.id}
              href={`/roadmap?cluster=${encodeURIComponent(cluster.id)}`}
              className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-slate-900/75 backdrop-blur-xl border-y sm:border-x border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cluster.color} flex items-center justify-center text-white mb-4 shadow-[0_0_12px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cluster.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {cluster.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-cyan-400">
                <span>Detail Inisiatif</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT: 10 TEROBOSAN AGRESIF BARU (POTENSI RP 22,5 MILIAR) */}
      <section className="app-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Potensi Baru Rp 22,5 Miliar / Tahun
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              10 Inisiatif Terobosan Agresif (Unlocking Assets)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Didukung percepatan instrumen regulasi Walikota Surakarta & Adendum PKS
            </p>
          </div>

          <Link
            href="/roadmap?category=aggressive"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 hover:text-white border border-white/10 shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto"
          >
            Lihat 10 Terobosan <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakthroughItems.slice(0, 6).map((item, idx) => (
            <RoadmapCard key={item.id} roadmap={item} index={idx} />
          ))}
        </div>
      </section>

      {/* INTERACTIVE SCENARIO SIMULATOR COMPONENT */}
      <section className="app-container">
        <ScenarioSimulator />
      </section>

      {/* BUDGET PROPORTION EVOLUTION CHART */}
      <section className="app-container">
        <FinancialProportionChart />
      </section>

      {/* POLICY MEMO BANNER */}
      <section className="app-container">
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-y sm:border-x border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              <Gavel className="w-3.5 h-3.5 text-amber-400" />
              Executive Policy Briefing
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Siap Mendorong Penerbitan Regulasi Baru untuk Walikota Surakarta?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Pelajari draf 4 Gelombang Regulasi (Quick Wins 2026, Paket Perwali 2027, Transformasi Net-Zero AI 2028, dan Smart Hub Inklusif 2027–2028) yang siap diajukan ke Bagian Hukum Setda Kota Surakarta.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/regulasi"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                Buka Paket Regulasi Walikota
              </Link>
              <Link
                href="/roadmap"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all shadow-md"
              >
                Direktori 25 Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
