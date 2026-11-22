export interface Product {
  id: string;
  modelCode: string;
  name: string;
  category: "diesel" | "oil" | "custom";
  categoryLabel: string;
  application: string;
  image: string;
  alt: string;
  badge?: string;
  specs: {
    material: string;
    diameterRange: string;
    manufacturingMode: string;
    crownType: string;
    skirtCoating: string;
    pinBoreDiameter: string;
  };
  features: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "mf-d101",
    modelCode: "MF-D101",
    name: "Coated-Skirt Heavy Diesel Piston",
    category: "diesel",
    categoryLabel: "Diesel Engine Pistons",
    application: "Commercial Diesel Vehicles, Tractors & Heavy Machinery",
    image: "/images/product-diesel-graphite.jpg",
    alt: "MECFORGE MF-D101 Heavy Duty Diesel Piston with Graphite Skirt Coating",
    badge: "Popular Export Model",
    specs: {
      material: "High-Grade Aluminium Alloy (Cast & Machined)",
      diameterRange: "Custom / As per Drawing (80mm – 135mm)",
      manufacturingMode: "Permanent Die Cast + CNC Turned",
      crownType: "Deep Re-entrant Combustion Chamber",
      skirtCoating: "Screen-Printed Graphite Anti-Friction Layer",
      pinBoreDiameter: "Precision Finished as per Pin Tolerance",
    },
    features: [
      "Anti-scuffing graphite coated skirt for cold-start protection",
      "Optimized thermal expansion clearance profile",
      "Reinforced gudgeon pin towers for high cylinder pressures",
      "Triple ring land configuration with oil drainage slots",
    ],
    description:
      "Engineered for high-torque commercial diesel engine applications. Features an anti-friction skirt coating to minimize cylinder wall scuffing during initial run-in and high-load thermal expansion phases.",
  },
  {
    id: "mf-d102",
    modelCode: "MF-D102",
    name: "Direct-Injection Multi-Relief Diesel Piston",
    category: "diesel",
    categoryLabel: "Diesel Engine Pistons",
    application: "Turbocharged Diesel Engines & Light Commercial Transports",
    image: "/images/product-diesel-multiview.jpg",
    alt: "MECFORGE MF-D102 Direct-Injection Multi-Relief Diesel Piston",
    badge: "High Precision",
    specs: {
      material: "Heat-Treated Aluminium Alloy",
      diameterRange: "Custom / As per Drawing (75mm – 120mm)",
      manufacturingMode: "Die Cast + Multi-Axis CNC Turning",
      crownType: "Toroidal Swirl Bowl with 4-Valve Clearances",
      skirtCoating: "Graphite Skirt Pads with Polished Lands",
      pinBoreDiameter: "Custom / Engineered to Pin Tolerance",
    },
    features: [
      "Precision fly-cut valve relief pockets on crown",
      "Precision turned toroidal combustion bowl for efficient air-fuel swirl",
      "Lightweight skirt pocket geometry reducing reciprocating mass",
      "Oil cooling gallery support (as per drawing spec)",
    ],
    description:
      "A modern direct-injection diesel piston designed for turbocharged applications. The crown features precision-machined valve pockets and an aerodynamic central swirl bowl for complete combustion.",
  },
  {
    id: "mf-d103",
    modelCode: "MF-D103",
    name: "Conical Swirl Bowl Diesel Piston",
    category: "diesel",
    categoryLabel: "Diesel Engine Pistons",
    application: "Industrial Diesel Generators & Agricultural Equipment",
    image: "/images/product-diesel-conical.jpg",
    alt: "MECFORGE MF-D103 Conical Swirl Bowl Diesel Piston",
    specs: {
      material: "High-Silicon Aluminium Alloy",
      diameterRange: "Custom / As per Drawing (85mm – 140mm)",
      manufacturingMode: "Permanent Mold Cast & CNC Finished",
      crownType: "Central Conical Direct-Injection Bowl",
      skirtCoating: "Available as Uncoated or Coated Skirt",
      pinBoreDiameter: "Bore Ground / Air-Gauged Verification",
    },
    features: [
      "Central conical bowl designed for uniform flame propagation",
      "Thick crown section for superior thermal absorption",
      "Sturdy skirt wall thickness suitable for continuous gen-set duty",
      "High dimensional repeatability across volume batches",
    ],
    description:
      "Designed specifically for continuous-duty diesel generating sets and agricultural prime movers. The heavy crown section resists thermal fatigue during long hours of uninterrupted operation.",
  },
  {
    id: "mf-d104",
    modelCode: "MF-D104",
    name: "Top-Down Crown-Dished Diesel Piston",
    category: "diesel",
    categoryLabel: "Diesel Engine Pistons",
    application: "Medium & Heavy-Duty Prime Movers & Compressors",
    image: "/images/product-diesel-crown.jpg",
    alt: "MECFORGE MF-D104 Direct-Injection Swirl Diesel Piston",
    specs: {
      material: "Aluminium Alloy (Piston Grade)",
      diameterRange: "Custom / As per Drawing (90mm – 150mm)",
      manufacturingMode: "In-House Gravity Die Cast + CNC",
      crownType: "Precision Dished Swirl Cavity",
      skirtCoating: "Anti-Friction Moly / Graphite Option",
      pinBoreDiameter: "Custom / Micro-Finished",
    },
    features: [
      "Deep concentric crown bowl turned to tight micro-inch finish",
      "Heavy-duty internal ribs for maximum mechanical rigidity",
      "Full barrel and taper skirt profile for optimal oil film wedge",
      "Precision oil ring scraper drain holes",
    ],
    description:
      "A robust industrial diesel piston offering consistent thermal expansion characteristics and dependable compression sealing under arduous operating environments.",
  },
  {
    id: "mf-o201",
    modelCode: "MF-O201",
    name: "Flat-Top Agricultural Oil Engine Piston",
    category: "oil",
    categoryLabel: "Oil Engine Pistons",
    application: "Slow-Speed Agricultural Pump Sets & Irrigation Engines",
    image: "/images/product-oil-flattop.jpg",
    alt: "MECFORGE MF-O201 Flat-Top Agricultural Oil Engine Piston",
    badge: "Agricultural Proven",
    specs: {
      material: "Cast Aluminium Alloy",
      diameterRange: "Custom / As per Drawing (65mm – 115mm)",
      manufacturingMode: "Gravity Die Cast & Lathe Turned",
      crownType: "Flat Solid Crown",
      skirtCoating: "Natural Turned Aluminium Surface",
      pinBoreDiameter: "Honed Gudgeon Pin Bore",
    },
    features: [
      "Solid flat-top crown designed for agricultural engine heads",
      "Wide compression ring grooves accommodating classic ring packs",
      "Full cylindrical skirt providing broad bearing area against cylinder liner",
      "Dual cross-drilled pin boss lubrication ports",
    ],
    description:
      "Engineered for high longevity in slow-speed single-cylinder stationary oil engines commonly deployed for agricultural irrigation, farm implements, and remote pump stations.",
  },
  {
    id: "mf-o202",
    modelCode: "MF-O202",
    name: "Multi-Land Industrial Oil Engine Piston",
    category: "oil",
    categoryLabel: "Oil Engine Pistons",
    application: "Stationary Oil Engines, Marine Auxiliaries & Industrial Drives",
    image: "/images/product-diesel-industrial.jpg",
    alt: "MECFORGE MF-O202 Multi-Land Industrial Oil Engine Piston",
    specs: {
      material: "Low-Expansion Aluminium Alloy",
      diameterRange: "Custom / As per Drawing (70mm – 130mm)",
      manufacturingMode: "Permanent Die Cast + Precision Turned",
      crownType: "Stepped Crown with Multiple Compression Lands",
      skirtCoating: "Standard or Phosphated Treatment Available",
      pinBoreDiameter: "Custom / Honed",
    },
    features: [
      "Multiple compression ring lands for maximum compression seal",
      "Sturdy skirt construction designed for prolonged operational life",
      "Balanced mass distribution across cylinder sets",
      "Strict dimensional tolerance adhering to OEM fitment requirements",
    ],
    description:
      "A heavy-duty piston solution for stationary engine builders requiring sustained power output with low blow-by and dependable ring sealing.",
  },
  {
    id: "mf-c301",
    modelCode: "MF-C301",
    name: "Custom Drawing / Sample-Based Piston",
    category: "custom",
    categoryLabel: "Custom / OEM",
    application: "Custom Machinery, Obsolete Engine Rebuilds & OEM Export Runs",
    image: "/images/cad-blueprint-glow.png",
    alt: "MECFORGE MF-C301 Custom Engineered Drawing-Based Aluminium Piston",
    badge: "Custom Tooling Available",
    specs: {
      material: "Aluminium Alloy Selected as per Application Needs",
      diameterRange: "Manufactured Exactly to Buyer CAD Drawing / Sample",
      manufacturingMode: "Pattern Tooling Development + Casting + CNC",
      crownType: "Custom (Flat, Dished, Domed, Bowl or Valve-Relieved)",
      skirtCoating: "Optional as per Buyer Specification",
      pinBoreDiameter: "Custom Honed to Exact Tolerances",
    },
    features: [
      "Pattern and die tooling manufactured to buyer's 2D/3D CAD files",
      "Reverse engineering from physical sample pistons",
      "Pre-production sample verification and dimensional sign-off",
      "Dedicated batch production runs tailored for export distributors",
    ],
    description:
      "Our core B2B capability: send us your 2D engineering drawing (DWG, DXF, PDF) or courier a physical sample piston. We evaluate the tooling, produce prototypes for your approval, and ramp to bulk production.",
  },
];

export const productCategories = [
  { id: "all", label: "All Pistons" },
  { id: "diesel", label: "Diesel Engine Pistons" },
  { id: "oil", label: "Oil Engine Pistons" },
  { id: "custom", label: "Custom / OEM" },
] as const;
