import {
  HistoricalBudgetData,
  ScenarioYearData,
  RegulatoryWave,
  PublicImpactSector,
  SROIBreakdown,
} from "./types";

export const HISTORICAL_BUDGET: HistoricalBudgetData[] = [
  { year: 2021, apbd: 6928997378, blud: 3382000000, total: 10310977378, pctApbd: 67.20, pctBlud: 32.80, note: "Subsidi dominan APBD" },
  { year: 2022, apbd: 6129657919, blud: 7354320524, total: 13483978443, pctApbd: 45.00, pctBlud: 55.00, note: "Transisi kemandirian awal" },
  { year: 2023, apbd: 5131166800, blud: 6300500000, total: 11431666800, pctApbd: 44.89, pctBlud: 55.11, note: "Penurunan belanja subsidi APBD" },
  { year: 2024, apbd: 3459334008, blud: 68860580264, total: 72319914272, pctApbd: 4.78, pctBlud: 95.22, note: "Setor PAD Rp 4 Miliar ke Kasda" },
  { year: 2025, apbd: 1483642172, blud: 40473228986, total: 41956871158, pctApbd: 3.54, pctBlud: 96.46, note: "Normalisasi kemitraan migas" },
  { year: 2026, apbd: 103047934, blud: 26518904267, total: 26621952201, pctApbd: 0.39, pctBlud: 99.61, note: "Kemandirian Fiskal Penuh (Pagu Murni)" },
];

export const SCENARIO_DATA: ScenarioYearData[] = [
  {
    year: 2026,
    baseline: 7483816342,
    breakthroughAddition: 3500000000,
    scenarioA_Konservatif: 9933816342,
    scenarioB_Progresif: 10458816342,
    scenarioC_Agresif: 10983816342,
    belanjaRutin: 8081480000,
    surplusProgresif: 2377336342,
    setoranPadProgresif: 475467268,
  },
  {
    year: 2027,
    baseline: 12000000000,
    breakthroughAddition: 8500000000,
    scenarioA_Konservatif: 17950000000,
    scenarioB_Progresif: 19225000000,
    scenarioC_Agresif: 20500000000,
    belanjaRutin: 8081480000,
    surplusProgresif: 11143520000,
    setoranPadProgresif: 2228704000,
  },
  {
    year: 2028,
    baseline: 16500000000,
    breakthroughAddition: 14000000000,
    scenarioA_Konservatif: 26300000000,
    scenarioB_Progresif: 28400000000,
    scenarioC_Agresif: 30500000000,
    belanjaRutin: 8500000000,
    surplusProgresif: 19900000000,
    setoranPadProgresif: 3980000000,
  },
  {
    year: 2029,
    baseline: 21500000000,
    breakthroughAddition: 18500000000,
    scenarioA_Konservatif: 34450000000,
    scenarioB_Progresif: 37225000000,
    scenarioC_Agresif: 40000000000,
    belanjaRutin: 9000000000,
    surplusProgresif: 28225000000,
    setoranPadProgresif: 5645000000,
  },
  {
    year: 2030,
    baseline: 28000000000,
    breakthroughAddition: 22500000000,
    scenarioA_Konservatif: 43750000000,
    scenarioB_Progresif: 47125000000,
    scenarioC_Agresif: 50500000000,
    belanjaRutin: 9500000000,
    surplusProgresif: 37625000000,
    setoranPadProgresif: 7525000000,
  },
];

export const BELANJA_RUTIN_BREAKDOWN = [
  { label: "Gaji & Tunjangan Pegawai", amount: 2800000000, pct: 34.6 },
  { label: "Tagihan Listrik Kawasan", amount: 1620000000, pct: 20.0 },
  { label: "Jasa Keamanan (21 Personel)", amount: 1000000000, pct: 12.4 },
  { label: "Jasa Kebersihan (20 Personel)", amount: 1000000000, pct: 12.4 },
  { label: "Pemeliharaan Gedung Kantor", amount: 400000000, pct: 5.0 },
  { label: "Operasional Lain (Internet, Perjalanan, BPJS)", amount: 1261480000, pct: 15.6 },
];

