import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      title: "Diesel Engine Pistons",
      category: "diesel",
      image: "/images/product-diesel-graphite.jpg",
      description:
        "High-strength aluminium pistons for commercial vehicles, tractors, gen-sets, and automotive diesel engines.",
      viewHref: "/products?category=diesel",
      quoteHref: "/contact?category=diesel",
    },
    {
      title: "Oil & Agricultural Pistons",
      category: "oil",
      image: "/images/product-oil-flattop.jpg",
      description:
        "Rugged, long-lasting pistons for single and multi-cylinder stationary oil engines and farm machinery.",
      viewHref: "/products?category=oil",
      quoteHref: "/contact?category=oil",
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
            CORE PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display uppercase tracking-tight">
            Two Pillars of Precision
          </h2>
        </div>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white border border-slate-200/90 hover:border-brand-accent/40 transition-all duration-300 overflow-hidden group shadow-soft-card hover:shadow-hover-card"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body — compact */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-display uppercase tracking-tight group-hover:text-brand-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {pillar.description}
                </p>

                {/* Two links */}
                <div className="flex items-center gap-6 pt-2">
                  <Link
                    href={pillar.viewHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:underline transition-colors"
                  >
                    <span>View Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={pillar.quoteHref}
                    className="text-xs font-mono text-slate-500 hover:text-brand-accent transition-colors underline underline-offset-4"
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
