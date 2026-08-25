import type { Metadata } from "next";
import { ButtonLink, PageHero, SectionHeading } from "@/components/Ui";
import { targeting } from "@/lib/data";

export const metadata: Metadata = {
  title: "Advertisers",
  description:
    "Buy converting CPM, CPC, and CPA traffic from AdsOcto. Smart bidding, 20+ targeting options, and eight premium formats.",
};

const steps = [
  {
    n: "01",
    title: "Open an account",
    body: "Verify email, pick advertiser, and fund from $20.",
  },
  {
    n: "02",
    title: "Build a campaign",
    body: "Choose format, geo, device, and bid model. Paste your tracker.",
  },
  {
    n: "03",
    title: "Optimize live",
    body: "Whitelist winning zones, cut losers, and let Smart CPM hunt.",
  },
];

export default function AdvertisersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Advertisers"
        title="Reach high-intent users at scale."
        body="AdsOcto is built for media buyers, affiliates, and brands that need pop, push, native, and more — with antifraud in front of every impression."
        actions={
          <>
            <ButtonLink href="/signup">Buy top traffic</ButtonLink>
            <ButtonLink href="/formats" variant="ghost">
              See formats
            </ButtonLink>
          </>
        }
      />
      <section className="container-page grid gap-6 pb-16 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.n} className="glass rounded-3xl p-6">
            <p className="font-display text-sm text-fuchsia-300">{step.n}</p>
            <h2 className="mt-2 font-display text-xl font-bold">{step.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
          </article>
        ))}
      </section>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Buying tools"
          title="Control spend like a performance desk"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Pricing models",
              body: "CPM for reach, CPC for push, CPA Goal when you only want conversions. Daily and total caps on every campaign.",
            },
            {
              title: "Traffic estimator",
              body: "See volume before you launch. Adjust bid and targeting and watch estimated impressions update live.",
            },
            {
              title: "Antifraud + quality",
              body: "Three-layer filtering for bots, datacenters, and invalid clicks. Buy human traffic, not noise.",
            },
            {
              title: "Macros & postbacks",
              body: "16+ tracking macros into Voluum, Binom, Keitaro, or your own stack. Optimize on your numbers.",
            },
          ].map((card) => (
            <article key={card.title} className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
        <ul className="mt-10 grid gap-2 sm:grid-cols-2">
          {targeting.map((item) => (
            <li key={item} className="glass rounded-2xl px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
