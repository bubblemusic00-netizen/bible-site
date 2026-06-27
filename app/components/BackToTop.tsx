"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Appears after scrolling down a long page; returns to the top.
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-[60] grid size-11 place-items-center rounded-full border border-line-400 bg-cream-fg/95 text-green-600 shadow-[0_10px_28px_rgba(71,55,35,0.18)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-cream-100 hover:shadow-[0_14px_34px_rgba(71,55,35,0.22)] ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={1.9} />
    </button>
  );
}
