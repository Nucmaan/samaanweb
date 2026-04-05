import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "Hotel Near Mogadishu Airport – Samaan Suites | Best Airport Hotel Somalia",
  description:
    "Looking for a hotel near Mogadishu Airport? Samaan Suites is the closest luxury hotel to Aden Abdulle International Airport (MGQ). 60 serviced suites, conference venue, restaurant, gym & 24/7 security. The best airport hotel in Somalia.",
  alternates: { canonical: `${SITE_URL}/hotel-near-mogadishu-airport` },
  openGraph: {
    title: "Hotel Near Mogadishu Airport – Samaan Suites",
    description: "The closest luxury hotel to Mogadishu Airport. 60 serviced suites, conference venue, and full amenities at Samaan Suites.",
    url: `${SITE_URL}/hotel-near-mogadishu-airport`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Samaan Suites – Hotel Near Mogadishu Airport" }],
  },
  keywords: [
    "hotel near Mogadishu airport",
    "Mogadishu airport hotel",
    "airport hotel Somalia",
    "Aden Abdulle airport hotel",
    "hotel near Mogadishu international airport",
    "MGQ airport hotel",
    "closest hotel to Mogadishu airport",
    "best airport hotel Mogadishu",
    "Samaan Suites airport",
    "hotel Mogadishu Airport Area",
    "accommodation near Mogadishu airport",
    "luxury hotel near airport Mogadishu",
  ],
};

function JsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Samaan Suites",
    description: "Luxury serviced hotel located in the Mogadishu Airport Area, directly near Aden Abdulle International Airport (MGQ). The closest and best airport hotel in Mogadishu, Somalia.",
    url: SITE_URL,
    telephone: "+252614232739",
    address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 },
    hasMap: "https://www.google.com/maps?q=2.0469,45.3182",
    numberOfRooms: 60,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Airport Proximity", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference Center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gym", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    ],
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$$",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hotel Near Mogadishu Airport", item: `${SITE_URL}/hotel-near-mogadishu-airport` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function HotelNearMogadishuAirportPage() {
  return (
    <>
      <JsonLd />
      <div className="text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol><li><Link href="/">Home</Link></li><li>Hotel Near Mogadishu Airport</li></ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85" alt="Samaan Suites luxury hotel near Mogadishu Airport, Somalia" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">Location</p>
              <h1 className="max-w-3xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Hotel Near Mogadishu Airport
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
                Samaan Suites is the closest luxury hotel to Aden Abdulle International Airport (MGQ) —
                the best airport hotel in Mogadishu, Somalia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Book Now
                </Link>
                <Link href="/rooms" className="inline-flex items-center border border-white/20 bg-white/5 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition-all hover:bg-white/10">
                  View Suites
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="location-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Airport Hotel</p>
              <h2 id="location-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                The Best Hotel Near Mogadishu Airport
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Samaan Suites</strong> is located in the{" "}
                  <strong className="text-foreground">Mogadishu Airport Area</strong>, directly adjacent to{" "}
                  <strong className="text-foreground">Aden Abdulle International Airport (MGQ)</strong>. This makes
                  Samaan Suites the most convenient and closest{" "}
                  <strong className="text-foreground">hotel near Mogadishu Airport</strong> for arriving and
                  departing travelers.
                </p>
                <p>
                  Whether you are landing after a long international flight or need a reliable base before
                  departing Mogadishu, Samaan Suites offers <strong className="text-foreground">60 luxury serviced
                  suites</strong> just minutes from the airport terminal. No long commutes, no security concerns —
                  just world-class accommodation at your doorstep.
                </p>
                <p>
                  The Mogadishu Airport Area is also a hub for{" "}
                  <Link href="/ngo-accommodation-mogadishu" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                    international organizations, NGOs, and UN agencies
                  </Link>, making Samaan Suites the natural choice for professionals working in Somalia.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <ParallaxImage src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80" alt="Samaan Suites hotel location near Aden Abdulle International Airport Mogadishu" className="aspect-4/5 w-full rounded-sm" sizes="(min-width: 1024px) 50vw, 100vw" />
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="suites-heading" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
            <ScrollReveal className="text-center">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Accommodation</p>
              <h2 id="suites-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                60 Luxury Suites Near the Airport
              </h2>
            </ScrollReveal>
            <ScrollReveal className="mt-12 space-y-5 leading-relaxed text-muted-foreground" delay={0.08}>
              <p>
                Samaan Suites offers two suite types across 10 residential floors, totaling 60 fully serviced apartments:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Link href="/rooms/one-bedroom-suite" className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-accent">One-Bedroom Suite</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Private bedroom, living area, kitchen — perfect for solo business travelers and NGO professionals.
                  </p>
                  <span className="mt-4 inline-block text-[12px] font-medium uppercase tracking-[0.18em] text-accent">View suite &rarr;</span>
                </Link>
                <Link href="/rooms/two-bedroom-suite" className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-accent">Two-Bedroom Suite</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Two private bedrooms, shared living area — ideal for families, teams, and extended stays.
                  </p>
                  <span className="mt-4 inline-block text-[12px] font-medium uppercase tracking-[0.18em] text-accent">View suite &rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="amenities-heading" className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Hotel Amenities</p>
            <h2 id="amenities-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Everything You Need Near the Airport
            </h2>
            <div className="gold-line my-8 w-12" />
          </ScrollReveal>
          <ScrollReveal className="space-y-6 leading-relaxed text-muted-foreground" delay={0.08}>
            <p>
              Samaan Suites is not just an <strong className="text-foreground">airport hotel</strong> — it is a complete
              hospitality experience. On-site amenities include:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Ground-floor restaurant",
                "Fully equipped gym and fitness center",
                "On-site masjid (prayer room)",
                "24/7 CCTV security and controlled access",
                "Two basement parking levels",
                "Two high-speed elevators",
                "Lobby and reception",
                "Laundry service",
              ].map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p>
              The <Link href="/conference" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                11th-floor conference center
              </Link> includes an auditorium and meeting rooms — making Samaan Suites the only{" "}
              <strong className="text-foreground">airport hotel in Mogadishu</strong> with dedicated event facilities.
            </p>
          </ScrollReveal>
        </section>

        <section aria-labelledby="who-heading" className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Who We Serve</p>
              <h2 id="who-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Designed for Every Traveler
              </h2>
              <div className="gold-line my-8 w-12" />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 leading-relaxed text-muted-foreground" delay={0.08}>
              <p>
                Our <strong className="text-foreground">hotel near Mogadishu Airport</strong> caters to a wide range of guests:
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6">
                <li><strong className="text-foreground">Business travelers</strong> arriving for meetings, conferences, and corporate visits</li>
                <li><Link href="/ngo-accommodation-mogadishu" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">NGO professionals and UN staff</Link> deployed to Mogadishu</li>
                <li><strong className="text-foreground">Diplomats and government officials</strong> requiring secure, premium accommodation</li>
                <li><strong className="text-foreground">Families</strong> visiting Mogadishu who need spacious, comfortable suites</li>
                <li><strong className="text-foreground">Transit travelers</strong> needing a convenient overnight stay near the airport</li>
              </ul>
              <p>
                Learn more about our <Link href="/about" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">story and mission</Link>,
                or <Link href="/rooms" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">explore our suite types</Link>.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="grain relative overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" alt="Samaan Suites near Mogadishu Airport" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                Book Your Airport Hotel in Mogadishu
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-white/60 leading-relaxed">
                Samaan Suites is the best hotel near Mogadishu Airport. Contact us to reserve your stay.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Reserve Your Stay
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
