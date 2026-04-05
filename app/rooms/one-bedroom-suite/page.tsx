import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "One-Bedroom Suite – Luxury Serviced Apartment in Mogadishu",
  description:
    "Book a spacious one-bedroom serviced suite at Samaan Suites Mogadishu. Fully furnished luxury apartment near Mogadishu Airport with private bedroom, living area, Wi-Fi, AC, and 24/7 security. Perfect for business travelers, NGOs, and diplomats.",
  alternates: { canonical: `${SITE_URL}/rooms/one-bedroom-suite` },
  openGraph: {
    title: "One-Bedroom Suite at Samaan Suites – Luxury Hotel Mogadishu",
    description:
      "Spacious one-bedroom serviced suite near Mogadishu Airport. Fully furnished with private bedroom, living area, and premium amenities. Ideal for business travelers and NGO professionals.",
    url: `${SITE_URL}/rooms/one-bedroom-suite`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "One-Bedroom Suite at Samaan Suites Mogadishu" }],
  },
  keywords: [
    "one bedroom suite Mogadishu",
    "one bedroom apartment Mogadishu",
    "serviced apartment Mogadishu",
    "furnished apartment Mogadishu airport",
    "business hotel room Mogadishu",
    "luxury suite Mogadishu",
    "hotel room near Mogadishu airport",
    "Samaan Suites one bedroom",
    "long stay apartment Mogadishu",
    "NGO accommodation Mogadishu",
  ],
};

const SUITE_FEATURES = [
  "Private bedroom with premium bedding",
  "Separate living and dining area",
  "Fully equipped modern kitchen",
  "Private bathroom with hot water",
  "High-speed Wi-Fi throughout",
  "Air conditioning in all rooms",
  "Flat-screen television",
  "Daily housekeeping available",
  "In-room safe and storage",
  "Laundry service access",
  "24/7 CCTV security",
  "Two high-speed elevators",
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", alt: "One-bedroom suite bedroom at Samaan Suites Mogadishu" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80", alt: "Living area of one-bedroom suite at Samaan Suites" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d7d9d4e1b?w=900&q=80", alt: "Modern bathroom in one-bedroom suite Mogadishu" },
];

function JsonLd() {
  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "One-Bedroom Suite",
    description: "Spacious one-bedroom serviced suite at Samaan Suites Mogadishu. Features a private bedroom, separate living area, modern kitchen, and premium amenities. 30 suites available across 10 floors near Mogadishu Airport.",
    numberOfRooms: 30,
    occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
    bed: { "@type": "BedDetails", typeOfBed: "King", numberOfBeds: 1 },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Television", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
    ],
    containedInPlace: {
      "@type": "Hotel",
      name: "Samaan Suites",
      url: SITE_URL,
      address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    url: `${SITE_URL}/rooms/one-bedroom-suite`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rooms", item: `${SITE_URL}/rooms` },
      { "@type": "ListItem", position: 3, name: "One-Bedroom Suite", item: `${SITE_URL}/rooms/one-bedroom-suite` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function OneBedroomSuitePage() {
  return (
    <>
      <JsonLd />
      <div className="text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rooms">Rooms</Link></li>
            <li>One-Bedroom Suite</li>
          </ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85"
            alt="One-bedroom luxury serviced suite at Samaan Suites Mogadishu near Mogadishu Airport"
            fill priority className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">
                <Link href="/rooms" className="transition-colors hover:text-white/60">Rooms</Link>
                <span>/</span>
                <span className="text-white/60">One-Bedroom Suite</span>
              </div>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                One-Bedroom Suite
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
                Spacious luxury serviced apartment perfect for business travelers, NGO professionals,
                and diplomats staying in Mogadishu.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/40">
                <span>30 suites available</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>3 per floor &middot; Floors 1–10</span>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </header>

        <section aria-labelledby="overview-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Suite Overview</p>
              <h2 id="overview-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Refined Comfort in Mogadishu
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  The <strong className="text-foreground">One-Bedroom Suite</strong> at Samaan Suites is designed for guests
                  who appreciate space, privacy, and modern comfort. Each suite features a{" "}
                  <strong className="text-foreground">private bedroom</strong> with premium bedding, a{" "}
                  <strong className="text-foreground">separate living and dining area</strong>, and a{" "}
                  <strong className="text-foreground">fully equipped kitchen</strong> — everything you need for a comfortable
                  short or long-term stay in Mogadishu.
                </p>
                <p>
                  With 30 one-bedroom suites spread across 10 floors, these are the most popular room type at{" "}
                  <strong className="text-foreground">Samaan Suites Mogadishu</strong> — ideal for solo{" "}
                  <strong className="text-foreground">business travelers</strong>,{" "}
                  <strong className="text-foreground">NGO professionals</strong>, and{" "}
                  <strong className="text-foreground">diplomats</strong> who need a{" "}
                  <strong className="text-foreground">luxury serviced apartment near Mogadishu Airport</strong>.
                </p>
                <p>
                  Every suite includes complimentary high-speed Wi-Fi, air conditioning, a flat-screen TV, and access
                  to all hotel amenities including the ground-floor restaurant, gym, masjid, and 24/7 security.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Book This Suite
                </Link>
                <Link href="/rooms/two-bedroom-suite" className="inline-flex items-center border border-border px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent">
                  View Two-Bedroom Suite
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
                alt="Interior of one-bedroom luxury suite at Samaan Suites Mogadishu"
                className="aspect-4/5 w-full rounded-sm"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </ScrollReveal>
          </div>
        </section>

        <section aria-label="Suite gallery" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <StaggerContainer className="grid gap-4 sm:grid-cols-3" staggerDelay={0.08}>
              {GALLERY.map((img) => (
                <StaggerItem key={img.src}>
                  <div className="group relative aspect-4/3 overflow-hidden rounded-sm">
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw, 33vw" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section aria-labelledby="features-heading" className="mx-auto max-w-6xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Suite Amenities</p>
            <h2 id="features-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              What Your Suite Includes
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-16" delay={0.08}>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SUITE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-4 bg-background px-7 py-6 transition-colors hover:bg-secondary/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 shrink-0 text-accent" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="text-sm leading-snug text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:px-10 lg:py-40">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                Ready to Book Your One-Bedroom Suite?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
                Contact Samaan Suites today to reserve your one-bedroom luxury apartment in Mogadishu.
                Available for short stays, long-term accommodation, and corporate bookings.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Reserve Now
                </Link>
                <a href="tel:+252614232739" className="inline-flex items-center border border-border px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent">
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
