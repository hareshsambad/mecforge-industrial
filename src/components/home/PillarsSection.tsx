import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      title: "Diesel Engine Pistons",
      category: "diesel",
      badge: "High Compression & Turbocharged",
      image: "/images/product-diesel-graphite.jpg",
      description:
        "High-strength aluminium pistons engineered for commercial vehicles, tractors, gen-sets, and automotive diesel engines requiring maximum fatigue resistance under thermal and combustion loads.",
      features: [
        "Toroidal & re-entrant combustion swirl bowls",
        "Anti-scuffing graphite / moly skirt coating",
        "Reinforced gudgeon pin towers for high firing pressures",
        "Available from ready tooling or engineered to CAD drawings",
      ],
      href: "/products?category=diesel",
    },
    {
      title: "Oil Engine Pistons",
      category: "oil",
      badge: "Agricultural & Heavy Industrial",
      image: "/images/product-oil-flattop.jpg",
      description:
        "Rugged, long-lasting aluminium pistons built specifically for single and multi-cylinder stationary oil engines, agricultural water pump sets, farm machinery, and industrial drives.",
      features: [
        "Solid flat-top crowns resisting sustained thermal loads",
        "Multi-land compression ring configurations",
        "Full cylindrical skirts providing wide bearing support",
        "Precision honed pin bosses with oil lubrication passages",
      ],
      href: "/products?category=oil",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
            CORE MANUFACTURING SPECIALISATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            Two Pillars of Precision Engineering
          </h2>
          <p className="text-base text-slate-600">
            Engineered from virgin and selected aluminium alloys, gravity die-cast, 
            and CNC turned to ensure exceptional thermal conductivity and mechanical strength.
          </p>
        </div>

        {/* 2 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all duration-300 overflow-hidden group shadow-soft-card hover:shadow-hover-card"
            >
              {/* Product Visual Area */}
              <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-50 to-slate-100/60 overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                <div className="relative w-full h-full max-w-xs transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    {pillar.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-navy font-heading group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-2">
                    {pillar.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA & Soft Cool Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>View Specifications & Models</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/contact?category=${pillar.category}`}
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-4"
                  >
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
