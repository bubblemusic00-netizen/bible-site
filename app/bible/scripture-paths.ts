import { faithPathSlugs, faithPaths, type FaithPathSlug } from "@/lib/faith-paths";

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

const scripturePathMeta = {
  peace: {
    intention: "peace",
    verse: {
      reference: "Psalm 23:1",
      text: "Yahweh is my shepherd: I shall lack nothing.",
      translation: "World English Bible",
    },
  },
  strength: {
    intention: "strength",
    verse: {
      reference: "Isaiah 40:31",
      text: "But those who wait for Yahweh will renew their strength.",
      translation: "World English Bible",
    },
  },
  guidance: {
    intention: "wisdom",
    verse: {
      reference: "Proverbs 3:5",
      text: "Trust in Yahweh with all your heart, and don't lean on your own understanding.",
      translation: "World English Bible",
    },
  },
  gratitude: {
    intention: "gratitude",
    verse: {
      reference: "Genesis 1:31",
      text: "God saw everything that he had made, and, behold, it was very good.",
      translation: "World English Bible",
    },
  },
  healing: {
    intention: "care",
    verse: {
      reference: "Isaiah 40:29",
      text: "He gives power to the weak. He increases the strength of him who has no might.",
      translation: "World English Bible",
    },
  },
  forgiveness: {
    intention: "mercy",
    verse: {
      reference: "1 Corinthians 13:4",
      text: "Love is patient and is kind; love doesn't envy.",
      translation: "World English Bible",
    },
  },
  anxiety: {
    intention: "steadiness",
    verse: {
      reference: "Philippians 4:6",
      text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.",
      translation: "World English Bible",
    },
  },
  family: {
    intention: "love",
    verse: {
      reference: "1 Corinthians 13:7",
      text: "Bears all things, believes all things, hopes all things, and endures all things.",
      translation: "World English Bible",
    },
  },
} as const satisfies Record<
  FaithPathSlug,
  {
    intention: string;
    verse: {
      reference: string;
      text: string;
      translation: "World English Bible";
    };
  }
>;

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
  const pathMeta = scripturePathMeta[key];
  const content = scripturePathContent[key];

  if (!faithPath || !pathMeta || !content) {
    return undefined;
  }

  return {
    slug: key,
    intention: pathMeta.intention,
    verse: pathMeta.verse,
    prayerHref: faithPath.prayerRoute,
    jewelryHref: faithPath.jewelryRoute,
    ...content,
  };
}
