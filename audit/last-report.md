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

## Not re-measured this pass (browser blocked)
LCP / CLS / INP / TBT — last session within gate; reverify with Lighthouse when an MCP
browser is available (clear the chrome-devtools profile lock or connect the Playwright bridge).

## Evidence
Contrast computed via WCAG 2.2 relative-luminance formula over colors extracted from
`app/**/*.tsx`. Token gate: `design-kit/generate-tokens.mjs profile.json` exit 0.
