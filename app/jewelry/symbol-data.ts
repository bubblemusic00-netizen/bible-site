export type SymbolSlug =
  | "cross"
  | "ichthys"
  | "dove"
  | "heart"
  | "anchor"
  | "crown-kingdom"
  | "olive-branch"
  | "lamb"
  | "shepherd-staff"
  | "mustard-seed"
  | "vine-branch"
  | "shield"
  | "light-lamp"
  | "open-hands"
  | "open-bible";

export type SymbolGroupKey =
  | "gospel"
  | "peace-hope"
  | "guidance-trust"
  | "love-character"
  | "daily-remembrance";

export type SymbolIconKey =
  | "anchor"
  | "bird"
  | "book"
  | "circle"
  | "cross"
  | "crown"
  | "fish"
  | "branch"
  | "hands"
  | "heart"
  | "lamp"
  | "leaf"
  | "shield"
  | "sprout";

export type SymbolLink = {
  label: string;
  href: string;
  description: string;
};

export type FaithSymbol = {
  slug: SymbolSlug;
  name: string;
  shortLabel: string;
  group: SymbolGroupKey;
  icon: SymbolIconKey;
  meaning: string;
  reminder: string;
  scriptureReference: string;
  relatedBible: SymbolLink;
  relatedPrayer: SymbolLink;
  relatedFaithPath: SymbolLink;
  boundaryNote: string;
  futureReminderUse: string;
};

export const symbolGroups = [
  {
    key: "gospel",
    title: "Jesus and the Gospel",
    description:
      "Symbols that point back to Christ, grace, discipleship, and Scripture.",
  },
  {
    key: "peace-hope",
    title: "Peace and hope",
    description:
      "Symbols that can remind someone to pray, wait patiently, and hold hope with care.",
  },
  {
    key: "guidance-trust",
    title: "Guidance and trust",
    description:
      "Symbols that point toward Scripture, wisdom, courage, and careful decisions.",
  },
  {
    key: "love-character",
    title: "Love and character",
    description:
      "Symbols connected with compassion, humility, service, and daily faithfulness.",
  },
  {
    key: "daily-remembrance",
    title: "Prayer and daily remembrance",
    description:
      "Simple reminders for gratitude, surrender, learning, and small faithful steps.",
  },
] as const satisfies readonly {
  key: SymbolGroupKey;
  title: string;
  description: string;
}[];

