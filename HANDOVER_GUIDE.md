# MECFORGE Website Handover & Maintenance Guide

Welcome to the **MECFORGE** (Krishna Industries) B2B manufacturing website documentation. This guide details how non-technical and technical team members can easily maintain company contact details, catalogue products, email notifications, and Vercel hosting.

---

## 1. Updating Company Info, Phone, WhatsApp & Stats
All primary company data, factory metrics, contact numbers, and navigation items are centralized in **`src/data/siteConfig.ts`**. No database or paid CMS is required.

### To Change Phone / WhatsApp:
Open `src/data/siteConfig.ts` and locate the `contact` block:
```typescript
contact: {
  email: "your-email@mecforge.com",
  phone: "+919876543210",               // For tel: links
  phoneDisplay: "+91 98765 43210",       // Visual display
  whatsappNumber: "919876543210",       // International format without +
  whatsappDefaultMessage: "Hello MECFORGE, I would like to request a quote...",
  address: {
    line1: "GIDC Industrial Area, Metoda / Shapar",
    city: "Rajkot",
    state: "Gujarat",
    country: "India",
    pincode: "360024"
  },
  workingHours: "09:00 AM – 06:30 PM IST",
  businessDays: "Monday – Saturday"
}
```

### To Update Capacity or Experience Stats:
In the same file, locate `stats`:
```typescript
stats: {
  experience: "18+",
  monthlyCapacity: "18,000–20,000",
  averageSales: "5,000+",
  inHouseControl: "100%"
}
```
Save the file. The changes will automatically update across the Navbar, Home Page metrics counters, Footer, and Contact page.

---

## 2. Adding or Editing Products in the Catalogue
The product catalogue is managed in **`src/data/products.ts`**.

### To Add a New Piston:
1. Copy your product photo to the `public/images/` folder (e.g. `public/images/product-new-model.jpg`).
2. Add a new object entry to the `products` array in `src/data/products.ts`:
```typescript
{
  id: "mf-d105",
  modelCode: "MF-D105",
  name: "Heavy-Duty Marine Diesel Piston",
  category: "diesel", // "diesel" | "oil" | "custom"
  categoryLabel: "Diesel Engine Pistons",
  application: "Marine Auxiliary & Heavy Commercial Engines",
  image: "/images/product-new-model.jpg",
  alt: "MECFORGE MF-D105 Heavy-Duty Marine Diesel Piston",
  badge: "New Model",
  specs: {
    material: "Aluminium Alloy (Piston Grade)",
    diameterRange: "105mm – 140mm",
    manufacturingMode: "Permanent Die Cast + CNC Turned",
    crownType: "Re-entrant Swirl Chamber",
    skirtCoating: "Graphite Skirt Coating",
    pinBoreDiameter: "38.00 mm (+0.005 / -0.000)",
  },
  features: [
    "Coated skirt for cold-scuff prevention",
    "Reinforced pin boss structure",
    "Dual oil scraper drain holes",
  ],
  description: "Designed for demanding marine propulsion and gen-set duty."
}
```
The new product will automatically show in the catalogue, with category filtering, lightbox zoom modal, and auto-filling quotation link!

---

## 3. Setting Up Free Email Notifications (₹0 / Month)
The website includes an internal API endpoint at `/api/enquiry` that captures all customer quotation submissions.

### Option A: Free Web3Forms Email Delivery
1. Visit [Web3Forms](https://web3forms.com/) and enter the email where you want to receive quote enquiries (e.g. `info@mecforge.com`).
2. You will receive a free access key.
3. In your Vercel Project Settings (or local `.env.local`), add:
```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```
All quote requests and CAD drawing specifications will be instantly forwarded to your inbox for free!

---

## 4. Deploying on Vercel with Custom Domain & Free SSL
This website is built with Next.js App Router and is fully optimized for Vercel's free tier.

### Deploying via GitHub:
1. Push code to your GitHub repository:
   `https://github.com/hareshsambad/mecforge-industrial`
2. Log into [vercel.com](https://vercel.com).
3. Click **Add New Project** and select `mecforge-industrial`.
4. Leave all build settings as default (Framework Preset: **Next.js**, Root Directory: `./`).
5. Click **Deploy**. Vercel will build and assign a free `.vercel.app` URL with automated HTTPS/SSL.

### Adding a Custom Domain (e.g. `mecforge.com`):
1. In Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your domain (e.g., `mecforge.com` or `www.mecforge.com`).
3. Update the DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) according to Vercel's instructions:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
4. Vercel automatically provisions and renews free SSL certificates!
