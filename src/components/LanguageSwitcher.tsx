"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeCookie, type Locale } from "@/lib/i18n/config";

function Porthole({
  locale,
  active,
  label,
  onSelect,
  flag,
}: {
  locale: Locale;
  active: boolean;
  label: string;
  onSelect: (locale: Locale) => void;
  flag: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      title={label}
      onClick={() => onSelect(locale)}
      className={`porthole group relative h-9 w-9 shrink-0 rounded-full transition ${
        active ? "porthole-active scale-105" : "opacity-80 hover:opacity-100 hover:scale-105"
      }`}
    >
      <span className="porthole-rim" aria-hidden />
      <span className="porthole-glass" aria-hidden />
      <span className="porthole-flag">{flag}</span>
      <span className="porthole-shine" aria-hidden />
      <span className="porthole-water" aria-hidden />
    </button>
  );
}

function FlagTR() {
  return (
    <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden>
      <circle cx="18" cy="18" r="18" fill="#E30A17" />
      <circle cx="15.2" cy="18" r="7.2" fill="#fff" />
      <circle cx="16.8" cy="18" r="5.7" fill="#E30A17" />
      <path
        fill="#fff"
        d="M21.8 18l5.2-1.7-3.2 4.4V15.3l3.2 4.4z"
        transform="translate(-1.2 0) scale(0.92)"
      />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden>
      <circle cx="18" cy="18" r="18" fill="#012169" />
      <path stroke="#fff" strokeWidth="3.5" d="M0 18h36M18 0v36" />
      <path stroke="#C8102E" strokeWidth="2" d="M0 18h36M18 0v36" />
      <path
        stroke="#fff"
        strokeWidth="2.2"
        d="M3 3l30 30M33 3L3 33"
      />
      <path
        stroke="#C8102E"
        strokeWidth="1.1"
        d="M3 3l30 30M33 3L3 33"
      />
    </svg>
  );
}

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { tr: string; en: string };
}) {
  const router = useRouter();
  const pathname = usePathname();

  function select(next: Locale) {
    document.cookie = `${localeCookie}=${next};path=/;max-age=31536000;samesite=lax`;
    router.refresh();
    // keep user on same path; soft bump hash-less
    if (pathname) router.replace(pathname);
  }

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language">
      <Porthole
        locale="tr"
        active={locale === "tr"}
        label={labels.tr}
        onSelect={select}
        flag={<FlagTR />}
      />
      <Porthole
        locale="en"
        active={locale === "en"}
        label={labels.en}
        onSelect={select}
        flag={<FlagEN />}
      />
    </div>
  );
}
