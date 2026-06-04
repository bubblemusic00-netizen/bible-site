import type { Metadata } from "next";
import { BookOpenText, Gem, Heart, ShieldCheck } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";

export const metadata: Metadata = {
  title: "About Hope Bible | Independent Christian Resource",
  description:
    "Learn about Hope Bible, an independent Christian resource for Scripture, prayer, reflection, and symbolic faith reminders.",
};

const principles = [
  {
    title: "Scripture with attribution",
    description:
      "Bible text is shown with translation credit, including World English Bible attribution where WEB text appears.",
  },
  {
    title: "No fake miracle claims",
    description:
      "Prayer and reflection are offered with humility, without promises of guaranteed outcomes.",
  },
  {
    title: "No pressure-based selling",
    description:
      "The site is being built as a spiritual resource first, without fear tactics, fake urgency, or fake reviews.",
  },
  {
    title: "Symbolic jewelry only",
    description:
      "Future faith symbols would be reminders of belief, not sources of protection, healing, blessing, or power.",
  },
  {
    title: "Independent Christian resource",
    description:
      "Hope Bible is not affiliated with any Bible publisher, church, denomination, or retail platform.",
  },
];

export default function AboutPage() {
  return (
    <PageShell active="about">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={ShieldCheck}
          eyebrow="About Hope Bible"
          title="A quiet Christian resource for daily faith."
          subtitle="Hope Bible exists to help visitors read, pray, reflect, and carry faith into ordinary life with honesty and care."
        />
        <StatusNote>
          This site is independent and is not affiliated with any Bible
          publisher or church.
        </StatusNote>
      </div>

      <section className="mt-9 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <Heart size={22} strokeWidth={1.8} />
          </span>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Why this exists
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              Start with what you need today.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              The Faith Path system helps a person choose a simple spiritual
              direction, then continue through prayer, Scripture, reflection,
              and a future symbolic reminder. It is meant to feel calm,
              respectful, and useful without pretending faith is a formula.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <BookOpenText size={20} strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-[#241f19]">
            Scripture, prayer, and reflection
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Hope Bible is being built as a free Christian place to read the
            Bible, begin a prayer, and take one grounded step of faith.
          </p>
        </article>

        <article className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <span className="grid size-11 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
            <Gem size={20} strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-[#241f19]">
            Faith symbols later
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Christian jewelry or faith symbols may be added later as tasteful
            reminders of prayer and belief. They will not be presented as
            magical objects or guarantees of blessing, protection, or healing.
          </p>
        </article>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Trust principles
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Built to stay honest.
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-[#dfcfb2] bg-[#fbf7ed] p-4"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#241f19]">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#625b51]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/start">Find your Faith Path</PrimaryButton>
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
      </div>
    </PageShell>
  );
}
