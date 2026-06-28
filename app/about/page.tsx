import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, Gem, Heart, ShieldCheck } from "lucide-react";
import {
  HeroPrimary,
  HeroSecondary,
  PageHero,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Learn about Selah, an independent Christian faith-inspired platform for Bible reading, prayer, reflection, faith symbols, and careful content boundaries.",
};

const principles = [
  {
    title: "Scripture with attribution",
    description:
      "Full guided readings use KJV text with clear attribution, and other Scripture sources are credited where they appear.",
  },
  {
    title: "No miracle or outcome claims",
    description:
      "Prayer and reflection are offered with humility, without promises of certain outcomes.",
  },
  {
    title: "No pressure-based selling",
    description:
      "The site is a spiritual resource first, without fear tactics, manufactured urgency, or invented social proof.",
  },
  {
    title: "Faith symbols as reminders",
    description:
      "Faith symbols are discussed as reminders of belief, not sources of protection, healing, blessing, or power.",
  },
  {
    title: "Independent Christian resource",
    description:
      "Selah is not affiliated with any Bible publisher, church, denomination, ministry, or retail platform.",
  },
  {
    title: "Reflection, not authority",
    description:
      "Content is offered for personal reflection and general guidance, not as professional counseling or official religious authority.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      active="about"
      hero={
        <PageHero
          icon={ShieldCheck}
          eyebrow="About Selah"
          title="An independent Christian faith-inspired platform."
          subtitle="Selah helps visitors explore Bible wisdom, prayer, reflection, and meaningful Christian symbols with honesty, care, and respect."
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HeroPrimary href="/start">Find your Faith Path</HeroPrimary>
            <HeroSecondary href="/beliefs">What We Believe</HeroSecondary>
          </div>
        </PageHero>
      }
    >
      <div className="max-w-5xl">
        <StatusNote>
          This site is independent and is not an official church, ministry,
          denomination, Bible publisher, or religious authority.
        </StatusNote>
      </div>

      <section className="mt-6 max-w-5xl overflow-hidden rounded-lg border border-note-line bg-note-bg p-6 shadow-elev-3 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-label text-gold-700">
          The name
        </p>
        <h2 className="mt-2 max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
          &ldquo;Selah&rdquo; is an invitation to pause.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-600">
          <span className="font-semibold text-ink-900">Selah</span> appears
          more than seventy times in the Psalms &mdash; a small word that is
          often understood as a pause: a breath between lines, a moment to stop
          and let the words settle before moving on. That is the whole idea
          here. Read a little, pray honestly, sit with one verse, and take a
          single next step &mdash; unhurried, and without pressure.
        </p>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-mist-200 text-green-600">
            <Heart size={22} strokeWidth={1.8} />
          </span>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-700">
              Why this exists
            </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
              Built from a need for hope, not authority.
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-600">
              Selah was shaped by a personal awareness that people often
              look toward faith, prayer, and hope during painful seasons. The
              goal is not to exploit that need, but to offer a respectful,
              free place to begin with Scripture, prayer, and reflection.
            </p>
            <p className="mt-3 text-base leading-7 text-ink-600">
              The Faith Path system helps a person choose a simple spiritual
              direction, then continue through prayer, Scripture, reflection,
              and an optional symbolic reminder. Selah does not claim
              church authority, clergy credentials, or official ministry status.
              Its role is to organize guidance in a way that stays humble about
              its limits.
            </p>
            <p className="mt-3 text-base leading-7 text-ink-600">
              If you are new to the Christian faith, two pages say plainly where
              the site stands:{" "}
              <Link
                href="/guides/what-is-the-gospel"
                className="font-semibold text-green-600 underline-offset-4 transition hover:text-gold-700 hover:underline"
              >
                the good news
              </Link>{" "}
              and{" "}
              <Link
                href="/beliefs"
                className="font-semibold text-green-600 underline-offset-4 transition hover:text-gold-700 hover:underline"
              >
                what we believe
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
          <span className="grid size-11 place-items-center rounded-full bg-mist-200 text-green-600">
            <BookOpenText size={20} strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-ink-900">
            Scripture, prayer, and reflection
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-600">
            Selah is a free Christian place to read the Bible, begin a prayer,
            consider a reflection, and take one grounded step of faith. Free
            guidance is the center of the site.
          </p>
        </article>

        <article className="rounded-lg border border-note-line bg-note-bg p-6 sm:p-8">
          <span className="grid size-11 place-items-center rounded-full bg-cream-200 text-green-600">
            <Gem size={20} strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-ink-900">
            Faith symbols with clear boundaries
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-600">
            Christian faith symbols are explained as tasteful reminders of
            prayer and belief. They are not presented as magical objects or
            guarantees of blessing, protection, or healing. Free guidance does
            not depend on buying anything.
          </p>
        </article>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
        <p className="text-sm font-semibold uppercase text-gold-700">
          Read the boundaries
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
          Trust depends on clear limits.
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-ink-600">
          Selah is content-first and independent. Free Scripture, prayer, and
          reflection stay separate from any future shop, and the pages below
          explain how the site approaches Scripture, prayer, symbols, commerce,
          and support without pretending to be more than it is.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SecondaryButton href="/beliefs">What We Believe</SecondaryButton>
          <SecondaryButton href="/editorial-principles">
            Editorial Principles
          </SecondaryButton>
          <SecondaryButton href="/content-boundaries">
            Content Boundaries
          </SecondaryButton>
          <SecondaryButton href="/guides">Beginner Guides</SecondaryButton>
          <SecondaryButton href="/contact">Contact</SecondaryButton>
          <SecondaryButton href="/disclosures">Disclosures</SecondaryButton>
        </div>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-8">
        <p className="text-sm font-semibold uppercase text-gold-700">
          Trust principles
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
          Built to stay honest.
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-line-300 bg-cream-300 p-4"
            >
              <h3 className="font-serif text-2xl font-semibold text-ink-900">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/start">Find your Faith Path</PrimaryButton>
        <SecondaryButton href="/guides">Beginner Guides</SecondaryButton>
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
      </div>
    </PageShell>
  );
}
