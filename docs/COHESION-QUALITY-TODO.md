# Cohesion & Quality — execution list (2026-06-27)

Owner: autonomous run. Execute top-to-bottom, commit per chunk, verify (tsc + build + screenshots) before claiming done.

**STATUS: all 6 complete (commits 50dcf19 → f8a15d4).** Notes below each item.
1 ✅ Marble trimmed (q40 + 1200 cap, kills ~416KB retina fetch; non-priority, text-LCP).
2 ✅ Audit — no regressions; only gap was flat pages (→ item 3). selah-logo.png 2.1MB unused (left).
3 ✅ All flat pages on dark hero (LegalInfoPage covers 6); brand-tokens.css added.
4 ✅ Email capture on quiz result + /start/[path]; needs RESEND_API_KEY + RESEND_AUDIENCE_ID in Vercel to actually collect.
5 ✅ Sitemap gaps filled (+beliefs, votd, /bible/[book]); fixed robots host bug.
6 ✅ +3 verse topics (courage/patience/loneliness), KJV verified from authoritative source.

1. **Perf** — verify the new full-bleed marble `PageHero` (added to ~12 interior pages) didn't regress mobile LCP/CLS/weight. Fix via priority/sizing/lighter asset/gradient fallback.
2. **Live audit** — desktop + mobile, ranked evidence-backed fix list; apply clear fixes. Watch for redesign regressions (contrast, overflow, hero legibility, breadcrumb-on-dark).
3. **Finish cohesion + tokenize** — remaining pages: privacy, terms, shipping, returns, editorial-principles, content-boundaries, disclosures, beliefs, contact, shop, verse-of-the-day, not-found. Consolidate 5 evergreen / 5 gold hexes into `tokens.css`.
4. **Funnel + email capture** — landing → quiz → result → next; add tasteful email capture on quiz result + start/[path]; kill the dead-end.
5. **Technical SEO** — metadata, structured data, sitemap, robots, internal linking, CWV; find thin pages.
6. **Deepen content** — more guided readings / prayers / verse topics, KJV-verified.

Standing constraints: KJV verbatim + sound theology; no store/checkout (shop stays coming-soon) until products exist; keep design commerce-ready.
