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

4. **Standar Desain UI/UX & Tampilan Visual (Futuristic Civic Intelligence)**:
   - **Tema Warna**: Dark Slate / Deep Navy Base (`#030712`, `#0a1128`, `#0f172a`) dengan glassmorphism (`backdrop-filter: blur(16px–24px)`), aksen neon cyan (`#06b6d4`), blue (`#3b82f6`), emerald (`#10b981`), dan gold/amber (`#f59e0b`).
   - **Desktop Fullscreen Fluid**: Menggunakan utility `.app-container` (fluid edge-to-edge dengan responsive dynamic padding `px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24`, tidak terkurung oleh batas statis kaku).
   - **Mobile Borderless**: Pada layar smartphone (`< 640px`), card inisiatif, tabel matriks komparasi, dan banner wajib borderless / flush ke tepi (`-mx-4 rounded-none border-x-0`) sehingga memanjakan mata pembaca tanpa margin samping yang menjepit konten.
   - **Tipografi & Readability Eksekutif**: Menggunakan Inter Variable font, display heading tegas (`text-white font-black tracking-tight`), serta body text berkontras tinggi (`text-slate-200` s/d `text-slate-300`) dengan line-height lega agar nyaman dibaca oleh Walikota dan pejabat eksekutif baik di layar proyektor rapat maupun smartphone.
   - **Micro-Animations & Luminous Glow**: Hover glow beam, smooth card elevation (`translate-y`), pulse glow pada metrik utama, dan animasi selebrasi capaian target finansial.

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
