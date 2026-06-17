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
  | "anxiety"
  | "wisdom"
  | "grief"
  | "patience"
  | "family"
  | "work"
  | "loneliness"
  | "courage"
  | "discernment"
  | "healing"
  | "sick-loved-one"
  | "surgery"
  | "marriage"
  | "children"
  | "provision"
  | "job-interview"
  | "addiction-recovery"
  | "prodigal-child"
  | "new-baby"
  | "exams"
  | "safe-travel";

export type PrayerGroupKey =
  | "day"
  | "peace"
  | "strength"
  | "trust"
  | "gratitude"
  | "work";

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
    title: "Peace, anxiety, and grief",
    description:
      "Honest prayers for restlessness, sorrow, anxious thoughts, and loneliness.",
  },
  {
    key: "strength",
    title: "Strength, courage, and patience",
    description:
      "Prayer for courage, patient endurance, and hope without pretending life is easy.",
  },
  {
    key: "trust",
    title: "Guidance, wisdom, and discernment",
    description:
      "Careful prayers for wisdom, motives, counsel, and faithful decisions.",
  },
  {
    key: "gratitude",
    title: "Gratitude, forgiveness, and relationships",
    description:
      "Prayers for receiving grace, practicing mercy, and loving people with care.",
  },
  {
    key: "work",
    title: "Daily work and responsibility",
    description:
      "Prayers for honest work, responsibility, wise care, and practical trust.",
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
    group: "work",
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
  wisdom: {
    slug: "wisdom",
    title: "Prayer for Wisdom",
    shortTitle: "Wisdom",
    description:
      "A prayer for humility, teachability, listening, and wise next steps.",
    theme: "Wisdom, humility, and teachable decisions",
    group: "trust",
    relatedBible: {
      label: "James 1",
      href: "/bible/james/1",
      description:
        "James 1 invites readers to ask God for wisdom and practice faith with patience.",
    },
    beforeYouPray:
      "Bring your need for wisdom without demanding instant certainty. Wisdom often grows through prayer, patience, Scripture, and trusted counsel.",
    beforeHeading: "Come ready to listen.",
    prayerHeading: "A prayer for wisdom",
    reflectionHeading: "Practice a teachable next step.",
    prayer: [
      "Father, I come to You needing wisdom.",
      "Make me humble enough to listen, patient enough to wait, and honest enough to see my motives clearly.",
      "Teach me through Scripture, wise counsel, quiet attention, and the responsibilities already in front of me.",
      "Keep me from rushing just to escape uncertainty. Help me choose what is truthful, loving, and faithful, even if the whole path is not clear yet.",
      "Amen.",
    ],
    reflectionPrompt:
      "What question do you need to hold with humility instead of forcing an immediate answer?",
    smallNextStep:
      "Write one decision or question, then name one wise person, passage, or patient practice that can help you discern it.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A symbol connected to wisdom may remind some people to pause, pray, and listen before deciding.",
  },
  grief: {
    slug: "grief",
    title: "Prayer for Grief",
    shortTitle: "Grief",
    description:
      "A prayer for sorrow, memory, comfort, and not rushing the ache.",
    theme: "Grief, sorrow, comfort, and honest lament",
    group: "peace",
    relatedBible: {
      label: "Matthew 11:28-30",
      href: "/bible/matthew/11",
      description:
        "Matthew 11:28-30 holds Jesus' gentle invitation to the weary and burdened.",
    },
    beforeYouPray:
      "You do not need to make grief smaller before bringing it to God. Let this prayer make room for sorrow without rushing healing.",
    beforeHeading: "Let sorrow be named.",
    prayerHeading: "A prayer in grief",
    reflectionHeading: "Hold memory with care.",
    prayer: [
      "Lord Jesus, I bring You the sorrow I cannot neatly explain.",
      "Some things still ache. Some memories feel tender. Some moments arrive without warning, and I do not want to pretend I am untouched.",
      "Meet me with mercy in this grief. Give me comfort that does not rush me, courage to receive support, and gentleness for the days when I feel tired.",
      "Help me remember with love, breathe through what is heavy, and take one faithful step without demanding that my heart be finished healing.",
      "Amen.",
    ],
    reflectionPrompt:
      "What sorrow, memory, or unanswered ache do you need to bring honestly before God today?",
    smallNextStep:
      "Reach toward one safe person, quiet practice, or small act of care instead of carrying grief alone.",
    relatedFaithQuizPath: "/start/hope",
    symbolReminder:
      "A symbol of hope may help some people remember prayer during grief, without pretending the grief has disappeared.",
  },
  patience: {
    slug: "patience",
    title: "Prayer for Patience",
    shortTitle: "Patience",
    description:
      "A prayer for waiting, frustration, endurance, and gentleness.",
    theme: "Patience, waiting, frustration, and endurance",
    group: "strength",
    relatedBible: {
      label: "James 1",
      href: "/bible/james/1",
      description:
        "James 1 connects trials, patience, wisdom, listening, and practical faith.",
    },
    beforeYouPray:
      "Impatience often points to weariness, fear, or longing. Bring that honestly; this prayer is not meant to shame you for feeling stretched.",
    beforeHeading: "Notice the pressure to rush.",
    prayerHeading: "A prayer for patience",
    reflectionHeading: "Choose gentleness while you wait.",
    prayer: [
      "Lord, I feel the strain of waiting.",
      "Part of me wants to rush, force, complain, or control what is not moving on my timeline.",
      "Give me patience that is honest, not passive; gentle, not careless; steady, not numb.",
      "Help me do what is mine to do today, release what is not mine to control, and treat people with care while I wait.",
      "Amen.",
    ],
    reflectionPrompt:
      "Where are you tempted to rush, force, or speak sharply because waiting feels hard?",
    smallNextStep:
      "Before one response or decision today, pause long enough to breathe and choose gentleness.",
    relatedFaithQuizPath: "/start/strength",
    symbolReminder:
      "A symbol of patience may remind some people to slow down and pray before reacting.",
  },
  family: {
    slug: "family",
    title: "Prayer for Family",
    shortTitle: "Family",
    description:
      "A prayer for love, humility, boundaries, forgiveness, and careful care at home.",
    theme: "Family, love, humility, boundaries, and care",
    group: "gratitude",
    relatedBible: {
      label: "1 Corinthians 13",
      href: "/bible/1-corinthians/13",
      description:
        "1 Corinthians 13 describes love as patient, humble, truthful, and enduring.",
    },
    beforeYouPray:
      "Praying for family does not mean denying harm, forcing closeness, or excusing abuse. Bring love and truth together, and seek safe support where needed.",
    beforeHeading: "Hold loved ones with truth.",
    prayerHeading: "A prayer for family",
    reflectionHeading: "Love with wisdom and care.",
    prayer: [
      "Lord, I bring my family and close relationships before You.",
      "Teach me to love with patience, humility, truth, and courage. Help me speak with care, listen without pride, and repair what can be repaired wisely.",
      "Where there is distance, give me compassion without control. Where there is hurt, give me honesty and safe boundaries. Where there is gratitude, help me not overlook it.",
      "Bless the people closest to me with mercy, wisdom, and the support they need.",
      "Amen.",
    ],
    reflectionPrompt:
      "Who in your family or close circle can you pray for with both love and honesty today?",
    smallNextStep:
      "Choose one practical kindness, one honest boundary, or one quiet prayer by name.",
    relatedFaithQuizPath: "/start/gratitude",
    symbolReminder:
      "A family-related faith reminder may help some people pray for loved ones and practice patient love.",
  },
  work: {
    slug: "work",
    title: "Prayer for Work",
    shortTitle: "Work",
    description:
      "A prayer for integrity, diligence, humility, fatigue, and service.",
    theme: "Work, responsibility, integrity, and fatigue",
    group: "work",
    relatedBible: {
      label: "Proverbs 3",
      href: "/bible/proverbs/3",
      description:
        "Proverbs 3 invites trust, humility, wisdom, and faithful choices.",
    },
    beforeYouPray:
      "Bring your work honestly, including fatigue, pressure, ambition, boredom, or responsibility. This prayer does not promise success, promotion, money, or easy outcomes.",
    beforeHeading: "Bring the work honestly.",
    prayerHeading: "A prayer for work",
    reflectionHeading: "Serve with integrity today.",
    prayer: [
      "Lord, I bring You the work in front of me.",
      "Help me act with integrity when no one is watching, diligence when the task feels ordinary, and humility when I want recognition.",
      "Give me wisdom for pressure, patience with people, and courage to do what is right without making work my whole identity.",
      "When I am tired, remind me to rest wisely. When I am frustrated, guide my words. Let my work become a place of faithfulness, not fear.",
      "Amen.",
    ],
    reflectionPrompt:
      "What part of your work or responsibility needs integrity, patience, or honest limits today?",
    smallNextStep:
      "Choose one task to do carefully and one boundary that protects your attention or rest.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A simple faith reminder may help some people pause, pray, and work with integrity during ordinary responsibilities.",
  },
  loneliness: {
    slug: "loneliness",
    title: "Prayer for Loneliness",
    shortTitle: "Loneliness",
    description:
      "A prayer for being seen by God, longing for connection, and taking gentle next steps.",
    theme: "Loneliness, being known, longing, and connection",
    group: "peace",
    relatedBible: {
      label: "Psalm 139",
      href: "/bible/psalms/139",
      description:
        "Psalm 139 speaks of being searched, known, seen, and led by God.",
    },
    beforeYouPray:
      "Loneliness is not a failure. Prayer can hold the ache, but it should not replace real community, trusted support, or appropriate care.",
    beforeHeading: "Name the ache for connection.",
    prayerHeading: "A prayer for loneliness",
    reflectionHeading: "Reach toward one gentle connection.",
    prayer: [
      "Lord, I feel the ache of loneliness.",
      "You know the quiet places, the missed conversations, the longing to be seen, and the tiredness of carrying too much alone.",
      "Meet me with Your nearness, and help me not turn inward in shame. Give me courage for one gentle step toward connection, community, or care.",
      "Remind me that being lonely does not make me forgotten, unwanted, or beyond love.",
      "Amen.",
    ],
    reflectionPrompt:
      "Where do you most need to feel seen, heard, or remembered today?",
    smallNextStep:
      "Send one honest message, step into one safe shared space, or name one person you can pray for and reach toward.",
    relatedFaithQuizPath: "/start/hope",
    symbolReminder:
      "A faith reminder may help some people remember that God sees them and that reaching toward community can be a faithful step.",
  },
  courage: {
    slug: "courage",
    title: "Prayer for Courage",
    shortTitle: "Courage",
    description:
      "A prayer for fear, obedience, trust, and one small brave step.",
    theme: "Courage, fear, trust, and faithful action",
    group: "strength",
    relatedBible: {
      label: "Mark 4:35-41",
      href: "/bible/mark/4",
      description:
        "Mark 4:35-41 shows the disciples bringing fear to Jesus in a storm.",
    },
    beforeYouPray:
      "Fear does not mean you have failed. Bring it honestly and ask for courage that moves with wisdom rather than pressure.",
    beforeHeading: "Bring fear without shame.",
    prayerHeading: "A prayer for courage",
    reflectionHeading: "Take one brave, wise step.",
    prayer: [
      "Lord Jesus, I bring You the fear I would rather hide.",
      "Help me see what courage looks like in this moment. Not noise, not pride, not pretending, but one faithful step with You.",
      "Give me wisdom to avoid recklessness, humility to ask for help, and steadiness to do what love and truth require.",
      "Let courage grow quietly in me as I trust You with the next step.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one brave step you can take without denying your fear or rushing beyond wisdom?",
    smallNextStep:
      "Name the step, make it small enough to take today, and ask for support if it should not be done alone.",
    relatedFaithQuizPath: "/start/strength",
    symbolReminder:
      "A symbol of courage may remind some people to pray and take one faithful step, not to deny fear.",
  },
  discernment: {
    slug: "discernment",
    title: "Prayer for Discernment",
    shortTitle: "Discernment",
    description:
      "A prayer for motives, counsel, patience, and clarity over time.",
    theme: "Discernment, motives, counsel, and clarity",
    group: "trust",
    relatedBible: {
      label: "Proverbs 3",
      href: "/bible/proverbs/3",
      description:
        "Proverbs 3 invites trust in the Lord, humility, and wisdom before action.",
    },
    beforeYouPray:
      "Discernment is not about forcing a sign or demanding an instant answer. Make room for prayer, Scripture, counsel, motives, and time.",
    beforeHeading: "Look beneath the decision.",
    prayerHeading: "A prayer for discernment",
    reflectionHeading: "Wait for clarity with humility.",
    prayer: [
      "Father, help me discern what is wise, loving, and true.",
      "Search my motives without crushing me. Show me where fear, pride, pressure, or desire may be clouding my judgment.",
      "Give me patience to seek counsel, courage to hear what I may not want to hear, and peace to wait when the answer is not ready.",
      "Guide me toward the next faithful step, even if the full path unfolds slowly.",
      "Amen.",
    ],
    reflectionPrompt:
      "What motive, pressure, or desire needs to be examined before you decide?",
    smallNextStep:
      "Write down the decision, one motive to examine, and one trusted source of counsel or Scripture to consider.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A symbol of discernment may remind some people to slow down, pray, and seek wisdom over time.",
  },
  healing: {
    slug: "healing",
    title: "Prayer for Healing",
    shortTitle: "Healing",
    description:
      "An honest prayer for healing — for the body, the heart, and the long wait — while still seeking wise care.",
    theme: "Healing, comfort, and wise care",
    group: "peace",
    relatedBible: {
      label: "Matthew 11",
      href: "/bible/matthew/11",
      description:
        "Jesus invites the weary and burdened to come to Him for rest.",
    },
    beforeYouPray:
      "Healing is not always quick, and praying for it is not a failure to accept reality. Bring the pain honestly, and keep seeking the care of doctors and people who can help.",
    beforeHeading: "Bring the pain honestly.",
    prayerHeading: "A prayer for healing",
    reflectionHeading: "Hold hope and care together.",
    prayer: [
      "Lord, You see the part of me that hurts — the part I can name and the part I cannot.",
      "I ask for healing: for my body, my mind, and my heart. Where healing comes slowly, give me patience. Where it does not come the way I hoped, give me Your nearness and a hope that does not depend on my circumstances.",
      "Guide the wisdom and the hands of the people who care for me. Help me to receive help without shame, and to rest when I need to rest.",
      "Hold the people I love who are also waiting and weary. Be near to the brokenhearted, and let me not carry this alone.",
      "Amen.",
    ],
    reflectionPrompt:
      "What do you need healing for today — and what is one form of care or support you can reach toward?",
    smallNextStep:
      "Name one source of help — a doctor, a friend, a support group — and take one small step toward it this week.",
    relatedFaithQuizPath: "/start/healing",
    symbolReminder:
      "An anchor or dove can be a quiet reminder to keep praying and to keep seeking wise care — never a promise of a particular outcome.",
  },
  "sick-loved-one": {
    slug: "sick-loved-one",
    title: "Prayer for a Sick Loved One",
    shortTitle: "A Sick Loved One",
    description:
      "A prayer for someone you love who is sick or suffering, when you feel helpless and long to help.",
    theme: "Intercession, comfort, and trust",
    group: "peace",
    relatedBible: {
      label: "Psalm 46",
      href: "/bible/psalms/46",
      description:
        "Psalm 46 names God as a refuge and a very present help in trouble.",
    },
    beforeYouPray:
      "Loving someone who is suffering can leave you feeling powerless. Prayer is one real thing you can do — and so is showing up with practical care.",
    beforeHeading: "Bring the one you love before God.",
    prayerHeading: "A prayer for a sick loved one",
    reflectionHeading: "Pray, then show up.",
    prayer: [
      "Lord, I bring before You someone I love who is sick and hurting. You know their name, their pain, and their fear better than I do.",
      "Bring healing where healing can come, and comfort and dignity in every moment. Steady the people caring for them, and give wisdom to every doctor and nurse.",
      "Where I feel helpless, show me one practical way to love them well — a visit, a meal, a steady presence, an honest prayer.",
      "Guard my own heart from despair. Help me to trust You with what I cannot control, and to keep showing up with patience and love.",
      "Amen.",
    ],
    reflectionPrompt:
      "Who are you carrying right now — and what is one concrete way to support them this week?",
    smallNextStep:
      "Do one practical kindness for them or their caregivers: a message, a meal, a visit, or a shared errand.",
    relatedFaithQuizPath: "/start/healing",
    symbolReminder:
      "A small reminder worn or carried can be a cue to keep praying for someone — it holds no power over their healing.",
  },
  surgery: {
    slug: "surgery",
    title: "Prayer Before Surgery",
    shortTitle: "Before Surgery",
    description:
      "A steadying prayer before a surgery or medical procedure, for the patient and for the people waiting.",
    theme: "Peace, trust, and wise care",
    group: "peace",
    relatedBible: {
      label: "Psalm 91",
      href: "/bible/psalms/91",
      description: "Psalm 91 speaks of God as a refuge and shelter in fear.",
    },
    beforeYouPray:
      "Fear before a procedure is normal. You can be honest about it and still be at peace. Trust the medical team, and bring the rest to God.",
    beforeHeading: "Name the fear, then breathe.",
    prayerHeading: "A prayer before surgery",
    reflectionHeading: "Rest in care you can trust.",
    prayer: [
      "Lord, I am facing something that frightens me, and I bring that fear honestly to You.",
      "Steady my heart and my breathing. Give skill, focus, and clear judgment to the surgeons, nurses, and everyone who will care for me.",
      "Watch over my body through what I cannot control. Bring me through, and grant patience for the recovery that follows.",
      "Comfort the people waiting and worrying for me. Let us all rest in the knowledge that we are not alone.",
      "Amen.",
    ],
    reflectionPrompt:
      "What fear can you name and hand over before the procedure?",
    smallNextStep:
      "Write down your questions for the medical team, and ask one trusted person to wait with or check on you.",
    relatedFaithQuizPath: "/start/healing",
    symbolReminder:
      "A keepsake held before a procedure can be a calm reminder to pray — it is not a charm and does not change the outcome.",
  },
  marriage: {
    slug: "marriage",
    title: "Prayer for My Marriage",
    shortTitle: "Marriage",
    description:
      "A prayer for your marriage — for love, patience, repair, and honest care, in good seasons and hard ones.",
    theme: "Love, patience, and repair",
    group: "gratitude",
    relatedBible: {
      label: "1 Corinthians 13",
      href: "/bible/1-corinthians/13",
      description:
        "1 Corinthians 13 describes love as patient, kind, humble, and enduring.",
    },
    beforeYouPray:
      "Praying for a marriage is not pretending it is perfect. Bring the gratitude and the strain honestly. Where there is harm or danger, seek safe help as well.",
    beforeHeading: "Bring the whole marriage, honestly.",
    prayerHeading: "A prayer for my marriage",
    reflectionHeading: "Love in practical ways.",
    prayer: [
      "Lord, I bring my marriage to You — the love in it, the weariness in it, and the places that need repair.",
      "Make me patient and kind, slow to anger and quick to listen. Where I have been proud or distant, give me the humility to own it and the courage to make it right.",
      "Protect us from contempt and quiet resentment. Renew tenderness between us, and help us choose each other again in ordinary, practical ways.",
      "Give us wisdom for what is hard, honesty for what is unspoken, and grace for what we cannot yet fix.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one humble, practical act of love you can offer your spouse this week?",
    smallNextStep:
      "Do one small, concrete thing today: a sincere apology, an unhurried conversation, or one act of care without keeping score.",
    relatedFaithQuizPath: "/start/family",
    symbolReminder:
      "A simple reminder can prompt prayer for a spouse — it does not guarantee feelings or repair, which take honest effort and sometimes outside help.",
  },
  children: {
    slug: "children",
    title: "Prayer for My Children",
    shortTitle: "My Children",
    description:
      "A prayer for your children — for their safety, character, and faith, and for your own patience as a parent.",
    theme: "Love, protection, and patient care",
    group: "gratitude",
    relatedBible: {
      label: "Psalm 121",
      href: "/bible/psalms/121",
      description: "Psalm 121 speaks of God's watchful, unsleeping care.",
    },
    beforeYouPray:
      "You cannot control everything for your children, and the weight of that is real. Bring your love and your worry to God, and parent with patience rather than fear.",
    beforeHeading: "Lift your children by name.",
    prayerHeading: "A prayer for my children",
    reflectionHeading: "Love them with patience.",
    prayer: [
      "Lord, I lift my children to You by name. You love them even more than I do.",
      "Watch over their bodies, their minds, and their hearts. Grow in them kindness, honesty, courage, and a faith that is truly their own.",
      "Where I cannot be with them, be their guard and their guide. Where I fail as a parent, cover my mistakes and help me make repair.",
      "Give me patience for the long work of raising them, wisdom for each season, and the grace to love them without trying to control them.",
      "Amen.",
    ],
    reflectionPrompt:
      "What does each of your children need most from you right now — presence, patience, a boundary, or grace?",
    smallNextStep:
      "Pray for each child by name today, and give one of them unhurried, undistracted attention.",
    relatedFaithQuizPath: "/start/family",
    symbolReminder:
      "A reminder worn for a child can be a cue to pray for them — it offers no protection in itself; that rests in God and wise care.",
  },
  provision: {
    slug: "provision",
    title: "Prayer for Financial Provision",
    shortTitle: "Provision",
    description:
      "An honest prayer in financial stress — for provision, wisdom, and steadiness while you do the practical work.",
    theme: "Provision, trust, and wise work",
    group: "work",
    relatedBible: {
      label: "Matthew 6",
      href: "/bible/matthew/6",
      description:
        "In Matthew 6, Jesus teaches about worry, provision, and seeking first God's kingdom.",
    },
    beforeYouPray:
      "Money stress is heavy and real. Prayer is not a substitute for practical steps — it is where you bring the fear so you can act with a clearer head.",
    beforeHeading: "Name the worry plainly.",
    prayerHeading: "A prayer for provision",
    reflectionHeading: "Trust, then take a step.",
    prayer: [
      "Lord, You know exactly what I am facing and what I am afraid of. I bring my finances and my fear honestly to You.",
      "Provide for what we truly need. Give me wisdom with what I have, clarity for hard decisions, and the humility to ask for help when I need it.",
      "Guard me from panic and from shame. Steady me to do the next practical thing — the budget, the call, the application, the honest conversation.",
      "Where provision comes through other people, give me gratitude; and where I can help someone else, make me generous even now.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is the one next practical step you have been avoiding out of fear?",
    smallNextStep:
      "Take one concrete action this week: a simple budget, a payment-plan call, a job lead, or an honest conversation about money.",
    relatedFaithQuizPath: "/start/hope",
    symbolReminder:
      "A faith reminder can prompt prayer and steadiness in money stress — it is not a luck charm or a promise of wealth.",
  },
  "job-interview": {
    slug: "job-interview",
    title: "Prayer for a Job Interview",
    shortTitle: "Job Interview",
    description:
      "A calming prayer before a job interview or important meeting — for clarity, confidence, and peace about the outcome.",
    theme: "Work, courage, and trust",
    group: "work",
    relatedBible: {
      label: "Proverbs 3",
      href: "/bible/proverbs/3",
      description:
        "Proverbs 3 calls us to trust God and not lean only on our own understanding.",
    },
    beforeYouPray:
      "Prepare well, then let the outcome rest. You can do your honest best and still trust God with what you cannot control.",
    beforeHeading: "Prepare, then breathe.",
    prayerHeading: "A prayer before an interview",
    reflectionHeading: "Do your best, release the rest.",
    prayer: [
      "Lord, I am nervous, and I bring this opportunity honestly to You.",
      "Steady my mind and calm my body. Help me to think clearly, listen well, and speak with honesty about who I am and what I can offer.",
      "Give me favor where it is right, and peace if this door does not open. Remind me that my worth is not decided by one conversation.",
      "Provide for what I need, and lead me to good and honest work in Your timing.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is in your control to prepare — and what do you need to release?",
    smallNextStep:
      "Prepare two thoughtful questions and one example to share, then rest the night before.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A simple reminder can be a cue to pause and pray before a stressful meeting — it does not decide the outcome.",
  },
  "addiction-recovery": {
    slug: "addiction-recovery",
    title: "Prayer for Addiction and Recovery",
    shortTitle: "Recovery",
    description:
      "A prayer for freedom from addiction and for the daily strength of recovery — for yourself or someone you love.",
    theme: "Strength, honesty, and help",
    group: "strength",
    relatedBible: {
      label: "Romans 8",
      href: "/bible/romans/8",
      description:
        "Romans 8 speaks of no condemnation and a love nothing can separate us from.",
    },
    beforeYouPray:
      "Recovery is one honest day at a time, and asking for help is strength, not weakness. Prayer goes alongside real support — counselors, groups, and people who can walk with you.",
    beforeHeading: "Begin with honesty.",
    prayerHeading: "A prayer for recovery",
    reflectionHeading: "One honest day at a time.",
    prayer: [
      "Lord, You know the struggle I carry and how tired I am of fighting it alone.",
      "Give me strength for today — not the whole road, just today. Where I am ashamed, meet me with grace; where I am weak, be my help.",
      "Surround me with people who tell the truth and who will not give up on me. Give me the courage to reach for help and to keep reaching.",
      "Free me, heal what drives the craving, and rebuild what has been broken — in me and in the people I have hurt.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one honest step toward help you can take today?",
    smallNextStep:
      "Reach out to one trusted person or support resource today — a counselor, a group, a sponsor, or a friend.",
    relatedFaithQuizPath: "/start/strength",
    symbolReminder:
      "A reminder carried in recovery can be a cue to pray and to call for support — it is not a cure and does not replace real help.",
  },
  "prodigal-child": {
    slug: "prodigal-child",
    title: "Prayer for a Prodigal Child",
    shortTitle: "Prodigal Child",
    description:
      "A prayer for a child who has wandered — from faith, from home, or from you — held with love, hope, and wise boundaries.",
    theme: "Hope, love, and patient trust",
    group: "gratitude",
    relatedBible: {
      label: "Luke 15",
      href: "/bible/luke/15",
      description:
        "Luke 15 tells of a father who watches and runs to welcome a returning child.",
    },
    beforeYouPray:
      "Loving a child who has wandered is exhausting. You can keep hoping and praying while still holding wise, loving boundaries — and your love does not earn their return.",
    beforeHeading: "Bring your child to the Father.",
    prayerHeading: "A prayer for a prodigal child",
    reflectionHeading: "Hope without controlling.",
    prayer: [
      "Lord, I bring my child to You — the one I love and ache for, the one I cannot fix.",
      "Watch over them where I cannot reach. Protect them, soften their heart, and let mercy meet them on whatever road they are on.",
      "Guard me from despair, from controlling, and from giving up. Help me to keep the door open with love and with wisdom.",
      "You are the Father who runs to welcome. I trust them to You, again, today.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is the difference, right now, between loving your child and trying to control the outcome?",
    smallNextStep:
      "Send one message of love without pressure, and consider one wise boundary you may need to hold.",
    relatedFaithQuizPath: "/start/hope",
    symbolReminder:
      "A reminder worn for a wandering child can be a cue to keep praying — it cannot bring them back; that is held in love and time.",
  },
  "new-baby": {
    slug: "new-baby",
    title: "Prayer for a New Baby",
    shortTitle: "A New Baby",
    description:
      "A prayer of gratitude and protection for a new baby and for new or expecting parents.",
    theme: "Gratitude, protection, and new life",
    group: "gratitude",
    relatedBible: {
      label: "Psalm 139",
      href: "/bible/psalms/139",
      description:
        "Psalm 139 marvels that we are fearfully and wonderfully made and fully known.",
    },
    beforeYouPray:
      "New life brings joy and tiredness and worry all at once. Receive the gift honestly, and ask for help and rest where you need them.",
    beforeHeading: "Receive the gift with thanks.",
    prayerHeading: "A prayer for a new baby",
    reflectionHeading: "Joy, with help where you need it.",
    prayer: [
      "Lord, thank You for this new life — fearfully and wonderfully made, and known by You already.",
      "Watch over this little one in body and breath, and steady the parents in love, patience, and rest.",
      "Where there is fear, give peace; where there is exhaustion, give help; where there is wonder, let gratitude grow.",
      "Surround this family with people who will support them, and let this child be cherished and safe.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one thing to give thanks for, and one kind of help you can ask for?",
    smallNextStep:
      "Offer or accept one practical help this week — a meal, an hour of rest, or a check-in.",
    relatedFaithQuizPath: "/start/gratitude",
    symbolReminder:
      "A keepsake for a new baby can be a tender reminder to pray for them — it offers no protection in itself.",
  },
  exams: {
    slug: "exams",
    title: "Prayer for Exams and Studying",
    shortTitle: "Exams",
    description:
      "A steadying prayer for students facing exams — for focus, calm, and doing your honest best.",
    theme: "Wisdom, focus, and peace",
    group: "trust",
    relatedBible: {
      label: "James 1",
      href: "/bible/james/1",
      description:
        "James 1 says that anyone who lacks wisdom can ask God, who gives generously.",
    },
    beforeYouPray:
      "Study what you can, then bring the pressure to God. A test measures one thing on one day; it does not measure your worth.",
    beforeHeading: "Settle the mind.",
    prayerHeading: "A prayer for exams",
    reflectionHeading: "Honest effort, settled heart.",
    prayer: [
      "Lord, I ask for a clear mind and a calm heart as I study and as I sit this exam.",
      "Help me to recall what I have learned, to think carefully, and to manage my time without panic.",
      "Where I have not prepared enough, give me grace and a lesson for next time. Where I have done my best, give me peace with the result.",
      "Remind me that my worth is not decided by a grade.",
      "Amen.",
    ],
    reflectionPrompt:
      "What is one focused thing to study — and one worry to hand over?",
    smallNextStep:
      "Pick the single most important topic to review next, and plan one real break and a good night's sleep.",
    relatedFaithQuizPath: "/start/guidance",
    symbolReminder:
      "A small reminder can be a cue to pause and breathe before a test — it does not affect the result.",
  },
  "safe-travel": {
    slug: "safe-travel",
    title: "Prayer for Safe Travel",
    shortTitle: "Safe Travel",
    description:
      "A short prayer for safe travel — for a trip, a commute, or a loved one on the road.",
    theme: "Protection, peace, and trust",
    group: "peace",
    relatedBible: {
      label: "Psalm 121",
      href: "/bible/psalms/121",
      description:
        "Psalm 121 says the Lord watches over your going out and your coming in.",
    },
    beforeYouPray:
      "Take the practical precautions, then travel with a settled heart. You can be careful and trusting at the same time.",
    beforeHeading: "Settle before you set out.",
    prayerHeading: "A prayer for safe travel",
    reflectionHeading: "Careful and trusting.",
    prayer: [
      "Lord, watch over this journey — my going out and my coming in.",
      "Give me alertness and calm, and guard everyone traveling with me and around me.",
      "Bring me safely to where I am going, and to the people waiting for me.",
      "Where I am anxious, give me peace; where I am rushed, give me patience.",
      "Amen.",
    ],
    reflectionPrompt:
      "What precaution can you take, and what worry can you hand over before you go?",
    smallNextStep:
      "Check the practical details, then take one slow breath and begin the trip unhurried.",
    relatedFaithQuizPath: "/start/protection",
    symbolReminder:
      "A travel keepsake can be a calm reminder to pray — it is not a protective charm and does not replace care on the road.",
  },
} as const satisfies Record<PrayerSlug, PrayerPath>;

export const prayerPathKeys = Object.keys(prayerPaths) as PrayerSlug[];

const prayerGroupOrder = {
  day: ["morning", "before-sleep"],
  peace: [
    "peace",
    "anxiety",
    "grief",
    "loneliness",
    "healing",
    "sick-loved-one",
    "surgery",
    "safe-travel",
  ],
  strength: [
    "strength",
    "courage",
    "patience",
    "hope",
    "addiction-recovery",
  ],
  trust: ["guidance", "wisdom", "discernment", "exams"],
  gratitude: [
    "gratitude",
    "forgiveness",
    "family",
    "marriage",
    "children",
    "prodigal-child",
    "new-baby",
  ],
  work: ["work", "protection", "provision", "job-interview"],
} as const satisfies Record<PrayerGroupKey, readonly PrayerSlug[]>;

export const groupedPrayerPaths = prayerGroups
  .map((group) => ({
    ...group,
    prayers: prayerGroupOrder[group.key].map((slug) => prayerPaths[slug]),
  }))
  .filter((group) => group.prayers.length > 0);

export function getPrayerPath(slug: string): PrayerPath | undefined {
  return prayerPaths[slug as PrayerSlug];
}
