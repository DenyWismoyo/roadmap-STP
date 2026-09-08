"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Presentation,
  AlertTriangle,
  TrendingUp,
  Gavel,
  HeartHandshake,
  Layers,
  ChevronLeft,
  ChevronRight,
  Printer,
  CheckCircle2,
  ShieldCheck,
  Building,
} from "lucide-react";

interface ExecutivePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDES = [
  {
    id: "urgensi",
    title: "1. Urgensi Krisis Fiskal & Mandat Walikota",
    subtitle: "Mengapa Status Quo Tidak Lagi Dapat Dipertahankan?",
    icon: AlertTriangle,
    accent: "text-rose-600 bg-rose-50 border-rose-200",
    content: (
      <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
          <div className="font-bold text-rose-800 text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Ancaman Defisit Rp 2,4 Miliar Pasca Berakhirnya Kemitraan Migas Pertamina
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Berakhirnya program kemitraan migas Pertamina menciptakan celah defisit operasional Rp 2,4 Miliar per tahun. Pada saat yang sama, APBD murni Kota Surakarta tahun 2026 hanya menyisakan pagu subsidi Rp 103 Juta (0,39%), sehingga STP diwajibkan 99,61% mandiri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-[11px] font-bold uppercase text-slate-500">Penyebab Utama Terkunci:</div>
            <div className="text-xs font-semibold text-slate-900">
              Regulasi Tarif Eksisting Kaku & Aset Pinjam Pakai Rp 0
            </div>
            <p className="text-[11px] text-slate-600">
              Gedung Sembrani hanya memberi kontribusi flat Rp 110 Jt/thn, sementara Eks AK-Tekstil dan RS Kardiologi masih berstatus pinjam pakai Rp 0.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <div className="text-[11px] font-bold uppercase text-emerald-800">Solusi Mandat Walikota:</div>
            <div className="text-xs font-semibold text-emerald-900">
              Kemandirian 100% via Terobosan Regulasi Baru
            </div>
            <p className="text-[11px] text-slate-600">
              Menghapus ketergantungan APBD murni dengan membuka fleksibilitas tarif komersial BLUD dan diversifikasi bisnis berbasis teknologi tinggi.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "target-fiskal",
    title: "2. Target Finansial & Dividen Kas Daerah (2026–2030)",
    subtitle: "Kemandirian Penuh dan Transformasi Menjadi Penyumbang PAD",
    icon: TrendingUp,
    accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    content: (
      <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-center">
            <div className="text-[10px] font-bold uppercase text-blue-700">Target Komitmen 2030</div>
            <div className="text-xl sm:text-2xl font-black text-blue-900 font-mono">Rp 50,5 M</div>
            <div className="text-[10px] text-blue-600 font-medium">Batas Minimum Mandiri</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <div className="text-[10px] font-bold uppercase text-emerald-800">Skala Penuh 2030</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">Rp 67,5 M</div>
            <div className="text-[10px] text-emerald-600 font-medium">Potensi Agresif Horizon</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <div className="text-[10px] font-bold uppercase text-amber-800">Dividen Kasda (PAD)</div>
            <div className="text-xl sm:text-2xl font-black text-amber-800 font-mono">Rp 7,5 M</div>
            <div className="text-[10px] text-amber-600 font-medium">Setoran Tahunan ke APBD</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            Formula Distribusi Surplus BLUD (Sesuai Permendagri No. 79/2018):
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="font-mono font-bold text-blue-700">50%</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Reinvestasi & Aset KST</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="font-mono font-bold text-rose-700">30%</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Subsidi Silang SROI Warga</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="font-mono font-bold text-emerald-700">20%</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Setoran Dividen PAD Kasda</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "inisiatif",
    title: "3. Portofolio 25 Inisiatif Bisnis & Aset Strategis",
    subtitle: "Diversifikasi Model Bisnis dari Sewa Fisik Menjadi Smart Hub & AI",
    icon: Layers,
    accent: "text-blue-700 bg-blue-50 border-blue-200",
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <p className="text-xs text-slate-600">
          Transformasi bisnis STP ditopang oleh kombinasi 8 Inisiatif Baseline Rutin (Rp 28,0 M) dan 17 Terobosan Agresif Baru (Rp 39,5 M):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              1. Unlocking Idle Assets (Properti)
            </div>
            <p className="text-[11px] text-slate-600">
              Gedung Sembrani Shopee (Rp 2,5 M), Eks AK-Tekstil (Rp 1,7 M), RS Kardiologi (Rp 2,5 M), Hub PLUT (Rp 1,2 M), Naming Rights (Rp 2,0 M).
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              2. Digital & AI Scalable Hub
            </div>
            <p className="text-[11px] text-slate-600">
              Solo Civic OS GovTech SaaS (Rp 2,5 M) & Solo Enterprise AI Agent Exchange (Rp 3,5 M) dengan zero marginal cost.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Gavel className="w-3.5 h-3.5 text-amber-600" />
              3. Diklat & Sertifikasi Presisi
            </div>
            <p className="text-[11px] text-slate-600">
              SME Hub, TUK BNSP Mandiri, Cyber Security Academy, Inklusif Difabel Tech Talent (Rp 2,0 M).
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="font-bold text-rose-800 flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
              4. Green Tech & HealthTech
            </div>
            <p className="text-[11px] text-slate-600">
              Circular Economy E-Waste (Rp 2,0 M), Urban Agritech (Rp 1,5 M), HealthTech Ortotik-Prostetik (Rp 2,5 M).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "regulasi",
    title: "4. Paket Regulasi Quick Wins (Siap Tanda Tangan 30–90 Hari)",
    subtitle: "Draf Kebijakan yang Langsung Dieksekusi Walikota Surakarta",
    icon: Gavel,
    accent: "text-amber-800 bg-amber-50 border-amber-200",
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
          <div className="text-xs font-bold text-amber-900">
            3 Berkas Siap Masuk Meja Kerja Walikota (Tahap 1 - 2026):
          </div>
          <p className="text-[11px] text-slate-600">
            Cukup ditandatangani Kepala Daerah tanpa proses berbelit untuk langsung mengunci target Rp 5,2 Miliar:
          </p>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">1. Draf Perwali Pola Tarif Fleksibel BLUD</span>
              <p className="text-[11px] text-slate-600">
                Menghapus tarif flat lama, mengizinkan bagi hasil industri (*revenue sharing*), serta menetapkan tarif komersial Gedung Sembrani Shopee Rp 2,5 M/thn.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">2. SK Walikota Penugasan Pengelolaan Aset Komersial</span>
              <p className="text-[11px] text-slate-600">
                Menetapkan STP sebagai pengelola operasional tunggal atas Eks AK-Tekstil, RS Kardiologi, dan fasilitas PLUT.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">3. Adendum PKS Tripartit Kemitraan Komersial</span>
              <p className="text-[11px] text-slate-600">
                Mengamankan komitmen bagi hasil jangka panjang dengan mitra teknologi, manufaktur, dan perbankan daerah.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2 text-xs text-blue-900">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Jaminan Safe-Harbor:</strong> Didampingi Jaksa Pengacara Negara (Kejari Surakarta) & BPKP Jateng (100% Audit-Proof BPK).
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "dampak-warga",
    title: "5. Warisan Manfaat Warga di 5 Kecamatan (SROI 1 : 3,82)",
    subtitle: "Nilai Sosial Riil Rp 124 Miliar untuk 57.500+ Warga & UMKM Solo",
    icon: HeartHandshake,
    accent: "text-rose-700 bg-rose-50 border-rose-200",
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-blue-50 border border-rose-200 flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase text-rose-800">Rasio SROI Terukur</div>
            <div className="text-2xl font-black text-rose-700 font-mono">1 : 3,82</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase text-slate-500">Nilai Manfaat Sosial</div>
            <div className="text-xl font-black text-slate-900 font-mono">Rp 124 Miliar / thn</div>
          </div>
        </div>

        <p className="text-xs text-slate-600">
          Mekanisme subsidi silang komersial memastikan manfaat terasa merata di seluruh 5 Kecamatan Kota Surakarta:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-blue-800 block text-[11px]">Kec. Jebres</span>
            <span className="text-[10px] text-slate-600">Beasiswa Difabel & Open Lab CNC (Rp 38 M)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-emerald-800 block text-[11px]">Kec. Banjarsari</span>
            <span className="text-[10px] text-slate-600">Inkubasi Kuliner & E-Waste (Rp 27 M)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-amber-800 block text-[11px]">Kec. Laweyan</span>
            <span className="text-[10px] text-slate-600">HAKI Batik & Lab Mutu Tekstil (Rp 23 M)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-purple-800 block text-[11px]">Kec. Pasar Kliwon</span>
            <span className="text-[10px] text-slate-600">Studio Live Commerce PLUT (Rp 21 M)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-rose-800 block text-[11px]">Kec. Serengan</span>
            <span className="text-[10px] text-slate-600">Kaki Palsu & Talenta Pemuda (Rp 15 M)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 text-white flex flex-col justify-center text-center">
            <span className="text-[10px] font-mono text-emerald-400 font-bold">57.500+ Penerima</span>
            <span className="text-[9px] text-slate-300">54 Kelurahan se-Solo</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ExecutivePresentationModal({
  isOpen,
  onClose,
}: ExecutivePresentationModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slide = SLIDES[currentSlide];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar Header */}
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <Presentation className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase block">
                  Sidang Paparan Walikota Surakarta
                </span>
                <span className="text-sm font-black text-slate-900">
                  Ringkasan Eksekutif Roadmap STP 2026–2030
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300 transition-colors"
                title="Cetak Naskah / Ekspor PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                Cetak Lembar Disposisi
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Navigation Tabs */}
          <div className="px-5 pt-3 pb-1 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                  currentSlide === idx
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Slide {idx + 1}
              </button>
            ))}
          </div>

          {/* Slide Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${slide.accent}`}>
                  Poin Kunci #{currentSlide + 1}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                {slide.title}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {slide.subtitle}
              </p>
            </div>

            <div className="pt-2">
              {slide.content}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="px-5 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Sebelumnya
            </button>

            <span className="text-xs font-mono font-bold text-slate-500">
              Slide {currentSlide + 1} dari {SLIDES.length}
            </span>

            {currentSlide < SLIDES.length - 1 ? (
              <button
                onClick={() => setCurrentSlide(Math.min(SLIDES.length - 1, currentSlide + 1))}
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
              >
                Lanjut
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
              >
                Selesai Paparan
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
