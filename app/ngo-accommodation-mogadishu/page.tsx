import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

const NGO_HERO_IMAGE = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85";
const NGO_CONTENT_IMAGE = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80";

export const metadata: Metadata = {
  title: "NGO Accommodation in Mogadishu – Samaan Suites | Secure Hotel for International Organizations",
  description:
    "Secure NGO and UN accommodation in Mogadishu at Samaan Suites. Sixty serviced suites, 24/7 CCTV, controlled access, on-site conference facilities, and long-stay rates near Aden Abdulle International Airport (MGQ) and government offices — trusted by diplomats, agencies, and international organizations operating in Somalia.",
  alternates: { canonical: `${SITE_URL}/ngo-accommodation-mogadishu` },
  openGraph: {
    title: "NGO Accommodation in Mogadishu – Samaan Suites | Secure Hotel for International Organizations",
    description:
      "Purpose-built serviced suites for NGOs, UN staff, and diplomats in Mogadishu. Security-first hotel near the airport with conference venue, controlled access, and long-stay options.",
    url: `${SITE_URL}/ngo-accommodation-mogadishu`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NGO and international organization accommodation at Samaan Suites Mogadishu",
      },
    ],
  },
  keywords: [
    "NGO accommodation Mogadishu",
    "UN hotel Mogadishu",
    "diplomat hotel Somalia",
    "international organization accommodation",
    "NGO housing Mogadishu",
    "secure hotel Mogadishu",
    "UN staff accommodation Somalia",
    "long stay hotel Mogadishu",
    "serviced suites Mogadishu",
    "Mogadishu airport hotel NGO",
    "diplomatic residence Mogadishu",
    "INGO accommodation Somalia",
    "development organization hotel Mogadishu",
    "embassy delegation hotel Somalia",
    "duty of care accommodation Mogadishu",
    "Samaan Suites NGO",
  ],
};

const WHO_WE_SERVE = [
  {
    title: "NGO Professionals",
    desc: "Field teams, programme staff, and headquarters visitors who need reliable, secure lodging with professional service in Mogadishu.",
  },
  {
    title: "UN Staff",
    desc: "Mission personnel and consultants requiring consistent standards, privacy, and proximity to the airport and key offices.",
  },
  {
    title: "Diplomats",
    desc: "Embassy and consular delegations seeking discreet, well-managed accommodation with controlled access and attentive staff.",
  },
  {
    title: "Business Travelers",
    desc: "Executives and project leads who value efficiency, suite-style comfort, and a calm base between meetings across the capital.",
  },
  {
    title: "International Media",
    desc: "Correspondents and production crews needing a secure address, stable connectivity, and flexible lengths of stay.",
  },
  {
    title: "Government Delegations",
    desc: "Official visitors and inter-agency groups hosting briefings, workshops, or bilateral engagements alongside on-site event space.",
  },
];

