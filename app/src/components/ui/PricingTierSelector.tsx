"use client";

import { useState } from "react";

interface Tier {
  label: string;
  price: string;
}

export default function PricingTierSelector({
  tiers,
  variant,
}: {
  tiers: Tier[];
  variant: "white" | "primary";
}) {
  const [selected, setSelected] = useState(0);

  const isWhite = variant === "white";

  return (
    <div className="mb-4">
      <div className={`flex rounded-full p-1 gap-1 ${isWhite ? "bg-primary/10" : "bg-black/15"}`}>
        {tiers.map((tier, i) => (
          <button
            key={tier.label}
            type="button"
            onClick={() => setSelected(i)}
            className={`flex-1 rounded-full py-1.5 text-sm font-bold transition-colors cursor-pointer ${
              selected === i
                ? isWhite
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
                : isWhite
                ? "text-neutral hover:bg-primary/10"
                : "text-white hover:bg-white/10"
            }`}
          >
            {tier.label}
          </button>
        ))}
      </div>
      <p className={`mt-3 text-2xl tablet:text-3xl font-extrabold ${isWhite ? "text-neutral" : "text-white"}`}>
        {tiers[selected].price}
      </p>
    </div>
  );
}
