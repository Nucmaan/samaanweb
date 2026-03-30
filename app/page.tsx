import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samaan Suites – Luxury Hotel in Mogadishu Airport Area",
  description:
    "Samaan Suites is a modern luxury hotel in Mogadishu located near the airport. Enjoy comfortable rooms, premium service, and the best stay in Somalia.",
  alternates: { canonical: "https://www.samaansuites.com" },
};

const SITE_URL = "https://www.samaansuites.com";

const ALL_FAQS = [
  {
    q: "Where is Samaan Suites located in Mogadishu?",
    a: "Samaan Suites is located in the Mogadishu Airport Area, Banaadir Region, Somalia — conveniently situated near Aden Abdulle International Airport, making it the best hotel near Mogadishu Airport.",
  },
  {
    q: "How many rooms does Samaan Suites have?",
    a: "Samaan Suites offers 60 fully serviced suites across 10 residential floors. Each floor features 3 one-bedroom suites and 3 two-bedroom suites, all designed for short stays and long-term accommodation in Mogadishu.",
  },
  {
    q: "What amenities does Samaan Suites offer?",
    a: "Samaan Suites features a ground-floor restaurant, fully equipped gym, on-site masjid (prayer room), 24/7 CCTV security, laundry service, reception and lobby, two basement parking levels, and two high-speed elevators serving all floors.",
  },
  {
    q: "Is Samaan Suites suitable for NGOs and business travelers?",
    a: "Absolutely. Samaan Suites is specifically designed for business travelers, NGO professionals, UN staff, diplomats, and international organizations seeking secure, long-stay serviced accommodation in Mogadishu with full conference facilities.",
  },
  {
    q: "Does the hotel have conference and event facilities?",
    a: "Yes. The entire 11th floor is dedicated to events — featuring a multi-purpose auditorium, dedicated meeting rooms, and full service support areas. It is the premier conference venue in Mogadishu for corporate meetings, workshops, NGO summits, and large-scale events.",
  },
  {
    q: "When is Samaan Suites opening?",
    a: "Samaan Suites is a brand-new hotel that is opening soon in 2026. Visit samaansuites.com for the latest updates on the official opening date.",
  },
  {
    q: "What types of suites are available at Samaan Suites?",
    a: "Samaan Suites offers two suite types: spacious one-bedroom suites and generous two-bedroom suites. All suites are fully furnished serviced apartments suitable for individuals, couples, families, and teams.",
  },
  {
    q: "Is there parking at Samaan Suites Mogadishu?",
    a: "Yes. Samaan Suites has two full basement levels dedicated to secure parking, plus power/electricity infrastructure — ensuring a safe and convenient experience for all guests arriving by car.",
  },
  {
    q: "How secure is Samaan Suites?",
    a: "Security is a top priority at Samaan Suites. The hotel has a dedicated ground-floor CCTV security control room with round-the-clock monitoring, professional security staff, and controlled access throughout the building — making it one of the safest hotels in Mogadishu.",
  },
  {
    q: "Can I host a workshop or corporate event at Samaan Suites?",
    a: "Yes. The 11th-floor auditorium and meeting rooms are ideal for hosting workshops, corporate training sessions, team retreats, product launches, and government or NGO conferences in Mogadishu.",
  },
  {
    q: "Does Samaan Suites offer long-stay or extended-stay rates?",
    a: "Yes. Samaan Suites is designed for both short-term and long-term stays. All 60 suites are serviced apartments with everything needed for extended accommodation in Mogadishu — ideal for NGO contracts, business relocations, and diplomatic assignments.",
  },
  {
    q: "Is Samaan Suites close to Mogadishu International Airport?",
    a: "Yes. Samaan Suites is located in the Mogadishu Airport Area, directly near Aden Abdulle International Airport (MGQ). It is the closest luxury serviced hotel to the airport, offering maximum convenience for travelers.",
  },
];

function JsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Samaan Suites",
    alternateName: ["Samaan Suites Mogadishu", "Samaan Hotel", "Samaan Hotel Mogadishu"],
    description:
      "Samaan Suites is a newly developed luxury serviced hotel near Mogadishu Airport, Somalia. Featuring 60 fully serviced one-bedroom and two-bedroom suites across 10 residential floors, a ground-floor restaurant, gym, masjid, 24/7 CCTV security, and an 11th-floor auditorium and conference venue for events, workshops, and corporate meetings. The best hotel in Mogadishu for business travelers, NGOs, diplomats, and long-stay guests.",
    url: SITE_URL,
    telephone: "+252614232739",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mogadishu Airport Area",
      addressLocality: "Mogadishu",
      addressRegion: "Banaadir",
      addressCountry: "SO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.0469,
      longitude: 45.3182,
    },
    hasMap: "https://www.google.com/maps?q=2.0469,45.3182",
    numberOfRooms: 60,
    starRating: { "@type": "Rating", ratingValue: "4" },
    checkinTime: "14:00",
    checkoutTime: "12:00",
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
    publicAccess: true,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$$",
    sameAs: [],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Samaan Suites",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    description:
      "Samaan Suites is a luxury serviced hotel in Mogadishu, Somalia offering 60 suites, conference facilities, and full hotel amenities near Mogadishu Airport.",
    telephone: "+252614232739",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mogadishu Airport Area",
      addressLocality: "Mogadishu",
      addressRegion: "Banaadir",
      addressCountry: "SO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.0469,
      longitude: 45.3182,
    },
    sameAs: [],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Samaan Suites",
    alternateName: "Samaan Suites Mogadishu",
    url: SITE_URL,
    description:
      "Official website of Samaan Suites — luxury serviced hotel near Mogadishu Airport, Somalia.",
    publisher: {
      "@type": "Organization",
      name: "Samaan Suites",
      url: SITE_URL,
    },
    inLanguage: ["en", "so", "ar"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Samaan Suites",
    description:
      "Luxury serviced hotel near Mogadishu Airport offering 60 suites, a conference auditorium, restaurant, gym, masjid, and 24/7 security. The best hotel for business travelers, NGOs, and long-stay guests in Mogadishu, Somalia.",
    url: SITE_URL,
    telephone: "+252614232739",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mogadishu Airport Area",
      addressLocality: "Mogadishu",
      addressRegion: "Banaadir",
      addressCountry: "SO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.0469,
      longitude: 45.3182,
    },
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <article className="group relative rounded-2xl border border-gold/10 bg-navy-light/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-navy-light">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground/60">{description}</p>
    </article>
  );
}

function SuiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" />
    </svg>
  );
}
function EventIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 2v4M16 2v4" />
    </svg>
  );
}
function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" /><path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function DiningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}
function GymIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M6.5 6.5a1.5 1.5 0 113 0v11a1.5 1.5 0 01-3 0v-11z" /><path d="M14.5 6.5a1.5 1.5 0 113 0v11a1.5 1.5 0 01-3 0v-11z" />
      <path d="M4 10h2.5M17.5 10H20M4 14h2.5M17.5 14H20" /><path d="M9.5 12h5" />
    </svg>
  );
}
function MosqueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M12 3c-2 2-4 4-4 7v11h8V10c0-3-2-5-4-7z" /><path d="M4 21V13a3 3 0 013-3h0" /><path d="M20 21V13a3 3 0 00-3-3h0" />
      <path d="M2 21h20" /><circle cx="12" cy="12" r="1" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />

      <div className="flex flex-col">
        {/* Breadcrumb (hidden visually, crawlable) */}
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><a href={SITE_URL}>Samaan Suites – Home</a></li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gold/3 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="animate-fade-in-up mb-8 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-12 bg-gold/40" />
              <DiamondIcon className="h-3 w-3 text-gold animate-pulse-glow" />
              <span className="h-px w-12 bg-gold/40" />
            </div>

            <h1 className="animate-fade-in-up-delay-1 mb-2 text-5xl font-bold tracking-wide text-foreground sm:text-6xl md:text-7xl">
              Samaan Suites
              <span className="mt-2 block text-lg tracking-[0.35em] text-gold font-light sm:text-xl">
                Hotel in Mogadishu
              </span>
            </h1>

            <div className="animate-fade-in-up-delay-2 mt-8 mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-6 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-sm font-medium tracking-wider text-gold">OPENING SOON</span>
            </div>

            <p className="animate-fade-in-up-delay-3 mx-auto mb-6 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
              A brand-new luxury serviced hotel near Mogadishu Airport — 60 suites, conference venue,
              restaurant, gym, masjid &amp; 24/7 security. Designed for business travelers, NGOs,
              diplomats, and long-stay guests in Somalia.
            </p>

            <address className="animate-fade-in-up-delay-4 not-italic flex flex-col items-center gap-2 text-foreground/50">
              <span className="inline-flex items-center gap-2">
                <LocationIcon />
                <span className="text-sm tracking-wide">Mogadishu Airport Area, Mogadishu, Somalia</span>
              </span>
              <a href="tel:+252614232739" className="text-sm tracking-wide text-gold/70 transition-colors hover:text-gold">
                +252 61 4232739
              </a>
            </address>
          </div>
        </header>

        <div className="flex items-center justify-center gap-3 px-6" aria-hidden="true">
          <span className="h-px flex-1 max-w-24 bg-gold/10" />
          <DiamondIcon className="h-2.5 w-2.5 text-gold/30" />
          <span className="h-px flex-1 max-w-24 bg-gold/10" />
        </div>

        {/* Hotel Amenities & Features */}
        <section aria-labelledby="features-heading" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">HOTEL AMENITIES &amp; FEATURES</p>
            <h2 id="features-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              Luxury Rooms in Mogadishu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/50">
              Samaan Suites offers 60 luxury serviced suites across 10 floors — one-bedroom and two-bedroom apartments
              designed for comfort, privacy, and extended stays in Mogadishu. Every room comes with full hotel amenities,
              conference access, and 24/7 security.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<SuiteIcon />}
              title="Serviced Suites & Apartments"
              description="60 fully serviced suites in Mogadishu — 3 one-bedroom and 3 two-bedroom per floor — ideal for short stays, long stays, and furnished apartment rentals near Mogadishu Airport."
            />
            <FeatureCard
              icon={<EventIcon />}
              title="Conference & Event Venue"
              description="11th-floor auditorium and meeting rooms — the premier conference venue in Mogadishu for workshops, corporate meetings, NGO summits, and special events."
            />
            <FeatureCard
              icon={<SecurityIcon />}
              title="24/7 Security & CCTV"
              description="Dedicated CCTV control room with round-the-clock monitoring, professional security infrastructure, and secure access — the safest hotel in Mogadishu."
            />
            <FeatureCard
              icon={<DiningIcon />}
              title="Restaurant & Dining"
              description="On-site ground-floor restaurant offering quality cuisine for hotel guests, business lunches, and visitors in Mogadishu."
            />
            <FeatureCard
              icon={<GymIcon />}
              title="Fitness Center & Gym"
              description="Fully equipped fitness center available to all guests — maintain your wellness routine while staying at Samaan Suites Mogadishu."
            />
            <FeatureCard
              icon={<MosqueIcon />}
              title="Masjid & Prayer Room"
              description="Convenient on-site masjid and prayer facility for guests, with easy access from all floors via two high-speed elevators."
            />
          </div>
        </section>

        {/* Key Statistics */}
        <section aria-labelledby="stats-heading" className="border-y border-gold/10 bg-navy-light/40">
          <h2 id="stats-heading" className="sr-only">Samaan Suites Hotel Key Statistics — Rooms, Floors, Facilities</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
            {[
              { value: "60", label: "Serviced Suites" },
              { value: "10", label: "Residential Floors" },
              { value: "2", label: "Basement Parking Levels" },
              { value: "11F", label: "Event & Conference Floor" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 py-10">
                <span className="text-3xl font-bold text-gold sm:text-4xl">{stat.value}</span>
                <span className="text-xs tracking-wider text-foreground/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ground Floor Facilities */}
        <section aria-labelledby="ground-floor-heading" className="mx-auto w-full max-w-4xl px-6 py-24 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">GROUND FLOOR FACILITIES</p>
          <h2 id="ground-floor-heading" className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need Under One Roof in Mogadishu
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3" role="list">
            {[
              "Reception & Front Desk",
              "Lobby & Guest Lounge",
              "Restaurant",
              "Gym & Fitness Center",
              "Masjid",
              "CCTV Security Control",
              "Management Office",
              "Laundry Service",
              "Stores",
              "2 High-Speed Elevators",
            ].map((item) => (
              <span
                key={item}
                role="listitem"
                className="rounded-full border border-gold/15 bg-navy-light/60 px-5 py-2.5 text-sm text-foreground/70 transition-colors hover:border-gold/30 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Why Choose Samaan Suites */}
        <section aria-labelledby="why-choose-heading" className="border-t border-gold/10 bg-navy-light/20">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-3 text-center text-sm font-medium tracking-[0.2em] text-gold/70">WHY SAMAAN SUITES</p>
            <h2 id="why-choose-heading" className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Samaan Suites — The Best Hotel in Mogadishu
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Prime Airport Location", text: "Steps from Aden Abdulle International Airport — the most convenient hotel near Mogadishu Airport for arriving and departing travelers." },
                { title: "60 Fully Serviced Suites", text: "Choose from one-bedroom or two-bedroom suites, all furnished and serviced as luxury apartments for short-term or long-term stays in Mogadishu." },
                { title: "11th-Floor Conference Center", text: "Host conferences, workshops, corporate meetings, and large-scale events in Mogadishu's premier auditorium and meeting rooms." },
                { title: "24/7 CCTV & Professional Security", text: "Dedicated security control room, CCTV monitoring, and secure access — one of the safest and most secure hotels in Mogadishu, Somalia." },
                { title: "Full Hotel Amenities", text: "Restaurant, gym, masjid, laundry, lobby, reception, and two elevators — everything a world-class hotel in Mogadishu should offer." },
                { title: "Built for Business & NGOs", text: "Specifically designed for business travelers, NGO professionals, UN staff, diplomats, and international organizations operating in Somalia." },
                { title: "Modern Basement Parking", text: "Two full basement levels with secure parking and power infrastructure — no other hotel in Mogadishu offers this level of convenience." },
                { title: "Brand New Property", text: "Samaan Suites is a newly built hotel — every suite, facility, and system is brand new, modern, and designed to the highest standards." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/55">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Neighborhood */}
        <section aria-labelledby="location-heading" className="border-t border-gold/10">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">LOCATION &amp; NEIGHBORHOOD</p>
            <h2 id="location-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              Best Hotel Near Mogadishu Airport
            </h2>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-navy-light/40 p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <MapPinIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Mogadishu Airport Area, Banaadir, Somalia</h3>
                  <p className="mt-1 text-sm text-foreground/50">Near Aden Abdulle International Airport (MGQ)</p>
                </div>
              </div>
              <div className="space-y-4 text-foreground/60 leading-relaxed">
                <p>
                  Samaan Suites is strategically located in the <strong className="text-foreground/80">Mogadishu Airport Area</strong>,
                  one of the most accessible and well-connected neighborhoods in Mogadishu, Somalia. The hotel sits near{" "}
                  <strong className="text-foreground/80">Aden Abdulle International Airport (MGQ)</strong>, making it the ideal choice
                  for travelers who need a <strong className="text-foreground/80">hotel near Mogadishu Airport</strong> with immediate
                  access to international flights.
                </p>
                <p>
                  The airport area is a hub for <strong className="text-foreground/80">international organizations, NGOs, UN agencies,
                  embassies, and government institutions</strong> operating in Somalia. This makes Samaan Suites the natural base
                  for professionals, diplomats, and teams who need secure, comfortable, and well-equipped accommodation in
                  Mogadishu with proximity to key institutions.
                </p>
                <p>
                  Whether you are visiting Mogadishu for business, humanitarian work, conferences, or extended assignments,
                  Samaan Suites offers the <strong className="text-foreground/80">best location in Mogadishu</strong> for convenience,
                  safety, and access. The property is also easily reachable from the city center and major roads in the
                  Banaadir region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Samaan Suites */}
        <section aria-labelledby="about-heading" className="border-t border-gold/10 bg-navy-light/20">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <p className="mb-3 text-center text-sm font-medium tracking-[0.2em] text-gold/70">ABOUT THE HOTEL</p>
            <h2 id="about-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              About Samaan Suites — Luxury Serviced Hotel Mogadishu
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                <strong className="text-foreground/80">Samaan Suites</strong> is a brand-new luxury serviced hotel located
                in the <strong className="text-foreground/80">Mogadishu Airport Area</strong>, Banaadir Region, Somalia.
                Designed to meet the highest international standards of hospitality, the property offers{" "}
                <strong className="text-foreground/80">60 fully serviced suites</strong> spread across 10 residential
                floors — making it one of the premier and <strong className="text-foreground/80">best hotels in Mogadishu</strong>{" "}
                for both short-term and long-term accommodation.
              </p>
              <p>
                Each floor features three spacious <strong className="text-foreground/80">one-bedroom suites</strong> and three
                generous <strong className="text-foreground/80">two-bedroom suites</strong>, all fully furnished and serviced as
                high-end apartments. Whether you are a <strong className="text-foreground/80">business traveler</strong>, an{" "}
                <strong className="text-foreground/80">NGO professional</strong>, a <strong className="text-foreground/80">UN
                staff member</strong>, a diplomat, or a family looking for secure and comfortable{" "}
                <strong className="text-foreground/80">accommodation in Mogadishu</strong>, Samaan Suites delivers a world-class
                experience that rivals any international hotel.
              </p>
              <p>
                The ground floor houses a full-service <strong className="text-foreground/80">restaurant</strong>, a modern{" "}
                <strong className="text-foreground/80">fitness center and gym</strong>, an on-site{" "}
                <strong className="text-foreground/80">masjid (prayer room)</strong>, a professional reception and lobby area,
                laundry services, management offices, and a dedicated{" "}
                <strong className="text-foreground/80">CCTV security control room</strong> ensuring 24/7 safety for all guests and
                staff. Two basement levels provide secure <strong className="text-foreground/80">parking</strong> and independent
                power/electricity infrastructure.
              </p>
              <p>
                The <strong className="text-foreground/80">11th floor</strong> is entirely dedicated to events and business
                functions, featuring a multi-purpose <strong className="text-foreground/80">auditorium and conference hall</strong>,
                dedicated meeting rooms, and full support service areas. This makes Samaan Suites the ideal{" "}
                <strong className="text-foreground/80">conference venue in Mogadishu</strong> for corporate meetings, workshops,
                training sessions, NGO summits, government events, and large-scale functions.
              </p>
              <p>
                Conveniently located <strong className="text-foreground/80">near Aden Abdulle International Airport</strong>,
                Samaan Suites combines security, luxury, and functionality — the best choice for anyone seeking a{" "}
                <strong className="text-foreground/80">hotel near Mogadishu Airport</strong> with world-class facilities,
                professional services, and the comfort of home.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section — 12 questions */}
        <section aria-labelledby="faq-heading" className="border-t border-gold/10">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <p className="mb-3 text-center text-sm font-medium tracking-[0.2em] text-gold/70">FREQUENTLY ASKED QUESTIONS</p>
            <h2 id="faq-heading" className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
              FAQ — Samaan Suites Hotel Mogadishu, Somalia
            </h2>
            <dl className="space-y-8">
              {ALL_FAQS.map((faq) => (
                <div key={faq.q}>
                  <dt className="text-lg font-semibold text-foreground">{faq.q}</dt>
                  <dd className="mt-2 text-foreground/60 leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Affordable and Comfortable Stay */}
        <section aria-labelledby="affordable-heading" className="border-t border-gold/10">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <p className="mb-3 text-center text-sm font-medium tracking-[0.2em] text-gold/70">VALUE &amp; COMFORT</p>
            <h2 id="affordable-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Affordable and Comfortable Stay in Mogadishu
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                Finding a hotel in Mogadishu that combines <strong className="text-foreground/80">quality, comfort, and value</strong> has
                never been easier. Samaan Suites Mogadishu delivers an exceptional hospitality experience without compromising on service
                or amenities. Every suite is fully furnished and serviced, offering guests all the comforts of a luxury apartment at
                competitive rates.
              </p>
              <p>
                Whether you need a <strong className="text-foreground/80">short-term stay</strong> for a business trip or a{" "}
                <strong className="text-foreground/80">long-term accommodation</strong> for an extended assignment, Samaan Suites provides
                flexible options tailored to your needs. Our all-inclusive amenities — restaurant, gym, masjid, high-speed elevators,
                laundry, and 24/7 security — mean you never have to look elsewhere during your stay in Mogadishu.
              </p>
              <p>
                As an <strong className="text-foreground/80">airport hotel in Somalia</strong>, Samaan Suites is perfectly positioned
                for travelers arriving at or departing from Aden Abdulle International Airport. Enjoy the convenience of a premium hotel
                near Mogadishu Airport combined with the affordability and warmth of Somali hospitality. Samaan Suites is where comfort
                meets convenience in Mogadishu.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
