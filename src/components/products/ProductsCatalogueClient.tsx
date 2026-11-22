"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { FileCode2, ArrowRight, HelpCircle } from "lucide-react";

export function ProductsCatalogueClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeTab, setActiveTab] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        activeTab === "all" ? true : item.category === activeTab;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.application.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-card">
        {/* Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 scrollbar-none">
          {productCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-btn-blue"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-100/70"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="px-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search model (e.g. MF-D101, diesel)..."
            className="w-full md:w-64 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 transition-colors"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-3 shadow-soft-card">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-brand-navy">No Pistons Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No piston models matched your current filter criteria. You can request 
            a custom drawing or sample-based manufacturing run directly.
          </p>
          <button
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
            className="mt-2 text-xs font-mono text-blue-600 hover:underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Custom Order Callout */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-emerald-50/80 border border-slate-200/90 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft-card">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
            <FileCode2 className="w-4 h-4" />
            <span>CUSTOM MANUFACTURING & TOOLING</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading">
            Don&apos;t see your exact piston model?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We manufacture custom aluminium pistons strictly according to buyer-provided 
            2D/3D CAD drawings or physical reference samples. Send us your engine 
            parameters, piston diameter, and compression height.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/contact?product=Custom%20CAD%20Drawing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-brand-emerald hover:bg-brand-emerald-hover shadow-btn-emerald transition-all"
          >
            <span>Send Drawing or Sample</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
