import Link from "next/link";
import {
  FileCheck2,
  Scale,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Gavel,
} from "lucide-react";
import { REGULATORY_WAVES, formatRupiah } from "@/lib/data";

export const metadata = {
  title: "Paket Rekomendasi Regulasi Walikota | Kemandirian Fiskal STP 2026–2030",
  description:
    "Rekomendasi instrumen regulasi Walikota Surakarta (Perwali, SK Walikota, SE) untuk memperluas model bisnis BLUD Solo Technopark agar mandiri 100% tanpa APBD.",
};

export default function RegulatoryRoadmapPage() {
  const totalRegulatoryPotential = REGULATORY_WAVES.reduce((sum, w) => {
    return sum + w.instruments.reduce((iSum, inst) => iSum + inst.targetRevenue, 0);
  }, 0);

  return (
    <div className="app-container py-12 space-y-10">
      {/* HEADER SECTION */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.2)]">
          <Gavel className="w-3.5 h-3.5 text-amber-400" />
          Executive Policy Brief & Rekomendasi Regulasi Kepala Daerah
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Paket Regulasi Walikota: Membuka Kunci Model Bisnis Baru Solo Technopark
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
          Sebagai tindak lanjut atas arahan langsung Walikota Surakarta agar Solo Technopark mampu mandiri penuh tanpa anggaran belanja operasional APBD, dokumen kebijakan ini merumuskan agenda penerbitan instrumen regulasi daerah guna memperluas cakupan bisnis BLUD secara sah, akuntabel, dan bebas risiko audit.
        </p>
      </div>

      {/* EXECUTIVE SUMMARY 3-PILLAR POLICY CALLOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-rose-950/30 border-y sm:border-x border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.1)] space-y-3">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            1. Mengapa Perlu Regulasi Baru?
          </div>
          <h3 className="text-base font-bold text-white">Regulasi Lama Terlalu Kaku</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Regulasi BLUD dan perjanjian masa lalu mengunci aset dalam status pinjam pakai Rp 0 (AK-Tekstil, RS Kardiologi, PLUT) atau kontribusi flat sangat minim Rp 110 Jt (Shopee), berisiko memicu defisit operasional Rp 2,4 M pasca-Pertamina jika tidak diubah.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-blue-950/30 border-y sm:border-x border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] space-y-3">
          <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4 text-blue-400" />
            2. Apa Solusi Konkretnya?
          </div>
          <h3 className="text-base font-bold text-white">Paket 4 Gelombang Regulasi</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Walikota menerbitkan 4 Gelombang Kebijakan: Quick Wins 2026, Paket Perwali Komersial 2027, Transformasi Hijau & AI Hub 2028, serta Regulasi Afirmatif Smart Hub & Inklusi Sosial-Ekonomi (2027–2028).
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-emerald-950/30 border-y sm:border-x border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] space-y-3">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            3. Jaminan Keamanan Hukum
          </div>
          <h3 className="text-base font-bold text-white">100% Audit-Proof (BPK Aman)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Seluruh regulasi yang dirancang berlandaskan asas fleksibilitas pola pengelolaan keuangan BLUD pada <strong className="text-emerald-300">Permendagri No. 79/2018 Pasal 34–40</strong> dan <strong className="text-emerald-300">UU Pemda No. 23/2014</strong>, sehingga Walikota aman dari risiko maladministrasi.
          </p>
        </div>
      </div>

      {/* METRIC IMPACT BANNER */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 border-y sm:border-x border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs uppercase font-bold text-amber-400 tracking-wide">
            Total Potensi Pendapatan Baru yang Terbuka Melalui Regulasi Walikota:
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
            {formatRupiah(totalRegulatoryPotential)} / Tahun
          </div>
          <div className="text-xs text-slate-300">
            Kemandirian Finansial Paripurna: 0% Subsidi APBD & Proyeksi Dividen PAD Rp 7,5 Miliar pada 2030
          </div>
        </div>

        <Link
          href="/simulasi"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all shrink-0"
        >
          Lihat Simulasi Fiskal
        </Link>
      </div>

      {/* 4 WAVES OF REGULATORY ENABLERS */}
      <div className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Pentahapan Paket Regulasi Walikota (Actionable Policy Matrix)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Matriks dokumen formal yang disiapkan untuk penandatanganan Kepala Daerah
          </p>
        </div>

        {REGULATORY_WAVES.map((wave, wIdx) => (
          <div
            key={wIdx}
            className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6 relative overflow-hidden"
          >
            {/* Wave Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${
                    wIdx === 0
                      ? "bg-amber-950/60 text-amber-300 border-amber-500/30"
                      : wIdx === 1
                      ? "bg-blue-950/60 text-cyan-300 border-cyan-500/30"
                      : wIdx === 2
                      ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                      : "bg-purple-950/60 text-purple-300 border-purple-500/30"
                  }`}>
                    {wave.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    Target: {wave.timeline}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {wave.wave}: {wave.title}
                </h3>
                <p className="text-xs text-slate-300 max-w-4xl">
                  {wave.description}
                </p>
              </div>
            </div>

            {/* Instruments Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {wave.instruments.map((inst, iIdx) => (
                <div
                  key={iIdx}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-white/10 font-mono">
                        {inst.type}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-400">
                        {inst.urgency}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">
                      {inst.title}
                    </h4>

                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                      <div className="text-[10px] uppercase font-semibold text-emerald-400">
                        Potensi Penerimaan Baru:
                      </div>
                      <div className="text-sm font-black text-emerald-400 font-mono">
                        {formatRupiah(inst.targetRevenue)} / thn
                      </div>
                    </div>

                    {/* Hurdle vs Shield */}
                    <div className="space-y-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-slate-200 space-y-1">
                        <div className="text-[10px] font-bold text-rose-300 uppercase flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Hambatan Regulasi Eksisting:
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {inst.hurdle}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-slate-200 space-y-1">
                        <div className="text-[10px] font-bold text-cyan-300 uppercase flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Payung Hukum Pengaman:
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {inst.legalShield}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate max-w-[70%]">Inisiatif: {inst.targetInitiative}</span>
                    <Link
                      href="/roadmap"
                      className="text-cyan-400 hover:text-cyan-200 font-bold inline-flex items-center gap-1 shrink-0"
                    >
                      Detail <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* STATUTORY COMPLIANCE SHIELD SUMMARY */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Landasan Legalitas: Mengapa Seluruh Usulan Ini Beban Hukumnya Aman?
            </h3>
            <p className="text-xs text-slate-400">
              Rujukan regulasi nasional yang memberi legitimasi wewenang kepada Walikota Surakarta
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/10 space-y-2">
            <div className="font-bold text-cyan-400 text-sm">
              Permendagri No. 79/2018 tentang Pola Pengelolaan BLUD
            </div>
            <p>
              Memberikan mandat penuh fleksibilitas operasional bagi unit pelaksana teknis BLUD. Pasal 34 hingga 40 mengatur bahwa tarif layanan dapat ditetapkan oleh Kepala Daerah dengan mempertimbangkan kontinuitas pelayanan, daya saing pasar, asas keadilan, serta efisiensi anggaran tanpa memerlukan proses perda retribusi yang kaku.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/10 space-y-2">
            <div className="font-bold text-emerald-400 text-sm">
              Undang-Undang No. 23/2014 tentang Pemerintahan Daerah
            </div>
            <p>
              Pasal 386–390 mengatur inovasi daerah dalam rangka peningkatan efisiensi, perbaikan efektivitas, perbaikan kualitas pelayanan, dan penambahan pendapatan daerah tanpa adanya sanksi hukum apabila inovasi tersebut bertujuan untuk kepentingan umum dan peningkatan kemandirian fiskal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
