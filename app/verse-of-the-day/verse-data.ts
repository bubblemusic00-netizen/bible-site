export type DailyVerse = {
  reference: string;
  translation: "King James Version";
  text: string;
  /** One-line reflection shown beneath the verse. */
  reflection: string;
  /** Existing prayer path slug for the "Pray with this verse" link. */
  prayerSlug: string;
};

// Curated rotation. KJV (public domain) to match the guided Bible readings.
// The verse shown rotates by day of year, so it changes daily without a
// redeploy and is identical for every visitor on the same day.
export const dailyVerses: readonly DailyVerse[] = [
  {
    reference: "John 14:27",
    translation: "King James Version",
    text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
    reflection:
      "Peace is offered as a gift before every pressure is solved. Let it slow your thoughts and invite trust, one honest breath at a time.",
    prayerSlug: "peace",
  },
  {
    reference: "Philippians 4:6",
    translation: "King James Version",
    text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
    reflection:
      "Worry shrinks when it is spoken honestly to God. Name one concern today instead of carrying it silently.",
    prayerSlug: "peace",
  },
  {
    reference: "Psalm 23:1",
    translation: "King James Version",
    text: "The LORD is my shepherd; I shall not want.",
    reflection:
      "Being led is not weakness. Let this remind you to listen and follow rather than walk alone.",
    prayerSlug: "guidance",
  },
  {
    reference: "Psalm 46:1",
    translation: "King James Version",
    text: "God is our refuge and strength, a very present help in trouble.",
    reflection:
      "Refuge is a place to return to, not a feeling to manufacture. Bring the trouble as it is.",
    prayerSlug: "protection",
  },
  {
    reference: "Isaiah 41:10",
    translation: "King James Version",
    text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
    reflection:
      "Courage here is rooted in presence, not in pretending the fear is gone.",
    prayerSlug: "strength",
  },
  {
    reference: "Proverbs 3:5",
    translation: "King James Version",
    text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
    reflection:
      "Trust does not erase thinking; it loosens the grip of needing to control every outcome.",
    prayerSlug: "guidance",
  },
  {
    reference: "Joshua 1:9",
    translation: "King James Version",
    text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
    reflection:
      "Courage is asked for the next step, not the whole road at once.",
    prayerSlug: "strength",
  },
  {
    reference: "Matthew 11:28",
    translation: "King James Version",
    text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    reflection:
      "Rest is offered to the weary, not earned by the strong. You are allowed to come tired.",
    prayerSlug: "hope",
  },
  {
    reference: "Psalm 34:18",
    translation: "King James Version",
    text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
    reflection:
      "Nearness is promised in the breaking, not only after the healing.",
    prayerSlug: "hope",
  },
  {
    reference: "Philippians 4:13",
    translation: "King James Version",
    text: "I can do all things through Christ which strengtheneth me.",
    reflection:
      "Strength here is dependence, not self-sufficiency. Lean on the source, then take one step.",
    prayerSlug: "strength",
  },
  {
    reference: "Romans 8:28",
    translation: "King James Version",
    text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    reflection:
      "This is not a promise that everything is good, but that nothing is wasted.",
    prayerSlug: "hope",
  },
  {
    reference: "Psalm 121:1-2",
    translation: "King James Version",
    text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
    reflection:
      "When you do not know where to look, look up and ask for help honestly.",
    prayerSlug: "protection",
  },
  {
    reference: "1 Peter 5:7",
    translation: "King James Version",
    text: "Casting all your care upon him; for he careth for you.",
    reflection:
      "Caring is mutual here. You are not bothering God with what burdens you.",
    prayerSlug: "peace",
  },
  {
    reference: "John 3:16",
    translation: "King James Version",
    text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    reflection:
      "Love came first and acted first. Receive it before trying to earn it.",
    prayerSlug: "gratitude",
  },
  {
    reference: "Psalm 28:7",
    translation: "King James Version",
    text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.",
    reflection:
      "Trust and help are linked. Bring the heart as it is, not as it should be.",
    prayerSlug: "protection",
  },
  {
    reference: "Lamentations 3:22-23",
    translation: "King James Version",
    text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    reflection:
      "Mercy is renewable. Yesterday's failure does not use up today's grace.",
    prayerSlug: "gratitude",
  },
  {
    reference: "Psalm 118:24",
    translation: "King James Version",
    text: "This is the day which the LORD hath made; we will rejoice and be glad in it.",
    reflection:
      "Gladness can be a choice made within a hard day, not only after it.",
    prayerSlug: "gratitude",
  },
  {
    reference: "Jeremiah 29:11",
    translation: "King James Version",
    text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
    reflection:
      "Hope here rests on God's intentions, not on a guaranteed easy outcome.",
    prayerSlug: "hope",
  },
  {
    reference: "2 Timothy 1:7",
    translation: "King James Version",
    text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    reflection:
      "Fear is not your true voice. Ask for love and a settled mind today.",
    prayerSlug: "strength",
  },
  {
    reference: "Psalm 55:22",
    translation: "King James Version",
    text: "Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.",
    reflection:
      "Sustaining is ongoing, not one-time. Hand over the burden again if you need to.",
    prayerSlug: "peace",
  },
  {
    reference: "Matthew 6:34",
    translation: "King James Version",
    text: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.",
    reflection:
      "Today has enough. You are not required to carry tomorrow yet.",
    prayerSlug: "peace",
  },
  {
    reference: "Psalm 27:1",
    translation: "King James Version",
    text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
    reflection:
      "Light and strength are named first, so fear is answered rather than denied.",
    prayerSlug: "protection",
  },
  {
    reference: "Isaiah 40:31",
    translation: "King James Version",
    text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    reflection:
      "Waiting is not wasted time; it is where strength is renewed.",
    prayerSlug: "patience",
  },
  {
    reference: "1 Corinthians 13:4",
    translation: "King James Version",
    text: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.",
    reflection:
      "Love is patient action more than feeling. Choose one kind, unhurried thing today.",
    prayerSlug: "family",
  },
  {
    reference: "Psalm 51:10",
    translation: "King James Version",
    text: "Create in me a clean heart, O God; and renew a right spirit within me.",
    reflection:
      "Renewal is asked for, not achieved alone. Begin with honesty rather than shame.",
    prayerSlug: "forgiveness",
  },
  {
    reference: "Ephesians 4:32",
    translation: "King James Version",
    text: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
    reflection:
      "Forgiveness given flows from forgiveness received, with wisdom and safe boundaries.",
    prayerSlug: "forgiveness",
  },
  {
    reference: "James 1:5",
    translation: "King James Version",
    text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
    reflection:
      "Asking for wisdom is not failure. It is invited, generously and without shame.",
    prayerSlug: "wisdom",
  },
  {
    reference: "Colossians 3:15",
    translation: "King James Version",
    text: "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.",
    reflection:
      "Let peace, not panic, set today's pace. Thankfulness keeps it grounded.",
    prayerSlug: "gratitude",
  },
  {
    reference: "Psalm 103:2",
    translation: "King James Version",
    text: "Bless the LORD, O my soul, and forget not all his benefits.",
    reflection:
      "Gratitude is partly memory. Name one benefit you might otherwise overlook.",
    prayerSlug: "gratitude",
  },
];

/**
 * Deterministic daily selection by UTC day of year, so every visitor sees the
 * same verse on a given day and it advances each calendar day.
 */
export function getVerseOfTheDay(date: Date = new Date()): DailyVerse {
  const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 0);
  const today = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );
  const dayOfYear = Math.floor((today - startOfYear) / 86_400_000);
  return dailyVerses[dayOfYear % dailyVerses.length];
}
