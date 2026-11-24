import Link from "next/link";
import { ArrowRight, Layers, Wrench, Flame, Cpu, Ruler, PackageCheck } from "lucide-react";

export function ProcessTeaserSection() {
  const steps = [
    { step: "01", name: "Raw Material", icon: Layers },
    { step: "02", name: "Die Prep", icon: Wrench },
    { step: "03", name: "Melt & Cast", icon: Flame },
    { step: "04", name: "CNC Machining", icon: Cpu },
    { step: "05", name: "Inspection", icon: Ruler },
    { step: "06", name: "Packing", icon: PackageCheck },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50/80 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              HOW WE MAKE IT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display uppercase tracking-tight">
              6-Step Production Line
            </h2>
          </div>
          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline transition-colors shrink-0"
          >
            <span>Explore Full Production Line</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Steps strip — horizontal scroll on mobile, 6-col grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="flex-shrink-0 w-[140px] sm:w-auto snap-start flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all"
              >
                <span className="text-2xl font-black font-mono text-brand-accent mb-2">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-gray-50 text-gray-500 mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
