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
        title="This path is not available yet."
        subtitle="You can return to a quiet starting point or continue with Scripture and prayer."
      />

      <div className="mt-8 max-w-3xl">
        <StatusNote>
          Some parts of Hope Bible are still being built. No purchases,
          accounts, or checkout are available here.
        </StatusNote>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryButton href="/start">Find what you need today</PrimaryButton>
        <SecondaryButton href="/bible">Read the Bible</SecondaryButton>
        <SecondaryButton href="/prayer">Prayer Guide</SecondaryButton>
      </div>
    </PageShell>
  );
}
