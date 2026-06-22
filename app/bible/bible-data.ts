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
  | "identity"
  | "praise";

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
  {
    key: "praise",
    title: "Praise and worship",
    description: "Turn the heart upward — thanksgiving, wonder, and the steady mercy of God.",
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
  {
    id: "hebrews-11",
    bookSlug: "hebrews",
    book: "Hebrews",
    chapter: 11,
    title: "By Faith: A Cloud of Witnesses",
    description: "Faith defined and embodied — a long line of people who trusted God before they saw the promise.",
    theme: "Faith, trust, and the long obedience of believing",
    whyRead:
      "Read Hebrews 11 when your own faith feels small and you need the company of people who walked by trust, not sight.",
    contextIntro:
      "Hebrews 11 opens with a definition of faith, then walks through Abel, Noah, Abraham, Sarah, Moses, and many more who obeyed before they understood. Read it as a reminder that faith has always meant moving toward a promise you cannot yet see.",
    reflectionQuestion:
      "Whose faith has gone before you — and what small step of trust is yours to take today?",
    prayerStarter:
      "God of Abraham and Sarah, give me faith for the part of the road I can see, and trust for the part I cannot.",
    smallNextStep:
      "Name one person whose faith shaped yours, and one step you can take in trust this week.",
    relatedFaithPath: "/start/hope",
    readingGroup: "beginning",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["hebrews-11"],
  },
  {
    id: "psalms-27",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 27,
    title: "The LORD Is My Light",
    description: "Confidence in God's presence when enemies, fear, and waiting press in.",
    theme: "Light, confidence, and waiting on the LORD",
    whyRead:
      "Read Psalm 27 when fear is loud and you need to remember where your safety actually rests.",
    contextIntro:
      "Psalm 27 moves between bold confidence ('whom shall I fear?') and honest pleading, ending in the discipline of waiting. Read it slowly when courage and fear are both present at once.",
    reflectionQuestion:
      "What would change today if you truly believed the LORD is your light and your stronghold?",
    prayerStarter:
      "LORD, be my light in this fear. Teach me to wait on You with courage instead of dread.",
    smallNextStep:
      "Write the one thing you most fear, then read verse 1 over it slowly.",
    relatedFaithPath: "/start/peace",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-27"],
  },
  {
    id: "psalms-34",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 34,
    title: "Taste and See",
    description: "A song of deliverance for the brokenhearted and crushed in spirit.",
    theme: "Deliverance, nearness, and praise in trouble",
    whyRead:
      "Read Psalm 34 when you feel broken or afraid and need to be reminded that God is near to the crushed in spirit.",
    contextIntro:
      "Psalm 34 blesses the LORD at all times, invites you to 'taste and see,' and promises that God is near to the brokenhearted. Read it as both praise and comfort.",
    reflectionQuestion:
      "Where do you need to know that the LORD is near to the brokenhearted right now?",
    prayerStarter:
      "LORD, You are near to the broken. Draw close to the part of me that is crushed, and let me taste Your goodness.",
    smallNextStep:
      "Name one trouble honestly, then thank God for one specific good thing alongside it.",
    relatedFaithPath: "/start/healing",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-34"],
  },
  {
    id: "john-14",
    bookSlug: "john",
    book: "John",
    chapter: 14,
    title: "Let Not Your Heart Be Troubled",
    description: "Jesus comforts His friends with the promise of the Father's house, the Way, and the Spirit.",
    theme: "Comfort, the Way, and the gift of peace",
    whyRead:
      "Read John 14 when your heart is troubled and you need Jesus' own words of comfort and direction.",
    contextIntro:
      "On the night before the cross, Jesus comforts His disciples: a place prepared, Himself as the way, and the promise of the Spirit and a peace the world cannot give. Read it when fear and grief are close.",
    reflectionQuestion:
      "What troubled place in your heart most needs to hear 'let not your heart be troubled' today?",
    prayerStarter:
      "Lord Jesus, quiet my troubled heart. Be the way I walk and the peace I carry.",
    smallNextStep:
      "Reread verse 27 slowly and name the worry you are choosing to hand over.",
    relatedFaithPath: "/start/peace",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["john-14"],
  },
  {
    id: "isaiah-41",
    bookSlug: "isaiah",
    book: "Isaiah",
    chapter: 41,
    title: "Fear Thou Not",
    description: "God's promise to uphold, strengthen, and hold the hand of His people.",
    theme: "Reassurance, strength, and God's steadying hand",
    whyRead:
      "Read Isaiah 41 when anxiety tells you that you are alone and unheld.",
    contextIntro:
      "Isaiah 41 speaks tenderly to a fearful people: 'fear thou not; for I am with thee.' Read it slowly when you need to hear God promise to strengthen and uphold you.",
    reflectionQuestion:
      "What fear do you need to bring under the promise 'I will uphold thee'?",
    prayerStarter:
      "LORD, You promise to hold my right hand. Steady me; I am afraid, and I need Your strength.",
    smallNextStep:
      "Place one hand open in your lap and pray verse 10 as you breathe slowly.",
    relatedFaithPath: "/start/anxiety",
    readingGroup: "peace",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["isaiah-41"],
  },
  {
    id: "psalms-62",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 62,
    title: "My Soul Waiteth",
    description: "Rest and stillness in God alone as rock, salvation, and defence.",
    theme: "Stillness, trust, and God as the only sure ground",
    whyRead:
      "Read Psalm 62 when you are tempted to find your security in things that cannot hold.",
    contextIntro:
      "Psalm 62 returns again and again to one settled truth: 'my soul, wait thou only upon God.' Read it when your trust has scattered and needs to come home to one place.",
    reflectionQuestion:
      "Where have you been resting your security that cannot actually hold it?",
    prayerStarter:
      "God, You alone are my rock. Gather my scattered trust and let my soul wait only upon You.",
    smallNextStep:
      "Sit in silence for one minute and repeat 'my soul, wait thou only upon God.'",
    relatedFaithPath: "/start/protection",
    readingGroup: "protection",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-62"],
  },
  {
    id: "psalms-18",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 18,
    title: "The LORD My Rock",
    description: "A song of rescue — God as rock, fortress, and deliverer in deep trouble.",
    theme: "Rescue, refuge, and strength in distress",
    whyRead:
      "Read Psalm 18 when you have come through trouble, or are still in it, and need the language of rescue.",
    contextIntro:
      "Psalm 18 is David's song after deliverance: God reached down, drew him out of deep waters, and set him in a large place. Read it when you need to remember who your refuge is.",
    reflectionQuestion:
      "Where do you need God to be your rock and fortress today?",
    prayerStarter:
      "LORD, my rock and my deliverer, reach into this trouble and set my feet in a wide place.",
    smallNextStep:
      "Recall one past rescue and thank God for it by name.",
    relatedFaithPath: "/start/protection",
    readingGroup: "protection",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-18"],
  },
  {
    id: "romans-5",
    bookSlug: "romans",
    book: "Romans",
    chapter: 5,
    title: "Peace With God, Hope in Suffering",
    description: "Justified by faith, we have peace with God — and suffering that works toward hope.",
    theme: "Peace with God, endurance, and proven hope",
    whyRead:
      "Read Romans 5 when suffering feels pointless and you need to see how God works it toward hope.",
    contextIntro:
      "Romans 5 declares peace with God through faith, then traces a path: tribulation works patience, patience experience, and experience hope — a hope that does not make ashamed. Read it when you need endurance with a purpose.",
    reflectionQuestion:
      "What suffering might God be working toward patience, character, or hope in you?",
    prayerStarter:
      "Father, thank You for peace with You. In this hard season, work even my suffering toward hope.",
    smallNextStep:
      "Name one hard thing and one way it has grown your endurance.",
    relatedFaithPath: "/start/hope",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["romans-5"],
  },
  {
    id: "lamentations-3",
    bookSlug: "lamentations",
    book: "Lamentations",
    chapter: 3,
    title: "His Mercies Are New",
    description: "Grief that turns, mid-sentence, toward the faithfulness of God.",
    theme: "Honest lament and mercy that is new each morning",
    whyRead:
      "Read Lamentations 3 when grief is real and you need permission to mourn and a reason to hope.",
    contextIntro:
      "Lamentations 3 sits in deep sorrow, then turns on a hinge: 'his compassions fail not. They are new every morning.' Read it when you need to grieve honestly without losing hope.",
    reflectionQuestion:
      "What grief do you need to name honestly before you reach for 'his mercies are new'?",
    prayerStarter:
      "LORD, my sorrow is real. Meet me here, and let me trust that Your mercies are new this morning.",
    smallNextStep:
      "Name the grief plainly, then read verses 22-23 aloud.",
    relatedFaithPath: "/start/hope",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["lamentations-3"],
  },
  {
    id: "1-peter-1",
    bookSlug: "1-peter",
    book: "1 Peter",
    chapter: 1,
    title: "A Living Hope",
    description: "Born again to a living hope, kept by God's power through trials that refine faith.",
    theme: "Living hope, refined faith, and inheritance kept",
    whyRead:
      "Read 1 Peter 1 when your faith is being tested and you need hope that outlasts the trial.",
    contextIntro:
      "1 Peter 1 anchors a suffering people in a living hope and an inheritance that does not fade, describing trials as fire that refines faith more precious than gold. Read it when you are weary but still holding on.",
    reflectionQuestion:
      "How might your present trial be refining a faith more precious than gold?",
    prayerStarter:
      "Father, thank You for a living hope. Keep me by Your power and refine my faith through what is hard.",
    smallNextStep:
      "Name one trial and one thing it is teaching you to trust.",
    relatedFaithPath: "/start/hope",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["1-peter-1"],
  },
  {
    id: "revelation-21",
    bookSlug: "revelation",
    book: "Revelation",
    chapter: 21,
    title: "All Things New",
    description: "A new heaven and earth, where God wipes away every tear and death is no more.",
    theme: "Renewal, God's presence, and the end of every tear",
    whyRead:
      "Read Revelation 21 when grief or loss makes you long for the promise that God will make all things new.",
    contextIntro:
      "Revelation 21 shows the end of the story: God dwelling with His people, every tear wiped away, no more death or sorrow. Read it when you need to lift your eyes past the present to where everything is healed.",
    reflectionQuestion:
      "What tear do you long for God to wipe away — and how does this promise steady you today?",
    prayerStarter:
      "God who makes all things new, hold what hurts in me now, and keep my hope fixed on the day every tear is gone.",
    smallNextStep:
      "Name one loss you carry and pray it into the promise of verse 4.",
    relatedFaithPath: "/start/hope",
    readingGroup: "hope",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["revelation-21"],
  },
  {
    id: "proverbs-2",
    bookSlug: "proverbs",
    book: "Proverbs",
    chapter: 2,
    title: "Search for Wisdom",
    description: "Wisdom as buried treasure — sought, received, and protective.",
    theme: "Seeking wisdom, discernment, and protection",
    whyRead:
      "Read Proverbs 2 when you want to grow in discernment and seek wisdom as something worth digging for.",
    contextIntro:
      "Proverbs 2 promises that those who cry out for wisdom and search for it like hidden treasure will understand the fear of the LORD. Read it when you want to take the pursuit of wisdom seriously.",
    reflectionQuestion:
      "What decision or area of life are you willing to 'search for wisdom' about, rather than rush?",
    prayerStarter:
      "LORD, I want wisdom enough to dig for it. Give me discernment and a heart that seeks understanding.",
    smallNextStep:
      "Name one decision and one wise person you could ask about it this week.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "wisdom",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["proverbs-2"],
  },
  {
    id: "ecclesiastes-3",
    bookSlug: "ecclesiastes",
    book: "Ecclesiastes",
    chapter: 3,
    title: "A Time for Everything",
    description: "Seasons under heaven — and a God who makes everything beautiful in its time.",
    theme: "Seasons, timing, and trusting God's larger frame",
    whyRead:
      "Read Ecclesiastes 3 when life feels out of season and you need to trust that there is a time for everything.",
    contextIntro:
      "Ecclesiastes 3 names the seasons — to weep and laugh, mourn and dance, keep and let go — and sets them inside God's eternity. Read it when you need permission to be in the season you are actually in.",
    reflectionQuestion:
      "What season are you actually in right now, and what does it ask of you?",
    prayerStarter:
      "God of every season, help me accept the time I am in and trust that You make things beautiful in Your time.",
    smallNextStep:
      "Name your current season honestly and one thing it makes room for.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "wisdom",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["ecclesiastes-3"],
  },
  {
    id: "james-3",
    bookSlug: "james",
    book: "James",
    chapter: 3,
    title: "Taming the Tongue",
    description: "The power of words and the difference between earthly and heavenly wisdom.",
    theme: "Speech, humility, and wisdom from above",
    whyRead:
      "Read James 3 when your words have run ahead of you and you want wisdom that is gentle and peaceable.",
    contextIntro:
      "James 3 weighs the small but mighty tongue, then contrasts bitter, self-seeking 'wisdom' with the wisdom from above — pure, peaceable, gentle, and full of mercy. Read it when you want your words and motives to align.",
    reflectionQuestion:
      "Where do your words need the wisdom that is 'first pure, then peaceable'?",
    prayerStarter:
      "LORD, set a guard over my tongue and give me the wisdom from above — gentle, honest, and merciful.",
    smallNextStep:
      "Recall one recent conversation and one thing you'd say more gently next time.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "wisdom",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["james-3"],
  },
  {
    id: "colossians-3",
    bookSlug: "colossians",
    book: "Colossians",
    chapter: 3,
    title: "Put On Love",
    description: "Set your mind above, put off the old, and put on compassion, forgiveness, and love.",
    theme: "New life, forgiveness, and love as the bond",
    whyRead:
      "Read Colossians 3 when you want practical help putting off old patterns and putting on a life of love.",
    contextIntro:
      "Colossians 3 calls you to seek the things above, then to clothe yourself with mercy, kindness, humility, patience, forgiveness, and — over all — love, the bond of perfectness. Read it when you want to live differently.",
    reflectionQuestion:
      "What 'old garment' do you need to put off, and what part of love do you need to put on?",
    prayerStarter:
      "Lord, help me put off what is dying in me and put on compassion, forgiveness, and love today.",
    smallNextStep:
      "Name one person to forgive or be patient with, and one concrete act of kindness.",
    relatedFaithPath: "/start/forgiveness",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["colossians-3"],
  },
  {
    id: "galatians-5",
    bookSlug: "galatians",
    book: "Galatians",
    chapter: 5,
    title: "The Fruit of the Spirit",
    description: "Freedom that serves in love, and the fruit the Spirit grows in a yielded life.",
    theme: "Freedom, the Spirit, and fruit that grows",
    whyRead:
      "Read Galatians 5 when you want to grow love, joy, peace, and patience instead of forcing them.",
    contextIntro:
      "Galatians 5 sets freedom against the works of the flesh and lists the fruit of the Spirit — love, joy, peace, longsuffering, gentleness, and more. Read it when you want character that is grown, not manufactured.",
    reflectionQuestion:
      "Which fruit of the Spirit do you most want God to grow in you this season?",
    prayerStarter:
      "Holy Spirit, grow Your fruit in me. I cannot force love, joy, or peace — I can only yield to You.",
    smallNextStep:
      "Pick one fruit and one situation today to let the Spirit grow it.",
    relatedFaithPath: "/start/peace",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["galatians-5"],
  },
  {
    id: "1-john-4",
    bookSlug: "1-john",
    book: "1 John",
    chapter: 4,
    title: "God Is Love",
    description: "Love that comes from God, casts out fear, and shows itself in how we love each other.",
    theme: "God's love, perfect love, and loving one another",
    whyRead:
      "Read 1 John 4 when you need to be reminded that love comes from God and casts out fear.",
    contextIntro:
      "1 John 4 grounds all love in God — 'we love him, because he first loved us' — and says perfect love casts out fear. Read it when fear has crowded out love, or love feels hard to give.",
    reflectionQuestion:
      "Where do you need 'perfect love' to cast out a fear that's been steering you?",
    prayerStarter:
      "God who is love, let Your love cast out my fear and overflow into how I love the people near me.",
    smallNextStep:
      "Name one fear and one person you can love more freely because of God's love for you.",
    relatedFaithPath: "/start/family",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["1-john-4"],
  },
  {
    id: "romans-12",
    bookSlug: "romans",
    book: "Romans",
    chapter: 12,
    title: "Love in Action",
    description: "A living sacrifice, a renewed mind, and love that is sincere and practical.",
    theme: "Surrender, renewal, and sincere love",
    whyRead:
      "Read Romans 12 when you want faith to become daily, practical love.",
    contextIntro:
      "Romans 12 turns belief into life: present yourself a living sacrifice, be transformed by a renewed mind, and let love be without hypocrisy — patient, humble, and good to all. Read it when you want to live what you believe.",
    reflectionQuestion:
      "What would 'love without hypocrisy' look like in one relationship this week?",
    prayerStarter:
      "Lord, renew my mind and make my love sincere. Help me offer today to You as a living sacrifice.",
    smallNextStep:
      "Choose one act of sincere love to do today without being asked.",
    relatedFaithPath: "/start/guidance",
    readingGroup: "love",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["romans-12"],
  },
  {
    id: "ephesians-1",
    bookSlug: "ephesians",
    book: "Ephesians",
    chapter: 1,
    title: "Chosen and Adopted",
    description: "Blessed, chosen, adopted, and sealed — the riches of belonging to God.",
    theme: "Belonging, adoption, and spiritual blessing",
    whyRead:
      "Read Ephesians 1 when you need to remember who you are and whose you are.",
    contextIntro:
      "Ephesians 1 piles up the riches of belonging to God: chosen before the foundation of the world, adopted, redeemed, and sealed with the Spirit. Read it when your identity feels shaky.",
    reflectionQuestion:
      "How would today feel different if you truly received that you are chosen and adopted?",
    prayerStarter:
      "Father, thank You for choosing and adopting me. Open my eyes to the riches of belonging to You.",
    smallNextStep:
      "Read verses 3-6 and write one truth about who you are in Christ.",
    relatedFaithPath: "/start/hope",
    readingGroup: "identity",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["ephesians-1"],
  },
  {
    id: "psalms-8",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 8,
    title: "What Is Man",
    description: "Wonder at God's majesty and the dignity He gives to small human beings.",
    theme: "Wonder, smallness, and God-given dignity",
    whyRead:
      "Read Psalm 8 when you feel small and need to recover both humility and dignity before God.",
    contextIntro:
      "Psalm 8 looks up at the heavens and asks, 'what is man, that thou art mindful of him?' — then marvels that God crowns humanity with honour. Read it to hold smallness and dignity together.",
    reflectionQuestion:
      "How does it change your day to be both small before God and crowned with honour by Him?",
    prayerStarter:
      "LORD, how excellent is Your name. Thank You that You are mindful of me even in my smallness.",
    smallNextStep:
      "Step outside, look up, and thank God for one thing you can see.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "identity",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-8"],
  },
  {
    id: "psalms-100",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 100,
    title: "Make a Joyful Noise",
    description: "A short, full-hearted call to thanksgiving and praise.",
    theme: "Thanksgiving, gladness, and the goodness of God",
    whyRead:
      "Read Psalm 100 when you need a simple, direct turn toward gratitude and praise.",
    contextIntro:
      "Psalm 100 is brief and bright: serve the LORD with gladness, enter His gates with thanksgiving, for the LORD is good and His mercy is everlasting. Read it when your heart needs to be lifted.",
    reflectionQuestion:
      "What can you give thanks for right now, even in a small voice?",
    prayerStarter:
      "LORD, You are good and Your mercy endures. Lift my heart to thank You, even today.",
    smallNextStep:
      "Say three specific thank-yous to God out loud.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "praise",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-100"],
  },
  {
    id: "psalms-103",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 103,
    title: "Bless the LORD, O My Soul",
    description: "Remembering God's benefits — forgiveness, healing, redemption, and steadfast mercy.",
    theme: "Gratitude, mercy, and a God who remembers we are dust",
    whyRead:
      "Read Psalm 103 when you need to remember God's benefits and His tender, fatherly mercy.",
    contextIntro:
      "Psalm 103 calls the soul to bless the LORD and 'forget not all his benefits' — forgiveness, healing, redemption — and pictures God as a father who pities, knowing we are but dust. Read it to recover gratitude and tenderness.",
    reflectionQuestion:
      "Which of God's benefits — forgiveness, healing, redemption, mercy — do you most need to remember today?",
    prayerStarter:
      "Bless the LORD, O my soul. Help me forget not Your benefits, and receive Your mercy like a child.",
    smallNextStep:
      "List three 'benefits' from God you tend to forget, and thank Him for each.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "praise",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-103"],
  },
  {
    id: "psalms-145",
    bookSlug: "psalms",
    book: "Psalms",
    chapter: 145,
    title: "I Will Extol Thee",
    description: "Daily praise for the greatness, goodness, and nearness of God to all who call.",
    theme: "Daily praise and God's nearness to all who call",
    whyRead:
      "Read Psalm 145 when you want to make praise a daily habit and remember God is near to all who call.",
    contextIntro:
      "Psalm 145 praises God every day for His greatness and tender mercies, declaring that the LORD is near to all who call upon Him in truth. Read it to make gratitude a daily rhythm.",
    reflectionQuestion:
      "What would it look like to praise God 'every day' this week, not only when things go well?",
    prayerStarter:
      "LORD, I will extol You. Be near to me as I call, and teach me to praise You every day.",
    smallNextStep:
      "Set one daily moment this week to name one thing God is good in.",
    relatedFaithPath: "/start/gratitude",
    readingGroup: "praise",
    translation: "King James Version",
    sourceNote: kjvSourceNote,
    verses: kjvReadingVerses["psalms-145"],
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
