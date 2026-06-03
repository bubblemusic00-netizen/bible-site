export const jewelryCategories = {
  "cross-necklaces": {
    name: "Cross Necklaces",
    description:
      "Quiet future pieces centered on remembrance, humility, and faith.",
    detail:
      "Cross necklaces may later offer a subtle daily reminder to keep Christ near the center of ordinary days.",
  },
  "faith-bracelets": {
    name: "Faith Bracelets",
    description:
      "Understated future reminders for prayer, hope, and attention.",
    detail:
      "Faith bracelets may later serve as daily reminders to pause, pray, and return attention to God.",
  },
  "christian-rings": {
    name: "Christian Rings",
    description:
      "Refined future pieces shaped around commitment and remembrance.",
    detail:
      "Christian rings may later be designed as tasteful reminders of commitment, gratitude, and faith.",
  },
  "gift-sets": {
    name: "Gift Sets",
    description:
      "Thoughtful future gifts for encouragement and meaningful moments.",
    detail:
      "Gift sets may later help visitors share encouragement through tasteful Christian reminders.",
  },
} as const;

export type JewelryCategoryKey = keyof typeof jewelryCategories;

export const jewelryCategoryKeys = Object.keys(
  jewelryCategories,
) as JewelryCategoryKey[];
