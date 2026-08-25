"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Mode = "contact" | "login" | "signup";

export function AccountForm({
  mode,
  contactDict,
}: {
  mode: Mode;
  contactDict?: Dictionary["contact"];
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (mode !== "contact") {
      setSent(true);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setPending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          role: formData.get("role"),
          message: formData.get("message"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Failed to send message.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setPending(false);
    }
  }

  const c = contactDict;

  if (sent) {
    const message =
      mode === "contact"
        ? c?.success ||
          "Message received at info@adsocto.com. We will write back soon."
        : mode === "login"
          ? "This is the marketing front-end — the live dashboard login will connect here next."
          : "Account request captured. We will open self-serve access as the platform goes live.";
    return (
      <div className="glass rounded-3xl p-8 text-center">
        <p className="font-display text-2xl font-bold">You are in the tank.</p>
        <p className="mt-3 text-sm leading-6 text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8">
      {mode !== "login" ? (
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">
            {c?.fullName || "Full name"}
          </span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
          />
        </label>
      ) : null}
      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Email</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
        />
      </label>
      {mode !== "contact" ? (
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Password</span>
          <input
            required
            type="password"
            name="password"
            minLength={8}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
          />
        </label>
      ) : null}
      {mode !== "login" ? (
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">{c?.iAmA || "I am a"}</span>
          <select
            name="role"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
            defaultValue="advertiser"
          >
            <option value="advertiser">
              {c?.roleAdv || "Advertiser / media buyer"}
            </option>
            <option value="publisher">{c?.rolePub || "Publisher"}</option>
            <option value="agency">{c?.roleAgency || "Agency"}</option>
          </select>
        </label>
      ) : null}
      {mode === "contact" ? (
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">
            {c?.message || "Message"}
          </span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
          />
        </label>
      ) : null}
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="glow-btn w-full rounded-full py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {mode === "contact"
          ? pending
            ? c?.sending || "Sending…"
            : c?.send || "Send message"
          : mode === "login"
            ? "Log in"
            : "Create account"}
      </button>
    </form>
  );
}
