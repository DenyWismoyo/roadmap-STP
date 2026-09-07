---
name: stp-roadmap-architect
description: >-
  Use this skill to author, audit, validate, and simulate roadmap data for UPTD KST Solo Technopark.
  Ensures markdown frontmatter consistency, accurate fiscal aggregation (Rp 50.5B target, baseline vs aggressive breakthroughs),
  and alignment with Solo Technopark BLUD governance and Walikota regulatory enablement guidelines.
---

# STP Roadmap Architect Skill

Prosedur terstandarisasi untuk mengelola dokumen roadmap strategis UPTD KST Solo Technopark dengan penekanan pada advokasi kebijakan regulasi Walikota Surakarta.

## Prosedur Kerja

### 1. Menulis atau Memperbarui File Roadmap (`content/roadmaps/*.md`)
Setiap berkas roadmap baru wajib mematuhi standar frontmatter berikut:

```markdown
---
id: "contoh-inisiatif"
number: 1
title: "Nama Inisiatif"
category: "Baseline Strategic | Aggressive Breakthrough"
cluster: "Aset & Properti | Diklat & Sertifikasi | AI & Green Tech | MICE & Komersial | Kemitraan Global"
potential_annual_revenue: 2500000000
target_year: "2026 - 2030"
timeline_stage: "2026 Q3–Q4 (Quick Win)"
risk_level: "Rendah | Sedang | Tinggi"
regulatory_instrument: "Perwali / SK Walikota / PKS Tripartit"
regulatory_urgency: "Sangat Mendesak | Menengah | Jangka Panjang"
pic: "Divisi Penanggung Jawab"
target_market: "Sasaran Industri / Kemitraan"
kpi_target: "Indikator Kinerja Utama 2030"
icon: "Cpu"
summary: "Ringkasan eksekutif 2-3 kalimat"
---
```

### 2. Standar 3-Pillar Regulatory Justification pada Bab 5
Pastikan Bab 5 memuat:
1. **Status Regulasi Eksisting**: Mengapa aturan lama membatasi cakupan bisnis STP.
2. **Usulan Draf Regulasi Walikota**: Bentuk regulasi definitif yang dimohonkan.
3. **Payung Hukum Pengaman Audit**: Rujukan Permendagri No. 79/2018 dan UU No. 23/2014.

### 3. Menjalankan Audit Integritas Data & Regulasi
Gunakan script audit:

```bash
node .agents/skills/stp-roadmap-architect/scripts/audit_roadmaps.js
```
