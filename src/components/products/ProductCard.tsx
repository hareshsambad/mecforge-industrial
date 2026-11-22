"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowRight, Maximize2, X, Check, FileCheck, Layers } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-2xl bg-forged-card border border-forged-border/80 hover:border-electric/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-card-depth hover:shadow-glow-blue/10">
        {/* Top Product Image Container */}
        <div className="relative aspect-square sm:aspect-[4/3] bg-gradient-to-b from-[#182130] to-forged-surface overflow-hidden flex items-center justify-center p-6">
          {/* Lightbox Trigger Button */}
          <button
            onClick={() => setZoomOpen(true)}
            type="button"
            className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-forged-bg/80 hover:bg-electric text-aluminium-300 hover:text-white border border-white/10 transition-colors shadow-md"
            title="Click to zoom image"
            aria-label={`Zoom image for ${product.name}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-electric/20 text-electric border border-electric/40 backdrop-blur-sm">
                {product.badge}
              </span>
            </div>
          )}

          {/* Product Image */}
          <div
            onClick={() => setZoomOpen(true)}
            className="relative w-full h-full max-w-[280px] max-h-[280px] cursor-pointer transition-transform duration-500 group-hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Card Body & Specs */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Model Code & Category */}
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded bg-forged-surface border border-white/10 font-mono text-xs font-bold text-electric">
                {product.modelCode}
              </span>
              <span className="text-xs text-aluminium-400 font-mono uppercase">
                {product.categoryLabel}
              </span>
            </div>

            {/* Product Name & Application */}
            <div>
              <h3 className="text-xl font-bold text-white font-heading group-hover:text-electric transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-aluminium-300 mt-1 line-clamp-2">
                <strong>Application:</strong> {product.application}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono bg-forged-surface/60 p-3 rounded-xl border border-white/5">
              <div>
                <span className="text-aluminium-400 block">Diameter:</span>
                <span className="text-white font-semibold">Custom / On Spec</span>
              </div>
              <div>
                <span className="text-aluminium-400 block">Process:</span>
                <span className="text-white font-semibold">Die Cast + CNC</span>
              </div>
              <div className="col-span-2 pt-1 border-t border-white/5">
                <span className="text-aluminium-400 block">Crown Profile:</span>
                <span className="text-aluminium-200 truncate block">
                  {product.specs.crownType}
                </span>
              </div>
            </div>
          </div>

          {/* Action Button: Enquire for This Model */}
          <div className="pt-2">
            <Link
              href={`/contact?product=${encodeURIComponent(product.modelCode)}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric to-electric-hover hover:from-electric-light hover:to-electric shadow-glow-blue/50 transition-all duration-300"
            >
              <span>Enquire for This Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detailed view: ${product.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-forged-card rounded-2xl border border-forged-border p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setZoomOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-forged-surface hover:bg-white/10 text-aluminium-300 hover:text-white transition-colors"
              aria-label="Close zoom modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
              {/* Large Image Preview */}
              <div className="relative aspect-square w-full bg-[#1A2230] rounded-xl flex items-center justify-center p-6 border border-white/5">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Extended Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-electric/20 text-electric border border-electric/40 font-mono text-xs font-bold">
                    {product.modelCode}
                  </span>
                  <span className="text-xs font-mono text-aluminium-400">
                    {product.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading">
                  {product.name}
                </h3>
                <p className="text-sm text-aluminium-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs Table */}
                <div className="space-y-2 pt-2 border-t border-forged-border text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-aluminium-400">Material Grade:</span>
                    <span className="text-white text-right">{product.specs.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-aluminium-400">Diameter Range:</span>
                    <span className="text-white text-right">{product.specs.diameterRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-aluminium-400">Production Mode:</span>
                    <span className="text-white text-right">{product.specs.manufacturingMode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-aluminium-400">Skirt Treatment:</span>
                    <span className="text-white text-right">{product.specs.skirtCoating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase text-electric block mb-2">
                    Key Features
                  </span>
                  <ul className="space-y-1.5">
                    {product.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-aluminium-300">
                        <Check className="w-3.5 h-3.5 text-electric shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action */}
                <div className="pt-4">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.modelCode)}`}
                    onClick={() => setZoomOpen(false)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-glow-blue transition-all"
                  >
                    <span>Request Quotation for {product.modelCode}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
