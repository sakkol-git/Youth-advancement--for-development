"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DONATION_AMOUNTS } from "@/lib/constants";

interface AmountSelectorProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export function AmountSelector({ value, onChange, error }: AmountSelectorProps) {
  const isCustom = !DONATION_AMOUNTS.includes(value as (typeof DONATION_AMOUNTS)[number]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {DONATION_AMOUNTS.map((amount) => (
          <motion.button
            key={amount}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(amount)}
            className={cn(
              "py-4 px-6 rounded-lg border-2 text-lg font-semibold transition-all",
              value === amount
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            ${amount}
          </motion.button>
        ))}
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
          $
        </span>
        <input
          type="number"
          placeholder="Custom amount"
          value={isCustom ? value : ""}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            "w-full pl-8 pr-4 py-4 rounded-lg border-2 text-lg font-semibold",
            "bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            isCustom ? "border-primary" : "border-border"
          )}
          min="1"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
