# Standar Aturan & Invarian Roadmap STP

Aturan workspace untuk penulisan konten dan visual platform UPTD KST Solo Technopark.

## 0. Konteks Situasional & Misi Utama Proyek

Platform ini lahir dari sesi pemaparan dokumen PDF kepada **Walikota Surakarta**, di mana Kepala Daerah secara langsung meminta penyusunan peta jalan strategis STP hingga 2030.

### Misi Eksplisit (Apa yang Diminta Walikota)
- STP harus benar-benar **sustain mandiri penuh** tanpa ketergantungan anggaran APBD — bukan sekadar angka target, melainkan kondisi nyata yang diwujudkan melalui inovasi, terobosan model bisnis, dan potensi-potensi baru yang belum pernah dijalankan.

### Misi Tidak Langsung (Indirect Strategic Goal)
- Platform ini berfungsi sebagai **alat advokasi regulasi** untuk mendorong lahirnya kebijakan / regulasi baru yang memperluas cakupan model bisnis STP.
- Regulasi eksisting saat ini dinilai **terlalu sempit** sehingga mengunci potensi pendapatan signifikan dari aset dan layanan STP.
- Tujuan: Walikota mengerti gap regulasi tersebut dan **bersedia menandatangani regulasi baru** (Perwali / SK Walikota) yang membuka ruang model bisnis lebih luas — tanpa menyalahi hukum yang berlaku.

### Prinsip Komunikasi ke Walikota
- Narasi harus **mudah dipahami** oleh Kepala Daerah (bukan bahasa teknis/birokrasi murni).
- Setiap inisiatif wajib menunjukkan **urgensi nyata**: apa yang hilang jika tidak ada regulasi baru.
- Selalu sediakan **"jalan keluar" konkret**: draf regulasi siap tanda tangan, bukan sekadar rekomendasi abstrak.
- Tonjolkan **dampak bagi warga & PAD Kota Surakarta**, bukan hanya dampak bagi STP itu sendiri.

---

1. **Mandat Walikota & Kemandirian Fiskal**:
   - STP ditargetkan mandiri 100% tanpa APBD, mencapai target baseline minimum Rp 50,5 Miliar hingga skala penuh Rp 67,5 Miliar pada 2030 (Rp 28M Baseline 8 Inisiatif + Rp 39,5M Terobosan Agresif 17 Inisiatif = 25 Inisiatif).
   - Menghilangkan potensi defisit operasional Rp 2,4 Miliar melalui penataan model bisnis dan regulasi.

2. **Advokasi Regulasi (3-Pillar Regulatory Justification)**:
   - Setiap berkas di `content/roadmaps/*.md` wajib menjelaskan:
     1. Keterbatasan regulasi lama.
     2. Usulan draf regulasi baru untuk Walikota (Perwali / SK / Adendum PKS).
     3. Payung hukum pengaman kepatuhan audit (Permendagri 79/2018 asas fleksibilitas BLUD).

3. **Metadata Frontmatter**:
   - Wajib menyertakan: `id`, `number`, `title`, `category`, `cluster`, `potential_annual_revenue`, `timeline_stage`, `risk_level`, `regulatory_instrument`, `regulatory_urgency`, `pic`, `target_market`, `kpi_target`, `icon`, `summary`.

4. **Standar Desain UI/UX & Tampilan Visual (Executive Clean White Theme)**:
   - **Tema Warna**: Clean Executive White Base (`#ffffff` & `#f8fafc`) dengan aksen Solo Technopark Royal Blue (`#1e40af`, `#2563eb`), Precision Sky (`#0284c7`), Fiscal Emerald (`#059669`, `#10b981`), Policy Amber (`#d97706`), dan Civic Rose (`#e11d48`).
   - **Kartu & Kontainer**: Putih bersih (`bg-white`) dengan border halus (`border-slate-200/80`), bayangan lembut berlapis (`shadow-sm`, `shadow-md`, `hover:shadow-xl`), dan lencana pastel bertepi tegas (`border border-blue-200 bg-blue-50/80`).
   - **Desktop Fullscreen Fluid**: Menggunakan utility `.app-container` (fluid edge-to-edge dengan responsive dynamic padding `px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24`, proporsional untuk monitor rapat eksekutif).
   - **Mobile Borderless**: Pada layar smartphone (`< 640px`), card inisiatif, tabel matriks komparasi, dan banner wajib borderless / flush ke tepi (`-mx-4 rounded-none border-x-0 border-y border-slate-200`) sehingga memanjakan mata pembaca tanpa margin samping yang menjepit konten.
   - **Tablet Adaptif**: Grid 2 kolom seimbang dengan ruang sentuh yang lega (*ergonomic touch targets*).
   - **Tipografi & Readability Eksekutif**: Menggunakan Inter Variable font, display heading tegas Slate-950 (`text-slate-950 font-black tracking-tight`), serta body text berkontras tinggi Slate-700/Slate-600 (`text-slate-700` dengan `leading-relaxed`) agar nyaman dibaca oleh Walikota dan jajaran pimpinan daerah.

