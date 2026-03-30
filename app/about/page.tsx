import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParallaxImage, ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80";

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

      <div className="flex flex-col bg-background text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>About</li>
          </ol>
        </nav>

        {/* Hero banner */}
        <header className="relative flex min-h-[60vh] items-end overflow-hidden">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Luxury hotel pool and terrace — Samaan Suites hospitality in Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />

          <div className="relative z-10 w-full px-6 pb-16 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">Our story</p>
              <h1 className="font-heading text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem]">
                About Samaan Suites
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60">
                A brand-new luxury serviced hotel built to redefine hospitality in Mogadishu, Somalia.
              </p>
            </div>
          </div>
        </header>

        {/* Brand story */}
        <section aria-labelledby="story-heading" className="mx-auto max-w-3xl px-6 py-28 lg:px-10 lg:py-36">
          <ScrollReveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Heritage &amp; vision</p>
            <h2 id="story-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
              The Samaan Suites Story
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-12 space-y-6 leading-relaxed text-muted-foreground" delay={0.08}>
            <p>
              <strong className="font-medium text-foreground">Samaan Suites</strong> was born from a simple vision: to provide
              Mogadishu with a world-class hotel that meets international standards while celebrating Somali warmth and hospitality.
              Located in the heart of the <strong className="font-medium text-foreground">Mogadishu Airport Area</strong>, Samaan
              Suites is strategically positioned near{" "}
              <strong className="font-medium text-foreground">Aden Abdulle International Airport (MGQ)</strong> to serve the growing
              number of business travelers, NGO professionals, diplomats, and visitors arriving in Somalia&#39;s capital.
            </p>
            <p>
              As Mogadishu continues to grow and attract international attention, the need for secure, modern, and premium
              accommodation has never been greater. Samaan Suites was designed to fill that gap — offering{" "}
              <strong className="font-medium text-foreground">60 fully serviced suites</strong> spread across 10 residential
              floors, a complete ground-floor hospitality complex, and an 11th-floor conference and event center.
            </p>
            <p>
              Every detail of Samaan Suites has been carefully planned — from the spacious one-bedroom and two-bedroom suites to the
              24/7 security infrastructure, from the on-site restaurant and gym to the dedicated masjid for guests. We believe a
              hotel should be more than a place to sleep — it should be a place where guests feel safe, productive, and valued.
            </p>
          </ScrollReveal>
        </section>

        {/* Location */}
        <section
          aria-labelledby="location-heading"
          className="border-y border-border bg-secondary"
        >
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-start">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Destination</p>
                  <h2 id="location-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                    Our Location in Mogadishu
                  </h2>
                </ScrollReveal>
                <ScrollReveal className="mt-10 space-y-6 leading-relaxed text-muted-foreground" delay={0.1}>
                  <p>
                    Samaan Suites is located in the <strong className="font-medium text-foreground">Mogadishu Airport Area</strong>,
                    Banaadir Region, Somalia. This is one of the most well-connected and strategically important neighborhoods in the
                    capital — home to international organizations, UN agencies, NGOs, embassies, and government offices.
                  </p>
                  <p>
                    Our proximity to <strong className="font-medium text-foreground">Aden Abdulle International Airport</strong> makes
                    Samaan Suites the ideal <strong className="font-medium text-foreground">airport hotel in Somalia</strong> for
                    travelers who need convenient access to international flights. Whether you&#39;re arriving for a conference, a
                    humanitarian mission, a business meeting, or a family visit, Samaan Suites puts you at the center of
                    Mogadishu&#39;s action.
                  </p>
                  <p>
                    The <strong className="font-medium text-foreground">Mogadishu Airport Area</strong> is also easily accessible from
                    the city center and major roads in the Banaadir region, making it convenient for local meetings, government
                    visits, and exploring Mogadishu.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal className="lg:col-span-7" delay={0.12}>
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm border border-border bg-card sm:aspect-3/4">
                  <Image
                    src={ABOUT_HERO_IMAGE}
                    alt="Resort-style pool and architecture near Mogadishu — Samaan Suites luxury hotel atmosphere"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="mt-20 lg:mt-28" delay={0.08}>
              <div className="mx-auto max-w-2xl border border-border bg-background px-8 py-12 text-center sm:px-12 sm:py-14">
                <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">Samaan Suites Address</h3>
                <address className="mt-8 space-y-2 not-italic text-sm leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">Samaan Suites</p>
                  <p>Mogadishu Airport Area</p>
                  <p>Mogadishu, Somalia</p>
                  <p className="pt-4">
                    <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Phone</span>
                    <br />
                    <a
                      href="tel:+252614232739"
                      className="mt-2 inline-block text-base text-foreground transition-colors hover:text-accent"
                    >
                      +252 61 4232739
                    </a>
                  </p>
                </address>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section aria-labelledby="mission-heading" className="mx-auto max-w-3xl px-6 py-28 lg:px-10 lg:py-36">
          <ScrollReveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Purpose</p>
            <h2 id="mission-heading" className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
              Why Samaan Suites Exists
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-12 space-y-6 leading-relaxed text-muted-foreground" delay={0.08}>
            <p>
              Mogadishu deserves a hotel that matches the ambitions of its people and the expectations of its international
              visitors. Samaan Suites was built with this belief at its core. We combine{" "}
              <strong className="font-medium text-foreground">luxury accommodation</strong>,{" "}
              <strong className="font-medium text-foreground">professional conference facilities</strong>, and{" "}
              <strong className="font-medium text-foreground">uncompromising security</strong> to deliver an experience that rivals the
              best hotels anywhere in East Africa.
            </p>
            <p>
              From our 11th-floor auditorium and conference hall to our ground-floor restaurant, gym, and masjid, every facility at
              Samaan Suites is purpose-built to serve the diverse needs of our guests. Whether you are a{" "}
              <strong className="font-medium text-foreground">business traveler</strong>, an{" "}
              <strong className="font-medium text-foreground">NGO professional</strong>, a diplomat, or a family — Samaan Suites
              Mogadishu is your home in Somalia.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-16 text-center" delay={0.12}>
            <Link
              href="/contact"
              className="inline-flex items-center border border-border bg-transparent px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-primary-foreground"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
