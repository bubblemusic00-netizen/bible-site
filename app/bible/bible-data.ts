import { kjvReadingVerses } from "./kjv-reading-verses";

export type BibleVerse = {
  number: number;
  text: string;
};

export type BibleChapter = {
  id: keyof typeof kjvReadingVerses;
  bookSlug: string;
  book: string;
  chapter: number;
  title: string;
  description: string;
  theme: string;
  whyRead: string;
  contextIntro: string;
  reflectionQuestion: string;
  prayerStarter: string;
  smallNextStep: string;
  relatedFaithPath: string;
  readingGroup: BibleReadingGroupKey;
  translation: "King James Version";
  sourceNote: string;
  verses: readonly BibleVerse[];
};

export type BibleReadingGroupKey =
  | "beginning"
  | "peace"
  | "protection"
  | "prayer"
  | "hope"
  | "wisdom"
  | "love";

export const bibleReadingGroups = [
  {
    key: "beginning",
    title: "Beginning and faith",
    description: "Start with creation, light, life, and the opening shape of faith.",
  },
  {
    key: "peace",
    title: "Peace and comfort",
    description: "Read slowly when you need comfort, steadiness, and renewed courage.",
  },
  {
    key: "protection",
    title: "Protection and trust",
    description:
      "Pray for God's care with humility, wisdom, and no guarantee-based claims.",
  },
  {
    key: "prayer",
    title: "Prayer and worry",
    description: "Bring anxious thoughts, daily needs, and gratitude into prayer.",
  },
  {
    key: "hope",
    title: "Hope and grace",
    description: "Return to grace, mercy, and life in the Spirit.",
  },
  {
    key: "wisdom",
    title: "Wisdom and guidance",
    description: "Slow down before decisions and practice trust with care.",
  },
  {
    key: "love",
    title: "Love and character",
    description: "Let love become patience, humility, endurance, and action.",
  },
] as const satisfies readonly {
  key: BibleReadingGroupKey;
  title: string;
  description: string;
}[];

const kjvSourceNote =
  "Full Scripture text is presented from the King James Version (KJV), a public-domain Bible translation used here so guided readings can be offered openly and consistently.";

