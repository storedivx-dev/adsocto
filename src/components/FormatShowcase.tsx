"use client";

import { useState } from "react";
import { formats } from "@/lib/data";
import { ButtonLink } from "@/components/Ui";

export function FormatShowcase() {
  const [active, setActive] = useState(0);
  const format = formats[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {formats.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              i === active
                ? "glow-btn text-white"
                : "border border-white/10 bg-white/5 text-muted hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {format.model} · {format.audience}
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold">{format.name}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          {format.summary}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-foreground/90">
          {format.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-fuchsia-300">▹</span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/formats">Explore all formats</ButtonLink>
        </div>
      </div>
    </div>
  );
}
