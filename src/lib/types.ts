export interface RoadmapFrontmatter {
  id: string;
  number: number;
  title: string;
  category: "Baseline Strategic" | "Aggressive Breakthrough";
  cluster: "Aset & Properti" | "Diklat & Sertifikasi" | "AI & Green Tech" | "MICE & Komersial" | "Kemitraan Global";
  potential_annual_revenue: number;
  target_year: string;
  timeline_stage: string;
  risk_level: "Rendah" | "Sedang" | "Tinggi";
  regulatory_instrument: string;
  regulatory_urgency?: "Sangat Mendesak" | "Menengah" | "Jangka Panjang";
  pic: string;
  target_market: string;
  kpi_target: string;
  icon?: string;
  summary: string;
}

export interface RoadmapItem extends RoadmapFrontmatter {
  slug: string;
  content: string;
}

export interface OverviewDocument {
  slug: string;
  title: string;
  subtitle?: string;
  updated_at: string;
  author: string;
  content: string;
}

export interface ScenarioYearData {
  year: number;
  baseline: number;
  breakthroughAddition: number;
  scenarioA_Konservatif: number;
  scenarioB_Progresif: number;
  scenarioC_Agresif: number;
  belanjaRutin: number;
  surplusProgresif: number;
  setoranPadProgresif: number;
}

export interface HistoricalBudgetData {
  year: number;
  apbd: number;
  blud: number;
  total: number;
  pctApbd: number;
  pctBlud: number;
  note?: string;
}

export interface RegulatoryWave {
  wave: string;
  timeline: string;
  status: "Quick Win (2026)" | "Agenda Prioritas (2027)" | "Konsolidasi (2028)" | "Smart Hub & Inklusi (2027–2028)";
  color: string;
  badgeBg: string;
  title: string;
  description: string;
  instruments: {
    title: string;
    type: "Perwali" | "SK Walikota" | "Surat Edaran Walikota" | "PKS Tripartit" | "Instruksi Walikota";
    targetInitiative: string;
    targetRevenue: number;
    urgency: "Sangat Mendesak" | "Menengah";
    hurdle: string;
    legalShield: string;
  }[];
}
