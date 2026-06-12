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
    scriptureRoute: "/bible/psalms/46",
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
    prayerRoute: "/prayer/courage",
    scriptureRoute: "/bible/matthew/11",
    jewelryRoute: "/jewelry/strength",
  },
  protection: {
    slug: "protection",
    title: "Protection",
    shortLabel: "Protection",
    description: "Pray for God's care, wisdom, courage, and safe support.",
    finderIntro:
      "When you feel vulnerable or uncertain, this path helps you pray for God's care and choose wise support without treating faith as a charm.",
    startRoute: "/start/protection",
    prayerRoute: "/prayer/protection",
    scriptureRoute: "/bible/psalms/121",
    jewelryRoute: "/jewelry/protection",
  },
  guidance: {
    slug: "guidance",
    title: "Guidance",
    shortLabel: "Guidance",
    description: "Ask for wisdom before the next decision.",
    finderIntro:
      "When the next step feels unclear, this path gives you space to pause, ask for wisdom, and move with care.",
    startRoute: "/start/guidance",
    prayerRoute: "/prayer/discernment",
    scriptureRoute: "/bible/james/1",
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
    scriptureRoute: "/bible/genesis/1",
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
    prayerRoute: "/prayer/hope",
    scriptureRoute: "/bible/isaiah/40",
    jewelryRoute: "/jewelry/healing",
  },
  hope: {
    slug: "hope",
    title: "Hope",
    shortLabel: "Hope",
    description: "Bring heaviness, waiting, or longing before God.",
    finderIntro:
      "When your heart feels heavy, this path offers Scripture, prayer, reflection, and a small next step toward hope without promising quick answers.",
    startRoute: "/start/hope",
    prayerRoute: "/prayer/hope",
    scriptureRoute: "/bible/romans/8",
    jewelryRoute: "/jewelry/hope",
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
    scriptureRoute: "/bible/1-corinthians/13",
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
    scriptureRoute: "/bible/philippians/4",
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
    scriptureRoute: "/bible/1-corinthians/13",
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

export const startFaithPaths = {
  peace: {
    slug: "peace",
    linkedFaithPathSlug: "peace",
    title: "Peace",
    description: "For a restless heart that needs to slow down with God.",
    carefulLine:
      "This path offers Scripture and prayer for peace; it does not promise that every pressure will disappear.",
    pastoralIntro:
      "Begin here when your thoughts feel noisy or your heart feels unsettled. This path helps you pause, read Scripture, pray honestly, and take one small peaceful step.",
    scriptureReference: "Psalm 46",
    scriptureContext:
      "Psalm 46 gives language for refuge, stillness, and trust when fear or pressure feels loud.",
    prayer:
      "Lord Jesus, meet me in this moment. Help me receive Your peace, release what I cannot control, and walk through today with trust.",
    reflectionPrompt:
      "What pressure am I carrying that I can name honestly before God today?",
    smallNextStep:
      "Write down one concern, pray over it slowly, and take one calm next step.",
    symbolReminder:
      "A Christian symbol of peace may help some people remember to pause, pray, and return to Scripture during the day.",
    startRoute: "/start/peace",
    prayerRoute: "/prayer/peace",
    scriptureRoute: "/bible/psalms/46",
    jewelryRoute: "/jewelry/peace",
  },
  strength: {
    slug: "strength",
    linkedFaithPathSlug: "strength",
    title: "Strength",
    description: "For a hard or tiring day when you need courage for the next step.",
    carefulLine:
      "This path asks for strength and endurance without pretending faith removes every burden.",
    pastoralIntro:
      "Begin here when you feel worn down or stretched thin. This path helps you ask for courage, patience, and enough strength for what is actually in front of you.",
    scriptureReference: "Matthew 11:28-30",
    scriptureContext:
      "Matthew 11:28-30 holds Jesus' invitation to come with weariness and learn His gentle way of rest.",
    prayer:
      "Lord, strengthen me for what is in front of me. Give me patience, courage, humility, and steadiness for the next faithful step.",
    reflectionPrompt:
      "Where do I need strength for one faithful action rather than the whole road at once?",
    smallNextStep:
      "Choose one small responsibility and do it with prayerful attention.",
    symbolReminder:
      "A symbol of strength may serve as a reminder to pray for courage and depend on God through hard days.",
    startRoute: "/start/strength",
    prayerRoute: "/prayer/courage",
    scriptureRoute: "/bible/matthew/11",
    jewelryRoute: "/jewelry/strength",
  },
  protection: {
    slug: "protection",
    linkedFaithPathSlug: "protection",
    title: "Protection",
    description: "For moments when you want courage, wisdom, and safe support.",
    carefulLine:
      "This path is a prayer for God's care and wisdom, not a guarantee that an object or ritual can protect you.",
    pastoralIntro:
      "Begin here when you feel vulnerable or concerned. This path helps you pray for God's care, seek wisdom, and move toward wise support without fear-based promises.",
    scriptureReference: "Psalm 121",
    scriptureContext:
      "Psalm 121 lifts the eyes toward the Lord for help and watching care while still leaving room for wise action.",
    prayer:
      "Lord, care for me with mercy and wisdom. Give me courage, guide my choices, and help me reach toward safe support where it is needed.",
    reflectionPrompt:
      "Where do I need wisdom, courage, or help from a trusted person today?",
    smallNextStep:
      "Name one wise action you can take, such as asking for help, setting a boundary, or slowing down before a decision.",
    symbolReminder:
      "A Christian symbol may remind some people to pray and seek wisdom, but it should never be treated as a source of protection or power.",
    startRoute: "/start/protection",
    prayerRoute: "/prayer/protection",
    scriptureRoute: "/bible/psalms/121",
    jewelryRoute: "/jewelry/protection",
  },
  hope: {
    slug: "hope",
    linkedFaithPathSlug: "hope",
    title: "Hope",
    description: "For seasons of pain, waiting, or longing for renewed courage.",
    carefulLine:
      "This path offers comfort and reflection; it does not promise instant healing or certain outcomes.",
    pastoralIntro:
      "Begin here when your heart feels heavy and you need a gentle place to bring pain before God. This path offers Scripture, prayer, reflection, and a small next step toward hope.",
    scriptureReference: "Romans 8",
    scriptureContext:
      "Romans 8 holds weakness, waiting, hope, and God's love together. Read it when hope needs deep roots.",
    prayer:
      "Lord, be near to what hurts. Hold me with mercy, renew my hope, and guide me toward wise care, community, and patience.",
    reflectionPrompt:
      "What ache or longing do I need to name before God without pretending it is simple?",
    smallNextStep:
      "Reach toward one safe source of support or choose one gentle practice that helps you stay grounded today.",
    symbolReminder:
      "A symbol of hope may help some people remember prayer and Scripture during a difficult season, without making healing claims.",
    startRoute: "/start/hope",
    prayerRoute: "/prayer/hope",
    scriptureRoute: "/bible/romans/8",
    jewelryRoute: "/jewelry/hope",
  },
  guidance: {
    slug: "guidance",
    linkedFaithPathSlug: "guidance",
    title: "Guidance",
    description: "For a decision or next step that needs wisdom and patience.",
    carefulLine:
      "This path helps you ask for wisdom without forcing instant certainty.",
    pastoralIntro:
      "Begin here when the next step feels unclear. This path helps you slow down, ask God for wisdom, reflect honestly, and move with care.",
    scriptureReference: "James 1",
    scriptureContext:
      "James 1 invites patient endurance, generous wisdom, and faith that becomes practical action.",
    prayer:
      "Father, give me wisdom. Quiet the noise around this decision and help me recognize what is honest, loving, and faithful.",
    reflectionPrompt:
      "What decision needs patience, counsel, or prayer before I move?",
    smallNextStep:
      "Write the decision in one sentence, then wait before acting if you can.",
    symbolReminder:
      "A symbol of guidance may remind some people to pause, pray, and seek wisdom before choosing.",
    startRoute: "/start/guidance",
    prayerRoute: "/prayer/discernment",
    scriptureRoute: "/bible/james/1",
    jewelryRoute: "/jewelry/guidance",
  },
  gratitude: {
    slug: "gratitude",
    linkedFaithPathSlug: "gratitude",
    title: "Gratitude",
    description: "For noticing grace and giving thanks with an honest heart.",
    carefulLine:
      "This path practices thankfulness without denying grief, difficulty, or unanswered questions.",
    pastoralIntro:
      "Begin here when you want your attention to return to grace. Gratitude can be gentle and honest, even when not everything is easy.",
    scriptureReference: "Genesis 1",
    scriptureContext:
      "Genesis 1 begins with creation and the goodness of what God makes. Let it guide gratitude for ordinary gifts.",
    prayer:
      "Lord, open my eyes to Your gifts. Teach me to receive today with humility, honesty, and thanks.",
    reflectionPrompt:
      "What small gift, person, provision, or moment can I thank God for today?",
    smallNextStep:
      "Name one specific gift and, if possible, express thanks to someone connected to it.",
    symbolReminder:
      "A symbol of gratitude may help some people remember to notice grace and give thanks in ordinary moments.",
    startRoute: "/start/gratitude",
    prayerRoute: "/prayer/gratitude",
    scriptureRoute: "/bible/genesis/1",
    jewelryRoute: "/jewelry/gratitude",
  },
  healing: {
    slug: "healing",
    linkedFaithPathSlug: "healing",
    title: "Healing",
    description: "For bringing pain honestly before God while seeking wise care.",
    carefulLine:
      "This path offers prayerful comfort and does not replace medical care, counseling, or trusted support.",
    pastoralIntro:
      "Begin here when something hurts and you need mercy, support, and a quiet place to pray.",
    scriptureReference: "Isaiah 40",
    scriptureContext:
      "Isaiah 40 speaks comfort to weary people while leaving room for wise care and community.",
    prayer:
      "Lord, be near to what hurts. Hold me with mercy, guide me toward wise care, and help me not feel alone in this.",
    reflectionPrompt: "What hurt do I need to bring into prayer with honesty?",
    smallNextStep: "Name one safe source of support you can reach toward today.",
    symbolReminder:
      "A symbol connected to healing may be a reminder to pray and seek care, not a promise of healing.",
    startRoute: "/start/healing",
    prayerRoute: "/prayer/hope",
    scriptureRoute: "/bible/isaiah/40",
    jewelryRoute: "/jewelry/healing",
  },
  forgiveness: {
    slug: "forgiveness",
    linkedFaithPathSlug: "forgiveness",
    title: "Forgiveness",
    description: "For returning to mercy, honesty, and careful repair.",
    carefulLine:
      "This path does not minimize harm; it invites mercy, truth, boundaries, and wisdom.",
    pastoralIntro:
      "Begin here when you need mercy, humility, release, or courage to repair what can be repaired.",
    scriptureReference: "1 Corinthians 13",
    scriptureContext:
      "1 Corinthians 13 describes love as patient, humble, truthful, and enduring.",
    prayer:
      "Lord, lead me into mercy without hiding from truth. Help me receive forgiveness and extend it with wisdom.",
    reflectionPrompt:
      "Where might I need confession, mercy, a boundary, or careful repair?",
    smallNextStep: "Name one honest confession or one careful act of repair.",
    symbolReminder:
      "A symbol of forgiveness may remind some people of grace received and extended with wisdom.",
    startRoute: "/start/forgiveness",
    prayerRoute: "/prayer/forgiveness",
    scriptureRoute: "/bible/1-corinthians/13",
    jewelryRoute: "/jewelry/forgiveness",
  },
  anxiety: {
    slug: "anxiety",
    linkedFaithPathSlug: "anxiety",
    title: "Anxiety",
    description: "For slowing down when anxious thoughts feel close.",
    carefulLine:
      "This path is for prayer and grounding; it does not replace mental health care or emergency support.",
    pastoralIntro:
      "Begin here when your mind is racing and you need a gentle, grounded way to pray.",
    scriptureReference: "Philippians 4",
    scriptureContext:
      "Philippians 4 gives anxious thoughts a place to be named before God in prayer and thanksgiving.",
    prayer:
      "Lord, steady me with Your presence. Help me name what feels heavy, ask for help when needed, and move one step at a time.",
    reflectionPrompt: "What concern can I name before God without solving it all today?",
    smallNextStep: "Write down the next small step and leave the rest for later.",
    symbolReminder:
      "A symbol of steadiness may remind some people to pause and pray, not to avoid needed care.",
    startRoute: "/start/anxiety",
    prayerRoute: "/prayer/anxiety",
    scriptureRoute: "/bible/philippians/4",
    jewelryRoute: "/jewelry/anxiety",
  },
  family: {
    slug: "family",
    linkedFaithPathSlug: "family",
    title: "Family",
    description: "For praying over loved ones, home, patience, and care.",
    carefulLine:
      "This path invites prayer and practical love without promising control over another person's choices.",
    pastoralIntro:
      "Begin here when you are carrying loved ones, home, relationships, or the desire for more tenderness.",
    scriptureReference: "1 Corinthians 13",
    scriptureContext:
      "1 Corinthians 13 shows love as patient, humble, truthful, and practical.",
    prayer:
      "Lord, bless the people closest to me. Teach me to love with patience, speak with care, and serve with grace.",
    reflectionPrompt: "Who can I pray for by name today?",
    smallNextStep: "Pray for one person by name, then consider one practical kindness.",
    symbolReminder:
      "A symbol connected to family may remind some people to pray for loved ones and practice patient love.",
    startRoute: "/start/family",
    prayerRoute: "/prayer/family",
    scriptureRoute: "/bible/1-corinthians/13",
    jewelryRoute: "/jewelry/family",
  },
} as const;

export type StartFaithPathSlug = keyof typeof startFaithPaths;

export const startFaithPathSlugs = Object.keys(
  startFaithPaths,
) as StartFaithPathSlug[];

export const featuredStartFaithPathSlugs = [
  "peace",
  "strength",
  "protection",
  "hope",
  "guidance",
  "gratitude",
] as const satisfies readonly StartFaithPathSlug[];

export function getStartFaithPathBySlug(
  slug: string,
): (typeof startFaithPaths)[StartFaithPathSlug] | undefined {
  return startFaithPaths[slug as StartFaithPathSlug];
}
