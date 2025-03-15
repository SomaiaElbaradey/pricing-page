import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./pricing-card";

const meta = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTier = {
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
  ],
  buttonText: "Get Started",
};

export const Monthly: Story = {
  args: {
    tier: mockTier,
    isYearly: false,
  },
};

export const Yearly: Story = {
  args: {
    tier: mockTier,
    isYearly: true,
  },
};
