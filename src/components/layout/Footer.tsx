import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Clock, ShieldAlert, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070A] border-t border-forged-border text-aluminium-400">
      {/* Upper Footer: Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative h-14 w-52">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="MECFORGE - Precision Aluminium Pistons"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-aluminium-300 leading-relaxed max-w-md">
              {siteConfig.subtitle}
            </p>
            <div className="p-4 rounded-xl bg-forged-surface border border-forged-border/80 text-xs text-aluminium-400 space-y-1">
              <span className="font-semibold text-white uppercase tracking-wider block text-[11px] text-electric">
                Manufacturing Heritage
              </span>
              <p>
                Proprietary B2B and export brand of{" "}
                <strong className="text-aluminium-200">
                  {siteConfig.legalEntity}
                </strong>
                . 18+ years of dedicated aluminium melting, die casting, and CNC
                turning excellence based in India.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-aluminium-400 hover:text-electric transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Product Focus
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=diesel"
                  className="text-aluminium-400 hover:text-electric transition-colors"
                >
                  Diesel Engine Pistons
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=oil"
                  className="text-aluminium-400 hover:text-electric transition-colors"
                >
                  Oil & Agricultural Engine Pistons
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=custom"
                  className="text-aluminium-400 hover:text-electric transition-colors"
                >
                  Drawing-Based Pistons
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturing"
                  className="text-aluminium-400 hover:text-electric transition-colors"
                >
                  Sample-Based Development
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-aluminium-400 hover:text-electric transition-colors"
                >
                  Dimensional Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Factory Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Plant Location
            </h4>
            <ul className="space-y-3 text-sm text-aluminium-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1},{" "}
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state},{" "}
                  {siteConfig.contact.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-electric transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-electric transition-colors font-mono"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-aluminium-400">
                <Clock className="w-3.5 h-3.5 text-aluminium-500 shrink-0" />
                <span>
                  {siteConfig.contact.businessDays} • {siteConfig.contact.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-forged-border/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-aluminium-500">
            <div className="flex items-center gap-2 max-w-3xl">
              <ShieldAlert className="w-4 h-4 text-aluminium-400 shrink-0" />
              <span>
                <strong>B2B Notice:</strong> MECFORGE operates strictly as a B2B
                manufacturer and bulk quote provider. All production metrics,
                diameters, and alloy grades are indicative and validated against
                buyer technical drawings and agreed order specifications.
              </span>
            </div>
            <div className="text-right shrink-0">
              <span>Origin: Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="bg-[#030406] border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-aluminium-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} (
            {siteConfig.legalEntity}). All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link href="/about" className="hover:text-aluminium-300 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/products" className="hover:text-aluminium-300 transition-colors">
              Catalogue
            </Link>
            <span>•</span>
            <Link href="/manufacturing" className="hover:text-aluminium-300 transition-colors">
              Capabilities
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-aluminium-300 transition-colors">
              Request a Quote
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
