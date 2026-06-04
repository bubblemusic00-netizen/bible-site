export const faithPaths = {
  peace: {
    slug: "peace",
    title: "Peace",
    shortLabel: "Peace",
    description: "Quiet a restless heart and slow down with God.",
    finderIntro:
      "Begin with a quieter pace. This path helps you bring a restless heart into prayer, Scripture, and a simple reminder of faith.",
    startRoute: "/start/peace",
    prayerRoute: "/prayer/peace",
    scriptureRoute: "/bible/path/peace",
    jewelryRoute: "/jewelry/peace",
  },
  strength: {
    slug: "strength",
    title: "Strength",
    shortLabel: "Strength",
    description: "Stand steady through a hard or tiring day.",
    finderIntro:
      "You do not have to carry the whole road at once. This path helps you ask for strength for the next faithful step.",
    startRoute: "/start/strength",
    prayerRoute: "/prayer/strength",
    scriptureRoute: "/bible/path/strength",
    jewelryRoute: "/jewelry/strength",
  },
  guidance: {
    slug: "guidance",
    title: "Guidance",
    shortLabel: "Guidance",
    description: "Ask for wisdom before the next decision.",
    finderIntro:
      "When the next step feels unclear, this path gives you space to pause, ask for wisdom, and move with care.",
    startRoute: "/start/guidance",
    prayerRoute: "/prayer/guidance",
    scriptureRoute: "/bible/path/guidance",
    jewelryRoute: "/jewelry/guidance",
  },
  gratitude: {
    slug: "gratitude",
    title: "Gratitude",
    shortLabel: "Gratitude",
    description: "Notice what is still good and give thanks.",
    finderIntro:
      "Gratitude can gently reorder the heart. This path helps you notice grace and respond with prayerful thanks.",
    startRoute: "/start/gratitude",
    prayerRoute: "/prayer/gratitude",
    scriptureRoute: "/bible/path/gratitude",
    jewelryRoute: "/jewelry/gratitude",
  },
  healing: {
    slug: "healing",
    title: "Healing",
    shortLabel: "Healing",
    description: "Bring pain honestly before God with care.",
    finderIntro:
      "This is a careful place to bring pain before God. This path offers comfort, prayer, and hope without pretending the ache is simple.",
    startRoute: "/start/healing",
    prayerRoute: "/prayer/healing",
    scriptureRoute: "/bible/path/healing",
    jewelryRoute: "/jewelry/healing",
  },
  forgiveness: {
    slug: "forgiveness",
    title: "Forgiveness",
    shortLabel: "Forgiveness",
    description: "Return to grace with honesty and courage.",
    finderIntro:
      "Forgiveness often begins with honesty. This path helps you turn toward mercy, repair, and grace with courage.",
    startRoute: "/start/forgiveness",
    prayerRoute: "/prayer/forgiveness",
    scriptureRoute: "/bible/path/forgiveness",
    jewelryRoute: "/jewelry/forgiveness",
  },
  anxiety: {
    slug: "anxiety",
    title: "Anxiety",
    shortLabel: "Anxiety",
    description: "Slow down when anxious thoughts feel close.",
    finderIntro:
      "When anxious thoughts press in, begin small. This path helps you slow down, pray honestly, and take one grounded step.",
    startRoute: "/start/anxiety",
    prayerRoute: "/prayer/anxiety",
    scriptureRoute: "/bible/path/anxiety",
    jewelryRoute: "/jewelry/anxiety",
  },
  family: {
    slug: "family",
    title: "Family",
    shortLabel: "Family",
    description: "Pray over the people closest to you.",
    finderIntro:
      "Bring the people closest to you into a quiet moment of prayer. This path helps you hold family with love, patience, and faith.",
    startRoute: "/start/family",
    prayerRoute: "/prayer/family",
    scriptureRoute: "/bible/path/family",
    jewelryRoute: "/jewelry/family",
  },
} as const;

export type FaithPathSlug = keyof typeof faithPaths;

export const faithPathSlugs = Object.keys(faithPaths) as FaithPathSlug[];

const faithPathLabels = faithPathSlugs.map((slug) =>
  faithPaths[slug].shortLabel.toLowerCase(),
);

export const faithPathShortList = `${faithPathLabels
  .slice(0, -1)
  .join(", ")}, or ${faithPathLabels[faithPathLabels.length - 1]}`;

export function getFaithPathBySlug(slug: string): (typeof faithPaths)[FaithPathSlug] | undefined {
  return faithPaths[slug as FaithPathSlug];
}
