import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            AdsOcto is a high-performance advertising network. Eight formats,
            one console — built so advertisers buy cleaner traffic and publishers
            keep more of every impression.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white">
            Platform
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white">
            Account
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/login" className="hover:text-white">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-white">
                Create account
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AdsOcto. Eight arms. Infinite reach.</p>
          <p>adsocto.com</p>
        </div>
      </div>
    </footer>
  );
}
