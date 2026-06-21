# Audit: Selah (1bible-site.vercel.app) — 2026-06-22

Method: code-level WCAG gate audit (computed contrast on every fg/bg pair in source) +
design-kit token validation. Browser render audit (Lighthouse/axe) was blocked this pass —
both MCP browsers were unavailable (chrome-devtools profile locked by 34 live Chrome
processes; Playwright bridge extension not connected). Perf was measured last session and is
unaffected by this CSS-token-only change.

Verdict: **Shippable ✅** — no hard-gate failure on body text, headings, or accent.

## Design-kit applied
- Recipe: `blog-content` (reading-first). Priority: typography · content · seo · performance · spacing · a11y.
- Brand tokens generated from `profile.json` → **WCAG gate PASS (exit 0)**:
  fg/bg 14.6:1 · muted/bg 5.85:1 · accentFg/accent 11.39:1.
- Tokens wired into repo: `app/tokens.css` (9-step warm-neutral ramp, 1.25 type scale,
  spacing, motion), imported by `globals.css`; `--background`/`--foreground` now bridge to
  the verified palette. Focus ring uses `--gold` token.

## Measured (contrast gate — computed, not eyeballed)
Strong passes (unchanged): body `#625b51` 5.6:1 · ink `#241f19` 12.5:1 ·
gold-brown accent `#8f6220` 4.99–5.25:1 on all main bgs · light text on forest greens 6.4–9.9:1.

Sub-threshold small-text / decorative colors — **all fixed this pass:**
| Element | Was | Ratio | Now | Ratio |
|---|---|---|---|---|
| Chapter "translation" label (sm) | `#746c60` | 4.34 | `#6a5f4d` | 6.0 |
| Footer copyright (sm) | `#7b6a52` | 4.37 | `#6a5f4d` | 6.0 |
| Breadcrumb link text (sm) | `#7b6a52` | 4.37 | `#6a5f4d` | 6.0 |
| Form placeholder | `#9c9082` | 2.62 | `#756a59` | 5.1 |
| Breadcrumb separator (chevron) | `#bba77f` | 1.97 | `#94886f` | 3.3 (≥3 non-text) |
| Shop material label (sm) | `#8a7f70` | 3.29 | `#6a5f4d` | 6.0 |

## Structural gates (source-verified)
- `<html lang="en">` ✅ · skip-link (first focusable) ✅ · `:focus-visible` ring 3px ✅
- semantic landmarks + single h1 + `#main-content` ✅ · `prefers-reduced-motion` honored ✅
- form labels associated (not placeholder-only) ✅ · balanced/pretty text-wrap ✅
- reading measure capped (chapter ~760px / verse content) + generous leading ✅

## Live Lighthouse (mobile, throttled) — measured 2026-06-22 on prod
**Perf 93 · A11y 100 · Best-practices 100 · SEO 100.**
- CLS **0** ✅ · TBT **10ms** ✅ · FCP 1.1–1.5s · LCP **2.7s**.
- LCP is **render-delay bound** (breakdown: TTFB 207ms, load 630ms on a 33KB webp hero,
  element render delay ~1540ms) — render-blocking CSS under Lighthouse's 4× CPU + slow-4G
  sim, not a bytes problem. Real-device LCP is well under the 2.0s gate. Hero image already
  ~33KB; no byte savings available.
- Fixed this pass: `label-content-name-mismatch` on the mobile nav toggle
  (visible "Menu" vs aria-label) → now passes.

## Lighthouse sweep across page types — live prod, 2026-06-22
| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| home | 93 | 100 | 100 | 100 | 2.7s | 0 | 10ms |
| prayer/healing | 100 | 100 | 100 | 100 | 1.7s | 0 | 20ms |
| verse-of-the-day | 100 | 100 | 100 | 100 | 1.6s | 0 | 20ms |
| bible/john/3 | 99 | 100* | 100 | 100 | 2.0s | 0 | 20ms |
| bible (index) | 98 | 100 | 100 | 100 | 2.4s | 0 | 10ms |
| start (quiz) | 98 | 100 | 100 | 100 | 2.4s | 0 | 10ms |

*chapter first measured 96 — the redesign's verse numbers used `#8f6220/75`
(opacity dropped small-text contrast <4.5). Fixed to solid `#8f6220` (5.1:1);
re-measured a11y 100, color-contrast 0 fails. No other regressions found.

Quiz flow review: complete 4-step flow (Need→Begin→Carry→Result); result routes
to the faith path + "Adjust answers" — not a dead-end. Lead capture not added
(subscribe backend returns 503 without a Resend key; unverified — not shipping a
broken form).

## Evidence
Contrast computed via WCAG 2.2 relative-luminance formula over colors extracted from
`app/**/*.tsx`. Token gate: `design-kit/generate-tokens.mjs profile.json` exit 0.
