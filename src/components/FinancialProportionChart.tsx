import { HISTORICAL_BUDGET, formatRupiah } from "@/lib/data";
import { Landmark, TrendingUp } from "lucide-react";

export default function FinancialProportionChart() {
  return (
    <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            Transformasi Kemandirian Anggaran
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
            Pergeseran Proporsi APBD vs BLUD (2021 – 2026)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Dari 67,2% ketergantungan subsidi APBD (2021) menuju 99,61% kemandirian BLUD (2026)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="text-slate-600">Subsidi APBD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-slate-600">Pendapatan BLUD Mandiri</span>
          </div>
        </div>
      </div>

      {/* Progress Bars for each year */}
      <div className="space-y-3.5">
        {HISTORICAL_BUDGET.map((item) => {
          const isLatest = item.year === 2026;
          return (
            <div
              key={item.year}
              className={`p-4 rounded-2xl border transition-all ${
                isLatest
                  ? "bg-emerald-50/60 border-emerald-300 shadow-sm"
                  : "bg-slate-50/80 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between text-xs gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm text-slate-950">
                    {item.year}
                  </span>
                  {item.note && (
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isLatest
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-slate-200 text-slate-700 border border-slate-300"
                      }`}
                    >
                      {item.note}
                    </span>
                  )}
                </div>

                <div className="font-semibold text-slate-500 text-xs">
                  Total Anggaran: <span className="text-slate-900 font-mono font-bold">{formatRupiah(item.total)}</span>
                </div>
              </div>

              {/* Stacked Progress Bar */}
              <div className="h-6 w-full bg-slate-200 rounded-xl overflow-hidden flex text-[10px] font-bold border border-slate-300">
                {/* APBD Bar */}
                {item.pctApbd > 0 && (
                  <div
                    style={{ width: `${item.pctApbd}%` }}
                    className="bg-blue-600 text-white flex items-center justify-center transition-all duration-700 overflow-hidden whitespace-nowrap px-1 shadow-inner"
                    title={`APBD: ${item.pctApbd}% (${formatRupiah(item.apbd)})`}
                  >
                    {item.pctApbd >= 15 && `APBD ${item.pctApbd.toFixed(1)}%`}
                  </div>
                )}

                {/* BLUD Bar */}
                <div
                  style={{ width: `${item.pctBlud}%` }}
                  className={`flex items-center justify-center text-white font-bold transition-all duration-700 overflow-hidden whitespace-nowrap px-1 ${
                    isLatest
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black shadow-sm"
                      : "bg-emerald-600"
                  }`}
                  title={`BLUD: ${item.pctBlud}% (${formatRupiah(item.blud)})`}
                >
                  BLUD {item.pctBlud.toFixed(1)}% ({formatRupiah(item.blud, true)})
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <Landmark className="w-3.5 h-3.5 text-blue-600" />
          Pagu Murni APBD 2026: Hanya tersisa Rp 103 Juta (0,39%) untuk belanja wajib administrasi dasar.
        </span>
        <span className="font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
          99,61% Pendapatan BLUD Mandiri
        </span>
      </div>
    </div>
  );
}