export const CLUSTERS = [
  {
    id: "all",
    name: "Semua Kluster",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "Aset & Properti",
    name: "Aset & Properti",
    color: "from-amber-500 to-orange-500",
    desc: "Unlocking Gedung Sembrani Shopee, Eks AK-Tekstil, RS Kardiologi, dan Hub PLUT-KUMKM",
  },
  {
    id: "Diklat & Sertifikasi",
    name: "Diklat & Sertifikasi",
    color: "from-emerald-500 to-teal-500",
    desc: "Transformasi model bisnis korporat, Subject Matter Expert, Hub TUK BNSP, dan Inclusive Tech Talent Hub",
  },
  {
    id: "AI & Green Tech",
    name: "AI & Green Tech",
    color: "from-cyan-500 to-blue-500",
    desc: "Solo GovTech Civic SaaS, AI Agent Marketplace, GPU Cloud, Urban Agritech, Circular E-Waste, dan HealthTech",
  },
  {
    id: "MICE & Komersial",
    name: "MICE & Komersial",
    color: "from-purple-500 to-pink-500",
    desc: "Naming rights fasilitas, bundling venue, videotron OOH media, Creative IP Batik Lab, dan Virtual Office",
  },
  {
    id: "Kemitraan Global",
    name: "Kemitraan Global",
    color: "from-indigo-500 to-blue-600",
    desc: "SMK Go Global (BP3MI/KP2MI) dan Marketing Agency Agregator B2B/B2G Nasional",
  },
];

