import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

const PAGE_PATH = "/blog/ngo-accommodation-mogadishu";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "NGO Accommodation in Mogadishu – Complete Guide 2026 | Samaan Suites";

const DESCRIPTION =
  "Plan secure, comfortable NGO accommodation in Mogadishu: what humanitarian and development teams need, how Samaan Suites supports long-stay missions with suites, conference space, connectivity, and airport-area access — plus how to book for your organization.";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85";

const H1 = "NGO Accommodation in Mogadishu – Complete Guide 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NGO accommodation Mogadishu",
    "humanitarian housing Mogadishu",
    "UN accommodation Somalia",
    "long stay hotel Mogadishu",
    "secure hotel Mogadishu",
    "serviced apartments Mogadishu NGO",
    "conference venue NGO Mogadishu",
    "Mogadishu Airport hotel",
    "development organization lodging Somalia",
    "Samaan Suites NGO",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    publishedTime: "2026-04-02T00:00:00.000Z",
    modifiedTime: "2026-04-02T00:00:00.000Z",
  },
};

function JsonLdNgoArticle() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: H1,
        item: PAGE_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "Samaan Suites" },
    publisher: { "@type": "Organization", name: "Samaan Suites", url: SITE_URL },
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    mainEntityOfPage: PAGE_URL,
    image: `${SITE_URL}/opengraph-image`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}

