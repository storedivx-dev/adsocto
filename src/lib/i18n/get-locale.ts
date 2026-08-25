import { cookies, headers } from "next/headers";
import {
  detectLocaleFromHeaders,
  isLocale,
  localeCookie,
  type Locale,
} from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

export async function getRequestLocale(): Promise<Locale> {
  const jar = await cookies();
  const fromCookie = jar.get(localeCookie)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const h = await headers();
  const country =
    h.get("cf-ipcountry") ||
    h.get("x-vercel-ip-country") ||
    h.get("x-country-code");
  return detectLocaleFromHeaders(h.get("accept-language"), country);
}

export async function getI18n(): Promise<{ locale: Locale; dict: Dictionary }> {
  const locale = await getRequestLocale();
  return { locale, dict: getDictionary(locale) };
}
