"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WaveBackground } from "@/components/common/WaveBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background Flowing Curved Contour / Wave Lines */}
      <WaveBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Origin & Experience Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-slate-200/90 text-xs font-mono text-slate-700 shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="tracking-wider uppercase font-semibold">
                18+ YEARS OF MANUFACTURING EXPERIENCE • INDIA
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-brand-navy tracking-tight leading-[1.1] font-heading">
                Precision in <br />
                <span className="text-slate-800">Every Piston.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-slate font-medium leading-relaxed max-w-2xl">
                {siteConfig.subtitle}
              </p>
            </div>

            {/* Introduction Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Backed by <strong className="text-slate-900 font-semibold">{siteConfig.legalEntity}&apos;s</strong>{" "}
              18+ years of foundry casting and CNC machining heritage in India. 
              We partner with international importers, wholesalers, engine rebuilders, 
              and OEM distributors seeking consistent metallurgy, tight dimensional tolerances, 
              and reliable bulk export delivery.
            </p>

            {/* 3 Capability Checkmarks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% In-House Foundry</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>CAD / 2D Drawing-Based</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Physical Sample Matching</span>
              </div>
            </div>

            {/* Dual CTAs (Matching the reference buttons exactly!) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary Green CTA */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-brand-emerald hover:bg-brand-emerald-hover rounded-xl shadow-btn-emerald transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Blue-Bordered CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-blue-700 bg-white/90 hover:bg-blue-50/70 border-2 border-blue-600/90 rounded-xl shadow-xs transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Showcase Card (Exact match to reference image card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="rounded-3xl overflow-hidden bg-white border border-white/80 shadow-2xl shadow-slate-300/50 transition-transform duration-500 hover:scale-[1.01]">
                {/* Photo Container */}
                <div className="relative aspect-[16/11] w-full bg-slate-900">
                  <Image
                    src="/images/hero-piston.jpg"
                    alt="Precision engineered aluminium diesel pistons and connecting rod assembly"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                {/* Cool-Tinted Footer Bar (Matches exact mint/sage-tinted bar from image) */}
                <div className="p-4 sm:p-5 bg-brand-cardTint border-t border-teal-200/40 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-teal-800 uppercase tracking-wider block font-semibold">
                      METALLURGY & DIE CASTING
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                      Gravity Die Cast Aluminium Pistons
                    </span>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-xs font-mono text-slate-800 flex items-center gap-1 justify-end font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                      In-House CNC
                    </span>
                    <span className="text-[11px] text-slate-600 block">
                      Standard & Custom Runs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
