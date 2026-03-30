import type { Metadata } from "next";
import Link from "next/link";

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

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true">
      <path d="M3 7v11M21 7v11M3 18h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M3 11h18v3H3z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
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

      <div className="flex flex-col">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Samaan Suites – Home</Link></li>
            <li>Rooms</li>
          </ol>
        </nav>

        <header className="border-b border-gold/20 px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">ACCOMMODATIONS</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Rooms at Samaan Suites Mogadishu
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Choose from 60 luxury serviced suites across 10 floors — one-bedroom and two-bedroom
            fully furnished apartments designed for the ultimate comfort in Mogadishu.
          </p>
        </header>

        {/* Suite Types */}
        <section aria-labelledby="suite-types-heading" className="mx-auto w-full max-w-5xl px-6 py-24">
          <h2 id="suite-types-heading" className="sr-only">Suite Types at Samaan Suites</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-gold/20 bg-navy-light/60 p-8 transition-all hover:border-gold/25">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <BedIcon />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">One-Bedroom Suite</h3>
              <p className="mb-4 text-sm text-gold/70">3 suites per floor &middot; Floors 1–10</p>
              <p className="leading-relaxed text-foreground/60">
                Spacious one-bedroom serviced suites perfect for solo business travelers, NGO professionals,
                and diplomats. Each suite at Samaan Suites Mogadishu features a private bedroom, living area,
                and modern amenities — offering all the comforts of a luxury apartment near Mogadishu Airport.
              </p>
            </article>

            <article className="rounded-2xl border border-gold/20 bg-navy-light/60 p-8 transition-all hover:border-gold/25">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <UsersIcon />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Two-Bedroom Suite</h3>
              <p className="mb-4 text-sm text-gold/70">3 suites per floor &middot; Floors 1–10</p>
              <p className="leading-relaxed text-foreground/60">
                Generous two-bedroom serviced suites ideal for families, teams, and guests requiring extra space.
                These Mogadishu hotel rooms provide two private bedrooms, a shared living area, and premium furnishings —
                the best choice for extended stays and group accommodation in Mogadishu.
              </p>
            </article>
          </div>
        </section>

        {/* Room Amenities */}
        <section aria-labelledby="amenities-heading" className="border-t border-gold/20 bg-navy-light/20">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-3 text-center text-sm font-medium tracking-[0.2em] text-gold/70">IN-ROOM AMENITIES</p>
            <h2 id="amenities-heading" className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
              What Every Suite Includes
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ROOM_AMENITIES.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-xl border border-gold/20 bg-navy-light/40 px-5 py-4">
                  <CheckCircleIcon />
                  <span className="text-sm text-foreground/70">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyword Content */}
        <section aria-labelledby="rooms-info-heading" className="border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <h2 id="rooms-info-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Luxury Hotel Rooms in Mogadishu
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                At <strong className="text-foreground/80">Samaan Suites Mogadishu</strong>, every suite is designed to feel like home.
                Whether you are visiting for a short business trip or settling in for a long-term assignment with an NGO or international
                organization, our 60 serviced suites provide the perfect blend of comfort, privacy, and professional service.
              </p>
              <p>
                Located in the <strong className="text-foreground/80">Mogadishu Airport Area</strong>, Samaan Suites is the most
                convenient <strong className="text-foreground/80">airport hotel in Somalia</strong> for travelers arriving at
                Aden Abdulle International Airport. Each floor features 6 suites — 3 one-bedroom and 3 two-bedroom — all fully
                furnished and serviced to international hotel standards.
              </p>
              <p>
                Our suites cater to every type of guest: business travelers seeking a <strong className="text-foreground/80">hotel in
                Mogadishu</strong> with reliable amenities, NGO teams needing secure long-stay accommodation, families looking for
                spacious furnished apartments, and diplomats requiring premium serviced residences near key institutions. Samaan
                Suites delivers it all under one roof in Mogadishu.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
              >
                Enquire About Rooms
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
