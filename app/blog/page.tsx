import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80";

export const metadata: Metadata = {
  title: "Top Hotels in Mogadishu – Why Samaan Suites Is the Best Choice",
  description:
    "Discover why Samaan Suites is the best hotel in Mogadishu, Somalia. Compare top Mogadishu hotels and learn what makes Samaan Suites the #1 choice for business travelers, NGOs, and diplomats.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Top Hotels in Mogadishu – Why Samaan Suites Is the Best Choice",
    description:
      "A comprehensive guide to the best hotels in Mogadishu, Somalia. Discover why Samaan Suites leads the way in luxury, security, and service.",
    url: `${SITE_URL}/blog`,
    type: "article",
  },
};

function JsonLdBlog() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top Hotels in Mogadishu – Why Samaan Suites Is the Best Choice",
    description:
      "A comprehensive guide to the best hotels in Mogadishu, Somalia, and why Samaan Suites stands out as the top choice.",
    author: { "@type": "Organization", name: "Samaan Suites" },
    publisher: {
      "@type": "Organization",
      name: "Samaan Suites",
      url: SITE_URL,
    },
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: `${SITE_URL}/blog`,
    image: `${SITE_URL}/opengraph-image`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}

export default function BlogPage() {
  return (
    <>
      <JsonLdBlog />

      <div className="min-h-screen bg-background text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>Blog</li>
          </ol>
        </nav>

        <header className="relative flex min-h-[60vh] items-end overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Luxury hotel pool and terrace at dusk, editorial feature image for Samaan Suites blog"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />

          <div className="relative z-10 w-full px-6 pb-16 pt-32 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-white/50">
                Journal
              </p>
              <h1 className="font-heading text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                Top Hotels in Mogadishu – Why Samaan Suites Is the Best Choice
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-white/50 sm:text-base">
                Published March 30, 2026 · By Samaan Suites
              </p>
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:px-8 sm:pt-20 md:pt-24">
          <ScrollReveal>
            <div className="border-b border-border pb-14">
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                Mogadishu, the vibrant capital of Somalia, is experiencing a hospitality renaissance. As more international
                organizations, NGOs, businesses, and travelers choose Mogadishu as their destination, the demand for quality hotels
                has surged. In this guide, we explore the top hotels in Mogadishu and explain why{" "}
                <strong className="font-medium text-foreground">Samaan Suites</strong> stands out as the premier choice for visitors
                in 2026.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-16">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl md:text-[2rem]">
                What Makes a Great Hotel in Mogadishu?
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                When choosing a <strong className="font-medium text-foreground">hotel in Mogadishu</strong>, travelers prioritize
                several key factors:
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">Security</strong> — 24/7 surveillance, controlled access, and
                  professional security staff
                </li>
                <li>
                  <strong className="font-medium text-foreground">Location</strong> — proximity to Mogadishu Airport and key
                  institutions
                </li>
                <li>
                  <strong className="font-medium text-foreground">Room quality</strong> — spacious, furnished suites with reliable
                  amenities
                </li>
                <li>
                  <strong className="font-medium text-foreground">Facilities</strong> — restaurant, gym, conference rooms, and
                  prayer facilities
                </li>
                <li>
                  <strong className="font-medium text-foreground">Long-stay options</strong> — serviced apartments suitable for
                  extended stays
                </li>
                <li>
                  <strong className="font-medium text-foreground">Value for money</strong> — competitive pricing for the quality
                  offered
                </li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-8 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl md:text-[2rem]">
                Why Samaan Suites Is the Best Hotel in Mogadishu
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                <strong className="font-medium text-foreground">Samaan Suites Mogadishu</strong> checks every box — and goes beyond.
                Here is why it leads the pack as the top hotel in Mogadishu:
              </p>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">
                    1. Prime Location Near Mogadishu Airport
                  </h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    Samaan Suites is located in the <strong className="font-medium text-foreground">Mogadishu Airport Area</strong>,
                    directly near Aden Abdulle International Airport (MGQ). This makes it the most convenient{" "}
                    <strong className="font-medium text-foreground">airport hotel in Somalia</strong> for arriving and departing
                    travelers. The airport area is also a hub for international organizations, embassies, and government institutions —
                    placing guests at the center of Mogadishu&#39;s professional ecosystem.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">2. 60 Luxury Serviced Suites</h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    Unlike many hotels in Mogadishu that offer standard rooms, Samaan Suites provides{" "}
                    <strong className="font-medium text-foreground">60 fully serviced suites</strong> across 10 residential floors.
                    Guests can choose between spacious one-bedroom suites and generous two-bedroom suites — all fully furnished as
                    luxury apartments. This makes Samaan Suites ideal for{" "}
                    <strong className="font-medium text-foreground">long stays in Mogadishu</strong>, family accommodation, and team
                    deployments.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">
                    3. World-Class Conference & Event Venue
                  </h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    The entire 11th floor of Samaan Suites is dedicated to conferences and events. With a multi-purpose auditorium,
                    dedicated meeting rooms, and full service support areas, it is the premier{" "}
                    <strong className="font-medium text-foreground">conference venue in Mogadishu</strong>. NGO summits, corporate
                    workshops, government meetings, and large-scale events can all be hosted on-site — a feature very few other
                    Mogadishu hotels can match.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">4. Unmatched Security</h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    Security is paramount for any <strong className="font-medium text-foreground">hotel in Mogadishu</strong>. Samaan
                    Suites features a dedicated ground-floor CCTV security control room with round-the-clock monitoring, professional
                    security infrastructure, and controlled access throughout the building. It is one of the{" "}
                    <strong className="font-medium text-foreground">safest hotels in Mogadishu</strong>.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">5. Complete Hotel Amenities</h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    Samaan Suites provides everything guests need under one roof: an on-site restaurant for daily dining, a fully
                    equipped gym and fitness center, a convenient masjid (prayer room), laundry services, a welcoming lobby and
                    reception, and two high-speed elevators serving all floors. Two basement levels provide secure parking and power
                    infrastructure.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">
                    6. Built for Business Travelers & NGOs
                  </h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    Samaan Suites was specifically designed for the professionals who work in and visit Mogadishu. Business travelers,
                    NGO teams, UN staff, diplomats, and international organizations will find everything they need for productive and
                    comfortable stays. The combination of serviced suites, conference facilities, and top-tier security makes{" "}
                    <strong className="font-medium text-foreground">Samaan Suites Mogadishu</strong> the natural choice for
                    professional visitors.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">7. Brand New Property</h3>
                  <p className="leading-[1.75] text-muted-foreground">
                    While many hotels in Mogadishu operate in aging buildings, Samaan Suites is a{" "}
                    <strong className="font-medium text-foreground">brand-new hotel</strong> built from the ground up. Every suite,
                    facility, system, and piece of infrastructure is new, modern, and designed to the highest international standards.
                    Guests enjoy a fresh, contemporary environment that reflects the best of modern Mogadishu.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 bg-secondary/60 px-6 py-12 sm:px-8 sm:py-14 mt-20 rounded-sm border border-border">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl md:text-[2rem]">
                How Samaan Suites Compares to Other Mogadishu Hotels
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Mogadishu has several hotel options, but Samaan Suites differentiates itself on multiple fronts:
              </p>
              <ul className="space-y-3 leading-[1.75] text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">More rooms</strong> — 60 serviced suites vs. smaller properties
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">Conference facilities</strong> — dedicated 11th-floor event
                    center that most competitors lack
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">Airport proximity</strong> — located directly in the Mogadishu
                    Airport Area
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">Modern construction</strong> — brand-new building with current
                    infrastructure
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">Comprehensive amenities</strong> — restaurant, gym, masjid,
                    parking, and security all on-site
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>
                    <strong className="font-medium text-foreground">Suite format</strong> — spacious apartments rather than compact
                    hotel rooms
                  </span>
                </li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl md:text-[2rem]">
                Book Your Stay at Samaan Suites Mogadishu
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                If you are planning a trip to Mogadishu — for business, humanitarian work, a conference, or a personal visit — make{" "}
                <strong className="font-medium text-foreground">Samaan Suites</strong> your home base. With 60 luxury suites, a prime
                airport location, world-class facilities, and uncompromising security, there is no better hotel in Mogadishu.
              </p>
              <p className="leading-[1.75] text-muted-foreground">
                Contact Samaan Suites today at <strong className="font-medium text-foreground">+252 61 4232739</strong> or visit our{" "}
                <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  contact page
                </Link>{" "}
                to learn more. We look forward to welcoming you to the best hotel in Mogadishu.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <footer className="mt-24 border-t border-border pt-12">
              <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">Topics</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Samaan Suites",
                  "Hotel Mogadishu",
                  "Best Hotel Mogadishu",
                  "Airport Hotel Somalia",
                  "NGO Accommodation Mogadishu",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-xs tracking-wide text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/rooms"
                  className="inline-flex items-center justify-center border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  View our rooms
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Contact us
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-accent sm:px-4"
                >
                  ← Back to home
                </Link>
              </div>
            </footer>
          </ScrollReveal>
        </article>
      </div>
    </>
  );
}
