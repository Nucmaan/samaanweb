import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://samaansuites.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Samaan Suites | Luxury Serviced Hotel in Mogadishu, Somalia – Opening Soon",
    template: "%s | Samaan Suites Mogadishu",
  },

  description:
    "Samaan Suites is a brand-new luxury serviced hotel near Mogadishu Airport, Somalia. 60 fully serviced one-bedroom & two-bedroom suites across 10 floors. Conference venue, auditorium, restaurant, gym, masjid, 24/7 CCTV security. Ideal for business travelers, NGOs, diplomats, long-stay guests, and events. Best hotel in Mogadishu — opening soon.",

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
      "Samaan Suites | Best Luxury Serviced Hotel in Mogadishu, Somalia – Opening Soon",
    description:
      "Brand-new luxury serviced hotel near Mogadishu Airport. 60 suites across 10 floors, 11th-floor conference venue & auditorium, restaurant, gym, masjid & 24/7 CCTV security. #1 hotel for business travelers, NGOs & long-stay guests in Mogadishu.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Samaan Suites – Luxury Serviced Hotel in Mogadishu, Somalia – 60 Suites, Conference Venue, Opening Soon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Samaan Suites | Luxury Serviced Hotel in Mogadishu – Opening Soon",
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
        <meta name="theme-color" content="#0b1120" />
        <meta name="theme-color" content="#0b1120" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f0ead6" media="(prefers-color-scheme: light)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Samaan Suites" />

        {/* Geo-targeting for Mogadishu, Somalia */}
        <meta name="geo.region" content="SO-BN" />
        <meta name="geo.placename" content="Mogadishu, Somalia" />
        <meta name="geo.position" content="2.0469;45.3182" />
        <meta name="ICBM" content="2.0469, 45.3182" />

        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
