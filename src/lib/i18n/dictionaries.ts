import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    advertisers: string;
    publishers: string;
    formats: string;
    about: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  footer: {
    blurb: string;
    platform: string;
    account: string;
    createAccount: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  home: {
    badge: string;
    h1a: string;
    h1b: string;
    lead: string;
    buyTraffic: string;
    startEarning: string;
    stats: { value: string; label: string }[];
    whoEyebrow: string;
    whoTitle: string;
    whoBody: string;
    advTitle: string;
    advBody: string;
    advCta: string;
    pubTitle: string;
    pubBody: string;
    pubCta: string;
    formatsEyebrow: string;
    formatsTitle: string;
    formatsBody: string;
    whyEyebrow: string;
    whyTitle: string;
    targetingEyebrow: string;
    targetingTitle: string;
    targetingBody: string;
    paymentsEyebrow: string;
    paymentsTitle: string;
    paymentsBody: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitle: string;
    ctaBody: string;
    createAccount: string;
    talkToUs: string;
  };
  features: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    channels: string;
    email: string;
    hours: string;
    hq: string;
    fullName: string;
    message: string;
    iAmA: string;
    send: string;
    sending: string;
    success: string;
    roleAdv: string;
    rolePub: string;
    roleAgency: string;
  };
  common: {
    exploreFormats: string;
  };
  lang: {
    tr: string;
    en: string;
  };
};

const en: Dictionary = {
  nav: {
    advertisers: "Advertisers",
    publishers: "Publishers",
    formats: "Formats",
    about: "About",
    contact: "Contact",
    login: "Log in",
    getStarted: "Get started",
  },
  footer: {
    blurb:
      "AdsOcto is a high-performance advertising network. Eight formats, one console — built so advertisers buy cleaner traffic and publishers keep more of every impression.",
    platform: "Platform",
    account: "Account",
    createAccount: "Create account",
    privacy: "Privacy",
    terms: "Terms",
    rights: "Eight arms. Infinite reach.",
  },
  home: {
    badge: "Network live · 190+ geos",
    h1a: "Eight arms.",
    h1b: "Infinite reach.",
    lead: "AdsOcto is a colorful, high-performance ad network for media buyers and publishers. Popunder, push, native, interstitials — one octopus, every channel.",
    buyTraffic: "Buy traffic",
    startEarning: "Start earning",
    stats: [
      { value: "8", label: "Premium ad formats" },
      { value: "190+", label: "Geos live" },
      { value: "20+", label: "Targeting options" },
      { value: "24/7", label: "Partner care" },
    ],
    whoEyebrow: "Who it's for",
    whoTitle: "One network. Two growth engines.",
    whoBody:
      "Advertisers buy converting traffic. Publishers monetize every tentacle of inventory. Same console, same quality bar.",
    advTitle: "Buy top traffic",
    advBody:
      "20+ targeting switches, Smart CPM, and antifraud in front of every click. Launch pop, push, native, and more in minutes.",
    advCta: "Media buying →",
    pubTitle: "Start earning",
    pubBody:
      "Highest-intent formats, one tag, daily payouts. Sites, blogs, and social traffic all feed the same octopus.",
    pubCta: "Monetization →",
    formatsEyebrow: "Formats",
    formatsTitle: "Top-performing ad units",
    formatsBody:
      "Popunder, push, native, interstitials and more — eight arms under one AdsOcto mark.",
    whyEyebrow: "Why AdsOcto",
    whyTitle: "Performance tools with partner care",
    targetingEyebrow: "Targeting",
    targetingTitle: "Reach the audience that actually converts",
    targetingBody:
      "Slice traffic the way performance teams work: geo, device, carrier, quality score, and zone lists — then let Smart CPM finish the job.",
    paymentsEyebrow: "Payments",
    paymentsTitle: "$20 minimum to launch",
    paymentsBody:
      "Fund campaigns or cash out publisher earnings with the rails this industry actually uses.",
    faqEyebrow: "FAQ",
    faqTitle: "Straight answers",
    ctaTitle: "Ready to grow with the octopus?",
    ctaBody:
      "Sign up, pick a side, and launch. Campaigns and placements take minutes — partner care is always in the tank with you.",
    createAccount: "Create account",
    talkToUs: "Talk to us",
  },
  features: [
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
  ],
  faqs: [
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
  ],
  contact: {
    eyebrow: "Contact",
    title: "Drop a line. We write back.",
    body: "Campaign reviews, publisher onboarding, or a custom deal — send a note and a human answers.",
    channels: "Direct channels",
    email: "Email",
    hours: "Hours · 24/7 partner care",
    hq: "HQ · Global / remote-first",
    fullName: "Full name",
    message: "Message",
    iAmA: "I am a",
    send: "Send message",
    sending: "Sending…",
    success: "Message received at info@adsocto.com. We will write back soon.",
    roleAdv: "Advertiser / media buyer",
    rolePub: "Publisher",
    roleAgency: "Agency",
  },
  common: {
    exploreFormats: "Explore all formats",
  },
  lang: {
    tr: "Türkçe",
    en: "English",
  },
};

