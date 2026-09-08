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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          Model Simulasi Fiskal Eksekutif
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Simulasi Pertumbuhan & Kemandirian Finansial BLUD (2026–2030)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Proyeksi kapasitas penerimaan BLUD Solo Technopark untuk mengeliminasi potensi defisit operasional Rp 2,4 Miliar (pasca-kemitraan migas) dan melompat menuju surplus mandiri hingga Rp 37,6 Miliar per tahun pada 2030.
        </p>
      </div>

      {/* Interactive Simulator */}
      <ScenarioSimulator />

      {/* MASTER DATA TABLE SCENARIOS */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Matriks Komparasi 4 Skenario Pertumbuhan (2026–2030)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Rincian proyeksi pendapatan, beban belanja rutin, surplus mandiri, dan kontribusi dividen PAD
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold self-start sm:self-auto">
            Satuan: Rupiah (IDR)
          </span>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0 rounded-none sm:rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-[11px] uppercase tracking-wider">
                <th className="py-3.5 px-4 font-bold">Indikator Finansial</th>
                <th className="py-3.5 px-4 font-bold">2026</th>
                <th className="py-3.5 px-4 font-bold">2027</th>
                <th className="py-3.5 px-4 font-bold">2028</th>
                <th className="py-3.5 px-4 font-bold">2029</th>
                <th className="py-3.5 px-4 font-bold text-blue-700">2030 (Skala Penuh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
              {/* Row 1: Baseline */}
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-sans font-semibold text-slate-900">
                  1. Baseline Eksisting (8 Program Rutin)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4">
                    {formatRupiah(d.baseline, true)}
                  </td>
                ))}
              </tr>

              {/* Row 2: Breakthrough Injections */}
              <tr className="hover:bg-amber-50/60 bg-amber-50/30">
                <td className="py-3 px-4 font-sans font-semibold text-amber-800">
                  2. Tambahan 17 Terobosan Agresif
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-bold text-amber-700">
                    +{formatRupiah(d.breakthroughAddition, true)}
                  </td>
                ))}
              </tr>

              {/* Row 3: Skenario A */}
              <tr className="hover:bg-blue-50/50">
                <td className="py-3 px-4 font-sans font-bold text-blue-800">
                  Skenario A: Konservatif (Prob. 90%)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 text-blue-700 font-bold">
                    {formatRupiah(d.scenarioA_Konservatif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 4: Skenario B */}
              <tr className="hover:bg-emerald-50/60 bg-emerald-50/30">
                <td className="py-3 px-4 font-sans font-black text-emerald-800">
                  Skenario B: Progresif (Rekomendasi Manajemen)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-emerald-700">
                    {formatRupiah(d.scenarioB_Progresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 5: Skenario C */}
              <tr className="hover:bg-amber-50/60 bg-amber-50/30">
                <td className="py-3 px-4 font-sans font-black text-amber-800">
                  Skenario C: Agresif Penuh (Prob. 60%)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-amber-700">
                    {formatRupiah(d.scenarioC_Agresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 6: Belanja Rutin */}
              <tr className="hover:bg-rose-50/60 border-t border-slate-200 bg-rose-50/30">
                <td className="py-3 px-4 font-sans font-semibold text-rose-800">
                  Beban Belanja Pokok Rutin STP
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 text-rose-700 font-bold">
                    {formatRupiah(d.belanjaRutin, true)}
                  </td>
                ))}
              </tr>

              {/* Row 7: Surplus Progresif */}
              <tr className="hover:bg-emerald-50/60 bg-emerald-50/50">
                <td className="py-3 px-4 font-sans font-black text-emerald-800">
                  Surplus Operasional Bersih (Skenario B)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-emerald-700">
                    {formatRupiah(d.surplusProgresif, true)}
                  </td>
                ))}
              </tr>

              {/* Row 8: Setoran Dividen PAD */}
              <tr className="hover:bg-amber-50/60 bg-amber-50/50">
                <td className="py-3 px-4 font-sans font-black text-amber-800">
                  Setoran Dividen PAD ke Kasda (20% Surplus)
                </td>
                {SCENARIO_DATA.map((d) => (
                  <td key={d.year} className="py-3 px-4 font-black text-amber-700">
                    {formatRupiah(d.setoranPadProgresif, true)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FORMULA ALOKASI SURPLUS BLUD & DIVIDEN PAD KAS DAERAH */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-50/80 via-white to-blue-50/80 border-y sm:border-x sm:border border-emerald-200/90 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase tracking-wider">
              Dasar Hukum: Permendagri No. 79/2018 Pasal 38–40
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Formula Distribusi Surplus Bersih BLUD & Setoran Dividen PAD
            </h3>
            <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
              Setelah seluruh beban operasional rutin pokok (Rp 8,08 Miliar) terpenuhi 100% mandiri, surplus operasional BLUD dibagi secara akuntabel ke dalam 3 alokasi strategis:
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-sm text-center md:text-right shrink-0">
            <div className="text-[10px] uppercase font-bold text-slate-500">Target Dividen PAD 2030:</div>
            <div className="text-2xl font-black text-emerald-700 font-mono">Rp 7.500.000.000</div>
            <div className="text-[11px] text-slate-500">Disetor ke Kas Umum Daerah (RKUD)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Alokasi 1: 50% Belanja Modal & Reinvestasi */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-400 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                  Porsi 50%
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">Reinvestasi BLUD</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Belanja Modal, Riset & Pemeliharaan Aset KST
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pemutakhiran server AI, pemeliharaan gedung Sembrani & AK-Tekstil, peremajaan mesin CNC perkakas, dan ekspansi modul SaaS GovTech.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Proyeksi 2030:</span>
              <span className="font-mono font-bold text-blue-700">Rp 18,75 Miliar</span>
            </div>
          </div>

          {/* Alokasi 2: 30% Cadangan & Subsidi Silang Publik */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:border-rose-400 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-mono">
                  Porsi 30%
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">Dampak Sosial SROI</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Cadangan Operasional & Subsidi Silang Warga
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Membiayai beasiswa vokasi inklusif difabel, uji lab mutu UMKM kuliner/kriya, proteksi HAKI batik, dan tele-rehabilitasi puskesmas.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Proyeksi 2030:</span>
              <span className="font-mono font-bold text-rose-700">Rp 11,25 Miliar</span>
            </div>
          </div>

          {/* Alokasi 3: 20% Dividen PAD Murni ke Kas Daerah */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:border-emerald-400 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                  Porsi 20%
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">Setoran Kasda</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Dividen Kas Daerah (PAD Murni Pemkot Surakarta)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setoran dividen laba bersih BLUD ke Rekening Kas Umum Daerah (RKUD) untuk menambah ruang fiskal pembangunan infrastruktur Kota Surakarta.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Proyeksi 2030:</span>
              <span className="font-mono font-bold text-emerald-700 font-black">Rp 7,50 Miliar</span>
            </div>
          </div>
        </div>
      </div>

      {/* BELANJA POKOK BREAKDOWN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Card 1: Breakdown */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-950">
              Struktur Beban Belanja Rutin Pokok (Rp 8,08 Miliar)
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Kebutuhan belanja operasional minimum untuk menjaga standar operasional kawasan seluas puluhan hektare tanpa terputus.
          </p>

          <div className="space-y-4">
            {BELANJA_RUTIN_BREAKDOWN.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-700 font-medium">{item.label}</span>
                  <span className="text-slate-950 font-mono font-bold">
                    {formatRupiah(item.amount)} ({item.pct}%)
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    style={{ width: `${item.pct}%` }}
                    className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 rounded-full shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Markdown Overview Document */}
        {overviewDoc && (
          <section aria-label="Naskah Skenario Fiskal">
            <MarkdownViewer content={overviewDoc.content} showDocumentHeader={true} />
          </section>
        )}
      </div>
    </div>
  );
}
