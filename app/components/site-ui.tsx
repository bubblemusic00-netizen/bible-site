import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Cross } from "lucide-react";

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
  { key: "start", label: "Start", href: "/start" },
  { key: "bible", label: "Bible", href: "/bible" },
  { key: "prayer", label: "Prayer", href: "/prayer" },
  { key: "verse", label: "Verse", href: "/verse-of-the-day" },
  { key: "jewelry", label: "Faith Symbols", href: "/jewelry" },
  { key: "about", label: "About", href: "/about" },
];

export function SiteHeader({ active }: { active?: NavKey }) {
  return (
    <header className="z-50 border-b border-[#dfd2bb] bg-[#fbf7ed]/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
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
      </nav>
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 pb-3 lg:hidden">
        <div className="flex min-w-max items-center gap-2 text-sm font-semibold text-[#6b6257]">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? "rounded-full bg-[#efe5d3] px-3 py-2 text-[#254737]"
                  : "rounded-full border border-[#eadfcf] bg-[#fffaf0]/70 px-3 py-2 transition hover:bg-[#f3eadb] hover:text-[#254737]"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
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
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fbf7ed] text-[#27231d]">
      <SiteHeader active={active} />
      <section
        data-page-shell
        className="relative mx-auto w-full min-w-0 max-w-7xl flex-1 overflow-x-hidden px-4 py-10 before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-64 before:bg-[radial-gradient(ellipse_at_top_left,rgba(192,143,62,0.11),transparent_62%)] sm:px-8 sm:before:inset-x-8 lg:py-14"
      >
        <div
          className="relative min-w-0"
          style={{ width: "min(100%, calc(100vw - 2rem))" }}
        >
          {children}
        </div>
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
            : "mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        }
      >
        <p className={isDark ? "text-xs leading-5" : "max-w-2xl text-sm leading-6"}>
          This site is an independent Christian resource and is not affiliated
          with any Bible publisher or church.
        </p>
        <nav
          aria-label="Footer navigation"
          className={
            isDark
              ? "flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold"
              : "flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-[#355242]"
          }
        >
          {navItems.map((item) => (
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
        </nav>
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
    <div
      className="max-w-3xl"
      style={{ width: "min(48rem, calc(100vw - 2rem))" }}
    >
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
    <p
      className="max-w-full break-words rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] px-4 py-3 text-sm font-semibold leading-6 text-[#2f5140]"
      style={{ width: "min(100%, calc(100vw - 2rem))" }}
    >
      {children}
    </p>
  );
}
