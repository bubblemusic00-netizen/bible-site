"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals [data-reveal] elements as they scroll into view.
// Safe by design: only hides elements once JS marks <html> with `js-reveal`
// (so no-JS users see everything), respects reduced-motion, and a timeout
// fallback reveals anything still hidden so content can never get stuck.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.revealed), [data-reveal-stagger]:not(.revealed)",
      ),
    );
    if (els.length === 0) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: never leave content hidden.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("revealed"));
    }, 2200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
