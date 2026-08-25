import type { Metadata } from "next";
import { PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        body="AdsOcto processes account, campaign, and traffic data to run the network. This page is a working summary until counsel finalizes the production policy."
      />
      <article className="container-page max-w-3xl space-y-4 pb-24 text-sm leading-7 text-muted">
        <p>
          We collect the information you submit in forms (name, email, role),
          technical logs needed to serve ads, and payment references required to
          fund campaigns or pay publishers.
        </p>
        <p>
          We do not sell personal data. We share data with processors that host
          the site, filter fraud, and move money — only as needed to operate
          AdsOcto.
        </p>
        <p>
          You can request access or deletion at{" "}
          <a className="text-fuchsia-200" href="mailto:support@adsocto.com">
            support@adsocto.com
          </a>
          .
        </p>
      </article>
    </div>
  );
}
