export type PrayerSlug =
  | "morning"
  | "peace"
  | "strength"
  | "protection"
  | "guidance"
  | "gratitude"
  | "before-sleep"
  | "hope"
  | "forgiveness"
  | "anxiety";

export type PrayerGroupKey =
  | "day"
  | "peace"
  | "strength"
  | "trust"
  | "gratitude";

export type PrayerPath = {
  slug: PrayerSlug;
  title: string;
  shortTitle: string;
  description: string;
  theme: string;
  group: PrayerGroupKey;
  relatedBible: {
    label: string;
    href: string;
    description: string;
  };
  beforeYouPray: string;
  beforeHeading: string;
  prayerHeading: string;
  reflectionHeading: string;
  prayer: string[];
  reflectionPrompt: string;
  smallNextStep: string;
  relatedFaithQuizPath: string;
  symbolReminder: string;
};

export const prayerGroups = [
  {
    key: "day",
    title: "Begin and end the day",
    description: "Simple prayers for receiving the morning and releasing the night.",
  },
  {
    key: "peace",
    title: "Peace and anxiety",
    description: "Honest prayers for restlessness, anxious thoughts, and comfort.",
  },
  {
    key: "strength",
    title: "Strength and hope",
    description: "Prayer for courage, patient endurance, and renewed hope.",
  },
  {
    key: "trust",
    title: "Trust and guidance",
    description: "Careful prayers for wisdom, protection, and faithful decisions.",
  },
  {
    key: "gratitude",
    title: "Gratitude and forgiveness",
    description: "Prayers for receiving grace and practicing mercy with honesty.",
  },
] as const satisfies readonly {
  key: PrayerGroupKey;
  title: string;
  description: string;
}[];

