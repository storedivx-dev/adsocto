"use client";

import { FormEvent, useState } from "react";

type Mode = "contact" | "login" | "signup";

export function AccountForm({ mode }: { mode: Mode }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    const message =
      mode === "contact"
        ? "Message received. An AdsOcto partner will write back within one business day."
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
          <span className="mb-1.5 block text-muted">Full name</span>
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
          <span className="mb-1.5 block text-muted">I am a</span>
          <select
            name="role"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
            defaultValue="advertiser"
          >
            <option value="advertiser">Advertiser / media buyer</option>
            <option value="publisher">Publisher</option>
            <option value="agency">Agency</option>
          </select>
        </label>
      ) : null}
      {mode === "contact" ? (
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-fuchsia-400/40 focus:ring-2"
          />
        </label>
      ) : null}
      <button
        type="submit"
        className="glow-btn w-full rounded-full py-3 text-sm font-semibold text-white"
      >
        {mode === "contact"
          ? "Send message"
          : mode === "login"
            ? "Log in"
            : "Create account"}
      </button>
    </form>
  );
}
