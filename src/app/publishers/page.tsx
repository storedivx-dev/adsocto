import type { Metadata } from "next";
import { ButtonLink, PageHero } from "@/components/Ui";
import { formats, payments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publishers",
  description:
    "Monetize sites, blogs, and social traffic with AdsOcto. High-converting formats, daily payouts, and a single tag.",
};

export default function PublishersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Publishers"
        title="Monetize every tentacle of your traffic."
        body="Drop a tag, pick formats, and let demand fill the gaps. Popunders need no layout space. Social bar and native keep UX intact. Daily payouts from $20."
        actions={
          <>
            <ButtonLink href="/signup">Start earning</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Talk to yield
            </ButtonLink>
          </>
        }
      />
      <section className="container-page grid gap-6 pb-16 md:grid-cols-3">
        {[
          {
            title: "One tag, many units",
            body: "Pass a single AdsOcto code and mix pop, native, banners, and social bar without extra engineering.",
          },
          {
            title: "Fair eCPM",
            body: "Rates follow performance. Better engagement and conversion quality raise what you keep — no hard ceiling.",
          },
          {
            title: "No website? Still in.",
            body: "Direct Click and link units work on blogs, social, and selected app traffic when you do not have a full site.",
          },
        ].map((card) => (
          <article key={card.title} className="glass rounded-3xl p-6">
            <h2 className="font-display text-xl font-bold">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
          </article>
        ))}
      </section>
      <section className="container-page pb-20">
        <h2 className="font-display text-3xl font-bold">Formats that pay</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {formats.map((format) => (
            <div key={format.slug} className="glass rounded-2xl px-5 py-4">
              <p className="font-display font-semibold">{format.name}</p>
              <p className="mt-1 text-sm text-muted">{format.summary}</p>
            </div>
          ))}
        </div>
        <div className="glass mt-10 rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold">Payouts</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Daily settlements after the $20 threshold. Choose the rail that
            matches your geo.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
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
    </div>
  );
}
