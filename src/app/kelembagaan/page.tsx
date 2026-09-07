import { getOverviewDocument } from "@/lib/markdown";
import FinancialProportionChart from "@/components/FinancialProportionChart";
import MarkdownViewer from "@/components/MarkdownViewer";
import { Landmark, Scale } from "lucide-react";

export const metadata = {
  title: "Transformasi Kelembagaan & Regulasi UPTD KST Solo Technopark (2002–2026)",
  description:
    "Perkembangan kelembagaan, dasar hukum pelaksana, struktur organisasi, dan sejarah pergeseran anggaran APBD ke BLUD.",
};

const LEGAL_BASIS = [
  {
    law: "Undang-Undang No. 23/2014",
    subject: "Pemerintahan Daerah (Pasal 219, 374, 386-390)",
    desc: "Urusan penunjang pemerintahan daerah berupa perencanaan, keuangan, kepegawaian, penelitian, dan pengembangan.",
  },
  {
    law: "Undang-Undang No. 11/2019",
    subject: "Sistem Nasional Ilmu Pengetahuan & Teknologi (Pasal 42)",
    desc: "Kelembagaan Iptek yang mencakup lembaga litbang, perguruan tinggi, badan usaha, dan kawasan penunjang sains & teknologi.",
  },
  {
    law: "Peraturan Presiden No. 106/2017",
    subject: "Kawasan Sains dan Teknologi (KST)",
    desc: "Pedoman tata kelola dan pengembangan ekosistem Science and Techno Park di Indonesia.",
  },
  {
    law: "Permendagri No. 79/2018",
    subject: "Badan Layanan Umum Daerah (BLUD)",
    desc: "Fleksibilitas pola pengelolaan keuangan daerah untuk meningkatkan efisiensi dan mutu layanan publik tanpa orientasi laba semata.",
  },
  {
    law: "Peraturan Daerah Kota Surakarta No. 6/2023",
    subject: "Pembentukan dan Susunan Perangkat Daerah",
    desc: "Integrasi kelembagaan riset daerah ke dalam Badan Riset dan Inovasi Daerah (BRIDA) Kota Surakarta.",
  },
  {
    law: "Perwali Surakarta No. 38/2022",
    subject: "Pola Tata Kelola BLUD UPTD KST Solo Technopark",
    desc: "Pola kepemimpinan gabungan profesional dan struktural ASN dalam pengelolaan kawasan dan unit bisnis komersial.",
  },
  {
    law: "Perwali Surakarta No. 11/2023",
    subject: "Kedudukan, Susunan Organisasi, Tupoksi UPTD KST STP",
    desc: "Struktur fungsional pelaksana teknis operasional kawasan sains dan teknologi.",
  },
  {
    law: "Perwali Surakarta No. 121/2024",
    subject: "Tenaga Profesional BLUD UPTD KST Solo Technopark",
    desc: "Perekrutan dan tata kerja tenaga profesional industri untuk mengelola unit bisnis BLUD secara komersial.",
  },
];

export default function InstitutionalPage() {
  const overviewDoc = getOverviewDocument("transformasi-kelembagaan");

  return (
    <div className="app-container py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <Landmark className="w-3.5 h-3.5 text-cyan-400" />
          Sejarah & Tata Kelola Hukum
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Dinamika Kelembagaan & Regulasi UPTD KST Solo Technopark
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Evolusi dua dekade dari unit balai pelatihan teknis lokal hingga menjadi Kawasan Sains dan Teknologi (KST) BLUD mandiri di bawah koordinasi BRIDA Kota Surakarta.
        </p>
      </div>

      {/* HISTORICAL CHART */}
      <FinancialProportionChart />

      {/* LEGAL FOUNDATION GRID */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            Landasan Hukum Pelaksanaan
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            8 Instrumen Hukum Pengoperasian BLUD STP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEGAL_BASIS.map((item, idx) => (
            <div
              key={idx}
              className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-slate-900/75 backdrop-blur-xl border-y sm:border-x border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-white/10">
                  Regulasi #{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white">{item.law}</h4>
                <div className="text-xs font-semibold text-cyan-400">{item.subject}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MARKDOWN OVERVIEW ARTICLE */}
      {overviewDoc && (
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-10 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <div className="prose prose-invert max-w-none">
            <MarkdownViewer content={overviewDoc.content} />
          </div>
        </div>
      )}
    </div>
  );
}
