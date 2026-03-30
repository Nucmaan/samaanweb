import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "About Samaan Suites – Our Story & Location in Mogadishu",
  description:
    "Learn about Samaan Suites, a brand-new luxury serviced hotel in Mogadishu Airport Area, Somalia. 60 suites, conference venue, restaurant, gym, masjid & 24/7 security.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Samaan Suites – Our Story & Location in Mogadishu",
    description:
      "Discover the story behind Samaan Suites, Mogadishu's newest luxury hotel near the airport. Built for business travelers, NGOs, diplomats, and long-stay guests.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

function JsonLdAbout() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLdAbout />

      <div className="flex flex-col">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Samaan Suites – Home</Link></li>
            <li>About</li>
          </ol>
        </nav>

        <header className="border-b border-gold/20 px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">OUR STORY</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            About Samaan Suites
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            A brand-new luxury serviced hotel built to redefine hospitality in Mogadishu, Somalia.
          </p>
        </header>

        {/* Brand Story */}
        <section aria-labelledby="story-heading" className="mx-auto max-w-4xl px-6 py-24">
          <h2 id="story-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
            The Samaan Suites Story
          </h2>
          <div className="space-y-5 text-foreground/60 leading-relaxed">
            <p>
              <strong className="text-foreground/80">Samaan Suites</strong> was born from a simple vision: to provide Mogadishu with
              a world-class hotel that meets international standards while celebrating Somali warmth and hospitality. Located in the
              heart of the <strong className="text-foreground/80">Mogadishu Airport Area</strong>, Samaan Suites is strategically
              positioned near <strong className="text-foreground/80">Aden Abdulle International Airport (MGQ)</strong> to serve the
              growing number of business travelers, NGO professionals, diplomats, and visitors arriving in Somalia&#39;s capital.
            </p>
            <p>
              As Mogadishu continues to grow and attract international attention, the need for secure, modern, and premium accommodation
              has never been greater. Samaan Suites was designed to fill that gap — offering{" "}
              <strong className="text-foreground/80">60 fully serviced suites</strong> spread across 10 residential floors, a complete
              ground-floor hospitality complex, and an 11th-floor conference and event center.
            </p>
            <p>
              Every detail of Samaan Suites has been carefully planned — from the spacious one-bedroom and two-bedroom suites to the
              24/7 security infrastructure, from the on-site restaurant and gym to the dedicated masjid for guests. We believe a hotel
              should be more than a place to sleep — it should be a place where guests feel safe, productive, and valued.
            </p>
          </div>
        </section>

        {/* Our Location */}
        <section aria-labelledby="location-heading" className="border-t border-gold/20 bg-navy-light/20">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <h2 id="location-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Our Location in Mogadishu
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                Samaan Suites is located in the <strong className="text-foreground/80">Mogadishu Airport Area</strong>,
                Banaadir Region, Somalia. This is one of the most well-connected and strategically important neighborhoods
                in the capital — home to international organizations, UN agencies, NGOs, embassies, and government offices.
              </p>
              <p>
                Our proximity to <strong className="text-foreground/80">Aden Abdulle International Airport</strong> makes
                Samaan Suites the ideal <strong className="text-foreground/80">airport hotel in Somalia</strong> for travelers
                who need convenient access to international flights. Whether you&#39;re arriving for a conference, a humanitarian
                mission, a business meeting, or a family visit, Samaan Suites puts you at the center of Mogadishu&#39;s action.
              </p>
              <p>
                The <strong className="text-foreground/80">Mogadishu Airport Area</strong> is also easily accessible from the
                city center and major roads in the Banaadir region, making it convenient for local meetings, government visits,
                and exploring Mogadishu.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-gold/20 bg-navy-light/40 p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Samaan Suites Address</h3>
              <address className="not-italic space-y-2 text-foreground/60">
                <p className="font-medium text-foreground/80">Samaan Suites</p>
                <p>Mogadishu Airport Area</p>
                <p>Mogadishu, Somalia</p>
                <p className="mt-4">
                  Phone:{" "}
                  <a href="tel:+252614232739" className="text-gold transition-colors hover:text-gold-light">
                    +252 61 4232739
                  </a>
                </p>
              </address>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section aria-labelledby="mission-heading" className="border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <h2 id="mission-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Why Samaan Suites Exists
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                Mogadishu deserves a hotel that matches the ambitions of its people and the expectations of its international visitors.
                Samaan Suites was built with this belief at its core. We combine <strong className="text-foreground/80">luxury
                accommodation</strong>, <strong className="text-foreground/80">professional conference facilities</strong>, and{" "}
                <strong className="text-foreground/80">uncompromising security</strong> to deliver an experience that rivals the best
                hotels anywhere in East Africa.
              </p>
              <p>
                From our 11th-floor auditorium and conference hall to our ground-floor restaurant, gym, and masjid, every facility at
                Samaan Suites is purpose-built to serve the diverse needs of our guests. Whether you are a{" "}
                <strong className="text-foreground/80">business traveler</strong>, an{" "}
                <strong className="text-foreground/80">NGO professional</strong>, a diplomat, or a family —
                Samaan Suites Mogadishu is your home in Somalia.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
