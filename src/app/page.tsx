import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { FormatShowcase } from "@/components/FormatShowcase";
import { ButtonLink, SectionHeading } from "@/components/Ui";
import { features, geos, payments, stats, targeting } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
              Network live · 190+ geos
            </div>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              Eight arms.
              <br />
              <span className="gradient-text">Infinite reach.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              AdsOcto is a colorful, high-performance ad network for media
              buyers and publishers. Popunder, push, native, interstitials — one
              octopus, every channel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/advertisers">Buy traffic</ButtonLink>
              <ButtonLink href="/publishers" variant="ghost">
                Start earning
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
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
            <div className="absolute inset-[12%] rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse-soft" />
            <div className="animate-float relative w-full">
              <Image
                src="/hero-octopus.png"
                alt="Purple AdsOcto octopus wrapping holographic ad cards"
                width={1280}
                height={720}
                priority
                className="hero-octopus relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_60px_rgba(168,85,247,0.35)]"
              />
            </div>
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
          eyebrow="Who it's for"
          title="One network. Two growth engines."
          body="Advertisers buy converting traffic. Publishers monetize every tentacle of inventory. Same console, same quality bar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/advertisers"
            className="glass group rounded-3xl p-8 transition hover:border-fuchsia-300/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Advertisers
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">
              Buy top traffic
            </h3>
            <p className="mt-3 text-muted leading-7">
              20+ targeting switches, Smart CPM, and antifraud in front of every
              click. Launch pop, push, native, and more in minutes.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-fuchsia-200 group-hover:underline">
              Media buying →
            </span>
          </Link>
          <Link
            href="/publishers"
            className="glass group rounded-3xl p-8 transition hover:border-cyan-300/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Publishers
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">
              Start earning
            </h3>
            <p className="mt-3 text-muted leading-7">
              Highest-intent formats, one tag, daily payouts. Sites, blogs, and
              social traffic all feed the same octopus.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-cyan-200 group-hover:underline">
              Monetization →
            </span>
          </Link>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="Formats"
          title="Top-performing ad units"
          body="A mix of ExoClick-scale programmatic, Adsterra-style high-converting formats, and RollerAds push energy — all under the AdsOcto mark."
        />
        <div className="mt-12">
          <FormatShowcase />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Why AdsOcto"
          title="Performance tools with partner care"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
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
            Targeting
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Reach the audience that actually converts
          </h2>
          <p className="mt-4 text-muted leading-7">
            Slice traffic the way performance teams work: geo, device, carrier,
            quality score, and zone lists — then let Smart CPM finish the job.
          </p>
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
            Payments
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold">
            $20 minimum to launch
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            Fund campaigns or cash out publisher earnings with the rails this
            industry actually uses.
          </p>
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
        <SectionHeading eyebrow="FAQ" title="Straight answers" />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq />
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-14 text-center">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(/tentacles-bg.png)", backgroundSize: "cover" }} />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Ready to grow with the octopus?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Sign up, pick a side, and launch. Campaigns and placements take
              minutes — partner care is always in the tank with you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/signup">Create account</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
