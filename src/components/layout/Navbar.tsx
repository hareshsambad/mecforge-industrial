"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-forged-bg/90 backdrop-blur-md border-b border-forged-border py-3 shadow-card-depth"
            : "bg-forged-bg/70 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="MECFORGE - Return to Homepage"
            >
              <div className="relative h-10 w-44 sm:h-12 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="MECFORGE - Precision Aluminium Pistons"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? "text-electric bg-electric/10 font-semibold"
                        : "text-aluminium-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-electric rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-electric to-electric-hover rounded-lg shadow-glow-blue hover:from-electric-light hover:to-electric transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-forged-bg"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-aluminium-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-electric"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-forged-bg/98 backdrop-blur-xl border-b border-forged-border shadow-2xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-electric bg-electric/10 font-semibold border-l-4 border-electric"
                        : "text-aluminium-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-forged-border flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-electric hover:bg-electric-hover rounded-lg shadow-glow-blue transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request a Custom Quote</span>
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-aluminium-400 py-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>18+ Years Manufacturing • In-House Casting & Machining</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
