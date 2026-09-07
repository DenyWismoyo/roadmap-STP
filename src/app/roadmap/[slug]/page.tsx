import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRoadmaps, getRoadmapBySlug } from "@/lib/markdown";
import { formatRupiah } from "@/lib/data";
import MarkdownViewer from "@/components/MarkdownViewer";
import {
  ArrowLeft,
  TrendingUp,
  FileCheck2,
  UserCheck,
  Target,
  Clock,
  ArrowRight,
  Gavel,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const roadmaps = getAllRoadmaps();
  return roadmaps.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);
  if (!roadmap) return { title: "Roadmap Tidak Ditemukan" };

  return {
    title: `${roadmap.title} | Roadmap STP 2026–2030`,
    description: roadmap.summary,
  };
}

export default async function RoadmapDetailPage({ params }: Props) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  const allRoadmaps = getAllRoadmaps();
  const currentIndex = allRoadmaps.findIndex((r) => r.slug === slug);
  const prevRoadmap = currentIndex > 0 ? allRoadmaps[currentIndex - 1] : null;
  const nextRoadmap = currentIndex < allRoadmaps.length - 1 ? allRoadmaps[currentIndex + 1] : null;

  const isAggressive = roadmap.category.toLowerCase().includes("aggressive");

  // Risk styling in dark civic theme
  const riskStyles = {
    Rendah: "bg-emerald-950/60 text-emerald-400 border-emerald-500/30",
    Sedang: "bg-amber-950/60 text-amber-300 border-amber-500/30",
    Tinggi: "bg-rose-950/60 text-rose-300 border-rose-500/30",
  }[roadmap.risk_level] || "bg-slate-900 text-slate-300 border-slate-700";

  return (
    <div className="app-container py-12 space-y-10 max-w-6xl mx-auto">
      {/* Breadcrumb & Top Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/roadmap"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Direktori 18 Inisiatif
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Inisiatif #{roadmap.number} dari 18</span>
        </div>
      </div>

      {/* HEADER HERO CARD */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6 relative overflow-hidden">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-sm font-black text-white font-mono">
            #{roadmap.number}
          </span>

          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isAggressive
                ? "bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                : "bg-cyan-950/60 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
            }`}
          >
            {isAggressive ? "Terobosan Agresif (Unlocking Assets)" : "Baseline Strategic Routine"}
          </span>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-slate-300">
            {roadmap.cluster}
          </span>

          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${riskStyles}`}>
            Tingkat Risiko: {roadmap.risk_level}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {roadmap.title}
        </h1>

        {/* Executive Summary */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl border-l-2 border-cyan-400 pl-4 py-1">
          {roadmap.summary}
        </p>

        {/* KEY METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          {/* Card 1: Revenue Target */}
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
            <div className="text-[11px] uppercase font-bold text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Estimasi Potensi / Tahun
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tracking-tight">
              {formatRupiah(roadmap.potential_annual_revenue)}
            </div>
            <div className="text-[11px] text-slate-400">Target Skala Penuh 2030</div>
          </div>

          {/* Card 2: Regulatory Instrument */}
          <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/10 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
              Instrumen Regulasi Walikota
            </div>
            <div className="text-xs font-bold text-white leading-snug">
              {roadmap.regulatory_instrument || "SK Walikota / Perwali"}
            </div>
          </div>

          {/* Card 3: PIC */}
          <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/10 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              Penanggung Jawab (PIC)
            </div>
            <div className="text-xs font-bold text-slate-200">
              {roadmap.pic}
            </div>
          </div>

          {/* Card 4: Target Market */}
          <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/10 space-y-1 sm:col-span-2">
            <div className="text-[11px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-purple-400" />
              Target Mitra / Pasar Industri
            </div>
            <div className="text-xs font-medium text-slate-300 leading-snug">
              {roadmap.target_market}
            </div>
          </div>

          {/* Card 5: Timeline */}
          <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/10 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Timeline & Tahapan
            </div>
            <div className="text-xs font-bold text-slate-200 leading-snug">
              {roadmap.timeline_stage}
            </div>
          </div>
        </div>
      </div>

      {/* MANDAT REGULASI WALIKOTA CALLOUT */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-7 bg-amber-950/40 border-y sm:border-x border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.12)] space-y-3 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Gavel className="w-4 h-4 text-amber-400" />
            Mandat Regulasi Kepala Daerah: Kunci Pembuka Potensi
          </div>
          <Link
            href="/regulasi"
            className="text-[11px] font-bold text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            Lihat Paket Regulasi Walikota <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="text-sm font-bold text-white leading-snug">
          Draf Instrumen yang Dimohonkan:{" "}
          <span className="text-amber-300 font-mono underline decoration-amber-400/50">
            {roadmap.regulatory_instrument}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
          Penerbitan regulasi ini oleh Walikota Surakarta secara sah memperluas fleksibilitas model bisnis BLUD Solo Technopark (berdasarkan Permendagri No. 79/2018), mengeliminasi risiko defisit, serta menggaransi kontribusi pendapatan tahunan hingga{" "}
          <strong className="text-emerald-400">{formatRupiah(roadmap.potential_annual_revenue)}</strong> tanpa menggunakan belanja subsidi APBD.
        </p>
      </div>

      {/* DETAILED MARKDOWN BODY CONTENT */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-10 bg-slate-900/75 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        <div className="prose prose-invert max-w-none">
          <MarkdownViewer content={roadmap.content} />
        </div>
      </div>

      {/* NEXT & PREVIOUS ROADMAP NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
        {prevRoadmap ? (
          <Link
            href={`/roadmap/${prevRoadmap.slug}`}
            className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-lg transition-all group flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-bold">Inisiatif Sebelumnya</div>
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                #{prevRoadmap.number}. {prevRoadmap.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextRoadmap && (
          <Link
            href={`/roadmap/${nextRoadmap.slug}`}
            className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-lg transition-all group flex items-center justify-between text-right"
          >
            <div className="w-full">
              <div className="text-[11px] text-slate-400 uppercase font-bold">Inisiatif Selanjutnya</div>
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                #{nextRoadmap.number}. {nextRoadmap.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
