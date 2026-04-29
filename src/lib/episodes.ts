export interface Episode {
  id: number;
  slug: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  fullDescription: string;
  tags: string[];
  takeaways: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
}

export const episodes: Episode[] = [
  {
    id: 1,
    slug: "why-your-money-story-matters",
    title: "Why Your Money Story Matters",
    date: "Feb 28, 2026",
    duration: "32 min",
    description:
      "We kick off the podcast by exploring how our upbringing shapes our relationship with money — and how to rewrite that narrative. Your financial journey starts with understanding where you've been.",
    fullDescription:
      "In our very first episode, we dig into the psychological roots of personal finance — something most money podcasts skip entirely. The way you think about money today was shaped by what you saw, heard, and experienced growing up. Whether your household talked about money openly or treated it like a dirty secret, those early messages became your internal financial operating system.\n\nWe explore the concept of \"money scripts\" — the unconscious beliefs that drive your financial decisions — and walk through how to identify yours. From \"money is the root of all evil\" to \"you have to work hard to deserve money,\" these deeply held beliefs can silently sabotage even the best financial strategies.\n\nThis episode sets the foundation for everything we'll cover in the series: that lasting financial change starts from the inside out.",
    tags: ["Mindset", "Getting Started"],
    takeaways: [
      "Your money story is largely written in childhood — but it's never too late to revise it",
      "Identify your personal \"money scripts\" to understand what's driving your financial behavior",
      "Awareness is the first step: you can't change what you haven't named",
      "A healthy money mindset is a skill, not a personality trait",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 2,
    slug: "the-budget-that-actually-works",
    title: "The Budget That Actually Works",
    date: "Mar 7, 2026",
    duration: "28 min",
    description:
      "Forget restrictive budgets that make you miserable. We break down a flexible budgeting framework that lets you enjoy life while still building wealth.",
    fullDescription:
      "The word \"budget\" makes most people cringe — and honestly, traditional budgeting deserves that reaction. Tracking every single dollar across dozens of categories is exhausting, and the all-or-nothing mentality it creates sets you up to fail.\n\nIn this episode, we introduce a values-based budgeting approach that starts with what actually matters to you. Instead of cutting out everything fun, you make intentional tradeoffs: spend freely on the things you love, ruthlessly cut the things you don't.\n\nWe cover the 50/30/20 framework as a starting point, why \"paying yourself first\" is more powerful than willpower, and how automation can make budgeting nearly effortless. Plus, we talk about what to do when life blows up your budget — because it will.",
    tags: ["Budgeting", "Practical Tips"],
    takeaways: [
      "Traditional budgets fail because they fight human psychology — a good budget works with it",
      "The 50/30/20 rule: 50% needs, 30% wants, 20% savings and debt payoff",
      "Automate your savings so it happens before you can spend it",
      "Budget for fun — a plan that makes you miserable isn't a plan you'll stick to",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 3,
    slug: "investing-101-start-before-youre-ready",
    title: "Investing 101: Start Before You're Ready",
    date: "Mar 14, 2026",
    duration: "35 min",
    description:
      "The best time to start investing was yesterday. The second best time is now. We demystify index funds, retirement accounts, and compound interest.",
    fullDescription:
      "Investing feels intimidating — especially when finance Twitter is full of people arguing about options strategies and individual stock picks. But here's the truth: for most people, investing doesn't have to be complicated at all.\n\nThis episode strips it back to basics. We explain what the stock market actually is (hint: it's just ownership in real businesses), why index funds beat most actively managed funds over time, and how compound interest turns small, consistent contributions into significant wealth over decades.\n\nWe walk through the order of operations for new investors: employer 401(k) match first (it's free money), then Roth IRA, then back to your 401(k), then taxable brokerage. And we tackle the most common reason people don't start: waiting until they have \"enough\" to invest.",
    tags: ["Investing", "Beginner"],
    takeaways: [
      "Time in the market beats timing the market — starting matters more than starting perfectly",
      "Index funds give you broad diversification at a low cost — that's the strategy",
      "Compound interest is most powerful over long time horizons; every year you wait costs you",
      "Employer 401(k) match is an instant 50-100% return — always capture it first",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 4,
    slug: "side-hustles-that-actually-pay",
    title: "Side Hustles That Actually Pay",
    date: "Mar 21, 2026",
    duration: "30 min",
    description:
      "Not all side hustles are created equal. We rank the best ways to earn extra income based on time investment, scalability, and fun factor.",
    fullDescription:
      "The side hustle economy is real — but so is side hustle fatigue. Between driving for rideshares, selling on Etsy, and freelancing, it can feel like you need three extra jobs just to get ahead. This episode helps you cut through the noise.\n\nWe evaluate side hustles across three dimensions: hourly rate (what you actually earn after expenses), scalability (can it grow beyond your direct time?), and sustainability (will you burn out in six months?). Spoiler: most \"passive income\" ideas require a lot of active work upfront.\n\nWe highlight which side hustles have the best ROI for your time, which are worth it for skill-building even if the pay is modest, and the one question to ask before starting any side hustle: does this align with where I want my life to go?",
    tags: ["Income", "Side Hustles"],
    takeaways: [
      "Evaluate side hustles on hourly rate, scalability, and sustainability — not just upside",
      "Skills-based freelancing (writing, design, coding) typically earns far more than task-based gigs",
      "\"Passive income\" almost always requires significant active work first",
      "The best side hustle is one that builds toward your bigger goals, not just your bank account",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 5,
    slug: "debt-payoff-strategies-avalanche-vs-snowball",
    title: "Debt Payoff Strategies: Avalanche vs. Snowball",
    date: "Mar 28, 2026",
    duration: "26 min",
    description:
      "Two popular methods, one goal. We dive deep into which debt payoff strategy might work best for your situation and personality.",
    fullDescription:
      "Debt is one of the most emotionally loaded topics in personal finance — and the way you pay it off matters more than most people realize. This episode compares the two most popular methods: the avalanche (highest interest rate first) and the snowball (smallest balance first).\n\nMathematically, the avalanche wins every time — you pay less interest overall. But personal finance is personal, and the psychological wins from the snowball method keep many people motivated enough to actually finish the process. We break down exactly when each approach makes sense.\n\nWe also cover the \"debt avalanche\" hybrid, when to consider balance transfers, and the often-ignored emotional cost of carrying debt — the mental load that quietly affects your decision-making, relationships, and stress levels.",
    tags: ["Debt", "Strategy"],
    takeaways: [
      "Avalanche saves the most money; snowball builds the most momentum — know which you need",
      "The best strategy is the one you'll actually stick with",
      "List all debts with balances, minimum payments, and interest rates before picking a method",
      "Carrying debt has a psychological cost beyond the financial one — factor that in",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 6,
    slug: "building-an-emergency-fund-from-zero",
    title: "Building an Emergency Fund From Zero",
    date: "Apr 4, 2026",
    duration: "24 min",
    description:
      "Life happens. We share practical tips for building your safety net even when money is tight, plus how much you actually need saved.",
    fullDescription:
      "An emergency fund isn't just a financial tool — it's a psychological buffer between you and panic. When your car breaks down or you lose a client, having cash set aside means you solve a problem instead of starting a crisis. This episode is about building that buffer from scratch.\n\nWe tackle the most common objection head-on: \"I can't save when I'm living paycheck to paycheck.\" It's real, and we don't dismiss it. Instead, we walk through practical tactics: starting with a micro-goal ($500 changes everything), finding hidden cash in your current budget, and treating your emergency fund contribution like a non-negotiable bill.\n\nWe also address how much you actually need (it depends), where to keep it (high-yield savings account, not your checking), and when it's okay to use it — because not every surprise is a true emergency.",
    tags: ["Savings", "Emergency Fund"],
    takeaways: [
      "Start with $500 — that single buffer prevents most financial emergencies from becoming catastrophes",
      "3-6 months of expenses is the target; your job stability and risk tolerance affect where in that range",
      "Keep your emergency fund in a high-yield savings account, separate from your everyday checking",
      "Define what counts as an emergency before you need the money — it prevents rationalization",
    ],
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((ep) => ep.slug === slug);
}

export function getAdjacentEpisodes(id: number): {
  prev: Episode | null;
  next: Episode | null;
} {
  const index = episodes.findIndex((ep) => ep.id === id);
  return {
    prev: index > 0 ? episodes[index - 1] : null,
    next: index < episodes.length - 1 ? episodes[index + 1] : null,
  };
}
