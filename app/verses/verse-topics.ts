import type { StartFaithPathSlug } from "@/lib/faith-paths";

// Topical Bible-verse collections ("Bible verses about ___") — a high-traffic
// content type that funnels to prayers, the Faith Quiz, and keepsakes.
// KJV (public domain) to match the rest of the site.

export type VerseTopic = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  verses: readonly { reference: string; text: string }[];
  reflection: string;
  relatedPrayerSlug: string;
  relatedFaithPath: StartFaithPathSlug;
  translation: "King James Version";
};

export const verseTopics = {
  strength: {
    slug: "strength",
    title: "Bible Verses About Strength",
    shortTitle: "Strength",
    description:
      "King James Version Bible verses about strength and endurance, with a short reflection and a prayer for hard days.",
    intro:
      "When you are worn down, Scripture does not pretend the day is easy. These verses point to a strength that is received, not manufactured — enough for the next step.",
    verses: [
      {
        reference: "Philippians 4:13",
        text: "I can do all things through Christ which strengtheneth me.",
      },
      {
        reference: "Isaiah 40:31",
        text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      },
      {
        reference: "Isaiah 41:10",
        text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
      },
      {
        reference: "2 Corinthians 12:9",
        text: "My grace is sufficient for thee: for my strength is made perfect in weakness.",
      },
      {
        reference: "Psalm 28:7",
        text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.",
      },
      {
        reference: "Ephesians 6:10",
        text: "Finally, my brethren, be strong in the Lord, and in the power of his might.",
      },
      {
        reference: "Psalm 46:1",
        text: "God is our refuge and strength, a very present help in trouble.",
      },
    ],
    reflection:
      "Notice that strength here is borrowed, not summoned. You are not asked to be strong enough — only to lean on the One who is, and take one faithful step.",
    relatedPrayerSlug: "strength",
    relatedFaithPath: "strength",
    translation: "King James Version",
  },
  anxiety: {
    slug: "anxiety",
    title: "Bible Verses About Anxiety and Fear",
    shortTitle: "Anxiety",
    description:
      "Calming King James Version Bible verses for anxiety and fear, with a reflection and a prayer to steady the heart.",
    intro:
      "Anxiety is not a lack of faith — it is part of being human. These verses invite you to bring the worry honestly to God rather than carry it alone.",
    verses: [
      {
        reference: "Philippians 4:6",
        text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
      },
      {
        reference: "1 Peter 5:7",
        text: "Casting all your care upon him; for he careth for you.",
      },
      {
        reference: "Matthew 6:34",
        text: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.",
      },
      {
        reference: "John 14:27",
        text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
      },
      {
        reference: "Psalm 94:19",
        text: "In the multitude of my thoughts within me thy comforts delight my soul.",
      },
      {
        reference: "2 Timothy 1:7",
        text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
      },
      {
        reference: "Isaiah 41:10",
        text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.",
      },
    ],
    reflection:
      "Anxiety shrinks when it is spoken. Name one specific worry, hand it over, and let today have only today's weight.",
    relatedPrayerSlug: "anxiety",
    relatedFaithPath: "anxiety",
    translation: "King James Version",
  },
  healing: {
    slug: "healing",
    title: "Bible Verses About Healing",
    shortTitle: "Healing",
    description:
      "King James Version Bible verses about healing and comfort for the body and heart, with a reflection and prayer.",
    intro:
      "These verses hold hope and honesty together. They do not promise a timeline, but they point to a God who is near to the hurting and at work in the waiting.",
    verses: [
      {
        reference: "Jeremiah 30:17",
        text: "For I will restore health unto thee, and I will heal thee of thy wounds, saith the LORD.",
      },
      {
        reference: "Psalm 147:3",
        text: "He healeth the broken in heart, and bindeth up their wounds.",
      },
      {
        reference: "Isaiah 53:5",
        text: "But he was wounded for our transgressions, he was bruised for our iniquities: and with his stripes we are healed.",
      },
      {
        reference: "Psalm 41:3",
        text: "The LORD will strengthen him upon the bed of languishing: thou wilt make all his bed in his sickness.",
      },
      {
        reference: "Exodus 15:26",
        text: "I am the LORD that healeth thee.",
      },
      {
        reference: "Matthew 11:28",
        text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      },
      {
        reference: "Psalm 34:18",
        text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
      },
    ],
    reflection:
      "Praying for healing and seeking good care are not opposites. Bring the pain honestly, keep reaching for help, and let hope rest on God rather than on a particular outcome.",
    relatedPrayerSlug: "healing",
    relatedFaithPath: "healing",
    translation: "King James Version",
  },
  hope: {
    slug: "hope",
    title: "Bible Verses About Hope",
    shortTitle: "Hope",
    description:
      "King James Version Bible verses about hope and waiting well, with a short reflection and a prayer for weary seasons.",
    intro:
      "Hope in Scripture is not wishful thinking. It is trust anchored in God's character, steady enough to hold a hard season without denying it.",
    verses: [
      {
        reference: "Romans 15:13",
        text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.",
      },
      {
        reference: "Jeremiah 29:11",
        text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      },
      {
        reference: "Romans 8:28",
        text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      },
      {
        reference: "Psalm 31:24",
        text: "Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD.",
      },
      {
        reference: "Lamentations 3:22-23",
        text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
      },
      {
        reference: "Hebrews 11:1",
        text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
      },
      {
        reference: "Isaiah 40:31",
        text: "They that wait upon the LORD shall renew their strength.",
      },
    ],
    reflection:
      "Hope is renewable, like mercy in the morning. You do not have to feel hopeful to choose one small, faithful next step today.",
    relatedPrayerSlug: "hope",
    relatedFaithPath: "hope",
    translation: "King James Version",
  },
  grief: {
    slug: "grief",
    title: "Bible Verses About Grief and Comfort",
    shortTitle: "Grief",
    description:
      "Comforting King James Version Bible verses for grief and loss, with a gentle reflection and a prayer for sorrow.",
    intro:
      "Grief is love with nowhere to go. These verses do not rush you through sorrow; they sit with you in it and point to a God who draws near to the brokenhearted.",
    verses: [
      {
        reference: "Psalm 34:18",
        text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
      },
      {
        reference: "Matthew 5:4",
        text: "Blessed are they that mourn: for they shall be comforted.",
      },
      {
        reference: "Revelation 21:4",
        text: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.",
      },
      {
        reference: "Psalm 23:4",
        text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
      },
      {
        reference: "2 Corinthians 1:3-4",
        text: "Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation.",
      },
      {
        reference: "John 14:1",
        text: "Let not your heart be troubled: ye believe in God, believe also in me.",
      },
      {
        reference: "Psalm 147:3",
        text: "He healeth the broken in heart, and bindeth up their wounds.",
      },
    ],
    reflection:
      "There is no schedule for grief. Let yourself mourn honestly, lean on people who can carry it with you, and trust that you are not alone in the valley.",
    relatedPrayerSlug: "grief",
    relatedFaithPath: "healing",
    translation: "King James Version",
  },
  peace: {
    slug: "peace",
    title: "Bible Verses About Peace",
    shortTitle: "Peace",
    description:
      "King James Version Bible verses about peace and calm, with a short reflection and a prayer for a restless heart.",
    intro:
      "The peace Scripture offers is not the absence of trouble but a settledness within it — a mind stayed on God while the storm is still loud.",
    verses: [
      {
        reference: "John 14:27",
        text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.",
      },
      {
        reference: "Philippians 4:7",
        text: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
      },
      {
        reference: "Isaiah 26:3",
        text: "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
      },
      {
        reference: "Psalm 4:8",
        text: "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.",
      },
      {
        reference: "Colossians 3:15",
        text: "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.",
      },
      {
        reference: "John 16:33",
        text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
      },
      {
        reference: "Numbers 6:24-26",
        text: "The LORD bless thee, and keep thee: the LORD make his face shine upon thee, and be gracious unto thee: the LORD lift up his countenance upon thee, and give thee peace.",
      },
    ],
    reflection:
      "Let peace, not panic, set the pace of your day. Return your mind to God whenever it drifts, as many times as it takes.",
    relatedPrayerSlug: "peace",
    relatedFaithPath: "peace",
    translation: "King James Version",
  },
  love: {
    slug: "love",
    title: "Bible Verses About Love",
    shortTitle: "Love",
    description:
      "King James Version Bible verses about love — God's love for us and how to love others — with a reflection and a prayer.",
    intro:
      "Scripture describes love less as a feeling and more as patient, humble action. These verses show both the love God gives and the love we are called to practice.",
    verses: [
      {
        reference: "1 Corinthians 13:4-5",
        text: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil.",
      },
      {
        reference: "John 3:16",
        text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      },
      {
        reference: "1 John 4:19",
        text: "We love him, because he first loved us.",
      },
      {
        reference: "1 John 4:7",
        text: "Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.",
      },
      {
        reference: "Romans 8:38-39",
        text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
      },
      {
        reference: "John 15:13",
        text: "Greater love hath no man than this, that a man lay down his life for his friends.",
      },
      {
        reference: "Mark 12:30-31",
        text: "And thou shalt love the Lord thy God with all thy heart... and thy neighbour as thyself.",
      },
    ],
    reflection:
      "Love that is received first becomes love we can give. Choose one patient, humble, practical act of love today.",
    relatedPrayerSlug: "family",
    relatedFaithPath: "family",
    translation: "King James Version",
  },
  faith: {
    slug: "faith",
    title: "Bible Verses About Faith",
    shortTitle: "Faith",
    description:
      "King James Version Bible verses about faith and trusting God, with a short reflection and a prayer.",
    intro:
      "Faith is not certainty about everything; it is trust in God when sight runs out. These verses describe a faith that can start small and still hold.",
    verses: [
      {
        reference: "Hebrews 11:1",
        text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
      },
      {
        reference: "Hebrews 11:6",
        text: "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
      },
      {
        reference: "2 Corinthians 5:7",
        text: "For we walk by faith, not by sight.",
      },
      {
        reference: "Matthew 17:20",
        text: "If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove.",
      },
      {
        reference: "Mark 9:23",
        text: "Jesus said unto him, If thou canst believe, all things are possible to him that believeth.",
      },
      {
        reference: "Romans 10:17",
        text: "So then faith cometh by hearing, and hearing by the word of God.",
      },
      {
        reference: "Ephesians 2:8",
        text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
      },
    ],
    reflection:
      "Faith does not require feeling strong. A small, honest 'I believe; help my unbelief' is enough to take the next step.",
    relatedPrayerSlug: "hope",
    relatedFaithPath: "hope",
    translation: "King James Version",
  },
  forgiveness: {
    slug: "forgiveness",
    title: "Bible Verses About Forgiveness",
    shortTitle: "Forgiveness",
    description:
      "King James Version Bible verses about forgiveness — receiving grace and extending it — with a reflection and a prayer.",
    intro:
      "Forgiveness in Scripture flows from grace already received. These verses speak of God's mercy and the call to release others — with wisdom and safe boundaries.",
    verses: [
      {
        reference: "Ephesians 4:32",
        text: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
      },
      {
        reference: "Colossians 3:13",
        text: "Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.",
      },
      {
        reference: "1 John 1:9",
        text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
      },
      {
        reference: "Matthew 6:14",
        text: "For if ye forgive men their trespasses, your heavenly Father will also forgive you.",
      },
      {
        reference: "Psalm 103:12",
        text: "As far as the east is from the west, so far hath he removed our transgressions from us.",
      },
      {
        reference: "Mark 11:25",
        text: "And when ye stand praying, forgive, if ye have ought against any: that your Father also which is in heaven may forgive you your trespasses.",
      },
      {
        reference: "Micah 7:18",
        text: "He retaineth not his anger for ever, because he delighteth in mercy.",
      },
    ],
    reflection:
      "Forgiving is not pretending nothing happened, and it does not mean staying in harm. It is releasing the debt to God while keeping wise boundaries.",
    relatedPrayerSlug: "forgiveness",
    relatedFaithPath: "forgiveness",
    translation: "King James Version",
  },
  gratitude: {
    slug: "gratitude",
    title: "Bible Verses About Gratitude and Thankfulness",
    shortTitle: "Gratitude",
    description:
      "King James Version Bible verses about gratitude and giving thanks, with a short reflection and a prayer.",
    intro:
      "Thankfulness is partly attention — noticing grace that is easy to overlook. These verses invite gratitude even within a hard season, not only after it.",
    verses: [
      {
        reference: "1 Thessalonians 5:18",
        text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
      },
      {
        reference: "Psalm 100:4",
        text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.",
      },
      {
        reference: "Colossians 3:15",
        text: "And let the peace of God rule in your hearts... and be ye thankful.",
      },
      {
        reference: "Philippians 4:6",
        text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
      },
      {
        reference: "Psalm 107:1",
        text: "O give thanks unto the LORD, for he is good: for his mercy endureth for ever.",
      },
      {
        reference: "James 1:17",
        text: "Every good gift and every perfect gift is from above, and cometh down from the Father of lights.",
      },
      {
        reference: "Psalm 9:1",
        text: "I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works.",
      },
    ],
    reflection:
      "Name one specific gift today — a person, a provision, a small mercy — and give thanks for it without denying what is still hard.",
    relatedPrayerSlug: "gratitude",
    relatedFaithPath: "gratitude",
    translation: "King James Version",
  },
  trust: {
    slug: "trust",
    title: "Bible Verses About Trusting God",
    shortTitle: "Trust",
    description:
      "King James Version Bible verses about trusting God in uncertainty, with a reflection and a prayer.",
    intro:
      "Trust does not erase questions; it decides where to rest them. These verses point to a God worth leaning on when the path is unclear.",
    verses: [
      {
        reference: "Proverbs 3:5-6",
        text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
      },
      {
        reference: "Psalm 56:3",
        text: "What time I am afraid, I will trust in thee.",
      },
      {
        reference: "Isaiah 26:3",
        text: "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
      },
      {
        reference: "Jeremiah 17:7",
        text: "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.",
      },
      {
        reference: "Psalm 37:5",
        text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
      },
      {
        reference: "Nahum 1:7",
        text: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
      },
      {
        reference: "Psalm 28:7",
        text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.",
      },
    ],
    reflection:
      "You can be honest about fear and still choose trust. Name the worry, then commit the next step to God.",
    relatedPrayerSlug: "guidance",
    relatedFaithPath: "guidance",
    translation: "King James Version",
  },
  finances: {
    slug: "finances",
    title: "Bible Verses About Money and Provision",
    shortTitle: "Finances",
    description:
      "King James Version Bible verses about money, provision, and contentment, with a reflection and a prayer.",
    intro:
      "Scripture speaks plainly about money — provision, contentment, and trust. These verses steady the heart without promising wealth.",
    verses: [
      {
        reference: "Philippians 4:19",
        text: "But my God shall supply all your need according to his riches in glory by Christ Jesus.",
      },
      {
        reference: "Matthew 6:33",
        text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      },
      {
        reference: "Hebrews 13:5",
        text: "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.",
      },
      {
        reference: "Proverbs 3:9-10",
        text: "Honour the LORD with thy substance, and with the firstfruits of all thine increase: so shall thy barns be filled with plenty.",
      },
      {
        reference: "Psalm 37:25",
        text: "I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.",
      },
      {
        reference: "2 Corinthians 9:8",
        text: "And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work.",
      },
      {
        reference: "1 Timothy 6:6",
        text: "But godliness with contentment is great gain.",
      },
    ],
    reflection:
      "Money stress is real, and so is provision. Do the next practical thing, give thanks for what is enough, and refuse both panic and shame.",
    relatedPrayerSlug: "provision",
    relatedFaithPath: "hope",
    translation: "King James Version",
  },
} as const satisfies Record<string, VerseTopic>;

export type VerseTopicSlug = keyof typeof verseTopics;

export const verseTopicKeys = Object.keys(verseTopics) as VerseTopicSlug[];

export const allVerseTopics: readonly VerseTopic[] = Object.values(verseTopics);

export function getVerseTopic(slug: string): VerseTopic | undefined {
  return verseTopics[slug as VerseTopicSlug];
}
