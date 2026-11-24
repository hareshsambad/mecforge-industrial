export interface SiteConfig {
  name: string;
  brandName: string;
  legalEntity: string;
  contactPerson: string;
  tagline: string;
  subtitle: string;
  description: string;
  manufacturingOrigin: string;
  foundedYear: number;
  experienceYears: number;
  stats: {
    experience: string;
    experienceLabel: string;
    monthlyCapacity: string;
    monthlyCapacityUnit: string;
    averageSales: string;
    averageSalesUnit: string;
    inHouseControl: string;
    inHouseLabel: string;
    capacityDisclaimer: string;
  };
  contact: {
    contactPerson: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    address: {
      line1: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
    workingHours: string;
    businessDays: string;
  };
  navLinks: { name: string; href: string; children?: { name: string; href: string }[] }[];
  heroVideo: {
    webm: string;
    mp4: string;
    poster: string;
    mobileWebm?: string;
    mobileMp4?: string;
  };
  manufacturingModes: {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }[];
  qualityChecks: {
    title: string;
    desc: string;
    instrument: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "MECFORGE",
  brandName: "MECFORGE",
  legalEntity: "Krishna Industries",
  contactPerson: "Jeet",
  tagline: "Precision in Every Piston.",
  subtitle:
    "Aluminium Piston Manufacturing from India — Built from the Ground Up for Diesel & Oil Engine Applications.",
  description:
    "Backed by Krishna Industries's 18+ years of foundry casting and CNC machining heritage in India. We partner with international importers, wholesalers, engine rebuilders, and OEM distributors seeking consistent metallurgy, tight dimensional tolerances, and reliable bulk export delivery.",
  manufacturingOrigin: "India",
  foundedYear: 2006,
  experienceYears: 18,
  stats: {
    experience: "18+",
    experienceLabel: "Years of Experience",
    monthlyCapacity: "18,000–20,000",
    monthlyCapacityUnit: "Pistons / Month",
    averageSales: "5,000+",
    averageSalesUnit: "Pistons / Month",
    inHouseControl: "100%",
    inHouseLabel: "In-House Melting, Casting & Machining",
    capacityDisclaimer:
      "Production figures are indicative and subject to order specifications.",
  },
  contact: {
    contactPerson: "Jeet",
    email: "info@mecforge.com",
    phone: "+919978711541",
    phoneDisplay: "+91 99787 11541",
    whatsappNumber: "919978711541",
    whatsappDisplay: "+91 99787 11541",
    whatsappDefaultMessage:
      "Hello Jeet (MECFORGE), I am looking for a reliable piston manufacturing partner in India. I would like to request a quote.",
    address: {
      line1: "GIDC Industrial Area, Metoda / Shapar",
      city: "Rajkot",
      state: "Gujarat",
      country: "India",
      pincode: "360024",
    },
    workingHours: "09:00 AM – 06:30 PM IST",
    businessDays: "Monday – Saturday",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "/products",
      children: [
        { name: "Diesel Engine Pistons", href: "/products?category=diesel" },
        { name: "Oil & Agricultural Pistons", href: "/products?category=oil" },
        { name: "Drawing-Based Pistons", href: "/products?category=custom" },
      ],
    },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Quality", href: "/quality" },
    { name: "Contact & Quote", href: "/contact" },
  ],

  // ── VIDEO CONFIG ─────────────────────────────────────────
  // Change these paths to swap the hero video in one place.
  // Priority: real plant footage > royalty-free stock > poster fallback.
  // Files go in /public/videos/ and /public/images/.
  heroVideo: {
    webm: "/videos/foundry-hero.webm",
    mp4: "/videos/foundry-hero.mp4",
    poster: "/images/foundry-poster.jpg",
    mobileWebm: "/videos/foundry-hero-720p.webm",
    mobileMp4: "/videos/foundry-hero-720p.mp4",
  },

  manufacturingModes: [
    {
      id: "existing-models",
      number: "01",
      title: "Existing Piston Models",
      subtitle: "Standardised Factory Tooling",
      description:
        "Select from our proven catalogue of ready diesel and oil engine piston patterns for fast turnaround and dependable bulk volume replenishment.",
      icon: "Layers",
    },
    {
      id: "drawing-based",
      number: "02",
      title: "Drawing-Based Manufacturing",
      subtitle: "Engineered from 2D / 3D CAD",
      description:
        "Custom development strictly adhering to buyer-provided technical engineering drawings, compression height tolerances, and ring groove profiles.",
      icon: "FileCode2",
    },
    {
      id: "sample-based",
      number: "03",
      title: "Sample-Based Manufacturing",
      subtitle: "Reverse-Engineered from Physical Sample",
      description:
        "Send physical reference pistons to our facility. Our engineering team conducts metrology measurements and develops matched casting patterns.",
      icon: "Cpu",
    },
  ],
  qualityChecks: [
    {
      title: "Outer Diameter & Skirt Ovality",
      desc: "Measured at precise skirt gauge heights using calibrated outside micrometers to guarantee required piston-to-bore running clearance.",
      instrument: "Outside Micrometer & Digital Dial Gauge",
    },
    {
      title: "Gudgeon Pin Bore Alignment",
      desc: "Checked for perpendicularity and bore diameter tolerances to ensure proper pin float and oil lubrication film retention.",
      instrument: "Internal Bore Gauge / Air Plug",
    },
    {
      title: "Ring Groove Width & Axial Runout",
      desc: "High-precision verification of compression and oil ring grooves to prevent ring sticking, blow-by, and excess oil consumption.",
      instrument: "Blade Feeler Gauges & Optical Comparator",
    },
    {
      title: "Compression Height & Overall Length",
      desc: "Crown-to-pin centerline measurement ensuring exact engine compression ratios and clearance volumes are respected.",
      instrument: "Precision Height Gauge with Granite Surface Table",
    },
    {
      title: "Weight Consistency & Surface Finish",
      desc: "Gram-level digital scale inspection to balance multi-cylinder sets and visual crown finish verification.",
      instrument: "High-Precision Digital Metrology Scale",
    },
  ],
};
