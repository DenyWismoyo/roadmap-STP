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
      <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-3xl p-5 sm:p-6 bg-white border-y sm:border-x sm:border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari nama inisiatif, mitra, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            )}
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semua ({initialRoadmaps.length})
            </button>
            <button
              onClick={() => setSelectedCategory("aggressive")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "aggressive"
                  ? "bg-amber-500 text-white font-black shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Terobosan ({initialRoadmaps.filter((r) => r.category.toLowerCase().includes("aggressive")).length})
            </button>
            <button
              onClick={() => setSelectedCategory("baseline")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "baseline"
                  ? "bg-blue-600 text-white shadow-sm font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Baseline ({initialRoadmaps.filter((r) => r.category.toLowerCase().includes("baseline")).length})
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-2 rounded-2xl border border-slate-200 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-slate-600" />
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="number" className="bg-white text-slate-900">Urutan Nomor (#1 s/d #{initialRoadmaps.length})</option>
              <option value="revenue_desc" className="bg-white text-slate-900">Potensi Tertinggi</option>
              <option value="revenue_asc" className="bg-white text-slate-900">Potensi Terendah</option>
            </select>
          </div>
        </div>

        {/* Cluster Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600" /> Kluster:
          </span>
          {CLUSTERS.map((c) => {
            const isSelected = selectedCluster === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCluster(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
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
        <div className="text-sm text-slate-600">
          Menampilkan <span className="font-bold text-slate-900">{filteredRoadmaps.length}</span> dari {initialRoadmaps.length} inisiatif roadmap
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="ml-3 text-xs text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              Reset Filter
            </button>
          )}
        </div>

        <div className="p-2.5 px-4 rounded-xl bg-white border border-emerald-200 shadow-sm flex items-center gap-3">
          <div className="text-xs text-slate-500">Total Potensi Terpilih:</div>
          <div className="text-base font-black text-emerald-700 font-mono tracking-tight">
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
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
          <p className="text-slate-600 text-sm">Tidak ada inisiatif yang cocok dengan kriteria pencarian.</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold hover:bg-blue-100"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
}
