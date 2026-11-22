import { siteConfig } from "@/data/siteConfig";
import { Calendar, Factory, TrendingUp, Cpu, Info } from "lucide-react";

export function MetricsBar() {
  const metrics = [
    {
      value: siteConfig.stats.experience,
      label: siteConfig.stats.experienceLabel,
      sub: "Founded in 2006 (Krishna Industries)",
      icon: Calendar,
      accent: "text-electric",
    },
    {
      value: siteConfig.stats.monthlyCapacity,
      label: "Monthly Capacity",
      sub: siteConfig.stats.monthlyCapacityUnit,
      icon: Factory,
      accent: "text-white",
    },
    {
      value: siteConfig.stats.averageSales,
      label: "Average Monthly Sales",
      sub: siteConfig.stats.averageSalesUnit,
      icon: TrendingUp,
      accent: "text-electric",
    },
    {
      value: siteConfig.stats.inHouseControl,
      label: "In-House Manufacturing",
      sub: "Melting, Casting, Turning & Checking",
      icon: Cpu,
      accent: "text-emerald-400",
    },
  ];

  return (
    <section className="bg-forged-surface border-b border-forged-border relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-forged-card/80 border border-forged-border/70 hover:border-electric/30 transition-all duration-300 group shadow-sm hover:shadow-glow-blue/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-aluminium-400">
                    {item.label}
                  </span>
                  <div className="p-2 rounded-lg bg-forged-surface border border-white/5 text-aluminium-400 group-hover:text-electric transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${item.accent}`}
                >
                  {item.value}
                </div>
                <p className="mt-1.5 text-xs text-aluminium-400 font-mono">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Indicative Disclaimer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-aluminium-400 font-mono">
          <Info className="w-3.5 h-3.5 text-electric shrink-0" />
          <span>{siteConfig.stats.capacityDisclaimer}</span>
        </div>
      </div>
    </section>
  );
}
