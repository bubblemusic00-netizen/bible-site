"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type MobileNavItem = {
  key: string;
  label: string;
  href: string;
};

export function MobileSiteMenu({
  items,
  active,
}: {
  items: MobileNavItem[];
  active?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex shrink-0 lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-site-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-400 bg-cream-fg px-4 py-2 text-sm font-semibold text-[#254737] shadow-[0_8px_20px_rgba(71,55,35,0.06)] transition hover:border-[#bd9247] hover:bg-cream-100"
      >
        {isOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
        Menu
      </button>

      {isOpen ? (
        <div
          id="mobile-site-menu"
          className="menu-in absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-line-300 bg-cream-200 p-2 shadow-[0_22px_60px_rgba(71,55,35,0.18)]"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={
                  active === item.key
                    ? "rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-cream-fg"
                    : "rounded-md px-4 py-3 text-sm font-semibold text-[#5f564b] transition hover:bg-[#f3eadb] hover:text-[#254737]"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
