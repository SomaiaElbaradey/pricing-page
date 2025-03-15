import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  isYearly: boolean;
}

export function PricingCard({ tier, isYearly }: PricingCardProps) {
  const price = isYearly ? tier.price.yearly : tier.price.monthly;

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl p-6 shadow-lg",
        tier.highlighted
          ? "bg-primary text-white dark:bg-primary-800"
          : "bg-white dark:bg-secondary-900"
      )}
    >
      <div className="mb-4">
        <h3
          className={cn(
            "text-xl font-bold",
            tier.highlighted ? "text-white" : "text-text dark:text-white"
          )}
        >
          {tier.name}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm",
            tier.highlighted
              ? "text-primary-100"
              : "text-text-secondary dark:text-secondary-400"
          )}
        >
          {tier.description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={cn(
            "text-4xl font-bold",
            tier.highlighted ? "text-white" : "text-text dark:text-white"
          )}
        >
          ${price}
        </span>
        <span
          className={cn(
            "ml-1",
            tier.highlighted
              ? "text-primary-100"
              : "text-text-secondary dark:text-secondary-400"
          )}
        >
          /{isYearly ? "year" : "month"}
        </span>
      </div>

      <div className="mb-6 flex-grow">
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={cn(
                  "mr-2 h-5 w-5 shrink-0 mt-0.5",
                  tier.highlighted
                    ? feature.included
                      ? "text-white"
                      : "text-primary-300"
                    : feature.included
                    ? "text-primary"
                    : "text-secondary-400 dark:text-secondary-600"
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  tier.highlighted
                    ? feature.included
                      ? "text-white"
                      : "text-primary-300"
                    : feature.included
                    ? "text-text dark:text-white"
                    : "text-secondary-400 dark:text-secondary-600"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={cn(
          "w-full",
          tier.highlighted
            ? "bg-white text-primary hover:bg-primary-50"
            : "bg-primary text-white hover:bg-primary-600"
        )}
      >
        {tier.buttonText}
      </Button>
    </div>
  );
}
