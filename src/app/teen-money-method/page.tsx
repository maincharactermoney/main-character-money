import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ArrowDown, Wallet, Landmark, TrendingUp, PiggyBank, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Build a Money System</h1>,
    description:
      "Set the foundation. Learn how to track what's coming in and going out so every dollar has a job.",
    icon: Wallet,
  },
  {
    number: "2",
    title: "Open Accounts",
    description:
      "Get the right accounts in place — checking, savings, and the tools you'll actually use.",
    icon: Landmark,
  },
  {
    number: "3",
    title: "Investing for Future Wealth",
    description:
      "Put your money to work. Start early, stay consistent, and let compound growth do the heavy lifting.",
    icon: TrendingUp,
  },
  {
    number: "4",
    title: "Save with a Purpose",
    description:
      "Give every saved dollar a name — a goal, a trip, a dream. Saving with intention sticks.",
    icon: PiggyBank,
  },
  {
    number: "5",
    title: "Automate and Review",
    description:
      "Set it and forget it. Automation removes willpower from the equation and keeps you winning on autopilot.",
    icon: Zap,
  },
];

type Step = (typeof steps)[number];

function StepCard({ step, idx }: { step: Step; idx: number }) {
  const Icon = step.icon;
  return (
    <div className="bg-card border-2 border-terracotta rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow w-full h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="font-display text-base font-extrabold text-terracotta">
          Step {idx + 1}
        </span>
      </div>
      <h3 className="font-display text-base font-bold text-card-foreground mb-2 leading-tight">
        {step.title}
      </h3>
      <p className="text-muted text-xs leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function TeenMoneyMethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-terracotta py-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Teen Money Method
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-6 leading-relaxed">
              Five simple steps to take charge of your money — build the habits
              and start growing wealth.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop: 3 cards top row, 2 cards bottom row */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-stretch">
              <StepCard step={steps[0]} idx={0} />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-7 h-7 text-terracotta" />
              </div>
              <StepCard step={steps[1]} idx={1} />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-7 h-7 text-terracotta" />
              </div>
              <StepCard step={steps[2]} idx={2} />
            </div>

            <div className="h-10" />

            <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch max-w-2xl mx-auto">
              <StepCard step={steps[3]} idx={3} />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-7 h-7 text-terracotta" />
              </div>
              <StepCard step={steps[4]} idx={4} />
            </div>
          </div>

          {/* Mobile: stacked with down arrows */}
          <div className="md:hidden flex flex-col gap-6">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div key={step.number} className="flex flex-col items-center gap-6">
                  <StepCard step={step} idx={idx} />
                  {!isLast && <ArrowDown className="w-7 h-7 text-terracotta" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pink-500">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Ready to start the method?
            </h2>
            <p className="text-white/80 text-lg mt-4 max-w-xl mx-auto">
              Tune into the show and we&apos;ll walk you through every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/episodes"
                className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Listen to Episodes
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