function JsonLd() {
  const lodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Samaan Suites",
    description:
      "Luxury serviced hotel in the Mogadishu Airport Area offering secure NGO, UN, and diplomatic accommodation, sixty suites, conference facilities, and long-stay rates near Aden Abdulle International Airport (MGQ).",
    url: SITE_URL,
    telephone: "+252614232739",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mogadishu Airport Area",
      addressLocality: "Mogadishu",
      addressRegion: "Banaadir",
      addressCountry: "SO",
    },
    geo: { "@type": "GeoCoordinates", latitude: 2.0469, longitude: 45.3182 },
    numberOfRooms: 60,
    image: NGO_CONTENT_IMAGE,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "24/7 CCTV", value: true },
      { "@type": "LocationFeatureSpecification", name: "Controlled building access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference facilities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Serviced suites", value: true },
      { "@type": "LocationFeatureSpecification", name: "Long-stay accommodation", value: true },
      { "@type": "LocationFeatureSpecification", name: "Proximity to international airport", value: true },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "NGO Accommodation",
        item: `${SITE_URL}/ngo-accommodation-mogadishu`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function NgoAccommodationPage() {
  return (
    <>
      <JsonLd />
      <div className="text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>NGO Accommodation in Mogadishu</li>
          </ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image
            src={NGO_HERO_IMAGE}
            alt="Refined hotel interior and welcoming lobby atmosphere at Samaan Suites Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">International Organizations</p>
              <h1 className="max-w-3xl font-heading text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                NGO Accommodation in Mogadishu
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
                Secure serviced suites, conference capacity, and long-stay flexibility for NGOs, UN agencies, and diplomatic missions at
                Samaan Suites near Aden Abdulle International Airport (MGQ).
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-accent bg-accent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
                >
                  Enquire About Stays
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-3 border border-white/25 bg-white/5 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Suites
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="why-ngos-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Why NGOs Choose Us</p>
              <h2 id="why-ngos-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Built for Missions That Demand Certainty
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  International organizations need more than a standard hotel: they need predictable operations, respectful discretion,
                  and infrastructure that supports extended deployments. <strong className="text-foreground">Samaan Suites</strong> was
                  designed as a full-service base in the <strong className="text-foreground">Mogadishu Airport Area</strong> — minutes from{" "}
                  <Link href="/hotel-near-mogadishu-airport" className="text-accent underline-offset-4 transition-colors hover:underline">
                    Aden Abdulle International Airport (MGQ)
                  </Link>
                  , with practical access to ministries and <strong className="text-foreground">government offices</strong> across the
                  capital, without compromising comfort or security culture.
                </p>
                <p>
                  From{" "}
                  <Link href="/rooms" className="text-accent underline-offset-4 transition-colors hover:underline">
                    sixty serviced suites
                  </Link>{" "}
                  to dedicated{" "}
                  <Link href="/conference" className="text-accent underline-offset-4 transition-colors hover:underline">
                    conference and meeting space
                  </Link>
                  , your team can house delegates, run workshops, and brief partners under one roof. Compare{" "}
                  <Link href="/rooms/one-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    one-bedroom
                  </Link>{" "}
                  and{" "}
                  <Link href="/rooms/two-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    two-bedroom
                  </Link>{" "}
                  layouts, read our standards on{" "}
                  <Link href="/about" className="text-accent underline-offset-4 transition-colors hover:underline">
                    About
                  </Link>
                  , or reach reservations through{" "}
                  <Link href="/contact" className="text-accent underline-offset-4 transition-colors hover:underline">
                    Contact
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <ParallaxImage
                src={NGO_CONTENT_IMAGE}
                alt="Elegant hotel suite living space suited to long-stay NGO and diplomatic guests in Mogadishu"
                className="aspect-4/5 w-full rounded-sm"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="security-heading" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
            <ScrollReveal className="mb-16 max-w-3xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Security &amp; Access</p>
              <h2 id="security-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                A Security-First Environment
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Duty of care begins at the perimeter. Samaan Suites maintains{" "}
                  <strong className="text-foreground">24/7 CCTV monitoring</strong> across key areas and{" "}
                  <strong className="text-foreground">controlled access</strong> to guest floors and back-of-house zones, managed by
                  trained security personnel aligned with international visitor expectations.
                </p>
                <p>
                  That same discipline supports every category of guest on our{" "}
                  <Link href="/rooms" className="text-accent underline-offset-4 transition-colors hover:underline">
                    rooms
                  </Link>{" "}
                  inventory — from solo specialists in a{" "}
                  <Link href="/rooms/one-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    one-bedroom suite
                  </Link>{" "}
                  to larger teams in{" "}
                  <Link href="/rooms/two-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    two-bedroom residences
                  </Link>
                  . For protocol questions or site coordination, contact{" "}
                  <Link href="/contact" className="text-accent underline-offset-4 transition-colors hover:underline">
                    our team
                  </Link>{" "}
                  or review how we operate on{" "}
                  <Link href="/about" className="text-accent underline-offset-4 transition-colors hover:underline">
                    About Samaan Suites
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="conference-rooms-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <ScrollReveal className="lg:col-span-6">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Meetings &amp; Events</p>
              <h2 id="conference-rooms-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Conference Facilities On Site
              </h2>
              <div className="gold-line my-8 w-12" />
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Host inductions, donor roundtables, and inter-agency sessions without leaving the property. The{" "}
                  <Link href="/conference" className="text-accent underline-offset-4 transition-colors hover:underline">
                    Samaan Suites conference center
                  </Link>{" "}
                  on the eleventh floor pairs auditorium-scale space with smaller meeting rooms, supported by catering and technical
                  coordination from the hotel team.
                </p>
                <p>
                  Pair events with{" "}
                  <Link href="/rooms/one-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    one-bedroom suites
                  </Link>{" "}
                  for solo travelers or{" "}
                  <Link href="/rooms/two-bedroom-suite" className="text-accent underline-offset-4 transition-colors hover:underline">
                    two-bedroom suites
                  </Link>{" "}
                  for shared deployments — all bookable alongside your programme calendar via{" "}
                  <Link href="/contact" className="text-accent underline-offset-4 transition-colors hover:underline">
                    Contact
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-6" delay={0.1}>
              <div className="rounded-sm border border-border bg-card p-10 lg:p-12">
                <h3 className="font-heading text-xl font-medium text-foreground">Sixty Serviced Suites</h3>
                <div className="gold-line my-6 w-10" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sixty fully serviced residences across ten residential floors give missions flexibility to scale teams up or down.
                  Explore layouts, amenities, and imagery on the{" "}
                  <Link href="/rooms" className="text-accent underline-offset-4 transition-colors hover:underline">
                    rooms overview
                  </Link>
                  .
                </p>
                <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <Link href="/rooms/one-bedroom-suite" className="font-medium text-foreground hover:text-accent">
                        One-bedroom suites
                      </Link>{" "}
                      for extended individual stays
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <Link href="/rooms/two-bedroom-suite" className="font-medium text-foreground hover:text-accent">
                        Two-bedroom suites
                      </Link>{" "}
                      for families and shared duty stations
                    </span>
                  </li>
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Arriving from abroad? See why teams also choose us as a{" "}
                  <Link href="/hotel-near-mogadishu-airport" className="text-accent underline-offset-4 transition-colors hover:underline">
                    hotel near Mogadishu Airport
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="location-rates-heading" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-10 lg:py-40">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Location &amp; Long Stay</p>
              <h2 id="location-rates-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Airport Proximity, Government Access, Preferential Rates
              </h2>
              <div className="gold-line mx-auto my-8 w-12" />
            </ScrollReveal>
            <ScrollReveal className="space-y-6 leading-relaxed text-muted-foreground" delay={0.08}>
              <p>
                Minutes from <strong className="text-foreground">Aden Abdulle International Airport (MGQ)</strong>, Samaan Suites
                reduces transfer time for rotating staff and emergency deployments. Our{" "}
                <Link href="/hotel-near-mogadishu-airport" className="text-accent underline-offset-4 transition-colors hover:underline">
                  airport-area address
                </Link>{" "}
                also keeps you within practical reach of ministries and government offices for daily coordination — while{" "}
                <Link href="/conference" className="text-accent underline-offset-4 transition-colors hover:underline">
                  on-site conference facilities
                </Link>{" "}
                reduce movement for larger gatherings.
              </p>
              <p>
                <strong className="text-foreground">Long-stay rates</strong> are structured for missions that measure assignments in
                months, not nights — combining housekeeping, front-desk coverage, and predictable billing for finance teams. Share your
                programme length and headcount through{" "}
                <Link href="/contact" className="text-accent underline-offset-4 transition-colors hover:underline">
                  Contact
                </Link>{" "}
                to receive a tailored proposal; browse suite types first on{" "}
                <Link href="/rooms" className="text-accent underline-offset-4 transition-colors hover:underline">
                  Rooms &amp; Suites
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="who-we-serve-heading" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">Who We Serve</p>
            <h2 id="who-we-serve-heading" className="mx-auto max-w-2xl font-heading text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
              Trusted by Global Missions
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Samaan Suites welcomes guests whose work shapes Somalia&apos;s future — with hospitality that matches the seriousness of the
              assignment.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {WHO_WE_SERVE.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group h-full rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="font-heading text-lg font-medium text-foreground">{card.title}</h3>
                  <div className="gold-line my-5 w-8" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="mt-14 text-center" delay={0.1}>
            <p className="text-sm text-muted-foreground">
              Planning a workshop or summit? Combine stays with the{" "}
              <Link href="/conference" className="text-accent underline-offset-4 transition-colors hover:underline">
                conference venue
              </Link>
              . New to the property? Read{" "}
              <Link href="/about" className="text-accent underline-offset-4 transition-colors hover:underline">
                About
              </Link>{" "}
              or request a security briefing through{" "}
              <Link href="/contact" className="text-accent underline-offset-4 transition-colors hover:underline">
                Contact
              </Link>
              .
            </p>
          </ScrollReveal>
        </section>

        <section className="grain relative overflow-hidden">
          <Image
            src={NGO_HERO_IMAGE}
            alt="Samaan Suites Mogadishu — secure accommodation for NGOs and international organizations"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/35" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
            <ScrollReveal>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">Reserve Your Stay</p>
              <h2 className="font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                Secure NGO Accommodation in Mogadishu
              </h2>
              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/65">
                Tell us your deployment dates, suite preferences, and security briefing requirements. Our team will respond with availability
                across{" "}
                <Link href="/rooms" className="text-white underline decoration-accent/50 underline-offset-4 hover:text-accent">
                  serviced suites
                </Link>{" "}
                and options for{" "}
                <Link href="/conference" className="text-white underline decoration-accent/50 underline-offset-4 hover:text-accent">
                  on-site meetings
                </Link>
                .
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-accent bg-accent px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center border border-white/25 bg-white/5 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  About Samaan Suites
                </Link>
                <a
                  href="tel:+252614232739"
                  className="inline-flex items-center border border-white/25 bg-white/5 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  Call +252 61 4232739
                </a>
              </div>
              <p className="mt-10 text-sm text-white/45">
                <Link href="/rooms" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  Rooms
                </Link>
                {" · "}
                <Link href="/rooms/one-bedroom-suite" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  One-bedroom
                </Link>
                {" · "}
                <Link href="/rooms/two-bedroom-suite" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  Two-bedroom
                </Link>
                {" · "}
                <Link href="/conference" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  Conference
                </Link>
                {" · "}
                <Link href="/hotel-near-mogadishu-airport" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  Airport hotel
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
