"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileSiteMenu } from "./MobileSiteMenu";

// Selah mark: a doorway/threshold opening toward light, with ascending steps.
function SelahMark() {
  const gold = "#e6bf63";
  return (
    <svg viewBox="0 0 28 32" className="size-7" fill="none" aria-hidden="true">
      <path
        d="M5 29 V13 a9 9 0 0 1 18 0 V29"
        stroke="#fff8e8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 29 H24" stroke="#fff8e8" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="12.3" y="8.5" width="3.4" height="7.6" rx="1.7" fill={gold} />
      <rect x="10.5" y="17.2" width="7" height="1.7" rx="0.85" fill={gold} />
      <rect x="9.3" y="20.2" width="9.4" height="1.7" rx="0.85" fill={gold} />
      <rect x="8.1" y="23.2" width="11.8" height="1.7" rx="0.85" fill={gold} />
      <rect x="6.9" y="26.2" width="14.2" height="1.7" rx="0.85" fill={gold} />
    </svg>
  );
}

export type NavKey =
  | "home"
  | "start"
  | "bible"
  | "prayer"
  | "guides"
  | "verse"
  | "jewelry"
  | "about";

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "start", label: "Faith Quiz", href: "/start" },
  { key: "bible", label: "Bible", href: "/bible" },
  { key: "prayer", label: "Prayer", href: "/prayer" },
  { key: "verse", label: "Daily Verse", href: "/verse-of-the-day" },
  { key: "guides", label: "Guides", href: "/guides" },
  { key: "jewelry", label: "Faith Symbols", href: "/jewelry" },
];

export function SiteHeader({
  active,
  overHero = false,
}: {
  active?: NavKey;
  overHero?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only while sitting over the dark hero (home, not yet scrolled).
  const transparent = overHero && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-gradient-to-b from-[#0b100c]/55 via-[#0b100c]/25 to-transparent"
          : "border-b border-[#eadfcb]/70 bg-[#fbf7ed]/88 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Selah home"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[13px] bg-[#203d30] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(32,70,54,0.22)] transition-transform duration-200 ease-out group-hover:scale-[1.05]">
            <SelahMark />
          </span>
          <span
            className={`truncate font-serif text-[1.4rem] font-semibold tracking-[0.005em] transition-colors ${
              transparent ? "text-[#fff8e8]" : "text-[#24362c]"
            }`}
          >
            Selah
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-semibold lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.key;
            const className = isActive
              ? transparent
                ? "rounded-full bg-[#fffaf0]/15 px-3.5 py-2 text-[#fffaf0] backdrop-blur-md"
                : "rounded-full bg-[#203d30] px-3.5 py-2 text-[#fffaf0] shadow-[0_10px_24px_rgba(32,61,48,0.14)]"
              : transparent
                ? "rounded-full px-3.5 py-2 text-[#f1eadf]/90 transition hover:bg-[#fffaf0]/10 hover:text-white"
                : "rounded-full px-3.5 py-2 text-[#655d53] transition hover:bg-[#f3eadb]/72 hover:text-[#254737]";
            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={className}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <MobileSiteMenu items={navItems} active={active} />
      </nav>
    </header>
  );
}
