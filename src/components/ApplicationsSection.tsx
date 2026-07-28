import { useState } from "react";
import { Grid3X3, Search } from "lucide-react";
import type { AppItem } from "../types";
import { applications } from "../data";
import { ApplicationCard } from "./ApplicationCard";

export function ApplicationsSection({
  onSelectApp,
  onDownload,
}: {
  onSelectApp: (app: AppItem) => void;
  onDownload?: (label?: string) => void;
}) {
  const [filter, setFilter] = useState("အားလုံး");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "အားလုံး",
    ...new Set(applications.map((a) => a.category)),
  ];

  const filtered = applications.filter((a) => {
    const matchesCategory = filter === "အားလုံး" || a.category === filter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      a.name.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="applications"
      className="relative w-full flex-1 flex flex-col overflow-x-clip min-h-0"
    >
      {/* Solid soft slate gradient - NO opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50" />

      {/* Soft decorative orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex-1 flex flex-col">
        {/* ===== APPLICATIONS PART ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-10 w-full flex-1 md:mb-10 mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-[10px] sm:text-xs font-medium mb-2 sm:mb-3 shadow-sm">
              <Grid3X3 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>အထူးအပလီကေးရှင်းများ</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              သင့်စီးပွားရေးအတွက် အခမဲ့ ဆော့ဖ်ဝဲလ်များ
            </h2>
          </div>

          {/* Search input */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ရှာဖွေရန်…"
                className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-shadow"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-5">
            {filtered.map((app, idx) => (
              <ApplicationCard
                key={app.id}
                app={app}
                onClick={onSelectApp}
                onDownload={onDownload}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
