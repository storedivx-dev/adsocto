export const navLinks = [
  { href: "/advertisers", label: "Advertisers" },
  { href: "/publishers", label: "Publishers" },
  { href: "/formats", label: "Formats" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "8", label: "Premium ad formats" },
  { value: "190+", label: "Geos live" },
  { value: "20+", label: "Targeting options" },
  { value: "24/7", label: "Partner care" },
];

export const formats = [
  {
    slug: "popunder",
    name: "Popunder",
    audience: "Advertisers & publishers",
    model: "CPM / CPA",
    summary:
      "A full-page offer opens in a new tab after a click anywhere on the site. Maximum reach, no creative required.",
    points: [
      "Ideal for affiliates and high-intent funnels",
      "No on-page real estate needed",
      "Pairs with any other ad unit",
    ],
  },
  {
    slug: "push",
    name: "Push notifications",
    audience: "Advertisers & publishers",
    model: "CPC",
    summary:
      "Instant messages delivered to opted-in browsers and devices. High CTR across almost every vertical.",
    points: [
      "Pay only for delivered clicks",
      "Subscription-age targeting",
      "Excellent for retargeting and offers",
    ],
  },
  {
    slug: "in-page-push",
    name: "In-page push",
    audience: "Advertisers & publishers",
    model: "CPM / CPC / CPA",
    summary:
      "Push-style creatives that appear inside the browser while users are actively on the page. No opt-in required.",
    points: [
      "Reaches iOS and macOS traffic",
      "High viewability, native look",
      "Works on every major browser",
    ],
  },
  {
    slug: "direct-click",
    name: "Direct click",
    audience: "Advertisers & publishers",
    model: "CPC",
    summary:
      "Users click an in-content link and land on your offer. Strong intent, no creative production.",
    points: [
      "Placed in high-engagement zones",
      "Clean tracking and macros",
      "Great for social and blog traffic",
    ],
  },
  {
    slug: "native",
    name: "Native ads",
    audience: "Advertisers & publishers",
    model: "CPM / CPC",
    summary:
      "Editorial-looking units that blend into the page. Higher attention, lower bounce.",
    points: [
      "Match site colors and fonts",
      "Multiple sizes and layouts",
      "Strong for content and e-com",
    ],
  },
  {
    slug: "interstitial",
    name: "Interstitials",
    audience: "Advertisers & publishers",
    model: "CPM / CPA",
    summary:
      "Full-screen ads with maximum visual impact. Built for mobile sessions and high CTR.",
    points: [
      "Template creatives by vertical",
      "Timed and click-to-close rules",
      "Desktop and mobile ready",
    ],
  },
  {
    slug: "social-bar",
    name: "Social bar",
    audience: "Publishers",
    model: "CPM / CPC / CPA",
    summary:
      "A compact, UX-friendly bar with in-page push, interstitials, and high-CTR visuals in one code.",
    points: [
      "Extra yield without hurting UX",
      "Especially strong on mobile",
      "One tag, multiple formats",
    ],
  },
  {
    slug: "banners",
    name: "Display banners",
    audience: "Advertisers & publishers",
    model: "CPM",
    summary:
      "Classic IAB sizes for stable, always-on inventory across desktop and mobile sites.",
    points: [
      "160x600, 300x250, 728x90 and more",
      "Brand-safe placements",
      "Easy to combine with other units",
    ],
  },
];

export const targeting = [
  "GEO (country, region, city)",
  "Device, OS, and browser",
  "Connection type & carrier",
  "IP ranges and ISP",
  "Dayparting and day of week",
  "Traffic quality score",
  "Zone white / blacklists",
  "Browser language",
  "Subscription age (push)",
  "Custom bid by placement",
];

export const features = [
  {
    title: "Smart CPM",
    body: "Bids flex with competition and conversion quality so you stop overpaying for cold traffic.",
  },
  {
    title: "In-house antifraud",
    body: "Bot, proxy, and click-farm filters sit in front of every impression before you spend a cent.",
  },
  {
    title: "Self-serve console",
    body: "Launch campaigns, paste tags, and read live stats without waiting on a manager.",
  },
  {
    title: "Partner care",
    body: "Real humans who know pop, push, and native — not a ticket queue that ghosts you.",
  },
  {
    title: "Tracking macros",
    body: "Pass click IDs, sources, and creative data into any tracker. Optimize on the numbers you trust.",
  },
  {
    title: "Global payouts",
    body: "Wire, cards, Paxum, and USDT. Publishers get daily settlements with a $20 minimum.",
  },
];

export const faqs = [
  {
    q: "What traffic does AdsOcto provide?",
    a: "Direct publisher traffic from 190+ geos: desktop, mobile, web, and social. Advertisers can buy CPM, CPC, or CPA across eight formats, including RTB-ready inventory.",
  },
  {
    q: "What is the minimum deposit?",
    a: "Minimum deposit and withdrawal is $20. We recommend a bit more for a first campaign test so targeting and creatives have room to learn.",
  },
  {
    q: "How do publishers get paid?",
    a: "Daily payouts once you pass the $20 minimum. Rates follow eCPM, so better engagement and conversion quality raise what you earn.",
  },
  {
    q: "Do I need a website to monetize?",
    a: "A site is the classic path, but Direct Click and SmartLink-style units also work on blogs, social bios, and selected app traffic.",
  },
  {
    q: "Which verticals are accepted?",
    a: "Mainstream and most performance verticals are welcome. Restricted offers go through compliance review. Malware, forced redirects, and brand-unsafe landing pages are blocked.",
  },
];

export const payments = [
  "Visa / Mastercard",
  "Wire transfer",
  "Paxum",
  "USDT (TRC-20)",
  "Capitalist",
  "PayPal",
];

export const geos = [
  "United States",
  "United Kingdom",
  "Germany",
  "India",
  "Brazil",
  "Indonesia",
  "Turkey",
  "France",
  "Mexico",
  "Japan",
  "Canada",
  "Spain",
  "Italy",
  "Vietnam",
  "Poland",
  "UAE",
];
