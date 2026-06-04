import { faithPathSlugs, type FaithPathSlug } from "@/lib/faith-paths";

export type JewelryIntention = {
  slug: FaithPathSlug;
  futureDirection: string;
  intro: string;
  represents: string;
  placeholders: string[];
};

export const jewelryIntentions = {
  peace: {
    slug: "peace",
    futureDirection: "A quiet symbol of peace for daily wear.",
    intro:
      "Peace pieces may later help someone remember to slow down, pray honestly, and receive each day with a calmer heart.",
    represents:
      "A symbol of peace could represent stillness, trust, and the choice to bring pressure before God.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  strength: {
    slug: "strength",
    futureDirection: "A simple symbol of courage and endurance.",
    intro:
      "Strength pieces may later serve as quiet reminders to take the next faithful step with patience and courage.",
    represents:
      "A symbol of strength could represent perseverance, faithful effort, and dependence on God through hard days.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  guidance: {
    slug: "guidance",
    futureDirection: "A thoughtful symbol for discernment and prayerful choices.",
    intro:
      "Guidance pieces may later help someone remember to pause, ask for wisdom, and move with care.",
    represents:
      "A symbol of guidance could represent wisdom, humility, and a willingness to listen before acting.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  gratitude: {
    slug: "gratitude",
    futureDirection: "A warm symbol of thanks and remembrance.",
    intro:
      "Gratitude pieces may later serve as small reminders to notice grace and give thanks in ordinary moments.",
    represents:
      "A symbol of gratitude could represent humility, attention, and the practice of naming gifts with care.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  healing: {
    slug: "healing",
    futureDirection: "A tender symbol of hope while seeking wise care.",
    intro:
      "Healing pieces may later be framed as reminders to pray, seek support, and stay close to God in painful seasons.",
    represents:
      "A symbol connected to healing could represent comfort, care, and hope, without making any claim of physical or spiritual power.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  forgiveness: {
    slug: "forgiveness",
    futureDirection: "A simple symbol of grace received and extended.",
    intro:
      "Forgiveness pieces may later help someone remember mercy, repair, and the courage to walk humbly.",
    represents:
      "A symbol of forgiveness could represent mercy, truth, and the slow work of grace in relationships.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  anxiety: {
    slug: "anxiety",
    futureDirection: "A quiet symbol of steadiness and trust.",
    intro:
      "Anxiety-related pieces may later serve as gentle reminders to pause, pray, and move through the day one small step at a time.",
    represents:
      "A symbol for anxiety could represent steadiness, honest prayer, and the decision to ask for help when needed.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
  family: {
    slug: "family",
    futureDirection: "A meaningful symbol for love, home, and care.",
    intro:
      "Family pieces may later help someone carry a quiet reminder to pray for loved ones and practice patient love.",
    represents:
      "A symbol of family could represent love, intercession, patience, and practical care for the people closest to us.",
    placeholders: ["Necklace", "Bracelet", "Ring"],
  },
} as const satisfies Record<FaithPathSlug, JewelryIntention>;

export type JewelryIntentionKey = FaithPathSlug;

export const jewelryIntentionKeys = faithPathSlugs;

export function getJewelryIntention(slug: string): JewelryIntention | undefined {
  return jewelryIntentions[slug as JewelryIntentionKey];
}