const tr: Dictionary = {
  nav: {
    advertisers: "Reklamverenler",
    publishers: "Yayıncılar",
    formats: "Formatlar",
    about: "Hakkımızda",
    contact: "İletişim",
    login: "Giriş",
    getStarted: "Başla",
  },
  footer: {
    blurb:
      "AdsOcto yüksek performanslı bir reklam ağıdır. Sekiz format, tek panel — reklamverenler daha temiz trafik alsın, yayıncılar her gösterimden daha fazla kazansın diye.",
    platform: "Platform",
    account: "Hesap",
    createAccount: "Hesap oluştur",
    privacy: "Gizlilik",
    terms: "Şartlar",
    rights: "Sekiz kol. Sonsuz erişim.",
  },
  home: {
    badge: "Ağ aktif · 190+ ülke",
    h1a: "Sekiz kol.",
    h1b: "Sonsuz erişim.",
    lead: "AdsOcto; medya alıcıları ve yayıncılar için renkli, yüksek performanslı bir reklam ağıdır. Popunder, push, native, interstitial — bir ahtapot, her kanal.",
    buyTraffic: "Trafik satın al",
    startEarning: "Kazanç başlat",
    stats: [
      { value: "8", label: "Premium reklam formatı" },
      { value: "190+", label: "Aktif ülke" },
      { value: "20+", label: "Hedefleme seçeneği" },
      { value: "24/7", label: "Partner desteği" },
    ],
    whoEyebrow: "Kimler için",
    whoTitle: "Tek ağ. İki büyüme motoru.",
    whoBody:
      "Reklamverenler dönüşüm getiren trafik alır. Yayıncılar envanterin her kolunu monetize eder. Aynı panel, aynı kalite standardı.",
    advTitle: "En iyi trafiği al",
    advBody:
      "20+ hedefleme, Smart CPM ve her tıklamanın önünde antifraud. Pop, push, native ve daha fazlasını dakikalar içinde başlat.",
    advCta: "Medya satın alma →",
    pubTitle: "Kazanç başlat",
    pubBody:
      "Yüksek niyetli formatlar, tek etiket, günlük ödemeler. Site, blog ve sosyal trafik aynı ahtapota akar.",
    pubCta: "Monetizasyon →",
    formatsEyebrow: "Formatlar",
    formatsTitle: "Yüksek performanslı reklam birimleri",
    formatsBody:
      "Popunder, push, native, interstitial ve daha fazlası — tek AdsOcto markası altında sekiz kol.",
    whyEyebrow: "Neden AdsOcto",
    whyTitle: "Performans araçları ve partner desteği",
    targetingEyebrow: "Hedefleme",
    targetingTitle: "Gerçekten dönüşen kitleye ulaş",
    targetingBody:
      "Performans ekiplerinin çalıştığı gibi dilimle: ülke, cihaz, operatör, kalite skoru ve zone listeleri — Smart CPM gerisini halleder.",
    paymentsEyebrow: "Ödemeler",
    paymentsTitle: "Başlamak için minimum $20",
    paymentsBody:
      "Kampanya bakiyesi veya yayıncı ödemeleri — sektörün gerçekten kullandığı kanallarla.",
    faqEyebrow: "SSS",
    faqTitle: "Net cevaplar",
    ctaTitle: "Ahtapotla büyümeye hazır mısın?",
    ctaBody:
      "Kayıt ol, tarafını seç ve başla. Kampanyalar dakikalar sürer — partner desteği her zaman tankta seninle.",
    createAccount: "Hesap oluştur",
    talkToUs: "Bize yaz",
  },
  features: [
    {
      title: "Smart CPM",
      body: "Teklifler rekabet ve dönüşüm kalitesine göre esner; soğuk trafiğe fazla ödemeyi bırakırsın.",
    },
    {
      title: "Dahili antifraud",
      body: "Bot, proxy ve click-farm filtreleri her gösterimin önünde; harcamadan önce temizlenir.",
    },
    {
      title: "Self-serve panel",
      body: "Kampanya aç, etiket yapıştır, canlı istatistik oku — yönetici beklemeden.",
    },
    {
      title: "Partner desteği",
      body: "Pop, push ve native bilen gerçek insanlar — kaybolan ticket kuyruğu değil.",
    },
    {
      title: "Tracking macro’ları",
      body: "Click ID, source ve creative verisini tracker’ına geçir. Güvendiğin rakamlara göre optimize et.",
    },
    {
      title: "Global ödemeler",
      body: "Havale, kart, Paxum ve USDT. Yayıncılar $20 minimum ile günlük ödeme alır.",
    },
  ],
  faqs: [
    {
      q: "AdsOcto ne tür trafik sağlar?",
      a: "190+ ülkeden doğrudan yayıncı trafiği: masaüstü, mobil, web ve sosyal. Reklamverenler sekiz formatta CPM, CPC veya CPA satın alabilir; RTB envanteri de vardır.",
    },
    {
      q: "Minimum yatırım nedir?",
      a: "Minimum yatırım ve çekim $20’dir. İlk test için hedefleme ve kreatiflerin öğrenmesi adına biraz daha fazlasını öneririz.",
    },
    {
      q: "Yayıncılar nasıl ödeme alır?",
      a: "$20 minimumu geçince günlük ödemeler. Oranlar eCPM’e göre gider; daha iyi etkileşim ve dönüşüm kazancı yükseltir.",
    },
    {
      q: "Monetize etmek için site şart mı?",
      a: "Site klasik yoldur; Direct Click ve SmartLink tarzı birimler blog, sosyal biyografi ve seçili uygulama trafiğinde de çalışır.",
    },
    {
      q: "Hangi dikeyler kabul edilir?",
      a: "Mainstream ve çoğu performans dikeyi açıktır. Kısıtlı teklifler uyum incelemesinden geçer. Malware, zorla yönlendirme ve marka-güvensiz sayfalar engellenir.",
    },
  ],
  contact: {
    eyebrow: "İletişim",
    title: "Yazın. Dönüyoruz.",
    body: "Kampanya incelemesi, yayıncı onboarding veya özel anlaşma — not bırakın, insan cevaplasın.",
    channels: "Direkt kanallar",
    email: "E-posta",
    hours: "Saatler · 7/24 partner desteği",
    hq: "Merkez · Global / remote-first",
    fullName: "Ad soyad",
    message: "Mesaj",
    iAmA: "Ben bir",
    send: "Mesaj gönder",
    sending: "Gönderiliyor…",
    success: "Mesaj info@adsocto.com adresine ulaştı. En kısa sürede döneceğiz.",
    roleAdv: "Reklamveren / medya alıcısı",
    rolePub: "Yayıncı",
    roleAgency: "Ajans",
  },
  common: {
    exploreFormats: "Tüm formatları incele",
  },
  lang: {
    tr: "Türkçe",
    en: "English",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
