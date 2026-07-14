# Kashi Yatra Tours — Varanasi Tour & Travel Website

A premium, fully responsive static website for a Varanasi tour and travel
business, built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind
CSS**, and **Framer Motion**. No backend, no database, no login — visitors
contact you directly through WhatsApp, phone, or email.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

This project was built without network access, so dependencies are **not**
pre-installed. To run it locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

To create a production build:

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once live, update `url` in `src/data/site.ts` to your real domain so
   metadata, sitemap.xml, and robots.txt point to the correct address.

## Customizing the Site

All content lives in plain TypeScript data files — no CMS needed.

| What to change | File |
|---|---|
| Business name, phone, WhatsApp number, email, address, socials | `src/data/site.ts` |
| Tour packages (pricing, itinerary, inclusions) | `src/data/packages.ts` |
| Places to visit / attractions | `src/data/attractions.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faq.ts` |
| Theme colors (Saffron / Deep Blue / Gold) | `tailwind.config.ts` |

### WhatsApp Number

Update `whatsapp` and `phoneRaw` in `src/data/site.ts`. The WhatsApp number
must be in international format **without** the `+` or spaces (e.g.
`919876543210`).

### Images

All images are now **local**, served from `public/images/`, so the site
works fully offline with no external requests and no "upstream image
response failed" errors.

| File | Used for |
|---|---|
| `hero.jpg` | Hero banner + default social share (OG) image |
| `ganga-aarti.jpg` | Ganga Aarti scenes |
| `sunrise-ghat.jpg` | Boatman / dusk ghat scenes |
| `dashashwamedh-ghat.jpg` | Ghat steps / Ramnagar Fort stand-in |
| `boat-ride.jpg` | Sunrise boat ride package |
| `varanasi-city.jpg` | Aerial city / old-city lanes |
| `kashi-vishwanath.jpg` | Temple & riverside architecture |
| `sarnath.jpg` | **Placeholder** — no source photo of Sarnath/Dhamek Stupa was available, so this is a labeled gradient placeholder. Replace it with a real photo before launch. |
| `aarti-lamps.jpg`, `aarti-night-close.jpg` | Extra gallery variety |
| `avatars/*.jpg` | Testimonial avatars — simple initials placeholders (the source photos were all landscapes, not headshots). Swap for real customer photos (with permission) or keep as-is. |

To swap any image, just replace the file in `public/images/` **with the
same filename** — no code changes needed. To add a genuinely new image,
drop it in `public/images/` and reference it as `/images/your-file.jpg` in
the relevant file under `src/data/` or `src/components/`.

### Adding a New Tour Package

Add a new object to the `packages` array in `src/data/packages.ts` with a
unique `slug`. A new page at `/packages/your-slug` is generated
automatically — no extra routing code required.

## SEO Features Included

- Metadata API with per-page titles & descriptions (`generateMetadata`)
- Open Graph & Twitter Card tags
- Dynamic `sitemap.xml` (`src/app/sitemap.ts`) — includes every package page
- Dynamic `robots.txt` (`src/app/robots.ts`)
- JSON-LD structured data:
  - `TravelAgency` (Local Business) on every page
  - `TouristTrip` + `Offer` on every package detail page
  - `BreadcrumbList` on package detail pages
  - `FAQPage` on the homepage
- Optimized images via `next/image`
- Clean, descriptive URLs (e.g. `/packages/varanasi-2-days-tour`)

## Folder Structure

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx            # Home
│   ├── about/
│   ├── packages/
│   │   ├── page.tsx        # Packages listing
│   │   └── [slug]/page.tsx # Dynamic package detail page
│   ├── places-to-visit/
│   ├── gallery/
│   ├── testimonials/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── layout/              # Header, Footer, FloatingWhatsApp
│   ├── home/                 # Homepage sections
│   ├── packages/              # Package card, itinerary, booking card
│   ├── contact/                # Contact cards, quick-message form
│   └── ui/                      # Button, Container, SectionHeading, etc.
├── data/                    # All site content (packages, attractions, etc.)
├── lib/                     # SEO + JSON-LD helpers
└── types/                   # Shared TypeScript types
```

## Notes

- This is a fully static, backend-free site. Contact forms build a
  pre-filled WhatsApp or `mailto:` link client-side — nothing is sent to or
  stored on a server.
- Replace the Google Maps embed URL in `src/data/site.ts`
  (`contact.mapEmbedUrl`) with your actual business location's embed link
  from Google Maps ("Share" → "Embed a map").