export const prayerPaths = {
  morning: {
    slug: "morning",
    title: "Morning Prayer",
    shortTitle: "Morning",
    description:
      "Begin the day with gratitude, attention, and a quiet request for faithful steps.",
    theme: "Morning, gratitude, and faithful attention",
    group: "day",
    relatedBible: {
      label: "Genesis 1",
      href: "/bible/genesis/1",
      description:
        "Genesis 1 begins with creation and the goodness of what God makes.",
    },
    beforeYouPray:
      "Take one slow breath. Let the day be received before it is managed. You do not need to solve the whole day in this moment.",
    beforeHeading: "Begin the day with honesty.",
    prayerHeading: "A morning prayer",
    reflectionHeading: "Carry this into the day.",
    prayer: [
      "Lord, thank You for the gift of this morning and for the breath that begins this day.",
      "Help me notice what is good without ignoring what is difficult. Give me patience for what remains unresolved, courage for what is necessary, and humility for what I cannot control.",
      "Guide my words, my work, my attention, and my relationships. Let me move through this day with honesty, mercy, and a heart that stays open to You.",
      "When I become hurried, slow me down. When I become distracted, bring me back. When I become discouraged, remind me that one faithful step is enough for the moment in front of me.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one part of today you want to receive with gratitude instead of rushing past it?",
    smallNextStep:
      "Choose one ordinary action today and do it with prayerful attention.",
    relatedFaithQuizPath: "/start/gratitude",
    symbolReminder:
      "A simple faith symbol may help some people remember gratitude and prayer during ordinary tasks.",
  },
  peace: {
    slug: "peace",
    title: "Prayer for Peace",
    shortTitle: "Peace",
    description:
      "A quiet prayer for a restless heart, written for comfort without denying pressure.",
    theme: "Peace, comfort, and a settled heart",
    group: "peace",
    relatedBible: {
      label: "Psalm 23",
      href: "/bible/psalms/23",
      description:
        "Psalm 23 gives peaceful language for God's shepherd-like care.",
    },
    beforeYouPray:
      "Name what feels restless without judging yourself for feeling it. Peace can begin as a small turn toward God before circumstances change.",
    beforeHeading: "Make room for quiet.",
    prayerHeading: "A prayer for peace",
    reflectionHeading: "Notice what you are carrying.",
    prayer: [
      "Lord, I bring You the noise inside me and the pressure around me.",
      "Meet me with Your mercy. Help my heart become honest and still, not because everything is easy, but because I am not alone before You.",
      "Teach me to release what I cannot control, to carry what is mine with patience, and to ask for help where help is needed.",
      "Let Your peace shape my breathing, my thoughts, my words, and the next small step I take.",
      "Amen.",
    ],
    reflectionPrompt:
      "What pressure can you name honestly before God instead of carrying it silently?",
    smallNextStep:
      "Write down one concern, pray over it slowly, and take one calm action.",
    relatedFaithQuizPath: "/start/peace",
    symbolReminder:
      "A faith symbol can remind some people to pause and pray, but it is never a source or guarantee of peace.",
  },
  strength: {
    slug: "strength",
    title: "Prayer for Strength",
    shortTitle: "Strength",
    description:
      "A prayer for courage, patience, and endurance for the next faithful step.",
    theme: "Strength, endurance, and courage",
    group: "strength",
    relatedBible: {
      label: "Isaiah 40",
      href: "/bible/isaiah/40",
      description:
        "Isaiah 40 speaks comfort to weary people and points toward renewed strength.",
    },
    beforeYouPray:
      "Let strength mean enough grace for the next step, not pressure to carry the whole road at once.",
    beforeHeading: "Name where you feel weak.",
    prayerHeading: "A prayer for strength",
    reflectionHeading: "Choose one faithful step.",
    prayer: [
      "Lord, I feel the weight of what is in front of me.",
      "Give me strength that is patient, humble, and steady. Help me not confuse courage with pretending I am untouched by weariness.",
      "Give me enough endurance for the next faithful step, enough wisdom to rest when I need rest, and enough honesty to ask for support when I should not walk alone.",
      "Hold me in Your mercy as I keep going with care.",
      "Amen.",
    ],
    reflectionPrompt:
      "Where do you need strength for one faithful action rather than the whole road at once?",
    smallNextStep:
      "Choose one small responsibility and do it slowly, prayerfully, and without self-pressure.",
    relatedFaithQuizPath: "/start/strength",
    symbolReminder:
      "A symbol of strength may serve as a reminder to pray for courage and depend on God through hard days.",
  },
  protection: {
    slug: "protection",
    title: "Prayer for Protection",
    shortTitle: "Protection",
    description:
      "A careful prayer for God's care, wisdom, courage, and safe support.",
    theme: "Trust, refuge, and wise care",
    group: "trust",
    relatedBible: {
      label: "Psalm 91",
      href: "/bible/psalms/91",
      description:
        "Psalm 91 gives strong language for refuge and trust without being treated as a formula.",
    },
    beforeYouPray:
      "Pray for God's care with trust and humility. This prayer does not promise certain safety or turn faith into a charm.",
    beforeHeading: "Bring your fears into prayer.",
    prayerHeading: "A prayer for protection and trust",
    reflectionHeading: "Remember what is in your hands.",
    prayer: [
      "Lord, I ask for Your care in places where I feel exposed, uncertain, or afraid.",
      "Give me courage without recklessness, trust without denial, and wisdom for the choices I can make today.",
      "Lead me toward safe support, truthful counsel, and careful boundaries where they are needed.",
      "Keep my heart from fear-based promises. Teach me to rest in Your mercy while also walking with practical wisdom.",
      "Amen.",
    ],
    reflectionPrompt:
      "Where do you need wisdom, courage, a boundary, or help from a trusted person today?",
    smallNextStep:
      "Name one wise protective action, such as asking for help, slowing down, or setting a careful boundary.",
    relatedFaithQuizPath: "/start/protection",
    symbolReminder:
      "A Christian symbol may remind some people to pray and seek wisdom, but it should never be treated as a source of protection or power.",
  },
  guidance: {
    slug: "guidance",
    title: "Prayer for Guidance",
    shortTitle: "Guidance",
    description:
      "A prayer for wisdom, patience, and clarity before the next decision.",
    theme: "Wisdom, guidance, and patient decisions",
    group: "trust",
    relatedBible: {
      label: "Proverbs 3",
      href: "/bible/proverbs/3",
      description:
        "Proverbs 3 invites trust, humility, and wisdom before action.",
    },
    beforeYouPray:
      "Bring the decision into the open. You do not have to force instant certainty in one anxious moment.",
    beforeHeading: "Slow down before deciding.",
    prayerHeading: "A prayer for guidance",
    reflectionHeading: "Listen before moving.",
    prayer: [
      "Father, I bring this decision before You with honesty.",
      "Quiet the noise that makes me rush. Help me recognize what is loving, truthful, wise, and faithful.",
      "Give me humility to seek counsel, patience to wait when waiting is needed, and courage to move when the next step becomes clear.",
      "Guide my motives as much as my actions, and keep me from choosing out of fear alone.",
      "Amen.",
    ],
    reflectionPrompt:
      "What decision needs prayer, counsel, or patience before you move?",
    smallNextStep:
      "Write the decision in one sentence, then name one wise question to ask before acting.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A symbol of guidance may remind some people to pause, pray, and seek wisdom before choosing.",
  },
  gratitude: {
    slug: "gratitude",
    title: "Prayer for Gratitude",
    shortTitle: "Gratitude",
    description:
      "A prayer for noticing grace without denying difficulty or grief.",
    theme: "Gratitude, grace, and attention",
    group: "gratitude",
    relatedBible: {
      label: "Philippians 4",
      href: "/bible/philippians/4",
      description:
        "Philippians 4 brings prayer, thanksgiving, and peace into the same room.",
    },
    beforeYouPray:
      "Gratitude is not denial. Let it become a truthful act of noticing what is still good.",
    beforeHeading: "Look for grace in ordinary things.",
    prayerHeading: "A prayer of gratitude",
    reflectionHeading: "Name what you received.",
    prayer: [
      "Lord, open my eyes to grace already present in this day.",
      "Help me give thanks without pretending everything is easy. Let gratitude make me more honest, not less honest.",
      "Thank You for ordinary gifts: breath, provision, kindness, beauty, shelter, friendship, Scripture, and moments of quiet I might otherwise miss.",
      "Teach me to receive what is good with humility and to share goodness with others where I can.",
      "Amen.",
    ],
    reflectionPrompt:
      "What small gift, person, provision, or moment can you thank God for today?",
    smallNextStep:
      "Name one specific gift and, if possible, express thanks to someone connected to it.",
    relatedFaithQuizPath: "/start/gratitude",
    symbolReminder:
      "A symbol of gratitude may help some people remember to notice grace and give thanks in ordinary moments.",
  },
  "before-sleep": {
    slug: "before-sleep",
    title: "Prayer Before Sleep",
    shortTitle: "Before Sleep",
    description:
      "End the day by naming what you carried and entrusting tomorrow to God.",
    theme: "Rest, release, and trust before sleep",
    group: "day",
    relatedBible: {
      label: "Psalm 23",
      href: "/bible/psalms/23",
      description:
        "Psalm 23 gives language for rest, guidance, and God's care.",
    },
    beforeYouPray:
      "Let the day end without needing to finish every thought. Prayer can become a gentle release.",
    beforeHeading: "Release the day gently.",
    prayerHeading: "A prayer before sleep",
    reflectionHeading: "Rest without carrying everything.",
    prayer: [
      "Lord, I place this day before You.",
      "Thank You for what was good. Have mercy over what was hard. Forgive what needs forgiveness, heal what needs care, and teach me through what I did not understand.",
      "I release the work I cannot finish tonight, the worries I cannot solve tonight, and the conversations I cannot redo tonight.",
      "Guard my rest with Your peace. Prepare my heart to receive tomorrow with patience and trust.",
      "Amen.",
    ],
    reflectionPrompt:
      "What part of today do you need to release before sleep?",
    smallNextStep:
      "Write one sentence of release, then let your phone or task list rest for the night.",
    relatedFaithQuizPath: "/start/peace",
    symbolReminder:
      "A quiet faith reminder near bedtime may help some people remember to pray and release the day.",
  },
  hope: {
    slug: "hope",
    title: "Prayer for Hope",
    shortTitle: "Hope",
    description:
      "A prayer for seasons of waiting, heaviness, or longing for renewed courage.",
    theme: "Hope, comfort, and patient waiting",
    group: "strength",
    relatedBible: {
      label: "Romans 8",
      href: "/bible/romans/8",
      description:
        "Romans 8 holds weakness, waiting, hope, and God's love together.",
    },
    beforeYouPray:
      "Hope does not require pretending pain is small. Bring longing before God without forcing a quick answer.",
    beforeHeading: "Speak honestly about discouragement.",
    prayerHeading: "A prayer for hope",
    reflectionHeading: "Look for one small sign of light.",
    prayer: [
      "God of mercy, meet me in the place where hope feels fragile.",
      "Help me tell the truth about what hurts while still making room for Your comfort.",
      "Renew courage in me slowly and honestly. Give me patience for waiting, wisdom for the next small step, and openness to support from safe people.",
      "Let hope become a quiet thread I can hold today, even before everything is resolved.",
      "Amen.",
    ],
    reflectionPrompt:
      "What ache or longing do you need to name before God without pretending it is simple?",
    smallNextStep:
      "Reach toward one safe source of support or choose one gentle practice that helps you stay grounded today.",
    relatedFaithQuizPath: "/start/hope",
    symbolReminder:
      "A symbol of hope may help some people remember prayer and Scripture during a difficult season, without making outcome claims.",
  },
  forgiveness: {
    slug: "forgiveness",
    title: "Prayer for Forgiveness",
    shortTitle: "Forgiveness",
    description:
      "A prayer for mercy, honesty, confession, repair, and wise release.",
    theme: "Forgiveness, mercy, and careful repair",
    group: "gratitude",
    relatedBible: {
      label: "1 Corinthians 13",
      href: "/bible/1-corinthians/13",
      description:
        "1 Corinthians 13 describes love as patient, humble, truthful, and enduring.",
    },
    beforeYouPray:
      "Forgiveness does not minimize harm. Let this prayer hold mercy and truth together.",
    beforeHeading: "Come with truth and humility.",
    prayerHeading: "A prayer for forgiveness",
    reflectionHeading: "Choose repair where you can.",
    prayer: [
      "Lord, bring me into Your mercy with honesty.",
      "Where I need forgiveness, give me courage to confess without hiding. Where I need to forgive, give me wisdom, truth, and grace without denying what mattered.",
      "Teach me the difference between release and pretending, between mercy and avoiding truth, between repair and rushing past pain.",
      "Help me receive grace and practice it carefully, with humility and love.",
      "Amen.",
    ],
    reflectionPrompt:
      "Where might you need confession, mercy, a boundary, or careful repair?",
    smallNextStep:
      "Name one honest confession, one careful boundary, or one act of repair that can be approached wisely.",
    relatedFaithQuizPath: "/start/forgiveness",
    symbolReminder:
      "A symbol of forgiveness may remind some people of grace received and extended with wisdom.",
  },
  anxiety: {
    slug: "anxiety",
    title: "Prayer for Anxiety",
    shortTitle: "Anxiety",
    description:
      "A grounded prayer for anxious thoughts, honest requests, and one small next step.",
    theme: "Anxiety, prayer, and grounded trust",
    group: "peace",
    relatedBible: {
      label: "Philippians 4",
      href: "/bible/philippians/4",
      description:
        "Philippians 4 gives anxious thoughts a place to be named before God in prayer.",
    },
    beforeYouPray:
      "If anxiety feels intense or unsafe, seek appropriate support. This prayer is for reflection and grounding, not a replacement for care.",
    beforeHeading: "Breathe before you begin.",
    prayerHeading: "A prayer for anxiety",
    reflectionHeading: "Take the next grounded step.",
    prayer: [
      "Lord, my thoughts feel crowded, and my body may feel tense or tired.",
      "Help me name what is here without shame. Receive my requests one by one, even when I do not have polished words.",
      "Steady me with Your presence. Give me wisdom to ask for help when I need it, courage to take one grounded step, and gentleness toward myself in this moment.",
      "Let gratitude become one small window of light without forcing me to deny what is hard.",
      "Amen.",
    ],
    reflectionPrompt:
      "What concern can you name before God without solving all of it today?",
    smallNextStep:
      "Write one concern and one next step. Leave the rest for later if you can.",
    relatedFaithQuizPath: "/start/peace",
    symbolReminder:
      "A symbol of steadiness may remind some people to pause and pray, not to avoid needed care.",
  },
} as const satisfies Record<PrayerSlug, PrayerPath>;

export const prayerPathKeys = Object.keys(prayerPaths) as PrayerSlug[];

export const groupedPrayerPaths = prayerGroups
  .map((group) => ({
    ...group,
    prayers: prayerPathKeys
      .map((slug) => prayerPaths[slug])
      .filter((prayer) => prayer.group === group.key),
  }))
  .filter((group) => group.prayers.length > 0);

export function getPrayerPath(slug: string): PrayerPath | undefined {
  return prayerPaths[slug as PrayerSlug];
}
