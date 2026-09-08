import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 relative overflow-hidden mt-20">
      {/* Soft gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      <div className="app-container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: About & Institutional */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/stp.svg"
                alt="Solo Technopark"
                className="h-9 w-auto object-contain"
              />
              <span className="font-black tracking-wider text-base sm:text-lg text-slate-900">
                UPTD KST SOLO TECHNOPARK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Kawasan Sains dan Teknologi di bawah naungan Badan Riset dan Inovasi Daerah (BRIDA) Pemerintah Kota Surakarta. Berorientasi pada kemandirian fiskal BLUD paripurna melalui unlocking idle assets, inovasi AI, dan energi hijau.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium shadow-sm">
                Perwali No. 38/2022
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium shadow-sm">
                Permendagri No. 79/2018
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium shadow-sm">
                Perpres No. 106/2017
              </span>
            </div>
          </div>

          {/* Col 2: Inisiatif Prioritas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Kluster Unggulan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/roadmap?cluster=Aset+%26+Properti" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                  Unlocking Aset Idle (Rp 6,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=Diklat+%26+Sertifikasi" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                  Diklat & Hub TUK BNSP (Rp 11,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=AI+%26+Green+Tech" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                  GovTech, AI & Green Tech (Rp 16,0 M) <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=MICE+%26+Komersial" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                  Naming Rights & MICE (Rp 9,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=Kemitraan+Global" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                  SMK Go Global BP3MI (Rp 5,0 M) <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200 space-y-1.5">
                <Link href="/regulasi" className="text-amber-700 hover:text-amber-800 font-bold transition-colors flex items-center gap-1">
                  Paket Regulasi Walikota <ArrowUpRight className="w-3 h-3 text-amber-600" />
                </Link>
                <Link href="/dampak-publik" className="text-rose-700 hover:text-rose-800 font-bold transition-colors flex items-center gap-1">
                  Dampak Publik & SROI (Rp 124 M) <ArrowUpRight className="w-3 h-3 text-rose-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Fiskal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Target Fiskal 2030
            </h4>
            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
              <div className="text-xs text-slate-500 font-medium">Target Agregat Pendapatan:</div>
              <div className="text-xl font-black text-emerald-700 font-mono tracking-tight">
                Rp 50,5 M – 67,5 M
              </div>
              <div className="text-xs text-slate-600 pt-1.5 border-t border-slate-100">
                Kemandirian Penuh BLUD: <span className="text-emerald-700 font-bold">99,61%</span>
              </div>
              <div className="text-xs text-slate-600">
                Proyeksi Dividen PAD: <span className="text-amber-700 font-bold">Rp 7,5 M/thn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 UPTD Kawasan Sains dan Teknologi Solo Technopark • BRIDA Pemerintah Kota Surakarta.
          </p>
          <p className="font-semibold text-slate-700">
            Role Model Technopark Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
