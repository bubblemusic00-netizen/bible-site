import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenText,
  Gem,
  Heart,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import {
  PageIntro,
  PageShell,
  StatusNote,
} from "../components/site-ui";

export const metadata: Metadata = {
  title: "Editorial Principles",
  description:
    "How Hope Bible approaches Scripture, prayer, faith symbols, public-domain Bible text, and careful Christian faith-inspired content boundaries.",
};

const principles = [
  {
    title: "Scripture first, with humility",
    body: "Hope Bible encourages visitors to begin with Scripture, prayer, and reflection. The site can offer guidance, but it does not replace reading Scripture directly, participating in a local church or Christian community, or seeking wise pastoral support.",
  },
  {
    title: "Non-denominational and beginner-friendly",
    body: "Content is written for broad Christian reflection and for people who may be new to Bible reading or prayer. Hope Bible avoids denominational arguments, speculative theology, and divisive claims that would distract from simple Scripture, prayer, and reflection.",
  },
  {
    title: "No miracle or outcome guarantees",
    body: "Prayer and reflection are presented with humility. Hope Bible does not promise healing, protection, money, success, anxiety relief, blessing, or any guaranteed outcome. Faith is not treated as a formula for controlling results.",
  },
  {
    title: "Symbols as reminders, not power",
    body: "Christian symbols may help some people remember Scripture, prayer, or faith during ordinary moments. Objects are not charms, spiritual power sources, guarantees, or replacements for faith, obedience, community, or wise care.",
  },
  {
    title: "Scripture text attribution",
    body: "Full Scripture text in the guided Bible readings is presented from the King James Version (KJV), a Bible translation widely used in public-domain contexts in the United States so guided readings can be offered openly and consistently. Shorter references or excerpts may use other properly attributed public-domain sources where noted.",
  },
  {
    title: "Careful content boundaries",
    body: "Hope Bible is not pastoral counseling, therapy, crisis care, medical advice, legal advice, financial advice, or official church authority. Content is for personal reflection and general spiritual encouragement.",
  },
];

export default function EditorialPrinciplesPage() {
  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <PageIntro
          icon={PenLine}
          eyebrow="Editorial trust"
          title="Editorial Principles"
          subtitle="How Hope Bible approaches Scripture, prayer, reflection, and Christian symbols with care, humility, and clear boundaries."
        />
        <StatusNote>
          Hope Bible is an independent Christian faith-inspired resource. It is
          not an official church, ministry, denomination, or religious
          authority.
        </StatusNote>
      </div>

      <section className="mt-9 rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_22px_52px_rgba(71,55,35,0.07)] sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-[#8f6220]">
            Content posture
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
            Begin with Scripture, then move carefully.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            The purpose of Hope Bible is to help people take a simple next step:
            read Scripture, pray honestly, reflect with care, and remember faith
            in ordinary life. The site should never pretend to be a pastor, a
            church, a theological authority, or a shortcut around Christian
            community.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-7"
          >
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#241f19]">
              {principle.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[#625b51]">
              {principle.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-lg bg-[#233f31] p-6 text-[#fffaf0] shadow-[0_24px_70px_rgba(40,71,55,0.16)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#e9c985]">
              Future review
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Content should keep becoming clearer and more careful.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#fff8e8]/84">
              Hope Bible content may be improved over time for clarity,
              accuracy, attribution, and care. Before any public commerce
              launch, content and claims should be reviewed carefully,
              especially around faith symbols and product language.
            </p>
          </div>
          <ShieldCheck className="size-10 text-[#e9c985]" strokeWidth={1.8} />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <TrustLink
          href="/content-boundaries"
          icon={ShieldCheck}
          title="Content Boundaries"
          body="Read what Hope Bible is not meant to replace."
        />
        <TrustLink
          href="/bible"
          icon={BookOpenText}
          title="Guided Bible Readings"
          body="Start with finished Scripture readings and reflection."
        />
        <TrustLink
          href="/jewelry"
          icon={Gem}
          title="Faith Symbols"
          body="Learn how symbols are framed as reminders, not guarantees."
        />
      </section>
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
      className="group rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-5 shadow-[0_18px_38px_rgba(71,55,35,0.055)] transition hover:border-[#c49c52] hover:bg-[#fffdf7]"
    >
      <span className="grid size-11 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#241f19]">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#625b51]">{body}</p>
      <p className="mt-5 text-sm font-semibold text-[#254737]">
        Read more
      </p>
    </Link>
  );
}
