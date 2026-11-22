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
        forged: {
          bg: "#090C10",
          surface: "#11161F",
          card: "#161D29",
          elevated: "#1C2433",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(14, 165, 233, 0.4)",
        },
        electric: {
          DEFAULT: "#0EA5E9",
          hover: "#0284C7",
          dark: "#0369A1",
          light: "#38BDF8",
          glow: "rgba(14, 165, 233, 0.25)",
        },
        aluminium: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "blueprint-grid": "linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)",
        "metallic-gradient": "linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 50%, #94A3B8 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 25px -5px rgba(14, 165, 233, 0.3)",
        "glow-metallic": "0 0 25px -5px rgba(203, 213, 225, 0.15)",
        "card-depth": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
