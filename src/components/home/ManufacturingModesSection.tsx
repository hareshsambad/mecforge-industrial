import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, FileCode2, Cpu, CheckCircle } from "lucide-react";

export function ManufacturingModesSection() {
  const modes = [
    {
      num: "01",
      title: "Existing Piston Models",
      tagline: "Ready Tooling & Fast Dispatch",
      desc: "Select from our established library of diesel and oil engine piston patterns. Ideal for wholesale suppliers, export houses, and engine overhaulers seeking proven geometries and quick turnaround.",
      icon: Layers,
      features: [
        "Pre-engineered gravity die patterns",
        "Fast turnaround on repeat bulk orders",
        "Consistent batch-to-batch alloy chemistry",
        "Competitive direct-factory pricing",
      ],
      ctaText: "Browse Factory Catalogue",
      ctaHref: "/products",
    },
    {
      num: "02",
      title: "Drawing-Based Manufacturing",
      tagline: "CAD / 2D / 3D Technical Print Execution",
      desc: "Provide your 2D engineering drawings (PDF, DWG, DXF) or 3D CAD models. Our tooling engineers review geometric tolerances, calculate shrinkage, and build dedicated dies for your brand.",
      icon: FileCode2,
      features: [
        "Manufactured strictly to buyer tolerances",
        "Custom combustion bowl & valve clearances",
        "Compression height & pin bore optimization",
        "Pre-production sample sign-off",
      ],
      ctaText: "Submit Technical Drawings",
      ctaHref: "/contact",
      highlight: true,
      image: "/images/cad-blueprint-glow.png",
    },
    {
      num: "03",
      title: "Sample-Based Manufacturing",
      tagline: "Reverse Engineering from Physical Sample",
      desc: "Courier a physical reference piston (new or used). Our metrology team performs CMM / caliper dimensioning, profile mapping, and metallurgy analysis to produce exact matched tooling.",
      icon: Cpu,
      features: [
        "Metrology dimensioning & skirt profiling",
        "Aluminium alloy composition matching",
        "Tooling pattern development",
        "Ideal for obsolete or proprietary engines",
      ],
      ctaText: "Enquire for Sample Matching",
      ctaHref: "/contact",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-forged-surface border-y border-forged-border relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-electric font-semibold">
            FLEXIBLE B2B MANUFACTURING MODES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Engineered the Way You Need It.
          </h2>
          <p className="text-base text-aluminium-300">
            Whether replenishing high-volume standard models or bringing a new custom engine 
            specification into production, MECFORGE offers three adaptable engagement models.
          </p>
        </div>

        {/* 3 Modes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  mode.highlight
                    ? "bg-gradient-to-b from-forged-card to-forged-surface border-2 border-electric/40 shadow-glow-blue/20"
                    : "bg-forged-card/80 border border-forged-border/80 hover:border-aluminium-400/40"
                }`}
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-electric">
                      {mode.num}
                    </span>
                    <div className="p-3 rounded-xl bg-forged-surface border border-white/5 text-electric">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {mode.title}
                    </h3>
                    <p className="text-xs font-mono text-electric mt-1">
                      {mode.tagline}
                    </p>
                  </div>

                  {/* If drawing-based, show the glowing CAD blueprint! */}
                  {mode.image && (
                    <div className="relative rounded-xl overflow-hidden border border-electric/30 aspect-[16/10] bg-[#0A192F]">
                      <Image
                        src={mode.image}
                        alt="2D CAD Technical Blueprint of Piston"
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-forged-bg/80 text-[10px] font-mono text-electric border border-electric/20">
                        2D CAD Blueprint
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-aluminium-300 leading-relaxed">
                    {mode.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2">
                    {mode.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-aluminium-300"
                      >
                        <CheckCircle className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-8 mt-6 border-t border-forged-border">
                  <Link
                    href={mode.ctaHref}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      mode.highlight
                        ? "bg-electric hover:bg-electric-hover text-white shadow-glow-blue"
                        : "bg-forged-surface hover:bg-forged-elevated text-aluminium-200 border border-forged-border"
                    }`}
                  >
                    <span>{mode.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