export const availableBibleChapters = [
  {
    id: "genesis-1",
    bookSlug: "genesis",
    book: "Genesis",
    chapter: 1,
    title: "Beginning, Creation, and Goodness",
    description: "Creation, God's order, human calling, and the goodness of what God makes.",
    theme: "Beginning, creation, God's order and goodness",
    whyRead:
      "Read Genesis 1 when you need to begin with wonder, gratitude, and the reminder that creation is received as a gift.",
    contextIntro:
      "Genesis 1 opens the Bible with creation, order, blessing, and the repeated goodness of what God makes. Read slowly and notice the movement from darkness to light, from emptiness to life, and from chaos to purpose.",
    reflectionQuestion:
      "Where do you need to remember God's order, goodness, or creative care in your life today?",
    prayerStarter:
      "God of creation, help me receive this day as a gift and notice what is good, ordered, and entrusted to my care.",
    smallNextStep:
      "After reading, sit quietly for one minute and name one good thing you can receive with gratitude.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "beginning",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["genesis-1"],
  },
  {
    id: "john-1",
    bookSlug: "john",
    book: "John",
    chapter: 1,
    title: "The Word, Light, and Life",
    description: "Jesus as the Word, the true Light, and the life at the heart of faith.",
    theme: "Jesus, the Word, light, and life",
    whyRead:
      "Read John 1 when you want a clear doorway into who Jesus is and why Christian faith centers on Him.",
    contextIntro:
      "John 1 begins with the Word, light, life, witness, and the invitation to come and see. Read it as the opening doorway to John's Gospel, where Jesus is revealed with grace and truth.",
    reflectionQuestion:
      "What phrase about light, life, grace, or truth do you want to carry into prayer today?",
    prayerStarter:
      "Lord Jesus, draw my attention toward Your light and help me respond with honest faith, humility, and openness.",
    smallNextStep:
      "Choose one short phrase from the chapter and repeat it quietly before your next task or conversation.",
    relatedFaithPath: "/start/hope",
    readingGroup: "beginning",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["john-1"],
  },
  {
    id: "psalms-23",
    bookSlug: "psalms",
    book: "Psalm",
    chapter: 23,
    title: "The Lord Is My Shepherd",
    description: "Peace, comfort, provision, and God's shepherd-like care.",
    theme: "Peace, comfort, and God as shepherd",
    whyRead:
      "Read Psalm 23 when your heart needs comfort, a slower pace, and language for trusting God's care.",
    contextIntro:
      "Psalm 23 is a short prayer of trust that pictures the Lord as shepherd. Read it as comfort, not as pressure to feel peaceful instantly.",
    reflectionQuestion:
      "Where do you need to receive care, rest, or guidance instead of trying to carry everything alone?",
    prayerStarter:
      "Lord, shepherd me with mercy. Lead me toward rest, courage, and trust for the next step.",
    smallNextStep:
      "Pause and breathe slowly through one line of the psalm, then take one gentle next step.",
    relatedFaithPath: "/start/peace",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-23"],
  },
  {
    id: "psalms-91",
    bookSlug: "psalms",
    book: "Psalm",
    chapter: 91,
    title: "Protection and Trust",
    description: "A prayer of refuge, trust, and God's nearness in danger.",
    theme: "Protection and trust with careful no-guarantee language",
    whyRead:
      "Read Psalm 91 when you want to pray for God's care while also moving with wisdom, humility, and safe support.",
    contextIntro:
      "Psalm 91 gives strong language for refuge and trust. Read it as a prayer that turns fear toward God, not as a formula or guarantee that harm can never happen.",
    reflectionQuestion:
      "Where do you need courage, wisdom, or safe help rather than fear-based promises?",
    prayerStarter:
      "Lord, be my refuge. Give me courage, wise judgment, and the humility to seek help where help is needed.",
    smallNextStep:
      "Name one wise action you can take today, such as asking for support, slowing down, or setting a careful boundary.",
    relatedFaithPath: "/start/protection",
    readingGroup: "protection",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-91"],
  },
  {
    id: "matthew-6",
    bookSlug: "matthew",
    book: "Matthew",
    chapter: 6,
    title: "Prayer, Worry, and Daily Trust",
    description: "Jesus teaches prayer, sincerity, treasure, and trust for daily needs.",
    theme: "Prayer, worry, and daily trust",
    whyRead:
      "Read Matthew 6 when prayer feels complicated or worry is taking too much room in your attention.",
    contextIntro:
      "Matthew 6 is part of Jesus' Sermon on the Mount. It moves from sincere prayer to daily trust, inviting readers away from performance and anxious striving.",
    reflectionQuestion:
      "What worry, desire, or hidden pressure do you need to bring honestly before God?",
    prayerStarter:
      "Father, teach me to pray with honesty. Help me seek Your kingdom and trust You for today's needs.",
    smallNextStep:
      "Pray the Lord's Prayer slowly, then write down one worry you can entrust to God today.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "prayer",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["matthew-6"],
  },
  {
    id: "romans-8",
    bookSlug: "romans",
    book: "Romans",
    chapter: 8,
    title: "Hope, Grace, and Life in the Spirit",
    description: "Grace, hope, weakness, prayer, and the love of God in Christ.",
    theme: "Hope, grace, and life in the Spirit",
    whyRead:
      "Read Romans 8 when you need hope that is deeper than mood, pressure, or your own strength.",
    contextIntro:
      "Romans 8 is one of Paul's great chapters of hope. It speaks of life in the Spirit, weakness in prayer, suffering, hope, and the love of God in Christ.",
    reflectionQuestion:
      "What part of your life needs to hear that weakness, waiting, and hope can all be brought before God?",
    prayerStarter:
      "God of mercy, help me receive grace, pray honestly in weakness, and trust Your love in Christ.",
    smallNextStep:
      "Choose one phrase about hope or love from the chapter and carry it through the day.",
    relatedFaithPath: "/start/hope",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["romans-8"],
  },
  {
    id: "proverbs-3",
    bookSlug: "proverbs",
    book: "Proverbs",
    chapter: 3,
    title: "Wisdom, Trust, and Guidance",
    description: "Trust in the Lord, wisdom, humility, and faithful choices.",
    theme: "Wisdom, trust, and guidance",
    whyRead:
      "Read Proverbs 3 when you need wisdom for ordinary decisions and a slower, humbler way to move forward.",
    contextIntro:
      "Proverbs 3 gathers practical wisdom around trust, humility, generosity, discipline, and peace with neighbors. Read it as guidance for character, not instant certainty.",
    reflectionQuestion:
      "What decision or habit needs trust, patience, and wisdom before action?",
    prayerStarter:
      "Lord, teach me to trust You with my path. Give me wisdom, humility, and courage for faithful choices.",
    smallNextStep:
      "Write one decision in a single sentence, then ask what wisdom, counsel, or patience it needs.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "wisdom",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["proverbs-3"],
  },
  {
    id: "1-corinthians-13",
    bookSlug: "1-corinthians",
    book: "1 Corinthians",
    chapter: 13,
    title: "Love, Patience, and Character",
    description: "The way of love, patience, humility, endurance, and maturity.",
    theme: "Love, patience, and character",
    whyRead:
      "Read 1 Corinthians 13 when you want love to become more than feeling: patience, humility, endurance, and action.",
    contextIntro:
      "1 Corinthians 13 sits inside Paul's teaching about the church and spiritual gifts. It reminds readers that even impressive gifts become empty without love.",
    reflectionQuestion:
      "Which description of love challenges the way you speak, choose, or respond today?",
    prayerStarter:
      "Lord, form love in me that is patient, humble, truthful, and enduring.",
    smallNextStep:
      "Choose one phrase from the chapter and practice it in one relationship today.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["1-corinthians-13"],
  },
  {
    id: "philippians-4",
    bookSlug: "philippians",
    book: "Philippians",
    chapter: 4,
    title: "Anxiety, Peace, Prayer, and Gratitude",
    description: "Prayer, thanksgiving, peace, contentment, and faithful attention.",
    theme: "Anxiety, peace, prayer, and gratitude",
    whyRead:
      "Read Philippians 4 when anxious thoughts need a prayerful place to land and gratitude needs room to grow.",
    contextIntro:
      "Philippians 4 closes Paul's letter with encouragement toward prayer, gentleness, thanksgiving, peace, contentment, and shared care.",
    reflectionQuestion:
      "What request can you name before God with thanksgiving rather than carrying it alone?",
    prayerStarter:
      "Lord, steady my heart. Help me bring my requests to You, practice gratitude, and receive peace one step at a time.",
    smallNextStep:
      "Write one concern and one gratitude side by side, then pray over both honestly.",
    relatedFaithPath: "/start/peace",
    readingGroup: "prayer",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["philippians-4"],
  },
  {
    id: "isaiah-40",
    bookSlug: "isaiah",
    book: "Isaiah",
    chapter: 40,
    title: "Comfort, Strength, and Waiting on God",
    description: "Comfort, God's greatness, renewed strength, and patient hope.",
    theme: "Strength, comfort, and waiting on God",
    whyRead:
      "Read Isaiah 40 when you feel worn down and need comfort that points beyond your own limits.",
    contextIntro:
      "Isaiah 40 speaks comfort to weary people and lifts their attention to God's greatness. Read it as an invitation to wait, receive strength, and remember who God is.",
    reflectionQuestion:
      "Where do you feel weary, and what would it mean to wait on God without giving up?",
    prayerStarter:
      "God of comfort, renew my strength. Help me wait with courage, humility, and hope.",
    smallNextStep:
      "Take a short walk or quiet pause, and repeat one line about renewed strength.",
    relatedFaithPath: "/start/strength",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["isaiah-40"],
  },
] as const satisfies readonly BibleChapter[];

