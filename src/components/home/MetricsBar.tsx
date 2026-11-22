import { siteConfig } from "@/data/siteConfig";
import { Calendar, Factory, TrendingUp, Cpu, Info } from "lucide-react";

export function MetricsBar() {
  const metrics = [
    {
      value: siteConfig.stats.experience,
      label: siteConfig.stats.experienceLabel,
      sub: "Founded in 2006 (Krishna Industries)",
      icon: Calendar,
      accent: "text-blue-600",
    },
    {
      value: siteConfig.stats.monthlyCapacity,
      label: "Monthly Capacity",
      sub: siteConfig.stats.monthlyCapacityUnit,
      icon: Factory,
      accent: "text-slate-900",
    },
    {
      value: siteConfig.stats.averageSales,
      label: "Average Monthly Sales",
      sub: siteConfig.stats.averageSalesUnit,
      icon: TrendingUp,
      accent: "text-blue-600",
    },
    {
      value: siteConfig.stats.inHouseControl,
      label: "In-House Manufacturing",
      sub: "Melting, Casting, Turning & Checking",
      icon: Cpu,
      accent: "text-emerald-600",
    },
  ];

  return (
    <section className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 hover:border-blue-300 transition-all duration-300 group shadow-soft-card hover:shadow-hover-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    {item.label}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${item.accent}`}
                >
                  {item.value}
                </div>
                <p className="mt-1.5 text-xs text-slate-500 font-mono">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Indicative Disclaimer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-mono">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{siteConfig.stats.capacityDisclaimer}</span>
        </div>
      </div>
    </section>
  );
}
