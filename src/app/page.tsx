import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { FormatShowcase } from "@/components/FormatShowcase";
import { ButtonLink, SectionHeading } from "@/components/Ui";
import { getI18n } from "@/lib/i18n/get-locale";
import { geos, payments, targeting } from "@/lib/data";

export const metadata: Metadata = {
  title: "AdsOcto — Ad Network for Popunder, Push & Native Ads",
  description:
    "AdsOcto is a high-performance advertising network for advertisers and publishers. Buy traffic or monetize with popunder, push, in-page push, native, and more. Daily payouts from $20.",
  keywords: [
    "ad network",
    "advertising network",
    "popunder ads",
    "push notification ads",
    "native ads",
    "in-page push",
    "publisher monetization",
    "media buying",
    "CPM CPC CPA",
    "AdsOcto",
  ],
  alternates: {
    canonical: "https://adsocto.com",
  },
  openGraph: {
    title: "AdsOcto — High-performance advertising network",
    description:
      "Eight premium ad formats. Buy converting traffic or monetize inventory. Daily payouts from $20.",
    url: "https://adsocto.com",
    siteName: "AdsOcto",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AdsOcto advertising network — octopus brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsOcto — Ad Network for Popunder, Push & Native",
    description:
      "Buy traffic or monetize with eight premium formats. Daily publisher payouts from $20.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Home() {
  const { dict } = await getI18n();
  const t = dict.home;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://adsocto.com/#organization",
        name: "AdsOcto",
        url: "https://adsocto.com",
        logo: "https://adsocto.com/octopus-logo.png",
        email: "info@adsocto.com",
        description:
          "High-performance advertising network for advertisers and publishers.",
      },
      {
        "@type": "WebSite",
        "@id": "https://adsocto.com/#website",
        url: "https://adsocto.com",
        name: "AdsOcto",
        publisher: { "@id": "https://adsocto.com/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: dict.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
              {t.badge}
            </div>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              {t.h1a}
              <br />
              <span className="gradient-text">{t.h1b}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{t.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/advertisers">{t.buyTraffic}</ButtonLink>
              <ButtonLink href="/publishers" variant="ghost">
                {t.startEarning}
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-4 py-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse-soft"
            />
            <Image
              src="/hero-cutout.png"
              alt="AdsOcto octopus with holographic ad screens"
              width={1400}
              height={1000}
              priority
              unoptimized
              className="hero-octopus relative z-10 h-auto w-full object-contain animate-float"
            />
          </div>
        </div>
        <div className="border-y border-white/10 bg-black/20 py-4">
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max gap-10 pr-10 text-sm font-medium tracking-wide text-muted">
              {[...geos, ...geos].map((geo, i) => (
                <span key={`${geo}-${i}`} className="flex items-center gap-2">
                  <span className="text-fuchsia-300">●</span>
                  {geo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t.whoEyebrow}
          title={t.whoTitle}
          body={t.whoBody}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/advertisers"
            className="glass group rounded-3xl p-8 transition hover:border-fuchsia-300/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {dict.nav.advertisers}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">{t.advTitle}</h3>
            <p className="mt-3 text-muted leading-7">{t.advBody}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-fuchsia-200 group-hover:underline">
              {t.advCta}
            </span>
          </Link>
          <Link
            href="/publishers"
            className="glass group rounded-3xl p-8 transition hover:border-cyan-300/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              {dict.nav.publishers}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">{t.pubTitle}</h3>
            <p className="mt-3 text-muted leading-7">{t.pubBody}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-cyan-200 group-hover:underline">
              {t.pubCta}
            </span>
          </Link>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow={t.formatsEyebrow}
          title={t.formatsTitle}
          body={t.formatsBody}
        />
        <div className="mt-12">
          <FormatShowcase exploreLabel={dict.common.exploreFormats} />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.map((feature) => (
            <article key={feature.title} className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 py-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300">
            {t.targetingEyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {t.targetingTitle}
          </h2>
          <p className="mt-4 text-muted leading-7">{t.targetingBody}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {targeting.map((item) => (
              <li key={item} className="text-sm text-foreground/90">
                <span className="mr-2 text-cyan-300">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {t.paymentsEyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold">
            {t.paymentsTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{t.paymentsBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {payments.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={dict.faqs} />
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-14 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url(/tentacles-bg.png)",
              backgroundSize: "cover",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{t.ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/signup">{t.createAccount}</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                {t.talkToUs}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
