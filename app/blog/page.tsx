import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.samaansuites.com";

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

      <div className="flex flex-col">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Samaan Suites – Home</Link></li>
            <li>Blog</li>
          </ol>
        </nav>

        <article className="mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">BLOG</p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Top Hotels in Mogadishu – Why Samaan Suites Is the Best Choice
            </h1>
            <p className="text-sm text-foreground/40">
              Published March 30, 2026 &middot; By Samaan Suites
            </p>
          </header>

          <div className="prose-samaan space-y-6 text-foreground/60 leading-relaxed">
            <p className="text-lg text-foreground/70">
              Mogadishu, the vibrant capital of Somalia, is experiencing a hospitality renaissance. As more international organizations,
              NGOs, businesses, and travelers choose Mogadishu as their destination, the demand for quality hotels has surged. In this
              guide, we explore the top hotels in Mogadishu and explain why <strong className="text-foreground/80">Samaan Suites</strong>{" "}
              stands out as the premier choice for visitors in 2026.
            </p>

            <h2 className="mt-12! text-2xl font-bold text-foreground">
              What Makes a Great Hotel in Mogadishu?
            </h2>
            <p>
              When choosing a <strong className="text-foreground/80">hotel in Mogadishu</strong>, travelers prioritize several key factors:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-2 text-foreground/60">
              <li><strong className="text-foreground/80">Security</strong> — 24/7 surveillance, controlled access, and professional security staff</li>
              <li><strong className="text-foreground/80">Location</strong> — proximity to Mogadishu Airport and key institutions</li>
              <li><strong className="text-foreground/80">Room quality</strong> — spacious, furnished suites with reliable amenities</li>
              <li><strong className="text-foreground/80">Facilities</strong> — restaurant, gym, conference rooms, and prayer facilities</li>
              <li><strong className="text-foreground/80">Long-stay options</strong> — serviced apartments suitable for extended stays</li>
              <li><strong className="text-foreground/80">Value for money</strong> — competitive pricing for the quality offered</li>
            </ul>

            <h2 className="mt-12! text-2xl font-bold text-foreground">
              Why Samaan Suites Is the Best Hotel in Mogadishu
            </h2>
            <p>
              <strong className="text-foreground/80">Samaan Suites Mogadishu</strong> checks every box — and goes beyond. Here is why
              it leads the pack as the top hotel in Mogadishu:
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              1. Prime Location Near Mogadishu Airport
            </h3>
            <p>
              Samaan Suites is located in the <strong className="text-foreground/80">Mogadishu Airport Area</strong>, directly near
              Aden Abdulle International Airport (MGQ). This makes it the most convenient{" "}
              <strong className="text-foreground/80">airport hotel in Somalia</strong> for arriving and departing travelers. The airport
              area is also a hub for international organizations, embassies, and government institutions — placing guests at the center
              of Mogadishu&#39;s professional ecosystem.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              2. 60 Luxury Serviced Suites
            </h3>
            <p>
              Unlike many hotels in Mogadishu that offer standard rooms, Samaan Suites provides{" "}
              <strong className="text-foreground/80">60 fully serviced suites</strong> across 10 residential floors. Guests can choose
              between spacious one-bedroom suites and generous two-bedroom suites — all fully furnished as luxury apartments. This
              makes Samaan Suites ideal for <strong className="text-foreground/80">long stays in Mogadishu</strong>, family accommodation,
              and team deployments.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              3. World-Class Conference & Event Venue
            </h3>
            <p>
              The entire 11th floor of Samaan Suites is dedicated to conferences and events. With a multi-purpose auditorium, dedicated
              meeting rooms, and full service support areas, it is the premier{" "}
              <strong className="text-foreground/80">conference venue in Mogadishu</strong>. NGO summits, corporate workshops, government
              meetings, and large-scale events can all be hosted on-site — a feature very few other Mogadishu hotels can match.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              4. Unmatched Security
            </h3>
            <p>
              Security is paramount for any <strong className="text-foreground/80">hotel in Mogadishu</strong>. Samaan Suites features
              a dedicated ground-floor CCTV security control room with round-the-clock monitoring, professional security infrastructure,
              and controlled access throughout the building. It is one of the <strong className="text-foreground/80">safest hotels in
              Mogadishu</strong>.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              5. Complete Hotel Amenities
            </h3>
            <p>
              Samaan Suites provides everything guests need under one roof: an on-site restaurant for daily dining, a fully equipped
              gym and fitness center, a convenient masjid (prayer room), laundry services, a welcoming lobby and reception, and two
              high-speed elevators serving all floors. Two basement levels provide secure parking and power infrastructure.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              6. Built for Business Travelers & NGOs
            </h3>
            <p>
              Samaan Suites was specifically designed for the professionals who work in and visit Mogadishu. Business travelers, NGO
              teams, UN staff, diplomats, and international organizations will find everything they need for productive and comfortable
              stays. The combination of serviced suites, conference facilities, and top-tier security makes{" "}
              <strong className="text-foreground/80">Samaan Suites Mogadishu</strong> the natural choice for professional visitors.
            </p>

            <h3 className="mt-8! text-xl font-semibold text-foreground">
              7. Brand New Property
            </h3>
            <p>
              While many hotels in Mogadishu operate in aging buildings, Samaan Suites is a <strong className="text-foreground/80">brand-new
              hotel</strong> built from the ground up. Every suite, facility, system, and piece of infrastructure is new, modern, and
              designed to the highest international standards. Guests enjoy a fresh, contemporary environment that reflects the best of
              modern Mogadishu.
            </p>

            <h2 className="mt-12! text-2xl font-bold text-foreground">
              How Samaan Suites Compares to Other Mogadishu Hotels
            </h2>
            <p>
              Mogadishu has several hotel options, but Samaan Suites differentiates itself on multiple fronts:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-2 text-foreground/60">
              <li><strong className="text-foreground/80">More rooms</strong> — 60 serviced suites vs. smaller properties</li>
              <li><strong className="text-foreground/80">Conference facilities</strong> — dedicated 11th-floor event center that most competitors lack</li>
              <li><strong className="text-foreground/80">Airport proximity</strong> — located directly in the Mogadishu Airport Area</li>
              <li><strong className="text-foreground/80">Modern construction</strong> — brand-new building with current infrastructure</li>
              <li><strong className="text-foreground/80">Comprehensive amenities</strong> — restaurant, gym, masjid, parking, and security all on-site</li>
              <li><strong className="text-foreground/80">Suite format</strong> — spacious apartments rather than compact hotel rooms</li>
            </ul>

            <h2 className="mt-12! text-2xl font-bold text-foreground">
              Book Your Stay at Samaan Suites Mogadishu
            </h2>
            <p>
              If you are planning a trip to Mogadishu — for business, humanitarian work, a conference, or a personal visit — make{" "}
              <strong className="text-foreground/80">Samaan Suites</strong> your home base. With 60 luxury suites, a prime airport
              location, world-class facilities, and uncompromising security, there is no better hotel in Mogadishu.
            </p>
            <p>
              Contact Samaan Suites today at <strong className="text-foreground/80">+252 61 4232739</strong> or visit our{" "}
              <Link href="/contact" className="text-gold transition-colors hover:text-gold-light">contact page</Link>{" "}
              to learn more. We look forward to welcoming you to the best hotel in Mogadishu.
            </p>
          </div>

          <footer className="mt-16 border-t border-gold/20 pt-8">
            <div className="flex flex-wrap gap-3">
              {["Samaan Suites", "Hotel Mogadishu", "Best Hotel Mogadishu", "Airport Hotel Somalia", "NGO Accommodation Mogadishu"].map((tag) => (
                <span key={tag} className="rounded-full border border-gold/25 bg-navy-light/60 px-4 py-1.5 text-xs text-foreground/50">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
              >
                View Our Rooms
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-6 py-2.5 text-sm font-medium text-foreground/50 transition-colors hover:border-gold/30 hover:text-gold"
              >
                Back to Home
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
