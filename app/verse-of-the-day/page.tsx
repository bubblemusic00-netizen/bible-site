import { BookOpenText, Heart, Sparkles } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "../components/site-ui";

export default function VerseOfTheDayPage() {
  return (
    <PageShell>
      <PageIntro
        icon={Sparkles}
        eyebrow="Daily Scripture"
        title="Verse of the Day"
        subtitle="A quiet Scripture moment for today."
      />

      <article className="mt-9 max-w-4xl overflow-hidden rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_20px_44px_rgba(71,55,35,0.07)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          John 14:27
        </p>
        <blockquote className="mt-4 font-serif text-2xl font-semibold leading-tight text-[#241f19] sm:text-4xl">
          &ldquo;Peace I leave with you. My peace I give to you; not as the world
          gives, I give to you. Don&rsquo;t let your heart be troubled, neither
          let it be fearful.&rdquo;
        </blockquote>
        <p className="mt-5 text-sm font-semibold text-[#2f5140]">
          John 14:27 &middot; World English Bible
        </p>
      </article>

      <div className="mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef1e8] text-[#254737]">
              <BookOpenText size={20} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
                Short reflection
              </h2>
              <p className="mt-3 text-base leading-7 text-[#625b51]">
                Jesus speaks peace as a gift, not as something we have to
                manufacture. Today can begin with receiving that peace before
                carrying every pressure.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fffaf1] text-[#254737]">
              <Heart size={20} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
                Short prayer
              </h2>
              <p className="mt-3 text-base leading-7 text-[#625b51]">
                Lord Jesus, help me receive Your peace today. Quiet what is
                troubled in me, steady what feels fearful, and lead me with
                patience and trust.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#dfcfb2] bg-[#fffaf1] p-6 shadow-[0_18px_38px_rgba(71,55,35,0.055)] sm:p-8">
        <p className="text-sm font-semibold uppercase text-[#9a6a24]">
          Reflection question
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#241f19]">
          Where do you need to receive peace instead of carrying pressure today?
        </h2>
      </section>

      <section className="mt-6 max-w-5xl rounded-lg border border-[#d8ddcf] bg-[#f2f5ee] p-6 sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#241f19]">
          Daily reminders coming soon
        </h2>
        <p className="mt-3 text-base leading-7 text-[#625b51]">
          Later, users may be able to save verses or receive daily reminders.
          For now, this page is a simple place to return for a daily pause.
        </p>
        <div className="mt-5">
          <StatusNote>
            Verse text shown on this page is from the World English Bible.
          </StatusNote>
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/prayer/peace">Pray with this verse</PrimaryButton>
        <SecondaryButton href="/plans/peace/day-1">
          Start 7 Days of Peace
        </SecondaryButton>
        <SecondaryButton href="/start">Find what you need today</SecondaryButton>
        <SecondaryButton href="/bible">Read Bible</SecondaryButton>
      </div>
    </PageShell>
  );
}
