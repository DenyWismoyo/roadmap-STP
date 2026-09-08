"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  Building2,
  Award,
  Cpu,
  Sparkles,
  Users,
} from "lucide-react";

interface ExecutivePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDES = [
  {
    id: "urgensi",
    shortTitle: "Krisis Defisit",
    title: "1. Urgensi Krisis Fiskal & Mandat Walikota Surakarta",
    subtitle: "Mengapa Status Quo Tidak Lagi Dapat Dipertahankan?",
    icon: AlertTriangle,
    accent: "text-rose-600 bg-rose-50 border-rose-200",
    content: (
      <div className="space-y-4 sm:space-y-6 text-sm text-slate-700 leading-relaxed">
        {/* Main Urgent Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/90 border border-rose-200 space-y-2.5 shadow-xs">
          <div className="font-black text-rose-900 text-base sm:text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            Ancaman Defisit Rp 2,4 Miliar Pasca Berakhirnya Kemitraan Migas Pertamina
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Berakhirnya program kemitraan migas Pertamina menciptakan celah defisit operasional Rp 2,4 Miliar per tahun. Pada saat yang sama, APBD murni Kota Surakarta tahun 2026 hanya menyisakan pagu subsidi rutin Rp 103 Juta (0,39%), sehingga STP diwajibkan <strong>99,61% mandiri</strong>.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Penyebab Utama Terkunci (Status Quo):
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-950">
              Regulasi Tarif Eksisting Kaku & Aset Pinjam Pakai Rp 0
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Gedung Sembrani Shopee hanya memberi kontribusi flat Rp 110 Jt/thn, sementara Gedung Eks AK-Tekstil dan RS Kardiologi masih berstatus pinjam pakai Rp 0 tanpa dividen ke kas daerah.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Solusi Mandat Walikota Surakarta:
            </div>
            <div className="text-sm sm:text-base font-bold text-emerald-950">
              Kemandirian 100% via Terobosan Regulasi Baru
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Menghapus subsidi operasional APBD dengan menerbitkan Perwali Tarif Fleksibel BLUD, unlocking aset strategis tidur, dan diversifikasi model bisnis berbasis teknologi tinggi.
            </p>
          </div>
        </div>

        {/* 3 Metric Summary Strip */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
            <div className="text-lg sm:text-2xl font-black text-rose-700 font-mono">0%</div>
            <div className="text-[11px] text-slate-600 font-medium">Subsidi Rutin APBD</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
            <div className="text-lg sm:text-2xl font-black text-emerald-700 font-mono">Rp 2,4 M</div>
            <div className="text-[11px] text-slate-600 font-medium">Defisit Tertutup Penuh</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
            <div className="text-lg sm:text-2xl font-black text-blue-700 font-mono">99,61%</div>
            <div className="text-[11px] text-slate-600 font-medium">Kemandirian Fiskal 2026</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "target-fiskal",
    shortTitle: "Target Fiskal",
    title: "2. Target Finansial & Dividen Kas Daerah (2026–2030)",
    subtitle: "Kemandirian Penuh dan Transformasi Menjadi Mesin Penghasil PAD",
    icon: TrendingUp,
    accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    content: (
      <div className="space-y-4 sm:space-y-6 text-sm text-slate-700 leading-relaxed">
        {/* 3 Main Targets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Target Komitmen 2030
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-950 font-mono">
              Rp 50,5 M
            </div>
            <div className="text-xs text-blue-700 font-medium">Batas Minimum Mandiri</div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Skala Penuh 2030
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono">
              Rp 67,5 M
            </div>
            <div className="text-xs text-emerald-700 font-medium">Potensi Agresif Horizon</div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-center space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
              Dividen Kasda (PAD)
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-800 font-mono">
              Rp 7,5 M
            </div>
            <div className="text-xs text-amber-700 font-medium">Setoran Tahunan ke APBD</div>
          </div>
        </div>

        {/* Formula Alokasi Surplus Permendagri 79/2018 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
            <span>Formula Distribusi Surplus Bersih BLUD (Permendagri No. 79/2018):</span>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">Setelah Belanja Pokok Rp 8,08 M Mandiri</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-mono font-black text-blue-700 text-lg sm:text-xl block">50%</span>
              <span className="font-bold text-slate-900 block">Belanja Modal & Aset</span>
              <p className="text-[11px] text-slate-600">Reinvestasi lab AI, server GovTech, pemeliharaan gedung Sembrani & AK-Tekstil.</p>
              <div className="pt-2 font-mono font-bold text-blue-700 text-xs">Rp 18,75 M (2030)</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-mono font-black text-rose-700 text-lg sm:text-xl block">30%</span>
              <span className="font-bold text-slate-900 block">Cadangan & SROI Warga</span>
              <p className="text-[11px] text-slate-600">Subsidi silang beasiswa difabel, klinik HAKI batik gratis, dan uji lab mutu UMKM.</p>
              <div className="pt-2 font-mono font-bold text-rose-700 text-xs">Rp 11,25 M (2030)</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="font-mono font-black text-emerald-700 text-lg sm:text-xl block">20%</span>
              <span className="font-bold text-slate-900 block">Setoran Dividen PAD</span>
              <p className="text-[11px] text-slate-600">Dividen tunai disetor langsung ke Rekening Kas Umum Daerah (RKUD) Kota Surakarta.</p>
              <div className="pt-2 font-mono font-bold text-emerald-700 text-xs">Rp 7,50 M (2030)</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "inisiatif",
    shortTitle: "25 Inisiatif",
    title: "3. Portofolio 25 Inisiatif Bisnis & Aset Strategis",
    subtitle: "Diversifikasi Model Bisnis dari Sewa Fisik Menjadi Smart Hub & AI",
    icon: Layers,
    accent: "text-blue-700 bg-blue-50 border-blue-200",
    content: (
      <div className="space-y-4 sm:space-y-6 text-sm text-slate-700 leading-relaxed">
        <p className="text-xs sm:text-sm text-slate-600">
          Transformasi bisnis STP ditopang oleh kombinasi <strong>8 Inisiatif Baseline Rutin (Rp 28,0 M)</strong> dan <strong>17 Terobosan Agresif Baru (Rp 39,5 M)</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
            <div className="font-bold text-amber-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm sm:text-base">
                <Building2 className="w-4 h-4 text-amber-700" />
                1. Unlocking Aset Idle
              </span>
              <span className="font-mono font-black text-amber-800 text-xs sm:text-sm">Rp 9,9 M/thn</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Optimalisasi komersial Gedung Sembrani Shopee (Rp 2,5 M), Eks AK-Tekstil (Rp 1,7 M), RS Kardiologi (Rp 2,5 M), Hub PLUT (Rp 1,2 M), dan Naming Rights Kawasan (Rp 2,0 M).
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
            <div className="font-bold text-blue-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm sm:text-base">
                <Cpu className="w-4 h-4 text-blue-700" />
                2. Digital & AI Scalable Hub
              </span>
              <span className="font-mono font-black text-blue-800 text-xs sm:text-sm">Rp 10,0 M/thn</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Solo Civic OS GovTech SaaS Antar-Daerah (Rp 2,5 M), Solo Enterprise AI Agent Exchange (Rp 3,5 M), Cloud GPU Lab, dan Cyber Security Operations Center.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
            <div className="font-bold text-emerald-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm sm:text-base">
                <Award className="w-4 h-4 text-emerald-700" />
                3. Diklat & Sertifikasi Presisi
              </span>
              <span className="font-mono font-black text-emerald-800 text-xs sm:text-sm">Rp 11,5 M/thn</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              SME Corporate Academy, Subject Matter Expert Presisi, Hub Mandiri Tempat Uji Kompetensi (TUK) BNSP, dan Program SMK Go Global BP3MI ke pasar Jepang/Eropa.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
            <div className="font-bold text-purple-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-purple-700" />
                4. Green Tech & HealthTech
              </span>
              <span className="font-mono font-black text-purple-800 text-xs sm:text-sm">Rp 8,0 M/thn</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Circular Economy E-Waste (Rp 2,0 M), Urban Agritech IoT (Rp 1,5 M), HealthTech Ortotik-Prostetik Medis (Rp 2,5 M), dan Creative IP Batik Design Lab (Rp 2,0 M).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "regulasi",
    shortTitle: "Quick Wins 30–90 Hari",
    title: "4. Paket Regulasi Quick Wins (Siap Tanda Tangan 30–90 Hari)",
    subtitle: "Draf Kebijakan Prioritas yang Langsung Dieksekusi Walikota Surakarta",
    icon: Gavel,
    accent: "text-amber-800 bg-amber-50 border-amber-200",
    content: (
      <div className="space-y-4 sm:space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Target Keputusan Cepat Q3–Q4 2026:
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-950">
              3 Berkas Siap Masuk Meja Kerja Walikota Surakarta
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Cukup ditandatangani Kepala Daerah untuk langsung mengunci target <strong>Rp 5,2 Miliar</strong> dan menghapus defisit.
            </p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-amber-200/80 text-amber-950 font-mono font-bold text-xs shrink-0 self-start sm:self-auto">
            Quick Win 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900">1. Draf Perwali Tarif Fleksibel</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mencabut batas tarif lama, mengizinkan pola bagi hasil industri (*revenue sharing*), serta menetapkan tarif sewa komersial Gedung Sembrani Shopee Rp 2,5 M/thn.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 font-mono font-bold text-emerald-700 text-xs">
              Dampak 2026: +Rp 2,50 M
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900">2. SK Walikota Pengelolaan Aset</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menetapkan STP sebagai pengelola operasional tunggal atas aset strategis Eks AK-Tekstil, RS Kardiologi, dan fasilitas PLUT untuk dikomersialkan secara sah.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 font-mono font-bold text-emerald-700 text-xs">
              Dampak 2026: +Rp 1,70 M
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900">3. Adendum PKS Tripartit</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Restrukturisasi klausul kerjasama lama menjadi kemitraan bagi hasil komersial berjangka panjang dengan mitra teknologi, perbankan, dan manufaktur.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 font-mono font-bold text-emerald-700 text-xs">
              Dampak 2026: +Rp 1,00 M
            </div>
          </div>
        </div>

        {/* Audit Safe Harbor Assurance */}
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs sm:text-sm text-blue-950">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            <strong>Jaminan Kepatuhan Hukum (Safe-Harbor):</strong> Seluruh paket regulasi dikawal melalui permohonan <em>Legal Assistance</em> Jaksa Pengacara Negara (Kejari Surakarta) serta audit kepatuhan BPKP Perwakilan Jateng (100% Bebas Risiko Audit BPK).
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "dampak-warga",
    shortTitle: "Dampak Warga Solo",
    title: "5. Warisan Manfaat Warga di 5 Kecamatan (SROI 1 : 3,82)",
    subtitle: "Nilai Sosial Riil Rp 124 Miliar untuk 57.500+ Warga & UMKM Solo",
    icon: HeartHandshake,
    accent: "text-rose-700 bg-rose-50 border-rose-200",
    content: (
      <div className="space-y-4 sm:space-y-6 text-sm text-slate-700 leading-relaxed">
        {/* Top Metric Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-blue-50 border border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
              Rasio SROI Terukur (Social Return on Investment)
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-700 font-mono">
              1 : 3,82
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Setiap Rp 1 surplus BLUD melipatgandakan nilai kemaslahatan publik senilai Rp 3,82.
            </p>
          </div>
          <div className="sm:text-right">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Total Nilai Manfaat Sosial / Tahun
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">
              Rp 124 Miliar
            </div>
            <div className="text-xs text-emerald-700 font-bold">57.500+ Penerima Manfaat</div>
          </div>
        </div>

        {/* 5-Kecamatan Distribution Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-800 block text-xs">Kec. Jebres</span>
            <span className="text-slate-600 block text-[11px]">Beasiswa Difabel & Open Lab CNC</span>
            <span className="font-mono font-bold text-blue-700 block pt-1">Rp 38 M</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-emerald-800 block text-xs">Kec. Banjarsari</span>
            <span className="text-slate-600 block text-[11px]">Inkubasi Kuliner & E-Waste</span>
            <span className="font-mono font-bold text-emerald-700 block pt-1">Rp 27 M</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-amber-800 block text-xs">Kec. Laweyan</span>
            <span className="text-slate-600 block text-[11px]">HAKI Batik & Lab Uji Mutu</span>
            <span className="font-mono font-bold text-amber-700 block pt-1">Rp 23 M</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-purple-800 block text-xs">Kec. Pasar Kliwon</span>
            <span className="text-slate-600 block text-[11px]">Studio Live Commerce PLUT</span>
            <span className="font-mono font-bold text-purple-700 block pt-1">Rp 21 M</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-rose-800 block text-xs">Kec. Serengan</span>
            <span className="text-slate-600 block text-[11px]">Kaki Palsu & Talenta AI</span>
            <span className="font-mono font-bold text-rose-700 block pt-1">Rp 15 M</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 text-white flex flex-col justify-center text-center space-y-0.5">
            <span className="text-xs font-mono text-emerald-400 font-bold">57.500+ Warga</span>
            <span className="text-[10px] text-slate-300">54 Kelurahan</span>
            <span className="text-[10px] text-emerald-300 font-semibold">Merata se-Solo</span>
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => Math.min(SLIDES.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const slide = SLIDES[currentSlide];

  const handlePrint = () => {
    window.print();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md">
          {/* Backdrop click dismiss */}
          <div
            className="absolute inset-0 -z-10"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[92vh] sm:h-[90vh] max-h-[900px] relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Header */}
            <div className="px-5 sm:px-8 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/90 shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/stp.svg"
                  alt="Solo Technopark"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <div>
                  <span className="text-xs font-bold text-blue-700 tracking-wider uppercase block">
                    Sidang Paparan Walikota Surakarta
                  </span>
                  <span className="text-sm sm:text-base font-black text-slate-900">
                    Ringkasan Eksekutif Roadmap STP 2026–2030
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-300 transition-colors shadow-xs"
                  title="Cetak Naskah / Ekspor PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  Cetak Lembar Disposisi
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                  aria-label="Tutup Paparan"
                  title="Tutup (ESC)"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Slide Navigation Tabs */}
            <div className="px-5 sm:px-8 pt-3 pb-2 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                    currentSlide === idx
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>Slide {idx + 1}</span>
                  <span className="hidden md:inline text-[11px] font-normal opacity-90">• {s.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Slide Content Body (Scrollable if needed) */}
            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
              <div className="space-y-1 pb-1 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${slide.accent}`}>
                    Poin Kunci #{currentSlide + 1}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {slide.subtitle}
                </p>
              </div>

              <div className="pt-2">
                {slide.content}
              </div>
            </div>

            {/* Footer Controls */}
            <div className="px-5 sm:px-8 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600" />
                Sebelumnya
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
                <span>Slide {currentSlide + 1} dari {SLIDES.length}</span>
                <span className="hidden sm:inline text-slate-400 font-sans font-normal text-[11px]">• Gunakan tombol ← / → pada keyboard</span>
              </div>

              {currentSlide < SLIDES.length - 1 ? (
                <button
                  onClick={() => setCurrentSlide(Math.min(SLIDES.length - 1, currentSlide + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all active:scale-95"
                >
                  Lanjut
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all active:scale-95"
                >
                  Selesai Paparan
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