export const REGULATORY_WAVES: RegulatoryWave[] = [
  {
    wave: "Gelombang I (Quick Wins 2026)",
    timeline: "2026 Q3 – Q4",
    status: "Quick Win (2026)",
    color: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    title: "Penyesuaian Nilai Manfaat Aset Eksisting & Regulasi Mandatori Lokal",
    description: "Injeksi potensi pendapatan awal Rp 5,5 Miliar tanpa memerlukan pembahasan Perda baru, cukup diskresi Walikota melalui SK & Surat Edaran.",
    instruments: [
      {
        title: "Adendum PKS BGS & SK Walikota Penyesuaian Nilai Manfaat Gedung Sembrani",
        type: "SK Walikota",
        targetInitiative: "Renegosiasi Gedung Sembrani (Shopee)",
        targetRevenue: 1500000000,
        urgency: "Sangat Mendesak",
        hurdle: "Kontrak BGS lama mengunci kontribusi hanya Rp 110 Jt/thn padahal Shopee memanfaatkan ekosistem kawasan premium STP.",
        legalShield: "Permendagri 79/2018 Pasal 38 (Penyesuaian tarif pemanfaatan aset BLUD) & Permendagri 19/2016 tentang Pedoman Pengelolaan BMD.",
      },
      {
        title: "SK Bersama Walikota Pengelolaan Terpadu Ekosistem PLUT-KUMKM",
        type: "SK Walikota",
        targetInitiative: "Komersialisasi Hub PLUT-KUMKM Ekspor",
        targetRevenue: 1500000000,
        urgency: "Sangat Mendesak",
        hurdle: "Gedung PLUT dikelola dinas dengan model pinjam pakai Rp 0, fasilitas studio siaran dan showroom ekspor belum termonetisasi.",
        legalShield: "Perda Surakarta 6/2023 & Perwali 38/2022 tentang integrasi fasilitas penunjang technopreneurship lintas OPD.",
      },
      {
        title: "Surat Edaran Walikota Standarisasi Sertifikasi Teknis Aparatur & Rekanan Pemda di LSP STP",
        type: "Surat Edaran Walikota",
        targetInitiative: "Sertifikasi Mandatori Tenaga Teknis LSP STP",
        targetRevenue: 2500000000,
        urgency: "Sangat Mendesak",
        hurdle: "Anggaran bimtek OPD dan uji kompetensi kontraktor fisik mengalir ke luar daerah tanpa konsolidasi ke etalase BLUD STP.",
        legalShield: "UU 23/2014 Pasal 374 (Pengembangan SDM Aparatur Daerah) & Perpres 12/2021 (Prioritas Belanja Produk/Layanan Dalam Negeri).",
      },
    ],
  },
  {
    wave: "Gelombang II (Paket Perwali 2027)",
    timeline: "2027 Q1 – Q3",
    status: "Agenda Prioritas (2027)",
    color: "from-blue-500 to-cyan-600",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    title: "Perluasan Model Bisnis Baru & Fleksibilitas Tarif Komersial",
    description: "Penerbitan Peraturan Walikota (Perwali) strategis untuk membuka lini bisnis berdaya ungkit tinggi: Retribusi Kawasan RS, Naming Rights, Retainer Industri, dan Solo GovTech SaaS.",
    instruments: [
      {
        title: "Perwali Penataan & Pengelolaan Kawasan Penunjang Terpadu RS Kardiologi",
        type: "Perwali",
        targetInitiative: "Retribusi Zona Komersial RS Kardiologi",
        targetRevenue: 2000000000,
        urgency: "Sangat Mendesak",
        hurdle: "Status pinjam pakai tanah RS Kemenkes belum mengatur hak STP memungut retribusi komersial non-medis (parkir terpadu, kantin, helipad).",
        legalShield: "Permendagri 79/2018 Pasal 34 (Struktur Tarif Layanan Penunjang BLUD) & MoU Tripartit Kemenkes-Pemkot-STP.",
      },
      {
        title: "Perwali Tata Cara Pemanfaatan Hak Penamaan (Naming Rights) Fasilitas Publik BLUD",
        type: "Perwali",
        targetInitiative: "Monetisasi Hak Penamaan (Naming Rights)",
        targetRevenue: 2500000000,
        urgency: "Sangat Mendesak",
        hurdle: "Belum ada nomenklatur peraturan daerah di Solo Raya untuk mengomersialkan nama gedung publik kepada sponsor BUMN/korporat.",
        legalShield: "Adopsi preseden regulasi Pergub DKI Jakarta (MRT & GBK) & Pasal 39 Permendagri 79/2018 (Pendapatan lain-lain yang sah).",
      },
      {
        title: "Perwali Penugasan STP sebagai Operator GovTech SaaS & Interoperabilitas Layanan Publik",
        type: "Perwali",
        targetInitiative: "Solo GovTech Hub: SaaS Layanan Warga",
        targetRevenue: 3000000000,
        urgency: "Sangat Mendesak",
        hurdle: "Belanja IT puluhan OPD terfragmentasi ke vendor pihak ketiga; belum ada mandat hukum tunggal bagi STP mengoperasikan Civic SaaS terpadu.",
        legalShield: "Permendagri 79/2018 Pasal 34 (Pola Tarif Layanan Jasa Sistem Informasi) & UU 23/2014 tentang Kerja Sama Antar-Daerah.",
      },
      {
        title: "Perwali Tarif Fleksibel Layanan Riset Industri Presisi & Corporate Academy BLUD STP",
        type: "Perwali",
        targetInitiative: "Perubahan Bisnis Model & R&D Retainer",
        targetRevenue: 8500000000,
        urgency: "Menengah",
        hurdle: "Tarif pelatihan lama sangat kaku dan berbasis jam pelajaran BLK, tidak mengakomodir skema multi-year retainer B2B dan presisi mikron.",
        legalShield: "Permendagri 79/2018 Pasal 35 ayat (2) (Penetapan tarif BLUD berbasis unit cost dan daya saing pasar oleh Kepala Daerah).",
      },
      {
        title: "Surat Walikota ke Menperin tentang Sewa/Cost-Sharing Gedung Eks AK-Tekstil",
        type: "SK Walikota",
        targetInitiative: "Monetisasi Gedung Eks AK-Tekstil Kemenperin",
        targetRevenue: 1500000000,
        urgency: "Menengah",
        hurdle: "Status pinjam pakai bebas biaya membebani utilitas kawasan STP tanpa kontribusi PAD.",
        legalShield: "Peraturan Menteri Keuangan No. 115/PMK.06/2020 tentang Pemanfaatan Barang Milik Negara/Daerah.",
      },
    ],
  },
  {
    wave: "Gelombang III (Transformasi Hijau & AI 2027–2028)",
    timeline: "2027 Q4 – 2028 Q4",
    status: "Konsolidasi (2028)",
    color: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    title: "Sentra Energi Hijau, Micro-Data Center, AI Marketplace & Reklame Digital",
    description: "Instruksi Walikota untuk memposisikan Solo Technopark sebagai ikon Net-Zero Emission dan Pusat Kedaulatan Data AI Terapan Jawa Tengah.",
    instruments: [
      {
        title: "Perwali Solo AI Agent Exchange & Regulatory Sandbox Otomasi Industri 4.0",
        type: "Perwali",
        targetInitiative: "Solo AI Exchange: Marketplace Otomasi Korporasi",
        targetRevenue: 4000000000,
        urgency: "Sangat Mendesak",
        hurdle: "Ketiadaan payung hukum tingkat kota untuk menyelenggarakan marketplace digital agen AI terapan dan penyewaan komputasi GPU berlisensi BLUD.",
        legalShield: "Permendagri 79/2018 Pasal 34 & 39 (Kerja sama inovasi teknologi & bagi hasil lisensi) serta Perpres 106/2017 tentang KST.",
      },
      {
        title: "Instruksi Walikota Kawasan Mandiri Energi Bersih & Sentra Ekosistem EV Solo Technopark",
        type: "Instruksi Walikota",
        targetInitiative: "Sentra Energi Hijau: SPKLU & PLTS Atap",
        targetRevenue: 2000000000,
        urgency: "Menengah",
        hurdle: "Beban tagihan listrik Rp 1,6 Miliar/thn menguras kas BLUD; kebutuhan payung hukum skema KSO Zero-Capex PLTS Atap.",
        legalShield: "Permen ESDM No. 26/2021 tentang PLTS Atap & Perpres No. 79/2023 tentang Percepatan Program Kendaraan Bermotor Listrik.",
      },
      {
        title: "Instruksi Walikota / Time-Bound MoU Renegosiasi Sentra AI & Edge Micro-Data Center",
        type: "Instruksi Walikota",
        targetInitiative: "Reaktivasi Sentra AI & Data Center Hub",
        targetRevenue: 3500000000,
        urgency: "Menengah",
        hurdle: "Komitmen MoU mitra swasta sebelumnya tidak ada batas waktu definitif sehingga persil lahan strategis STP menganggur.",
        legalShield: "Klausul terminasi MoU perdata & prinsip efektivitas pemanfaatan aset daerah Permendagri 19/2016.",
      },
      {
        title: "SK Walikota Penetapan Titik Strategis Media Reklame Digital Koridor BLUD STP",
        type: "SK Walikota",
        targetInitiative: "Jaringan Media Reklame Digital & Videotron",
        targetRevenue: 2000000000,
        urgency: "Menengah",
        hurdle: "Sering terjadi tumpang tindih regulasi retribusi reklame ruang kota dengan aset khusus persil tanah BLUD.",
        legalShield: "Kewenangan pengelolaan langsung persil HPL BLUD STP sesuai Perwali 38/2022.",
      },
    ],
  },
  {
    wave: "Gelombang IV (Pilar Smart Hub & Dampak Sosial-Ekonomi 2027–2028)",
    timeline: "2027 Q2 – 2028 Q3",
    status: "Smart Hub & Inklusi (2027–2028)",
    color: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    title: "Pemberdayaan Inklusif, Ketahanan Pangan Urban, Sirkular E-Waste, IP Batik & HealthTech",
    description: "Paket kebijakan afirmatif Kepala Daerah untuk mengoptimalkan peran STP sebagai Smart Hub berdampak langsung bagi masyarakat Solo Raya: penyerapan talenta difabel/prasejahtera, ketahanan pangan perkotaan, daur ulang perangkat digital, monetisasi hak cipta kriya, dan tele-rehabilitasi faskes.",
    instruments: [
      {
        title: "Perwali Ekosistem Solo Inclusive Tech Talent Hub & Kemitraan CSR Multi-Stakeholder",
        type: "Perwali",
        targetInitiative: "Solo Inclusive Tech Talent Hub",
        targetRevenue: 2000000000,
        urgency: "Sangat Mendesak",
        hurdle: "Program CSR industri teknologi di Solo Raya berjalan sporadis tanpa standarisasi kurikulum vokasi inklusif dan sertifikasi BNSP terpadu.",
        legalShield: "Permendagri 79/2018 Pasal 39 & UU 8/2016 tentang Penyandang Disabilitas (kuota penyerapan kerja inklusif).",
      },
      {
        title: "SK Walikota Sinergi Urban Precision Farming STP-Dinas Pertanian-Kelompok Tani",
        type: "SK Walikota",
        targetInitiative: "Solo Urban Agritech & Food Resilience Hub",
        targetRevenue: 1500000000,
        urgency: "Menengah",
        hurdle: "Pemanfaatan rooftop gedung pemda dan lahan pekarangan belum memiliki SOP teknologi precision farming dan skema offtaker terstandar.",
        legalShield: "UU 18/2012 tentang Pangan & Permendagri 79/2018 Pasal 34 (Layanan jasa konsultasi dan instalasi IoT).",
      },
      {
        title: "Surat Edaran Walikota Pengelolaan Terpadu E-Waste Instansi & Sekolah ke BLUD STP",
        type: "Surat Edaran Walikota",
        targetInitiative: "Solo Smart Circular E-Waste & Refurbishment",
        targetRevenue: 2000000000,
        urgency: "Menengah",
        hurdle: "Aset elektronik rusak di instansi pemkot menumpuk di gudang tanpa mekanisme penghapusan aset BMD yang fleksibel untuk didaur ulang/refurbish.",
        legalShield: "Permendagri 19/2016 Pasal 398–405 tentang Pemindahtanganan dan Penghapusan BMD serta Permendagri 79/2018.",
      },
      {
        title: "Perwali Pengelolaan Lisensi IP Digital Batik & Kriya Tradisional Solo Technopark",
        type: "Perwali",
        targetInitiative: "Solo Creative IP & Craft Digitalization Lab",
        targetRevenue: 2000000000,
        urgency: "Menengah",
        hurdle: "Motif batik dan kriya khas Solo rentan plagiasi global; belum ada hub resmi pemda yang mengelola digitalisasi 3D, lisensi HAKI, dan royalti digital.",
        legalShield: "UU 28/2014 tentang Hak Cipta & Permendagri 79/2018 Pasal 39 (Pendapatan royalti atas kekayaan intelektual BLUD).",
      },
      {
        title: "SK Walikota Ekosistem Tele-Rehabilitasi & Komersialisasi Alat Kesehatan Komunitas STP",
        type: "SK Walikota",
        targetInitiative: "Solo HealthTech Hub: Tele-Rehabilitasi & Inovasi Alkes",
        targetRevenue: 2500000000,
        urgency: "Sangat Mendesak",
        hurdle: "Integrasi sistem tele-rehabilitasi komunitas dengan faskes primer/RSUD belum memiliki payung kerja sama dan skema bagi hasil tarif BLUD penunjang.",
        legalShield: "UU 17/2023 tentang Kesehatan & Permendagri 79/2018 Pasal 34–35 (Kerja sama operasional layanan teknologi penunjang kesehatan).",
      },
    ],
  },
];

