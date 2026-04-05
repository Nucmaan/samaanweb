import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "Two-Bedroom Suite – Family & Team Apartment in Mogadishu",
  description:
    "Book a spacious two-bedroom serviced suite at Samaan Suites Mogadishu. Luxury furnished apartment near Mogadishu Airport with two private bedrooms, living area, kitchen, and full hotel amenities. Ideal for families, NGO teams, and extended stays.",
  alternates: { canonical: `${SITE_URL}/rooms/two-bedroom-suite` },
  openGraph: {
    title: "Two-Bedroom Suite at Samaan Suites – Family Hotel Mogadishu",
    description:
      "Generous two-bedroom serviced suite near Mogadishu Airport. Two private bedrooms, shared living area, and premium furnishings. Perfect for families, teams, and extended stays.",
    url: `${SITE_URL}/rooms/two-bedroom-suite`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Two-Bedroom Suite at Samaan Suites Mogadishu" }],
  },
  keywords: [
    "two bedroom suite Mogadishu",
    "two bedroom apartment Mogadishu",
    "family hotel Mogadishu",
    "family accommodation Mogadishu",
    "team accommodation Mogadishu",
    "extended stay Mogadishu",
    "furnished apartment Mogadishu",
    "Samaan Suites two bedroom",
    "large hotel room Mogadishu",
    "group accommodation Somalia",
  ],
};

const SUITE_FEATURES = [
  "Two private bedrooms with premium bedding",
  "Shared living and dining area",
  "Fully equipped modern kitchen",
  "Two private bathrooms with hot water",
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
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80", alt: "Two-bedroom suite living area at Samaan Suites Mogadishu" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", alt: "Bedroom in two-bedroom suite at Samaan Suites" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80", alt: "Interior details of two-bedroom suite Mogadishu" },
];

function JsonLd() {
  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Two-Bedroom Suite",
    description: "Generous two-bedroom serviced suite at Samaan Suites Mogadishu. Features two private bedrooms, shared living area, modern kitchen, and premium amenities. 30 suites available across 10 floors near Mogadishu Airport.",
    numberOfRooms: 30,
    occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 4 },
    bed: [
      { "@type": "BedDetails", typeOfBed: "King", numberOfBeds: 1 },
      { "@type": "BedDetails", typeOfBed: "Queen", numberOfBeds: 1 },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Two Bathrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Television", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
    ],
    containedInPlace: {
      "@type": "Hotel",
      name: "Samaan Suites",
      url: SITE_URL,
      address: { "@type": "PostalAddress", streetAddress: "Mogadishu Airport Area", addressLocality: "Mogadishu", addressRegion: "Banaadir", addressCountry: "SO" },
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    url: `${SITE_URL}/rooms/two-bedroom-suite`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rooms", item: `${SITE_URL}/rooms` },
      { "@type": "ListItem", position: 3, name: "Two-Bedroom Suite", item: `${SITE_URL}/rooms/two-bedroom-suite` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function TwoBedroomSuitePage() {
  return (
    <>
      <JsonLd />
      <div className="text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol><li><Link href="/">Home</Link></li><li><Link href="/rooms">Rooms</Link></li><li>Two-Bedroom Suite</li></ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85" alt="Two-bedroom luxury suite at Samaan Suites hotel in Mogadishu" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">
                <Link href="/rooms" className="transition-colors hover:text-white/60">Rooms</Link>
                <span>/</span>
                <span className="text-white/60">Two-Bedroom Suite</span>
              </div>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Two-Bedroom Suite
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
                Generous luxury apartment for families, NGO teams, and guests who need extra space
                during their stay in Mogadishu.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/40">
                <span>30 suites available</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>3 per floor &middot; Floors 1–10</span>
              </div>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
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
                Space to Breathe in Mogadishu
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  The <strong className="text-foreground">Two-Bedroom Suite</strong> at Samaan Suites offers the most generous
                  living space of any hotel room in Mogadishu. With <strong className="text-foreground">two private bedrooms</strong>,
                  a <strong className="text-foreground">shared living and dining area</strong>, and a{" "}
                  <strong className="text-foreground">fully equipped kitchen</strong>, these suites function as luxury apartments
                  while delivering full hotel service.
                </p>
                <p>
                  Designed for <strong className="text-foreground">families visiting Mogadishu</strong>,{" "}
                  <strong className="text-foreground">NGO teams</strong> on deployment,{" "}
                  <strong className="text-foreground">diplomatic delegations</strong>, and anyone requiring additional
                  space for <strong className="text-foreground">extended stays in Mogadishu</strong>. With 30 two-bedroom
                  suites across 10 floors, availability is generous.
                </p>
                <p>
                  Each suite includes two full bathrooms, complimentary high-speed Wi-Fi, air conditioning throughout,
                  and access to all <strong className="text-foreground">Samaan Suites</strong> amenities — restaurant,
                  gym, masjid, conference facilities, and 24/7 security.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">
                  Book This Suite
                </Link>
                <Link href="/rooms/one-bedroom-suite" className="inline-flex items-center border border-border px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent">
                  View One-Bedroom Suite
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <ParallaxImage src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80" alt="Interior of two-bedroom luxury suite at Samaan Suites Mogadishu" className="aspect-4/5 w-full rounded-sm" sizes="(min-width: 1024px) 50vw, 100vw" />
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
            <h2 id="features-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">What Your Suite Includes</h2>
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
              <h2 className="font-heading text-3xl font-medium text-foreground sm:text-4xl">Ready to Book Your Two-Bedroom Suite?</h2>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
                Contact Samaan Suites today to reserve your two-bedroom luxury apartment in Mogadishu.
                Perfect for families, teams, and extended-stay guests.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark">Reserve Now</Link>
                <a href="tel:+252614232739" className="inline-flex items-center border border-border px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent">Call +252 61 4232739</a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
