# Hope Bible — Road to A+ Backlog

Goal: take every aspect that is **not A+** and get it there. Living document.
Last updated: 2026-06-17.

**Legend — blocker:**
- 🟢 autonomous (Claude can do alone, no products, no accounts)
- 🟡 needs your input/decision (service pick, copy approval, asset, money)
- 🔵 needs real products in hand

**Legend — priority:** P0 = do first / highest leverage · P3 = polish.

---

## DONE (baseline raised)
- [x] Canonical bug (every page → homepage) — **fixed**, self-canonical per page.
- [x] JSON-LD (Organization, WebSite, Breadcrumb, Article) sitewide — **added**.
- [x] OG image + Twitter image + branded favicon — **added**.
- [x] Sitemap stale date — **fixed** (build-time stamp).
- [x] Verse of the Day was static → **29-verse KJV daily rotation** (now ~A−; see #18 to reach A+).

---

## 1. Conversion / Marketing psychology (the money layer)

- [ ] **P0 · 🟡 Email / waitlist capture** — F→A+. No capture anywhere; every visitor lost. Build form + store. Blocker: pick service (Resend+DB / ConvertKit / Shopify). *Single biggest launch-day lever.*
- [ ] **P0 · 🟢 Reconcile anti-commerce tone** — D−→A+. Site repeats "no purchase required / symbols have no power / not a charm." Rewrite jewelry + symbol copy to "honest optional keepsake that keeps the prayer close" — keep integrity, remove the buy-blocker.
- [ ] **P0 · 🟡 Social proof system** — F→A+. Zero testimonials/counts/faces. Add testimonial component + real quotes (need real users or seed honestly).
- [ ] **P1 · 🟢 Post-quiz next-commitment** — D→A+. Quiz dead-ends into free content. Add a capturable next step (save result / email result / gentle offer).
- [ ] **P1 · 🟡 Return / engagement loop** — F→A+. Daily-verse email + saved quiz result + reminders. Depends on email capture.
- [ ] **P2 · 🟢 Hero value-prop alignment** — A−→A+. h1 vs metadata promise differ; tighten one sharp promise; make "what you carry" concrete for cold visitors.
- [ ] **P1 · 🟡 Authority / named editorial voice** — C+→A+. Anonymous now. Add a named writer/editor + "about the author." Blocker: who.
- [ ] **P3 · 🔵 Commerce design system** — F→A+. Product gallery, price, variants, cart, image zoom, trust badges, reviews. Needs products.

## 2. SEO

- [ ] **P1 · 🟢 Per-section OG images** — →A+. Dynamic OG with page title for Bible/prayer/guide/symbol.
- [ ] **P1 · 🟢 Self-canonical on static pages** — partial→A+. about, legal, index pages (about/privacy/terms/contact/returns/shipping/disclosures/editorial/content-boundaries + section indexes).
- [ ] **P1 · 🟢 FAQ schema** — →A+. Where guides/pages are Q&A-shaped → FAQPage rich snippets.
- [ ] **P1 · 🟢 Internal-linking pass** — weak→A+. Spread authority: related-content blocks, contextual links, hub-and-spoke.
- [ ] **P2 · 🟢 Sitemap per-item lastmod** — coarse→A+. Real per-content dates instead of one global date.
- [ ] **P1 · 🟢 Content depth** — C→A+. More Bible chapters, prayers, guides (the real organic moat). Big but autonomous.
- [ ] **P2 · 🟡 Custom domain** — vercel.app→A+. Buy + connect real domain (trust + SEO). Blocker: purchase.
- [ ] **P3 · 🟡 Off-site authority / backlinks** — none→A+. Outreach, directories, content marketing. Strategy + your effort.

## 3. Trust / E-E-A-T

- [ ] **P1 · 🟡 Authorship signals** (see Marketing #7).
- [ ] **P1 · 🟡 Social proof** (see Marketing #3).
- [ ] **P2 · 🟢 About page depth** — make mission/story/credibility concrete + human.
- [ ] **P2 · 🟡 Real contact + faces** — verifiable contact method, founder/team presence.

## 4. Design — foundations

- [ ] **P0 · 🟢 Contrast / WCAG** — C+→A+. Audit low-opacity cream text (`/76 /70 /72`) over photo/gradients + gold eyebrows on cream; lift to ≥4.5:1.
- [ ] **P3 · 🟢 Spacing rhythm variation** — B+→A+. Break uniform `py-9/12` monotony with intentional tension.
- [ ] **P2 · 🟢 Layout variety** — B→A+. Add 2nd content template; kill the one-pattern sameness (eyebrow→serif h2→body→CTA everywhere).
- [ ] **P3 · 🟢 Visual hierarchy focal moments** — B+→A+. Give inner pages a "hero moment," not just repeated pattern.

## 5. Design — components

- [ ] **P0 · 🟢 Form / input component system** — C→A+. None exists; blocks email capture + checkout. Build input/textarea/select/validation/error styling.
- [ ] **P2 · 🟢 Card variety** — B+→A+. More than one card treatment; reduce flat bordered-box repetition.
- [ ] **P3 · 🟢 Button states** — A−→A+. Add disabled/loading/active variants.
- [ ] **P2 · 🟢 Iconography distinctiveness** — B→A+. Custom/brand icons vs generic lucide-only.
- [ ] **P2 · 🟡 Logotype / wordmark** — B→A+. Real logo, not 2-bar cross. Blocker: design direction.
- [ ] **P2 · 🟢 Footer brand close** — B+→A+. Newsletter + social + emotional sign-off (depends partly on email/social existing).

## 6. Design — imagery & brand

- [ ] **P1 · 🟡 Photography across inner pages** — C→A+. Only ONE photo sitewide; inner pages = icon+gradient. Add tasteful imagery/illustration (AI-gen or licensed). Also prerequisite for jewelry visuals.
- [ ] **P2 · 🟢 OG image templates per section** (also SEO #1).
- [ ] **P3 · 🟢 Brand mark refinement** — B→A+. Better favicon/icon once logotype decided.

## 7. Design — interaction & a11y

- [ ] **P0 · 🟢 prefers-reduced-motion** — D→A+. No reduced-motion handling; smooth-scroll + hover translate + transitions ignore it. ~10-line WCAG 2.3.3 fix.
- [ ] **P2 · 🟢 Loading states** — none→A+. Skeletons/spinners for client interactions (quiz, future async).
- [ ] **P2 · 🟢 Empty / error states** — →A+. Polish 404 + any empty states.
- [ ] **P2 · 🟡 Mobile nav UX verification** — B→A+. Render-test the mobile menu interaction (needs browser).

## 8. Design — systemic

- [ ] **P2 · 🟢 Semantic color tokens** — B→A+. De-hardcode hundreds of repeated hex (`#203d30` etc.) → CSS variables/Tailwind theme. Enables theming + maintainability.
- [ ] **P2 · 🟢 Dark mode** — D+→A+. `--background/--foreground` declared but unused; either ship dark mode (palette suits it) or remove dead vars.

## 9. Technical / infra

- [ ] **P0 · 🟡 Deploy reliability** — broken→A+. Redeploys end `UNKNOWN`; production alias not flipping. Debug build logs OR git-connect repo to Vercel for reliable auto-deploy.
- [ ] **P0 · 🟡 Live canonical/OG (NEXT_PUBLIC_SITE_URL)** — broken→A+. Still renders `localhost` because the env-var redeploy never landed. Resolves with deploy fix above.
- [ ] **P1 · 🟡 Analytics** — none→A+. Can't measure conversion. Needs account (Plausible/PostHog/Vercel Analytics).
- [ ] **P1 · 🟢 Performance / CWV verification** — unverified→A+. Run Lighthouse + perf trace on live; fix LCP/CLS; hero gradient stack is a suspect.
- [ ] **P2 · 🟢 Accessibility full audit** — →A+. axe/Lighthouse a11y pass beyond contrast + motion.

## 10. Features / content quality

- [ ] **P2 · 🟢 Verse of the Day → A+** — A−→A+. More verses, theme tagging, share button, "save"; tie to email loop.
- [ ] **P3 · 🟡 Translation breadth** — KJV/WEB only→A+. Add a modern translation (licensing check needed).
- [ ] **P2 · 🟢 Faith Quiz depth** — B+→A+. More questions, richer/more felt result, shareable outcome.

---

## Suggested execution order (autonomous-first)
1. 🟢 reduced-motion (P0, quick WCAG win)
2. 🟢 contrast audit + fixes (P0)
3. 🟢 form/input component system (P0, unblocks email + checkout)
4. 🟢 per-section OG + remaining canonicals + FAQ schema + internal linking (P1 SEO bundle)
5. 🟢 semantic color tokens + dark mode (P2 systemic)
6. 🟢 layout/card variety + imagery (P1–P2 visual)
7. 🟡 deploy fix + analytics + email service (need your decisions)
8. 🔵 commerce design system (when products arrive)