export function formatRupiah(amount: number, compact = false): string {
  if (compact) {
    if (amount >= 1000000000) {
      const b = amount / 1000000000;
      return `Rp ${b % 1 === 0 ? b : b.toFixed(1)} M`;
    }
    if (amount >= 1000000) {
      const m = amount / 1000000;
      return `Rp ${m % 1 === 0 ? m : m.toFixed(0)} Jt`;
    }
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const PUBLIC_IMPACT_SECTORS: PublicImpactSector[] = [
  {
    id: "warga-rentan",
    title: "Masyarakat Luas & Kaum Rentan",
    badge: "Inklusi & Kesejahteraan",
    icon: "HeartHandshake",
    color: "from-rose-500 to-pink-600",
    targetGroup: "Keluarga Prasejahtera, Penyandang Disabilitas, Ibu Hamil & Lansia Surakarta",
    description:
      "Transformasi teknologi yang memanusiakan warga: memastikan kemajuan AI, digitalisasi, dan kesehatan modern dapat dinikmati oleh seluruh lapisan masyarakat Surakarta tanpa terhalang kendala ekonomi.",
    annualValueEstimate: 38000000000,
    keyMetrics: [
      { label: "Penerima Beasiswa Vokasi Presisi", value: "850 Orang/thn", target2030: "3.500+ Penerima" },
      { label: "Talenta Disabilitas Mandiri AI & IT", value: "300 Difabel/thn", target2030: "1.200+ Diserap Kerja" },
      { label: "Warga Terlayani Tele-Rehabilitasi Medis", value: "4.500 Pasien/thn", target2030: "20.000+ Sesi Gratis" },
      { label: "Keluarga Edukasi Urban Farming Stunting", value: "1.200 KK/thn", target2030: "5.000+ Rumah Tangga" },
    ],
    programs: [
      {
        name: "Solo Inclusive Tech Academy (100% Beasiswa)",
        type: "100% Pro-Bono (Gratis)",
        mechanism: "Pelatihan coding intensif, data labeling AI, dan sertifikasi BNSP khusus bagi anak prasejahtera & difabel sensorik/fisik.",
        civicImpact: "Meningkatkan pendapatan keluarga rentan dari garis kemiskinan menjadi Rp 4,5M - 6M/bulan di industri teknologi.",
        crossSubsidizedBy: "Surplus Pendapatan Solo AI Exchange (#20) & SME Retainer (#2)",
      },
      {
        name: "Tele-Rehabilitasi & Fisioterapi Komunitas Puskesmas",
        type: "100% Pro-Bono (Gratis)",
        mechanism: "Layanan konsultasi tele-fisioterapi dan peminjaman alat bantu ortotik-prostetik buatan lab biomedis STP untuk warga tidak mampu.",
        civicImpact: "Mengurangi biaya terapi mandiri warga hingga Rp 2,5 Juta/bulan per pasien pasca-stroke atau cedera.",
        crossSubsidizedBy: "Retribusi Zona Komersial RS Kardiologi (#11) & Solo HealthTech Hub (#25)",
      },
      {
        name: "Pekarangan Pangan Bergizi Smart Kelurahan",
        type: "Akses Terbuka Publik",
        mechanism: "Instalasi modul micro-greenhouse hidroponik IoT dan bibit kultur jaringan gratis di 54 kelurahan se-Kota Surakarta.",
        civicImpact: "Menurunkan angka prevalensi stunting kelurahan dan menghemat pengeluaran belanja sayur rumah tangga hingga 20%.",
        crossSubsidizedBy: "Solo Urban Agritech Hub (#22) & Sentra Energi Hijau (#15)",
      },
    ],
  },
  {
    id: "umkm-pengrajin",
    title: "UMKM & Pengrajin Tradisional",
    badge: "Ekonomi Kerakyatan & Budaya",
    icon: "Store",
    color: "from-amber-500 to-orange-600",
    targetGroup: "Pelaku Usaha Mikro, Pengrajin Batik, Kriya Logam/Kayu & Kuliner Tradisional Solo",
    description:
      "Perlindungan dan akselerasi daya saing produk lokal: membekali pelaku ekonomi akar rumput dengan fasilitas sertifikasi, pengujian laboratorium, dan etalase digital kelas dunia secara pro-bono.",
    annualValueEstimate: 45000000000,
    keyMetrics: [
      { label: "UMKM Difasilitasi Lab Uji Kemasan & Mutu", value: "1.500 Produk/thn", target2030: "6.000+ Produk Standar" },
      { label: "Motif Batik & Desain Kriya Ber-HAKI", value: "450 Motif/thn", target2030: "2.000+ Hak Cipta Resmi" },
      { label: "UMKM Lolos Kurasi E-Katalog Nasional", value: "350 Usaha/thn", target2030: "1.500+ Rekanan Terverifikasi" },
      { label: "Kenaikan Omzet Rata-rata Pelaku Binaan", value: "+45% per Tahun", target2030: "> 2,5x Lipat Omzet" },
    ],
    programs: [
      {
        name: "Klinik HAKI Pro-Bono & Proteksi Motif Budaya",
        type: "100% Pro-Bono (Gratis)",
        mechanism: "Pendampingan pendaftaran Hak Cipta & Desain Industri motif batik tulis serta kriya khas Solo tanpa biaya registrasi di muka.",
        civicImpact: "Mencegah pembajakan motif asli Surakarta oleh pihak luar serta memberi kepastian nilai royalti bagi perajin sepuh.",
        crossSubsidizedBy: "Solo Creative IP & Craft Digitalization Lab (#24)",
      },
      {
        name: "Fasilitasi Studio Siaran Live-Commerce PLUT STP",
        type: "Akses Terbuka Publik",
        mechanism: "Penyediaan 8 bilik studio siaran live-shopping berkecepatan gigabit lengkap dengan operator kamera & kurator produk.",
        civicImpact: "Meningkatkan omzet harian UMKM mikro kuliner dan fashion hingga 300% melalui pasar marketplace nasional.",
        crossSubsidizedBy: "Komersialisasi Hub PLUT KUMKM (#12) & Marketing Agency STP (#4)",
      },
      {
        name: "Uji Lab Mutu Kemasan Pangan & Pendampingan Sertifikasi Halal",
        type: "Subsidi Silang 70–90%",
        mechanism: "Uji ketahanan kemasan retort pouch, vacuum sealing, dan barcode traceability gratis dengan hanya biaya bahan habis pakai minimum.",
        civicImpact: "Membuat produk oleh-oleh tradisional Solo mampu menembus rak supermarket modern dan ekspor tanpa risiko basi.",
        crossSubsidizedBy: "Komersialisasi E-Catalog BLUD (#8) & R&D As a Service (#17)",
      },
    ],
  },
  {
    id: "industri-kampus",
    title: "Industri Lokal & Bengkel Rakyat",
    badge: "Kemandirian Manufaktur & Riset",
    icon: "Cpu",
    color: "from-cyan-500 to-blue-600",
    targetGroup: "Bengkel Bubut/Las Rakyat, IKM Manufaktur Cor Logam Ceper/Solo, & Peneliti Kampus",
    description:
      "Demokratisasi fasilitas teknologi canggih: membuka akses ke mesin CNC mikron, 3D metal printing, dan lab kalibrasi bagi bengkel rakyat agar naik kelas menjadi rantai pasok industri nasional.",
    annualValueEstimate: 25000000000,
    keyMetrics: [
      { label: "Bengkel Rakyat Mengakses CNC Presisi STP", value: "240 Bengkel/thn", target2030: "1.000+ Bengkel Presisi" },
      { label: "Prototipe Teknologi Riset Terhilirisasi", value: "35 Prototipe/thn", target2030: "150+ Inovasi Pasar" },
      { label: "Tenaga Mekanik Bersertifikat K3 & Presisi", value: "600 Orang/thn", target2030: "2.500+ Teknisi Ahli" },
      { label: "Efisiensi Energi Industri Binaan", value: "22% Penghematan", target2030: "Net-Zero Koridor Solo" },
    ],
    programs: [
      {
        name: "Open Living Lab & Prototyping Sandbox",
        type: "Akses Terbuka Publik",
        mechanism: "Waktu sewa gratis mesin perkakas presisi 5-axis untuk inovator lokal yang sedang mematangkan prototipe alat tepat guna.",
        civicImpact: "Memangkas biaya litbang inovator daerah dari ratusan juta rupiah menjadi hampir nol hingga tahap uji fungsi.",
        crossSubsidizedBy: "Corporate Academy Retainer (#1) & Eks AK-Tekstil Facility (#10)",
      },
      {
        name: "Klinik Efisiensi Energi & Audit Karbon IKM",
        type: "Subsidi Silang 70–90%",
        mechanism: "Bantuan audit kelistrikan dan instalasi solar inverter terjangkau bagi kluster bengkel manufaktur logam.",
        civicImpact: "Menyelamatkan operasional bengkel lokal dari lonjakan tarif dasar listrik dan mengurangi beban jejak karbon kota.",
        crossSubsidizedBy: "Sentra Energi Hijau: SPKLU & PLTS Atap (#15)",
      },
    ],
  },
  {
    id: "komunitas-pemuda",
    title: "Komunitas Kreatif & Pemuda Kota",
    badge: "Ekosistem Inovasi Masa Depan",
    icon: "Rocket",
    color: "from-purple-500 to-indigo-600",
    targetGroup: "Komunitas Kreatif, Developer Muda, Perintis Startup Lokal, Mahasiswa & Pelajar Solo",
    description:
      "Menjadikan Solo Technopark sebagai rumah bersama bagi anak muda berkarya: menyediakan infrastruktur komputasi awan, co-working gratis, dan inkubator inovasi solusi perkotaan.",
    annualValueEstimate: 16000000000,
    keyMetrics: [
      { label: "Aktivasi Co-working Gratis Komunitas", value: "12.000 Kunjungan/thn", target2030: "50.000+ Pemuda Aktif" },
      { label: "Startup Lokal Terinkubasi Pra-Seed", value: "25 Tim/thn", target2030: "100+ Startup Mandiri" },
      { label: "Civic Hackathon Solusi Perkotaan", value: "4 Event/thn", target2030: "20 Aplikasi Layanan Publik" },
      { label: "Komunitas Kreatif Aktif Berjejaring", value: "80 Komunitas/thn", target2030: "250+ Komunitas Kreatif" },
    ],
    programs: [
      {
        name: "Public Civic Co-Working & Maker Space",
        type: "100% Pro-Bono (Gratis)",
        mechanism: "Akses internet gigabit, meja kerja ergonomis, dan lab IoT gratis untuk pelajar, mahasiswa, dan komunitas nirlaba Solo.",
        civicImpact: "Mencegah brain drain talenta muda keluar Solo dan menumbuhkan ekosistem ekonomi digital akar rumput.",
        crossSubsidizedBy: "Virtual Office & Co-Working Hub Komersial (#6) & Naming Rights (#13)",
      },
      {
        name: "Solo Urban Problem-Solving Hackathon",
        type: "100% Pro-Bono (Gratis)",
        mechanism: "Kompetisi tahunan berhadiah pendanaan benih bagi tim pemuda yang merancang solusi sampah, macet, atau ketahanan pangan kota.",
        civicImpact: "Menghasilkan prototipe aplikasi cerdas warga yang langsung diintegrasikan ke dalam ekosistem Solo Civic OS.",
        crossSubsidizedBy: "Solo GovTech Hub (#19) & Videotron Reklame Digital (#18)",
      },
    ],
  },
];

export const SROI_BREAKDOWN: SROIBreakdown[] = [
  {
    component: "Beasiswa & Pelatihan Vokasi Inklusif Difabel / Kaum Rentan",
    surplusInvestment: 8500000000,
    socialValueCreated: 38000000000,
    sroiRatio: 4.47,
    description: "Nilai kenaikan pendapatan seumur hidup penerima beasiswa kerja IT & pengurangan tanggungan bansos kemiskinan Pemkot.",
  },
  {
    component: "Fasilitasi HAKI, Lab Uji Mutu & Live-Commerce UMKM Tradisional",
    surplusInvestment: 11000000000,
    socialValueCreated: 45000000000,
    sroiRatio: 4.09,
    description: "Lonjakan omzet produk batik, kriya, kuliner lokal serta proteksi royalti desain yang terselamatkan dari klaim luar.",
  },
  {
    component: "Open Living Lab, Uji Presisi Mikron & Efisiensi Energi IKM Logam",
    surplusInvestment: 7500000000,
    socialValueCreated: 25000000000,
    sroiRatio: 3.33,
    description: "Penghematan biaya riset prototipe mandiri, peningkatan akurasi suku cadang, dan efisiensi tagihan listrik bengkel.",
  },
  {
    component: "Ruang Kreatif Pemuda, Co-working Gratis & Inkubasi Startup Solusi Kota",
    surplusInvestment: 5500000000,
    socialValueCreated: 16000000000,
    sroiRatio: 2.91,
    description: "Pencegahan brain-drain generasi muda, pembentukan lapangan kerja digital baru, dan lahirnya aplikasi publik.",
  },
];

export const SROI_SUMMARY = {
  totalSurplusInvested: 32500000000,
  totalSocialValueCreated: 124000000000,
  aggregateSroiRatio: 3.82,
  periodTarget: "2026 – 2030",
  basisAudit: "Permendagri No. 79/2018 tentang BLUD Pasal 34 (Pelayanan Publik Berbasis Mutu) & Metodologi SROI Global",
};

