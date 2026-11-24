import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Legacy blues (kept for inner pages that still use them)
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          "blue-light": "#3B82F6",
          "blue-subtle": "#EBF2FC",
          emerald: "#10B981",
          "emerald-hover": "#059669",
          "emerald-subtle": "#E6F4F1",
          navy: "#0F172A",
          slate: "#1E293B",
          body: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          cardTint: "#D5EBE6",
          // Foundry design system
          accent: "var(--color-accent)",
          "accent-hover": "var(--color-accent-hover)",
          "accent-light": "var(--color-accent-light)",
          charcoal: "var(--color-charcoal)",
          "charcoal-deep": "var(--color-charcoal-deep)",
        },
        bg: {
          ice: "#EBF2FC",
          mint: "#E6F4F1",
          soft: "#F8FAFC",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        display: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-script)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        // Legacy alias
        "legacy-heading": ["var(--font-space)", "sans-serif"],
      },
      backgroundImage: {
        "theme-mesh":
          "radial-gradient(at 0% 0%, #EBF2FC 0, transparent 65%), radial-gradient(at 100% 100%, #E6F4F1 0, transparent 65%), radial-gradient(at 50% 50%, #F8FAFC 0, transparent 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
      },
      boxShadow: {
        "soft-card":
          "0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.02)",
        "hover-card":
          "0 20px 35px -8px rgba(15, 23, 42, 0.1), 0 8px 12px -3px rgba(15, 23, 42, 0.04)",
        "btn-emerald": "0 8px 20px -4px rgba(16, 185, 129, 0.3)",
        "btn-blue": "0 8px 20px -4px rgba(37, 99, 235, 0.25)",
        "btn-accent": "0 8px 20px -4px rgba(232, 89, 12, 0.35)",
        "header-scroll": "0 2px 20px -2px rgba(0, 0, 0, 0.08)",
      },
      height: {
        header: "var(--header-height)",
      },
    },
  },
  plugins: [],
};

export default config;
