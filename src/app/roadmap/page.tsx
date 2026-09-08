import { Suspense } from "react";
import { getAllRoadmaps } from "@/lib/markdown";
import RoadmapClient from "./RoadmapClient";
import { Compass } from "lucide-react";

export const metadata = {
  title: "Direktori 25 Inisiatif Roadmap BLUD Solo Technopark 2026–2030",
  description:
    "Eksplorasi lengkap 25 inisiatif dokumen roadmap UPTD KST Solo Technopark berbasis Markdown (.md), target komitmen Rp 50,5 M s.d. horizon skala penuh Rp 67,5 Miliar.",
};

export default function RoadmapDirectoryPage() {
  const roadmaps = getAllRoadmaps();

  return (
    <div className="app-container py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          Arsip Dokumen Strategis (.md)
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Direktori 25 Inisiatif Roadmap Strategis
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Seluruh berkas dokumen disimpan dalam format Markdown (.md) terstruktur. Terbagi atas 8 Inisiatif Baseline (Rp 28,0 M) dan 17 Inisiatif Terobosan Agresif (Rp 39,5 M) untuk mencapai target horizon skala penuh Rp 67,5 Miliar per tahun pada 2030.
        </p>
      </div>

      {/* Interactive Client Component with Suspense */}
      <Suspense fallback={<div className="text-slate-400 py-12 text-center">Memuat dokumen roadmap...</div>}>
        <RoadmapClient initialRoadmaps={roadmaps} />
      </Suspense>
    </div>
  );
}
