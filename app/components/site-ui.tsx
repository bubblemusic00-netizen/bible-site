import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Compass,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader, type NavKey } from "./SiteHeader";

export { SiteHeader };

const footerResourceLinks = [
  { label: "Bible", href: "/bible" },
  { label: "Prayer", href: "/prayer" },
  { label: "Bible Verses", href: "/verses" },
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

export function PageShell({
  active,
  children,
}: {
  active?: NavKey;
  children: ReactNode;
}) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen w-full flex-col bg-[linear-gradient(180deg,#faf7f0_0%,#f3eee3_100%)] text-[#27231d]"
    >
      <SiteHeader active={active} />
      <section
        data-page-shell
        className="relative mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 py-9 sm:px-8 lg:py-12"
      >
        <div className="relative w-full min-w-0">{children}</div>
      </section>
      <SiteFooter />
    </main>
  );
}

export function SiteFooter({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const year = new Date().getFullYear();

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
          {isDark ? (
            <p className="text-xs leading-5">Selah</p>
          ) : (
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 28 32"
                className="size-6 shrink-0"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 29 V13 a9 9 0 0 1 18 0 V29"
                  stroke="#24362c"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M4 29 H24" stroke="#24362c" strokeWidth="1.7" strokeLinecap="round" />
                <rect x="12.3" y="8.5" width="3.4" height="7.6" rx="1.7" fill="#9a7322" />
                <rect x="10.5" y="17.2" width="7" height="1.7" rx="0.85" fill="#9a7322" />
                <rect x="9.3" y="20.2" width="9.4" height="1.7" rx="0.85" fill="#9a7322" />
                <rect x="8.1" y="23.2" width="11.8" height="1.7" rx="0.85" fill="#9a7322" />
                <rect x="6.9" y="26.2" width="14.2" height="1.7" rx="0.85" fill="#9a7322" />
              </svg>
              <p className="font-serif text-2xl font-semibold leading-tight text-[#24362c]">
                Selah
              </p>
            </div>
          )}
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
            <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
              <Compass size={14} strokeWidth={1.8} />
              Explore
            </h2>
          ) : null}
          <div
            className={
              isDark
                ? "flex flex-wrap gap-x-4 gap-y-2"
                : "mt-4 grid gap-y-2.5 text-sm font-semibold text-[#355242]"
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
            <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
              <ShieldCheck size={14} strokeWidth={1.8} />
              Trust
            </h2>
            <div className="mt-3 grid gap-y-2 text-sm font-semibold text-[#355242]">
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
            <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7b561b]">
              <Scale size={14} strokeWidth={1.8} />
              Policies
            </h2>
            <div className="mt-3 grid gap-y-2 text-sm font-semibold text-[#355242]">
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
      {!isDark ? (
        <div className="border-t border-[#eadfcb]">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-[#6a5f4d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {year} Selah. Free Scripture, prayer, and reflection.
            </p>
            <p className="font-serif italic text-[#3f4a40]">
              &ldquo;Cast thy burden upon the LORD, and he shall sustain
              thee.&rdquo; — Psalm 55:22
            </p>
          </div>
        </div>
      ) : null}
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
      <p className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6220]">
        <Icon size={15} strokeWidth={1.8} />
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
  title,
  description,
  cta = "Open",
}: {
  href: string;
  icon?: LucideIcon;
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
      <h2 className="break-words font-serif text-[1.7rem] font-semibold leading-[1.1] text-[#241f19]">
        {title}
      </h2>
      <span className="mt-4 block h-px w-10 bg-[#d8c5a3] transition-all duration-200 group-hover:w-16 group-hover:bg-[#c49c52]" />
      <p className="mt-4 break-words text-base leading-7 text-[#625b51]">
        {description}
      </p>
      <p className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#254737]">
        {cta}
        <ArrowRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </p>
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
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[#203d30] px-5 py-3 text-center text-sm font-semibold text-[#fffaf0] shadow-[0_14px_34px_rgba(40,71,55,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#183326] hover:shadow-[0_18px_42px_rgba(40,71,55,0.22)] active:translate-y-0 active:scale-[0.98]"
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
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border border-[#dcc8a5] bg-[#fffaf0]/82 px-5 py-3 text-center text-sm font-semibold text-[#355242] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#bd9247] hover:bg-[#fffdf7] active:translate-y-0 active:scale-[0.98]"
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
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[#6a5f4d]">
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
                    className="shrink-0 text-[#94886f]"
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

export function StatusNote({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "boundary" | "info";
}) {
  const toneStyles = {
    default: "border-[#d8ddcf] bg-[#f2f5ee]/76 text-[#2f5140]",
    boundary: "border-[#e3d3b0] bg-[#fbf3e3]/80 text-[#7b561b]",
    info: "border-[#cfdce6] bg-[#eef4f8]/80 text-[#34566b]",
  }[tone];

  return (
    <p
      className={`w-full max-w-full break-words rounded-lg border px-4 py-3 text-sm font-semibold leading-6 ${toneStyles}`}
    >
      {children}
    </p>
  );
}
