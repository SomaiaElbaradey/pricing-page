"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onToggle(yearly);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Button
        variant="ghost"
        className={cn(
          "text-base font-medium",
          !isYearly ? "text-primary" : "text-secondary-500"
        )}
        onClick={() => handleToggle(false)}
      >
        Monthly
      </Button>
      <div className="relative inline-flex h-6 w-12 items-center rounded-full bg-secondary-200 dark:bg-secondary-800 transition-colors">
        <div
          className={cn(
            "absolute h-5 w-5 rounded-full bg-primary transition-transform",
            isYearly ? "translate-x-6" : "translate-x-1"
          )}
        />
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isYearly}
          onChange={() => handleToggle(!isYearly)}
          aria-label="Toggle between monthly and yearly billing"
        />
      </div>
      <Button
        variant="ghost"
        className={cn(
          "text-base font-medium",
          isYearly ? "text-primary" : "text-secondary-500"
        )}
        onClick={() => handleToggle(true)}
      >
        Yearly
      </Button>
    </div>
  );
}
