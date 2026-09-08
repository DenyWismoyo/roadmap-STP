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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Gavel className="w-3.5 h-3.5 text-amber-700" />
          Executive Policy Brief & Rekomendasi Regulasi Kepala Daerah
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          Paket Regulasi Walikota: Membuka Kunci Model Bisnis Baru Solo Technopark
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Sebagai tindak lanjut atas arahan langsung Walikota Surakarta agar Solo Technopark mampu mandiri penuh tanpa anggaran belanja operasional APBD, dokumen kebijakan ini merumuskan agenda penerbitan instrumen regulasi daerah guna memperluas cakupan bisnis BLUD secara sah, akuntabel, dan bebas risiko audit.
        </p>
      </div>

      {/* EXECUTIVE SUMMARY 3-PILLAR POLICY CALLOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-rose-50/70 border-y sm:border-x sm:border border-rose-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            1. Mengapa Perlu Regulasi Baru?
          </div>
          <h3 className="text-base font-bold text-slate-950">Regulasi Lama Terlalu Kaku</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Regulasi BLUD dan perjanjian masa lalu mengunci aset dalam status pinjam pakai Rp 0 (AK-Tekstil, RS Kardiologi, PLUT) atau kontribusi flat sangat minim Rp 110 Jt (Shopee), berisiko memicu defisit operasional Rp 2,4 M pasca-Pertamina jika tidak diubah.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-blue-50/70 border-y sm:border-x sm:border border-blue-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4 text-blue-600" />
            2. Apa Solusi Konkretnya?
          </div>
          <h3 className="text-base font-bold text-slate-950">Paket 4 Gelombang Regulasi</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Walikota menerbitkan 4 Gelombang Kebijakan: Quick Wins 2026, Paket Perwali Komersial 2027, Transformasi Hijau & AI Hub 2028, serta Regulasi Afirmatif Smart Hub & Inklusi Sosial-Ekonomi (2027–2028).
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-emerald-50/70 border-y sm:border-x sm:border border-emerald-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            3. Jaminan Keamanan Hukum
          </div>
          <h3 className="text-base font-bold text-slate-950">100% Audit-Proof (BPK Aman)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Seluruh regulasi yang dirancang berlandaskan asas fleksibilitas pola pengelolaan keuangan BLUD pada <strong className="text-emerald-800">Permendagri No. 79/2018 Pasal 34–40</strong> dan <strong className="text-emerald-800">UU Pemda No. 23/2014</strong>, sehingga Walikota aman dari risiko maladministrasi.
          </p>
        </div>
      </div>

      {/* METRIC IMPACT BANNER */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-white to-emerald-50 border-y sm:border-x sm:border border-blue-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs uppercase font-bold text-blue-700 tracking-wide">
            Total Potensi Pendapatan Baru yang Terbuka Melalui Regulasi Walikota:
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono tracking-tight">
            {formatRupiah(totalRegulatoryPotential)} / Tahun
          </div>
          <div className="text-xs text-slate-600">
            Kemandirian Finansial Paripurna: 0% Subsidi APBD & Proyeksi Dividen PAD Rp 7,5 Miliar pada 2030
          </div>
        </div>

        <Link
          href="/simulasi"
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
        >
          Lihat Simulasi Fiskal
        </Link>
      </div>

      {/* QUICK WINS DECISION MATRIX (30-90 HARI PERTAMA) */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-amber-50/70 border-y sm:border-x sm:border border-amber-300 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/80">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-[10px] font-black uppercase tracking-wider font-mono">
              Keputusan Mendesak Walikota Surakarta
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Paket Regulasi Quick Wins: Siap Ditandatangani dalam 30–90 Hari (2026)
            </h3>
            <p className="text-xs text-slate-700">
              Tiga instrumen kebijakan prioritas yang langsung mengeliminasi potensi defisit Rp 2,4 Miliar pasca-Pertamina dan mengunci pendapatan komitmen Rp 5,2 Miliar di tahun 2026:
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-200 text-xs font-bold shrink-0 self-start sm:self-auto">
            Target: Q3–Q4 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Quick Win 1 */}
          <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                1. Peraturan Walikota (Perwali)
              </span>
              <h4 className="text-sm font-bold text-slate-950">
                Perwali Penyesuaian Pola Tarif Fleksibel BLUD
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Mencabut batas tarif sewa kaku, mengizinkan skema bagi hasil industri (*revenue sharing*), serta menetapkan tarif komersial Gedung Sembrani Shopee dari Rp 110 Jt menjadi Rp 2,5 M/thn.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Dampak 2026:</span>
              <span className="font-mono font-bold text-emerald-700">+Rp 2,50 Miliar</span>
            </div>
          </div>

          {/* Quick Win 2 */}
          <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                2. Surat Keputusan (SK) Walikota
              </span>
              <h4 className="text-sm font-bold text-slate-950">
                SK Penugasan Pengelolaan Aset Strategis Terpadu
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Menetapkan UPTD KST STP sebagai pengelola operasional tunggal atas aset strategis Pemkot (Eks AK-Tekstil, RS Kardiologi, dan Fasilitas PLUT) untuk dikomersialkan secara sah.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Dampak 2026:</span>
              <span className="font-mono font-bold text-emerald-700">+Rp 1,70 Miliar</span>
            </div>
          </div>

          {/* Quick Win 3 */}
          <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                3. Adendum Perjanjian (PKS)
              </span>
              <h4 className="text-sm font-bold text-slate-950">
                Adendum PKS Tripartit Komersial Mitra Strategis
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Restrukturisasi klausul kerjasama lama yang merugikan daerah menjadi kemitraan bagi hasil komersial berjangka panjang dengan Shopee, mitra manufaktur, dan perbankan.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Dampak 2026:</span>
              <span className="font-mono font-bold text-emerald-700">+Rp 1,00 Miliar</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 WAVES OF REGULATORY ENABLERS */}
      <div className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Pentahapan Paket Regulasi Walikota (Actionable Policy Matrix)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Matriks dokumen formal yang disiapkan untuk penandatanganan Kepala Daerah
          </p>
        </div>

        {REGULATORY_WAVES.map((wave, wIdx) => (
          <div
            key={wIdx}
            className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden"
          >
            {/* Wave Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${
                    wIdx === 0
                      ? "bg-amber-50 text-amber-800 border-amber-200"
                      : wIdx === 1
                      ? "bg-blue-50 text-blue-800 border-blue-200"
                      : wIdx === 2
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-purple-50 text-purple-800 border-purple-200"
                  }`}>
                    {wave.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    Target: {wave.timeline}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                  {wave.wave}: {wave.title}
                </h3>
                <p className="text-xs text-slate-600 max-w-4xl">
                  {wave.description}
                </p>
              </div>
            </div>

            {/* Instruments Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {wave.instruments.map((inst, iIdx) => (
                <div
                  key={iIdx}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white text-blue-700 border border-slate-200 font-mono">
                        {inst.type}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-800">
                        {inst.urgency}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {inst.title}
                    </h4>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="text-[10px] uppercase font-semibold text-emerald-800">
                        Potensi Penerimaan Baru:
                      </div>
                      <div className="text-sm font-black text-emerald-700 font-mono">
                        {formatRupiah(inst.targetRevenue)} / thn
                      </div>
                    </div>

                    {/* Hurdle vs Shield */}
                    <div className="space-y-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-slate-700 space-y-1">
                        <div className="text-[10px] font-bold text-rose-800 uppercase flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" /> Hambatan Regulasi Eksisting:
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {inst.hurdle}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-slate-700 space-y-1">
                        <div className="text-[10px] font-bold text-blue-800 uppercase flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Payung Hukum Pengaman:
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {inst.legalShield}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="truncate max-w-[70%]">Inisiatif: {inst.targetInitiative}</span>
                    <Link
                      href="/roadmap"
                      className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 shrink-0"
                    >
                      Detail <ArrowRight className="w-3 h-3 text-blue-600" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* STATUTORY COMPLIANCE SHIELD SUMMARY */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">
              Landasan Legalitas: Mengapa Seluruh Usulan Ini Beban Hukumnya Aman?
            </h3>
            <p className="text-xs text-slate-500">
              Rujukan regulasi nasional yang memberi legitimasi wewenang kepada Walikota Surakarta
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-600">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="font-bold text-blue-700 text-sm">
              Permendagri No. 79/2018 tentang Pola Pengelolaan BLUD
            </div>
            <p>
              Memberikan mandat penuh fleksibilitas operasional bagi unit pelaksana teknis BLUD. Pasal 34 hingga 40 mengatur bahwa tarif layanan dapat ditetapkan oleh Kepala Daerah dengan mempertimbangkan kontinuitas pelayanan, daya saing pasar, asas keadilan, serta efisiensi anggaran tanpa memerlukan proses perda retribusi yang kaku.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="font-bold text-emerald-700 text-sm">
              Undang-Undang No. 23/2014 tentang Pemerintahan Daerah
            </div>
            <p>
              Pasal 386–390 mengatur inovasi daerah dalam rangka peningkatan efisiensi, perbaikan efektivitas, perbaikan kualitas pelayanan, dan penambahan pendapatan daerah tanpa adanya sanksi hukum apabila inovasi tersebut bertujuan untuk kepentingan umum dan peningkatan kemandirian fiskal.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="font-bold text-amber-800 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              Safe-Harbor: Pendampingan JPN Kejari & BPKP
            </div>
            <p className="text-slate-700">
              Guna melindungi Walikota dan TAPD dari risiko temuan audit BPK RI atau APH, seluruh paket Perwali dan adendum PKS komersial dikawal melalui permohonan <em>Legal Assistance / Legal Opinion</em> Jaksa Pengacara Negara (Kejari Surakarta) serta reviu tata kelola kepatuhan BPKP Perwakilan Jawa Tengah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
