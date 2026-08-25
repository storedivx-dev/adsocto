import Link from "next/link";
import { Logo } from "@/components/Logo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const navHrefs = [
  { key: "advertisers" as const, href: "/advertisers" },
  { key: "publishers" as const, href: "/publishers" },
  { key: "formats" as const, href: "/formats" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
];

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {dict.footer.blurb}
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white">
            {dict.footer.platform}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navHrefs.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white">
            {dict.footer.account}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/login" className="hover:text-white">
                {dict.nav.login}
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-white">
                {dict.footer.createAccount}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                {dict.footer.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AdsOcto. {dict.footer.rights}
          </p>
          <p>adsocto.com</p>
        </div>
      </div>
    </footer>
  );
}
