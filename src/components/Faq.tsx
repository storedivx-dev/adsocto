"use client";

import { useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const active = open === i;
        return (
          <button
            key={item.q}
            type="button"
            onClick={() => setOpen(active ? -1 : i)}
            className="glass w-full rounded-2xl px-5 py-4 text-left"
          >
            <span className="flex items-center justify-between gap-4">
              <span className="font-display text-base font-semibold">{item.q}</span>
              <span className="text-fuchsia-300">{active ? "−" : "+"}</span>
            </span>
            {active ? (
              <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
