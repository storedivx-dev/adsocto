import type { Metadata } from "next";
import Link from "next/link";
import { AccountForm } from "@/components/AccountForm";
import { PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignupPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get started"
        title="Climb into the tank."
        body="Advertiser or publisher — one form. We will wire this to the live self-serve platform as AdsOcto goes production."
      />
      <section className="container-page mx-auto max-w-lg pb-24">
        <AccountForm mode="signup" />
        <p className="mt-6 text-center text-sm text-muted">
          Already have access?{" "}
          <Link href="/login" className="text-fuchsia-200 hover:underline">
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
}
