import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { OverviewDocument, RoadmapItem, PublicImpactDocItem } from "./types";

const roadmapsDirectory = path.join(process.cwd(), "content/roadmaps");
const overviewDirectory = path.join(process.cwd(), "content/overview");
const publicImpactDirectory = path.join(process.cwd(), "content/dampak-publik");

export function getAllRoadmaps(): RoadmapItem[] {
  if (!fs.existsSync(roadmapsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(roadmapsDirectory).filter((f) => f.endsWith(".md"));
  const allRoadmaps = fileNames.map((fileName) => {
    const fullPath = path.join(roadmapsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.id || fileName.replace(/\.md$/, ""),
      id: data.id || fileName.replace(/\.md$/, ""),
      number: Number(data.number) || 0,
      title: data.title || "Untitled Roadmap",
      category: data.category || "Baseline Strategic",
      cluster: data.cluster || "Aset & Properti",
      potential_annual_revenue: Number(data.potential_annual_revenue) || 0,
      target_year: data.target_year || "2026 - 2030",
      timeline_stage: data.timeline_stage || "",
      risk_level: data.risk_level || "Sedang",
      regulatory_instrument: data.regulatory_instrument || "",
      pic: data.pic || "",
      target_market: data.target_market || "",
      kpi_target: data.kpi_target || "",
      icon: data.icon || "Briefcase",
      summary: data.summary || "",
      content,
    } as RoadmapItem;
  });

  return allRoadmaps.sort((a, b) => a.number - b.number);
}

export function getRoadmapBySlug(slug: string): RoadmapItem | null {
  const all = getAllRoadmaps();
  const found = all.find((r) => r.slug === slug || r.id === slug);
  return found || null;
}

export function getOverviewDocument(slug: string): OverviewDocument | null {
  if (!fs.existsSync(overviewDirectory)) {
    return null;
  }

  const filePath = path.join(overviewDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    subtitle: data.subtitle,
    updated_at: data.updated_at || "2026-09-07",
    author: data.author || "UPTD KST Solo Technopark",
    content,
  };
}

export function getAllPublicImpactDocs(): PublicImpactDocItem[] {
  if (!fs.existsSync(publicImpactDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(publicImpactDirectory).filter((f) => f.endsWith(".md"));
  const docs = fileNames.map((fileName) => {
    const fullPath = path.join(publicImpactDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.id || fileName.replace(/\.md$/, ""),
      id: data.id || fileName.replace(/\.md$/, ""),
      number: Number(data.number) || 0,
      title: data.title || "Dokumen Kebijakan Dampak Publik",
      sector: data.sector || "Umum",
      badge: data.badge || "",
      annual_social_value: Number(data.annual_social_value) || 0,
      beneficiaries_count: data.beneficiaries_count || "",
      sroi_ratio: Number(data.sroi_ratio) || 0,
      cross_subsidized_by: data.cross_subsidized_by || "",
      legal_basis: data.legal_basis || "",
      pic: data.pic || "",
      target_group: data.target_group || "",
      summary: data.summary || "",
      content,
    } as PublicImpactDocItem;
  });

  return docs.sort((a, b) => a.number - b.number);
}

export function getPublicImpactDocBySlug(slug: string): PublicImpactDocItem | null {
  const all = getAllPublicImpactDocs();
  const found = all.find((d) => d.slug === slug || d.id === slug);
  return found || null;
}

