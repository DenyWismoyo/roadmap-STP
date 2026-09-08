import Link from "next/link";
import {
  HeartHandshake,
  Store,
  Cpu,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Gavel,
  CheckCircle2,
  Users,
  Award,
  Zap,
  Building2,
  Layers,
} from "lucide-react";
import {
  PUBLIC_IMPACT_SECTORS,
  SROI_BREAKDOWN,
  SROI_SUMMARY,
  formatRupiah,
} from "@/lib/data";

export const metadata = {
  title: "Kemaslahatan Publik & Sektor Non-Profit | BLUD Solo Technopark 2026–2030",
  description:
    "Kerangka keberdampakan sektor non-profit, UMKM, masyarakat rentan, dan industri lokal Surakarta melalui skema Subsidi Silang Terarah (Targeted Cross-Subsidization) dan analisis SROI BLUD Solo Technopark.",
};

export default function PublicImpactPage() {
  return (
    <div className="app-container py-12 space-y-12">
      {/* EXECUTIVE HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(244,63,94,0.25)]">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
          Executive Civic Briefing: Mandat Pelayanan Publik & Subsidi Silang Terarah
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Mesin Kemaslahatan Publik: Mengalirkan Surplus Komersial untuk Kesejahteraan Warga, UMKM & Industri Surakarta
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
          Sesuai dengan <strong className="text-rose-300">Permendagri No. 79/2018</strong>, Solo Technopark (STP) bukanlah korporasi privat yang mengejar dividen murni, melainkan <strong>Badan Layanan Umum Daerah (BLUD)</strong> milik Pemerintah Kota Surakarta. Setiap rupiah surplus pendapatan dari 25 inisiatif komersial (target Rp 50,5 M – 67,5 M) didedikasikan kembali melalui skema <em>Targeted Cross-Subsidization</em> guna membiayai program-program non-profit bagi masyarakat rentan, pengrajin batik, pelaku UMKM, dan pemuda di wilayah Solo Raya.
        </p>
      </div>

      {/* 4 TOP BENTO SROI METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Bento 1: Rasio SROI */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-rose-500/30 shadow-[0_0_25px_rgba(244,63,94,0.12)] relative overflow-hidden group hover:border-rose-400 hover:shadow-[0_0_35px_rgba(244,63,94,0.25)] transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1 flex items-center justify-between">
            <span>Rasio Dampak Sosial (SROI)</span>
            <TrendingUp className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-white my-2 font-mono">
            1 : {SROI_SUMMARY.aggregateSroiRatio}
          </div>
          <div className="text-xs text-slate-400 leading-relaxed">
            Setiap Rp 1 surplus komersial BLUD menghasilkan Rp {SROI_SUMMARY.aggregateSroiRatio} nilai kemanfaatan sosial terukur bagi warga Solo.
          </div>
        </div>

        {/* Bento 2: Total Nilai Kemanfaatan Publik */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.12)] relative overflow-hidden group hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center justify-between">
            <span>Nilai Sosial Tercipta (2030)</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-emerald-400 my-2 font-mono">
            {formatRupiah(SROI_SUMMARY.totalSocialValueCreated, true)} / thn
          </div>
          <div className="text-xs text-slate-400 leading-relaxed">
            Total estimasi nilai ekonomi non-finansial yang diterima warga, UMKM, dan bengkel lokal Surakarta.
          </div>
        </div>

        {/* Bento 3: Warga & Pelaku Terfasilitasi */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.12)] relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center justify-between">
            <span>Penerima Manfaat Pro-Bono</span>
            <Users className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-white my-2 font-mono">
            18.500+ / thn
          </div>
          <div className="text-xs text-slate-400 leading-relaxed">
            Warga prasejahtera, difabel, perajin batik sepuh, UMKM kuliner, dan inovator pemuda.
          </div>
        </div>

        {/* Bento 4: Alokasi Surplus untuk Kemaslahatan */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border-y sm:border-x border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.12)] relative overflow-hidden group hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center justify-between">
            <span>Investasi Subsidi Silang</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-amber-400 my-2 font-mono">
            {formatRupiah(SROI_SUMMARY.totalSurplusInvested, true)} / thn
          </div>
          <div className="text-xs text-slate-400 leading-relaxed">
            Surplus pendapatan bisnis mandiri yang dialirkan kembali untuk program non-profit publik.
          </div>
        </div>
      </div>

      {/* CROSS-SUBSIDIZATION FLOW VISUAL ARCHITECTURE */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80 border-y sm:border-x border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Arsitektur Keuangan BLUD
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Peta Alur Subsidi Silang Terarah (Commercial-to-Civic Flow)
            </h3>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
            Audit-Proof: Permendagri No. 79/2018 Pasal 34
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Box 1: Mesin Komersial Korporasi */}
          <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-900/50 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                <Building2 className="w-3 h-3" />
                1. Mesin Komersial BLUD
              </div>
              <h4 className="text-base font-bold text-white">Surplus B2B Korporasi & Aset</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pendapatan komersial pasar bebas dari perusahaan multinasional, industri manufaktur, dan aset strategis:
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  R&D As a Service & Corporate Academy (Rp 8,5 M)
                </li>
                <li className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Solo AI Exchange & Cloud GPU (Rp 4,0 M)
                </li>
                <li className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Solo GovTech SaaS Antar-Daerah (Rp 3,0 M)
                </li>
                <li className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Naming Rights Kawasan & BGS Sembrani (Rp 4,0 M)
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-mono font-bold text-emerald-400">
              Total Target: Rp 50,5 M – 67,5 M/thn
            </div>
          </div>

          {/* Box 2: Filter Kebijakan & Manajemen BLUD */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                2. Filter Kebijakan Walikota
              </div>
              <h4 className="text-base font-bold text-white">Prinsip Alokasi Kemaslahatan</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manajemen BLUD menyisihkan belanja pokok rutin (Rp 8,08 M), menyetorkan dividen PAD ke Kas Daerah (Rp 7,5 M), dan mengunci surplus sisanya untuk subsidi silang:
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-amber-500/20 space-y-1">
                <div className="text-[11px] font-bold text-amber-300">Mandat Eksekutif:</div>
                <p className="text-[11px] text-slate-300">
                  Tidak boleh ada warga atau UMKM Surakarta yang tertolak mengakses teknologi hanya karena kendala finansial.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-mono font-bold text-amber-300">
              Alokasi Pro-Bono: Rp 32,5 M/thn
            </div>
          </div>

          {/* Box 3: Penerima Manfaat Non-Profit */}
          <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-900/50 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3 h-3" />
                3. Dampak Nyata di Surakarta
              </div>
              <h4 className="text-base font-bold text-white">4 Sektor Non-Profit Publik</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kemaslahatan riil yang diterima langsung oleh masyarakat tanpa membebani kas APBD murni:
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2 text-rose-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Beasiswa Vokasi 100% Difabel & Dhuafa (Rp 38 M)
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  HAKI Gratis & Lab Uji Mutu UMKM (Rp 45 M)
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Open Living Lab Bengkel Presisi Rakyat (Rp 25 M)
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Co-working & Startup Hub Gratis Pemuda (Rp 16 M)
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-mono font-bold text-rose-300">
              Nilai Manfaat Sosial: Rp 124 Miliar/thn
            </div>
          </div>
        </div>
      </div>

      {/* 4 DETAILED SECTORS OF PUBLIC BENEFICIARIES */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Matriks Keberdampakan 4 Sektor Utama di Wilayah Surakarta
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Rincian intervensi afirmatif, target terukur 2026–2030, dan program pro-bono per kluster penerima
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PUBLIC_IMPACT_SECTORS.map((sector) => {
            const IconComponent =
              sector.id === "warga-rentan"
                ? HeartHandshake
                : sector.id === "umkm-pengrajin"
                ? Store
                : sector.id === "industri-kampus"
                ? Cpu
                : Rocket;

            return (
              <div
                key={sector.id}
                className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Header Kluster */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-800 border border-white/10 text-xs font-bold text-slate-300">
                        <IconComponent className="w-3.5 h-3.5 text-cyan-400" />
                        {sector.badge}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                        {sector.title}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-300">
                        Target Sasaran: {sector.targetGroup}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Nilai Sosial/thn</div>
                      <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
                        {formatRupiah(sector.annualValueEstimate, true)}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Key Metrics Mini Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {sector.keyMetrics.map((km, kmIdx) => (
                      <div
                        key={kmIdx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1"
                      >
                        <div className="text-[10px] text-slate-400 leading-tight">{km.label}</div>
                        <div className="text-sm sm:text-base font-black text-white font-mono">
                          {km.value}
                        </div>
                        <div className="text-[10px] text-emerald-400 font-semibold">
                          Target: {km.target2030}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Programs List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Program Unggulan Non-Profit / Subsidi Silang:
                    </div>
                    {sector.programs.map((prog, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-2 hover:border-cyan-500/30 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white">
                            {prog.name}
                          </h4>
                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                              prog.type.includes("100%")
                                ? "bg-rose-950/60 text-rose-300 border-rose-500/30"
                                : prog.type.includes("Terbuka")
                                ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30"
                                : "bg-amber-950/60 text-amber-300 border-amber-500/30"
                            }`}
                          >
                            {prog.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {prog.mechanism}
                        </p>
                        <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                          <span className="text-emerald-300 font-semibold">
                            💡 Dampak: {prog.civicImpact}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          🔗 Didanai oleh: {prog.crossSubsidizedBy}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SROI AUDIT TABLE & METHODOLOGY */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Analisis Akuntabilitas Kinerja Publik
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Tabel Social Return on Investment (SROI) BLUD STP 2026–2030
            </h3>
            <p className="text-xs text-slate-300">
              Pengukuran rasio pengganda nilai ekonomi sosial berbasis metodologi internasional yang audit-proof.
            </p>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
            Rasio Agregat: 1 : {SROI_SUMMARY.aggregateSroiRatio}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Komponen Program Non-Profit</th>
                <th className="py-3 px-4 text-right">Alokasi Surplus BLUD</th>
                <th className="py-3 px-4 text-right">Nilai Sosial Tercipta</th>
                <th className="py-3 px-4 text-center">Rasio SROI</th>
                <th className="py-3 px-4">Indikator Manfaat Riil Warga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200 font-medium">
              {SROI_BREAKDOWN.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white max-w-xs">
                    {item.component}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-amber-300 whitespace-nowrap">
                    {formatRupiah(item.surplusInvestment, true)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-emerald-400 font-bold whitespace-nowrap">
                    {formatRupiah(item.socialValueCreated, true)}
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-black text-cyan-300">
                    1 : {item.sroiRatio}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 text-xs leading-relaxed max-w-md">
                    {item.description}
                  </td>
                </tr>
              ))}
              {/* Total Summary Row */}
              <tr className="bg-slate-950/80 font-bold text-white border-t-2 border-white/20">
                <td className="py-4 px-4 uppercase tracking-wider text-amber-400 font-black">
                  Total Agregat Nilai Publik (Horizon 2030)
                </td>
                <td className="py-4 px-4 text-right font-mono text-amber-300 font-black whitespace-nowrap">
                  {formatRupiah(SROI_SUMMARY.totalSurplusInvested, true)}
                </td>
                <td className="py-4 px-4 text-right font-mono text-emerald-400 font-black whitespace-nowrap text-sm">
                  {formatRupiah(SROI_SUMMARY.totalSocialValueCreated, true)}
                </td>
                <td className="py-4 px-4 text-center font-mono font-black text-cyan-300 text-sm">
                  1 : {SROI_SUMMARY.aggregateSroiRatio}
                </td>
                <td className="py-4 px-4 text-slate-300 text-xs">
                  Nilai pengganda ekonomi & proteksi sosial bagi 54 kelurahan se-Surakarta
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CALL TO ACTION LINKING TO REGULASI & ROADMAP */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-blue-950 via-slate-900 to-rose-950 border-y sm:border-x border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Gavel className="w-4 h-4" />
            Landasan Kebijakan Kepala Daerah
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Wujudkan Subsidi Silang Sah & Audit-Proof Melalui Regulasi Walikota
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Agar mekanisme subsidi silang komersial ke non-profit terlindungi dari risiko temuan audit BPK, pelajari instrumen Perwali & SK Walikota yang telah disiapkan.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/regulasi"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2"
          >
            <Gavel className="w-4 h-4" />
            Paket Regulasi Walikota
          </Link>
          <Link
            href="/roadmap"
            className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            25 Inisiatif Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
