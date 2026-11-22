"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, FileCode2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forged-bg border-b border-forged-border/80 pt-8 pb-16 lg:py-20">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Origin & Experience Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-forged-surface border border-electric/30 text-xs font-mono text-electric shadow-glow-blue/20">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="tracking-wider uppercase font-semibold">
                18+ YEARS OF MANUFACTURING EXPERIENCE • INDIA
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-heading">
                Precision in <br />
                <span className="bg-gradient-to-r from-white via-aluminium-200 to-electric bg-clip-text text-transparent">
                  Every Piston.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-aluminium-300 font-medium leading-relaxed max-w-2xl pt-2">
                {siteConfig.subtitle}
              </p>
            </div>

            {/* Introduction Copy */}
            <p className="text-sm sm:text-base text-aluminium-400 leading-relaxed max-w-2xl">
              Backed by <strong className="text-white">{siteConfig.legalEntity}</strong>’s 
              18+ years of foundry casting and CNC machining heritage in India. 
              We partner with international importers, wholesalers, engine rebuilders, 
              and OEM distributors seeking consistent metallurgy, tight dimensional tolerances, 
              and reliable bulk export delivery.
            </p>

            {/* Capability Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-aluminium-300">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>100% In-House Foundry</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-aluminium-300">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>CAD / 2D Drawing-Based</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-aluminium-300">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>Physical Sample Matching</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-electric to-electric-hover rounded-xl shadow-glow-blue hover:from-electric-light hover:to-electric transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Layers className="w-5 h-5" />
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-aluminium-200 bg-forged-surface hover:bg-forged-elevated border border-forged-border hover:border-aluminium-400/40 rounded-xl transition-all duration-300"
              >
                <FileCode2 className="w-5 h-5 text-electric" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Column: Studio Piston Render */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric/30 via-slate-600/20 to-electric/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              {/* Image Container Card */}
              <div className="relative rounded-2xl overflow-hidden bg-forged-card border border-forged-border/90 shadow-2xl">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/hero-piston.jpg"
                    alt="Precision engineered aluminium diesel pistons and connecting rod assembly"
                    fill
                    priority
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forged-bg via-transparent to-transparent opacity-60" />
                </div>

                {/* Engineering HUD overlay badge */}
                <div className="p-4 bg-forged-surface/95 backdrop-blur-md border-t border-forged-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-electric uppercase tracking-wider block">
                      METALLURGY & DIE CASTING
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Gravity Die Cast Aluminium Pistons
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 justify-end">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      In-House CNC
                    </span>
                    <span className="text-[11px] text-aluminium-400">
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
