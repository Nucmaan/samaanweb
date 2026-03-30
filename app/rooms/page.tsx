import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "Rooms at Samaan Suites Mogadishu – Luxury Suites & Apartments",
  description:
    "Explore 60 luxury serviced suites at Samaan Suites Mogadishu. One-bedroom and two-bedroom fully furnished apartments near Mogadishu Airport. Ideal for business, NGOs, and long stays.",
  alternates: { canonical: `${SITE_URL}/rooms` },
  openGraph: {
    title: "Rooms at Samaan Suites Mogadishu – Luxury Suites & Apartments",
    description:
      "60 fully serviced one-bedroom and two-bedroom suites across 10 floors. The best hotel rooms in Mogadishu for comfort, privacy, and extended stays.",
    url: `${SITE_URL}/rooms`,
    type: "website",
  },
};

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

const ROOM_AMENITIES = [
  "Fully furnished and serviced",
  "Air conditioning throughout",
  "High-speed Wi-Fi",
  "Private bathroom",
  "Modern kitchen facilities",
  "Daily housekeeping available",
  "Laundry service access",
  "24/7 CCTV security",
  "Two high-speed elevators",
  "On-site restaurant access",
  "Gym and fitness center",
  "On-site masjid / prayer room",
];

function JsonLdRooms() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rooms", item: `${SITE_URL}/rooms` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function RoomsPage() {
  return (
    <>
      <JsonLdRooms />

      <div className="font-sans text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>Rooms</li>
          </ol>
        </nav>

        {/* Hero banner */}
        <header className="relative flex min-h-[60vh] items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85"
            alt="Luxury suite interior at Samaan Suites hotel in Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />

          <div className="relative z-10 w-full px-6 pb-16 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">Accommodations</p>
              <h1 className="font-heading text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Rooms at Samaan Suites Mogadishu
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
                Choose from 60 luxury serviced suites across 10 floors — one-bedroom and two-bedroom fully furnished
                apartments designed for the ultimate comfort in Mogadishu.
              </p>
            </div>
          </div>
        </header>

        {/* Suite types — magazine layout */}
        <section aria-labelledby="suite-types-heading" className="border-b border-border bg-background">
          <h2 id="suite-types-heading" className="sr-only">
            Suite Types at Samaan Suites
          </h2>

          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            {/* One-bedroom */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <ScrollReveal className="lg:col-span-7">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
                  alt="One-bedroom luxury serviced suite at Samaan Suites Mogadishu near Mogadishu Airport"
                  className="aspect-4/3 w-full rounded-sm border border-border"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-5" delay={0.12}>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">One-Bedroom Suite</p>
                <h3 className="font-heading text-3xl font-medium text-foreground sm:text-4xl">Refined residence</h3>
                <p className="mt-2 text-sm text-muted-foreground">3 suites per floor &middot; Floors 1–10</p>
                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Spacious one-bedroom serviced suites perfect for solo business travelers, NGO professionals, and
                  diplomats. Each suite at Samaan Suites Mogadishu features a private bedroom, living area, and modern
                  amenities — offering all the comforts of a luxury apartment near Mogadishu Airport.
                </p>
              </ScrollReveal>
            </div>

            {/* Two-bedroom */}
            <div className="mt-28 grid items-center gap-12 lg:mt-36 lg:grid-cols-12 lg:gap-20">
              <ScrollReveal className="order-2 lg:order-1 lg:col-span-5" delay={0.12}>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Two-Bedroom Suite</p>
                <h3 className="font-heading text-3xl font-medium text-foreground sm:text-4xl">Generous living</h3>
                <p className="mt-2 text-sm text-muted-foreground">3 suites per floor &middot; Floors 1–10</p>
                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Generous two-bedroom serviced suites ideal for families, teams, and guests requiring extra space.
                  These Mogadishu hotel rooms provide two private bedrooms, a shared living area, and premium
                  furnishings — the best choice for extended stays and group accommodation in Mogadishu.
                </p>
              </ScrollReveal>
              <ScrollReveal className="order-1 lg:order-2 lg:col-span-7">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
                  alt="Two-bedroom luxury hotel suite at Samaan Suites Mogadishu for families and extended stays"
                  className="aspect-4/3 w-full rounded-sm border border-border"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section aria-labelledby="amenities-heading" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">In-room amenities</p>
              <h2 id="amenities-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                What Every Suite Includes
              </h2>
            </ScrollReveal>
            <ScrollReveal className="mt-16" delay={0.08}>
              <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {ROOM_AMENITIES.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-4 bg-background px-6 py-5 transition-colors hover:bg-secondary/60"
                  >
                    <CheckCircleIcon />
                    <span className="text-sm leading-snug text-muted-foreground">{amenity}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Keyword-rich content, NAP, CTA */}
        <section aria-labelledby="rooms-info-heading" className="bg-background">
          <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-36">
            <ScrollReveal>
              <h2 id="rooms-info-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                Luxury Hotel Rooms in Mogadishu
              </h2>
            </ScrollReveal>
            <ScrollReveal className="mt-12 text-left" delay={0.06}>
              <div className="space-y-6 leading-relaxed text-muted-foreground">
                <p>
                  At <strong className="font-medium text-foreground">Samaan Suites Mogadishu</strong>, every suite is
                  designed to feel like home. Whether you are visiting for a short business trip or settling in for a
                  long-term assignment with an NGO or international organization, our 60 serviced suites provide the
                  perfect blend of comfort, privacy, and professional service.
                </p>
                <p>
                  Located in the <strong className="font-medium text-foreground">Mogadishu Airport Area</strong>, Samaan
                  Suites is the most convenient <strong className="font-medium text-foreground">airport hotel in Somalia</strong>{" "}
                  for travelers arriving at Aden Abdulle International Airport. Each floor features 6 suites — 3
                  one-bedroom and 3 two-bedroom — all fully furnished and serviced to international hotel standards.
                </p>
                <p>
                  Our suites cater to every type of guest: business travelers seeking a{" "}
                  <strong className="font-medium text-foreground">hotel in Mogadishu</strong> with reliable amenities,
                  NGO teams needing secure long-stay accommodation, families looking for spacious furnished apartments,
                  and diplomats requiring premium serviced residences near key institutions. Samaan Suites delivers it
                  all under one roof in Mogadishu.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-16 border border-border bg-secondary/30 px-8 py-10 text-left" delay={0.1}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Visit &amp; contact</p>
              <p className="mt-4 font-heading text-xl font-medium text-foreground">Samaan Suites</p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                Mogadishu Airport Area
                <br />
                Mogadishu, Banaadir, Somalia
              </address>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="text-foreground/80">Phone:</span>{" "}
                <a href="tel:+252614232739" className="text-accent transition-colors hover:text-accent-dark">
                  +252 61 4232739
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-14" delay={0.12}>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center border border-border bg-foreground px-10 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-background transition-colors hover:bg-foreground/90"
              >
                Enquire about rooms
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
