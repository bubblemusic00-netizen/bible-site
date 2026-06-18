export type GuideSlug =
  | "start-reading-the-bible"
  | "how-to-pray"
  | "who-is-jesus"
  | "what-is-grace"
  | "what-is-faith"
  | "christian-symbols"
  | "how-to-use-hope-bible";

export type GuideGroupKey = "start" | "bible-prayer" | "ideas" | "symbols";

export type GuideLink = {
  label: string;
  href: string;
  description: string;
};

export type GuideSection = {
  heading: string;
  body: string[];
};

export type Guide = {
  slug: GuideSlug;
  title: string;
  shortTitle: string;
  description: string;
  audience: string;
  group: GuideGroupKey;
  intro: string;
  sections: GuideSection[];
  practicalSteps: string[];
  relatedBible: GuideLink[];
  relatedPrayers: GuideLink[];
  relatedFaithPaths: GuideLink[];
  relatedSymbols: GuideLink[];
  boundaryNote: string;
};

export const guideGroups = [
  {
    key: "start",
    title: "Start here",
    description:
      "Simple orientation for using Selah with Scripture, prayer, and reflection.",
  },
  {
    key: "bible-prayer",
    title: "Bible and prayer",
    description:
      "Beginner guidance for reading Scripture slowly and praying honestly.",
  },
  {
    key: "ideas",
    title: "Core Christian ideas",
    description:
      "Plain-language introductions to Jesus, grace, faith, and careful next steps.",
  },
  {
    key: "symbols",
    title: "Symbols and reminders",
    description:
      "How Christian symbols can point back to prayer and Scripture without being treated as power.",
  },
] as const satisfies readonly {
  key: GuideGroupKey;
  title: string;
  description: string;
}[];

