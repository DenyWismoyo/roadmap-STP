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
  BookOpen,
  FileText,
} from "lucide-react";
import { getAllPublicImpactDocs } from "@/lib/markdown";
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
  const publicImpactDocs = getAllPublicImpactDocs();

  const sectorSlugMap: Record<string, string> = {
    "warga-rentan": "pemberdayaan-masyarakat-dan-kaum-rentan",
    "umkm-pengrajin": "akselerasi-umkm-dan-pengrajin-tradisional",
    "industri-kampus": "penguatan-industri-lokal-dan-bengkel-rakyat",
    "komunitas-pemuda": "fasilitasi-komunitas-kreatif-dan-pemuda",
  };

  return (
    <div className="app-container py-12 space-y-12">
      {/* EXECUTIVE HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
          Executive Civic Briefing: Mandat Pelayanan Publik & Subsidi Silang Terarah
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          Mesin Kemaslahatan Publik: Mengalirkan Surplus Komersial untuk Kesejahteraan Warga, UMKM & Industri Surakarta
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Sesuai dengan <strong className="text-rose-700">Permendagri No. 79/2018</strong>, Solo Technopark (STP) bukanlah korporasi privat yang mengejar dividen murni, melainkan <strong>Badan Layanan Umum Daerah (BLUD)</strong> milik Pemerintah Kota Surakarta. Setiap rupiah surplus pendapatan dari 25 inisiatif komersial (target Rp 50,5 M – 67,5 M) didedikasikan kembali melalui skema <em>Targeted Cross-Subsidization</em> guna membiayai program-program non-profit bagi masyarakat rentan, pengrajin batik, pelaku UMKM, dan pemuda di wilayah Solo Raya.
        </p>
      </div>

      {/* 4 TOP BENTO SROI METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Bento 1: Rasio SROI */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-rose-400 hover:shadow-md transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center justify-between">
            <span>Rasio Dampak Sosial (SROI)</span>
            <TrendingUp className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-slate-950 my-2 font-mono">
            1 : {SROI_SUMMARY.aggregateSroiRatio}
          </div>
          <div className="text-xs text-slate-500 leading-relaxed">
            Setiap Rp 1 surplus komersial BLUD menghasilkan Rp {SROI_SUMMARY.aggregateSroiRatio} nilai kemanfaatan sosial terukur bagi warga Solo.
          </div>
        </div>

        {/* Bento 2: Total Nilai Kemanfaatan Publik */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center justify-between">
            <span>Nilai Sosial Tercipta (2030)</span>
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-emerald-700 my-2 font-mono">
            {formatRupiah(SROI_SUMMARY.totalSocialValueCreated, true)} / thn
          </div>
          <div className="text-xs text-slate-500 leading-relaxed">
            Total estimasi nilai ekonomi non-finansial yang diterima warga, UMKM, dan bengkel lokal Surakarta.
          </div>
        </div>

        {/* Bento 3: Warga & Pelaku Terfasilitasi */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-blue-400 hover:shadow-md transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center justify-between">
            <span>Penerima Manfaat Pro-Bono</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-slate-950 my-2 font-mono">
            18.500+ / thn
          </div>
          <div className="text-xs text-slate-500 leading-relaxed">
            Warga prasejahtera, difabel, perajin batik sepuh, UMKM kuliner, dan inovator pemuda.
          </div>
        </div>

        {/* Bento 4: Alokasi Surplus untuk Kemaslahatan */}
        <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center justify-between">
            <span>Investasi Subsidi Silang</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-3xl lg:text-4xl font-black text-amber-700 my-2 font-mono">
            {formatRupiah(SROI_SUMMARY.totalSurplusInvested, true)} / thn
          </div>
          <div className="text-xs text-slate-500 leading-relaxed">
            Surplus pendapatan bisnis mandiri yang dialirkan kembali untuk program non-profit publik.
          </div>
        </div>
      </div>

      {/* CROSS-SUBSIDIZATION FLOW VISUAL ARCHITECTURE */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Arsitektur Keuangan BLUD
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Peta Alur Subsidi Silang Terarah (Commercial-to-Civic Flow)
            </h3>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            Audit-Proof: Permendagri No. 79/2018 Pasal 34
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Box 1: Mesin Komersial Korporasi */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                1. Mesin Komersial BLUD
              </div>
              <h4 className="text-base font-bold text-slate-900">Surplus B2B Korporasi & Aset</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pendapatan komersial pasar bebas dari perusahaan multinasional, industri manufaktur, dan aset strategis:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                  R&D As a Service & Corporate Academy (Rp 8,5 M)
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                  Solo AI Exchange & Cloud GPU (Rp 4,0 M)
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                  Solo GovTech SaaS Antar-Daerah (Rp 3,0 M)
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                  Naming Rights Kawasan & BGS Sembrani (Rp 4,0 M)
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-200 text-xs font-mono font-bold text-emerald-700">
              Total Target: Rp 50,5 M – 67,5 M/thn
            </div>
          </div>

          {/* Box 2: Filter Kebijakan & Manajemen BLUD */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-amber-600" />
                2. Filter Kebijakan Walikota
              </div>
              <h4 className="text-base font-bold text-slate-900">Prinsip Alokasi Kemaslahatan</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manajemen BLUD menyisihkan belanja pokok rutin (Rp 8,08 M), menyetorkan dividen PAD ke Kas Daerah (Rp 7,5 M), dan mengunci surplus sisanya untuk subsidi silang:
              </p>
              <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                <div className="text-[11px] font-bold text-amber-800">Mandat Eksekutif:</div>
                <p className="text-[11px] text-slate-700">
                  Tidak boleh ada warga atau UMKM Surakarta yang tertolak mengakses teknologi hanya karena kendala finansial.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200 text-xs font-mono font-bold text-amber-800">
              Alokasi Pro-Bono: Rp 32,5 M/thn
            </div>
          </div>

          {/* Box 3: Penerima Manfaat Non-Profit */}
          <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                3. Dampak Nyata di Surakarta
              </div>
              <h4 className="text-base font-bold text-slate-900">4 Sektor Non-Profit Publik</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kemaslahatan riil yang diterima langsung oleh masyarakat tanpa membebani kas APBD murni:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-2 text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                  Beasiswa Vokasi 100% Difabel & Dhuafa (Rp 38 M)
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                  HAKI Gratis & Lab Uji Mutu UMKM (Rp 45 M)
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                  Open Living Lab Bengkel Presisi Rakyat (Rp 25 M)
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                  Co-working & Startup Hub Gratis Pemuda (Rp 16 M)
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-200 text-xs font-mono font-bold text-rose-700">
              Nilai Manfaat Sosial: Rp 124 Miliar/thn
            </div>
          </div>
        </div>
      </div>

      {/* 4 DETAILED SECTORS OF PUBLIC BENEFICIARIES */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Matriks Keberdampakan 4 Sektor Utama di Wilayah Surakarta
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
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
                className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Header Kluster */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                        <IconComponent className="w-3.5 h-3.5 text-blue-600" />
                        {sector.badge}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                        {sector.title}
                      </h3>
                      <div className="text-xs font-semibold text-blue-700">
                        Target Sasaran: {sector.targetGroup}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] uppercase font-bold text-slate-500">Nilai Sosial/thn</div>
                      <div className="text-lg sm:text-xl font-black text-emerald-700 font-mono">
                        {formatRupiah(sector.annualValueEstimate, true)}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Key Metrics Mini Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {sector.keyMetrics.map((km, kmIdx) => (
                      <div
                        key={kmIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                      >
                        <div className="text-[10px] text-slate-500 leading-tight">{km.label}</div>
                        <div className="text-sm sm:text-base font-black text-slate-900 font-mono">
                          {km.value}
                        </div>
                        <div className="text-[10px] text-emerald-700 font-semibold">
                          Target: {km.target2030}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Programs List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Program Unggulan Non-Profit / Subsidi Silang:
                    </div>
                    {sector.programs.map((prog, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2 hover:border-blue-300 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {prog.name}
                          </h4>
                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                              prog.type.includes("100%")
                                ? "bg-rose-50 text-rose-800 border-rose-200"
                                : prog.type.includes("Terbuka")
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : "bg-amber-50 text-amber-800 border-amber-200"
                            }`}
                          >
                            {prog.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {prog.mechanism}
                        </p>
                        <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                          <span className="text-emerald-700 font-semibold">
                            💡 Dampak: {prog.civicImpact}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          🔗 Didanai oleh: {prog.crossSubsidizedBy}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Link to Full Markdown Dossier */}
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/dampak-publik/${sectorSlugMap[sector.id] || "kerangka-akuntabilitas-sroi-dan-subsidi-silang"}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-blue-700 hover:text-blue-800 font-bold text-xs flex items-center justify-between transition-all group/btn"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        Buka Dokumen Naskah Lengkap (.md)
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SROI AUDIT TABLE & METHODOLOGY */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-8 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Analisis Akuntabilitas Kinerja Publik
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Tabel Social Return on Investment (SROI) BLUD STP 2026–2030
            </h3>
            <p className="text-xs text-slate-600">
              Pengukuran rasio pengganda nilai ekonomi sosial berbasis metodologi internasional yang audit-proof.
            </p>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
            Rasio Agregat: 1 : {SROI_SUMMARY.aggregateSroiRatio}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider bg-slate-50">
                <th className="py-3 px-4">Komponen Program Non-Profit</th>
                <th className="py-3 px-4 text-right">Alokasi Surplus BLUD</th>
                <th className="py-3 px-4 text-right">Nilai Sosial Tercipta</th>
                <th className="py-3 px-4 text-center">Rasio SROI</th>
                <th className="py-3 px-4">Indikator Manfaat Riil Warga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {SROI_BREAKDOWN.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 max-w-xs">
                    {item.component}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-amber-700 whitespace-nowrap">
                    {formatRupiah(item.surplusInvestment, true)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-emerald-700 font-bold whitespace-nowrap">
                    {formatRupiah(item.socialValueCreated, true)}
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-black text-blue-700">
                    1 : {item.sroiRatio}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed max-w-md">
                    {item.description}
                  </td>
                </tr>
              ))}
              {/* Total Summary Row */}
              <tr className="bg-slate-100 font-bold text-slate-950 border-t-2 border-slate-300">
                <td className="py-4 px-4 uppercase tracking-wider text-amber-800 font-black">
                  Total Agregat Nilai Publik (Horizon 2030)
                </td>
                <td className="py-4 px-4 text-right font-mono text-amber-700 font-black whitespace-nowrap">
                  {formatRupiah(SROI_SUMMARY.totalSurplusInvested, true)}
                </td>
                <td className="py-4 px-4 text-right font-mono text-emerald-700 font-black whitespace-nowrap text-sm">
                  {formatRupiah(SROI_SUMMARY.totalSocialValueCreated, true)}
                </td>
                <td className="py-4 px-4 text-center font-mono font-black text-blue-700 text-sm">
                  1 : {SROI_SUMMARY.aggregateSroiRatio}
                </td>
                <td className="py-4 px-4 text-slate-600 text-xs">
                  Nilai pengganda ekonomi & proteksi sosial bagi 54 kelurahan se-Surakarta
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5 KECAMATAN GEOGRAPHIC DISTRIBUTION OF CIVIC IMPACT */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Persebaran Teritorial: Menjangkau 54 Kelurahan se-Kota Surakarta
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Sebaran Manfaat Nyata di 5 Kecamatan Kota Surakarta
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Solo Technopark bukan menara gading di Jebres semata, melainkan mesin penggerak ekonomi kerakyatan dan sosial yang hadir di seluruh penjuru Kota Bengawan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Kecamatan Jebres */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Kecamatan Jebres
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">
                  18.500+ Penerima
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                Kampus Utama Inovasi & Manufaktur Presisi
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Beasiswa Vokasi 100% Difabel & Dhuafa (Inisiatif #21)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Open Living Lab Mesin Bubut CNC & FabLab Industri (#3, #15)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Sentra Komputasi Enterprise AI & Solo Civic OS (#19, #20)</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Nilai Sosial:</span>
              <span className="font-mono font-bold text-emerald-700">Rp 38 Miliar/thn</span>
            </div>
          </div>

          {/* Kecamatan Banjarsari */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Kecamatan Banjarsari
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">
                  14.200+ Penerima
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                Inkubasi Kuliner & Sirkular Ekonomi E-Waste
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Inkubasi Kuliner Modern & Kurasi Sertifikasi Halal (#13)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sentra Daur Ulang E-Waste & Pemulihan Baterai EV (#23)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Urban Agritech Pekarangan Stunting Kelurahan (#22)</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Nilai Sosial:</span>
              <span className="font-mono font-bold text-emerald-700">Rp 27 Miliar/thn</span>
            </div>
          </div>

          {/* Kecamatan Laweyan */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Kecamatan Laweyan
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">
                  8.600+ Penerima
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                Sentra HAKI Batik & Mutu Tekstil Hijau
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Fasilitasi HAKI Motif Batik Gratis di Muka (#24)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Lab Uji Mutu Tekstil Ramah Lingkungan (#7)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>3D Digital Scanning Motif & Lisensi IP Budaya (#24)</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Nilai Sosial:</span>
              <span className="font-mono font-bold text-emerald-700">Rp 23 Miliar/thn</span>
            </div>
          </div>

          {/* Kecamatan Pasar Kliwon */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4 hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  Kecamatan Pasar Kliwon
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">
                  9.800+ Penerima
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                Live-Commerce Hub & Onboarding E-Katalog
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Studio Live-Commerce Terpadu PLUT Surakarta (#14)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Onboarding Pengrajin Kriya ke E-Katalog Pemkot (#14)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Inkubasi Wirausaha Santri & UMKM Digital Mandiri (#13)</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Nilai Sosial:</span>
              <span className="font-mono font-bold text-emerald-700">Rp 21 Miliar/thn</span>
            </div>
          </div>

          {/* Kecamatan Serengan */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Kecamatan Serengan
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">
                  6.400+ Penerima
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                Talenta Digital & Manufaktur Alat Medis
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Fabrikasi Suku Cadang Kaki Palsu / Ortotik-Prostetik (#25)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Tele-Rehabilitasi Fisioterapi Gratis ke Puskesmas (#25)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Pelatihan Pemuda AI Data Labeling & Coding Pemula (#21)</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Nilai Sosial:</span>
              <span className="font-mono font-bold text-emerald-700">Rp 15 Miliar/thn</span>
            </div>
          </div>

          {/* Ringkasan Agregat 5 Kecamatan */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white border-y sm:border-x sm:border border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/30">
                KONSOLIDASI SELURUH KOTA
              </span>
              <h3 className="font-black text-lg text-white">
                57.500+ Warga & UMKM Kota Surakarta
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mekanisme subsidi silang memastikan setiap rupiah surplus korporat BLUD kembali mengalir sebagai proteksi ekonomi dan sosial riil bagi warga Kota Solo.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Total Nilai SROI:</span>
              <span className="font-mono font-black text-emerald-400 text-sm">Rp 124 Miliar/thn</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 OFFICIAL MARKDOWN DOSSIERS DIRECTORY */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
            <FileText className="w-3.5 h-3.5 text-rose-600" />
            Naskah Kebijakan Resmi di `content/dampak-publik/*.md`
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Arsip 5 Dokumen Naskah Kebijakan Publik (.md)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Naskah kebijakan formal berpalet putih eksekutif siap cetak / ekspor PDF untuk Walikota, DPRD, dan BPK RI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {publicImpactDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/dampak-publik/${doc.slug}`}
              className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl p-5 bg-white hover:bg-slate-50 border-y sm:border-x sm:border border-slate-200/90 hover:border-rose-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-700 font-mono">
                    #{doc.number}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    {doc.sector}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {doc.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-mono font-bold">
                  {doc.annual_social_value ? formatRupiah(doc.annual_social_value, true) : "Kerangka SROI"}
                </span>
                <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Buka Naskah <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION LINKING TO REGULASI & ROADMAP */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-blue-50 via-white to-rose-50 border-y sm:border-x sm:border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
            <Gavel className="w-4 h-4 text-amber-700" />
            Landasan Kebijakan Kepala Daerah
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
            Wujudkan Subsidi Silang Sah & Audit-Proof Melalui Regulasi Walikota
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Agar mekanisme subsidi silang komersial ke non-profit terlindungi dari risiko temuan audit BPK, pelajari instrumen Perwali & SK Walikota yang telah disiapkan.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/regulasi"
            className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
          >
            <Gavel className="w-4 h-4 text-white" />
            Paket Regulasi Walikota
          </Link>
          <Link
            href="/roadmap"
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all flex items-center gap-2 shadow-sm"
          >
            <Layers className="w-4 h-4 text-slate-700" />
            25 Inisiatif Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
