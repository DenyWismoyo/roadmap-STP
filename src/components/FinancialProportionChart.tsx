import { HISTORICAL_BUDGET, formatRupiah } from "@/lib/data";
import { Landmark, TrendingUp } from "lucide-react";

export default function FinancialProportionChart() {
  return (
    <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            Transformasi Kemandirian Anggaran
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Pergeseran Proporsi APBD vs BLUD (2021 – 2026)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Dari 67,2% ketergantungan subsidi APBD (2021) menuju 99,61% kemandirian BLUD (2026)
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            <span className="text-slate-300">Subsidi APBD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="text-slate-300">Pendapatan BLUD Mandiri</span>
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
                  ? "bg-emerald-950/30 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                  : "bg-slate-950/50 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between text-xs gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm text-white">
                    {item.year}
                  </span>
                  {item.note && (
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isLatest
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                          : "bg-slate-800 text-slate-300 border border-white/10"
                      }`}
                    >
                      {item.note}
                    </span>
                  )}
                </div>

                <div className="font-semibold text-slate-400 text-xs">
                  Total Anggaran: <span className="text-white font-mono font-bold">{formatRupiah(item.total)}</span>
                </div>
              </div>

              {/* Stacked Progress Bar */}
              <div className="h-6 w-full bg-slate-950 rounded-xl overflow-hidden flex text-[10px] font-bold border border-white/5">
                {/* APBD Bar */}
                {item.pctApbd > 0 && (
                  <div
                    style={{ width: `${item.pctApbd}%` }}
                    className="bg-blue-600 text-white flex items-center justify-center transition-all duration-700 overflow-hidden whitespace-nowrap px-1 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
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
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-400 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"
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

      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Landmark className="w-3.5 h-3.5 text-cyan-400" />
          Pagu Murni APBD 2026: Hanya tersisa Rp 103 Juta (0,39%) untuk belanja wajib administrasi dasar.
        </span>
        <span className="font-bold text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          99,61% Pendapatan BLUD Mandiri
        </span>
      </div>
    </div>
  );
}
