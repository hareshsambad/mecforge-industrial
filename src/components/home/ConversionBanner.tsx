import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ConversionBanner() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
            Looking for a reliable piston manufacturing partner?
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-brand-accent bg-white hover:bg-gray-100 rounded shadow-lg transition-all duration-300 focus-ring"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white border-2 border-white/80 hover:bg-white/10 rounded transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Jeet</span>
            </a>
          </div>

          {/* Modes line */}
          <p className="text-sm text-white/80">
            Existing models · Drawing-based · Sample-based
          </p>
        </div>
      </div>
    </section>
  );
}
