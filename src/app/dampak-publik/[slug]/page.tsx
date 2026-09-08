import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPublicImpactDocs, getPublicImpactDocBySlug } from "@/lib/markdown";
import { formatRupiah } from "@/lib/data";
import MarkdownViewer from "@/components/MarkdownViewer";
import {
  ArrowLeft,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Users,
  Award,
  ArrowRight,
  Gavel,
  FileText,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const docs = getAllPublicImpactDocs();
  return docs.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = getPublicImpactDocBySlug(slug);
  if (!doc) return { title: "Dokumen Kebijakan Tidak Ditemukan" };

  return {
    title: `${doc.title} | Dampak Publik STP 2026–2030`,
    description: doc.summary,
  };
}

export default async function PublicImpactDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = getPublicImpactDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const allDocs = getAllPublicImpactDocs();
  const currentIndex = allDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="app-container py-10 space-y-10">
      {/* Breadcrumb & Top Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/dampak-publik"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Ikhtisar Dampak Publik & UMKM
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Dokumen #{doc.number} dari {allDocs.length}</span>
        </div>
      </div>

      {/* HEADER HERO CARD */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-black text-slate-700 font-mono">
            #{doc.number}
          </span>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700">
            {doc.sector}
          </span>

          {doc.badge && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              {doc.badge}
            </span>
          )}

          {doc.sroi_ratio && (
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
              SROI 1 : {doc.sroi_ratio}
            </span>
          )}
        </div>

        {/* Title & Executive Summary */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {doc.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
            {doc.summary}
          </p>
        </div>

        {/* 4 Metadata Stat Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4 border-t border-slate-100">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Nilai Sosial / thn
            </div>
            <div className="text-base sm:text-lg font-black text-emerald-700 font-mono">
              {doc.annual_social_value ? formatRupiah(doc.annual_social_value, true) : "Kerangka SROI"}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              Target Penerima
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-900 truncate">
              {doc.beneficiaries_count || "Masyarakat Surakarta"}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
              Sumber Subsidi Silang
            </div>
            <div className="text-xs sm:text-sm font-semibold text-rose-700 truncate">
              {doc.cross_subsidized_by || "Surplus Konsolidasi BLUD"}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              Dasar Hukum BLUD
            </div>
            <div className="text-xs font-semibold text-amber-800 truncate">
              {doc.legal_basis || "Permendagri No. 79/2018"}
            </div>
          </div>
        </div>
      </div>

      {/* EXECUTIVE WHITE-PAPER MARKDOWN DOSSIER */}
      <div className="space-y-4">
        <MarkdownViewer content={doc.content} />
      </div>

      {/* BOTTOM PREV / NEXT NAVIGATION */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevDoc ? (
          <Link
            href={`/dampak-publik/${prevDoc.slug}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all group flex items-center gap-3 text-left"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Sebelumnya</div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors line-clamp-1">
                #{prevDoc.number}: {prevDoc.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextDoc ? (
          <Link
            href={`/dampak-publik/${nextDoc.slug}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all group flex items-center gap-3 text-right ml-auto"
          >
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Berikutnya</div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors line-clamp-1">
                #{nextDoc.number}: {nextDoc.title}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
