import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function QualitySpotlightSection() {
  return (
    <section className="py-20 lg:py-28 bg-forged-surface border-y border-forged-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text & Inspection Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forged-bg border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="uppercase tracking-wider font-semibold">
                DIMENSIONAL METROLOGY & RIGOR
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
                Verified with Precision Measuring Instruments.
              </h2>
              <p className="text-base text-aluminium-300 leading-relaxed">
                We believe in strict, grounded manufacturing honesty. Rather than claiming 
                unsubstantiated certificates, our reputation is built on physical micrometers, 
                calibrated vernier calipers, precision bore gauges, and digital scales verifying 
                every production batch.
              </p>
            </div>

            {/* Quality Checks List */}
            <div className="space-y-3.5 pt-2">
              {siteConfig.qualityChecks.slice(0, 4).map((chk, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-forged-card/80 border border-forged-border/80 flex items-start gap-3.5 hover:border-electric/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-forged-surface border border-white/5 text-electric shrink-0 mt-0.5">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">
                        {chk.title}
                      </h4>
                      <span className="text-[11px] font-mono text-electric hidden sm:inline-block">
                        {chk.instrument}
                      </span>
                    </div>
                    <p className="text-xs text-aluminium-300 leading-relaxed">
                      {chk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-glow-blue transition-all"
              >
                <span>Read Full Quality Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Images Composite */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top Primary Image: Vernier Caliper on Blueprint */}
            <div className="relative rounded-2xl overflow-hidden bg-forged-card border border-forged-border/90 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/quality-vernier.jpg"
                  alt="Vernier caliper inspecting aluminium piston on technical drawing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forged-bg/90 via-transparent to-transparent" />
              </div>
              <div className="p-4 bg-forged-surface border-t border-forged-border">
                <span className="text-[11px] font-mono text-electric uppercase tracking-wider block">
                  PHYSICAL INSPECTION
                </span>
                <p className="text-sm font-semibold text-white">
                  Vernier Caliper & Blueprint Geometric Verification
                </p>
              </div>
            </div>

            {/* Bottom Row: 2 Complementary Metrology Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden bg-forged-card border border-forged-border group aspect-[4/3]">
                <Image
                  src="/images/quality-cmm-probe.jpg"
                  alt="CMM probe inspection on piston crown"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-mono text-white font-medium">
                    Crown Profile Check
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-forged-card border border-forged-border group aspect-[4/3]">
                <Image
                  src="/images/quality-micrometer.jpg"
                  alt="Outside micrometer measuring piston diameter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-mono text-white font-medium">
                    Skirt Diameter Micrometer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
