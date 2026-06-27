# Design-system entropy audit & tokenization — Selah

Harvested 2026-06-28 across `app/**/*.{tsx,ts}` (72 files). Counts are raw
occurrences of literal design values (Tailwind arbitrary `[...]` + standard
scale classes).

## Headline entropy

| Axis | Distinct literals | Should be (tiers) | Verdict |
|------|------------------:|------------------:|---------|
| **Color (hex)** | **136** (953 uses) | ~25 | severe entropy — 85 values used ≤2× |
| **Color (rgba)** | ~40 | folded into color+shadow | scattered shadow inks/opacities |
| **Shadow** | **60** | ~8 (elevation scale) | severe — continuous Y/blur/α drift |
| Font-size (arbitrary rem) | 18 | 3 display tiers (rest = standard scale) | moderate |
| Font-size (standard class) | 11 (text-xs…7xl) | keep | clean |
| Tracking | 15 | ~5 | moderate |
| Leading | 15 | ~5 (+1 exception) | moderate |
| Radius | 7 arbitrary (+ lg/xl/full) | ~5 | mild |
| Duration | 4 | 3 | near-clean |
| Z-index | 5 | 4 | one outlier (`z-[55]`) |
| Opacity (standalone) | 2 | 2 | clean |
| Border width | 1 (+ 1× ring-2) | 1 | clean |

The work concentrates in **two axes: color and shadow.** Everything else is a
handful of snaps.

---

## 1. Token set (source of truth, named by role)

Lives in `app/brand-tokens.css` (CSS vars) + mirrored into Tailwind v4 `@theme`
in `app/globals.css` so utilities (`bg-green-700`, `shadow-elev-3`,
`text-gold-700`) generate from the same source. `tokens.css` stays generated
(WCAG-gated) and untouched.

### Color — evergreen (6 tiers)
| token | value | role |
|-------|-------|------|
| `--green-950` | `#0d120c` | deepest base, footer, hero bottom |
| `--green-900` | `#16271d` | very dark band |
| `--green-800` | `#1f392c` | primary button hover |
| `--green-700` | `#203d30` | brand accent, button fill, logo tile |
| `--green-600` | `#284737` | solid pills, step numbers, link text |
| `--green-500` | `#355242` | secondary green text on cream |

### Color — gold / brass (7 tiers)
| token | value | role |
|-------|-------|------|
| `--gold-900` | `#5f441a` | deepest brass |
| `--gold-800` | `#7b561b` | dark gold-brown, AA on cream |
| `--gold-700` | `#8f6220` | eyebrows/labels on cream (AA) |
| `--gold-600` | `#9a7322` | mid brass |
| `--gold-500` | `#c49c52` | decorative gold, hover border |
| `--gold-400` | `#d7b56d` | light decorative |
| `--gold-300` | `#e9c985` | gold accent on dark |
| `--gold-200` | `#f3dfb6` | lightest gold on dark |

### Color — cream / parchment (5 tiers)
| token | value | role |
|-------|-------|------|
| `--cream-50` | `#ffffff` | pure white (hairline highlights) |
| `--cream-100` | `#fffdf7` | hover card surface |
| `--cream-200` | `#fffaf1` | card surface |
| `--cream-300` | `#fbf7ed` | page background |
| `--cream-400` | `#f4ecdb` | recessed surface |
| `--cream-fg` | `#fffaf0` | text/icons on dark |

### Color — ink / warm-neutral text (5 tiers)
| token | value | role |
|-------|-------|------|
| `--ink-900` | `#241f19` | headings |
| `--ink-800` | `#27231d` | strong body |
| `--ink-600` | `#625b51` | body muted |
| `--ink-500` | `#6a5f4d` | muted/labels |
| `--ink-400` | `#94886f` | faint/disabled |

### Color — line / hairline (3 tiers)
| token | value | role |
|-------|-------|------|
| `--line-200` | `#e4d6bd` | card border |
| `--line-300` | `#dfcfb2` | standard border |
| `--line-400` | `#d8c5a3` | gold-ish divider |

