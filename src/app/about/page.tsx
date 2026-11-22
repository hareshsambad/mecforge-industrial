import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { WaveBackground } from "@/components/common/WaveBackground";
import {
  ShieldCheck,
  Building2,
  Globe2,
  Users2,
  Factory,
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
    <div className="py-12 lg:py-20 relative overflow-hidden">
      <WaveBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-mono text-blue-600 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>FOUNDRY & MACHINING ROOTS SINCE 2006</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy font-heading tracking-tight leading-tight">
            18+ Years of Practical Manufacturing Experience in India.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From our founding as <strong className="text-slate-900">{siteConfig.legalEntity}</strong> to 
            the launch of <strong className="text-blue-600">MECFORGE</strong>, our journey 
            has been shaped by one fundamental principle: mastering the entire piston lifecycle 
            under our own roof.
          </p>
        </div>

        {/* Story Section: Two-Column Layout with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading">
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
              we introduced <strong>MECFORGE</strong> — our dedicated export and modern B2B brand led by Jeet. 
              MECFORGE combines our practical 18-year foundry floor expertise with modern international 
              procurement standards: rapid CAD turnaround, meticulous metrology reporting, and clear 
              commercial communication.
            </p>
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-2">
              <span className="text-xs font-mono text-blue-700 uppercase tracking-wider block font-semibold">
                Our Core Philosophy
              </span>
              <p className="text-sm text-slate-800 font-medium">
                &ldquo;We don’t over-promise and we don’t cut corners. We evaluate tooling feasibility 
                honestly, produce trial batches carefully, and deliver consistent pistons that 
                keep our customers’ engines running smoothly.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-soft-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/product-family-lineup.jpg"
                  alt="MECFORGE complete aluminium piston range and family lineup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-brand-cardTint border-t border-teal-200/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-teal-800 uppercase block font-semibold">
                    FOUNDRY CAPACITY
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    18,000–20,000 Pistons / Month
                  </span>
                </div>
                <span className="text-xs text-slate-600 font-mono">
                  Origin: India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl font-bold text-brand-navy font-heading">
              Our B2B Partnership Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-soft-card">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 w-fit border border-blue-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Realistic Evaluation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before accepting bulk contracts, our engineers evaluate CAD drawings 
                or physical samples to guarantee achievable lead times and tight tolerances.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-soft-card">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit border border-emerald-100">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">100% In-House Control</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We control raw ingot melting, gravity casting, CNC turning, pin boring, and 
                skirt coating under single-facility supervision. Zero outsourced uncertainty.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-soft-card">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 w-fit border border-blue-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Long-Term Consistency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We retain master dies and machining programs so repeat production runs years 
                later maintain the exact same fit, skirt clearance, and compression geometry.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-soft-card">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit border border-emerald-100">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Transparent Export</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct factory invoices, FOB/CIF container shipping documentation, custom 
                labelling, and protective export packing tailored for sea and air freight.
              </p>
            </div>
          </div>
        </div>

        {/* Target Partners Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl font-bold text-brand-navy font-heading">
              Built for Global B2B Supply Chains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetPartners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 transition-colors flex items-start gap-4 shadow-soft-card"
                >
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-brand-navy">
                      {partner.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Custom Partner CTA Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-emerald-50 border border-blue-200 flex flex-col justify-between shadow-soft-card">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-brand-navy">
                  Looking to Partner with Us?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discuss bulk container rates, exclusive territory distribution, 
                  or private-label piston packaging directly with Jeet.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-4"
              >
                <span>Initiate Partnership Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 text-center max-w-4xl mx-auto space-y-4 shadow-soft-card">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading">
            Ready to review your piston tooling requirements?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Connect with Jeet and our technical desk in India today. Share your reference 
            specifications and get a transparent quotation within 24 business hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-btn-blue transition-all"
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
