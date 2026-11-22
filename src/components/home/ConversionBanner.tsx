import Link from "next/link";
import { ArrowRight, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ConversionBanner() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-forged-bg to-[#06080B] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-electric/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-forged-surface via-forged-card to-forged-surface border border-electric/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/30 text-xs font-mono font-semibold text-electric uppercase tracking-wider">
              DIRECT FACTORY PARTNERSHIP
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Looking for a Reliable Piston Manufacturing Partner in India?
            </h2>

            <p className="text-base sm:text-lg text-aluminium-300 leading-relaxed">
              Connect directly with our engineering and production desk. Share your 
              required piston diameter, application, reference sample, or 2D technical drawing. 
              We calculate practical tooling lead times and deliver honest, competitive bulk export quotations.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-aluminium-200">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>Zero Intermediary Markups</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-aluminium-200">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>18k–20k Monthly Capacity</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-aluminium-200">
                <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                <span>Custom CAD & Sample Tooling</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-electric to-electric-hover rounded-xl shadow-glow-blue hover:from-electric-light hover:to-electric transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-5 h-5" />
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 rounded-xl transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Engineering</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
