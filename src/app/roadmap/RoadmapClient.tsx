"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  ArrowUpDown,
  X,
} from "lucide-react";
import { RoadmapItem } from "@/lib/types";
import { CLUSTERS, formatRupiah } from "@/lib/data";
import RoadmapCard from "@/components/RoadmapCard";

interface Props {
  initialRoadmaps: RoadmapItem[];
}

export default function RoadmapClient({ initialRoadmaps }: Props) {
  const searchParams = useSearchParams();
  const initialClusterParam = searchParams.get("cluster") || "all";
  const initialCategoryParam = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCluster, setSelectedCluster] = useState(initialClusterParam);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryParam);
  const [selectedRisk, setSelectedRisk] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"number" | "revenue_desc" | "revenue_asc">("number");

  const filteredRoadmaps = useMemo(() => {
    return initialRoadmaps
      .filter((r) => {
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = r.title.toLowerCase().includes(q);
          const matchSummary = r.summary.toLowerCase().includes(q);
          const matchPic = r.pic.toLowerCase().includes(q);
          const matchCluster = r.cluster.toLowerCase().includes(q);
          if (!matchTitle && !matchSummary && !matchPic && !matchCluster) {
            return false;
          }
        }

        // Cluster filter
        if (selectedCluster !== "all" && r.cluster !== selectedCluster) {
          return false;
        }

        // Category filter
        if (selectedCategory !== "all") {
          if (
            selectedCategory === "aggressive" &&
            !r.category.toLowerCase().includes("aggressive")
          ) {
            return false;
          }
          if (
            selectedCategory === "baseline" &&
            !r.category.toLowerCase().includes("baseline")
          ) {
            return false;
          }
        }

        // Risk filter
        if (selectedRisk !== "all" && r.risk_level !== selectedRisk) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "revenue_desc") {
          return b.potential_annual_revenue - a.potential_annual_revenue;
        }
        if (sortBy === "revenue_asc") {
          return a.potential_annual_revenue - b.potential_annual_revenue;
        }
        return a.number - b.number;
      });
  }, [initialRoadmaps, searchQuery, selectedCluster, selectedCategory, selectedRisk, sortBy]);

  const totalFilteredRevenue = filteredRoadmaps.reduce(
    (sum, r) => sum + r.potential_annual_revenue,
    0
  );

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCluster("all");
    setSelectedCategory("all");
    setSelectedRisk("all");
    setSortBy("number");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCluster !== "all" ||
    selectedCategory !== "all" ||
    selectedRisk !== "all";

  return (
    <div className="space-y-6">
      {/* Search & Main Filter Controls Bar */}
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-6 bg-slate-900/80 backdrop-blur-2xl border-y sm:border-x border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama inisiatif, mitra, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/10 rounded-2xl pl-11 pr-10 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:bg-slate-950 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Semua ({initialRoadmaps.length})
            </button>
            <button
              onClick={() => setSelectedCategory("aggressive")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "aggressive"
                  ? "bg-amber-500 text-slate-950 font-black shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Terobosan ({initialRoadmaps.filter((r) => r.category.toLowerCase().includes("aggressive")).length})
            </button>
            <button
              onClick={() => setSelectedCategory("baseline")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "baseline"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Baseline ({initialRoadmaps.filter((r) => r.category.toLowerCase().includes("baseline")).length})
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-950/80 px-3.5 py-2 rounded-2xl border border-white/10 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="number" className="bg-slate-900 text-white">Urutan Nomor (#1 s/d #{initialRoadmaps.length})</option>
              <option value="revenue_desc" className="bg-slate-900 text-white">Potensi Tertinggi</option>
              <option value="revenue_asc" className="bg-slate-900 text-white">Potensi Terendah</option>
            </select>
          </div>
        </div>

        {/* Cluster Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> Kluster:
          </span>
          {CLUSTERS.map((c) => {
            const isSelected = selectedCluster === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCluster(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                    : "bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-white/5"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-2">
        <div className="text-sm text-slate-300">
          Menampilkan <span className="font-bold text-white">{filteredRoadmaps.length}</span> dari {initialRoadmaps.length} inisiatif roadmap
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="ml-3 text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              Reset Filter
            </button>
          )}
        </div>

        <div className="p-2.5 px-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center gap-3">
          <div className="text-xs text-slate-400">Total Potensi Terpilih:</div>
          <div className="text-base font-black text-emerald-400 font-mono tracking-tight">
            {formatRupiah(totalFilteredRevenue)}
          </div>
        </div>
      </div>

      {/* Roadmaps Grid */}
      {filteredRoadmaps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoadmaps.map((item, idx) => (
            <RoadmapCard key={item.id} roadmap={item} index={idx} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900/80 rounded-3xl p-12 text-center border border-white/10 shadow-lg space-y-3">
          <p className="text-slate-400 text-sm">Tidak ada inisiatif yang cocok dengan kriteria pencarian.</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
}
