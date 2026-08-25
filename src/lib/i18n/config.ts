export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "adsocto_locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "tr";
}

export function detectLocaleFromHeaders(
  acceptLanguage: string | null,
  country: string | null,
): Locale {
  if (country?.toUpperCase() === "TR") return "tr";
  const al = (acceptLanguage || "").toLowerCase();
  if (al.includes("tr")) return "tr";
  return defaultLocale;
}
