import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsCatalogueClient } from "@/components/products/ProductsCatalogueClient";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products Catalogue | Diesel & Oil Engine Pistons",
  description:
    "Explore MECFORGE aluminium pistons for diesel and oil engines. Precision gravity die cast, CNC turned with coated skirts and custom CAD drawing tooling.",
};

export default function ProductsPage() {
  return (
    <div className="bg-forged-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-electric font-semibold">
            FACTORY CATALOGUE & CUSTOM TOOLING
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Aluminium Piston Models
          </h1>
          <p className="text-base text-aluminium-300 leading-relaxed">
            All models are produced from laboratory-checked aluminium alloys, 
            heat-treated, and turned to required piston-to-bore clearances. 
            All diameters and compression specs can be adjusted per buyer requirements.
          </p>
        </div>

        {/* Client Catalogue Component */}
        <Suspense
          fallback={
            <div className="py-24 flex items-center justify-center text-electric">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          }
        >
          <ProductsCatalogueClient />
        </Suspense>
      </div>
    </div>
  );
}
