# Deep page grading — Selah / Hope Bible site

URL: https://1bible-site.vercel.app · Date: 2026-06-23 · Viewports: desktop 1440 + mobile 390

## Method / evidence
- 20 representative routes captured full-page, desktop + mobile (`.shots/AU-*`).
- WCAG 2.1 AA via axe-core on 8 most complex pages → **0 violations on all 8** (home, chapter, jewelry, start, prayer index, guide, verses index, votd).
- Perf probe on 5 pages: **CLS = 0 everywhere**, TTFB 61–104ms, DCL 87–279ms. No layout shift. Marble hero served once via next/image optimizer.

Verdict: **Shippable.** No hard-gate failures. Technically excellent. The gap to A+ is design ceiling, not defects.

## Grades (tough bar — A+ = agency-portfolio best)

| Page | Grade | What holds the ceiling |
|---|---|---|
| `/bible/john/3` chapter | **A** | Best page. Drop cap, vertical "Reading" rail, reflection close. Watch justified text rivers. |
| `/prayer/morning` path | **A** | Honesty intro → drop-cap prayer → "carry into the day." Complete arc. |
| `/jewelry/symbols/cross` | **A** | Engraved gold medallion catches light, related cards, "meaningful, never magic." |
| `/start` quiz | **A** | Dark sidebar + question card. Already had a perfection pass. |
| `/` home | **A−** | Strong marble hero + dark→cream→dark rhythm. Library cards section feels sparse / low-contrast; the giant "Selah" lantern lockup adds height, not info; 3 dark sections read same-y. |
| `/verses` index | **A−** | Clean uniform 3-col grid. 16 near-identical cards = monotone; no visual anchor. |
| `/verses/love` topic | **A−** | KJV verses + quiet reflection. Card stack monotone; refs tiny. |
| `/guides` index | **A−** | De-packed grouping works. Formulaic dark-green CTA band at base. |
| `/guides/who-is-jesus` | **A−** | Rich reading-path. Busy lower half: green checklist + 3 related-card rows. |
| `/jewelry` index | **A−** | Premium, commerce-ready. Symbol-grid icons small/faint; two dark waitlist blocks too similar. |
| `/verse-of-the-day` | **A−** | Calm, email capture. Mid-page goes a bit empty/plain. |
| `/start/hope` result | **A−** | Good result arc. Dense: 4 card types + dark band; formulaic. |
| `/about` | **B+** | Honest but reads as a manifesto of disclaimers; many near-identical cards; low warmth. |
| `/terms` (+ legal) | **B+** | Clean card legal. Fine, not memorable. |
| `/bible` index | **B** | Wall of small 2-col readings. Grouping helps but still dense for modern attention. |
| `/prayer` index | **B** | Same density, even longer; top intro area cramped. |
| `/shop` | **B** | Coming-soon is fine — but **every product shows the same gem glyph, zero product imagery.** Reads unfinished. Biggest single visual weakness. |
| `/bible/john` book | **B−** | Too thin: hero + 3 chapter chips in a big empty card. Under-built vs the rest of the site. |
| `/contact` | **C+** | Live Contact page with **no way to contact** (intentional pre-commerce; owner note in code). Reads incomplete to a visitor. |

(`/jewelry/[intention]` not graded — test slug "cross" is a symbol, not an intention key, so it redirected to index. Re-capture with a real intention slug.)

## The 6 things between this site and A+

1. **Product/shop imagery (highest leverage).** Shop's 7 products all share one gem icon. No mockups, no material shots. This is the page meant to make money and it looks like placeholders. Needs real or rendered product imagery (even CSS-engraved medallions like the symbol pages already prove you can do).
2. **Index density.** `/prayer` and `/bible` are long walls of small text rows. Apply the same de-pack already done on `/guides` (fewer per group, more breathing room, a visual anchor per cluster).
3. **Formula fatigue.** The dark-green "Let X lead you back…" CTA band + identical footer disclaimer repeats on ~7 pages. Vary the closing moment per section so the journey doesn't feel templated.
4. **Disclaimer weight.** "Not a charm / not a guarantee / not counseling" appears almost everywhere. Defensible, but it competes with warmth. Consolidate to one place per flow.
5. **Thin pages.** `/bible/john` and `/contact` are under-built. Book pages need more (book intro, themes, why-read, full chapter list). Contact needs at least one real channel.
6. **Monotone card grids.** Verses (16), prayer, bible: long runs of identical cards. Introduce rhythm — a featured row, size variation, or a quiet break — to fight scroll-boredom.

## Strong, keep as-is
Chapter reading, prayer-path, symbol-meaning, and quiz pages are genuinely premium. Brand system (serif display + clean sans, cream/dark cadence, gold accents) is cohesive. Accessibility and layout stability are excellent (axe-clean, CLS 0). KJV/trust framing is consistent.
