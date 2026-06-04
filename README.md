# Hope Bible

Hope Bible is a free Christian Bible and prayer website built around a simple Faith Path journey:

Home -> Start -> Faith Path -> Pray -> Read -> Carry

The MVP is designed to feel calm, premium, respectful, and honest. It helps visitors choose what they need today, begin with prayer, continue with Scripture, and explore future symbolic faith reminders.

## Current MVP Features

- Faith Path Finder with 8 intentions: Peace, Strength, Guidance, Gratitude, Healing, Forgiveness, Anxiety, and Family
- Path-specific prayer pages with short WEB Scripture moments, reflections, prayer starters, and next steps
- Scripture Path pages connected to the same intentions
- Local Bible reader pages for Genesis 1 and John 1 using World English Bible text
- Verse of the Day page using World English Bible text
- Faith Symbols preview pages for future symbolic Christian jewelry, with no products for sale yet
- About page with trust principles and independent-resource disclosure
- Local browser-only continuation card using `localStorage`

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Local data only
- No database, authentication, external Bible API, payments, checkout, Shopify, or product inventory

## Local Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Useful checks:

```bash
npm run lint
npm run build
```

## Current Routes

- `/`
- `/start`
- `/start/[path]`
- `/prayer`
- `/prayer/[path]`
- `/bible`
- `/bible/[book]`
- `/bible/[book]/[chapter]`
- `/bible/path/[path]`
- `/jewelry`
- `/jewelry/[intention]`
- `/verse-of-the-day`
- `/about`
- `/plans`
- `/plans/peace`
- `/plans/peace/day-1`

Supported real Bible reader chapters:

- `/bible/genesis/1`
- `/bible/john/1`

## Content Rules

- Use World English Bible (WEB) only for Bible text unless a future translation is explicitly reviewed and permitted.
- Keep WEB attribution visible wherever actual Scripture text appears.
- Do not add NIV, ESV, NLT, NKJV, or other copyrighted Bible translations without permission.
- Do not make guaranteed healing, protection, blessing, prosperity, or miracle claims.
- Do not use fear-based selling, fake urgency, fake testimonials, or fake reviews.
- Faith symbols and jewelry are symbolic reminders only for now.
- Do not add real products, prices, checkout, supplier claims, or inventory until the commerce layer is intentionally designed.

## Deployment Notes

The project is ready for a standard Vercel import once pushed to a GitHub repository.

Recommended Vercel settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: managed by Next.js/Vercel

Before deployment, run:

```bash
npm run lint
npm run build
```
