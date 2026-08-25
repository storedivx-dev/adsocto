import type { Metadata } from "next";
import { AccountForm } from "@/components/AccountForm";
import { PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to AdsOcto about traffic, yield, or partnership.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Drop a line. We write back."
        body="Campaign reviews, publisher onboarding, or a custom deal — send a note and a human answers."
      />
      <section className="container-page grid gap-8 pb-24 lg:grid-cols-[1fr_0.8fr]">
        <AccountForm mode="contact" />
        <div className="glass h-fit rounded-3xl p-8">
          <h2 className="font-display text-xl font-bold">Direct channels</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              Email ·{" "}
              <a className="text-fuchsia-200" href="mailto:info@adsocto.com">
                info@adsocto.com
              </a>
            </li>
            <li>Hours · 24/7 partner care</li>
            <li>HQ · Global / remote-first</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
