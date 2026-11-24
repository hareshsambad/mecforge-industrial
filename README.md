# MECFORGE Industrial Website

Official B2B website for **MECFORGE** (Krishna Industries, Rajkot, Gujarat, India) — precision gravity die-cast aluminium pistons for diesel and oil engines.

## Tech Stack
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 3 with custom CSS Variables design tokens
- **Typography:** Barlow Condensed (Headings), Inter (Body), Playfair Display (Tagline Script), JetBrains Mono (Specs)
- **Deployment:** Vercel

---

## Foundry Hero Video Configuration

The home page features a heavy-industry cinematic hero section. Video paths are centralized in **one single constant** inside `src/data/siteConfig.ts`:

```typescript
heroVideo: {
  webm: "/videos/foundry-hero.webm",
  mp4: "/videos/foundry-hero.mp4",
  poster: "/images/foundry-poster.jpg",
  mobileWebm: "/videos/foundry-hero-720p.webm",
  mobileMp4: "/videos/foundry-hero-720p.mp4",
}
```

### Video Source Priorities
1. **Priority 1 (Recommended):** Jeet's real factory floor footage (landscape, 10–20s of crucible furnace, molten aluminium pouring, permanent gravity die casting, CNC lathe turning).
2. **Priority 2:** Royalty-free, commercial-use stock footage of foundry / die casting (Pexels / Pixabay / Coverr - Creative Commons Zero / CC0).
3. **Fallback:** High-resolution foundry poster image (`/public/images/foundry-poster.jpg`) with a smooth Ken Burns slow zoom animation, accessible pause/play toggle, and zero layout shift.

### Recommended Encoding Specs
- **Desktop (1080p):** 1920x1080, H.264 MP4 (`yuv420p`, CRF ~22-24) + VP9/AV1 WebM, no audio track, 8–12s seamless loop, target file size <= 4 MB.
- **Mobile (720p):** 1280x720, target file size <= 1.5 MB.
- Save files to `/public/videos/` and poster image to `/public/images/foundry-poster.jpg`.

---

## Brand & Design System

- **Primary Accent:** Molten Red-Orange (`#E8590C`, hover `#D14E0A`, subtle `#FFF4EE`)
- **Foundry Dark Surfaces:** Deep Charcoal (`#111111`, `#1A1A1A`)
- **Header:** Solid white, sticky (`top-0`), 80px desktop height, with soft scroll shadow (`shadow-header-scroll`)
- **Navigation:** Medium-weight 16px, accent active link state, hover + keyboard accessible "Products" dropdown menu (`?category=diesel`, `?category=oil`, `?category=custom`), and persistent filled accent "Request a Quote" CTA.