export type SupportedBibleChapter = {
  bookSlug: string;
  book: string;
  chapter: number;
  title: string;
  href: string;
  description: string;
  theme: string;
  translation: string;
  readingGroup: BibleReadingGroupKey;
};

function chapterLookupKey(bookSlug: string, chapter: number) {
  return `${bookSlug}:${chapter}`;
}

const bibleChapterLookup = new Map<string, BibleChapter>(
  availableBibleChapters.map((chapter) => [
    chapterLookupKey(chapter.bookSlug, chapter.chapter),
    chapter,
  ]),
);

export const supportedBibleChapters: SupportedBibleChapter[] =
  availableBibleChapters.map((chapter) => ({
    bookSlug: chapter.bookSlug,
    book: chapter.book,
    chapter: chapter.chapter,
    title: `${chapter.book} ${chapter.chapter}`,
    href: `/bible/${chapter.bookSlug}/${chapter.chapter}`,
    description: chapter.description,
    theme: chapter.theme,
    translation: chapter.translation,
    readingGroup: chapter.readingGroup,
  }));

export const availableBibleChapterParams = supportedBibleChapters.map(
  (chapter) => ({
    book: chapter.bookSlug,
    chapter: String(chapter.chapter),
  }),
);

type BibleBook = {
  slug: string;
  name: string;
  description: string;
  availableChapters: number[];
  translationNote: string;
};

export const bibleBooks = availableBibleChapters.reduce<Record<string, BibleBook>>(
  (books, chapter) => {
    const existing = books[chapter.bookSlug];

    if (existing) {
      existing.availableChapters.push(chapter.chapter);
      existing.availableChapters.sort((a, b) => a - b);
      return books;
    }

    books[chapter.bookSlug] = {
      slug: chapter.bookSlug,
      name: chapter.bookSlug === "psalms" ? "Psalms" : chapter.book,
      description: chapter.description,
      availableChapters: [chapter.chapter],
      translationNote: "Available guided readings use the King James Version.",
    };

    return books;
  },
  {},
);

export type BibleBookSlug = keyof typeof bibleBooks;

export const bibleBookSlugs = Object.keys(bibleBooks) as BibleBookSlug[];

export const groupedBibleReadings = bibleReadingGroups
  .map((group) => ({
    ...group,
    readings: supportedBibleChapters.filter(
      (chapter) => chapter.readingGroup === group.key,
    ),
  }))
  .filter((group) => group.readings.length > 0);

export function getBibleBook(slug: string) {
  return bibleBooks[slug as BibleBookSlug];
}

export function getBibleChapter(bookSlug: string, chapter: string | number) {
  const chapterNumber =
    typeof chapter === "number" ? chapter : Number.parseInt(chapter, 10);

  if (!Number.isFinite(chapterNumber)) {
    return undefined;
  }

  return bibleChapterLookup.get(chapterLookupKey(bookSlug, chapterNumber));
}
