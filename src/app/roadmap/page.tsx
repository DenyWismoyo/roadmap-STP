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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Compass className="w-3.5 h-3.5 text-blue-600" />
          Arsip Dokumen Strategis (.md)
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Direktori 25 Inisiatif Roadmap Strategis
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Seluruh berkas dokumen disimpan dalam format Markdown (.md) terstruktur. Terbagi atas 8 Inisiatif Baseline (Rp 28,0 M) dan 17 Inisiatif Terobosan Agresif (Rp 39,5 M) untuk mencapai target horizon skala penuh Rp 67,5 Miliar per tahun pada 2030.
        </p>
      </div>

      {/* Interactive Client Component with Suspense */}
      <Suspense fallback={<div className="text-slate-500 py-12 text-center">Memuat dokumen roadmap...</div>}>
        <RoadmapClient initialRoadmaps={roadmaps} />
      </Suspense>
    </div>
  );
}
