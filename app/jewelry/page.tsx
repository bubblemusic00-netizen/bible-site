import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  BookOpenText,
  Crown,
  Cross,
  Fish,
  Gem,
  Heart,
  Leaf,
} from "lucide-react";
import { PageIntro, PageShell, SecondaryButton, StatusNote } from "../components/site-ui";
import { jewelryIntentions } from "./intentions";

export const metadata: Metadata = {
  title: "Christian Faith Symbols and Daily Reminders",
  description:
    "Learn about Christian symbols as daily reminders of Scripture, prayer, and faith. Faith symbols are optional reminders, not promises or spiritual guarantees.",
};

const symbolSections = [
  {
    title: "Cross",
    meaning:
      "A reminder of Jesus, sacrificial love, forgiveness, and the center of Christian faith.",
    theme: "Grace, forgiveness, and discipleship",
    scripture: "Luke 9:23",
    href: "/start/forgiveness",
    icon: Cross,
  },
  {
    title: "Fish / Ichthys",
    meaning:
      "An early Christian symbol that can remind believers of following Jesus and living as His disciples.",
    theme: "Faith, witness, and discipleship",
    scripture: "Matthew 4:19",
    href: "/start/guidance",
    icon: Fish,
  },
  {
    title: "Dove",
    meaning:
      "A gentle reminder of peace, the Holy Spirit, and the desire to live with calm faith.",
    theme: "Peace, gentleness, and prayer",
    scripture: "John 14:27",
    href: "/start/peace",
    icon: Leaf,
  },
  {
    title: "Heart",
    meaning:
      "A reminder to love God and neighbor with patience, mercy, and practical care.",
    theme: "Love, compassion, and family",
    scripture: "Mark 12:30-31",
    href: "/start/family",
    icon: Heart,
  },
  {
    title: "Anchor",
    meaning:
      "A reminder of hope, steadiness, and holding fast when life feels uncertain.",
    theme: "Hope, endurance, and steadiness",
    scripture: "Hebrews 6:19",
    href: "/start/hope",
    icon: Anchor,
  },
  {
    title: "Crown / Kingdom",
    meaning:
      "A reminder that Christian faith looks toward God's kingdom, humility, and faithful service.",
    theme: "Kingdom, purpose, and faithful living",
    scripture: "Matthew 6:33",
    href: "/start/guidance",
    icon: Crown,
  },
];

const intentionReminders = [
  {
    title: "Peace",
    body: "A dove, leaf, or simple cross may remind someone to pause, pray, and return to Scripture for peace.",
    href: "/start/peace",
  },
  {
    title: "Strength",
    body: "A cross, shield-like shape, or anchor may serve as a cue to pray for courage and endurance.",
    href: "/start/strength",
  },
  {
    title: "Protection",
    body: "A symbol can remind someone to seek God's care and wise support, but it should never be treated as protective power.",
    href: "/start/protection",
  },
  {
    title: "Hope",
    body: "An anchor, heart, or cross may help someone remember hope, prayer, and wise care during a hard season.",
    href: "/start/hope",
  },
  {
    title: "Guidance",
    body: "A fish, crown, or simple path motif may remind someone to pause and ask for wisdom before acting.",
    href: "/start/guidance",
  },
  {
    title: "Gratitude",
    body: "A heart or small light-inspired symbol may remind someone to notice grace and give thanks.",
    href: "/start/gratitude",
  },
];

export default function JewelryPage() {
  return (
    <PageShell active="jewelry">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <PageIntro
          icon={Gem}
          eyebrow="Faith Symbols"
          title="Christian Faith Symbols and Daily Reminders"
          subtitle="Christian symbols can help people remember Scripture, prayer, and faith throughout the day."
        />
        <StatusNote>
          The free Bible and prayer guidance remains the heart of Hope Bible.
          Faith symbols are explained as optional reminders, separate from the
          guidance content and never presented as guarantees.
        </StatusNote>
      </div>

      <section className="mt-9 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Start with meaning
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Symbols are reminders, not guarantees.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            A cross, fish, dove, heart, anchor, or crown can become a quiet cue
            to remember prayer and Scripture. These symbols are not charms,
            luck items, miracle objects, or sources of spiritual power.
          </p>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            For some people, a small symbol helps connect ordinary moments back
            to what they are praying through: peace before a hard conversation,
            strength during a tiring day, guidance before a decision, or
            gratitude when they need to notice grace.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
          <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
          <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Common Christian symbols
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Learn the reminders behind the symbols.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            These summaries are educational starting points. They point toward
            Scripture, prayer, and faithful reflection rather than products.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {symbolSections.map((symbol) => {
            const Icon = symbol.icon;

            return (
              <article
                key={symbol.title}
                className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-3xl">
                      {symbol.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#625b51]">
                      {symbol.meaning}
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 text-sm leading-6 text-[#625b51]">
                  <p>
                    <span className="font-semibold text-[#241f19]">
                      Related theme:
                    </span>{" "}
                    {symbol.theme}
                  </p>
                  <p>
                    <span className="font-semibold text-[#241f19]">
                      Scripture reference:
                    </span>{" "}
                    {symbol.scripture}
                  </p>
                </div>
                <Link
                  href={symbol.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#254737] transition hover:text-[#9a6a24]"
                >
                  Open related Faith Path
                  <ArrowRight size={15} strokeWidth={1.8} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Intention-based reminders
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              Connect a symbol with prayer, not pressure.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              If a symbol is meaningful to you, let it point back to the free
              Faith Quiz result: Scripture, prayer, reflection, and one careful
              next step.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {intentionReminders.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-lg border border-[#d8ddcf] bg-[#fbf7ed] p-4 transition hover:border-[#c49c52] hover:bg-[#fffaf1]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                    {item.title}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-[#9a6a24] transition group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-[#625b51]">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Explore by Faith Path
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Symbol reminders for common needs
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(jewelryIntentions).map((intention) => (
            <Link
              key={intention.slug}
              href={`/jewelry/${intention.slug}`}
              className="group rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition hover:-translate-y-0.5 hover:border-[#c49c52] hover:bg-[#fffdf7]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                <Gem size={19} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
                {intention.relatedTheme}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#625b51]">
                {intention.reminderDirection}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#254737]">
                Learn more
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Clear boundaries
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Faith reminders are never spiritual guarantees.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              Hope Bible treats Christian symbols as teaching aids and memory
              cues. They can remind someone to pray, read Scripture, and walk
              with care, but they do not create protection, healing, blessing,
              luck, or spiritual results.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fff8eb] px-5 py-3 text-sm font-semibold text-[#244336] transition hover:bg-[#fffaf0]"
          >
            Read our principles
            <BookOpenText size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <div className="mt-7 max-w-5xl">
        <StatusNote>
          Faith symbols are reminders of prayer, Scripture, and belief. They
          are not guarantees of protection, healing, blessing, luck, or
          spiritual results.
        </StatusNote>
      </div>
    </PageShell>
  );
}
