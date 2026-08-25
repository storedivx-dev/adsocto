import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, PageHero } from "@/components/Ui";
import { formats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ad formats",
  description:
    "Popunder, push, in-page push, native, interstitials, social bar, direct click, and display banners on AdsOcto.",
};

export default function FormatsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Formats"
        title="Eight formats. One octopus."
        body="Each unit is tuned for a job: raw reach, high CTR, or native UX. Mix them on the same campaign or the same page."
        actions={<ButtonLink href="/signup">Launch a campaign</ButtonLink>}
      />
      <section className="container-page grid gap-5 pb-24 lg:grid-cols-2">
        {formats.map((format) => (
          <article
            key={format.slug}
            id={format.slug}
            className="glass rounded-3xl p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {format.model}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">{format.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{format.summary}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {format.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-fuchsia-300">▹</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="mt-6 inline-block text-sm font-semibold text-fuchsia-200 hover:underline"
            >
              Run {format.name} →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
