import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, ChevronRight, Cross } from "lucide-react";
import { MobileSiteMenu } from "./MobileSiteMenu";

type NavKey =
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
  { key: "guides", label: "Guides", href: "/guides" },
  { key: "jewelry", label: "Faith Symbols", href: "/jewelry" },
];

const footerResourceLinks = [
  { label: "Bible", href: "/bible" },
  { label: "Prayer", href: "/prayer" },
  { label: "Faith Quiz", href: "/start" },
  { label: "Guides", href: "/guides" },
  { label: "Faith Symbols", href: "/jewelry" },
  { label: "About", href: "/about" },
];

const trustLinks = [
  { label: "Editorial Principles", href: "/editorial-principles" },
  { label: "Content Boundaries", href: "/content-boundaries" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
];

export function SiteHeader({ active }: { active?: NavKey }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfcb]/70 bg-[#fbf7ed]/88 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Hope Bible home">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#203d30] text-[#fff8e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(32,70,54,0.18)]">
            <Cross size={18} strokeWidth={1.75} />
          </span>
          <span className="truncate font-serif text-xl font-semibold tracking-[0.01em] text-[#24362c]">
            Hope Bible
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-semibold text-[#655d53] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? "rounded-full bg-[#203d30] px-3.5 py-2 text-[#fffaf0] shadow-[0_10px_24px_rgba(32,61,48,0.14)]"
                  : "rounded-full px-3.5 py-2 transition hover:bg-[#f3eadb]/72 hover:text-[#254737]"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <MobileSiteMenu items={navItems} active={active} />
      </nav>
    </header>
  );
}

export function PageShell({
  active,
  children,
}: {
  active?: NavKey;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[radial-gradient(circle_at_16%_10%,rgba(226,190,120,0.16),transparent_34%),radial-gradient(circle_at_84%_16%,rgba(51,91,68,0.08),transparent_32%),linear-gradient(135deg,rgba(255,252,244,0.96),rgba(246,238,222,0.92))] text-[#27231d]">
      <SiteHeader active={active} />
      <section
        data-page-shell
        className="relative mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 py-9 before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-80 before:bg-[radial-gradient(ellipse_at_top_left,rgba(192,143,62,0.12),transparent_64%)] sm:px-8 sm:before:inset-x-8 lg:py-12"
      >
        <div className="relative w-full min-w-0">{children}</div>
      </section>
      <SiteFooter />
    </main>
  );
}

export function SiteFooter({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <footer
      className={
        isDark
          ? "mt-7 max-w-5xl text-[#fff8e8]/82"
          : "border-t border-[#eadfcb] bg-[#f6efe1] text-[#625b51]"
      }
    >
      <div
        className={
          isDark
            ? "flex flex-col gap-3"
            : "mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-8 lg:grid-cols-[1.25fr_0.7fr_0.8fr_0.65fr]"
        }
      >
        <div className="min-w-0">
          <p
            className={
              isDark
                ? "text-xs leading-5"
                : "max-w-2xl font-serif text-2xl font-semibold leading-tight text-[#24362c]"
            }
          >
            Hope Bible
          </p>
          {!isDark ? (
            <div className="mt-3 grid max-w-md gap-2 text-sm leading-6 text-[#625b51]">
              <p>
                A quiet place for guided Scripture, honest prayer, beginner
                guides, and faith-symbol reminders.
              </p>
              <p>
                Independent and not an official church, ministry, publisher, or
                religious authority.
              </p>
            </div>
          ) : null}
        </div>
        <nav
          aria-label="Footer resource navigation"
          className={
            isDark
              ? "flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold"
              : "min-w-0"
          }
        >
          {!isDark ? (
            <h2 className="text-sm font-semibold uppercase text-[#7b561b]">
              Explore
            </h2>
          ) : null}
          <div
            className={
              isDark
                ? "flex flex-wrap gap-x-4 gap-y-2"
                : "mt-3 grid grid-cols-2 gap-x-5 gap-y-2 text-sm font-semibold text-[#355242]"
            }
          >
          {footerResourceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isDark
                  ? "inline-flex min-h-10 items-center transition hover:text-[#fffaf0]"
                  : "inline-flex min-h-10 items-center transition hover:text-[#204636]"
              }
            >
              {item.label}
            </Link>
          ))}
          </div>
        </nav>
        {!isDark ? (
          <nav
            aria-label="Footer trust navigation"
            className="min-w-0"
          >
            <h2 className="text-sm font-semibold uppercase text-[#7b561b]">
              Trust
            </h2>
            <div className="mt-3 grid gap-y-2 text-sm font-semibold text-[#7b561b]">
            {trustLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 items-center transition hover:text-[#204636]"
              >
                {item.label}
              </Link>
            ))}
            </div>
          </nav>
        ) : null}
        {!isDark ? (
          <nav
            aria-label="Footer legal navigation"
            className="min-w-0"
          >
            <h2 className="text-sm font-semibold uppercase text-[#7b561b]">
              Policies
            </h2>
            <div className="mt-3 grid gap-y-2 text-sm font-semibold text-[#7b561b]">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 items-center transition hover:text-[#204636]"
              >
                {item.label}
              </Link>
            ))}
            </div>
          </nav>
        ) : null}
      </div>
    </footer>
  );
}

export function PageIntro({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-full max-w-3xl">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#d5bd8d] bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#7b561b] shadow-[0_8px_18px_rgba(81,59,31,0.05)]">
        <Icon size={16} strokeWidth={1.8} />
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl break-words font-serif text-4xl font-semibold leading-[1.04] text-[#241f19] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl break-words text-base leading-7 text-[#625b51] sm:text-lg sm:leading-8">
        {subtitle}
      </p>
    </div>
  );
}

export function CardLink({
  href,
  icon: Icon,
  title,
  description,
  cta = "Open",
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#eadbc0] bg-[#fffaf1]/78 p-5 shadow-[0_18px_42px_rgba(71,55,35,0.045)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_22px_52px_rgba(71,55,35,0.08)]"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#ffffff]" />
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <ArrowRight
          size={17}
          className="mt-1 shrink-0 text-[#9b6b25] transition group-hover:translate-x-1"
        />
      </div>
      <h2 className="mt-5 break-words font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {title}
      </h2>
      <p className="mt-2 break-words text-sm leading-6 text-[#625b51]">
        {description}
      </p>
      <p className="mt-5 text-sm font-semibold text-[#254737]">{cta}</p>
    </Link>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[#203d30] px-5 py-3 text-center text-sm font-semibold text-[#fffaf0] shadow-[0_14px_34px_rgba(40,71,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183326] hover:shadow-[0_18px_42px_rgba(40,71,55,0.22)]"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border border-[#dcc8a5] bg-[#fffaf0]/82 px-5 py-3 text-center text-sm font-semibold text-[#355242] transition hover:-translate-y-0.5 hover:border-[#bd9247] hover:bg-[#fffdf7]"
    >
      {children}
    </Link>
  );
}

export function BackButton({ href, label }: { href: string; label: string }) {
  return (
    <PrimaryButton href={href}>
      <ArrowLeft size={16} />
      {label}
    </PrimaryButton>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 w-full min-w-0">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[#7b6a52]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-[#2f5140]"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="font-semibold transition hover:text-[#204636]"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#bba77f]"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function StatusNote({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-full break-words rounded-lg border border-[#d8ddcf] bg-[#f2f5ee]/76 px-4 py-3 text-sm font-semibold leading-6 text-[#2f5140]">
      {children}
    </p>
  );
}
