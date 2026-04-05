import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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
    title: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
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
    title: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
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
  { href: "/rooms", label: "Suites" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      {/* Pre-footer CTA strip */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 sm:flex-row lg:px-10">
          <div>
            <p className="font-heading text-xl font-medium text-foreground sm:text-2xl">
              Ready to Experience Samaan Suites?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us today to reserve your luxury suite in Mogadishu.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center border border-accent bg-accent px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
            >
              Book Now
            </Link>
            <a
              href="tel:+252614232739"
              className="inline-flex items-center border border-border px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-2xl tracking-wide text-foreground">
              Samaan Suites
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A sanctuary of refined luxury in the heart of Mogadishu.
              Where timeless elegance meets modern comfort near the airport.
            </p>
            <div className="gold-line mt-6 w-12" />
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              Explore
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/Hotel">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              Contact
            </p>
            <address className="space-y-3 text-sm not-italic text-muted-foreground">
              <p className="text-foreground" itemProp="name">Samaan Suites</p>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p>
                  <span itemProp="streetAddress">Mogadishu Airport Area</span><br />
                  <span itemProp="addressLocality">Mogadishu</span>,{" "}
                  <span itemProp="addressCountry">Somalia</span>
                </p>
              </div>
              <p>
                <a
                  href="tel:+252614232739"
                  className="transition-colors hover:text-accent"
                  itemProp="telephone"
                >
                  +252 61 4232739
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              Services
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/rooms" className="transition-colors hover:text-accent">Hotel Suites</Link>
              </li>
              <li>
                <Link href="/rooms/one-bedroom-suite" className="transition-colors hover:text-accent">One-Bedroom Suite</Link>
              </li>
              <li>
                <Link href="/rooms/two-bedroom-suite" className="transition-colors hover:text-accent">Two-Bedroom Suite</Link>
              </li>
              <li>
                <Link href="/conference" className="transition-colors hover:text-accent">Conference Venue</Link>
              </li>
              <li>
                <Link href="/ngo-accommodation-mogadishu" className="transition-colors hover:text-accent">NGO Accommodation</Link>
              </li>
              <li>
                <Link href="/hotel-near-mogadishu-airport" className="transition-colors hover:text-accent">Airport Hotel</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-10">
          <div className="gold-line w-16" />
          <p className="mt-2 text-center text-xs tracking-[0.25em] text-muted-foreground/50">
            SAMAAN SUITES &middot; MOGADISHU AIRPORT AREA &middot; SOMALIA
          </p>
          <p className="text-[11px] text-muted-foreground/40">
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
      className={`${inter.variable} ${playfair.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#F9F8F6" />
        <meta name="theme-color" content="#1A1A1A" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F9F8F6" media="(prefers-color-scheme: light)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Samaan Suites" />

        <meta name="geo.region" content="SO-BN" />
        <meta name="geo.placename" content="Mogadishu, Somalia" />
        <meta name="geo.position" content="2.0469;45.3182" />
        <meta name="ICBM" content="2.0469, 45.3182" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <link rel="icon" href="/icon" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/icon" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
