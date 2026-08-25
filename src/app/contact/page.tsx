import type { Metadata } from "next";
import { AccountForm } from "@/components/AccountForm";
import { PageHero } from "@/components/Ui";
import { getI18n } from "@/lib/i18n/get-locale";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to AdsOcto about traffic, yield, or partnership.",
};

export default async function ContactPage() {
  const { dict } = await getI18n();
  const c = dict.contact;

  return (
    <div>
      <PageHero eyebrow={c.eyebrow} title={c.title} body={c.body} />
      <section className="container-page grid gap-8 pb-24 lg:grid-cols-[1fr_0.8fr]">
        <AccountForm mode="contact" contactDict={c} />
        <div className="glass h-fit rounded-3xl p-8">
          <h2 className="font-display text-xl font-bold">{c.channels}</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              {c.email} ·{" "}
              <a className="text-fuchsia-200" href="mailto:info@adsocto.com">
                info@adsocto.com
              </a>
            </li>
            <li>{c.hours}</li>
            <li>{c.hq}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
