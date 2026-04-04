import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ScrollReveal,
  ParallaxImage,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { AnimatedCounter } from "@/components/animated-counter";

export const metadata: Metadata = {
  title: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
  description:
    "Samaan Suites is a modern luxury hotel in Mogadishu located near the airport. Enjoy comfortable rooms, premium service, and the best stay in Somalia.",
  alternates: { canonical: "https://www.samaansuites.com" },
};

const SITE_URL = "https://www.samaansuites.com";

const ALL_FAQS = [
  { q: "Where is Samaan Suites located in Mogadishu?", a: "Samaan Suites is located in the Mogadishu Airport Area, Banaadir Region, Somalia — conveniently situated near Aden Abdulle International Airport, making it the best hotel near Mogadishu Airport." },
  { q: "How many rooms does Samaan Suites have?", a: "Samaan Suites offers 60 fully serviced suites across 10 residential floors. Each floor features 3 one-bedroom suites and 3 two-bedroom suites, all designed for short stays and long-term accommodation in Mogadishu." },
  { q: "What amenities does Samaan Suites offer?", a: "Samaan Suites features a ground-floor restaurant, fully equipped gym, on-site masjid (prayer room), 24/7 CCTV security, laundry service, reception and lobby, two basement parking levels, and two high-speed elevators serving all floors." },
  { q: "Is Samaan Suites suitable for NGOs and business travelers?", a: "Absolutely. Samaan Suites is specifically designed for business travelers, NGO professionals, UN staff, diplomats, and international organizations seeking secure, long-stay serviced accommodation in Mogadishu with full conference facilities." },
  { q: "Does the hotel have conference and event facilities?", a: "Yes. The entire 11th floor is dedicated to events — featuring a multi-purpose auditorium, dedicated meeting rooms, and full service support areas. It is the premier conference venue in Mogadishu for corporate meetings, workshops, NGO summits, and large-scale events." },
  { q: "When is Samaan Suites opening?", a: "Samaan Suites is a brand-new hotel that is opening soon in 2026. Visit samaansuites.com for the latest updates on the official opening date." },
  { q: "What types of suites are available at Samaan Suites?", a: "Samaan Suites offers two suite types: spacious one-bedroom suites and generous two-bedroom suites. All suites are fully furnished serviced apartments suitable for individuals, couples, families, and teams." },
  { q: "Is there parking at Samaan Suites Mogadishu?", a: "Yes. Samaan Suites has two full basement levels dedicated to secure parking, plus power/electricity infrastructure — ensuring a safe and convenient experience for all guests arriving by car." },
  { q: "How secure is Samaan Suites?", a: "Security is a top priority at Samaan Suites. The hotel has a dedicated ground-floor CCTV security control room with round-the-clock monitoring, professional security staff, and controlled access throughout the building — making it one of the safest hotels in Mogadishu." },
  { q: "Can I host a workshop or corporate event at Samaan Suites?", a: "Yes. The 11th-floor auditorium and meeting rooms are ideal for hosting workshops, corporate training sessions, team retreats, product launches, and government or NGO conferences in Mogadishu." },
  { q: "Does Samaan Suites offer long-stay or extended-stay rates?", a: "Yes. Samaan Suites is designed for both short-term and long-term stays. All 60 suites are serviced apartments with everything needed for extended accommodation in Mogadishu — ideal for NGO contracts, business relocations, and diplomatic assignments." },
  { q: "Is Samaan Suites close to Mogadishu International Airport?", a: "Yes. Samaan Suites is located in the Mogadishu Airport Area, directly near Aden Abdulle International Airport (MGQ). It is the closest luxury serviced hotel to the airport, offering maximum convenience for travelers." },
];

function JsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Samaan Suites",
    alternateName: ["Samaan Suites Mogadishu", "Samaan Hotel", "Samaan Hotel Mogadishu"],
    description: "Samaan Suites is a newly developed luxury serviced hotel near Mogadishu Airport, Somalia. Featuring 60 fully serviced one-bedroom and two-bedroom suites across 10 residential floors, a ground-floor restaurant, gym, masjid, 24/7 CCTV security, and an 11th-floor auditorium and conference venue for events, workshops, and corporate meetings. The best hotel in Mogadishu for business travelers, NGOs, diplomats, and long-stay guests.",
    url: SITE_URL, telephone: "+252614232739",
    address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 },
    hasMap: "https://www.google.com/maps?q=2.0469,45.3182",
    numberOfRooms: 60, starRating: { "@type": "Rating", ratingValue: "4" }, checkinTime: "14:00", checkoutTime: "12:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness Center / Gym", value: true },
      { "@type": "LocationFeatureSpecification", name: "Masjid / Prayer Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference / Auditorium Hall", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meeting Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 CCTV Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry Service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Elevator Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Lobby & Reception", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-Site Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Serviced Apartments", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
    ],
    publicAccess: true, currenciesAccepted: "USD", paymentAccepted: "Cash, Credit Card",
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    image: [`${SITE_URL}/logo.png`, `${SITE_URL}/opengraph-image`], priceRange: "$$$", sameAs: [],
  };
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization", name: "Samaan Suites", url: SITE_URL, logo: `${SITE_URL}/logo.png`,
    description: "Samaan Suites is a luxury serviced hotel in Mogadishu, Somalia offering 60 suites, conference facilities, and full hotel amenities near Mogadishu Airport.",
    telephone: "+252614232739",
    address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 }, sameAs: [],
  };
  const webSiteSchema = {
    "@context": "https://schema.org", "@type": "WebSite", name: "Samaan Suites", alternateName: "Samaan Suites Mogadishu", url: SITE_URL,
    description: "Official website of Samaan Suites — luxury serviced hotel near Mogadishu Airport, Somalia.",
    publisher: { "@type": "Organization", name: "Samaan Suites", url: SITE_URL }, inLanguage: ["en", "so", "ar"],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
  };
  const localBusinessSchema = {
    "@context": "https://schema.org", "@type": "LodgingBusiness", name: "Samaan Suites",
    description: "Luxury serviced hotel near Mogadishu Airport offering 60 suites, a conference auditorium, restaurant, gym, masjid, and 24/7 security. The best hotel for business travelers, NGOs, and long-stay guests in Mogadishu, Somalia.",
    url: SITE_URL, telephone: "+252614232739",
    address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 },
    image: `${SITE_URL}/opengraph-image`, priceRange: "$$$",
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

