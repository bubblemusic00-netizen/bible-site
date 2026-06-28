import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenText,
  Church,
  Cross,
  Heart,
  ShieldCheck,
} from "lucide-react";
import {
  PageHero,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";

export const metadata: Metadata = {
  alternates: { canonical: "/beliefs" },
  title: "What We Believe",
  description:
    "The simple Christian beliefs that shape Selah — God, Jesus, the good news, grace, the Holy Spirit, and the trustworthiness of Scripture, held with humility.",
};

type Belief = {
  title: string;
  body: string;
  verse: string;
  reference: string;
};

const beliefs: Belief[] = [
  {
    title: "One God, who made and loves the world",
    body: "We believe in one God who created everything that exists, holds it with care, and is good. Life is received as a gift, not an accident.",
    verse: "In the beginning God created the heaven and the earth.",
    reference: "Genesis 1:1",
  },
  {
    title: "Jesus, God with us",
    body: "We believe Jesus is fully God and truly human — the Word who entered the world, lived a real human life, and is Lord. He is the center of the Christian faith.",
    verse:
      "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    reference: "John 1:14",
  },
  {
    title: "The good news: the cross and the empty tomb",
    body: "We believe Jesus died on the cross bearing the weight of human sin and rose again, breaking the power of death. This is the heart of the gospel — love that acts before we deserve it.",
    verse:
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    reference: "John 3:16",
  },
  {
    title: "Saved by grace, received as a gift",
    body: "We believe salvation is God's gift, received by grace through faith — never earned by being good enough. Responding can begin as a quiet, honest yes, not a performance.",
    verse:
      "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
    reference: "Ephesians 2:8",
  },
  {
    title: "The Holy Spirit and new life",
    body: "We believe God does not leave us on our own. The Holy Spirit comforts, guides toward truth, and gently grows new life in those who belong to God.",
    verse:
      "For as many as are led by the Spirit of God, they are the sons of God.",
    reference: "Romans 8:14",
  },
  {
    title: "Scripture we can trust",
    body: "We believe the Bible is God's word and stands the test of time. Selah encourages reading it slowly and directly, in its own context, rather than leaning only on commentary.",
    verse:
      "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.",
    reference: "Isaiah 40:8",
  },
];

export default function BeliefsPage() {
  return (
    <PageShell
      hero={
        <PageHero
          icon={Cross}
          eyebrow="What we believe"
          title="What We Believe"
          subtitle="Selah is built on the historic Christian faith. These are the simple beliefs at its center — shared across Christian traditions, held with humility."
        />
      }
    >
      <div className="max-w-5xl">
        <StatusNote>
          Selah is non-denominational and beginner-friendly. You do not have to
          believe anything to read here — this simply names where the site
          stands.
        </StatusNote>
      </div>

      <section className="mt-6 rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-4 sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-gold-700">
            The center, not the edges
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Christian faith, kept simple and honest.
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-600">
            Christians belong to many traditions and disagree about real things.
            Selah does not take sides on those debates. Instead it stays near the
            center that Christians have shared for two thousand years: Jesus,
            grace, Scripture, and the call to follow. What follows is that
            center, plainly stated.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {beliefs.map((belief) => (
          <article
            key={belief.title}
            className="flex flex-col rounded-lg border border-line-300 bg-cream-200 p-6 shadow-elev-3 sm:p-7"
          >
            <h2 className="font-serif text-3xl font-semibold leading-tight text-ink-900">
              {belief.title}
            </h2>
            <span className="mt-4 block h-px w-10 bg-line-400" />
            <p className="mt-4 text-base leading-7 text-ink-600">
              {belief.body}
            </p>
            <blockquote className="mt-5 border-l-2 border-line-400 pl-4">
              <p className="font-serif text-lg italic leading-7 text-green-500">
                &ldquo;{belief.verse}&rdquo;
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-label text-gold-700">
                {belief.reference} &middot; KJV
              </p>
            </blockquote>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-lg bg-green-700 p-6 text-cream-fg shadow-elev-green-4 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Faith is meant to be shared
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              We were never meant to walk it alone.
            </h2>
            <p className="mt-3 text-base leading-7 text-cream-fg/84">
              The Christian life grows in community — in a local church, among
              people who read Scripture, pray, and carry one another. Selah is a
              quiet place to begin, not a substitute for that. If you are looking
              for a church or finding your way back, here is a gentle place to
              start.
            </p>
            <div className="mt-5">
              <Link
                href="/guides/finding-a-church"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold-200/45 bg-cream-fg/8 px-5 py-3 text-sm font-semibold text-cream-fg backdrop-blur-md transition hover:bg-cream-fg/14"
              >
                Finding a Church
              </Link>
            </div>
          </div>
          <Church className="size-10 text-gold-300" strokeWidth={1.8} />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <TrustLink
          href="/guides/what-is-the-gospel"
          icon={Heart}
          title="What Is the Gospel?"
          body="An unhurried look at the good news at the center of it all."
        />
        <TrustLink
          href="/bible"
          icon={BookOpenText}
          title="Guided Bible Readings"
          body="Begin with Scripture, slowly, in its own words."
        />
        <TrustLink
          href="/editorial-principles"
          icon={ShieldCheck}
          title="Editorial Principles"
          body="How Selah handles Scripture, prayer, and symbols with care."
        />
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SecondaryButton href="/guides">Beginner Guides</SecondaryButton>
        <SecondaryButton href="/about">About Selah</SecondaryButton>
        <SecondaryButton href="/content-boundaries">
          Content Boundaries
        </SecondaryButton>
      </div>
    </PageShell>
  );
}

function TrustLink({
  href,
  icon: Icon,
  title,
  body,
}: {
  href: string;
  icon: typeof Heart;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-line-300 bg-cream-200 p-5 shadow-elev-3 transition hover:border-gold-500 hover:bg-cream-100"
    >
      <span className="grid size-11 place-items-center rounded-full bg-mist-200 text-green-600">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-ink-900">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-ink-600">{body}</p>
      <p className="mt-5 text-sm font-semibold text-green-600">Read more</p>
    </Link>
  );
}
