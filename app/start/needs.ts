export const needs = {
  peace: {
    title: "Peace",
    headline: "For a heart seeking peace",
    cardDescription: "Quiet a restless heart.",
    pause:
      "Take one slow breath. Let your shoulders settle. This can be a quiet moment before God.",
    intro:
      "You do not have to solve everything at once. Begin by naming what feels unsettled and letting God meet you there.",
    prayer:
      "Lord, meet me in this moment. Help me loosen my grip on what I cannot carry well, receive Your care, and take one calm step today.",
    question: "What would it look like to give this worry to God today?",
    action: "Write down one worry and pray over it slowly.",
    reminder:
      "A future item connected to peace would be a simple reminder to pause and pray, not a source of protection or spiritual power.",
  },
  strength: {
    title: "Strength",
    headline: "For a heart carrying a hard day",
    cardDescription: "Stand steady through a hard day.",
    pause:
      "Place both feet on the floor. Take one steady breath before you think about the whole day.",
    intro:
      "Strength does not mean pretending you are not tired. It can begin with asking God for enough grace for the next faithful step.",
    prayer:
      "Lord, give me courage for what is in front of me. Help me move with patience, wisdom, and love.",
    question: "Where do I need strength for the next right step, not the whole road?",
    action: "Choose one small faithful step and do that before anything else.",
    reminder:
      "A future item connected to strength would be a reminder of endurance and courage, not a promise of outcomes.",
  },
  guidance: {
    title: "Guidance",
    headline: "For a heart before the next step",
    cardDescription: "Ask for wisdom before the next step.",
    pause:
      "Slow the decision down for a moment. You can ask for wisdom without forcing an answer.",
    intro:
      "Use this moment to quiet the rush and ask God for wisdom, clarity, and a faithful path.",
    prayer:
      "Lord, guide my thoughts and desires. Help me listen carefully and choose what is honest, wise, and good.",
    question: "What decision needs prayerful attention instead of hurry?",
    action: "Name the decision in one sentence, then pray before acting.",
    reminder:
      "A future item connected to guidance would be a reminder to seek wisdom, not an object with spiritual power.",
  },
  hope: {
    title: "Hope",
    headline: "For a heart looking for light",
    cardDescription: "Find light when things feel heavy.",
    pause:
      "Take one slow breath and let this be a moment where heaviness does not get the final word.",
    intro:
      "Hope does not require pretending everything is easy. It begins by turning toward God again.",
    prayer:
      "Lord, help me notice the light You are giving today. Keep my heart open to mercy, courage, and renewal.",
    question: "Where do I need to make room for hope today?",
    action: "Write down one sign of grace, however small, from today.",
    reminder:
      "A future item connected to hope would be a reminder of encouragement, not a guarantee that pain disappears.",
  },
  forgiveness: {
    title: "Forgiveness",
    headline: "For a heart returning to grace",
    cardDescription: "Return to grace with honesty.",
    pause:
      "Take one honest breath. You can bring the truth to God without hiding and without despair.",
    intro:
      "This is a quiet place to bring truth before God and ask for mercy without despair.",
    prayer:
      "Lord, lead me into honest confession and wise repair. Help me receive mercy and offer forgiveness with care.",
    question: "What would mercy look like in this situation?",
    action: "Name one honest confession or one careful act of repair.",
    reminder:
      "A future item connected to forgiveness would be a reminder of mercy and renewal, not a way to earn grace.",
  },
  gratitude: {
    title: "Gratitude",
    headline: "For a heart practicing gratitude",
    cardDescription: "Notice what is still good.",
    pause:
      "Pause before moving on. Let your attention rest on one gift you did not create for yourself.",
    intro:
      "Gratitude can gently redirect attention toward what God has already placed in your day.",
    prayer:
      "Lord, open my eyes to the gifts I often miss. Teach me to receive today with humility and thanks.",
    question: "What good gift can I name with gratitude right now?",
    action: "Text one person you are grateful for, or write their name down.",
    reminder:
      "A future item connected to gratitude would be a reminder to give thanks, not a source of blessing.",
  },
  family: {
    title: "Family",
    headline: "For a heart praying over family",
    cardDescription: "Pray over the people closest to you.",
    pause:
      "Take one slow breath and picture the people you are carrying in prayer.",
    intro:
      "Bring your family and relationships before God with care, patience, and practical love.",
    prayer:
      "Lord, bless my family with honesty, patience, protection, and love. Help me serve them with grace today.",
    question: "Who needs prayer and practical care from me today?",
    action: "Choose one person to pray for by name, then consider one practical kindness.",
    reminder:
      "A future item connected to family would be a reminder to love and pray, not a promise of control over outcomes.",
  },
  anxiety: {
    title: "Anxiety",
    headline: "For a heart feeling anxious",
    cardDescription: "Slow down and breathe with God.",
    pause:
      "Take one slow breath in, then one slow breath out. Let this be one moment, not the whole future.",
    intro:
      "Anxiety can make everything feel immediate. This is a place to slow the pace, name what is present, and ask God for steadiness.",
    prayer:
      "Lord, steady me with Your presence. Help me ask for help when needed and take one small step without rushing.",
    question: "What is one small next step I can take with care?",
    action: "Write down the next small step, then leave the rest for later.",
    reminder:
      "A future item connected to anxiety would be a reminder to pause and pray, not a claim of protection, healing, or power.",
  },
} as const;

export type NeedKey = keyof typeof needs;

export const needKeys = Object.keys(needs) as NeedKey[];
