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
  reference?: string;
  title: string;
  description: string;
  theme: string;
  whyRead: string;
  contextIntro: string;
  readingNote?: string;
  reflectionQuestion: string;
  prayerStarter: string;
  smallNextStep: string;
  relatedFaithPath: string;
  relatedPrayerRoute?: string;
  relatedPrayerLabel?: string;
  readingGroup: BibleReadingGroupKey;
  translation: "King James Version";
  sourceNote: string;
  verses: readonly BibleVerse[];
};

export type BibleReadingGroupKey =
  | "beginning"
  | "peace"
  | "protection"
  | "hope"
  | "wisdom"
  | "love"
  | "identity";

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
  {
    key: "identity",
    title: "Identity and being known by God",
    description: "Receive dignity, honest self-examination, and God's near attention.",
  },
] as const satisfies readonly {
  key: BibleReadingGroupKey;
  title: string;
  description: string;
}[];

const kjvSourceNote =
  "Full Scripture text is presented from the King James Version (KJV), a Bible translation widely used in public-domain contexts in the United States so guided readings can be offered openly and consistently.";

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
    readingGroup: "wisdom",
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
    readingGroup: "peace",
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
  {
    id: "luke-15",
    bookSlug: "luke",
    book: "Luke",
    chapter: 15,
    title: "Grace, Repentance, and Returning Home",
    description: "Jesus' parables of the lost sheep, lost coin, and returning son.",
    theme: "Grace, repentance, returning to God",
    whyRead:
      "Read Luke 15 when you need a tender picture of God's mercy and the courage to return honestly.",
    contextIntro:
      "Luke 15 gathers three parables about what is lost and found. Read it as an invitation toward grace, repentance, and the joy of return, not as pressure to hide what is true.",
    reflectionQuestion:
      "Where do you need to stop hiding and begin returning toward mercy, truth, or repair?",
    prayerStarter:
      "Father, meet me with mercy. Help me return honestly, receive grace, and take the next truthful step.",
    smallNextStep:
      "Name one area where return, confession, repair, or renewed trust can begin in a small way.",
    relatedFaithPath: "/start/forgiveness",
    relatedPrayerRoute: "/prayer/forgiveness",
    relatedPrayerLabel: "Prayer for Forgiveness",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["luke-15"],
  },
  {
    id: "john-3",
    bookSlug: "john",
    book: "John",
    chapter: 3,
    title: "New Birth, God's Love, and Faith",
    description: "Nicodemus, new birth, light, love, and faith in the Son.",
    theme: "New birth, God's love, and faith",
    whyRead:
      "Read John 3 when you want to understand grace, faith, and the invitation to come toward the light.",
    contextIntro:
      "John 3 begins with Nicodemus coming to Jesus by night and moves toward new birth, God's love, and light. Read slowly, letting questions become a doorway into faith.",
    reflectionQuestion:
      "What question, fear, or longing do you want to bring honestly into the light before God?",
    prayerStarter:
      "Lord Jesus, lead me toward Your light. Help me receive God's love with humility, faith, and honesty.",
    smallNextStep:
      "Write one honest question about faith, then bring it into prayer instead of pushing it away.",
    relatedFaithPath: "/start/hope",
    relatedPrayerRoute: "/prayer/hope",
    relatedPrayerLabel: "Prayer for Hope",
    readingGroup: "beginning",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["john-3"],
  },
  {
    id: "matthew-5",
    bookSlug: "matthew",
    book: "Matthew",
    chapter: 5,
    title: "Beatitudes, Humility, and Christian Character",
    description: "Jesus teaches blessedness, mercy, humility, peacemaking, and faithful character.",
    theme: "Beatitudes, Christian character, humility",
    whyRead:
      "Read Matthew 5 when you want Christian character to become practical, humble, merciful, and peaceable.",
    contextIntro:
      "Matthew 5 opens the Sermon on the Mount. Jesus begins with the Beatitudes and then calls His hearers toward a deeper righteousness shaped by mercy, humility, truth, and love.",
    reflectionQuestion:
      "Which part of Jesus' teaching challenges the way you respond, speak, or seek peace today?",
    prayerStarter:
      "Lord Jesus, shape my character with mercy, humility, truth, and love. Teach me to live what I read.",
    smallNextStep:
      "Choose one Beatitude or one command from the chapter and practice it in one ordinary interaction.",
    relatedFaithPath: "/start/guidance",
    relatedPrayerRoute: "/prayer/guidance",
    relatedPrayerLabel: "Prayer for Guidance",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["matthew-5"],
  },
  {
    id: "psalms-121",
    bookSlug: "psalms",
    book: "Psalm",
    chapter: 121,
    title: "Help, Watching Care, and Trust",
    description: "A short psalm of help, attention, and trust in the Lord's care.",
    theme: "Help, watching care, trust without magic claims",
    whyRead:
      "Read Psalm 121 when you need to pray for help and care without treating faith as a guarantee or charm.",
    contextIntro:
      "Psalm 121 is a brief song of trust that lifts the eyes toward the Lord. Read it as prayerful confidence in God's care, while still making wise and careful choices.",
    reflectionQuestion:
      "Where do you need help, wisdom, and watchful care without pretending you can control every outcome?",
    prayerStarter:
      "Lord, my help comes from You. Watch over me with mercy and guide me toward wise, careful steps.",
    smallNextStep:
      "Name one wise support, boundary, or practical action that belongs with your prayer today.",
    relatedFaithPath: "/start/protection",
    relatedPrayerRoute: "/prayer/protection",
    relatedPrayerLabel: "Prayer for Protection",
    readingGroup: "protection",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-121"],
  },
  {
    id: "psalms-139",
    bookSlug: "psalms",
    book: "Psalm",
    chapter: 139,
    title: "Known by God",
    description: "Being searched, known, seen, and led by God with dignity and honesty.",
    theme: "Being known by God, dignity, anxiety, identity",
    whyRead:
      "Read Psalm 139 when you need to remember that being known by God can bring dignity, honesty, and prayerful self-examination.",
    contextIntro:
      "Psalm 139 holds together God's nearness, deep knowledge, human dignity, and honest searching. Read it slowly, especially if anxiety or identity questions feel close.",
    readingNote:
      "This psalm includes intense language about enemies near the end. Read it as honest prayer brought before God, not as permission for hatred or harm.",
    reflectionQuestion:
      "What part of your life needs to be known by God rather than hidden, rushed, or judged by fear?",
    prayerStarter:
      "Lord, You know me fully. Lead me with mercy, truth, and dignity into the way everlasting.",
    smallNextStep:
      "Sit quietly for one minute and pray, 'Search me, O God,' while naming one honest thought.",
    relatedFaithPath: "/start/anxiety",
    relatedPrayerRoute: "/prayer/anxiety",
    relatedPrayerLabel: "Prayer for Anxiety",
    readingGroup: "identity",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-139"],
  },
  {
    id: "ephesians-2",
    bookSlug: "ephesians",
    book: "Ephesians",
    chapter: 2,
    title: "Grace, Mercy, and Faith",
    description: "Grace as gift, mercy in Christ, and a life shaped by good works.",
    theme: "Grace, faith, mercy, not earning salvation",
    whyRead:
      "Read Ephesians 2 when you need to hear that grace is received as gift, not earned as achievement.",
    contextIntro:
      "Ephesians 2 moves from death to mercy, from separation to nearness, and from striving to grace. Read it as a grounded reminder that faith begins with God's gift.",
    reflectionQuestion:
      "Where are you trying to earn what can only be received with humility and faith?",
    prayerStarter:
      "God of mercy, help me receive grace as gift. Let good works grow from gratitude rather than fear.",
    smallNextStep:
      "Name one place you are striving for worth, then pray for grace to receive and respond.",
    relatedFaithPath: "/start/hope",
    relatedPrayerRoute: "/prayer/gratitude",
    relatedPrayerLabel: "Prayer for Gratitude",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["ephesians-2"],
  },
  {
    id: "james-1",
    bookSlug: "james",
    book: "James",
    chapter: 1,
    title: "Trials, Wisdom, and Practical Faith",
    description: "Patience, wisdom, listening, and becoming doers of the word.",
    theme: "Trials, wisdom, patience, practical faith",
    whyRead:
      "Read James 1 when you need wisdom for pressure, patience in difficulty, and faith that becomes action.",
    contextIntro:
      "James 1 is practical and direct. It speaks of trials, wisdom, patience, speech, anger, and hearing the word in a way that changes life.",
    reflectionQuestion:
      "Where do you need wisdom, patience, or a slower response before you act or speak?",
    prayerStarter:
      "Lord, give me wisdom generously. Help me listen well, speak slowly, and live what I receive.",
    smallNextStep:
      "Before your next decision or reply, pause long enough to ask what wisdom and patience require.",
    relatedFaithPath: "/start/guidance",
    relatedPrayerRoute: "/prayer/guidance",
    relatedPrayerLabel: "Prayer for Guidance",
    readingGroup: "wisdom",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["james-1"],
  },
  {
    id: "mark-4",
    bookSlug: "mark",
    book: "Mark",
    chapter: 4,
    reference: "Mark 4:35-41",
    title: "Jesus in the Storm",
    description: "A storm, fear, Jesus' presence, and peace in uncertainty.",
    theme: "Storm, fear, Jesus, peace in uncertainty",
    whyRead:
      "Read Mark 4:35-41 when fear feels close and you need a Gospel picture of Jesus present in uncertainty.",
    contextIntro:
      "This short passage places the disciples in a real storm with Jesus in the boat. Read it as an invitation to bring fear to Christ, not as a promise that every storm ends quickly.",
    reflectionQuestion:
      "What fear do you need to name honestly before Jesus instead of carrying it alone?",
    prayerStarter:
      "Lord Jesus, meet me in uncertainty. Help me bring fear into Your presence and take the next faithful step.",
    smallNextStep:
      "Name the storm in one sentence, then choose one calm action you can take today.",
    relatedFaithPath: "/start/peace",
    relatedPrayerRoute: "/prayer/peace",
    relatedPrayerLabel: "Prayer for Peace",
    readingGroup: "protection",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["mark-4"],
  },
  {
    id: "psalms-46",
    bookSlug: "psalms",
    book: "Psalm",
    chapter: 46,
    title: "Refuge, Stillness, and Trust",
    description: "God as refuge, stillness in fear, and trust when the world feels unstable.",
    theme: "Refuge, stillness, fear, trust",
    whyRead:
      "Read Psalm 46 when you need stillness, courage, and a prayer that names God as refuge without denying trouble.",
    contextIntro:
      "Psalm 46 speaks of trouble, shaking, refuge, and stillness. Read it as a call to turn toward God in fear, not to pretend fear is not real.",
    reflectionQuestion:
      "What noise, fear, or pressure needs the words, 'Be still, and know that I am God'?",
    prayerStarter:
      "God our refuge, quiet what is frantic in me. Help me trust You and take the next wise step.",
    smallNextStep:
      "Pause for two slow breaths before one task, repeating, 'Be still,' as a prayer.",
    relatedFaithPath: "/start/peace",
    relatedPrayerRoute: "/prayer/peace",
    relatedPrayerLabel: "Prayer for Peace",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-46"],
  },
  {
    id: "matthew-11",
    bookSlug: "matthew",
    book: "Matthew",
    chapter: 11,
    reference: "Matthew 11:28-30",
    title: "Rest for the Weary",
    description: "Jesus' invitation to the weary, burdened, and tired to come and receive rest.",
    theme: "Rest, weariness, coming to Jesus",
    whyRead:
      "Read Matthew 11:28-30 when you feel weary and need Jesus' gentle invitation into rest.",
    contextIntro:
      "These three verses hold one of Jesus' most tender invitations. Read them slowly if you feel tired, burdened, or unsure how to keep carrying everything.",
    reflectionQuestion:
      "What burden do you need to bring to Jesus instead of carrying by force or fear?",
    prayerStarter:
      "Lord Jesus, I come weary and honest. Teach me Your rest, Your gentleness, and Your way.",
    smallNextStep:
      "Choose one burden to set down for a few minutes, and pray before picking up the next responsibility.",
    relatedFaithPath: "/start/strength",
    relatedPrayerRoute: "/prayer/strength",
    relatedPrayerLabel: "Prayer for Strength",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["matthew-11"],
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

export function getBibleChapterReference(chapter: BibleChapter) {
  return chapter.reference ?? `${chapter.book} ${chapter.chapter}`;
}

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
    title: getBibleChapterReference(chapter),
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
