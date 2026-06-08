import {
  startFaithPathSlugs,
  type StartFaithPathSlug,
} from "@/lib/faith-paths";

export type JewelryIntention = {
  slug: StartFaithPathSlug;
  pageTitle: string;
  futureDirection: string;
  intro: string;
  represents: string;
  relatedTheme: string;
  scriptureReference: string;
  prayerGuidance: string;
  reflectionPrompt: string;
  symbolReminder: string;
};

export const jewelryIntentions = {
  peace: {
    slug: "peace",
    pageTitle: "Faith Symbol Reminder for Peace",
    futureDirection: "A quiet reminder to pause and pray for peace.",
    intro:
      "Peace reminders can point the heart back toward prayer, Scripture, and a slower pace when the day feels unsettled.",
    represents:
      "A symbol connected to peace may represent stillness, trust, and the choice to bring pressure before God.",
    relatedTheme: "Peace, prayer, and trust",
    scriptureReference: "John 14:27",
    prayerGuidance:
      "Use the reminder as a cue to breathe slowly, name one pressure, and pray honestly for Christ's peace.",
    reflectionPrompt:
      "What pressure do I need to bring before God instead of carrying alone?",
    symbolReminder:
      "A peace symbol can remind someone to pray and return to Scripture during the day.",
  },
  strength: {
    slug: "strength",
    pageTitle: "Christian Symbol Reminder for Strength",
    futureDirection: "A simple reminder of courage and endurance.",
    intro:
      "Strength reminders can help someone remember to take the next faithful step with patience, humility, and prayer.",
    represents:
      "A symbol of strength may represent perseverance, faithful effort, and dependence on God through hard days.",
    relatedTheme: "Strength, endurance, and courage",
    scriptureReference: "Psalm 29:11",
    prayerGuidance:
      "Let the reminder lead you to ask for courage for one faithful action, not pressure to carry everything at once.",
    reflectionPrompt:
      "Where do I need strength for the next step rather than the whole road?",
    symbolReminder:
      "A strength symbol can be a daily cue to pray for courage and depend on God.",
  },
  protection: {
    slug: "protection",
    pageTitle: "Faith Symbol Reminder for Protection",
    futureDirection: "A careful reminder to pray, seek wisdom, and move toward safe support.",
    intro:
      "Protection reminders can point someone toward prayer, wise choices, and trusted help without treating an object as spiritual protection.",
    represents:
      "A symbol connected to protection may represent God's care, courage, discernment, boundaries, and the choice to ask for help when needed.",
    relatedTheme: "Protection, wisdom, and safe support",
    scriptureReference: "Psalm 121",
    prayerGuidance:
      "Use the reminder as a cue to pray for God's care, choose wisdom, and reach toward safe support when needed.",
    reflectionPrompt:
      "Where do I need courage, wisdom, a boundary, or help from someone trustworthy today?",
    symbolReminder:
      "A protection reminder can point someone back to prayer and wise action, but it should never be treated as protective power.",
  },
  hope: {
    slug: "hope",
    pageTitle: "Christian Symbol Reminder for Hope",
    futureDirection: "A tender reminder to hold onto hope with prayer and care.",
    intro:
      "Hope reminders can help someone remember Scripture, prayer, community, and patient care during a hard or waiting season.",
    represents:
      "A symbol of hope may represent steadiness, endurance, comfort, and God's nearness without making healing or outcome claims.",
    relatedTheme: "Hope, endurance, and comfort",
    scriptureReference: "Psalm 34:18",
    prayerGuidance:
      "Let the reminder lead you to name what hurts, ask for mercy, and take one gentle step toward support.",
    reflectionPrompt:
      "What longing or ache do I need to bring before God with honesty today?",
    symbolReminder:
      "A hope symbol can remind someone to pray and seek care, not to expect an object to change an outcome.",
  },
  guidance: {
    slug: "guidance",
    pageTitle: "Faith Symbol Reminder for Guidance",
    futureDirection: "A thoughtful reminder to pause before decisions.",
    intro:
      "Guidance reminders can help someone slow down, ask for wisdom, and move with care before choosing.",
    represents:
      "A symbol of guidance may represent wisdom, humility, discernment, and a willingness to listen before acting.",
    relatedTheme: "Guidance, wisdom, and discernment",
    scriptureReference: "James 1:5",
    prayerGuidance:
      "Use the reminder as a cue to pause, pray for wisdom, and seek trusted counsel when needed.",
    reflectionPrompt:
      "What decision needs prayer, patience, or wise counsel before I move?",
    symbolReminder:
      "A guidance symbol can remind someone to pray and seek wisdom before acting.",
  },
  gratitude: {
    slug: "gratitude",
    pageTitle: "Christian Symbol Reminder for Gratitude",
    futureDirection: "A warm reminder to notice grace and give thanks.",
    intro:
      "Gratitude reminders can help someone notice gifts, name grace, and give thanks in ordinary moments.",
    represents:
      "A symbol of gratitude may represent humility, attention, and the practice of receiving the day with thanks.",
    relatedTheme: "Gratitude, attention, and thanks",
    scriptureReference: "1 Thessalonians 5:18",
    prayerGuidance:
      "Let the reminder lead you to name one specific gift and thank God without denying what still feels hard.",
    reflectionPrompt:
      "What small gift, person, provision, or moment can I thank God for today?",
    symbolReminder:
      "A gratitude symbol can remind someone to notice grace and practice thanks.",
  },
  healing: {
    slug: "healing",
    pageTitle: "Faith Symbol Reminder for Hope and Healing",
    futureDirection: "A tender reminder of hope while seeking wise care.",
    intro:
      "Hope and healing reminders can help someone remember prayer, support, and God's nearness in painful seasons.",
    represents:
      "A symbol connected to hope may represent comfort, care, and endurance without making physical or spiritual power claims.",
    relatedTheme: "Hope, comfort, and wise care",
    scriptureReference: "Psalm 34:18",
    prayerGuidance:
      "Use the reminder as a cue to pray honestly, seek support, and take a gentle next step toward care.",
    reflectionPrompt:
      "What pain or longing do I need to name before God with honesty?",
    symbolReminder:
      "A hope symbol can remind someone to pray and seek care, not to expect an object to heal.",
  },
  forgiveness: {
    slug: "forgiveness",
    pageTitle: "Christian Symbol Reminder for Forgiveness",
    futureDirection: "A simple reminder of grace received and extended.",
    intro:
      "Forgiveness reminders can help someone remember mercy, truth, humility, and careful repair.",
    represents:
      "A symbol of forgiveness may represent grace, confession, repair, release, and wise boundaries.",
    relatedTheme: "Forgiveness, mercy, and repair",
    scriptureReference: "Ephesians 4:32",
    prayerGuidance:
      "Let the reminder lead you to pray for mercy without ignoring truth, safety, or needed boundaries.",
    reflectionPrompt:
      "Where might I need confession, mercy, a boundary, or careful repair?",
    symbolReminder:
      "A forgiveness symbol can remind someone of grace and humility in relationships.",
  },
  anxiety: {
    slug: "anxiety",
    pageTitle: "Faith Symbol Reminder for Steadiness",
    futureDirection: "A quiet reminder to pause, pray, and take one small step.",
    intro:
      "Steadiness reminders can help someone slow down, pray honestly, and move through the day one small step at a time.",
    represents:
      "A symbol for steadiness may represent grounded prayer, asking for help, and returning to the present moment.",
    relatedTheme: "Anxiety, steadiness, and prayer",
    scriptureReference: "Philippians 4:6",
    prayerGuidance:
      "Use the reminder as a cue to name one concern before God and ask for help when needed.",
    reflectionPrompt:
      "What concern can I name before God without trying to solve everything today?",
    symbolReminder:
      "A steadiness symbol can remind someone to pause and pray, not to avoid needed care.",
  },
  family: {
    slug: "family",
    pageTitle: "Christian Symbol Reminder for Family",
    futureDirection: "A meaningful reminder to pray for loved ones.",
    intro:
      "Family reminders can help someone carry a quiet cue to pray for loved ones and practice patient love.",
    represents:
      "A symbol of family may represent intercession, patience, practical care, and love for the people closest to us.",
    relatedTheme: "Family, love, and intercession",
    scriptureReference: "Psalm 133:1",
    prayerGuidance:
      "Let the reminder lead you to pray for one person by name and consider one practical kindness.",
    reflectionPrompt:
      "Who can I pray for by name, and what patient act of love can I offer?",
    symbolReminder:
      "A family symbol can remind someone to pray for loved ones and practice care.",
  },
} as const satisfies Record<StartFaithPathSlug, JewelryIntention>;

export type JewelryIntentionKey = StartFaithPathSlug;

export const jewelryIntentionKeys = startFaithPathSlugs;

export function getJewelryIntention(slug: string): JewelryIntention | undefined {
  return jewelryIntentions[slug as JewelryIntentionKey];
}
