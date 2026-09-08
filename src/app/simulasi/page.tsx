import { getOverviewDocument } from "@/lib/markdown";
import { BELANJA_RUTIN_BREAKDOWN, SCENARIO_DATA, formatRupiah } from "@/lib/data";
import ScenarioSimulator from "@/components/ScenarioSimulator";
import MarkdownViewer from "@/components/MarkdownViewer";
import { TrendingUp, PieChart, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Simulasi Finansial 2026–2030 | Kemandirian Fiskal Solo Technopark",
  description:
    "Simulasi sensitivitas pendapatan BLUD STP, analisis surplus operasional mandiri, dan estimasi kontribusi dividen PAD ke Pemkot Surakarta.",
};

export default function FinancialSimulationPage() {
  const overviewDoc = getOverviewDocument("skenario-kemandirian-fiskal");

  return (
    <div className="app-container py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          Model Simulasi Fiskal Eksekutif
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Simulasi Pertumbuhan & Kemandirian Finansial BLUD (2026–2030)
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Proyeksi kapasitas penerimaan BLUD Solo Technopark untuk mengeliminasi potensi defisit operasional Rp 2,4 Miliar (pasca-kemitraan migas) dan melompat menuju surplus mandiri hingga Rp 37,6 Miliar per tahun pada 2030.
        </p>
      </div>

      {/* Interactive Simulator */}
      <ScenarioSimulator />

      {/* MASTER DATA TABLE SCENARIOS */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Matriks Komparasi 4 Skenario Pertumbuhan (2026–2030)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Rincian proyeksi pendapatan, beban belanja rutin, surplus mandiri, dan kontribusi dividen PAD
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-bold self-start sm:self-auto">
            Satuan: Rupiah (IDR)
          </span>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0 rounded-none sm:rounded-2xl border-y sm:border-x border-white/10 bg-slate-950/60 shadow-lg">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-white/10 text-slate-300 text-[11px] uppercase tracking-wider">
                <th className="py-3.5 px-4 font-bold">Indikator Finansial</th>
                <th className="py-3.5 px-4 font-bold">2026</th>
                <th className="py-3.5 px-4 font-bold">2027</th>
                <th className="py-3.5 px-4 font-bold">2028</th>
                <th className="py-3.5 px-4 font-bold">2029</th>
                <th className="py-3.5 px-4 font-bold text-cyan-400">2030 (Skala Penuh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-slate-300">
              {/* Row 1: Baseline */}
              <tr className="hover:bg-slate-800/40">
                <td className="py-3 px-4 font-sans font-semibold text-white">
                  1. Baseline Eksisting (8 Program Rutin)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4">
                    {formatRupiah(d.baseline, true)}
                  </td>
                ))}
              </tr>

              {/* Row 2: Breakthrough Injections */}
              <tr className="hover:bg-slate-800/40 bg-amber-950/20">
                <td className="py-3 px-4 font-sans font-semibold text-amber-300">
                  2. Tambahan 12 Terobosan Agresif
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-bold text-amber-400">
                    +{formatRupiah(d.breakthroughAddition, true)}
                  </td>
                ))}
              </tr>

              {/* Row 3: Skenario A */}
              <tr className="hover:bg-slate-800/40">
                <td className="py-3 px-4 font-sans font-bold text-cyan-300">
                  Skenario A: Konservatif (Prob. 90%)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 text-cyan-400 font-bold">
                    {formatRupiah(d.scenarioA_Konservatif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 4: Skenario B */}
              <tr className="hover:bg-slate-800/40 bg-emerald-950/30">
                <td className="py-3 px-4 font-sans font-black text-emerald-300">
                  Skenario B: Progresif (Rekomendasi Manajemen)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-emerald-400">
                    {formatRupiah(d.scenarioB_Progresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 5: Skenario C */}
              <tr className="hover:bg-slate-800/40 bg-amber-950/30">
                <td className="py-3 px-4 font-sans font-black text-amber-300">
                  Skenario C: Agresif Penuh (Prob. 60%)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-amber-400">
                    {formatRupiah(d.scenarioC_Agresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 6: Belanja Rutin */}
              <tr className="hover:bg-slate-800/40 border-t border-white/10 bg-rose-950/20">
                <td className="py-3 px-4 font-sans font-semibold text-rose-300">
                  Beban Belanja Pokok Rutin STP
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 text-rose-400 font-bold">
                    {formatRupiah(d.belanjaRutin, true)}
                  </td>
                ))}
              </tr>

              {/* Row 7: Surplus Progresif */}
              <tr className="hover:bg-slate-800/40 bg-emerald-950/40">
                <td className="py-3 px-4 font-sans font-black text-emerald-300">
                  Surplus Operasional Bersih (Skenario B)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-emerald-400">
                    {formatRupiah(d.surplusProgresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 8: Setoran Dividen PAD */}
              <tr className="hover:bg-slate-800/40 bg-amber-950/40">
                <td className="py-3 px-4 font-sans font-black text-amber-300">
                  Setoran Dividen PAD ke Kasda (20% Surplus)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-amber-400">
                    {formatRupiah(d.setoranPadProgresif, true)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BELANJA POKOK BREAKDOWN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Card 1: Breakdown */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6">
          <div className="flex items-center gap-2">
            <PieChart className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              Struktur Beban Belanja Rutin Pokok (Rp 8,08 Miliar)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Kebutuhan belanja operasional minimum untuk menjaga standar operasional kawasan seluas puluhan hektare tanpa terputus.
          </p>

          <div className="space-y-4">
            {BELANJA_RUTIN_BREAKDOWN.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{item.label}</span>
                  <span className="text-white font-mono font-bold">
                    {formatRupiah(item.amount)} ({item.pct}%)
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div
                    style={{ width: `${item.pct}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Markdown Overview Document */}
        {overviewDoc && (
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">{overviewDoc.title}</h3>
            </div>
            <div className="prose prose-invert max-w-none text-xs sm:text-sm">
              <MarkdownViewer content={overviewDoc.content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
