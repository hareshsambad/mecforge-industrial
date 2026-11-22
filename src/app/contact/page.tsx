import { Suspense } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { WaveBackground } from "@/components/common/WaveBackground";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  FileCheck,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Request a Quote | Direct B2B Piston Supplier",
  description:
    "Request a bulk quotation for aluminium diesel or oil engine pistons. Connect directly with Jeet at MECFORGE (Krishna Industries) manufacturing office in India.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  const quoteChecklist = [
    "Target engine make & model (if standard replacement)",
    "Piston outer diameter (OD) in mm & compression height",
    "Estimated order quantity (e.g., 500 pcs, 2,000 pcs, container)",
    "Preferred manufacturing mode: Existing design, CAD print, or physical sample",
    "Any skirt coating needs (Graphite / Moly / Uncoated)",
    "Preferred delivery incoterm (FOB Mundra / CIF / Ex-Factory)",
  ];

  return (
    <div className="py-12 lg:py-20 relative overflow-hidden">
      <WaveBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
            DIRECT FACTORY QUOTATION & ENQUIRIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            Contact & Request a Quote
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Get in touch with Jeet and our production engineering desk in India. 
            We provide fast, transparent tooling evaluations and direct bulk manufacturing quotations.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Contact & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-navy font-heading">
                Factory & Direct Contact Desk
              </h3>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-card space-y-4">
                {/* Contact Person */}
                <div className="flex items-start gap-3.5 pb-3 border-b border-slate-100">
                  <User className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 block">
                      Direct Contact Lead
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {siteConfig.contactPerson} ({siteConfig.legalEntity})
                    </p>
                    <p className="text-xs text-slate-500">
                      Engineering & Export Desk Lead
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono uppercase text-slate-500 block">
                      Plant Location
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      {siteConfig.legalEntity} (MECFORGE Plant)
                    </p>
                    <p className="text-xs text-slate-600">
                      {siteConfig.contact.address.line1},{" "}
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode},{" "}
                      {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 block">
                      Direct Call (Jeet)
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-bold text-blue-600 font-mono hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 block">
                      Business Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 block">
                      Operating Hours
                    </span>
                    <p className="text-xs text-slate-600">
                      {siteConfig.contact.businessDays} • {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 p-4 rounded-2xl text-sm font-semibold text-white bg-brand-emerald hover:bg-brand-emerald-hover shadow-btn-emerald transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Chat with Jeet ({siteConfig.contact.phoneDisplay})</span>
              </a>
            </div>

            {/* What to Include for Fast Quote Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-card space-y-4">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-brand-navy font-heading">
                  What to Include for a Fast Quote
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                To receive a formal quotation and accurate tooling assessment within 24 hours, 
                please include as many details as possible:
              </p>
              <ul className="space-y-2.5">
                {quoteChecklist.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-1.5 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-Disclosure Agreements (NDA) honored for proprietary CAD models.</span>
              </div>
            </div>
          </div>

          {/* Right Column: QuoteForm */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              }
            >
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
