import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getI18n } from "@/lib/i18n/get-locale";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adsocto.com"),
  title: {
    default: "AdsOcto — Ad Network for Popunder, Push & Native Ads",
    template: "%s · AdsOcto",
  },
  description:
    "AdsOcto is a high-performance advertising network for advertisers and publishers. Popunder, push, native, and more — daily payouts from $20.",
  keywords: [
    "ad network",
    "advertising network",
    "popunder",
    "push notifications",
    "native ads",
    "publishers",
    "media buying",
    "AdsOcto",
  ],
  authors: [{ name: "AdsOcto", url: "https://adsocto.com" }],
  creator: "AdsOcto",
  publisher: "AdsOcto",
  alternates: {
    canonical: "https://adsocto.com",
  },
  openGraph: {
    title: "AdsOcto — High-performance advertising network",
    description:
      "Buy converting traffic or monetize your inventory with eight premium ad formats.",
    url: "https://adsocto.com",
    siteName: "AdsOcto",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AdsOcto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsOcto — Advertising Network",
    description: "Popunder, push, native and more. Daily payouts from $20.",
    images: ["/opengraph-image.png"],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, dict } = await getI18n();

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Background />
        <Header locale={locale} dict={dict} />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
