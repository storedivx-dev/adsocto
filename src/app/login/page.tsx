import type { Metadata } from "next";
import Link from "next/link";
import { AccountForm } from "@/components/AccountForm";
import { PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <div>
      <PageHero
        eyebrow="Members"
        title="Welcome back."
        body="The self-serve console will live here. For now this is the front-end gate — same look the live app will inherit."
      />
      <section className="container-page mx-auto max-w-lg pb-24">
        <AccountForm mode="login" />
        <p className="mt-6 text-center text-sm text-muted">
          New to AdsOcto?{" "}
          <Link href="/signup" className="text-fuchsia-200 hover:underline">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}
