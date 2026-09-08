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

  // Risk styling in clean executive theme
  const riskStyles = {
    Rendah: "bg-emerald-50 text-emerald-800 border-emerald-200",
    Sedang: "bg-amber-50 text-amber-800 border-amber-200",
    Tinggi: "bg-rose-50 text-rose-800 border-rose-200",
  }[roadmap.risk_level] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <div className="app-container py-12 space-y-10 max-w-6xl mx-auto">
      {/* Breadcrumb & Top Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/roadmap"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Direktori 25 Inisiatif
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Inisiatif #{roadmap.number} dari 25</span>
        </div>
      </div>

      {/* HEADER HERO CARD */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-black text-slate-700 font-mono">
            #{roadmap.number}
          </span>

          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isAggressive
                ? "bg-amber-50 text-amber-800 border-amber-200 shadow-sm"
                : "bg-blue-50 text-blue-800 border-blue-200 shadow-sm"
            }`}
          >
            {isAggressive ? "Terobosan Agresif (Unlocking Assets)" : "Baseline Strategic Routine"}
          </span>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
            {roadmap.cluster}
          </span>

          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${riskStyles}`}>
            Tingkat Risiko: {roadmap.risk_level}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          {roadmap.title}
        </h1>

        {/* Executive Summary */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl border-l-2 border-blue-600 pl-4 py-1">
          {roadmap.summary}
        </p>

        {/* KEY METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          {/* Card 1: Revenue Target */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1 shadow-sm">
            <div className="text-[11px] uppercase font-bold text-emerald-800 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Estimasi Potensi / Tahun
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono tracking-tight">
              {formatRupiah(roadmap.potential_annual_revenue)}
            </div>
            <div className="text-[11px] text-slate-500">Target Skala Penuh 2030</div>
          </div>

          {/* Card 2: Regulatory Instrument */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
              Instrumen Regulasi Walikota
            </div>
            <div className="text-xs font-bold text-slate-900 leading-snug">
              {roadmap.regulatory_instrument || "SK Walikota / Perwali"}
            </div>
          </div>

          {/* Card 3: PIC */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-amber-600" />
              Penanggung Jawab (PIC)
            </div>
            <div className="text-xs font-bold text-slate-800">
              {roadmap.pic}
            </div>
          </div>

          {/* Card 4: Target Market */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:col-span-2">
            <div className="text-[11px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-purple-600" />
              Target Mitra / Pasar Industri
            </div>
            <div className="text-xs font-medium text-slate-700 leading-snug">
              {roadmap.target_market}
            </div>
          </div>

          {/* Card 5: Timeline */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-[11px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              Timeline & Tahapan
            </div>
            <div className="text-xs font-bold text-slate-800 leading-snug">
              {roadmap.timeline_stage}
            </div>
          </div>
        </div>
      </div>

      {/* MANDAT REGULASI WALIKOTA CALLOUT */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-7 bg-amber-50/80 border-y sm:border-x sm:border border-amber-200/90 shadow-sm space-y-3 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <Gavel className="w-4 h-4 text-amber-700" />
            Mandat Regulasi Kepala Daerah: Kunci Pembuka Potensi
          </div>
          <Link
            href="/regulasi"
            className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            Lihat Paket Regulasi Walikota <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="text-sm font-bold text-slate-900 leading-snug">
          Draf Instrumen yang Dimohonkan:{" "}
          <span className="text-amber-800 font-mono underline decoration-amber-400/50">
            {roadmap.regulatory_instrument}
          </span>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed max-w-4xl">
          Penerbitan regulasi ini oleh Walikota Surakarta secara sah memperluas fleksibilitas model bisnis BLUD Solo Technopark (berdasarkan Permendagri No. 79/2018), mengeliminasi risiko defisit, serta menggaransi kontribusi pendapatan tahunan hingga{" "}
          <strong className="text-emerald-700">{formatRupiah(roadmap.potential_annual_revenue)}</strong> tanpa menggunakan belanja subsidi APBD.
        </p>
      </div>

      {/* DETAILED MARKDOWN BODY CONTENT (EXECUTIVE WHITE PAPER) */}
      <section aria-label="Naskah Kebijakan Roadmap">
        <MarkdownViewer content={roadmap.content} showDocumentHeader={true} />
      </section>

      {/* NEXT & PREVIOUS ROADMAP NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
        {prevRoadmap ? (
          <Link
            href={`/roadmap/${prevRoadmap.slug}`}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[11px] text-slate-500 uppercase font-bold">Inisiatif Sebelumnya</div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
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
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex items-center justify-between text-right"
          >
            <div className="w-full">
              <div className="text-[11px] text-slate-500 uppercase font-bold">Inisiatif Selanjutnya</div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                #{nextRoadmap.number}. {nextRoadmap.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
