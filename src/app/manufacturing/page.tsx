import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  Factory,
  Layers,
  FileCode2,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  Wrench,
  Ruler,
  PackageCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | 6-Step In-House Production",
  description:
    "Explore MECFORGE's 6-step in-house manufacturing process: raw aluminium sourcing, mold preparation, melting & casting, CNC turning, quality metrology, and export packing.",
};

export default function ManufacturingPage() {
  const steps = [
    {
      step: "01",
      title: "Raw Material Sourcing & Metallurgy Selection",
      subtitle: "Aluminium ingots, bars & virgin alloying elements",
      desc: "High-grade aluminium alloy ingots with controlled silicon (Si), copper (Cu), and magnesium (Mg) ratios are selected based on the engine application. Silicon provides thermal stability and wear resistance; copper enhances high-temperature fatigue strength.",
      image: "/images/process-step1-raw.jpg",
      icon: Layers,
      specs: [
        "Primary aluminium ingots & selected returns",
        "Spectrometric chemical analysis verification",
        "Consistent batch alloy consistency",
      ],
    },
    {
      step: "02",
      title: "Die Tooling & Material Preparation",
      subtitle: "Sorting, cleaning & permanent mold preparation",
      desc: "Raw charge materials are pre-heated and systematically cleaned to prevent hydrogen gas entrapment. Simultaneously, precision permanent steel die tooling is prepared with refractory coatings to control solidification rates and prevent porosity.",
      image: "/images/process-step2-tooling.jpg",
      icon: Wrench,
      specs: [
        "Systematic charge cleaning & preheating",
        "Die pre-heating to optimal casting temperatures",
        "Thermal draft angle verification",
      ],
    },
    {
      step: "03",
      title: "In-House Melting & Gravity Die Casting",
      subtitle: "Controlled melting furnaces & gravity die pouring",
      desc: "Aluminium alloys are melted in heavy-duty crucible furnaces under controlled temperature envelopes. Degassing tablets or inert gas purging eliminates dissolved gases before molten metal is poured into gravity dies for sound metallurgical structure.",
      image: "/images/process-step3-pouring.jpg",
      secondaryImage: "/images/process-step3-furnace.jpg",
      icon: Flame,
      specs: [
        "Controlled melt temperatures (~720°C - 750°C)",
        "Fluxing and degassing to eliminate micro-porosity",
        "Directional solidification in permanent iron/steel dies",
      ],
    },
    {
      step: "04",
      title: "Precision CNC Machining & Skirt Profiling",
      subtitle: "Multi-axis turning, pin boring & ring groove cutting",
      desc: "Cast blanks are heat-treated and transferred to precision CNC lathe stations. Operators machine the combustion bowl crown, cut micro-tolerance compression and oil ring lands, bore the gudgeon pin holes, and turn complex barrel-and-oval skirt profiles.",
      image: "/images/process-step4-cnc.jpg",
      icon: Cpu,
      specs: [
        "CNC crown turning with swirl bowls & valve recesses",
        "High-accuracy ring groove width & axial runout tolerances",
        "Ovality and barrel skirt profile for thermal expansion",
      ],
    },
    {
      step: "05",
      title: "Comprehensive Dimensional Inspection",
      subtitle: "Calibrated micrometers, bore gauges & surface checking",
      desc: "Trained quality inspectors measure skirt gauge diameter, pin bore roundness, ring land flatness, and compression heights using outside micrometers and vernier instruments. Weight balance is checked on gram-accuracy scales.",
      image: "/images/quality-cmm-probe.jpg",
      secondaryImage: "/images/quality-vernier.jpg",
      icon: Ruler,
      specs: [
        "100% outer diameter gauge point verification",
        "Bore gauge pin float checking",
        "Gram-level scale weight matching",
      ],
    },
    {
      step: "06",
      title: "Finishing, Preservation & Export Packing",
      subtitle: "Anti-rust oil, protective sleeves & container cartons",
      desc: "Pistons receive final ultrasonic or solvent wash cleaning, anti-corrosive oil protection, and are packed into individual protective boxes or multi-unit master cartons ready for export container freight or domestic dispatch.",
      image: "/images/process-step6-batch.jpg",
      icon: PackageCheck,
      specs: [
        "VCI anti-corrosion wrapping for sea freight",
        "Individual protective cartons with model code labeling",
        "Palletized and moisture-sealed master export shipping",
      ],
    },
  ];

  return (
    <div className="bg-forged-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forged-surface border border-electric/30 text-xs font-mono text-electric">
            <span className="w-2 h-2 rounded-full bg-electric" />
            <span>COMPLETE IN-HOUSE FOUNDRY & CNC MACHINING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Manufacturing Capabilities
          </h1>
          <p className="text-lg text-aluminium-300 leading-relaxed">
            With 18+ years of practical foundry floor experience under Krishna Industries, 
            MECFORGE operates complete in-house melting, permanent gravity die casting, 
            and CNC machining to deliver pistons built for demanding diesel and oil engines.
          </p>
        </div>

        {/* 6-Step Visual Timeline */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-electric font-semibold tracking-wider">
              STEP-BY-STEP PRODUCTION LINE
            </span>
            <h2 className="text-3xl font-bold text-white font-heading">
              The 6-Step Workflow
            </h2>
            <p className="text-xs sm:text-sm text-aluminium-400">
              Every piston undergoes an unbroken chain of custody from raw ingots to finished packaging.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-forged-card border border-forged-border/80 shadow-card-depth ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black font-mono text-electric px-3 py-1 rounded-lg bg-forged-surface border border-electric/30">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-lg bg-forged-surface text-electric border border-white/5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-aluminium-400 uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white font-heading">
                      {step.title}
                    </h3>

                    <p className="text-sm text-aluminium-300 leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-forged-border">
                      <span className="text-xs font-mono text-electric block font-semibold">
                        Technical Highlights:
                      </span>
                      <ul className="space-y-1.5">
                        {step.specs.map((sp, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-center gap-2 text-xs text-aluminium-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric shrink-0" />
                            <span>{sp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-forged-surface border border-forged-border group shadow-lg">
                      <div className="relative aspect-[16/11] w-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 bg-forged-surface border-t border-forged-border flex items-center justify-between text-xs font-mono text-aluminium-400">
                        <span>Phase {step.step} Operational View</span>
                        <span className="text-electric">In-House</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Manufacturing Options Breakdown */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-electric font-semibold tracking-wider">
              B2B ENGAGEMENT OPTIONS
            </span>
            <h2 className="text-3xl font-bold text-white font-heading">
              Flexible Tooling & Production Modes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-forged-surface border border-forged-border space-y-4">
              <span className="text-2xl font-black font-mono text-electric">01</span>
              <h3 className="text-xl font-bold text-white">Existing Models</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Utilize our pre-configured permanent gravity dies for popular diesel and oil engine models. Zero tooling fee and accelerated lead times.
              </p>
              <div className="pt-2 text-xs font-mono text-aluminium-400">
                Lead Time: <strong>2 – 4 Weeks</strong>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-forged-card to-forged-surface border-2 border-electric/40 space-y-4 shadow-glow-blue/20">
              <span className="text-2xl font-black font-mono text-electric">02</span>
              <h3 className="text-xl font-bold text-white">Drawing-Based</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Provide 2D PDF / DWG prints or 3D models. We engineer custom casting dies, verify compression heights, and cut dedicated CNC toolpaths.
              </p>
              <div className="pt-2 text-xs font-mono text-electric font-semibold">
                Tooling + Trial: <strong>3 – 6 Weeks</strong>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-forged-surface border border-forged-border space-y-4">
              <span className="text-2xl font-black font-mono text-electric">03</span>
              <h3 className="text-xl font-bold text-white">Sample-Based</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Courier reference sample pistons to our factory in India. We perform physical metrology, alloy matching, and reverse-engineer matched patterns.
              </p>
              <div className="pt-2 text-xs font-mono text-aluminium-400">
                Evaluation: <strong>3 – 5 Days</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Capacity Breakdown Table */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-heading">
              Indicative Production Capacity
            </h3>
            <p className="text-xs text-aluminium-400">
              Note: Production figures are indicative and subject to order specifications and tooling complexity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-forged-border bg-forged-card">
            <table className="w-full text-left text-sm text-aluminium-300">
              <thead className="bg-forged-surface text-xs font-mono uppercase text-electric border-b border-forged-border">
                <tr>
                  <th className="px-6 py-4">Production Metric</th>
                  <th className="px-6 py-4">Current Capacity</th>
                  <th className="px-6 py-4">Notes & Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forged-border text-xs sm:text-sm">
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">
                    Monthly Piston Casting & Machining
                  </td>
                  <td className="px-6 py-4 font-mono text-electric">
                    18,000 – 20,000 Pistons / Month
                  </td>
                  <td className="px-6 py-4 text-aluminium-400">
                    Combined across diesel and oil engine lines
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">
                    Average Monthly Sales Dispatch
                  </td>
                  <td className="px-6 py-4 font-mono text-white">
                    5,000+ Pistons / Month
                  </td>
                  <td className="px-6 py-4 text-aluminium-400">
                    Domestic distributors & regional export accounts
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">
                    Piston Diameter Range
                  </td>
                  <td className="px-6 py-4 font-mono text-white">
                    65mm to 150mm
                  </td>
                  <td className="px-6 py-4 text-aluminium-400">
                    Custom tooling supports diameters up to 180mm on request
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">
                    Minimum Order Quantity (MOQ)
                  </td>
                  <td className="px-6 py-4 font-mono text-electric">
                    Flexible / Evaluated per Model
                  </td>
                  <td className="px-6 py-4 text-aluminium-400">
                    Standard models: 100–300 pcs; Custom toolings: 500+ pcs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forged-surface border border-forged-border text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Have a technical drawing or sample ready for review?
          </h3>
          <p className="text-sm text-aluminium-300">
            Submit your CAD file or reference photos to our engineering department 
            for tooling lead time and quote estimation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-glow-blue transition-all"
            >
              <span>Submit Production Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
