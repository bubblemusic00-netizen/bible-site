import { BookOpenText, Heart, Leaf, PenLine } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../../../components/site-ui";
import { peacePlanDay1 } from "../../plans-data";

export default function PeacePlanDayOnePage() {
  return (
    <PageShell active="plans">
      <PageIntro
        icon={Leaf}
        eyebrow="7 Days of Peace"
        title={peacePlanDay1.title}
        subtitle={peacePlanDay1.opening}
      />

      <article className="mt-9 max-w-4xl overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_20px_44px_rgba(71,55,35,0.07)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <BookOpenText size={20} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Scripture
            </p>
            <blockquote className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
              {peacePlanDay1.verse}
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-[#2f5140]">
              {peacePlanDay1.reference}
            </p>
          </div>
        </div>
      </article>

      <div className="mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
            Reflection
          </h2>
          <p className="mt-3 text-base leading-7 text-[#625b51]">
            {peacePlanDay1.reflection}
          </p>
        </section>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
              <Heart size={20} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
                Prayer
              </h2>
              <p className="mt-3 text-base leading-7 text-[#625b51]">
                {peacePlanDay1.prayer}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
            <PenLine size={20} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase text-[#9a6a24]">
              Reflection question
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
              {peacePlanDay1.question}
            </h2>
            <p className="mt-5 text-sm font-semibold uppercase text-[#9a6a24]">
              Tiny action
            </p>
            <p className="mt-2 text-base leading-7 text-[#625b51]">
              {peacePlanDay1.action}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Faith reminder coming soon
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          Later, this site may suggest a simple Christian item as a daily
          reminder to pause and pray for peace. The item itself will not be
          presented as a source of protection, blessing, healing, or spiritual
          power.
        </p>
        <div className="mt-5">
          <StatusNote>
            Bible text on this page is from the World English Bible.
          </StatusNote>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/prayer/peace">Pray for Peace</PrimaryButton>
        <SecondaryButton href="/bible/john/1">Read John 1</SecondaryButton>
        <SecondaryButton href="/start">Find what you need today</SecondaryButton>
        <SecondaryButton href="/plans/peace">Back to Plan</SecondaryButton>
      </div>
    </PageShell>
  );
}