export const faithSymbols = {
  cross: {
    slug: "cross",
    name: "Cross",
    shortLabel: "Cross",
    group: "gospel",
    icon: "cross",
    meaning:
      "The cross points to Christ, sacrifice, forgiveness, grace, and the call to discipleship.",
    reminder:
      "It can remind someone to return to the mercy of Jesus, practice humility, and receive forgiveness with honesty.",
    scriptureReference: "Luke 9:23",
    relatedBible: {
      label: "Luke 15",
      href: "/bible/luke/15",
      description:
        "Read about grace, repentance, and returning to God with honesty.",
    },
    relatedPrayer: {
      label: "Prayer for Forgiveness",
      href: "/prayer/forgiveness",
      description:
        "Pray for mercy, truth, confession, repair, and careful release.",
    },
    relatedFaithPath: {
      label: "Forgiveness Faith Path",
      href: "/start/forgiveness",
      description:
        "Begin with grace, prayer, reflection, and one careful next step.",
    },
    boundaryNote:
      "A cross is not a charm and does not save by itself. Christian hope rests in Christ, not in an object.",
    futureReminderUse:
      "A cross can be treated as a simple faith reminder when language stays centered on Christ and discipleship.",
  },
  ichthys: {
    slug: "ichthys",
    name: "Fish / Ichthys",
    shortLabel: "Ichthys",
    group: "gospel",
    icon: "fish",
    meaning:
      "The fish, or Ichthys, is associated with following Jesus and early Christian identity.",
    reminder:
      "It can remind someone to follow Jesus quietly, live with integrity, and let faith shape ordinary choices.",
    scriptureReference: "Matthew 4:19",
    relatedBible: {
      label: "John 1",
      href: "/bible/john/1",
      description:
        "Read about Word, light, life, and the beginning of John's Gospel.",
    },
    relatedPrayer: {
      label: "Prayer for Guidance",
      href: "/prayer/guidance",
      description:
        "Pray for wisdom, patience, and care before the next decision.",
    },
    relatedFaithPath: {
      label: "Guidance Faith Path",
      href: "/start/guidance",
      description:
        "Pause with Scripture, prayer, reflection, and one wise next step.",
    },
    boundaryNote:
      "The Ichthys should not become identity performance, superiority, or a way to judge others.",
    futureReminderUse:
      "The fish can be described as a modest reminder of following Jesus, never as status or proof of faith.",
  },
  dove: {
    slug: "dove",
    name: "Dove",
    shortLabel: "Dove",
    group: "peace-hope",
    icon: "bird",
    meaning:
      "The dove can point to peace, the Holy Spirit, gentleness, and prayerful calm.",
    reminder:
      "It can remind someone to pause before reacting, pray honestly, and practice gentleness.",
    scriptureReference: "John 14:27",
    relatedBible: {
      label: "Psalm 46",
      href: "/bible/psalms/46",
      description:
        "Read about refuge, stillness, fear, and trust in a difficult moment.",
    },
    relatedPrayer: {
      label: "Prayer for Peace",
      href: "/prayer/peace",
      description:
        "Pray with a restless heart without denying pressure or difficulty.",
    },
    relatedFaithPath: {
      label: "Peace Faith Path",
      href: "/start/peace",
      description:
        "Begin with Scripture and prayer for seasons when you need peace.",
    },
    boundaryNote:
      "A dove does not guarantee calm, conflict resolution, or emotional relief.",
    futureReminderUse:
      "The dove can be used as a quiet reminder of peace and gentleness without outcome claims.",
  },
  heart: {
    slug: "heart",
    name: "Heart",
    shortLabel: "Heart",
    group: "love-character",
    icon: "heart",
    meaning:
      "The heart can point to love, compassion, devotion, mercy, and patient care.",
    reminder:
      "It can remind someone to love God and neighbor in practical, humble ways.",
    scriptureReference: "Mark 12:30-31",
    relatedBible: {
      label: "1 Corinthians 13",
      href: "/bible/1-corinthians/13",
      description:
        "Read about love as patient, humble, truthful, and enduring.",
    },
    relatedPrayer: {
      label: "Prayer for Family",
      href: "/prayer/family",
      description:
        "Pray for love, humility, boundaries, forgiveness, and careful care.",
    },
    relatedFaithPath: {
      label: "Gratitude Faith Path",
      href: "/start/gratitude",
      description:
        "Practice gratitude and love without denying what is difficult.",
    },
    boundaryNote:
      "A heart is not only about romance and does not guarantee affection, closeness, or emotional change.",
    futureReminderUse:
      "The heart can be framed as a reminder of patient love, compassion, and gratitude.",
  },
  anchor: {
    slug: "anchor",
    name: "Anchor",
    shortLabel: "Anchor",
    group: "peace-hope",
    icon: "anchor",
    meaning:
      "The anchor can point to hope, steadiness, endurance, and holding fast when life feels uncertain.",
    reminder:
      "It can remind someone to stay grounded in prayer and take one faithful step while waiting.",
    scriptureReference: "Hebrews 6:19",
    relatedBible: {
      label: "Matthew 11:28-30",
      href: "/bible/matthew/11",
      description:
        "Read Jesus' invitation to the weary and burdened.",
    },
    relatedPrayer: {
      label: "Prayer for Hope",
      href: "/prayer/hope",
      description:
        "Pray in seasons of waiting, heaviness, or longing for renewed courage.",
    },
    relatedFaithPath: {
      label: "Hope Faith Path",
      href: "/start/hope",
      description:
        "Bring heaviness, waiting, or longing into Scripture and prayer.",
    },
    boundaryNote:
      "An anchor does not guarantee easy outcomes, certainty, or relief from hard circumstances.",
    futureReminderUse:
      "The anchor can be a reminder of hope and steadiness without promising results.",
  },
  "crown-kingdom": {
    slug: "crown-kingdom",
    name: "Crown / Kingdom",
    shortLabel: "Crown",
    group: "love-character",
    icon: "crown",
    meaning:
      "The crown can point to God's kingdom, humility, seeking first what matters, and faithful service.",
    reminder:
      "It can remind someone to choose humility, service, and God's priorities over status.",
    scriptureReference: "Matthew 6:33",
    relatedBible: {
      label: "Matthew 6",
      href: "/bible/matthew/6",
      description:
        "Read Jesus' teaching on prayer, trust, treasure, and seeking first God's kingdom.",
    },
    relatedPrayer: {
      label: "Prayer for Discernment",
      href: "/prayer/discernment",
      description:
        "Pray for motives, counsel, patience, and clarity over time.",
    },
    relatedFaithPath: {
      label: "Guidance Faith Path",
      href: "/start/guidance",
      description:
        "Ask for wisdom before the next decision or faithful step.",
    },
    boundaryNote:
      "A crown should not be treated as status, luxury, superiority, or proof of spiritual importance.",
    futureReminderUse:
      "The crown can be framed as a reminder of God's kingdom and humble service.",
  },
  "olive-branch": {
    slug: "olive-branch",
    name: "Olive Branch",
    shortLabel: "Olive Branch",
    group: "peace-hope",
    icon: "leaf",
    meaning:
      "The olive branch can point to peace, reconciliation, gentleness, and careful repair.",
    reminder:
      "It can remind someone to seek peace where it is wise and practice gentleness without ignoring truth.",
    scriptureReference: "Romans 12:18",
    relatedBible: {
      label: "Psalm 46",
      href: "/bible/psalms/46",
      description:
        "Read about stillness, refuge, fear, and trust.",
    },
    relatedPrayer: {
      label: "Prayer for Peace",
      href: "/prayer/peace",
      description:
        "Pray for peace without pretending every pressure disappears.",
    },
    relatedFaithPath: {
      label: "Peace Faith Path",
      href: "/start/peace",
      description:
        "Begin with prayer, Scripture, and reflection for peace.",
    },
    boundaryNote:
      "An olive branch does not guarantee reconciliation and should never pressure someone to remain in unsafe relationships.",
    futureReminderUse:
      "The olive branch can remind someone to seek peace with wisdom and boundaries.",
  },
  lamb: {
    slug: "lamb",
    name: "Lamb",
    shortLabel: "Lamb",
    group: "gospel",
    icon: "circle",
    meaning:
      "The lamb can point to Christ, gentleness, sacrifice, mercy, and humble trust.",
    reminder:
      "It can remind someone of Jesus' mercy and the call to receive grace with humility.",
    scriptureReference: "John 1:29",
    relatedBible: {
      label: "John 1",
      href: "/bible/john/1",
      description:
        "Read the opening of John's Gospel and its witness to Jesus.",
    },
    relatedPrayer: {
      label: "Prayer for Forgiveness",
      href: "/prayer/forgiveness",
      description:
        "Pray for mercy, honesty, confession, repair, and wise release.",
    },
    relatedFaithPath: {
      label: "Forgiveness Faith Path",
      href: "/start/forgiveness",
      description:
        "Return to grace with honesty, prayer, and one careful next step.",
    },
    boundaryNote:
      "The lamb symbol should stay beginner-friendly and should not be used to make complicated claims without context.",
    futureReminderUse:
      "The lamb can be a gentle reminder of Christ's mercy and humility.",
  },
  "shepherd-staff": {
    slug: "shepherd-staff",
    name: "Shepherd Staff",
    shortLabel: "Shepherd Staff",
    group: "guidance-trust",
    icon: "branch",
    meaning:
      "The shepherd staff can point to guidance, care, being led, and patient trust.",
    reminder:
      "It can remind someone to listen, receive guidance, and ask for help instead of walking alone.",
    scriptureReference: "Psalm 23",
    relatedBible: {
      label: "Psalm 23",
      href: "/bible/psalms/23",
      description:
        "Read a guided passage about God's shepherd-like care.",
    },
    relatedPrayer: {
      label: "Prayer for Guidance",
      href: "/prayer/guidance",
      description:
        "Pray for wisdom, patience, and clarity before the next decision.",
    },
    relatedFaithPath: {
      label: "Guidance Faith Path",
      href: "/start/guidance",
      description:
        "Slow down, ask for wisdom, and move with care.",
    },
    boundaryNote:
      "A shepherd staff reminder does not guarantee safety, perfect decisions, or an easy path.",
    futureReminderUse:
      "The shepherd staff can be a reminder of guidance and care without safety guarantees.",
  },
  "mustard-seed": {
    slug: "mustard-seed",
    name: "Mustard Seed",
    shortLabel: "Mustard Seed",
    group: "daily-remembrance",
    icon: "sprout",
    meaning:
      "The mustard seed can point to small faith, growth, humility, and patient beginnings.",
    reminder:
      "It can remind someone that a small faithful step can matter without needing to look impressive.",
    scriptureReference: "Matthew 17:20",
    relatedBible: {
      label: "James 1",
      href: "/bible/james/1",
      description:
        "Read about trials, wisdom, patience, listening, and practical faith.",
    },
    relatedPrayer: {
      label: "Prayer for Patience",
      href: "/prayer/patience",
      description:
        "Pray for waiting, frustration, endurance, and gentleness.",
    },
    relatedFaithPath: {
      label: "Strength Faith Path",
      href: "/start/strength",
      description:
        "Ask for strength and courage for one small faithful step.",
    },
    boundaryNote:
      "The mustard seed should not be turned into a miracle formula, prosperity claim, or pressure to prove faith.",
    futureReminderUse:
      "The mustard seed can be a reminder of humble beginnings and patient growth.",
  },
  "vine-branch": {
    slug: "vine-branch",
    name: "Vine / Branch",
    shortLabel: "Vine",
    group: "love-character",
    icon: "sprout",
    meaning:
      "The vine and branch can point to abiding, daily dependence, fruitfulness, and remaining connected to Christ.",
    reminder:
      "It can remind someone to return to prayer, Scripture, and faithful love in ordinary life.",
    scriptureReference: "John 15:5",
    relatedBible: {
      label: "John 3",
      href: "/bible/john/3",
      description:
        "Read about new birth, God's love, and faith.",
    },
    relatedPrayer: {
      label: "Prayer for Gratitude",
      href: "/prayer/gratitude",
      description:
        "Pray for attention, humility, and noticing grace.",
    },
    relatedFaithPath: {
      label: "Gratitude Faith Path",
      href: "/start/gratitude",
      description:
        "Practice gratitude and small faithful attention.",
    },
    boundaryNote:
      "The vine and branch should not be reduced to productivity, success, or visible results.",
    futureReminderUse:
      "The vine can remind someone of daily dependence and patient faithfulness.",
  },
  shield: {
    slug: "shield",
    name: "Shield",
    shortLabel: "Shield",
    group: "guidance-trust",
    icon: "shield",
    meaning:
      "The shield can point to courage, trust, spiritual steadiness, and asking for wise support.",
    reminder:
      "It can remind someone to pray for courage, choose wisdom, and seek help when needed.",
    scriptureReference: "Ephesians 6:16",
    relatedBible: {
      label: "Psalm 121",
      href: "/bible/psalms/121",
      description:
        "Read about help, watching care, and trust without treating faith as a formula.",
    },
    relatedPrayer: {
      label: "Prayer for Protection",
      href: "/prayer/protection",
      description:
        "Pray carefully for God's care, wisdom, courage, and safe support.",
    },
    relatedFaithPath: {
      label: "Protection Faith Path",
      href: "/start/protection",
      description:
        "Pray for care and wisdom without treating symbols as protective power.",
    },
    boundaryNote:
      "A shield symbol has no protective power and does not guarantee physical safety or spiritual results.",
    futureReminderUse:
      "The shield can be used only as a reminder to pray, seek wisdom, and move toward safe support.",
  },
  "light-lamp": {
    slug: "light-lamp",
    name: "Light / Lamp",
    shortLabel: "Light",
    group: "guidance-trust",
    icon: "lamp",
    meaning:
      "Light and lamp imagery can point to Scripture, guidance, wisdom, and the next faithful step.",
    reminder:
      "It can remind someone to seek wisdom slowly, read Scripture, and avoid rushing out of fear.",
    scriptureReference: "Psalm 119:105",
    relatedBible: {
      label: "John 1",
      href: "/bible/john/1",
      description:
        "Read about light, life, and the beginning of John's Gospel.",
    },
    relatedPrayer: {
      label: "Prayer for Discernment",
      href: "/prayer/discernment",
      description:
        "Pray for motives, counsel, patience, and clarity over time.",
    },
    relatedFaithPath: {
      label: "Guidance Faith Path",
      href: "/start/guidance",
      description:
        "Ask for wisdom before the next decision.",
    },
    boundaryNote:
      "A light or lamp symbol does not provide mystical certainty, secret knowledge, or instant answers.",
    futureReminderUse:
      "Light imagery can be a reminder to return to Scripture and take one wise next step.",
  },
  "open-hands": {
    slug: "open-hands",
    name: "Open Hands",
    shortLabel: "Open Hands",
    group: "daily-remembrance",
    icon: "hands",
    meaning:
      "Open hands can point to surrender, receiving, gratitude, humility, and honest prayer.",
    reminder:
      "They can remind someone to release what they cannot control and receive the day with thanks.",
    scriptureReference: "Psalm 145:16",
    relatedBible: {
      label: "Philippians 4",
      href: "/bible/philippians/4",
      description:
        "Read about prayer, thanksgiving, and peace.",
    },
    relatedPrayer: {
      label: "Prayer for Gratitude",
      href: "/prayer/gratitude",
      description:
        "Pray for noticing grace without denying difficulty.",
    },
    relatedFaithPath: {
      label: "Gratitude Faith Path",
      href: "/start/gratitude",
      description:
        "Notice what is good and give thanks with honesty.",
    },
    boundaryNote:
      "Open hands should not mean passivity, avoidance, or refusing responsibility where action is needed.",
    futureReminderUse:
      "Open hands can be a reminder of surrender, gratitude, and receiving with humility.",
  },
  "open-bible": {
    slug: "open-bible",
    name: "Open Bible",
    shortLabel: "Open Bible",
    group: "daily-remembrance",
    icon: "book",
    meaning:
      "An open Bible can point to Scripture, learning, returning to God's word, and humble attention.",
    reminder:
      "It can remind someone to read slowly, pray after reading, and let Scripture shape the next step.",
    scriptureReference: "2 Timothy 3:16",
    relatedBible: {
      label: "John 1",
      href: "/bible/john/1",
      description:
        "Begin with Word, light, life, and the opening of John's Gospel.",
    },
    relatedPrayer: {
      label: "Prayer for Wisdom",
      href: "/prayer/wisdom",
      description:
        "Pray for humility, teachability, listening, and wise next steps.",
    },
    relatedFaithPath: {
      label: "Guidance Faith Path",
      href: "/start/guidance",
      description:
        "Receive Scripture, prayer, reflection, and one careful next step.",
    },
    boundaryNote:
      "An open Bible symbol is not a replacement for actually reading Scripture in context and living with care.",
    futureReminderUse:
      "An open Bible can be a reminder to return to Scripture and learn humbly.",
  },
} as const satisfies Record<SymbolSlug, FaithSymbol>;

export const symbolKeys = Object.keys(faithSymbols) as SymbolSlug[];

const symbolGroupOrder = {
  gospel: ["cross", "ichthys", "lamb"],
  "peace-hope": ["dove", "anchor", "olive-branch"],
  "guidance-trust": ["shepherd-staff", "shield", "light-lamp"],
  "love-character": ["heart", "crown-kingdom", "vine-branch"],
  "daily-remembrance": ["mustard-seed", "open-hands", "open-bible"],
} as const satisfies Record<SymbolGroupKey, readonly SymbolSlug[]>;

export const groupedSymbols = symbolGroups.map((group) => ({
  ...group,
  symbols: symbolGroupOrder[group.key].map((slug) => faithSymbols[slug]),
}));

export function getFaithSymbol(slug: string): FaithSymbol | undefined {
  return faithSymbols[slug as SymbolSlug];
}
