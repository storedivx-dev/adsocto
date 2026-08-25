import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  detectLocaleFromHeaders,
  isLocale,
  localeCookie,
  type Locale,
} from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(localeCookie)?.value;
  if (isLocale(existing)) {
    return NextResponse.next();
  }

  const country =
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code");

  const locale: Locale = detectLocaleFromHeaders(
    request.headers.get("accept-language"),
    country,
  );

  const response = NextResponse.next();
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api|.*\\..*).*)"],
};
