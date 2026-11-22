"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import {
  Send,
  UploadCloud,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";
  const prefilledCategory = searchParams.get("category") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    pistonType:
      prefilledCategory === "diesel"
        ? "Diesel Engine Piston"
        : prefilledCategory === "oil"
        ? "Oil Engine Piston"
        : "Diesel Engine Piston",
    modelCode: prefilledProduct,
    engineMake: "",
    diameterMm: "",
    quantity: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync if URL query changes
  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        modelCode: prefilledProduct,
      }));
    }
  }, [prefilledProduct]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Check size <= 10MB
    if (selected.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB limit. Please upload a smaller file.");
      setFile(null);
      return;
    }

    setFileError(null);
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Post to internal API route
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          fileName: file ? file.name : null,
          fileSize: file ? file.size : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quotation request.");
      }

      setSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0EA5E9", "#38BDF8", "#E2E8F0"],
        });
      } catch (err) {
        // Confetti is optional progressive enhancement
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-forged-card border border-emerald-500/40 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-heading">
            Quotation Request Received!
          </h3>
          <p className="text-sm text-aluminium-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our 
            engineering and production team will review your specifications
            {formData.modelCode ? ` for model ${formData.modelCode}` : ""} and send 
            a comprehensive bulk quotation within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-forged-surface border border-forged-border text-xs text-aluminium-400 font-mono max-w-md mx-auto">
          Reference: MECFORGE-{Math.floor(100000 + Math.random() * 900000)} • Origin: India
        </div>

        <button
          onClick={() => {
            setSuccess(false);
            setFormData({
              name: "",
              company: "",
              country: "",
              email: "",
              phone: "",
              pistonType: "Diesel Engine Piston",
              modelCode: "",
              engineMake: "",
              diameterMm: "",
              quantity: "",
              message: "",
            });
            setFile(null);
          }}
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-aluminium-200 bg-forged-surface hover:bg-forged-elevated border border-forged-border transition-colors"
        >
          <span>Submit Another Enquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-forged-card border border-forged-border/90 p-6 sm:p-8 space-y-6 shadow-2xl relative"
    >
      <div className="border-b border-forged-border pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Request a Bulk Quotation
          </h3>
          <span className="text-xs font-mono text-electric">B2B Direct</span>
        </div>
        <p className="text-xs text-aluminium-400 mt-1">
          Share your drawings, reference piston specs, or required quantities.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Buyer Name <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe / Rajesh Patel"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Company Name <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Atlas Auto Spares Ltd."
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Country, Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Country <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. UAE / Germany / USA"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Business Email <span className="text-electric">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="buyer@company.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Phone / WhatsApp <span className="text-electric">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 555-019-2834"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Piston Type & Model Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Required Piston Category <span className="text-electric">*</span>
          </label>
          <select
            value={formData.pistonType}
            onChange={(e) => setFormData({ ...formData, pistonType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm focus:outline-none focus:border-electric transition-colors"
          >
            <option value="Diesel Engine Piston">Diesel Engine Piston</option>
            <option value="Oil Engine Piston">Oil Engine Piston</option>
            <option value="Custom / Drawing-Based">Custom / Drawing-Based Piston</option>
            <option value="Sample-Based Matching">Sample-Based Matching</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Catalogue Model Code (if applicable)
          </label>
          <input
            type="text"
            value={formData.modelCode}
            onChange={(e) => setFormData({ ...formData, modelCode: e.target.value })}
            placeholder="e.g. MF-D101 or Custom"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Engine Make, Diameter, Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Engine Make / Model (Optional)
          </label>
          <input
            type="text"
            value={formData.engineMake}
            onChange={(e) => setFormData({ ...formData, engineMake: e.target.value })}
            placeholder="e.g. Cummins / Perkins / Yanmar"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Piston Diameter (mm) (Optional)
          </label>
          <input
            type="text"
            value={formData.diameterMm}
            onChange={(e) => setFormData({ ...formData, diameterMm: e.target.value })}
            placeholder="e.g. 102.00 mm"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-aluminium-300 block">
            Required Quantity <span className="text-electric">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="e.g. 500 pcs / 2,000 pcs"
            className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      {/* Message / Specifications */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono text-aluminium-300 block">
          Technical Specifications / Order Details
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Mention alloy requirements, skirt coating preferences, compression height, delivery port, or any reference codes..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-forged-surface border border-forged-border text-white text-sm placeholder:text-aluminium-500 focus:outline-none focus:border-electric transition-colors"
        />
      </div>

      {/* File Attachment Upload */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono text-aluminium-300 block">
          Attach 2D/3D Drawing or Reference Piston Photo (Optional, Max 10MB)
        </label>
        <div className="relative border-2 border-dashed border-forged-border hover:border-electric/50 rounded-xl p-4 bg-forged-surface/50 text-center transition-colors">
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-1.5">
            <UploadCloud className="w-6 h-6 text-electric" />
            <div className="text-xs text-aluminium-300">
              {file ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <FileCheck className="w-4 h-4" />
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              ) : (
                <span>
                  Click or drag CAD drawing (.dwg, .dxf, .pdf) or reference photos
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-aluminium-500">
              Accepted: PDF, PNG, JPG, DWG, DXF up to 10MB
            </span>
          </div>
        </div>
        {fileError && (
          <p className="text-xs text-red-400 mt-1">{fileError}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-electric to-electric-hover hover:from-electric-light hover:to-electric shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing Specifications...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Quotation Request</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-aluminium-500">
        Strict privacy guaranteed. We sign NDAs for custom OEM CAD drawings.
      </p>
    </form>
  );
}
