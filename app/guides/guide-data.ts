export type GuideSlug =
  | "start-reading-the-bible"
  | "how-to-pray"
  | "who-is-jesus"
  | "what-is-grace"
  | "what-is-faith"
  | "christian-symbols"
  | "how-to-use-hope-bible"
  | "what-is-the-gospel"
  | "who-is-the-holy-spirit"
  | "what-is-sin-and-forgiveness"
  | "starting-a-daily-quiet-time"
  | "handling-doubt";

export type GuideGroupKey =
  | "start"
  | "bible-prayer"
  | "ideas"
  | "symbols"
  | "growing";

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
    key: "growing",
    title: "Growing and honest questions",
    description:
      "Steady, honest help for building a daily rhythm and carrying real doubts without shame.",
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
  "what-is-the-gospel": {
    slug: "what-is-the-gospel",
    title: "What Is the Gospel?",
    shortTitle: "The Gospel",
    description:
      "A plain, honest introduction to the good news at the center of the Christian faith.",
    audience:
      "For anyone new to Christianity, including those who feel unsure, skeptical, or quietly hurting.",
    group: "ideas",
    intro:
      "The word “gospel” gets used a lot, but its meaning is simple and surprisingly hopeful. This is an unhurried look at what Christians actually mean by it. You do not need to believe anything yet to keep reading.",
    sections: [
      {
        heading: "What “gospel” means",
        body: [
          "The word “gospel” simply means “good news.” It is not a rulebook or a set of demands you must perform; it is an announcement of something that has already happened.",
          "At its heart, the gospel is news about God reaching toward people, rather than people climbing toward God. It is meant to be received, the way you receive good news from someone who loves you.",
        ],
      },
      {
        heading: "The honest part: something is broken",
        body: [
          "If you have ever sensed that the world is not the way it should be — that people hurt each other, that you yourself fall short of who you want to be — Christianity takes that seriously. It calls this brokenness “sin,” a word that names not just bad deeds but a deep separation from God.",
          "This is not meant to shame you; it is meant to be honest. Naming the wound is the first step toward healing it, and the gospel says you are not beyond reach.",
        ],
      },
      {
        heading: "What Jesus did",
        body: [
          "Christians believe God did not stay distant. In Jesus, God entered the world, lived a real human life, met people in their suffering, died on a cross bearing the weight of human sin, and on the third day rose again, breaking the power of death.",
          "The Bible puts it plainly: “For God so loved the world, that he gave his only begotten Son” (John 3:16). And Romans 5:8 says that while we were yet sinners, Christ died for us. This is the center of the good news: love that acts before we deserve it.",
        ],
      },
      {
        heading: "How a person responds",
        body: [
          "The gospel is received by grace through faith, not earned by being good enough. Ephesians 2:8-9 describes salvation as the gift of God, not a result of works, so that no one can boast.",
          "Responding can be as simple as honestly turning toward God: admitting you need help, trusting what Jesus did, and being willing to follow him. There is no perfect formula and no pressure — it begins as a quiet yes, not a performance.",
        ],
      },
    ],
    practicalSteps: [
      "Read the Gospel of John slowly, a little at a time, to meet Jesus in his own story.",
      "Talk to God honestly in your own words, even if it feels unfamiliar.",
      "Sit with your questions instead of rushing; doubt is welcome here.",
      "Find one trustworthy person or a local church where you can ask things out loud.",
      "Notice and write down small moments of peace, gratitude, or change.",
    ],
    relatedBible: [
      {
        label: "John 3",
        href: "/bible/john/3",
        description: "New birth and God's love — a clear doorway into the gospel.",
      },
      {
        label: "Romans 5",
        href: "/bible/romans/5",
        description: "Peace with God and a hope that does not disappoint.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Begin an honest prayer in your own words.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Receive Scripture, prayer, and one small next step.",
      },
    ],
    relatedSymbols: [
      {
        label: "The Cross",
        href: "/jewelry/symbols/cross",
        description: "The central symbol of the good news — a reminder, not a charm.",
      },
    ],
    boundaryNote:
      "This is a gentle introduction, not the whole of the Christian life, and no substitute for a real community, a church, or pastoral care. Nothing here is a transaction or a guarantee — it is an invitation you are free to explore at your own pace.",
  },
  "who-is-the-holy-spirit": {
    slug: "who-is-the-holy-spirit",
    title: "Who Is the Holy Spirit?",
    shortTitle: "The Holy Spirit",
    description:
      "A gentle introduction to the Holy Spirit — who he is, what he does, and how to walk with him.",
    audience:
      "For anyone new to faith who finds the Holy Spirit abstract, distant, or hard to picture.",
    group: "ideas",
    intro:
      "Of the three persons of the Trinity, the Holy Spirit is often the hardest to picture. The Father and the Son give us something to hold onto; the Spirit can feel like a vague mist or a mood. But Scripture speaks of the Spirit as someone deeply personal and present.",
    sections: [
      {
        heading: "The Spirit is God, and the Spirit is personal",
        body: [
          "The Holy Spirit is not an energy or God's spare influence floating around. He is God — the third person of the Trinity, fully equal with the Father and the Son. The Bible treats the Spirit as a “he,” not an “it”: he speaks, teaches, can be grieved, and chooses.",
          "This matters because a force can be used, but a person can be known. The Spirit is given to everyone who belongs to Jesus, dwelling within them — not as a reward earned, but as a gift.",
        ],
      },
      {
        heading: "What the Spirit does",
        body: [
          "Jesus called the Spirit the Comforter, who would teach and bring his words to remembrance (John 14:26). The Spirit comforts the weary, guides toward truth, and gently convicts — the quiet ache that nudges you away from harm. Conviction is not condemnation; it is the kindness of God showing you a better way home.",
          "The Spirit also helps where we feel weakest: “the Spirit itself maketh intercession for us with groanings which cannot be uttered” (Romans 8:26). When you have no words, you are not praying alone.",
        ],
      },
      {
        heading: "The fruit: a slowly changed life",
        body: [
          "Over time the Spirit grows what the Bible calls fruit: “love, joy, peace, longsuffering, gentleness, goodness, faith” (Galatians 5:22-23). Notice the word fruit — it is grown, not manufactured, ripening quietly and in season.",
          "This is freeing, because it takes the pressure off. You are not asked to white-knuckle your way into being a better person overnight. Your part is to stay near, the way a branch stays joined to the vine.",
        ],
      },
      {
        heading: "Walking with the Spirit day to day",
        body: [
          "Relating to the Spirit is less about dramatic experiences and more about a steady posture: yield, ask, and notice. You can simply pray, “Holy Spirit, help me here,” and leave room for silence.",
          "Then pay attention — to the nudge toward patience, the unexpected peace, the verse that lands at the right moment. None of this needs to be loud, and a quiet, undramatic walk with the Spirit is just as real as any other.",
        ],
      },
    ],
    practicalSteps: [
      "Read John 14 slowly, watching for everything Jesus says about the Spirit.",
      "Begin one prayer this week with “Holy Spirit, help me,” and leave room for silence.",
      "When you feel a gentle conviction, treat it as guidance home, not condemnation.",
      "Pick one fruit from Galatians 5 and ask God to grow it in you this season.",
      "Stay connected to a church, where the Spirit often works through others.",
    ],
    relatedBible: [
      {
        label: "John 14",
        href: "/bible/john/14",
        description: "Jesus promises the Comforter and a peace the world cannot give.",
      },
      {
        label: "Galatians 5",
        href: "/bible/galatians/5",
        description: "The fruit of the Spirit — grown, not forced.",
      },
      {
        label: "Romans 8",
        href: "/bible/romans/8",
        description: "The Spirit helps our weakness and prays within us.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Ask the Spirit's help in honest words.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "A path toward peace",
        href: "/start/peace",
        description: "Scripture, prayer, and a small next step for a restless heart.",
      },
    ],
    relatedSymbols: [
      {
        label: "Faith Symbols",
        href: "/jewelry",
        description: "Optional reminders of prayer and Scripture, never sources of power.",
      },
    ],
    boundaryNote:
      "This is an introduction, not the final word — keep reading Scripture and grow within a church community. Spiritual experiences vary widely, and a quiet walk with the Spirit is just as real as any other.",
  },
  "what-is-sin-and-forgiveness": {
    slug: "what-is-sin-and-forgiveness",
    title: "Sin, Repentance, and Forgiveness",
    shortTitle: "Sin and Forgiveness",
    description:
      "A gentle, non-shaming look at what sin really means and how God offers honest turning and free grace.",
    audience:
      "For anyone carrying guilt, unsure what “sin” and “repentance” mean, and longing for a fresh start.",
    group: "ideas",
    intro:
      "These can be heavy, frightening words. But at their heart they are not about punishment or shame; they are about coming home to a God who already loves you. This guide walks through them slowly, honestly, and without condemnation.",
    sections: [
      {
        heading: "What sin actually means",
        body: [
          "The older meaning of sin is quieter and more honest than an accusation: to miss the mark, to fall short of the good we were made for. “For all have sinned, and come short of the glory of God” (Romans 3:23) — not to single you out, but to set you among the whole human family.",
          "So sin is less a list of forbidden things and more a kind of brokenness — the harm we cause, the harm done to us, the quiet ways we drift from love. Naming it honestly is not the same as hating yourself; it is telling the truth about a wound so it can heal.",
        ],
      },
      {
        heading: "Why honesty is freeing, not crushing",
        body: [
          "Many of us hide what we have done, afraid that if it were seen we would be rejected. But hiding is exhausting, and shame grows in the dark. The mercy of faith is that we come into the light already knowing we are loved.",
          "Honesty before God is not a courtroom; it is more like setting down a weight you were never meant to carry alone. When we stop pretending, we find that the truth we feared does not destroy us — it opens the door to grace.",
        ],
      },
      {
        heading: "What repentance really is",
        body: [
          "Repentance has been used as a club, but that is not its meaning. The word simply means a turning — a change of mind and direction, like noticing you have wandered off the path and gently turning back toward home. It is not self-punishment or earning your way back.",
          "Real turning is honest about the past without being imprisoned by it. Its energy is hope, not despair — the relief of finally walking in the right direction, knowing you are met long before you arrive.",
        ],
      },
      {
        heading: "The gift of forgiveness",
        body: [
          "Forgiveness is not earned — it is given. “If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness” (1 John 1:9). Cleansing, not only pardon — a genuine fresh start.",
          "And it is thorough: “as far as the east is from the west, so far hath he removed our transgressions from us” (Psalm 103:12). You are not defined by the worst thing you have done.",
        ],
      },
    ],
    practicalSteps: [
      "Find a quiet moment and name honestly, without harshness, what is weighing on you.",
      "Speak it to God in plain words — you do not need perfect language, only truth.",
      "Receive forgiveness as a gift already offered, rather than something to earn.",
      "Where you have hurt someone, gently consider what making amends might look like.",
      "Take one small step in a new direction today, trusting you are met along the way.",
    ],
    relatedBible: [
      {
        label: "Luke 15",
        href: "/bible/luke/15",
        description: "The father runs to the returning child — grace before words.",
      },
      {
        label: "Psalm 103",
        href: "/bible/psalms/103",
        description: "Mercy that removes our sins as far as the east is from the west.",
      },
      {
        label: "1 John 4",
        href: "/bible/1-john/4",
        description: "Love that comes from God and casts out fear.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Bring honest words to God, exactly as you are.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "A path toward forgiveness",
        href: "/start/forgiveness",
        description: "Scripture and prayer for mercy received and extended.",
      },
    ],
    relatedSymbols: [
      {
        label: "Faith Symbols",
        href: "/jewelry",
        description: "Reminders of grace, never a way to earn it.",
      },
    ],
    boundaryNote:
      "If guilt feels crushing, or if you have been harmed or have harmed someone, please reach out to a trusted pastor, counselor, or caring community — some burdens are meant to be carried with help. This guide is gentle encouragement, not absolution on demand or a substitute for that care.",
  },
  "starting-a-daily-quiet-time": {
    slug: "starting-a-daily-quiet-time",
    title: "How to Start a Daily Quiet Time",
    shortTitle: "Daily Quiet Time",
    description:
      "A simple, low-pressure way to begin meeting God each day through a little Scripture and honest prayer.",
    audience:
      "For beginners who want a daily rhythm of Bible and prayer but feel intimidated or guilty about staying consistent.",
    group: "growing",
    intro:
      "A quiet time is simply a set-aside moment to be with God in Scripture and prayer. It does not need to be long, polished, or impressive to be real. If you have felt behind or unsure where to begin, you can start small today — and that is enough.",
    sections: [
      {
        heading: "What a quiet time is and isn't",
        body: [
          "A quiet time is time spent with a Person, not a task you complete to stay in God's good graces. It is relationship — the way you would sit with a trusted friend, listening and speaking honestly. God already loves you fully in Christ; your reading and praying do not earn that love, they help you live in it.",
          "So release the pressure to perform. There is no minimum word count, no perfect prayer, no spiritual scorecard. A few honest minutes with an open heart matter more than an hour spent anxiously trying to do it right.",
        ],
      },
      {
        heading: "A simple shape to follow",
        body: [
          "Keep it plain and repeatable: read a little, pray honestly, sit quietly, and carry one thing into your day. Read a short passage rather than rushing through chapters, then pray about what you read and about your real life, in your own words.",
          "After praying, rest in God's presence for a moment without filling the silence. Before you close, choose one verse, phrase, or truth to carry with you. This small shape can fit five minutes or fifty.",
        ],
      },
      {
        heading: "Making it stick without guilt",
        body: [
          "Start tiny and keep it tiny until it feels natural. A consistent five minutes beats an ambitious plan you abandon by Thursday. Anchor it to the same time and place each day — tied to coffee, or the quiet before the house wakes — so it becomes a habit rather than a daily decision.",
          "When you miss a day, and you will, do not treat it as failure. God's mercies are new every morning (Lamentations 3:22-23), so you simply begin again, without shame. The goal is a slow-growing friendship, not an unbroken streak.",
        ],
      },
      {
        heading: "When it feels dry or distracted",
        body: [
          "Some days God will feel near and the words alive; other days your mind will wander and the page will feel flat. This is normal, and not a sign that something is wrong with you. Faithfulness is showing up, not feeling something every time.",
          "When you are distracted, slow down and pray a single verse back to God, or simply tell him your mind is scattered. The morning was Jesus' own rhythm — he rose early to pray in a solitary place (Mark 1:35) — and dry seasons pass. Keep showing up gently.",
        ],
      },
    ],
    practicalSteps: [
      "Start with just five minutes a day.",
      "Pick the same time and place, and tie it to something you already do.",
      "Read one short passage, such as a few verses from a Gospel or a psalm.",
      "Pray honestly in your own words, then sit quietly for a moment.",
      "Choose one verse or thought to carry into the rest of your day.",
    ],
    relatedBible: [
      {
        label: "Psalm 23",
        href: "/bible/psalms/23",
        description: "A short, steadying passage to begin with.",
      },
      {
        label: "John 1",
        href: "/bible/john/1",
        description: "A clear doorway into the Gospels for daily reading.",
      },
      {
        label: "Guided Bible Readings",
        href: "/bible",
        description: "Short, finished readings to anchor a daily rhythm.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Honest prayers to begin with when you have no words.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "Faith Quiz",
        href: "/start",
        description: "Let a need today shape your reading and prayer.",
      },
    ],
    relatedSymbols: [
      {
        label: "Faith Symbols",
        href: "/jewelry",
        description: "An optional reminder to pause and pray during the day.",
      },
    ],
    boundaryNote:
      "This is gentle encouragement and a starting rhythm, not a rule you must keep to earn God's love, which is already yours in Christ. Missing days is not failure, and this practice supports but never replaces the life of a local church.",
  },
  "handling-doubt": {
    slug: "handling-doubt",
    title: "When You Have Doubts and Hard Questions",
    shortTitle: "Honest Doubt",
    description:
      "A gentle guide for anyone whose faith feels shaky, showing that honest doubt can belong inside real faith.",
    audience:
      "For anyone wrestling with doubt or hard questions, afraid that uncertainty means they have failed.",
    group: "growing",
    intro:
      "If you have found yourself doubting or unsure whether you believe what you once did, you are not a failure and you are not alone. Doubt is not proof that your faith is gone — often it is a sign that you take faith seriously enough to ask real questions. This guide will not hand you tidy answers, but a kinder way to carry the ones you have.",
    sections: [
      {
        heading: "Doubt is not the opposite of faith",
        body: [
          "We are often taught that faith means never questioning, and that doubt is its enemy. But the real opposite of faith is indifference — not caring at all. Doubt usually shows up precisely because you care, because something matters enough that you need it to be true.",
          "Faith and doubt frequently live side by side in the same person, sometimes in the same hour. You can pray and still wonder if anyone hears. Holding both at once does not make you a hypocrite — it makes you human, and it puts you in good company.",
        ],
      },
      {
        heading: "The Bible is full of honest doubters",
        body: [
          "Scripture does not hide its doubters; it gives them some of its most tender moments. A desperate father cries, “Lord, I believe; help thou mine unbelief” (Mark 9:24), and Jesus answers his prayer rather than scolding him. Thomas refused to believe until he could see, and Jesus met him there.",
          "The Psalms go further still, giving voice to raw lament — asking how long, asking why God seems hidden. These honest cries were not edited out; they were preserved as prayer. God appears far less afraid of your questions than you are.",
        ],
      },
      {
        heading: "Staying near God while you doubt",
        body: [
          "The instinct when faith feels shaky is to back away — to stop praying until you have it figured out, or to pretend you are fine. But you do not have to resolve your doubts before you are allowed to draw near. You can bring the doubt itself into the room: “I am not sure I believe this, and I am here anyway.”",
          "Pretending is far more corrosive to faith than questioning is. Speak plainly, even tearfully, the way the Psalmists did. Staying near while unsure is itself a quiet act of trust, and it keeps the door open for faith to return in its own time.",
        ],
      },
      {
        heading: "Where to take the hard questions",
        body: [
          "Some questions are too heavy to carry alone, and they were never meant to be. Find a trusted person — a thoughtful pastor, a mentor, a friend who will not flinch at your honesty. Saying doubts out loud to someone safe often loosens their grip.",
          "Let yourself study, too. Many of your questions have been asked for centuries by serious, faithful people. Above all, be patient — clarity rarely arrives on demand, and faith can grow slowly, in the dark, like most things that last.",
        ],
      },
    ],
    practicalSteps: [
      "Name your actual doubt in one honest sentence, without softening it.",
      "Pray it as it is — bring the question to God instead of hiding it from him.",
      "Read a Psalm of lament slowly, and notice you are not the first to feel this.",
      "Tell one trusted, safe person what you are wrestling with this week.",
      "Let a question stay open; resist forcing an answer before its time.",
    ],
    relatedBible: [
      {
        label: "Psalm 46",
        href: "/bible/psalms/46",
        description: "“Be still, and know” — refuge when the ground shifts.",
      },
      {
        label: "Lamentations 3",
        href: "/bible/lamentations/3",
        description: "Honest grief that turns toward mercy new every morning.",
      },
      {
        label: "Mark 4",
        href: "/bible/mark/4",
        description: "Jesus with frightened disciples in the storm.",
      },
    ],
    relatedPrayers: [
      {
        label: "Prayer Library",
        href: "/prayer",
        description: "Honest prayers for anxious, uncertain seasons.",
      },
    ],
    relatedFaithPaths: [
      {
        label: "A path through anxiety",
        href: "/start/anxiety",
        description: "Slow down and pray when the questions feel heavy.",
      },
      {
        label: "A path toward hope",
        href: "/start/hope",
        description: "Scripture and prayer when faith feels thin.",
      },
    ],
    relatedSymbols: [
      {
        label: "Content Boundaries",
        href: "/content-boundaries",
        description: "What this site can and cannot offer for hard questions.",
      },
    ],
    boundaryNote:
      "This is encouragement, not a complete set of answers — some questions deserve unhurried time with a wise pastor, mentor, or counselor. If doubt comes wrapped in lasting despair or hopelessness, please also reach out for mental-health support; tending your mind and tending your faith are not separate.",
  },
} as const satisfies Record<GuideSlug, Guide>;

export const guideKeys = Object.keys(guides) as GuideSlug[];

const guideGroupOrder = {
  start: ["how-to-use-hope-bible"],
  "bible-prayer": ["start-reading-the-bible", "how-to-pray"],
  ideas: [
    "what-is-the-gospel",
    "who-is-jesus",
    "what-is-grace",
    "what-is-faith",
    "who-is-the-holy-spirit",
    "what-is-sin-and-forgiveness",
  ],
  growing: ["starting-a-daily-quiet-time", "handling-doubt"],
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
