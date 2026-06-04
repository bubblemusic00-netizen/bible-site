import { faithPathSlugs, faithPaths, type FaithPathSlug } from "@/lib/faith-paths";
import { prayerPaths } from "../prayer/prayer-paths";

type ScripturePathContent = {
  title: string;
  intro: string;
  reflection: string;
  nextStep: string;
};

const scripturePathContent = {
  peace: {
    title: "Scripture for Peace",
    intro: "Continue your prayer path with a quiet word from Scripture.",
    reflection:
      "Let this verse become a place to pause. Peace can begin as a small act of trust before the pressure is fully resolved.",
    nextStep: "Read the verse slowly twice, then name one pressure before God.",
  },
  strength: {
    title: "Scripture for Strength",
    intro: "Return to Scripture when the next step feels heavy.",
    reflection:
      "Strength in Scripture is not only force. It can be endurance, patience, humility, and courage for what is actually in front of you.",
    nextStep: "Choose one faithful action you can take today without rushing.",
  },
  guidance: {
    title: "Scripture for Guidance",
    intro: "Let Scripture slow the moment before a decision.",
    reflection:
      "Wisdom begins with asking. This path gives you room to bring a decision before God without forcing instant clarity.",
    nextStep: "Write the decision in one sentence, then pray for wisdom before moving.",
  },
  gratitude: {
    title: "Scripture for Gratitude",
    intro: "Use Scripture to notice grace in the middle of an ordinary day.",
    reflection:
      "Gratitude does not erase difficulty. It trains the heart to see that God has not stopped giving good gifts.",
    nextStep: "Name one gift from today and thank God for it specifically.",
  },
  healing: {
    title: "Scripture for Healing",
    intro: "Receive a gentle Scripture moment for pain, care, and hope.",
    reflection:
      "This path is a comfort, not a medical promise. Let the verse remind you that God is near while you seek wise care and support.",
    nextStep: "Name what hurts, then choose one safe source of support to reach toward.",
  },
  forgiveness: {
    title: "Scripture for Forgiveness",
    intro: "Let Scripture guide you toward mercy with honesty.",
    reflection:
      "Forgiveness moves with truth and grace. It does not deny harm, but it opens a way toward mercy, repair, and release.",
    nextStep: "Name one place where mercy, confession, or careful repair is needed.",
  },
  anxiety: {
    title: "Scripture for Anxiety",
    intro: "Let Scripture help you slow down and pray honestly.",
    reflection:
      "Anxious thoughts can be brought into prayer one request at a time. You do not have to solve everything before turning to God.",
    nextStep: "Write down one concern and one small next step for today.",
  },
  family: {
    title: "Scripture for Family",
    intro: "Bring your home, relationships, and loved ones into Scripture.",
    reflection:
      "Family prayer can be simple and specific. Hold people before God by name and ask for patience, unity, and practical love.",
    nextStep: "Pray for one person by name and consider one concrete kindness.",
  },
} as const satisfies Record<FaithPathSlug, ScripturePathContent>;

export type ScripturePath = ScripturePathContent & {
  slug: FaithPathSlug;
  intention: string;
  verse: {
    reference: string;
    text: string;
    translation: "World English Bible";
  };
  prayerHref: string;
  jewelryHref: string;
};

export const scripturePathKeys = faithPathSlugs;

export const scripturePathCards = scripturePathKeys.map((key) => ({
  slug: key,
  title: faithPaths[key].title,
  description: faithPaths[key].description,
  href: faithPaths[key].scriptureRoute,
}));

export function getScripturePath(slug: string): ScripturePath | undefined {
  const key = slug as FaithPathSlug;
  const faithPath = faithPaths[key];
  const prayerPath = prayerPaths[key];
  const content = scripturePathContent[key];

  if (!faithPath || !prayerPath || !content) {
    return undefined;
  }

  return {
    slug: key,
    intention: prayerPath.intention,
    verse: prayerPath.verse,
    prayerHref: faithPath.prayerRoute,
    jewelryHref: faithPath.jewelryRoute,
    ...content,
  };
}
