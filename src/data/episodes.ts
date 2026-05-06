export interface Episode {
  number: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  tags: string[];
}

export const episodes: Episode[] = [
  {
    number: 1,
    title: "Needs vs Wants",
    date: "Feb 28, 2026",
    duration: "32 min",
    description:
      "We kick off the podcast by exploring how our upbringing shapes our relationship with money — and how to rewrite that narrative. Your financial journey starts with understanding where you've been.",
    tags: ["Mindset", "Getting Started"],
  },
  {
    number: 2,
    title: "What financial accounts do teens need?",
    date: "Mar 7, 2026",
    duration: "28 min",
    description:
      "Forget restrictive budgets that make you miserable. We break down a flexible budgeting framework that lets you enjoy life while still building wealth.",
    tags: ["Budgeting", "Practical Tips"],
  },
  {
    number: 3,
    title: "Investing 101: Start Before You're Ready",
    date: "Mar 14, 2026",
    duration: "35 min",
    description:
      "The best time to start investing was yesterday. The second best time is now. We demystify index funds, retirement accounts, and compound interest.",
    tags: ["Investing", "Beginner"],
  },
  {
    number: 4,
    title: "Side Hustles That Actually Pay",
    date: "Mar 21, 2026",
    duration: "30 min",
    description:
      "Not all side hustles are created equal. We rank the best ways to earn extra income based on time investment, scalability, and fun factor.",
    tags: ["Income", "Side Hustles"],
  },
  {
    number: 5,
    title: "Debt Payoff Strategies: Avalanche vs. Snowball",
    date: "Mar 28, 2026",
    duration: "26 min",
    description:
      "Two popular methods, one goal. We dive deep into which debt payoff strategy might work best for your situation and personality.",
    tags: ["Debt", "Strategy"],
  },
  {
    number: 6,
    title: "Building an Emergency Fund From Zero",
    date: "Apr 4, 2026",
    duration: "24 min",
    description:
      "Life happens. We share practical tips for building your safety net even when money is tight, plus how much you actually need saved.",
    tags: ["Savings", "Emergency Fund"],
  },
];
