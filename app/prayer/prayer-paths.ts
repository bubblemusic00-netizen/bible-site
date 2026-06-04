import { faithPathSlugs, type FaithPathSlug } from "@/lib/faith-paths";

export type PrayerPath = {
  headline: string;
  intro: string;
  verse: {
    reference: string;
    text: string;
    translation: "World English Bible";
  };
  reflection: string;
  prayer: string;
  step: string;
  intention: string;
};

export const prayerPaths = {
  peace: {
    headline: "A prayer path for peace",
    intro: "Begin here when your thoughts feel noisy and your heart needs a gentle place to settle.",
    verse: {
      reference: "John 14:27",
      text: "Peace I leave with you. My peace I give to you; not as the world gives, I give to you. Don't let your heart be troubled, neither let it be fearful.",
      translation: "World English Bible",
    },
    reflection:
      "Peace in Christ is not pretending nothing is wrong. It is bringing what is troubled into the presence of Jesus and letting your heart become honest and still.",
    prayer:
      "Lord Jesus, meet me in this moment. Help me receive Your peace, release what I cannot control, and walk through today with trust.",
    step: "Write down one pressure you are carrying, then pray over it slowly.",
    intention: "peace",
  },
  strength: {
    headline: "A prayer path for strength",
    intro: "Begin here when you feel worn down, stretched thin, or unsure how to take the next faithful step.",
    verse: {
      reference: "Psalm 29:11",
      text: "Yahweh will give strength to his people. Yahweh will bless his people with peace.",
      translation: "World English Bible",
    },
    reflection:
      "Strength does not have to mean carrying everything alone. Sometimes it looks like receiving enough courage for the next small act of faithfulness.",
    prayer:
      "Lord, strengthen me for what is in front of me. Give me patience, courage, and humility for the next step.",
    step: "Choose one small task and do it with prayerful attention.",
    intention: "strength",
  },
  guidance: {
    headline: "A prayer path for guidance",
    intro: "Begin here when a choice feels heavy and you want to move with wisdom instead of hurry.",
    verse: {
      reference: "James 1:5",
      text: "But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.",
      translation: "World English Bible",
    },
    reflection:
      "Guidance begins with making room to ask. You do not have to force clarity in one anxious moment.",
    prayer:
      "Father, give me wisdom. Quiet the noise around this decision and help me recognize what is honest, loving, and faithful.",
    step: "Write the decision in one sentence, then pause before acting.",
    intention: "wisdom",
  },
  gratitude: {
    headline: "A prayer path for gratitude",
    intro: "Begin here when you want to return your attention to grace already present in the day.",
    verse: {
      reference: "1 Thessalonians 5:18",
      text: "In everything give thanks, for this is the will of God in Christ Jesus toward you.",
      translation: "World English Bible",
    },
    reflection:
      "Gratitude does not deny hardship. It helps your heart notice that pain is not the only thing present.",
    prayer:
      "Lord, open my eyes to Your gifts. Teach me to receive today with humility, honesty, and thanks.",
    step: "Name one person, provision, or moment you can thank God for today.",
    intention: "gratitude",
  },
  healing: {
    headline: "A prayer path for healing",
    intro: "Begin here when something hurts and you need mercy, support, and a quiet place to pray.",
    verse: {
      reference: "Psalm 34:18",
      text: "Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.",
      translation: "World English Bible",
    },
    reflection:
      "This path is for comfort and prayerful support. It does not replace wise care, medical help, counseling, or trusted community when those are needed.",
    prayer:
      "Lord, be near to what hurts. Hold me with mercy, guide me toward wise care, and help me not feel alone in this.",
    step: "Name one safe source of support you can reach toward today.",
    intention: "care",
  },
  forgiveness: {
    headline: "A prayer path for forgiveness",
    intro: "Begin here when you need mercy, humility, release, or courage to repair what can be repaired.",
    verse: {
      reference: "Ephesians 4:32",
      text: "And be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you.",
      translation: "World English Bible",
    },
    reflection:
      "Forgiveness is not pretending harm did not matter. It is a holy movement toward mercy, truth, and wise repair.",
    prayer:
      "Lord, lead me into mercy without hiding from truth. Help me receive forgiveness and extend it with wisdom.",
    step: "Name one honest confession or one careful act of repair.",
    intention: "mercy",
  },
  anxiety: {
    headline: "A prayer path for anxiety",
    intro: "Begin here when your mind is racing and you need a gentle, grounded way to pray.",
    verse: {
      reference: "Philippians 4:6",
      text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.",
      translation: "World English Bible",
    },
    reflection:
      "Prayer gives anxiety a place to be named before God. You can ask for help, breathe slowly, and take only the next small step.",
    prayer:
      "Lord, steady me with Your presence. Help me name what feels heavy, ask for help when needed, and move one step at a time.",
    step: "Write down the next small step and leave the rest for later.",
    intention: "steadiness",
  },
  family: {
    headline: "A prayer path for family",
    intro: "Begin here when you are carrying loved ones, home, relationships, or the desire for more tenderness.",
    verse: {
      reference: "Psalm 133:1",
      text: "See how good and how pleasant it is for brothers to live together in unity!",
      translation: "World English Bible",
    },
    reflection:
      "Family prayer can be simple: hold people before God by name and ask for patience, wisdom, mercy, and love.",
    prayer:
      "Lord, bless the people closest to me. Teach me to love with patience, speak with care, and serve with grace.",
    step: "Pray for one person by name, then consider one practical kindness.",
    intention: "love",
  },
} as const satisfies Record<FaithPathSlug, PrayerPath>;

export type PrayerPathKey = FaithPathSlug;

export const prayerPathKeys = faithPathSlugs;

export function getPrayerPath(slug: string): PrayerPath | undefined {
  return prayerPaths[slug as PrayerPathKey];
}
