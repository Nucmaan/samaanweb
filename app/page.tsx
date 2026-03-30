import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage } from "@/components/scroll-reveal";
import { FaqAccordion } from "@/components/faq-accordion";

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
  { title: "Serviced Suites", desc: "60 fully furnished one & two bedroom suites across 10 floors — luxury apartments near Mogadishu Airport for short and long stays.", img: "/images/2.jpg" },
  { title: "Fine Dining", desc: "On-site ground-floor restaurant offering quality cuisine for hotel guests, business lunches, and visitors in Mogadishu.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { title: "Conference Venue", desc: "11th-floor auditorium and meeting rooms — the premier conference venue in Mogadishu for workshops, corporate meetings, and NGO summits.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
  { title: "Fitness Center", desc: "Fully equipped gym available to all guests — maintain your wellness routine while staying at Samaan Suites Mogadishu.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
  { title: "24/7 Security", desc: "Dedicated CCTV control room with round-the-clock monitoring and professional security — the safest hotel in Mogadishu.", img: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=800&q=80" },
];

const STATS = [
  { value: "60", label: "Serviced Suites" },
  { value: "10", label: "Residential Floors" },
  { value: "2", label: "Parking Levels" },
  { value: "11F", label: "Event Floor" },
];

export default function Home() {
  return (
    <>
      <JsonLd />
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol><li><a href={SITE_URL}>Samaan Suites – Home</a></li></ol>
      </nav>

      {/* ═══════════════ HERO — Full-screen immersive ═══════════════ */}
      <header className="relative flex h-screen min-h-[600px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
          alt="Samaan Suites luxury hotel exterior in Mogadishu Airport Area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="relative z-10 w-full px-6 pb-16 pt-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
              Mogadishu Airport Area &middot; Somalia
            </p>
            <h1 className="max-w-3xl font-heading text-5xl font-medium leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Samaan Suites
              <span className="mt-3 block text-lg font-normal tracking-[0.2em] text-white/60 sm:text-xl">
                Hotel in Mogadishu
              </span>
            </h1>

            {/* Glassmorphism floating bar */}
            <div className="mt-10 inline-flex flex-wrap items-center gap-6 rounded-sm border border-white/15 bg-white/10 px-8 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#967B4F] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#967B4F]" />
                </span>
                <span className="text-[13px] font-medium tracking-[0.15em] text-white/80">
                  OPENING SOON
                </span>
              </div>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="text-[13px] tracking-wide text-white/50">
                60 Luxury Suites &middot; Conference Venue &middot; Full Amenities
              </span>
              <Link
                href="/contact"
                className="border border-[#967B4F] bg-[#967B4F] px-6 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent"
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════ WELCOME — Brand introduction ═══════════════ */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-36">
        <ScrollReveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
            Welcome to Samaan Suites
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-medium leading-snug text-foreground sm:text-4xl lg:text-[2.75rem]">
            Luxury Rooms in Mogadishu
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            A brand-new luxury serviced hotel near Mogadishu Airport — 60 suites, conference venue,
            restaurant, gym, masjid &amp; 24/7 security. Designed for business travelers, NGOs,
            diplomats, and long-stay guests in Somalia.
          </p>
          <address className="mt-8 flex flex-col items-center gap-1 not-italic text-sm text-muted-foreground/70">
            <span>Mogadishu Airport Area, Mogadishu, Somalia</span>
            <a href="tel:+252614232739" className="text-accent transition-colors hover:text-accent-dark">
              +252 61 4232739
            </a>
          </address>
        </ScrollReveal>
      </section>

      {/* ═══════════════ SUITES — Magazine asymmetric layout ═══════════════ */}
      <section aria-labelledby="suites-heading" className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <ScrollReveal>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Accommodations</p>
          <h2 id="suites-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
            Our Suites
          </h2>
        </ScrollReveal>

        {/* Suite 1 — Image left, text right */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
              alt="Samaan Suites one-bedroom luxury suite in Mogadishu"
              className="aspect-[4/3] w-full rounded-sm"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">One-Bedroom Suite</p>
            <h3 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
              Refined Comfort
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Spacious one-bedroom serviced suites perfect for solo business travelers, NGO professionals,
              and diplomats. Each suite at Samaan Suites Mogadishu features a private bedroom, living area,
              and modern amenities — offering all the comforts of a luxury apartment near Mogadishu Airport.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/60">3 suites per floor &middot; Floors 1–10</p>
            <Link href="/rooms" className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-dark">
              Explore suites
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Suite 2 — Text left, image right */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1 lg:col-span-5" delay={0.15}>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">Two-Bedroom Suite</p>
            <h3 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
              Space to Breathe
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
              className="aspect-[4/3] w-full rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ STATS — Elegant strip ═══════════════ */}
      <section aria-labelledby="stats-heading" className="border-y border-border bg-[#1A1A1A]">
        <h2 id="stats-heading" className="sr-only">Samaan Suites Hotel Key Statistics — Rooms, Floors, Facilities</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.label} className="flex flex-col items-center gap-2 py-14">
              <span className="font-heading text-4xl font-medium text-[#967B4F] sm:text-5xl">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ AMENITIES — Bento grid ═══════════════ */}
      <section aria-labelledby="amenities-heading" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <ScrollReveal className="mb-16 max-w-xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Hotel Amenities &amp; Features</p>
          <h2 id="amenities-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
            Everything Under One Roof in Mogadishu
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={item.img}
                  alt={`${item.title} at Samaan Suites hotel in Mogadishu`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
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

      {/* ═══════════════ WHY CHOOSE — Clean list ═══════════════ */}
      <section aria-labelledby="why-heading" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Why Samaan Suites</p>
              <h2 id="why-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                Why Choose Samaan Suites — The Best Hotel in Mogadishu
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Samaan Suites Mogadishu combines security, luxury, and functionality.
                Designed for discerning travelers who expect world-class hospitality in
                the heart of Somalia.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              {[
                { t: "Prime Airport Location", d: "Steps from Aden Abdulle International Airport — the most convenient hotel near Mogadishu Airport for arriving and departing travelers." },
                { t: "60 Fully Serviced Suites", d: "One-bedroom and two-bedroom suites, all furnished as luxury apartments for short-term or long-term stays in Mogadishu." },
                { t: "11th-Floor Conference Center", d: "Host conferences, workshops, corporate meetings, and large-scale events in Mogadishu's premier auditorium and meeting rooms." },
                { t: "24/7 CCTV & Security", d: "Dedicated security control room, CCTV monitoring, and secure access — one of the safest hotels in Mogadishu, Somalia." },
                { t: "Full Hotel Amenities", d: "Restaurant, gym, masjid, laundry, lobby, reception, and two elevators — everything a world-class hotel in Mogadishu should offer." },
                { t: "Built for Business & NGOs", d: "Specifically designed for business travelers, NGO professionals, UN staff, diplomats, and international organizations operating in Somalia." },
              ].map((item, i) => (
                <ScrollReveal key={item.t} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{item.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCATION ═══════════════ */}
      <section aria-labelledby="location-heading" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Location</p>
            <h2 id="location-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
              Best Hotel Near Mogadishu Airport
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
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
                <a href="tel:+252614232739" className="mt-1 block text-sm text-accent">+252 61 4232739</a>
              </address>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
              alt="Samaan Suites hotel location near Mogadishu Airport"
              className="aspect-[4/3] w-full rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section aria-labelledby="about-heading" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-28 lg:px-10 lg:py-36">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">About</p>
            <h2 id="about-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
              About Samaan Suites — Luxury Serviced Hotel Mogadishu
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground">
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
              <p>
                The 11th floor is entirely dedicated to events and business functions, featuring a multi-purpose
                auditorium and conference hall — the ideal <strong className="text-foreground">conference venue in
                Mogadishu</strong> for corporate meetings, workshops, and NGO summits.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ FAQ — Accordion ═══════════════ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 py-28 lg:px-10 lg:py-36">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">FAQ</p>
          <h2 id="faq-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <FaqAccordion items={ALL_FAQS} />
        </ScrollReveal>
      </section>

      {/* ═══════════════ VALUE — SEO content ═══════════════ */}
      <section aria-labelledby="value-heading" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-28 lg:px-10 lg:py-36">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Value &amp; Comfort</p>
            <h2 id="value-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
              Affordable and Comfortable Stay in Mogadishu
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Finding a hotel in Mogadishu that combines quality, comfort, and value has never been easier.
                Samaan Suites Mogadishu delivers an exceptional hospitality experience. Every suite is fully
                furnished and serviced, offering guests all the comforts of a luxury apartment at competitive rates.
              </p>
              <p>
                As an <strong className="text-foreground">airport hotel in Somalia</strong>, Samaan Suites is perfectly positioned
                for travelers arriving at or departing from Aden Abdulle International Airport. Enjoy the convenience of a premium hotel
                near Mogadishu Airport combined with the affordability and warmth of Somali hospitality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
