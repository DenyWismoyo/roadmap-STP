# roadmap-STP

> **Platform Eksekutif Roadmap Strategis UPTD KST Solo Technopark (STP) 2026–2030**  
> *Executive Policy Briefing & Strategic Decision-Making Platform for the Mayor of Surakarta*

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![BLUD Solo Technopark](https://img.shields.io/badge/Status-BLUD_Mandiri_100%25-10B981?style=for-the-badge)](https://solotechnopark.id/)

---

## 🏛️ Latar Belakang & Mandat Walikota

Platform ini dibangun khusus sebagai instrumen pengambil keputusan (*executive briefing & decision support tool*) bagi Walikota Surakarta guna menavigasi transformasi kemandirian finansial **UPTD Kawasan Sains dan Teknologi (KST) Solo Technopark**:

1. **Kemandirian Fiskal Penuh (0% Belanja Rutin APBD)**:
   - Pada TA 2026, porsi APBD murni tersisa hanya Rp 103 Juta (0,39%), sementara pendapatan operasional BLUD ditargetkan mencapai Rp 26,52 Miliar (99,61%).
   - Menuju 2030, STP diproyeksikan 100% mandiri secara fiskal dan menyetorkan surplus dividen **Pendapatan Asli Daerah (PAD)** ke Kas Daerah hingga **Rp 7,5 Miliar/tahun**.
2. **Eliminasi Defisit Operasional Rp 2,4 Miliar**:
   - Menutup celah fiskal akibat berakhirnya program kemitraan migas Pertamina melalui aktivasi aset tidur (*idle assets*) dan monetisasi model bisnis baru.
3. **Target Agregat Finansial 2030 (Skala Penuh)**:
   - **Baseline Rutin (8 Inisiatif)**: Rp 28.000.000.000 / tahun.
   - **Terobosan Agresif Baru (17 Inisiatif)**: Rp 39.500.000.000 / tahun (termasuk GovTech Hub, AI Exchange, Inclusive Tech Talent, Urban Agritech, Circular E-Waste, Creative IP Batik, dan HealthTech Hub).
   - **Target Komitmen Minimum**: **Rp 50.500.000.000 / tahun**.
   - **Total Target Horizon Skala Penuh**: **Rp 67.500.000.000 / tahun**.

---

## ⚖️ Landasan Regulasi & Pengaman Audit BLUD

Model bisnis yang dipaparkan dalam roadmap ini dirancang secara *audit-proof* (aman dari temuan BPK/Inspektorat) mengacu pada:
- **UU No. 23/2014** tentang Pemerintahan Daerah
- **Permendagri No. 79/2018** tentang Badan Layanan Umum Daerah (BLUD) — *khususnya Pasal 34–40 mengenai fleksibilitas penatausahaan, pola tarif mandiri, pemanfaatan aset BMD, dan kerja sama bisnis non-APBD*.
- **Perpres No. 106/2017** tentang Kawasan Sains dan Teknologi (KST)
- **Perda Kota Surakarta No. 6/2023** tentang Perangkat Daerah (Integrasi BRIDA)
- **Perwali Surakarta No. 38/2022** tentang Pola Tata Kelola BLUD UPTD KST STP
- **Perwali Surakarta No. 121/2024** tentang Tenaga Profesional BLUD UPTD KST STP

---

## 🎯 5 Kluster Strategis & 25 Inisiatif Roadmap

| Kluster | Deskripsi | Jumlah Inisiatif |
| :--- | :--- | :---: |
| **🏢 Aset & Properti** | Komersialisasi ruang strategis (Gedung Sembrani, Eks AK-Tekstil, RS Kardiologi, PLUT) | 4 |
| **🎓 Diklat & Sertifikasi** | Pendirian TUK LSP BNSP, Welder Underground, Simulator Crane, Mandatori OPD, Inclusive Tech Talent | 5 |
| **🤖 AI & Green Tech** | Solo GovTech Hub, AI Exchange, GPU Cloud, SPKLU PLTS, Urban Agritech, Circular E-Waste, HealthTech | 8 |
| **🎭 MICE & Komersial** | Naming Rights Kawasan, Bundling MICE, Videotron OOH, Creative IP Batik Lab, Co-working Space | 5 |
| **🌐 Kemitraan Global** | Kemitraan industri multinasional, SMK Go Global BP3MI, Marketing Agency Agregator | 3 |

---

## 💻 Tech Stack & Arsitektur

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) dengan arsitektur tema kustom **Dark Futuristic Civic Innovation**
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content Engine**: File Markdown statis di `content/roadmaps/*.md` diparsing via `gray-matter` & `react-markdown`
- **Deployment Ready**: Teroptimasi penuh untuk hosting di [Vercel](https://vercel.com/)

---

## 🚀 Panduan Memulai (Local Development)

### 1. Prasyarat
- Node.js versi 18.18+ atau 20+
- npm / yarn / pnpm

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Development
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 4. Menjalankan Build Produksi
```bash
npm run build
npm run start
```

---

## ☁️ Panduan Deploy ke Vercel

Proyek ini telah dikonfigurasi dan diuji agar dapat langsung di-deploy ke Vercel tanpa konfigurasi tambahan:

1. Pastikan seluruh kode telah di-push ke repositori GitHub:
   ```bash
   git push origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com/) dan login dengan akun GitHub Anda.
3. Klik **"Add New..."** -> **"Project"**.
4. Pilih repositori **`DenyWismoyo/roadmap-STP`**.
5. Di bagian pengaturan proyek Vercel:
   - **Framework Preset**: `Next.js` (otomatis terdeteksi)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
6. Klik tombol **"Deploy"**.
7. Dalam ~1-2 menit, situs web roadmap STP akan aktif dan online di URL `https://roadmap-stp.vercel.app` (atau domain kustom Anda).

---

## 📄 Lisensi
Hak Cipta © 2026 UPTD KST Solo Technopark, Pemerintah Kota Surakarta. Seluruh hak cipta dilindungi undang-undang.
