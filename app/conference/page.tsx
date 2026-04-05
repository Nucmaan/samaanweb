import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "Conference Venue in Mogadishu – Auditorium & Meeting Rooms",
  description:
    "Host your next conference, workshop, or corporate event at Samaan Suites Mogadishu. 11th-floor auditorium and meeting rooms — the premier conference venue in Mogadishu for NGO summits, government meetings, and business events.",
  alternates: { canonical: `${SITE_URL}/conference` },
  openGraph: {
    title: "Conference Venue in Mogadishu – Samaan Suites Event Center",
    description:
      "Mogadishu's premier conference venue. 11th-floor auditorium, meeting rooms, and full event support at Samaan Suites near Mogadishu Airport.",
    url: `${SITE_URL}/conference`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Conference Venue at Samaan Suites Mogadishu" }],
  },
  keywords: [
    "conference venue Mogadishu",
    "conference hall Mogadishu",
    "meeting rooms Mogadishu",
    "auditorium Mogadishu",
    "event venue Mogadishu",
    "workshop venue Mogadishu",
    "corporate event Mogadishu",
    "NGO summit Mogadishu",
    "conference hotel Mogadishu",
    "business meeting Mogadishu",
    "event space Somalia",
    "Samaan Suites conference",
  ],
};

const VENUE_FEATURES = [
  { title: "Multi-Purpose Auditorium", desc: "Flexible large hall on the 11th floor, suitable for conferences of up to 200 attendees, product launches, and formal events." },
  { title: "Dedicated Meeting Rooms", desc: "Private rooms for board meetings, workshops, small group sessions, and interview panels — fully equipped with AV support." },
  { title: "Full Event Support", desc: "On-site catering from our ground-floor restaurant, technical support, and dedicated event coordination staff." },
  { title: "Panoramic Views", desc: "Elevated 11th-floor location offering expansive views of Mogadishu — a unique and memorable setting for any event." },
  { title: "On-Site Accommodation", desc: "60 luxury serviced suites for conference delegates and speakers — no need for separate hotel bookings." },
  { title: "Security & Access", desc: "24/7 CCTV monitoring, professional security staff, and controlled building access for complete peace of mind." },
];

const EVENT_TYPES = [
  "Corporate conferences",
  "NGO summits and workshops",
  "Government meetings",
  "Diplomatic receptions",
  "Product launches",
  "Training sessions",
  "Board meetings",
  "International forums",
];

function JsonLd() {
  const venueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Samaan Suites Conference Center",
    description: "Premier conference venue in Mogadishu, Somalia. 11th-floor auditorium and meeting rooms at Samaan Suites near Mogadishu Airport. Ideal for corporate conferences, NGO summits, workshops, and government meetings.",
    url: `${SITE_URL}/conference`,
    telephone: "+252614232739",
    address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 },
    maximumAttendeeCapacity: 200,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Auditorium", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meeting Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Catering", value: true },
      { "@type": "LocationFeatureSpecification", name: "AV Equipment", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-Site Hotel", value: true },
    ],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    containedInPlace: { "@type": "Hotel", name: "Samaan Suites", url: SITE_URL },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conference", item: `${SITE_URL}/conference` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function ConferencePage() {
  return (
    <>
      <JsonLd />
      <div className="text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol><li><Link href="/">Home</Link></li><li>Conference</li></ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=85" alt="Conference venue and auditorium at Samaan Suites Mogadishu" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">Events &amp; Conferences</p>
              <h1 className="max-w-3xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Conference Venue in Mogadishu
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
                The premier event space in Mogadishu. 11th-floor auditorium, meeting rooms, and full support — all at Samaan Suites near Mogadishu Airport.
              </p>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                Book the Venue
              </Link>
            </div>
          </div>
        </header>

        <section aria-labelledby="venue-overview" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Venue Overview</p>
              <h2 id="venue-overview" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Mogadishu&#39;s Premier Event Space
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  The entire <strong className="text-foreground">11th floor</strong> of Samaan Suites is dedicated to conferences
                  and events — making it the most comprehensive <strong className="text-foreground">conference venue in Mogadishu</strong>.
                  Whether you are hosting an <strong className="text-foreground">NGO summit</strong>, a{" "}
                  <strong className="text-foreground">corporate workshop</strong>, a{" "}
                  <strong className="text-foreground">government meeting</strong>, or a large-scale international forum,
                  Samaan Suites delivers a professional, secure, and memorable experience.
                </p>
                <p>
                  The venue features a multi-purpose <strong className="text-foreground">auditorium</strong> for large gatherings,
                  dedicated <strong className="text-foreground">meeting rooms</strong> for smaller sessions, and complete service
                  support including catering, AV equipment, and event coordination — all housed in{" "}
                  <strong className="text-foreground">Mogadishu&#39;s newest and most modern hotel</strong>.
                </p>
                <p>
                  With <strong className="text-foreground">60 luxury serviced suites</strong> on-site, delegates and speakers
                  can stay at the same venue — eliminating transport logistics and enhancing the event experience. This
                  combination of <strong className="text-foreground">event facilities and accommodation</strong> is unmatched
                  by any other venue in Mogadishu.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <ParallaxImage src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80" alt="Conference and event auditorium at Samaan Suites Mogadishu" className="aspect-4/5 w-full rounded-sm" sizes="(min-width: 1024px) 50vw, 100vw" />
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="features-heading" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
            <ScrollReveal className="mb-16 text-center">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Venue Features</p>
              <h2 id="features-heading" className="mx-auto max-w-2xl font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Everything for a Successful Event
              </h2>
            </ScrollReveal>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
              {VENUE_FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="group h-full rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                    <h3 className="font-heading text-lg font-medium text-foreground">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section aria-labelledby="events-heading" className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Event Types</p>
            <h2 id="events-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Host Any Event in Mogadishu
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Samaan Suites conference center is versatile enough to host a wide range of professional events.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-14" delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {EVENT_TYPES.map((e) => (
                <div key={e} className="flex items-center gap-3 rounded-sm border border-border bg-card px-6 py-4 transition-colors hover:border-accent/30">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{e}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="grain relative overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80" alt="Conference at Samaan Suites Mogadishu" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                Book the Conference Venue
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-white/60 leading-relaxed">
                Contact Samaan Suites to discuss your event requirements, availability, and catering options for conferences in Mogadishu.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Contact Us
                </Link>
                <a href="tel:+252614232739" className="inline-flex items-center border border-white/20 bg-white/5 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition-all hover:bg-white/10">
                  Call +252 61 4232739
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
