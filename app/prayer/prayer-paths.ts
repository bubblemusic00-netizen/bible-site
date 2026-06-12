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
  | "discernment";

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
} as const satisfies Record<PrayerSlug, PrayerPath>;

export const prayerPathKeys = Object.keys(prayerPaths) as PrayerSlug[];

const prayerGroupOrder = {
  day: ["morning", "before-sleep"],
  peace: ["peace", "anxiety", "grief", "loneliness"],
  strength: ["strength", "courage", "patience", "hope"],
  trust: ["guidance", "wisdom", "discernment"],
  gratitude: ["gratitude", "forgiveness", "family"],
  work: ["work", "protection"],
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
