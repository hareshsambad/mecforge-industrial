import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  Ruler,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Compass,
  Eye,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & Inspection | Grounded Engineering",
  description:
    "Explore MECFORGE's honest, instrument-backed quality inspection protocol: outside micrometers, vernier calipers, ring groove gauges, and gram-level weight sorting.",
};

export default function QualityPage() {
  const inspectionChecks = [
    {
      num: "01",
      title: "Outer Diameter (OD) & Skirt Ovality",
      instrument: "Calibrated Outside Micrometers (0.01mm resolution)",
      desc: "Measured at specified gauge points along the skirt height. Pistons expand non-uniformly under heat, so controlled ovality and barrel profiling ensure the piston achieves cylindrical geometry under working cylinder temperatures.",
      icon: Ruler,
    },
    {
      num: "02",
      title: "Gudgeon Pin Bore Size & Perpendicularity",
      instrument: "Internal Dial Bore Gauge & Air Gauging",
      desc: "Verified for diameter, roundness, and exact 90-degree alignment to the piston vertical axis. Prevents edge-loading on connecting rod small-end bushes and wrist pin binding.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Ring Groove Width & Axial Runout",
      instrument: "Blade Feeler Gauges & Toolmaker Optical Comparator",
      desc: "Compression and oil ring grooves are checked for root depth, flank parallelism, and side clearance. Prevents micro-welding, carbon packing, and excessive oil consumption.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Compression Height & Crown Topography",
      instrument: "Granite Surface Table & Precision Digital Height Gauge",
      desc: "Crown-to-pin centerline measurement verified to maintain exact engine compression ratios, valve-to-piston clearances, and squish band heights.",
      icon: CheckCircle2,
    },
    {
      num: "05",
      title: "Piston Mass & Weight Balancing",
      instrument: "Gram-Precision Digital Metrology Scales",
      desc: "All pistons in multi-cylinder orders are weighed and categorized into balanced gram sets, minimizing reciprocating vibration and engine bearing wear.",
      icon: Scale,
    },
    {
      num: "06",
      title: "Surface Finish & Visual Defect Inspection",
      instrument: "High-Intensity Optical Inspection & Roughness Gauge",
      desc: "100% visual inspection for cold-shuts, surface inclusions, micro-porosity, burrs, or tooling chatter marks across the crown, skirt, and ring lands.",
      icon: Eye,
    },
  ];

  return (
    <div className="bg-forged-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forged-surface border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>GROUNDED METROLOGY • ZERO FALSE CERTIFICATES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Quality Backed by Physical Measurement.
          </h1>
          <p className="text-lg text-aluminium-300 leading-relaxed">
            In an industry where marketing claims often outpace reality, MECFORGE and 
            Krishna Industries stand on a simple foundation: calibrated measuring 
            instruments, careful machinists, and strict dimensional verification on every batch.
          </p>
        </div>

        {/* Featured Inspection Image & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-forged-card border border-forged-border shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/quality-vernier.jpg"
                  alt="Vernier caliper verifying piston crown and skirt dimensions on technical drawing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-forged-surface border-t border-forged-border flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">
                  Vernier Caliper & Drawing Verification
                </span>
                <span className="text-emerald-400">Physical Inspection</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-aluminium-300 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our Honest Quality Commitment
            </h2>
            <p>
              We do not fabricate unverified laboratory certificates or claim imaginary awards. 
              Instead, our quality guarantee is practical and verifiable:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Dedicated Metrology Tools:</strong> Every CNC workstation is equipped 
                  with calibrated outside micrometers, blade feeler gauges, and bore gauges.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>First-Piece & In-Process Audit:</strong> Machinists inspect the first 
                  machined blank after each tool change, followed by random sampling throughout the run.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Customer-Specified Inspection Sheets:</strong> If your company requires 
                  batch dimensional reports for outer diameter, pin bore, and weight, our team records 
                  and supplies them with your shipment.
                </span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-forged-surface border border-forged-border text-xs text-aluminium-400 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-electric shrink-0" />
              <span>
                Alloy chemical composition and dimensional certificates are provided based 
                on customer agreement and verified test bars.
              </span>
            </div>
          </div>
        </div>

        {/* 6 Inspection Checks Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-electric font-semibold tracking-wider">
              INSPECTION PROTOCOL
            </span>
            <h2 className="text-3xl font-bold text-white font-heading">
              Key Dimensional & Material Checks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionChecks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-forged-card border border-forged-border/80 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        CHECK {item.num}
                      </span>
                      <div className="p-2 rounded-lg bg-forged-surface text-emerald-400 border border-white/5">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading">
                      {item.title}
                    </h3>

                    <p className="text-xs text-aluminium-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-forged-border">
                    <span className="text-[11px] font-mono text-aluminium-400 block">
                      Instrument Used:
                    </span>
                    <span className="text-xs font-mono text-electric font-semibold block mt-0.5">
                      {item.instrument}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two Additional Visual Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-forged-card border border-forged-border overflow-hidden">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/quality-cmm-probe.jpg"
                alt="Ruby metrology probe inspecting piston crown profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-bold text-white font-heading">
                Crown Swirl & Valve Relief Profiling
              </h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Checking direct-injection combustion bowl depths and valve clearances 
                to ensure correct compression ratios across single-cylinder and multi-cylinder engines.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-forged-card border border-forged-border overflow-hidden">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/quality-micrometer.jpg"
                alt="Outside micrometer measuring skirt diameter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-bold text-white font-heading">
                Gauge Point Diameter & Ovality Tolerance
              </h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Measuring skirt ovality at calibrated gauge heights to guarantee 
                the specified clearance in the engine cylinder liner under operational thermal loads.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forged-surface border border-forged-border text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Request sample inspection data for your order
          </h3>
          <p className="text-sm text-aluminium-300">
            Discuss your required tolerance band or quality parameters with our engineers.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-glow-blue transition-all"
            >
              <span>Connect with Quality Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
