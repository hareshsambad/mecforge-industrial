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
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

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

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#10B981", "#38BDF8"],
        });
      } catch (err) {
        // Confetti is optional
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again or WhatsApp Jeet directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-3xl bg-white border border-emerald-300 p-8 sm:p-10 text-center space-y-6 shadow-soft-card">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-brand-navy font-heading">
            Quotation Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. Jeet and our 
            production engineering team will review your specifications
            {formData.modelCode ? ` for model ${formData.modelCode}` : ""} and send 
            a comprehensive bulk quotation within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono max-w-md mx-auto">
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
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
        >
          <span>Submit Another Enquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-soft-card relative"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
            Request a Bulk Quotation
          </h3>
          <span className="text-xs font-mono text-blue-600 font-semibold">B2B Direct</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Share your drawings, reference piston specs, or required quantities directly with Jeet.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Buyer Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe / Rajesh Patel"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Company Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Atlas Auto Spares Ltd."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Country, Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Country <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. UAE / Germany / USA"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Business Email <span className="text-blue-600">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="buyer@company.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Phone / WhatsApp <span className="text-blue-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 555-019-2834"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Piston Type & Model Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Required Piston Category <span className="text-blue-600">*</span>
          </label>
          <select
            value={formData.pistonType}
            onChange={(e) => setFormData({ ...formData, pistonType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          >
            <option value="Diesel Engine Piston">Diesel Engine Piston</option>
            <option value="Oil Engine Piston">Oil Engine Piston</option>
            <option value="Custom / Drawing-Based">Custom / Drawing-Based Piston</option>
            <option value="Sample-Based Matching">Sample-Based Matching</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Catalogue Model Code (if applicable)
          </label>
          <input
            type="text"
            value={formData.modelCode}
            onChange={(e) => setFormData({ ...formData, modelCode: e.target.value })}
            placeholder="e.g. MF-D101 or Custom"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Engine Make, Diameter, Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Engine Make / Model (Optional)
          </label>
          <input
            type="text"
            value={formData.engineMake}
            onChange={(e) => setFormData({ ...formData, engineMake: e.target.value })}
            placeholder="e.g. Cummins / Perkins / Yanmar"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Piston Diameter (mm) (Optional)
          </label>
          <input
            type="text"
            value={formData.diameterMm}
            onChange={(e) => setFormData({ ...formData, diameterMm: e.target.value })}
            placeholder="e.g. 102.00 mm"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-700 font-medium block">
            Required Quantity <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="e.g. 500 pcs / 2,000 pcs"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Message / Specifications */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono text-slate-700 font-medium block">
          Technical Specifications / Order Details
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Mention alloy requirements, skirt coating preferences, compression height, delivery port, or reference codes..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
        />
      </div>

      {/* File Attachment Upload */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono text-slate-700 font-medium block">
          Attach 2D/3D Drawing or Reference Piston Photo (Optional, Max 10MB)
        </label>
        <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 bg-slate-50/60 text-center transition-colors">
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-1.5">
            <UploadCloud className="w-6 h-6 text-blue-600" />
            <div className="text-xs text-slate-600">
              {file ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <FileCheck className="w-4 h-4" />
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              ) : (
                <span>
                  Click or drag CAD drawing (.dwg, .dxf, .pdf) or reference photos
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Accepted: PDF, PNG, JPG, DWG, DXF up to 10MB
            </span>
          </div>
        </div>
        {fileError && (
          <p className="text-xs text-red-500 mt-1">{fileError}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-btn-blue transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing Specifications...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Quotation Request to Jeet</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-500">
        Strict privacy guaranteed. Non-disclosure agreements honored for CAD models.
      </p>
    </form>
  );
}
