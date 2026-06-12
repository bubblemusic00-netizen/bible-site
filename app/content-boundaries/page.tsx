import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpenText,
  Church,
  Gem,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import {
  PageIntro,
  PageShell,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";

export const metadata: Metadata = {
  title: "Content Boundaries | Hope Bible",
  description:
    "Clear boundaries for Hope Bible content, including prayer, Scripture reflection, faith symbols, professional care, and emergency support.",
};

const boundaries = [
  {
    title: "Not an official church or ministry",
    body: "Hope Bible is independent. It is not an official church, ministry, denomination, pastor, Bible publisher, or religious authority.",
    icon: Church,
  },
  {
    title: "Not a replacement for Scripture or community",
    body: "The site may help someone begin reading and reflecting, but it does not replace Scripture itself, local church life, pastoral care, discipleship, or trusted Christian community.",
    icon: BookOpenText,
  },
  {
    title: "Not professional or emergency support",
    body: "Hope Bible is not counseling, therapy, medical advice, legal advice, financial advice, crisis care, or emergency support.",
    icon: HeartHandshake,
  },
  {
    title: "Prayer is encouragement, not a guarantee",
    body: "Prayer pages are for reflection and spiritual encouragement. They do not promise healing, protection, anxiety relief, money, success, or specific outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Symbols are reminders only",
    body: "Faith symbols are reminders of prayer, Scripture, and belief. They are not charms, protection objects, healing tools, luck items, guarantees of salvation, blessings, or spiritual results.",
    icon: Gem,
  },
  {
    title: "Seek immediate help when needed",
    body: "For immediate danger, abuse, medical emergency, self-harm risk, or crisis situations, seek local emergency services or qualified professional help right away.",
    icon: AlertTriangle,
  },
];

export default function ContentBoundariesPage() {
  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={ShieldCheck}
          eyebrow="Content boundaries"
          title="Content Boundaries"
          subtitle="What Hope Bible can offer, what it cannot replace, and when visitors should seek church, community, professional, or emergency support."
        />
        <StatusNote>
          These boundaries are here to keep the site honest and useful. They
          are not meant to discourage prayer, Scripture reading, or seeking wise
          Christian community.
        </StatusNote>
      </div>

      <section className="mt-9 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-[#9a6a24]">
            Clear limits
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Spiritual encouragement should not pretend to be authority.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            Hope Bible is designed to help people begin with Bible reading,
            prayer, reflection, and meaningful reminders. It should be used with
            humility, wisdom, and honest awareness of what an independent
            website cannot do.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {boundaries.map((boundary) => {
          const Icon = boundary.icon;

          return (
            <article
              key={boundary.title}
              className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-7"
            >
              <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#241f19]">
                {boundary.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#625b51]">
                {boundary.body}
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#e9c985]">
            Compassionate caution
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Get help from real people when the situation needs it.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
            Prayer can be honest and meaningful, but urgent danger, abuse,
            medical emergencies, severe distress, or self-harm risk should be
            met with immediate local help from emergency services, qualified
            professionals, or trusted people nearby.
          </p>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SecondaryButton href="/editorial-principles">
          Editorial Principles
        </SecondaryButton>
        <SecondaryButton href="/contact">Contact</SecondaryButton>
        <SecondaryButton href="/disclosures">Disclosures</SecondaryButton>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-6 text-[#625b51]">
        For Scripture and prayer resources, return to{" "}
        <Link
          href="/bible"
          className="inline-flex min-h-10 items-center font-semibold text-[#254737] transition hover:text-[#9a6a24]"
        >
          Guided Bible Readings
        </Link>{" "}
        or the{" "}
        <Link
          href="/prayer"
          className="inline-flex min-h-10 items-center font-semibold text-[#254737] transition hover:text-[#9a6a24]"
        >
          Prayer Library
        </Link>
        .
      </p>
    </PageShell>
  );
}