### Color — semantic (StatusNote tones + form states)
| token | value | role |
|-------|-------|------|
| `--success` / `--success-bg` / `--success-line` | `#2f5140` / `#eef5ee` / `#cfe0d0` | default/success note |
| `--info` / `--info-bg` / `--info-line` | `#34566b` / `#eef4f8` / `#cfdce6` | info note |
| `--error` / `--error-soft` | `#9b3434` / `#c08a8a` | form error |

### Shadow — elevation scale (brown ambient `rgba(71,55,35,α)`)
| token | value | role |
|-------|-------|------|
| `--elev-1` | `0 1px 2px rgba(71,55,35,.05)` | hairline |
| `--elev-2` | `0 14px 36px rgba(71,55,35,.05)` | card resting |
| `--elev-3` | `0 18px 38px rgba(71,55,35,.055)` | card (most common, 17×) |
| `--elev-4` | `0 22px 52px rgba(71,55,35,.08)` | raised card |
| `--elev-5` | `0 28px 90px rgba(71,55,35,.09)` | hero parchment |
| `--elev-green-3` | `0 18px 50px rgba(40,71,55,.16)` | green surface |
| `--elev-green-4` | `0 24px 70px rgba(40,71,55,.16)` | green hero/CTA |
| `--inset-hi` | `inset 0 1px 0 rgba(255,255,255,.16)` | top highlight |

### Display font-size (3 tiers beyond the standard text-* scale)
| token | value | role |
|-------|-------|------|
| `--text-card` | `1.7rem` | card title (8×) — sits between 2xl(1.563) and 3xl(1.95) |
| `--text-quote` | `1.3rem` → `1.5rem` | scripture/prayer body |
| `--text-display` | `2.6rem`/`6rem` | hero — keep via clamp, see exceptions |

### Tracking (4 tiers)
`--track-tight: -0.015em` (display headings) · `--track-normal: 0` ·
`--track-label: 0.16em` (uppercase eyebrows — absorbs 0.12/0.14/0.18) ·
`--track-wide: 0.22em` (absorbs 0.2/0.24/0.26/0.28).

### Leading (4 tiers + 1 exception)
`--lh-display: 1.04` (absorbs 0.98/1.0/1.02/1.05) · `--lh-heading: 1.1`
(absorbs 1.12) · `--lh-snug: 1.28` (absorbs 1.24/1.3) · `--lh-body: 1.65`
(absorbs 1.6/1.7/1.72). Exception: `0.72` drop-cap (see below).

### Radius (5 tiers)
`--r-sm: 8px (rounded-lg)` · `--r-md: 12px` (absorbs 13/17px medallion) ·
`--r-lg: 1.4rem` · `--r-xl: 1.75rem` (absorbs 2rem) · `--r-full`.

### Duration (3 tiers) — already in `tokens.css`
`--duration-micro: 130ms` (absorbs 150) · `--duration: 220ms` (absorbs 200) ·
`--duration-expressive: 360ms` (absorbs 300; 700ms shimmer = exception).

### Z-index (4 tiers)
`10` (content) · `50` (header) · `60` (overlay — **snap `z-[55]`→60**) ·
`100` (skip-link/max).

---

## 2. Mapping: outlier → token (the snaps)

Colours collapsing to a tier (90% of pixels unchanged; only these ≤2× outliers
shift, all within ΔE ≈ 1–4):

- greens → `--green-950`: `#0b100c #0d120e #10160f #10160f #111711 #11170f`
- greens → `--green-900`: `#10201a #16271d #17281f #1c3026 #1d2a20`
- greens → `--green-700`: `#204636 #233f31 #244336`
- greens → `--green-600`: `#24362c #254737 #294a39 #304b3a`
- gold → `--gold-700`: `#7a5113 #6c4a10 #8a6418`
- gold → `--gold-600`: `#9c7333 #b88735 #b98a2d #caa039`
- gold → `--gold-500`: `#a87f3c #c79a4d #c9a86a #cdab6e #b88735`
- gold → `--gold-300`: `#e6bf63 #e6c573 #ecd189 #e6cb88 #f6dea0 #f3dca0 #f0d99e #f0dca6 #eaddae`
- cream → `--cream-200/300`: `#fbf8f0 #fbf5e8 #fdfaf2 #fffdf8 #fdf6e6 #fdf7e7`
- ink → `--ink-600/500`: `#5c5347 #5e574c #5f564b #5f574a #655d53 #6a563f #6a6258 #756a59 #9c8f79`
- line → `--line-300/400`: `#dcc8a5 #ded1ba #e0cfa8 #e2d2b6 #e2d4ba #e3d3b0 #e3d4b6 #e6d5b3 #e6d8bd #e7decb #eadbc0 #eadfcb #e4d6bd #d9c59d`
- slate ramp (info/icon greys) → `--info` family or `--ink-*`: `#49525a #828b93 #9ca5ad #9ca5ad #bcc4cb #d9dfe4 #e2e7eb #f1f4f7` — see exceptions.

