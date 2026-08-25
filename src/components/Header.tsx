"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

const navHrefs = [
  { key: "advertisers" as const, href: "/advertisers" },
  { key: "publishers" as const, href: "/publishers" },
  { key: "formats" as const, href: "/formats" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = navHrefs.map((item) => ({
    href: item.href,
    label: dict.nav[item.key],
  }));

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled || open
          ? "border-b border-white/10 bg-[#07040f]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} labels={dict.lang} />
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-white"
            >
              {dict.nav.login}
            </Link>
            <Link
              href="/signup"
              className="glow-btn rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              {dict.nav.getStarted}
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-4 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-4 bg-white ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#0c0618] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="rounded-xl px-3 py-3 text-muted">
              {dict.nav.login}
            </Link>
            <Link
              href="/signup"
              className="glow-btn mt-2 rounded-full px-4 py-3 text-center font-semibold"
            >
              {dict.nav.getStarted}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
