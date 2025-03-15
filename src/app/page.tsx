"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PricingToggle } from "@/components/pricing-toggle";
import { PricingCard, type PricingTier } from "@/components/pricing-card";

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description: "Everything you need to get started",
    price: {
      monthly: 10,
      yearly: 100,
    },
    features: [
      { text: "Up to 5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "24-hour support response time", included: true },
      { text: "Team collaboration", included: false },
      { text: "Advanced security", included: false },
      { text: "Custom branding", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    description: "Perfect for growing teams",
    price: {
      monthly: 25,
      yearly: 250,
    },
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "4-hour support response time", included: true },
      { text: "Team collaboration", included: true },
      { text: "Advanced security", included: true },
      { text: "Custom branding", included: false },
    ],
    buttonText: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: {
      monthly: 50,
      yearly: 500,
    },
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "1-hour support response time", included: true },
      { text: "Team collaboration", included: true },
      { text: "Advanced security", included: true },
      { text: "Custom branding", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-950 transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">PricingApp</h1>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-text-secondary dark:text-secondary-400 max-w-2xl mx-auto">
            Choose the plan that works best for you and your team. All plans
            include a 14-day free trial.
          </p>
        </div>

        <PricingToggle onToggle={setIsYearly} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} isYearly={isYearly} />
          ))}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-secondary-200 dark:border-secondary-800">
        <div className="text-center text-text-tertiary dark:text-secondary-500">
          <p>© {new Date().getFullYear()} PricingApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