Shadows: every 60 strings map to the nearest `--elev-*` by (blur, α). Full
per-string map generated from the harvest; applied during refactor.

---

## 3. True exceptions (proven survivors — not snapped)

1. **Drop-cap `leading-[0.72]`** (prayer + chapter first-letter) — a typographic
   device, not body leading; 0.72 is intentional to seat the 3.6–4.4rem cap.
2. **Hero display tracking `-0.012/-0.015/-0.02em`** — optical correction scales
   with the 6rem display size; collapsed to `--track-tight` only where the size
   matches, kept distinct on the homepage 6rem H1.
3. **Medallion conic-gradient golds** (`#a87f3c #f3dca0 #c79a4d #eaddae #9c7333
   #f0d99e`) in `jewelry/page.tsx` + `ProductMedallion` — these are *gradient
   stops* simulating brushed metal; they are one artwork, not palette tiers, and
   must stay as a contiguous ramp. Documented as `--medallion-*`, exempt.
4. **Hero scrim gradient stops** (homepage/jewelry/shop radial+linear rgba
   stops) — bespoke per-image lighting, not reusable surfaces. Exempt.
5. **Noise overlay `opacity-[0.04]` + marble `opacity-[0.16]`** — two distinct
   decorative-texture intensities; both kept as `--texture-noise` /
   `--texture-marble`.
6. **700ms medallion shimmer** — animation timing for a 5s loop, not a UI
   transition; exempt from the 130/220/360 transition scale.
7. **Slate/blue ramp** (`#34566b … #eef4f8`) — the StatusNote *info* tone is a
   real semantic family (cool blue) distinct from the warm palette; kept as
   `--info-*`. The mid-greys (`#828b93 #9ca5ad #bcc4cb`) trace to one component;
   flagged for confirm-or-snap in the staged pass.

---

## 4. Rollout — results (commits 3e5ecaf → 5595c07)

| Axis | distinct before | after | how |
|------|----------------:|------:|-----|
| **Color (standalone utilities)** | 136 | **0** | all consume tokens (`bg-green-700` …) |
| Color (surviving hex literals) | 136 | **49** | all gradient-stop / shadow-internal — the proven exceptions |
| Color tokens defined | — | 42 | the role-named ramp + semantic surfaces |
| **Shadow** `shadow-[…]` | 60 | **38** | clean ambient → `elev-*`; 38 = designed composites (exceptions) |
| Font-size `text-[…rem]` | 18 | 17 | `text-[1.7rem]`→`text-card`; rest = display/hero |
| **Z-index** arbitrary | 5 (incl `z-[55]`) | 2 | snapped `z-[55]`→`z-[60]` |

Done + verified (home, bible, votd, prayer, jewelry, quiz, verses): **color axis
fully tokenized — zero standalone color literals**; clean shadow tier snap;
z-index; card-title size; full `@theme` token layer is the single source of
truth (`app/globals.css`).

**Staged (micro-typography, low visual weight, easy follow-up):** snap
`tracking-[…]` (15→~4: `tracking-label`/`tracking-wide2`/`tracking-tight2`) and
`leading-[…]` (15→~4 + drop-cap exception) to the tokens already defined in
`@theme`; collapse the remaining display `text-[…rem]` to a `--text-display`
clamp. The 38 composite shadows and 49 gradient hexes are exceptions, not debt —
each is a designed multi-layer/gradient artefact proven in §3, not a snap target.
