export const peacePlan = {
  slug: "peace",
  title: "7 Days of Peace",
  description:
    "A gentle path for slowing down, praying honestly, and receiving peace one day at a time.",
  intro:
    "This plan is a simple daily path for Scripture, prayer, and reflection. It is not a formula or guarantee; it is a quiet place to turn your heart toward God.",
  days: [
    {
      day: 1,
      title: "Peace for a Troubled Heart",
      href: "/plans/peace/day-1",
      available: true,
    },
    {
      day: 2,
      title: "Peace in the Waiting",
      available: false,
    },
    {
      day: 3,
      title: "Peace When You Feel Weak",
      available: false,
    },
    {
      day: 4,
      title: "Peace in Your Home",
      available: false,
    },
    {
      day: 5,
      title: "Peace with the Past",
      available: false,
    },
    {
      day: 6,
      title: "Peace for Tomorrow",
      available: false,
    },
    {
      day: 7,
      title: "Walking in Peace",
      available: false,
    },
  ],
} as const;

export const futurePlans = ["Strength", "Hope", "Gratitude", "Knowing Jesus"];

export const peacePlanDay1 = {
  title: "Day 1 \u00b7 Peace for a Troubled Heart",
  opening:
    "Begin with a quiet moment. You do not need to fix everything before you come to God.",
  verse:
    "\u201cPeace I leave with you. My peace I give to you; not as the world gives, I give to you. Don\u2019t let your heart be troubled, neither let it be fearful.\u201d",
  reference: "John 14:27 \u00b7 World English Bible",
  reflection:
    "Jesus does not offer peace as pressure to perform calmness. He gives peace as a gift received in His presence. Today, you can name what feels troubled and let prayer become the place where you stop carrying it alone.",
  prayer:
    "Lord Jesus, meet me in the places that feel unsettled. Help me receive Your peace with honesty and trust. Steady my heart, guide my next step, and teach me to rest in Your care today.",
  question: "What pressure are you trying to carry alone today?",
  action:
    "Write one worry down. Pray over it slowly, then choose one small faithful step.",
} as const;
