import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] relative overflow-hidden mt-20">
      {/* Soft gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="app-container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: About & Institutional */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 p-0.5 shadow-[0_0_12px_rgba(6,182,212,0.3)] flex items-center justify-center">
                <div className="w-full h-full bg-[#070d1e] rounded-[6px] flex items-center justify-center">
                  <span className="font-black text-sm bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">STP</span>
                </div>
              </div>
              <span className="font-black tracking-wider text-base sm:text-lg text-white">
                UPTD KST SOLO TECHNOPARK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Kawasan Sains dan Teknologi di bawah naungan Badan Riset dan Inovasi Daerah (BRIDA) Pemerintah Kota Surakarta. Berorientasi pada kemandirian fiskal BLUD paripurna melalui unlocking idle assets, inovasi AI, dan energi hijau.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300 font-medium">
                Perwali No. 38/2022
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300 font-medium">
                Permendagri No. 79/2018
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300 font-medium">
                Perpres No. 106/2017
              </span>
            </div>
          </div>

          {/* Col 2: Inisiatif Prioritas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              Kluster Unggulan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/roadmap?cluster=Aset+%26+Properti" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Unlocking Aset Idle (Rp 6,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=Diklat+%26+Sertifikasi" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Diklat & Hub TUK BNSP (Rp 11,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=AI+%26+Green+Tech" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  GovTech, AI & Green Tech (Rp 16,0 M) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=MICE+%26+Komersial" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Naming Rights & MICE (Rp 9,5 M) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap?cluster=Kemitraan+Global" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  SMK Go Global BP3MI (Rp 5,0 M) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link href="/regulasi" className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1">
                  Paket Regulasi Walikota <ArrowUpRight className="w-3 h-3 text-amber-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Fiskal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-200 uppercase">
              Target Fiskal 2030
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] space-y-2">
              <div className="text-xs text-slate-400">Target Agregat Pendapatan:</div>
              <div className="text-xl font-black text-emerald-400 font-mono tracking-tight">
                Rp 50,5 M – 67,5 M
              </div>
              <div className="text-xs text-slate-300 pt-1.5 border-t border-white/10">
                Kemandirian Penuh BLUD: <span className="text-emerald-400 font-bold">99,61%</span>
              </div>
              <div className="text-xs text-slate-300">
                Proyeksi Dividen PAD: <span className="text-amber-400 font-bold">Rp 7,5 M/thn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 UPTD Kawasan Sains dan Teknologi Solo Technopark • BRIDA Pemerintah Kota Surakarta.
          </p>
          <p className="font-semibold text-slate-300">
            Role Model Technopark Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
