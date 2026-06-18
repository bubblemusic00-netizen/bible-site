import { Compass } from "lucide-react";
import {
  PageIntro,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  StatusNote,
} from "./components/site-ui";

export default function NotFound() {
  return (
    <PageShell>
      <PageIntro
        icon={Compass}
        eyebrow="Page not found"
        title="We could not find that page."
        subtitle="Return to a finished starting point for Scripture, prayer, or the Faith Quiz."
      />

      <div className="mt-8 max-w-3xl">
        <StatusNote>
          Hope Bible offers free Scripture, prayer, reflection, and
          faith-symbol guidance. Use the links below to find your way back.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/start">Take the Faith Quiz</PrimaryButton>
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
      </div>
    </PageShell>
  );
}
