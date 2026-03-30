import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
    template: "%s | Samaan Suites Mogadishu",
  },

  description:
    "Samaan Suites is a modern luxury hotel in Mogadishu located near the airport. Enjoy comfortable rooms, premium service, and the best stay in Somalia.",

  keywords: [
    "Samaan Suites",
    "Samaan Suites Mogadishu",
    "Samaan hotel",
    "Samaan hotel Mogadishu",
    "hotel Mogadishu",
    "hotels in Mogadishu",
    "luxury hotel Mogadishu",
    "best hotel in Mogadishu",
    "best hotel Mogadishu Somalia",
    "top hotel Mogadishu",
    "new hotel Mogadishu",
    "new hotel Mogadishu 2026",
    "Mogadishu hotel opening soon",
    "serviced apartments Mogadishu",
    "serviced hotel Somalia",
    "serviced suites Mogadishu",
    "hotel near Mogadishu airport",
    "Mogadishu airport hotel",
    "Aden Abdulle airport hotel",
    "hotel near Mogadishu international airport",
    "long stay hotel Mogadishu",
    "extended stay Mogadishu",
    "long-term accommodation Mogadishu",
    "furnished apartments Mogadishu",
    "business hotel Mogadishu",
    "corporate hotel Mogadishu",
    "business hotel Somalia",
    "NGO accommodation Mogadishu",
    "NGO hotel Somalia",
    "NGO housing Mogadishu",
    "UN accommodation Mogadishu",
    "diplomat hotel Mogadishu",
    "conference venue Mogadishu",
    "conference hall Mogadishu",
    "event venue Mogadishu",
    "auditorium Mogadishu",
    "meeting rooms Mogadishu",
    "workshop venue Mogadishu",
    "corporate event Mogadishu",
    "luxury suites Somalia",
    "hotel Somalia",
    "Somalia hotel",
    "accommodation Mogadishu",
    "Mogadishu accommodation",
    "where to stay Mogadishu",
    "where to stay in Mogadishu Somalia",
    "safe hotel Mogadishu",
    "secure hotel Mogadishu",
    "hotel with security Mogadishu",
    "hotel with gym Mogadishu",
    "hotel with restaurant Mogadishu",
    "hotel with masjid Mogadishu",
    "hotel with prayer room Mogadishu",
    "one bedroom suite Mogadishu",
    "two bedroom suite Mogadishu",
    "one bedroom apartment Mogadishu",
    "two bedroom apartment Mogadishu",
    "hotel rooms Mogadishu",
    "Mogadishu hotels 2026",
    "Banaadir hotel",
    "hotel Banaadir Somalia",
    "short stay hotel Mogadishu",
    "family hotel Mogadishu",
    "hotel with parking Mogadishu",
    "hotel with elevator Mogadishu",
    "hotel with laundry Mogadishu",
    "5 star hotel Mogadishu",
    "four star hotel Mogadishu",
    "premium hotel Mogadishu",
    "hotel booking Mogadishu",
    "Mogadishu travel accommodation",
    "Somalia travel hotel",
    "airport hotel Somalia",
    "affordable hotel Mogadishu",
    "comfortable hotel Mogadishu",
  ],

  authors: [{ name: "Samaan Suites" }],
  creator: "Samaan Suites",
  publisher: "Samaan Suites",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "so": SITE_URL,
      "ar": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Samaan Suites",
    title:
      "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
    description:
      "Samaan Suites is a modern luxury hotel in Mogadishu located near the airport. 60 suites across 10 floors, conference venue, restaurant, gym, masjid & 24/7 CCTV security. The best hotel for business travelers, NGOs & long-stay guests in Mogadishu.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area, Somalia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
    description:
      "60 luxury serviced suites near Mogadishu Airport. Conference venue, restaurant, gym, masjid & 24/7 security. The best new hotel in Mogadishu, Somalia.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Hotel",

  other: {
    "revisit-after": "3 days",
    "rating": "general",
    "distribution": "global",
    "content-language": "en",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

function SiteNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="Samaan Suites logo" width={40} height={40} className="h-10 w-10 rounded" />
          <span className="text-lg font-bold tracking-[0.15em] text-foreground">SAMAAN SUITES</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-xs font-medium tracking-wide text-foreground/60 transition-colors hover:bg-gold/5 hover:text-gold sm:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-navy-light/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-[0.15em] text-foreground">SAMAAN SUITES</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">
              Samaan Suites is a modern luxury hotel in Mogadishu located near the airport.
              The best hotel in Mogadishu for business travelers, NGOs, diplomats, and long-stay guests.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-gold/70">QUICK LINKS</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/50 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/Hotel">
            <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-gold/70">CONTACT US</p>
            <address className="space-y-3 text-sm not-italic text-foreground/50">
              <p className="font-semibold text-foreground/70" itemProp="name">Samaan Suites</p>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p>
                  <span itemProp="streetAddress">Mogadishu Airport Area</span><br />
                  <span itemProp="addressLocality">Mogadishu</span>,{" "}
                  <span itemProp="addressCountry">Somalia</span>
                </p>
              </div>
              <p>
                Phone:{" "}
                <a href="tel:+252614232739" className="transition-colors hover:text-gold" itemProp="telephone">
                  +252 61 4232739
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-gold/70">OUR SERVICES</p>
            <ul className="space-y-2.5 text-sm text-foreground/50">
              <li>Hotel in Mogadishu</li>
              <li>Serviced Apartments</li>
              <li>Conference Venue Mogadishu</li>
              <li>NGO Accommodation Somalia</li>
              <li>Airport Hotel Somalia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-gold/20 pt-8">
          <p className="text-center text-xs text-foreground/30">
            Samaan Suites &middot; Luxury Hotel in Mogadishu Airport Area &middot; Mogadishu, Somalia &middot; +252 61 4232739
          </p>
          <p className="text-xs text-foreground/15">
            &copy; {new Date().getFullYear()} Samaan Suites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#F5F0E6" />
        <meta name="theme-color" content="#2D4A54" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F5F0E6" media="(prefers-color-scheme: light)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Samaan Suites" />

        <meta name="geo.region" content="SO-BN" />
        <meta name="geo.placename" content="Mogadishu, Somalia" />
        <meta name="geo.position" content="2.0469;45.3182" />
        <meta name="ICBM" content="2.0469, 45.3182" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteNavigation />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
