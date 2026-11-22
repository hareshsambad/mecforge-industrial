import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessTeaserSection() {
  const steps = [
    {
      step: "01",
      name: "Raw Material Sourcing",
      desc: "Carefully selected virgin and recycled aluminium alloy ingots with verified silicon and copper content.",
      image: "/images/process-step1-raw.jpg",
    },
    {
      step: "02",
      name: "Die & Mold Preparation",
      desc: "Permanent steel die tooling designed with optimal thermal draft angles and cooling channels.",
      image: "/images/process-step2-tooling.jpg",
    },
    {
      step: "03",
      name: "Melting & Casting",
      desc: "Crucible furnace melting with inert gas degassing followed by controlled gravity die pouring.",
      image: "/images/process-step3-pouring.jpg",
    },
    {
      step: "04",
      name: "Precision Machining",
      desc: "CNC lathe turning of piston crowns, ring lands, pin bore boring, and skirt ovality turning.",
      image: "/images/process-step4-cnc.jpg",
    },
    {
      step: "05",
      name: "Quality Inspection",
      desc: "Dimensional checks using outside micrometers, bore gauges, height gauges, and weight scales.",
      image: "/images/quality-cmm-probe.jpg",
    },
    {
      step: "06",
      name: "Packing & Dispatch",
      desc: "Anti-rust oil preservation, individual protective wrap, and sturdy export cartons ready for shipping.",
      image: "/images/process-step6-batch.jpg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              IN-HOUSE PRODUCTION CONTROL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
              6-Step Manufacturing Process
            </h2>
            <p className="text-base text-slate-600">
              From raw aluminium ingots to precision finished pistons, every phase is 
              executed under one roof to maintain dimensional accuracy and metallurgical purity.
            </p>
          </div>
          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>Explore Full Production Line</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 overflow-hidden transition-all duration-300 group shadow-soft-card hover:shadow-hover-card flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono font-bold text-blue-600 shadow-xs">
                  STEP {item.step}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-brand-navy font-heading group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-3 border-t border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Quality verified in-house</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
