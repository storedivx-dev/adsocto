import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adsocto.com"),
  title: {
    default: "AdsOcto — High-performance advertising network",
    template: "%s · AdsOcto",
  },
  description:
    "AdsOcto is a modern advertising network for advertisers and publishers. Popunder, push, native, and more — eight arms, infinite reach.",
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
  openGraph: {
    title: "AdsOcto — High-performance advertising network",
    description:
      "Buy converting traffic or monetize your inventory with eight premium ad formats.",
    url: "https://adsocto.com",
    siteName: "AdsOcto",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
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
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