export const guides = {
  "how-to-use-hope-bible": {
    slug: "how-to-use-hope-bible",
    title: "How to Use Selah",
    shortTitle: "Use Selah",
    description:
      "A simple guide to the Faith Quiz, guided Bible readings, prayer pages, reflection prompts, and faith-symbol reminders.",
    audience:
      "For first-time visitors who want a clear, honest way to begin.",
    group: "start",
    intro:
      "Selah is built to help you take one calm next step: choose a need, read Scripture, pray honestly, reflect, and carry a simple reminder if it helps. Free guidance comes first, and no physical reminder is required.",
    sections: [
      {
        heading: "Begin with the Faith Quiz",
        body: [
          "The Faith Quiz asks a few simple questions about what you are carrying today. It does not diagnose you, label you, or collect personal information.",
          "Your result points you toward a Scripture reading, a prayer, a reflection prompt, and an optional faith-symbol reminder.",
        ],
      },
      {
        heading: "Read one guided Bible passage",
        body: [
          "The guided readings are focused, finished pages rather than a full Bible database. Each reading includes Scripture text, short context, reflection, prayer, and a small next step.",
          "If you are new, begin with John 1, John 3, Psalm 23, or Matthew 11:28-30.",
        ],
      },
      {
        heading: "Choose a prayer for today",
        body: [
          "The Prayer Library is for honest prayer when you need words to begin. You can choose a prayer for peace, anxiety, grief, guidance, gratitude, family, work, and more.",
          "Prayer here is offered as spiritual encouragement, not as a promise that every situation will change.",
        ],
      },
      {
        heading: "Reflect and take one small step",
        body: [
          "Most pages include a reflection prompt and a small next step. Keep the step small enough to actually do today.",
          "A small faithful step might be reading slowly, asking for help, writing one sentence, reaching out to a safe person, or choosing patience before responding.",
        ],
      },
      {
        heading: "Use symbols carefully",
        body: [
          "Faith symbols can help some people remember prayer and Scripture during ordinary moments.",
          "They are reminders only. They are not guarantees, charms, spiritual power sources, or substitutes for faith, wisdom, community, or care.",
        ],
      },
    ],
    practicalSteps: [
      "Take the Faith Quiz and choose the need that feels most honest today.",
      "Open the suggested Scripture reading and read it slowly.",
      "Pray one prayer from the Prayer Library without trying to sound perfect.",
      "Answer one reflection prompt in a sentence or two.",
      "Return to Content Boundaries if you are unsure what the site can and cannot offer.",
    ],
    relatedBible: [
      {
        label: "Guided Bible Readings",
        href: "/bible",
        description: "Browse the finished Scripture reading library.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Choose a finished prayer for what you are carrying today.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Receive Scripture, prayer, reflection, and a small next step.",
      },
    ],
    relatedSymbols: [
      {
        label: "Faith Symbols",
        href: "/jewelry",
        description: "Learn about Christian symbols as optional reminders.",
      },
      {
        label: "Editorial Principles",
        href: "/editorial-principles",
        description: "Read how Selah approaches content with boundaries.",
      },
    ],
    boundaryNote:
      "Selah is independent. It is not a church, pastor, ministry, denomination, Bible publisher, or religious authority.",
  },
  "start-reading-the-bible": {
    slug: "start-reading-the-bible",
    title: "How to Start Reading the Bible",
    shortTitle: "Start Reading",
    description:
      "A beginner-friendly way to start reading Scripture slowly, prayerfully, and without treating verses like formulas.",
    audience:
      "For people who are new to Bible reading or returning after a long time away.",
    group: "bible-prayer",
    intro:
      "Starting the Bible can feel intimidating because it is a large library of books, poetry, history, prophecy, letters, and Gospel accounts. You do not have to understand everything at once. Begin small, read honestly, and let one passage receive your attention.",
    sections: [
      {
        heading: "Start small",
        body: [
          "A helpful first step is one chapter or one guided reading, not a plan that feels impossible by day three.",
          "Read slowly enough to notice repeated words, questions, comfort, challenge, and anything that makes you curious.",
        ],
      },
      {
        heading: "Begin with a Gospel or a guided reading",
        body: [
          "Many beginners start with the Gospel of John because it introduces Jesus through themes of Word, light, life, love, and faith.",
          "Psalm 23 is also a gentle place to begin if you need comfort, prayer language, or a picture of God's care.",
        ],
      },
      {
        heading: "Ask simple questions",
        body: [
          "After reading, ask: What does this passage show about God? What does it show about people? What does it invite me to notice about faith?",
          "You do not need to force a dramatic answer. A single honest observation is enough for a beginning.",
        ],
      },
      {
        heading: "Pray after reading",
        body: [
          "Prayer can be as simple as, 'God, help me understand what I read and live with honesty today.'",
          "If a passage comforts you, give thanks. If it unsettles you, bring that honestly too.",
        ],
      },
      {
        heading: "Do not use verses as magic formulas",
        body: [
          "Scripture is not a charm for controlling outcomes. Read verses in context, with humility, and with care for what the whole passage is saying.",
          "If a passage feels difficult, slow down, seek context, and ask wise people instead of forcing a quick meaning.",
        ],
      },
    ],
    practicalSteps: [
      "Choose one guided reading instead of trying to read everything at once.",
      "Read the passage slowly twice.",
      "Write one thing the passage shows about God, people, or faith.",
      "Pray one honest sentence after reading.",
      "Take one small next step that fits the passage.",
    ],
    relatedBible: [
      {
        label: "John 1",
        href: "/bible/john/1",
        description: "Begin with Word, light, life, and the opening of John's Gospel.",
      },
      {
        label: "John 3",
        href: "/bible/john/3",
        description: "Read about new birth, God's love, and faith.",
      },
      {
        label: "Psalm 23",
        href: "/bible/psalms/23",
        description: "A short, comforting passage for prayer and trust.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer for Guidance",
        href: "/prayer/guidance",
        description: "Pray for patience and wisdom before the next step.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Choose a need and receive Scripture, prayer, and reflection.",
      },
    ],
    relatedSymbols: [],
    boundaryNote:
      "Selah can help you begin, but it does not replace Scripture itself, church community, pastoral care, or wise Christian teaching.",
  },
  "how-to-pray": {
    slug: "how-to-pray",
    title: "How to Pray When You Do Not Know What to Say",
    shortTitle: "How to Pray",
    description:
      "A gentle guide for beginning prayer honestly when words feel awkward, tired, anxious, or absent.",
    audience:
      "For beginners, anxious hearts, tired people, and anyone unsure how to begin praying.",
    group: "bible-prayer",
    intro:
      "Prayer does not require polished words. You can begin with honesty, silence, a simple request, or one sentence of gratitude. The goal is not to perform; it is to turn toward God with what is real.",
    sections: [
      {
        heading: "Start honestly",
        body: [
          "Begin with what is true: 'God, I do not know what to say,' or 'God, I feel tired,' or 'God, help me pray.'",
          "Honesty is a better beginning than pretending to feel calm, certain, or spiritually impressive.",
        ],
      },
      {
        heading: "Name what you are carrying",
        body: [
          "You might name a fear, decision, sorrow, frustration, gratitude, or person you are concerned about.",
          "Naming something before God can make prayer concrete without needing to explain every detail.",
        ],
      },
      {
        heading: "Ask for help",
        body: [
          "Ask for wisdom, mercy, patience, courage, peace, or the strength to take one faithful step.",
          "Avoid turning prayer into a demand for a guaranteed result. Ask honestly and humbly.",
        ],
      },
      {
        heading: "Sit quietly",
        body: [
          "A few quiet breaths can be part of prayer. Silence is not failure.",
          "If your thoughts wander, gently return to one word or phrase, such as mercy, help, peace, or thank You.",
        ],
      },
      {
        heading: "End with gratitude",
        body: [
          "Gratitude does not deny pain. It simply notices one gift, one mercy, or one reason to keep going.",
          "If life feels heavy, gratitude may be small: breath, shelter, a person, a meal, a passage, or the courage to ask for help.",
        ],
      },
    ],
    practicalSteps: [
      "Say one honest sentence to God.",
      "Name one thing you are carrying.",
      "Ask for help with one word or phrase.",
      "Sit quietly for a few breaths.",
      "End by naming one small gift or mercy.",
    ],
    relatedBible: [
      {
        label: "Philippians 4",
        href: "/bible/philippians/4",
        description: "A guided reading about prayer, thanksgiving, and peace.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Choose a finished prayer if you need words to begin.",
      },
      {
        label: "Prayer for Anxiety",
        href: "/prayer/anxiety",
        description: "A grounded prayer for anxious thoughts and one small next step.",
      },
      {
        label: "Prayer for Peace",
        href: "/prayer/peace",
        description: "A quiet prayer for a restless heart.",
      },
      {
        label: "Prayer for Guidance",
        href: "/prayer/guidance",
        description: "A prayer for wisdom before a decision.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Find a prayer and Scripture reading for what you need today.",
      },
    ],
    relatedSymbols: [],
    boundaryNote:
      "Prayer is meaningful, but it does not replace pastoral care, counseling, medical help, emergency support, or trusted community when those are needed.",
  },
  "who-is-jesus": {
    slug: "who-is-jesus",
    title: "Who Is Jesus? A Beginner Reading Path",
    shortTitle: "Who Is Jesus?",
    description:
      "A beginner path through John 1, John 3, Luke 15, and Matthew 11 for learning broad Christian basics about Jesus.",
    audience:
      "For people beginning to explore Jesus through Scripture without needing a heavy theological vocabulary first.",
    group: "ideas",
    intro:
      "Christian faith centers on Jesus. A beginner does not need to master every doctrine before reading the Gospels. Start with a few passages that introduce Jesus through light, life, love, mercy, return, and rest.",
    sections: [
      {
        heading: "John 1: Word, light, and life",
        body: [
          "John 1 introduces Jesus with rich language: Word, light, life, and the one who makes God known.",
          "Do not rush this chapter. Let the images help you notice that Christian faith sees Jesus as more than a moral teacher.",
        ],
      },
      {
        heading: "John 3: new birth and God's love",
        body: [
          "John 3 includes Jesus' conversation with Nicodemus about new birth, faith, and God's love.",
          "For beginners, this passage raises a central question: What does it mean to receive life from God rather than simply improve yourself?",
        ],
      },
      {
        heading: "Luke 15: grace and returning",
        body: [
          "Luke 15 tells stories about lost things being found and people returning home.",
          "This is a helpful place to see Jesus' attention to repentance, mercy, and the joy of return without reducing grace to cheap permission.",
        ],
      },
      {
        heading: "Matthew 11: rest for the weary",
        body: [
          "Matthew 11:28-30 gives Jesus' invitation to the weary and burdened.",
          "The passage is short, but it carries a gentle picture of coming to Jesus with exhaustion, need, and humility.",
        ],
      },
    ],
    practicalSteps: [
      "Read John 1 and write one image used for Jesus.",
      "Read John 3 and notice what it says about love and faith.",
      "Read Luke 15 and ask what returning looks like.",
      "Read Matthew 11:28-30 slowly if you feel weary.",
      "Pray honestly about what you want to understand next.",
    ],
    relatedBible: [
      {
        label: "John 1",
        href: "/bible/john/1",
        description: "A guided reading on Word, light, life, and Jesus.",
      },
      {
        label: "John 3",
        href: "/bible/john/3",
        description: "A guided reading on God's love, new birth, and faith.",
      },
      {
        label: "Luke 15",
        href: "/bible/luke/15",
        description: "A guided reading on grace, repentance, and returning.",
      },
      {
        label: "Matthew 11:28-30",
        href: "/bible/matthew/11",
        description: "A guided reading on rest, weariness, and Jesus' invitation.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer for Hope",
        href: "/prayer/hope",
        description: "Pray for hope while exploring Jesus' invitation.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Hope Faith Path",
        href: "/start/hope",
        description: "Begin with Scripture, prayer, reflection, and a small step.",
      },
    ],
    relatedSymbols: [],
    boundaryNote:
      "This guide introduces broad Christian basics and does not try to settle denominational debates or replace church teaching.",
  },
  "what-is-grace": {
    slug: "what-is-grace",
    title: "What Is Grace?",
    shortTitle: "Grace",
    description:
      "A beginner guide to grace as gift and mercy, connected to forgiveness, repentance, responsibility, and renewal.",
    audience:
      "For readers who hear the word grace but want a plain, careful explanation.",
    group: "ideas",
    intro:
      "Grace is one of the central words Christians use for God's mercy and gift. It is not something earned by spiritual performance. It also does not erase truth, responsibility, repentance, or repair.",
    sections: [
      {
        heading: "Grace is gift, not wages",
        body: [
          "Ephesians 2 speaks about grace as gift rather than something earned.",
          "That matters because Christian faith is not mainly about proving you are already strong enough or good enough.",
        ],
      },
      {
        heading: "Grace includes mercy",
        body: [
          "Grace meets people with mercy, especially where there is sin, failure, shame, or need.",
          "Mercy does not mean pretending harm is harmless. It means truth and compassion are held together.",
        ],
      },
      {
        heading: "Grace does not excuse harm",
        body: [
          "Grace should never be used to pressure someone to ignore abuse, deny injury, or avoid responsibility.",
          "Real grace can lead toward confession, repentance, repair, boundaries, and renewal.",
        ],
      },
      {
        heading: "Grace invites return",
        body: [
          "Luke 15 is a powerful place to see return, repentance, and welcome.",
          "The story does not make failure good. It shows mercy meeting someone who comes home.",
        ],
      },
    ],
    practicalSteps: [
      "Read Ephesians 2 slowly and notice gift language.",
      "Name one place where you need mercy without hiding truth.",
      "Pray for forgiveness with honesty.",
      "Consider whether repair, confession, or a boundary is needed.",
    ],
    relatedBible: [
      {
        label: "Ephesians 2",
        href: "/bible/ephesians/2",
        description: "A guided reading on grace, faith, mercy, and gift.",
      },
      {
        label: "Romans 8",
        href: "/bible/romans/8",
        description: "A guided reading on weakness, hope, and God's love.",
      },
      {
        label: "Luke 15",
        href: "/bible/luke/15",
        description: "A guided reading on grace, repentance, and returning.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer for Forgiveness",
        href: "/prayer/forgiveness",
        description: "Pray for mercy, honesty, and careful repair.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Hope Faith Path",
        href: "/start/hope",
        description: "Bring heaviness or longing into Scripture and prayer.",
      },
    ],
    relatedSymbols: [],
    boundaryNote:
      "Grace should never be used to excuse harm, manipulate reconciliation, or replace wise care from trusted people.",
  },
  "what-is-faith": {
    slug: "what-is-faith",
    title: "What Is Faith?",
    shortTitle: "Faith",
    description:
      "A beginner guide to faith as trust, response, practice, and walking with God even with questions or weakness.",
    audience:
      "For readers wondering whether faith means certainty, performance, or something more honest.",
    group: "ideas",
    intro:
      "Faith is often described as trust in God, a response to God's grace, and a way of walking forward. It is not the same as pretending to have no questions, no weakness, or no fear.",
    sections: [
      {
        heading: "Faith is trust",
        body: [
          "Faith includes trust: leaning toward God even when you do not control the whole path.",
          "Trust does not mean you understand everything or feel confident every moment.",
        ],
      },
      {
        heading: "Faith is a response",
        body: [
          "Christian faith is not only an idea in the mind. It becomes response: prayer, repentance, love, obedience, patience, and small faithful steps.",
          "James 1 is helpful because it connects faith with wisdom, listening, endurance, and action.",
        ],
      },
      {
        heading: "Faith can include weakness",
        body: [
          "Fear, questions, and weariness do not automatically mean faith is absent.",
          "Mark 4 shows frightened disciples bringing fear to Jesus in a storm. The passage is honest about fear and still points toward trust.",
        ],
      },
      {
        heading: "Faith is practiced",
        body: [
          "Faith is practiced through Scripture, prayer, Christian community, wise counsel, confession, love, and ordinary obedience.",
          "Start with a small step instead of trying to prove everything at once.",
        ],
      },
    ],
    practicalSteps: [
      "Read John 3 and notice the language of faith and life.",
      "Read James 1 and ask what practical faith looks like today.",
      "Name one question you can bring honestly before God.",
      "Choose one small faithful step.",
    ],
    relatedBible: [
      {
        label: "John 3",
        href: "/bible/john/3",
        description: "A guided reading on new birth, God's love, and faith.",
      },
      {
        label: "James 1",
        href: "/bible/james/1",
        description: "A guided reading on wisdom, trials, and practical faith.",
      },
      {
        label: "Mark 4:35-41",
        href: "/bible/mark/4",
        description: "A guided reading on fear, storm, and trust.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer for Courage",
        href: "/prayer/courage",
        description: "Pray for one brave, wise next step.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Choose what you need and receive a guided path.",
      },
    ],
    relatedSymbols: [],
    boundaryNote:
      "This guide keeps faith language broad and beginner-friendly. It does not replace discipleship, church teaching, or pastoral care.",
  },
  "christian-symbols": {
    slug: "christian-symbols",
    title: "What Are Christian Symbols?",
    shortTitle: "Christian Symbols",
    description:
      "A careful guide to Christian symbols as reminders of Scripture, prayer, and faith rather than charms or guarantees.",
    audience:
      "For readers who want to understand symbols respectfully before using or wearing them.",
    group: "symbols",
    intro:
      "Christian symbols can help some people remember faith in ordinary moments. A symbol can point your attention back to Scripture, prayer, or a truth you want to carry carefully. It should never be treated as a charm, spiritual tool, or source of power.",
    sections: [
      {
        heading: "Symbols point beyond themselves",
        body: [
          "A cross, dove, anchor, fish, heart, or crown is not powerful in itself.",
          "The value of a symbol is in what it helps someone remember: Christ, prayer, hope, love, the Holy Spirit, or God's kingdom.",
        ],
      },
      {
        heading: "Common examples",
        body: [
          "The cross often points to Jesus, sacrifice, grace, and discipleship. The dove often points to peace and the Holy Spirit. The anchor can point to hope and steadiness.",
          "The fish, sometimes called Ichthys, has long been associated with Christian identity. A heart can point to love and mercy. A crown can point to God's kingdom.",
        ],
      },
      {
        heading: "Symbols are not guarantees",
        body: [
          "A Christian symbol does not guarantee protection, healing, blessing, success, salvation, or spiritual results.",
          "It should not be used to replace prayer, Scripture, repentance, wise care, or Christian community.",
        ],
      },
      {
        heading: "Use symbols with humility",
        body: [
          "If a symbol helps you remember to pray, read Scripture, love patiently, or slow down before reacting, it can be a meaningful reminder.",
          "If it starts to feel like an object with power, return to Scripture, prayer, and the Content Boundaries page.",
        ],
      },
      {
        heading: "Free guidance remains primary",
        body: [
          "If Selah later offers optional physical reminders, they should remain separate from the free Scripture, prayer, and reflection guidance.",
          "No physical reminder is required to use the Bible readings, prayers, guides, or Faith Quiz.",
        ],
      },
    ],
    practicalSteps: [
      "Choose one symbol and name what it should remind you of.",
      "Connect that reminder to one Scripture passage or prayer.",
      "Avoid treating the symbol as a guarantee or source of power.",
      "Return to free guidance first: Scripture, prayer, reflection, and a small step.",
    ],
    relatedBible: [
      {
        label: "1 Corinthians 13",
        href: "/bible/1-corinthians/13",
        description: "Read about love as patient, truthful, and enduring.",
      },
      {
        label: "Psalm 46",
        href: "/bible/psalms/46",
        description: "Read about refuge, stillness, and trust.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer for Peace",
        href: "/prayer/peace",
        description: "Pray with a restless heart and slow attention.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Begin with the need you are carrying today.",
      },
    ],
    relatedSymbols: [
      {
        label: "Faith Symbols",
        href: "/jewelry",
        description: "Explore symbols as educational reminders.",
      },
      {
        label: "Cross Symbol Meaning",
        href: "/jewelry/symbols/cross",
        description: "Learn how the cross can point to Christ, grace, and discipleship.",
      },
      {
        label: "Dove Symbol Meaning",
        href: "/jewelry/symbols/dove",
        description: "Learn how the dove can point to peace, gentleness, and prayer.",
      },
      {
        label: "Anchor Symbol Meaning",
        href: "/jewelry/symbols/anchor",
        description: "Learn how the anchor can point to hope and steadiness.",
      },
      {
        label: "Editorial Principles",
        href: "/editorial-principles",
        description: "Read how symbols are framed with careful boundaries.",
      },
      {
        label: "Content Boundaries",
        href: "/content-boundaries",
        description: "Review what symbols are not meant to be.",
      },
    ],
    boundaryNote:
      "Symbols are reminders only. They are not charms, protection objects, healing tools, luck items, guarantees, or sources of spiritual power.",
  },
} as const satisfies Record<GuideSlug, Guide>;

export const guideKeys = Object.keys(guides) as GuideSlug[];

const guideGroupOrder = {
  start: ["how-to-use-hope-bible"],
  "bible-prayer": ["start-reading-the-bible", "how-to-pray"],
  ideas: ["who-is-jesus", "what-is-grace", "what-is-faith"],
  symbols: ["christian-symbols"],
} as const satisfies Record<GuideGroupKey, readonly GuideSlug[]>;

export const groupedGuides = guideGroups
  .map((group) => ({
    ...group,
    guides: guideGroupOrder[group.key].map((slug) => guides[slug]),
  }))
  .filter((group) => group.guides.length > 0);

export function getGuide(slug: string): Guide | undefined {
  return guides[slug as GuideSlug];
}