export default function NgoAccommodationBlogPage() {
  return (
    <>
      <JsonLdNgoArticle />

      <div className="min-h-screen bg-background text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>{H1}</li>
          </ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Professional hotel lobby and reception — editorial image for NGO accommodation guide, Samaan Suites Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />

          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">
                Journal
              </p>
              <h1 className="max-w-3xl font-heading text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl">
                {H1}
              </h1>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <time dateTime="2026-04-02">April 2, 2026</time>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>By Samaan Suites</span>
              </div>
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 pb-32 pt-16 sm:px-8 sm:pt-20 md:pt-28">
          <ScrollReveal>
            <div className="border-b border-border pb-14">
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                Securing appropriate{" "}
                <Link
                  href="/ngo-accommodation-mogadishu"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  NGO accommodation in Mogadishu
                </Link>{" "}
                is one of the first operational decisions mission leads make. Supply is limited, expectations are high, and teams need
                more than a standard hotel room: they need predictable security, space for longer deployments, and infrastructure that
                supports coordination with headquarters and partners. This guide explains the landscape and how{" "}
                <strong className="font-medium text-foreground">Samaan Suites</strong> is structured to meet those requirements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-16">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                The challenge of finding NGO accommodation in Mogadishu
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Mogadishu hosts a growing community of humanitarian agencies, development programs, and multilateral partners. Demand
                for quality lodging often outpaces inventory, especially for groups that require multiple rooms or suites on the same
                property, predictable rates for extended stays, and venues where internal meetings can be held without leaving the
                compound. Properties that tick every box — modern build quality, professional security, and proximity to the airport
                and government district — remain comparatively rare. That is why teams increasingly consolidate around purpose-built
                options such as our dedicated{" "}
                <Link
                  href="/ngo-accommodation-mogadishu"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  NGO accommodation program
                </Link>{" "}
                at Samaan Suites.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                What NGO professionals need from a Mogadishu base
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Effective field accommodation supports program delivery, duty of care, and donor compliance. Most organizations evaluate
                lodging against a consistent checklist:
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">Security</strong> — controlled access, visible security operations,
                  and monitored common areas so staff can focus on their mandate.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Long-stay suitability</strong> — furnished suites with living space,
                  storage, and housekeeping that make multi-week or multi-month deployments sustainable. Compare layouts on our{" "}
                  <Link
                    href="/rooms"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    suites overview
                  </Link>
                  .
                </li>
                <li>
                  <strong className="font-medium text-foreground">Conference and meeting capacity</strong> — on-site rooms for
                  coordination sessions, donor visits, and partner workshops. Our{" "}
                  <Link
                    href="/conference"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    conference venue in Mogadishu
                  </Link>{" "}
                  on the 11th floor is designed for exactly that scale of programming.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Internet and power resilience</strong> — reliable connectivity for
                  video calls, reporting, and cloud systems; modern building services that reduce disruption during intensive work
                  periods.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Why Samaan Suites is purpose-built for NGOs
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Samaan Suites was conceived for the professionals who operate in Mogadishu: diplomats, business visitors, and
                international organizations. The property combines{" "}
                <Link
                  href="/rooms"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  sixty serviced suites
                </Link>{" "}
                across ten residential floors with restaurant, fitness, prayer facilities, and basement parking — so your team can
                live, work, and brief in one secure environment. Whether you are rotating specialists or housing a full coordination
                unit, the layout supports both privacy and collaboration without compromising operational rhythm.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Suite types for individuals and teams
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Choose the format that matches your roster. The{" "}
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  one-bedroom suite
                </Link>{" "}
                suits single assignees or couples who need a full apartment feel. The{" "}
                <Link
                  href="/rooms/two-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  two-bedroom suite
                </Link>{" "}
                accommodates shared housing for colleagues, family accompaniment, or small technical teams. Review floor plans,
                amenities, and imagery on our{" "}
                <Link
                  href="/rooms"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  rooms overview
                </Link>{" "}
                before you block inventory for your mission dates.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Conference venue for NGO summits and partner forums
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Large-scale gatherings belong in a dedicated event layer, not improvised in a hotel corridor. The entire 11th floor is
                allocated to conferences and events: auditorium-style space, breakout rooms, and support areas aligned with catering from
                our ground-floor restaurant. For annual reviews, cluster meetings, or donor roundtables, book through our{" "}
                <Link
                  href="/conference"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  conference and event page
                </Link>{" "}
                and pair delegate accommodation with on-site programming. Teams comparing{" "}
                <Link
                  href="/ngo-accommodation-mogadishu"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  NGO lodging options in Mogadishu
                </Link>{" "}
                often prioritize this combination of suites plus a single controlled venue.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">Security infrastructure</h2>
              <p className="leading-[1.75] text-muted-foreground">
                A dedicated ground-floor CCTV control room provides continuous monitoring; access to lifts and guest floors is managed
                professionally throughout the building. For organizations with strict duty-of-care policies, this integrated approach —
                physical layout, staffing, and technology — is easier to document and defend than ad hoc arrangements spread across
                multiple small properties.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Location: airport access and the city core
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Samaan Suites sits in the Mogadishu airport area, minutes from Aden Adde International Airport (MGQ), which simplifies
                arrivals, departures, and airside logistics for rotating staff. The same district places you close to many embassies,
                government offices, and institutional partners — reducing transfer time for high-priority meetings. For a focused
                overview of air-link convenience, see our guide to staying at a{" "}
                <Link
                  href="/hotel-near-mogadishu-airport"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  hotel near Mogadishu Airport
                </Link>
                . If your procurement template references{" "}
                <Link
                  href="/ngo-accommodation-mogadishu"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  vetted NGO accommodation in Mogadishu
                </Link>
                , Samaan Suites aligns with those location and security expectations.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                How to book for your organization
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Share your deployment window, headcount, suite mix, and any event or meeting requirements. Our reservations team will
                confirm availability across{" "}
                <Link
                  href="/rooms"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  residential inventory
                </Link>{" "}
                and coordinate with event staff if you need the{" "}
                <Link
                  href="/conference"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  11th-floor venue
                </Link>
                . Start the conversation on our{" "}
                <Link
                  href="/contact"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  contact page
                </Link>{" "}
                or call <strong className="font-medium text-foreground">+252 61 4232739</strong>. We routinely support NGOs, UN
                agencies, and implementing partners and can structure stays to match your finance and security protocols.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="mt-20 space-y-6 rounded-sm border border-border bg-secondary/40 px-6 py-12 sm:px-8 sm:py-14">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Next steps for your mission
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Use this checklist to align procurement, security, and travel desks before you confirm dates.
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  Review the dedicated{" "}
                  <Link
                    href="/ngo-accommodation-mogadishu"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    NGO accommodation hub
                  </Link>{" "}
                  for program-level context
                </li>
                <li>
                  Shortlist suites via the{" "}
                  <Link
                    href="/rooms/one-bedroom-suite"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    one-bedroom
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/rooms/two-bedroom-suite"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    two-bedroom
                  </Link>{" "}
                  pages, then confirm blocks on{" "}
                  <Link
                    href="/rooms"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    all room types
                  </Link>
                </li>
                <li>
                  Add summit or workshop space through the{" "}
                  <Link
                    href="/conference"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    conference venue
                  </Link>
                </li>
                <li>
                  Submit dates and roster details via{" "}
                  <Link
                    href="/contact"
                    className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    contact
                  </Link>{" "}
                  or call <strong className="font-medium text-foreground">+252 61 4232739</strong>
                </li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <footer className="mt-24 border-t border-border pt-12">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-muted-foreground">Topics</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "NGO accommodation Mogadishu",
                  "Humanitarian lodging Somalia",
                  "Long-stay suites Mogadishu",
                  "Conference venue NGO",
                  "Mogadishu Airport hotel",
                  "Secure hotel Mogadishu",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-xs tracking-wide text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/ngo-accommodation-mogadishu"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  NGO accommodation hub
                </Link>
                <Link
                  href="/conference"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  Conference venue
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark"
                >
                  View suites
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  Contact us
                </Link>
                <Link
                  href="/hotel-near-mogadishu-airport"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  Near the airport
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-accent sm:px-4"
                >
                  &larr; Back to blog
                </Link>
              </div>
            </footer>
          </ScrollReveal>
        </article>
      </div>
    </>
  );
}
