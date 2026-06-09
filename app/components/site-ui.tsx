import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Cross } from "lucide-react";
import { MobileSiteMenu } from "./MobileSiteMenu";

type NavKey =
  | "home"
  | "start"
  | "plans"
  | "bible"
  | "prayer"
  | "verse"
  | "jewelry"
  | "about";

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "bible", label: "Bible", href: "/bible" },
  { key: "prayer", label: "Prayer", href: "/prayer" },
  { key: "start", label: "Faith Quiz", href: "/start" },
  { key: "jewelry", label: "Faith Symbols", href: "/jewelry" },
  { key: "about", label: "About", href: "/about" },
];

const footerResourceLinks = [
  ...navItems,
  { key: "verse", label: "Verse", href: "/verse-of-the-day" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
];

export function SiteHeader({ active }: { active?: NavKey }) {
  return (
    <header className="z-50 border-b border-[#dfd2bb] bg-[#fbf7ed]/92 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Hope Bible home">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#204636] text-[#fff8e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(32,70,54,0.16)]">
            <Cross size={20} strokeWidth={1.8} />
          </span>
          <span className="truncate font-serif text-xl font-semibold text-[#24362c]">
            Hope Bible
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-semibold text-[#6b6257] lg:flex xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? "rounded-full bg-[#efe5d3] px-3 py-2 text-[#254737]"
                  : "rounded-full px-3 py-2 transition hover:bg-[#f3eadb] hover:text-[#254737]"
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
    <main className="flex min-h-screen w-full flex-col bg-[#fbf7ed] text-[#27231d]">
      <SiteHeader active={active} />
      <section
        data-page-shell
        className="relative mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 py-10 before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-64 before:bg-[radial-gradient(ellipse_at_top_left,rgba(192,143,62,0.11),transparent_62%)] sm:px-8 sm:before:inset-x-8 lg:py-14"
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
          : "border-t border-[#dfd2bb] bg-[#f7f0e3] text-[#625b51]"
      }
    >
      <div
        className={
          isDark
            ? "flex flex-col gap-3"
            : "mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr]"
        }
      >
        <div className="min-w-0">
          <p
            className={
              isDark
                ? "text-xs leading-5"
                : "max-w-2xl text-sm font-semibold leading-6 text-[#24362c]"
            }
          >
            Hope Bible is an independent Christian faith-inspired resource for
            Scripture, prayer, and reflection.
          </p>
          {!isDark ? (
            <div className="mt-3 grid gap-2 text-sm leading-6 text-[#625b51]">
              <p>
                This site is not an official church, ministry, denomination,
                Bible publisher, or religious authority.
              </p>
              <p>
                Faith symbols are optional reminders of prayer and Scripture,
                not guarantees, charms, or sources of spiritual power.
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
              key={item.key}
              href={item.href}
              className={
                isDark
                  ? "transition hover:text-[#fffaf0]"
                  : "transition hover:text-[#204636]"
              }
            >
              {item.label}
            </Link>
          ))}
          </div>
        </nav>
        {!isDark ? (
          <nav
            aria-label="Footer legal navigation"
            className="min-w-0"
          >
            <h2 className="text-sm font-semibold uppercase text-[#7b561b]">
              Trust and Policies
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 text-sm font-semibold text-[#7b561b]">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#204636]"
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
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7] hover:shadow-[0_22px_48px_rgba(71,55,35,0.085)]"
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
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[#284737] px-5 py-3 text-center text-sm font-semibold text-[#fffaf0] shadow-[0_12px_28px_rgba(40,71,55,0.18)] transition hover:bg-[#1f392c] hover:shadow-[0_14px_32px_rgba(40,71,55,0.22)]"
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
      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border border-[#d8c5a3] bg-[#fffaf0] px-5 py-3 text-center text-sm font-semibold text-[#355242] transition hover:border-[#bd9247] hover:bg-[#fffdf7]"
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

export function StatusNote({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-full break-words rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] px-4 py-3 text-sm font-semibold leading-6 text-[#2f5140]">
      {children}
    </p>
  );
}
