"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/data";

export function Header() {
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled || open
          ? "border-b border-white/10 bg-[#07040f]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
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
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="px-3 py-2 text-sm font-medium text-muted hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="glow-btn rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get started
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
            <span className={`h-0.5 w-4 bg-white ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-4 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#0c0618] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="rounded-xl px-3 py-3 text-muted">
              Log in
            </Link>
            <Link
              href="/signup"
              className="glow-btn mt-2 rounded-full px-4 py-3 text-center font-semibold"
            >
              Get started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
