export const prayerTopics = {
  peace: {
    title: "Peace",
    headline: "Prayer for Peace",
    cardDescription: "For a restless heart that needs quiet with God.",
    pause: "Take a slow breath and bring this moment honestly before God.",
    intro: "Begin here when your thoughts feel noisy and your heart needs room to settle.",
    prayer:
      "Lord Jesus, meet me with Your peace. Help me release what I cannot control and receive enough calm for this moment.",
    question: "What pressure am I carrying that I can name before God today?",
    action: "Write down one worry, then pray over it slowly.",
  },
  strength: {
    title: "Strength",
    headline: "Prayer for Strength",
    cardDescription: "For courage when the next step feels heavy.",
    pause: "Take one steady breath before looking at the whole day.",
    intro: "Begin here when you feel tired, stretched, or unsure how to keep going.",
    prayer:
      "Lord, give me strength for the next faithful step. Help me move with patience, courage, and love.",
    question: "What is the next right step I need strength to take?",
    action: "Choose one small task and do it with prayerful attention.",
  },
  guidance: {
    title: "Guidance",
    headline: "Prayer for Guidance",
    cardDescription: "For wisdom before a choice or new season.",
    pause: "Slow down before deciding. Make room to listen.",
    intro: "Begin here when you need wisdom and want to choose with care.",
    prayer:
      "Lord, guide my thoughts and desires. Help me recognize what is wise, honest, and faithful.",
    question: "What decision needs prayer instead of hurry?",
    action: "Write the decision in one sentence, then pause before acting.",
  },
  gratitude: {
    title: "Gratitude",
    headline: "Prayer of Gratitude",
    cardDescription: "For noticing grace and giving thanks.",
    pause: "Pause long enough to notice one gift in this day.",
    intro: "Begin here when you want to return your attention to what is still good.",
    prayer:
      "Lord, open my eyes to the gifts I overlook. Teach me to receive today with humility and thanks.",
    question: "What good gift can I thank God for right now?",
    action: "Name one person or moment you are grateful for today.",
  },
  healing: {
    title: "Healing",
    headline: "Prayer for Healing",
    cardDescription: "For pain, care, and honest hope.",
    pause: "Let yourself be honest about what hurts.",
    intro: "Begin here when you are carrying pain and need mercy, care, and steadiness.",
    prayer:
      "Lord, I bring You what hurts. Hold me with mercy, help me seek wise care, and keep my heart near You.",
    question: "What part of my life needs tenderness and support today?",
    action: "Name one wise source of support you can reach toward.",
  },
  forgiveness: {
    title: "Forgiveness",
    headline: "Prayer for Forgiveness",
    cardDescription: "For confession, mercy, release, and repair.",
    pause: "Take one honest breath. You can come to God without hiding.",
    intro: "Begin here when you need mercy, humility, or courage to repair what can be repaired.",
    prayer:
      "Lord, lead me into truth without despair. Help me receive mercy and practice forgiveness with wisdom.",
    question: "Where do I need to receive or extend mercy carefully?",
    action: "Name one honest confession or one careful act of repair.",
  },
  family: {
    title: "Family",
    headline: "Prayer for Family",
    cardDescription: "For home, relationships, and loved ones.",
    pause: "Picture the people closest to you and hold them before God.",
    intro: "Begin here when you are praying over your home, relationships, or loved ones.",
    prayer:
      "Lord, bless my family with patience, honesty, protection, and love. Help me serve them with grace.",
    question: "Who in my family needs prayer and practical care today?",
    action: "Pray for one person by name, then consider one practical kindness.",
  },
  anxiety: {
    title: "Anxiety",
    headline: "Prayer for Anxiety",
    cardDescription: "For a gentle pause when anxious thoughts feel close.",
    pause: "Take one slow breath in, then one slow breath out.",
    intro: "Begin here when anxious thoughts feel immediate and you need to slow the pace.",
    prayer:
      "Lord, steady me with Your presence. Help me ask for help when needed and take one small step without rushing.",
    question: "What is one small next step I can take with care?",
    action: "Write down the next small step and leave the rest for later.",
  },
} as const;

export type PrayerTopicKey = keyof typeof prayerTopics;

export const prayerTopicKeys = Object.keys(prayerTopics) as PrayerTopicKey[];
