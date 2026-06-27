# Power prompts — pull better-than-expected work out of Claude Code

Open-ended prompts that force judgment, exploration, parallel agents, and adversarial
self-checking instead of transcribing exact instructions. Stack 2–3 for best results.

1. **Standard-setter** — "Audit this whole site like a skeptical design director who bills
   $500/hr and has never seen it before. Spin up separate agents per surface, score each
   against a bar you define, and only show me what's actually below the bar — with evidence,
   not opinions."

2. **Adversarial pass** — "You just told me this is done. Now try to prove yourself wrong.
   Find the three things a real user would hit that we didn't test, and the one decision I'll
   regret in six months."

3. **Constraint flip** — "If you could only keep 5 pages and delete the rest, which 5 and
   why? Then redesign the site as if those 5 were all that ever existed."

4. **Unknown-unknowns hunt** — "What haven't I asked you about that I should have? Go
   look — don't guess. Come back with the gaps between what this project claims to be and
   what it actually is."

5. **Taste calibration** — "Show me three genuinely different directions for this, not three
   flavors of the same thing. Make me regret the one I don't pick."

6. **10x lens** — "Forget incremental. What would make this 10x more valuable to the person
   using it — and what would it cost in effort and risk to get there? Rank by leverage."

7. **Cold-read** — "Pretend you know nothing about our past conversations. Open the live
   site fresh, use it like a stranger on their phone at 2am, and tell me where you got
   confused, bored, or lost trust."

8. **Verification dare** — "Don't tell me it works — show me it works, then show me you
   tried to break it. If you can't break it, tell me exactly what you tried."

9. **Systems question** — "Stop fixing symptoms. Map why these problems keep recurring and
   propose the one structural change that prevents the whole class of them."

10. **Honest ledger** — "Give me the real state: what's genuinely excellent, what's faking
    it, and what's quietly broken that I'll only discover when it embarrasses me. No
    reassurance."

## Why they work
- No exact instructions → forces thinking, not transcription.
- External standard/persona ("$500/hr director", "stranger at 2am") → measures against a real bar.
- Built-in skepticism ("prove yourself wrong", "what's faking it") → triggers adversarial verification + parallel agents.
- Forced ranking / forced cuts → exposes priorities, kills filler.
- "Go look, don't guess" → forces real exploration (agents, live site, code) before answering.