5. **Pilar Portofolio Digital & Skalabilitas Berbasis Perangkat Lunak (Software & AI Scale)**:
   - Selain optimalisasi aset fisik (ruang, gedung, lab, dan venue), roadmap mencakup inisiatif berskala eksponensial (*zero marginal cost of reproduction*):
     - **GovTech Civic SaaS (Inisiatif #19)**: Penugasan STP sebagai pengembang & operator platform SaaS layanan warga terpadu (Solo Civic OS) untuk efisiensi belanja modal IT APBD dan monetisasi API gateway B2B/B2G lintas daerah Solo Raya.
     - **Enterprise AI Agent Exchange (Inisiatif #20)**: Pemanfaatan infrastruktur Sentra AI & Micro Data Center STP sebagai marketplace dan runtime execution environment agen AI industri korporasi regional Solo Raya dengan jaminan kedaulatan data lokal (*local data sovereignty*).

6. **Pilar Smart Hub Berdampak Nyata Sosial & Ekonomi Masyarakat**:
   - Memastikan STP berfungsi sebagai Smart Hub Inovasi yang membawa dampak langsung bagi warga Surakarta:
     - **Inklusivitas Digital & Disabilitas (Inisiatif #21)**: Pelatihan AI data labeling & coding untuk keluarga prasejahtera dan difabel.
     - **Ketahanan Pangan Perkotaan Presisi (Inisiatif #22)**: IoT vertical farming & kultur jaringan penekan inflasi daerah kelurahan.
     - **Sirkular Ekonomi & E-Waste (Inisiatif #23)**: Daur ulang limbah elektronik & baterai EV berwawasan Net-Zero Emission.
     - **Akselerasi HAKI Kriya & Batik (Inisiatif #24)**: Proteksi motif budaya, 3D scanning, dan royalti lisensi desain industri.
     - **HealthTech & Tele-Rehabilitasi Komunitas (Inisiatif #25)**: Fabrikasi suku cadang alat medis presisi dan rujukan tele-fisioterapi warga.

7. **Pilar Keberdampakan Sektor Non-Profit, UMKM & Kemaslahatan Publik (Public Value & SROI BLUD)**:
   - Dalam setiap paparan dan analisis roadmap, STP tidak boleh diposisikan sebagai entitas komersial murni yang mengejar laba semata. Sebagai BLUD Pemerintah Kota Surakarta, keberhasilan fiskal STP wajib bermuara pada peningkatan kemaslahatan sosial-ekonomi masyarakat luas di wilayah Surakarta melalui prinsip:
     - **Targeted Cross-Subsidization (Subsidi Silang Terarah)**: Surplus pendapatan dari inisiatif komersial korporat (R&D Retainer, GPU Cloud, Naming Rights, BGS Shopee) dialokasikan secara afirmatif untuk mendanai program pelayanan publik non-profit.
     - **4 Matriks Penerima Manfaat Utama di Wilayah Surakarta**:
       1. **Masyarakat Luas & Kaum Rentan**: Beasiswa vokasi inklusif 100% gratis bagi keluarga prasejahtera & difabel, program literasi AI kelurahan, tele-rehabilitasi kesehatan komunitas terintegrasi puskesmas, dan edukasi ketahanan pangan pekarangan stunting.
       2. **UMKM & Pengrajin Tradisional**: Pendampingan kurasi mutu & uji lab kemasan gratis, proteksi HAKI motif batik/kriya tanpa biaya di muka, studio siaran live-commerce pro-bono di PLUT, serta fasilitas onboarding e-katalog LKPP.
       3. **Industri Lokal & Bengkel Rakyat**: Open Living Lab & Regulatory Sandbox untuk uji presisi prototipe tanpa beban sewa alat, program efisiensi energi hijau, dan alih teknologi tepat guna.
       4. **Komunitas Kreatif & Pemuda Kota**: Akses ruang co-working gratis, inkubasi startup lokal pra-pendanaan, dan hackathon inovasi solusi perkotaan.
     - **Metrik Social Return on Investment (SROI)**: Mewajibkan pemantauan rasio SROI (ditargetkan minimal 1 : 3,8) guna membuktikan kepada Walikota dan DPRD bahwa setiap rupiah surplus BLUD menghasilkan pengganda ekonomi nyata bagi kesejahteraan warga Surakarta.
