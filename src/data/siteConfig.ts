export interface SiteConfig {
  name: string;
  brandName: string;
  legalEntity: string;
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
  navLinks: { name: string; href: string }[];
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
  tagline: "Precision in Every Piston.",
  subtitle:
    "Aluminium Piston Manufacturing from India — Built from the Ground Up for Diesel & Oil Engine Applications.",
  description:
    "MECFORGE is the specialized export and B2B manufacturing brand of Krishna Industries, delivering 18+ years of dedicated aluminium melting, casting, and precision machining for diesel and oil engine pistons across India and global supply chains.",
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
    email: "info@mecforge.com",
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappDefaultMessage:
      "Hello MECFORGE, I am looking for a reliable piston manufacturing partner in India. I would like to request a quote.",
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
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Quality", href: "/quality" },
    { name: "Contact & Quote", href: "/contact" },
  ],
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
