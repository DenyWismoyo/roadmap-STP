import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building,
  Building2,
  Award,
  Cpu,
  Tv,
  Globe2,
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

const CLUSTER_CONFIG: Record<string, { icon: any; iconColor: string; bgBox: string }> = {
  "Aset & Properti": {
    icon: Building2,
    iconColor: "text-amber-700",
    bgBox: "bg-amber-50 border border-amber-200",
  },
  "Diklat & Sertifikasi": {
    icon: Award,
    iconColor: "text-emerald-700",
    bgBox: "bg-emerald-50 border border-emerald-200",
  },
  "AI & Green Tech": {
    icon: Cpu,
    iconColor: "text-blue-700",
    bgBox: "bg-blue-50 border border-blue-200",
  },
  "MICE & Komersial": {
    icon: Tv,
    iconColor: "text-purple-700",
    bgBox: "bg-purple-50 border border-purple-200",
  },
  "Kemitraan Global": {
    icon: Globe2,
    iconColor: "text-indigo-700",
    bgBox: "bg-indigo-50 border border-indigo-200",
  },
};

export default function HomePage() {
  const roadmaps = getAllRoadmaps();
  const breakthroughItems = roadmaps.filter((r) =>
    r.category.toLowerCase().includes("aggressive")
  );

  return (
    <div className="space-y-20 pb-24">
      {/* HERO PRESENTASI WALIKOTA */}
      <section className="relative pt-10 pb-8 overflow-hidden">
        {/* Soft ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/50 to-sky-100/50 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="app-container space-y-8 text-center relative z-10">
          {/* Official STP SVG Brand Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/stp.svg"
              alt="Solo Technopark"
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Executive Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Paparan Strategis Walikota Surakarta • Road to BLUD Mandiri 2030
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] max-w-5xl mx-auto">
            Transformasi Kemandirian Fiskal & Akselerasi Ekosistem Riset Terapan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
              Solo Technopark
            </span>
          </h1>

          {/* Executive Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Peta jalan komprehensif melepaskan ketergantungan belanja APBD Kota Surakarta (0% subsidi rutin), mengeliminasi potensi defisit Rp 2,4 M pasca-Pertamina, dan mewujudkan ekosistem inovasi berpendapatan hingga <strong className="text-emerald-700">Rp 50,5 M – 67,5 Miliar</strong> per tahun pada 2030.
          </p>

          {/* Action Callouts */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/regulasi"
              className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Gavel className="w-4 h-4 text-white" />
              Paket Regulasi Walikota
            </Link>

            <Link
              href="/roadmap"
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              25 Inisiatif Roadmap
            </Link>

            <Link
              href="/dampak-publik"
              className="px-6 py-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-rose-600" />
              Dampak Publik & UMKM
            </Link>

            <Link
              href="/simulasi"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Simulasi Fiskal
            </Link>

            <Link
              href="/kelembagaan"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <Building className="w-4 h-4 text-slate-500" />
              Dasar Hukum & APBD
            </Link>
          </div>
        </div>

        {/* 4 BENTO METRIC CARDS IN CLEAN WHITE PALETTE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 relative z-10">
          {/* Bento 1: Target Agregat */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-blue-400 hover:shadow-md transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center justify-between">
              <span>Target Agregat 2030</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-slate-950 my-2 font-mono">
              Rp 50,5M - 67,5M
            </div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Rp 28 M Baseline + Rp 39,5 M Terobosan Baru
            </div>
          </div>

          {/* Bento 2: Rasio Kemandirian */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center justify-between">
              <span>Kemandirian BLUD 2026</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-emerald-700 my-2 font-mono">
              99,61%
            </div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Pagu APBD murni 2026 tersisa 0,39% (Rp 103 Jt)
            </div>
          </div>

          {/* Bento 3: Portfolio Program */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center justify-between">
              <span>Inisiatif Strategis</span>
              <Layers className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-slate-950 my-2 font-mono">
              25 Program
            </div>
            <div className="text-xs text-slate-500 leading-relaxed">
              17 Terobosan Agresif + 8 Inisiatif Baseline
            </div>
          </div>

          {/* Bento 4: Belanja Rutin */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-indigo-400 hover:shadow-md transition-all">
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 mb-1 flex items-center justify-between">
              <span>Beban Rutin Pokok</span>
              <Building className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-slate-950 my-2 font-mono">
              Rp 8,08 M
            </div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Ditutup penuh oleh pendapatan mandiri BLUD
            </div>
          </div>
        </div>

        {/* EXECUTIVE CIVIC & SROI IMPACT HIGHLIGHT BANNER */}
        <div className="mt-8 -mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-50 via-white to-blue-50 border-y sm:border-x sm:border border-rose-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
              SROI 1 : 3,82 • Kemaslahatan Publik & Sektor Non-Profit
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Surplus Komersial BLUD Dialirkan untuk Kesejahteraan Warga & UMKM Surakarta
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Kemandirian 100% tanpa APBD digunakan untuk mendanai beasiswa vokasi inklusif difabel, klinik HAKI batik gratis, lab uji mutu UMKM, dan open living lab bengkel rakyat senilai <strong className="text-emerald-700">Rp 124 Miliar / tahun</strong>.
            </p>
          </div>

          <Link
            href="/dampak-publik"
            className="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0 flex items-center gap-2"
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
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              Pilar Sektoral
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              5 Kluster Optimalisasi Ekosistem STP
            </h2>
          </div>
          <Link
            href="/roadmap"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
          >
            Lihat Seluruh Roadmap <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLUSTERS.filter((c) => c.id !== "all").map((cluster) => {
            const config = CLUSTER_CONFIG[cluster.id] || {
              icon: Sparkles,
              iconColor: "text-blue-600",
              bgBox: "bg-blue-50 border border-blue-200",
            };
            const ClusterIcon = config.icon;
            return (
              <Link
                key={cluster.id}
                href={`/roadmap?cluster=${encodeURIComponent(cluster.id)}`}
                className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${config.bgBox} flex items-center justify-center ${config.iconColor} mb-4 shadow-xs group-hover:scale-110 transition-transform`}
                  >
                    <ClusterIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {cluster.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {cluster.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
                  <span>Detail Inisiatif</span>
                  <ArrowRight className="w-3 h-3 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* HIGHLIGHT: 10 TEROBOSAN AGRESIF BARU (POTENSI RP 22,5 MILIAR) */}
      <section className="app-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Potensi Baru Rp 22,5 Miliar / Tahun
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              10 Inisiatif Terobosan Agresif (Unlocking Assets)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Didukung percepatan instrumen regulasi Walikota Surakarta & Adendum PKS
            </p>
          </div>

          <Link
            href="/roadmap?category=aggressive"
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 border border-slate-200 shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto"
          >
            Lihat 10 Terobosan <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
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
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-8 sm:p-12 text-center text-slate-900 relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-y sm:border-x sm:border border-blue-200/90 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Gavel className="w-3.5 h-3.5 text-amber-700" />
              Executive Policy Briefing
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Siap Mendorong Penerbitan Regulasi Baru untuk Walikota Surakarta?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Pelajari draf 4 Gelombang Regulasi (Quick Wins 2026, Paket Perwali 2027, Transformasi Net-Zero AI 2028, dan Smart Hub Inklusif 2027–2028) yang siap diajukan ke Bagian Hukum Setda Kota Surakarta.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/regulasi"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Buka Paket Regulasi Walikota
              </Link>
              <Link
                href="/roadmap"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all shadow-sm"
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