const AMENITIES = [
  { title: "Serviced Suites", desc: "60 fully furnished one & two bedroom suites across 10 floors — luxury apartments near Mogadishu Airport for short and long stays.", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", span: "sm:col-span-2 sm:row-span-2" },
  { title: "Fine Dining", desc: "On-site ground-floor restaurant offering quality cuisine for hotel guests, business lunches, and visitors in Mogadishu.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", span: "" },
  { title: "Conference Venue", desc: "11th-floor auditorium and meeting rooms — the premier conference venue in Mogadishu for workshops, corporate meetings, and NGO summits.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", span: "" },
  { title: "Fitness Center", desc: "Fully equipped gym available to all guests — maintain your wellness routine while staying at Samaan Suites Mogadishu.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", span: "" },
  { title: "24/7 Security", desc: "Dedicated CCTV control room with round-the-clock monitoring and professional security — the safest hotel in Mogadishu.", img: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=800&q=80", span: "" },
  { title: "On-site Masjid", desc: "Dedicated prayer room for guests — a thoughtful amenity reflecting our commitment to Somali hospitality and values.", img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80", span: "" },
];

const EXPERIENCES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Prime Airport Location",
    desc: "Steps from Aden Abdulle International Airport — the most convenient hotel near Mogadishu Airport.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "60 Serviced Suites",
    desc: "Luxury one-bedroom and two-bedroom suites, fully furnished for short and long stays.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Conference Center",
    desc: "11th-floor auditorium and meeting rooms for workshops, summits, and corporate events.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "24/7 Security",
    desc: "Dedicated CCTV control room, professional security staff, and controlled building access.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Restaurant & Dining",
    desc: "Ground-floor restaurant offering quality cuisine for guests, meetings, and visitors.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-7 w-7" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Built for Business & NGOs",
    desc: "Designed for professionals, diplomats, UN staff, and international organizations in Somalia.",
  },
];

const TESTIMONIALS = [
  {
    quote: "The best hotel experience in Mogadishu. World-class facilities with a level of service that rivals international luxury brands.",
    author: "International Development Professional",
    role: "NGO Director, East Africa",
  },
  {
    quote: "Samaan Suites fills a critical gap in Mogadishu's hospitality sector. The conference facilities and security infrastructure are outstanding.",
    author: "Diplomatic Affairs Correspondent",
    role: "Foreign Affairs, Mogadishu",
  },
  {
    quote: "Finally, a hotel in Mogadishu that meets international standards. The suites are spacious, modern, and perfect for extended stays.",
    author: "Business Executive",
    role: "Corporate Traveler, Somalia",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd />
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol><li><a href={SITE_URL}>Samaan Suites – Home</a></li></ol>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <header className="grain relative flex h-screen min-h-[700px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
          alt="Samaan Suites luxury hotel exterior in Mogadishu Airport Area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/5" />

        <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">
              Mogadishu Airport Area &middot; Somalia
            </p>
            <h1 className="max-w-4xl font-heading text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Samaan Suites
            </h1>
            <p className="mt-4 max-w-lg text-lg tracking-wide text-white/50 sm:text-xl">
              Where luxury meets Mogadishu. A new chapter in Somali hospitality.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
              >
                Book Now
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
              >
                Explore Rooms
              </Link>
            </div>

            {/* Glassmorphism info bar */}
            <div className="mt-12 inline-flex flex-wrap items-center gap-5 rounded-sm border border-white/10 bg-white/5 px-7 py-3.5 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[12px] font-medium tracking-[0.15em] text-white/70">
                  OPENING SOON
                </span>
              </div>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="text-[12px] tracking-wide text-white/40">
                60 Luxury Suites &middot; Conference Venue &middot; Full Amenities
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-5 w-5 animate-scroll-hint text-white/30" aria-hidden="true">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>

      {/* ═══════════════ WELCOME ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-10 lg:py-40">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-10 w-16" />
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">
              Welcome to Samaan Suites
            </p>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-medium leading-snug text-foreground sm:text-4xl lg:text-5xl">
              A Sanctuary of Refined Luxury in the Heart of Mogadishu
            </h2>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A brand-new luxury serviced hotel near Mogadishu Airport — 60 suites, conference venue,
              restaurant, gym, masjid &amp; 24/7 security. Designed for business travelers, NGOs,
              diplomats, and long-stay guests in Somalia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ SUITES ═══════════════ */}
      <section aria-labelledby="suites-heading" className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <ScrollReveal>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Accommodations</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="suites-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Our Suites
            </h2>
            <Link href="/rooms" className="link-underline text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark">
              View all suites &rarr;
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
              alt="Samaan Suites one-bedroom luxury suite in Mogadishu"
              className="aspect-4/3 w-full rounded-sm"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <div className="inline-block border border-accent/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              Most Popular
            </div>
            <h3 className="mt-5 font-heading text-2xl font-medium text-foreground sm:text-3xl">
              One-Bedroom Suite
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Spacious one-bedroom serviced suites perfect for solo business travelers, NGO professionals,
              and diplomats. Each suite at Samaan Suites Mogadishu features a private bedroom, living area,
              and modern amenities — offering all the comforts of a luxury apartment near Mogadishu Airport.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/60">3 suites per floor &middot; Floors 1–10</p>
            <Link href="/rooms" className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark">
              Explore suite
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-28 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1 lg:col-span-5" delay={0.15}>
            <div className="inline-block border border-accent/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              Family Friendly
            </div>
            <h3 className="mt-5 font-heading text-2xl font-medium text-foreground sm:text-3xl">
              Two-Bedroom Suite
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Generous two-bedroom serviced suites ideal for families, teams, and guests requiring extra space.
              Two private bedrooms, a shared living area, and premium furnishings — the best choice for extended
              stays and group accommodation in Mogadishu.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/60">3 suites per floor &middot; Floors 1–10</p>
            <Link href="/rooms" className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark">
              View details
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="order-1 lg:order-2 lg:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
              alt="Samaan Suites two-bedroom luxury hotel room in Mogadishu"
              className="aspect-4/3 w-full rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section aria-labelledby="stats-heading" className="grain relative overflow-hidden border-y border-white/10 bg-[#111111]">
        <h2 id="stats-heading" className="sr-only">Samaan Suites Hotel Key Statistics — Rooms, Floors, Facilities</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4">
          <AnimatedCounter value={60} label="Serviced Suites" />
          <AnimatedCounter value={10} label="Residential Floors" />
          <AnimatedCounter value={2} label="Parking Levels" />
          <AnimatedCounter value={11} suffix="F" label="Event Floor" />
        </div>
      </section>

      {/* ═══════════════ AMENITIES — Dynamic bento grid ═══════════════ */}
      <section aria-labelledby="amenities-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <ScrollReveal className="mb-16 max-w-xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Hotel Amenities &amp; Features</p>
          <h2 id="amenities-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            Everything Under One Roof
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From fine dining and fitness to conference halls and dedicated prayer spaces —
            Samaan Suites delivers a complete luxury experience in Mogadishu.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07} className={item.span}>
              <div className="group relative h-full min-h-[280px] overflow-hidden rounded-sm sm:min-h-[320px]">
                <Image
                  src={item.img}
                  alt={`${item.title} at Samaan Suites hotel in Mogadishu`}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  sizes={i === 0 ? "(max-width:640px) 100vw, 66vw" : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                  <h3 className="font-heading text-xl font-medium text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ EXPERIENCE FEATURES ═══════════════ */}
      <section aria-labelledby="experience-heading" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">The Samaan Experience</p>
            <h2 id="experience-heading" className="mx-auto max-w-2xl font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Why Choose Samaan Suites
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {EXPERIENCES.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section aria-labelledby="testimonials-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Guest Voices</p>
          <h2 id="testimonials-heading" className="mx-auto max-w-2xl font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            What People Are Saying
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.author}>
              <div className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 lg:p-10">
                <div>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mb-6 h-8 w-8 text-accent/30" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-heading text-lg leading-relaxed text-foreground italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-sm font-medium text-foreground">{item.author}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════════ LOCATION ═══════════════ */}
      <section aria-labelledby="location-heading" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Location</p>
              <h2 id="location-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Best Hotel Near Mogadishu Airport
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Samaan Suites is strategically located in the <strong className="text-foreground">Mogadishu Airport Area</strong>,
                  one of the most accessible and well-connected neighborhoods in Mogadishu, Somalia. The hotel sits near{" "}
                  <strong className="text-foreground">Aden Abdulle International Airport (MGQ)</strong>, making it the ideal choice
                  for travelers who need a hotel near Mogadishu Airport.
                </p>
                <p>
                  The airport area is a hub for international organizations, NGOs, UN agencies,
                  embassies, and government institutions operating in Somalia — making Samaan Suites the natural base
                  for professionals, diplomats, and teams.
                </p>
              </div>
              <div className="mt-8 border-l-2 border-accent/30 pl-5">
                <address className="not-italic">
                  <p className="font-medium text-foreground">Samaan Suites</p>
                  <p className="text-sm text-muted-foreground">Mogadishu Airport Area, Mogadishu, Somalia</p>
                  <a href="tel:+252614232739" className="mt-1 block text-sm text-accent transition-colors hover:text-accent-dark">+252 61 4232739</a>
                </address>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark"
              >
                Get directions
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                alt="Samaan Suites hotel location near Mogadishu Airport"
                className="aspect-4/3 w-full rounded-sm"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section aria-labelledby="about-heading" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">About</p>
            <h2 id="about-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              About Samaan Suites
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 space-y-5 text-center text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                <strong className="text-foreground">Samaan Suites</strong> is a brand-new luxury serviced hotel located
                in the <strong className="text-foreground">Mogadishu Airport Area</strong>, Banaadir Region, Somalia.
                The property offers <strong className="text-foreground">60 fully serviced suites</strong> spread across
                10 residential floors — one of the premier and <strong className="text-foreground">best hotels in Mogadishu</strong>{" "}
                for both short-term and long-term accommodation.
              </p>
              <p>
                The ground floor houses a full-service restaurant, a modern fitness center, an on-site masjid,
                a professional reception and lobby area, laundry services, and a dedicated CCTV security control room
                ensuring 24/7 safety. Two basement levels provide secure parking and independent power infrastructure.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="mt-12 text-center" delay={0.1}>
            <Link
              href="/about"
              className="link-underline text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark"
            >
              Read our full story &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section aria-labelledby="faq-heading" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="mb-14 text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">FAQ</p>
            <h2 id="faq-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FaqAccordion items={ALL_FAQS} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="grain relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
          alt="Samaan Suites luxury hotel in Mogadishu"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-10 w-16" />
            <h2 className="font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
              Begin Your Mogadishu Experience
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 lg:text-lg">
              Whether you are planning a business trip, an NGO deployment, or a personal visit — Samaan Suites
              is ready to welcome you to the best hotel in Mogadishu.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
              >
                Reserve Your Stay
              </Link>
              <a
                href="tel:+252614232739"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Call +252 61 4232739
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
