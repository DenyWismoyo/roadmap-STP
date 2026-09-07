import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { OverviewDocument, RoadmapItem } from "./types";

const roadmapsDirectory = path.join(process.cwd(), "content/roadmaps");
const overviewDirectory = path.join(process.cwd(), "content/overview");

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
