# Expert Services — CCTV & Security Solutions Website

A premium, fully responsive, multipage React website for a CCTV & Security Solutions
company, built with Vite, Tailwind CSS, Framer Motion, Lenis smooth scroll, and React Router.

## Stack

- React 19 + Vite
- Tailwind CSS (custom brand tokens: Royal Blue `#0A5BFF`, Dark Navy `#071B33`, Sky Blue `#3B82F6`)
- Framer Motion (page transitions, scroll reveals, hover interactions)
- Lenis (smooth scrolling)
- React Router DOM (7 pages)
- Lucide React + React Icons
- React CountUp (animated stat counters)
- React Hook Form (contact form validation)
- React Helmet Async (per-page SEO meta tags)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home (hero, trust indicators, authorised-partner trust section, services & products
  preview, process timeline, recent projects, reviews, CTA)
- `/about` — Company story, mission/vision, team, process timeline, partner showcase
- `/services` — All 8 services with alternating detail sections
- `/products` — Filterable product catalogue with quote-request modal
- `/pricing` — 4 pricing tiers + full comparison table + FAQ
- `/gallery` — Filterable masonry gallery with lightbox + before/after
- `/contact` — Contact form, business info, embedded map, FAQ

## Notes on images

Photography is pulled dynamically from `src/utils/img.js`, which builds descriptive
placeholder URLs (Unsplash Source). Swap this helper for your own asset pipeline / CDN
once real photography of your installers, sites, and equipment is available — every
`img(...)` call already carries a descriptive keyword string matching the intended shot,
so licensed photography can be dropped in without re-writing component code.

## Content to personalise before launch

- Phone numbers, WhatsApp number, email, and address (`Navbar`, `Footer`, `Contact` page,
  `src/data/content.js`)
- Team member names/photos in `src/pages/About.jsx`
- Testimonials in `src/data/content.js`
- Google Maps embed URL in `src/pages/Contact.jsx`
- Contact form currently simulates submission client-side — connect `onSubmit` in
  `src/pages/Contact.jsx` to your email/CRM endpoint.
