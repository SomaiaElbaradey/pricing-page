import { render, screen } from "@testing-library/react";
import { PricingCard } from "../pricing-card";

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

describe("PricingCard", () => {
  it("renders the pricing card with monthly price", () => {
    render(<PricingCard tier={mockTier} isYearly={false} />);

    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(
      screen.getByText("Everything you need to get started")
    ).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("/month")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders the pricing card with yearly price", () => {
    render(<PricingCard tier={mockTier} isYearly={true} />);

    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("/year")).toBeInTheDocument();
  });

  it("renders included and excluded features correctly", () => {
    render(<PricingCard tier={mockTier} isYearly={false} />);

    const features = screen.getAllByRole("listitem");
    expect(features).toHaveLength(4);
  });
});
