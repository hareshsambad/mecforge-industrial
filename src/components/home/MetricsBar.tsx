import { siteConfig } from "@/data/siteConfig";
import { Info } from "lucide-react";

export function MetricsBar() {
  const metrics = [
    {
      value: siteConfig.stats.experience,
      label: "Years",
    },
    {
      value: siteConfig.stats.monthlyCapacity,
      label: "Pistons / Month Capacity",
    },
    {
      value: siteConfig.stats.averageSales,
      label: "Avg. Monthly Sales",
    },
    {
      value: siteConfig.stats.inHouseControl,
      label: "In-House",
    },
  ];

  return (
    <section className="relative z-20 bg-brand-charcoal-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-brand-accent"
              >
                {item.value}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-gray-500">
          <Info className="w-3 h-3 shrink-0" />
          <span>{siteConfig.stats.capacityDisclaimer}</span>
        </div>
      </div>
    </section>
  );
}
