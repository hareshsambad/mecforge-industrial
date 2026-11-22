import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldCheck,
  Building2,
  Globe2,
  Users2,
  Factory,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Krishna Industries & MECFORGE",
  description:
    "Discover the 18+ year manufacturing journey of Krishna Industries and the modern export brand MECFORGE. Indian aluminium piston manufacturing with in-house casting and machining.",
};

export default function AboutPage() {
  const targetPartners = [
    {
      title: "International Importers",
      desc: "Importers sourcing dependable aluminium pistons from India with reliable container scheduling and competitive export packaging.",
      icon: Globe2,
    },
    {
      title: "Spare-Parts Distributors",
      desc: "Regional and national aftermarket distributors requiring consistent repeat orders, barcode/custom labeling, and verified fitment.",
      icon: Building2,
    },
    {
      title: "Wholesale Parts Buyers",
      desc: "Stockists looking for high-volume diesel and agricultural oil engine pistons directly from the primary casting manufacturer.",
      icon: Users2,
    },
    {
      title: "Engine Rebuilders & Overhaulers",
      desc: "Specialized engine service facilities needing precise standard and oversize piston options for commercial and stationary engines.",
      icon: Factory,
    },
    {
      title: "OEM Engine Manufacturers",
      desc: "Equipment and engine builders seeking dedicated tooling, private-label manufacturing, and NDA-guaranteed CAD drawing execution.",
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-forged-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forged-surface border border-electric/30 text-xs font-mono text-electric">
            <span className="w-2 h-2 rounded-full bg-electric" />
            <span>FOUNDRY & MACHINING ROOTS SINCE 2006</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            18+ Years of Practical Manufacturing Experience in India.
          </h1>
          <p className="text-lg text-aluminium-300 leading-relaxed">
            From our founding as <strong className="text-white">Krishna Industries</strong> to 
            the launch of <strong className="text-electric">MECFORGE</strong>, our journey 
            has been shaped by one fundamental principle: mastering the entire piston lifecycle 
            under our own roof.
          </p>
        </div>

        {/* Story Section: Two-Column Layout with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-aluminium-300 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              The Evolution: From Krishna Industries to MECFORGE
            </h2>
            <p>
              Founded over 18 years ago, <strong>Krishna Industries</strong> began as a 
              ground-level aluminium casting and machining foundry in the heart of Gujarat’s 
              industrial belt. Through persistent investment in steel die tooling, crucible melting, 
              and precision CNC lathes, we established ourselves as a reliable domestic supplier 
              of diesel and agricultural oil engine pistons.
            </p>
            <p>
              As demand grew from overseas buyers seeking transparent Indian manufacturing partners, 
              we introduced <strong>MECFORGE</strong> — our dedicated export and modern B2B brand. 
              MECFORGE combines our practical 18-year foundry floor expertise with modern international 
              procurement standards: rapid CAD turnaround, meticulous metrology reporting, and clear 
              commercial communication.
            </p>
            <div className="p-5 rounded-2xl bg-forged-surface border border-forged-border space-y-2">
              <span className="text-xs font-mono text-electric uppercase tracking-wider block font-semibold">
                Our Core Philosophy
              </span>
              <p className="text-sm text-aluminium-200">
                &ldquo;We don’t over-promise and we don’t cut corners. We evaluate tooling feasibility 
                honestly, produce trial batches carefully, and deliver consistent pistons that 
                keep our customers’ engines running smoothly.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-forged-card border border-forged-border shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/product-family-lineup.jpg"
                  alt="MECFORGE complete aluminium piston range and family lineup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-forged-surface border-t border-forged-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-electric block">
                    FOUNDRY CAPACITY
                  </span>
                  <span className="text-sm font-semibold text-white">
                    18,000–20,000 Pistons / Month
                  </span>
                </div>
                <span className="text-xs text-aluminium-400 font-mono">
                  Origin: India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Grounded Approach: 4 Value Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-electric font-semibold tracking-wider">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl font-bold text-white font-heading">
              Our B2B Partnership Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-forged-surface border border-forged-border space-y-3">
              <div className="p-2.5 rounded-xl bg-forged-card text-electric w-fit border border-white/5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Realistic Evaluation</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Before accepting bulk contracts, our engineers rigorously evaluate CAD drawings 
                or physical samples to guarantee achievable lead times and tight tolerances.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forged-surface border border-forged-border space-y-3">
              <div className="p-2.5 rounded-xl bg-forged-card text-electric w-fit border border-white/5">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">100% In-House Control</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                We control raw ingot melting, gravity casting, CNC turning, pin boring, and 
                skirt coating under single-facility supervision. Zero outsourced uncertainty.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forged-surface border border-forged-border space-y-3">
              <div className="p-2.5 rounded-xl bg-forged-card text-electric w-fit border border-white/5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Long-Term Consistency</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                We retain master dies and machining programs so repeat production runs years 
                later maintain the exact same fit, skirt clearance, and compression geometry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forged-surface border border-forged-border space-y-3">
              <div className="p-2.5 rounded-xl bg-forged-card text-electric w-fit border border-white/5">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Transparent Export</h3>
              <p className="text-xs text-aluminium-300 leading-relaxed">
                Direct factory invoices, FOB/CIF container shipping documentation, custom 
                labelling, and protective export packing tailored for sea and air freight.
              </p>
            </div>
          </div>
        </div>

        {/* Target Partners Grid */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-electric font-semibold tracking-wider">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl font-bold text-white font-heading">
              Built for Global B2B Supply Chains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetPartners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-forged-card border border-forged-border/80 hover:border-electric/30 transition-colors flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-forged-surface text-electric border border-white/5 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white">
                      {partner.title}
                    </h3>
                    <p className="text-xs text-aluminium-300 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Custom Partner CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-electric/20 via-forged-card to-forged-surface border border-electric/40 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">
                  Looking to Partner with Us?
                </h3>
                <p className="text-xs text-aluminium-300 leading-relaxed">
                  Discuss bulk container rates, exclusive territory distribution, 
                  or private-label piston packaging directly with our factory team.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-electric hover:text-white transition-colors mt-4"
              >
                <span>Initiate Partnership Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forged-surface border border-forged-border text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Ready to review your piston tooling requirements?
          </h3>
          <p className="text-sm text-aluminium-300 max-w-xl mx-auto">
            Connect with our technical desk in India today. Share your reference 
            specifications and get a transparent quotation within 24 business hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-glow-blue transition-all"
            >
              <span>Contact Factory Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
