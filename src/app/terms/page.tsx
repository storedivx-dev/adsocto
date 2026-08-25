import type { Metadata } from "next";
import { PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        body="By creating an AdsOcto account you agree to run compliant campaigns, send genuine inventory, and stay inside our quality and vertical rules."
      />
      <article className="container-page max-w-3xl space-y-4 pb-24 text-sm leading-7 text-muted">
        <p>
          Advertisers must not run malware, forced downloads, or cloaked landing
          pages. Publishers must not inflate traffic with bots or incentivized
          fake clicks.
        </p>
        <p>
          AdsOcto may pause accounts, withhold unpaid balances tied to invalid
          activity, and refuse verticals that fail compliance review.
        </p>
        <p>
          These terms will be replaced by the executed legal agreement before
          public self-serve launch on adsocto.com.
        </p>
      </article>
    </div>
  );
}
