"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Mail, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDropdownEnter = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  }, []);

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setDropdownOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setDropdownOpen(false);
      } else if (e.key === "ArrowDown" && dropdownOpen) {
        e.preventDefault();
        const firstItem = dropdownRef.current?.querySelector("a");
        firstItem?.focus();
      }
    },
    [dropdownOpen]
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 h-header ${
          scrolled
            ? "bg-white shadow-header-scroll"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-ring rounded-lg"
              aria-label="MECFORGE Homepage"
            >
              <div className="relative h-9 w-44 sm:h-11 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="MECFORGE Precision Aluminium Pistons"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                // Products dropdown
                if (link.children) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                      ref={dropdownRef}
                    >
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1 px-3.5 py-2 text-[16px] font-medium tracking-normal transition-colors rounded-md focus-ring ${
                          isActive
                            ? "text-brand-accent font-semibold"
                            : "text-gray-700 hover:text-brand-accent"
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        onKeyDown={handleDropdownKeyDown}
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown menu */}
                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                          dropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px]">
                          {/* "All Products" link */}
                          <Link
                            href={link.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-accent transition-colors"
                          >
                            All Products
                          </Link>
                          <div className="border-t border-gray-100 my-1" />
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-accent transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-[16px] font-medium tracking-normal transition-colors rounded-md focus-ring ${
                      isActive
                        ? "text-brand-accent font-semibold"
                        : "text-gray-700 hover:text-brand-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-brand-accent hover:bg-brand-accent-hover rounded shadow-btn-accent transition-all duration-300 focus-ring"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile: Quote + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-accent hover:bg-brand-accent-hover rounded shadow-btn-accent transition-colors focus-ring"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Quote</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-gray-700 hover:text-brand-accent hover:bg-gray-100 focus-ring"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer — full-height overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40" style={{ top: "var(--header-height)" }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer panel */}
          <div className="relative h-full w-full bg-white overflow-y-auto">
            <div className="max-w-lg mx-auto px-4 pt-6 pb-8 space-y-2">
              {siteConfig.navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileDropdownOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold transition-colors ${
                          isActive
                            ? "text-brand-accent bg-orange-50"
                            : "text-gray-800 hover:text-brand-accent hover:bg-gray-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                          <Link
                            href={link.href}
                            className="block py-2.5 text-sm font-semibold text-gray-700 hover:text-brand-accent"
                          >
                            All Products
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2.5 text-sm text-gray-600 hover:text-brand-accent"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "text-brand-accent bg-orange-50"
                        : "text-gray-800 hover:text-brand-accent hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold uppercase tracking-wider text-white bg-brand-accent hover:bg-brand-accent-hover rounded shadow-btn-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request a Quote</span>
                </Link>
                <div className="text-center text-xs text-gray-500 py-1 font-mono">
                  Direct Line: {siteConfig.contact.phoneDisplay} (Jeet)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
