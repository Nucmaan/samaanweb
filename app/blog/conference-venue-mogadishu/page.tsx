import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

const PAGE_PATH = "/blog/conference-venue-mogadishu";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const ARTICLE_TITLE =
  "Best Conference Venue in Mogadishu 2026 – Samaan Suites Event Center";

const DESCRIPTION =
  "Plan corporate meetings, summits, and workshops at Samaan Suites: Mogadishu's premier conference venue with an 11th-floor auditorium, meeting rooms, catering, and 60 on-site suites near the airport.";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=85";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog/conference-venue-mogadishu` },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/conference-venue-mogadishu`,
    type: "article",
    publishedTime: "2026-04-01T00:00:00.000Z",
    modifiedTime: "2026-04-01T00:00:00.000Z",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Conference and event space at Samaan Suites Mogadishu",
      },
    ],
  },
  keywords: [
    "conference venue Mogadishu",
    "event center Mogadishu",
    "Samaan Suites conference",
    "Samaan Suites Event Center",
    "corporate meetings Somalia",
    "auditorium Mogadishu",
    "business events Mogadishu",
    "Mogadishu conference hotel",
    "meeting rooms Mogadishu",
    "NGO summit venue Somalia",
    "Mogadishu Airport events",
  ],
};

function JsonLdArticle() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: ARTICLE_TITLE,
        item: PAGE_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "Samaan Suites" },
    publisher: { "@type": "Organization", name: "Samaan Suites", url: SITE_URL },
    datePublished: "2026-04-01",
    dateModified: "2026-04-01",
    mainEntityOfPage: PAGE_URL,
    image: HERO_IMAGE,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}

export default function ConferenceVenueBlogPage() {
  return (
    <>
      <JsonLdArticle />

      <div className="min-h-screen bg-background text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>{ARTICLE_TITLE}</li>
          </ol>
        </nav>

        <header className="grain relative flex min-h-[65vh] items-end overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Professional conference and event space with seating and stage lighting, editorial image for Samaan Suites Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />

          <div className="relative z-10 w-full px-6 pb-20 pt-32 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">Journal</p>
              <h1 className="max-w-3xl font-heading text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl">
                {ARTICLE_TITLE}
              </h1>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <time dateTime="2026-04-01">April 1, 2026</time>
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
                Mogadishu is a growing hub for international organizations, government dialogue, and private-sector investment. Choosing
                the right{" "}
                <Link
                  href="/conference"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  conference venue in Mogadishu
                </Link>{" "}
                shapes how smoothly your program runs, how delegates experience your brand, and how confidently you can host high-profile
                guests. This guide explains what to look for and why{" "}
                <strong className="font-medium text-foreground">Samaan Suites Event Center</strong> on the 11th floor is structured to
                meet those expectations in 2026. For context on the property, see{" "}
                <Link href="/about" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  about Samaan Suites
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-16">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                What makes a great conference venue in Mogadishu
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Professional hosts evaluate venues against a practical checklist: capacity, acoustics, breakout options, catering flow,
                and the ability to secure the building for sensitive discussions. In Mogadishu, those requirements carry extra weight
                because delegates often travel from abroad and need predictable logistics from arrival to departure.
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">Purpose-built event floors</strong> — dedicated space for plenary
                  sessions, side meetings, and registration rather than improvised hotel lobbies
                </li>
                <li>
                  <strong className="font-medium text-foreground">Flexible room formats</strong> — auditorium-style seating, boardroom
                  layouts, and smaller rooms for bilateral or technical sessions
                </li>
                <li>
                  <strong className="font-medium text-foreground">Catering and service support</strong> — coordinated coffee breaks,
                  working lunches, and hospitality staff who understand event pacing
                </li>
                <li>
                  <strong className="font-medium text-foreground">Guest accommodation on site</strong> — reducing transport risk and keeping
                  speakers and VIPs close to the program; browse{" "}
                  <Link href="/rooms" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                    our suites
                  </Link>{" "}
                  for capacity and layouts
                </li>
                <li>
                  <strong className="font-medium text-foreground">Security and access control</strong> — monitored entry, professional
                  protocols, and infrastructure suited to official and international gatherings
                </li>
                <li>
                  <strong className="font-medium text-foreground">Airport proximity</strong> — efficient transfers for fly-in delegates,
                  especially when schedules are tight
                </li>
              </ul>
              <p className="leading-[1.75] text-muted-foreground">
                Facility details, imagery, and service notes for the dedicated event level are on the{" "}
                <Link href="/conference" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  conference and events page
                </Link>
                . If you are comparing options for your organization,{" "}
                <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  contact our team
                </Link>{" "}
                for a structured walkthrough.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                Why Samaan Suites is the best choice
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                The entire{" "}
                <strong className="font-medium text-foreground">11th floor</strong> at Samaan Suites is reserved for conferences and
                events. That single-purpose layout means your program is not competing with casual lobby traffic or ad hoc meetings
                elsewhere in the building. The floor combines a multi-purpose{" "}
                <strong className="font-medium text-foreground">auditorium</strong>, dedicated{" "}
                <strong className="font-medium text-foreground">meeting rooms</strong> for breakouts and closed sessions, and support
                areas that keep registration, AV, and service flows discreet.{" "}
                <strong className="font-medium text-foreground">Catering</strong> is coordinated with the hotel restaurant so coffee
                breaks, working lunches, and receptions align with your run of show.
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">11th-floor Event Center</strong> — one contiguous event layer designed
                  for conferences, not retrofitted guest corridors
                </li>
                <li>
                  <strong className="font-medium text-foreground">Auditorium</strong> — suited to plenary sessions, keynotes, and
                  larger audiences
                </li>
                <li>
                  <strong className="font-medium text-foreground">Meeting rooms</strong> — parallel tracks, workshops, and bilateral
                  meetings without leaving the property
                </li>
                <li>
                  <strong className="font-medium text-foreground">Catering partnership</strong> — on-property dining expertise tied to the
                  restaurant for consistent quality and timing
                </li>
              </ul>
              <p className="leading-[1.75] text-muted-foreground">
                Start planning on the{" "}
                <Link href="/conference" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  conference venue overview
                </Link>
                , then confirm dates and production details through the{" "}
                <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  contact page
                </Link>
                . Delegates who need apartment-style stays can review the{" "}
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  one-bedroom suite
                </Link>{" "}
                as a representative guest experience.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">Types of events that can be hosted</h2>
              <p className="leading-[1.75] text-muted-foreground">
                The Event Center supports formats that require credibility, space, and operational discipline. Typical programs include
                corporate launches and annual meetings, training academies, donor and partner roundtables, government and multilateral
                workshops, and sector-specific summits where NGOs, embassies, and private firms share the agenda.
              </p>
              <p className="leading-[1.75] text-muted-foreground">
                Organizers often pair the venue with overnight stays for steering committees and out-of-town panels. The{" "}
                <Link href="/rooms" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  rooms overview
                </Link>{" "}
                describes how suite inventory supports individuals and teams; the{" "}
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  one-bedroom suite
                </Link>{" "}
                remains a strong default for speakers during multi-day programs. Background on how the hotel serves professional travelers
                is on{" "}
                <Link href="/about" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  about us
                </Link>
                .
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                On-site accommodation advantage: 60 suites
              </h2>
              <p className="leading-[1.75] text-muted-foreground">
                Samaan Suites offers{" "}
                <strong className="font-medium text-foreground">60 serviced suites</strong> across ten residential floors. For conference
                producers, that scale matters: moderators, technical crews, sponsors, and international delegates can stay in the same
                building as the main session, with minimal movement between guest floors and the 11th-floor event level.
              </p>
              <p className="leading-[1.75] text-muted-foreground">
                Longer programs benefit from full apartments rather than compact standard rooms. Compare layouts and imagery on{" "}
                <Link href="/rooms" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  our rooms page
                </Link>
                , and review{" "}
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  one-bedroom suite details
                </Link>{" "}
                for a representative stay experience. When you are ready to block inventory,{" "}
                <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  contact reservations
                </Link>{" "}
                with your rooming list and event dates.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="space-y-6 pt-20">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">Security for high-profile events</h2>
              <p className="leading-[1.75] text-muted-foreground">
                Official and international gatherings depend on discreet, reliable security. Samaan Suites maintains a dedicated
                ground-floor CCTV control room with continuous monitoring, controlled access throughout the property, and professional
                security infrastructure appropriate for discerning clients.
              </p>
              <p className="leading-[1.75] text-muted-foreground">
                Combining that environment with on-site accommodation reduces exposure during transfers and simplifies coordination for
                chiefs of staff, protocol teams, and visiting security details. For how the property positions itself in the market, read{" "}
                <Link href="/about" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  our story
                </Link>
                ; for event-specific questions, reach out via{" "}
                <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                  contact
                </Link>
                .
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <section className="mt-20 space-y-6 rounded-sm border border-border bg-secondary/40 px-6 py-12 sm:px-8 sm:py-14">
              <h2 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">How to book</h2>
              <p className="leading-[1.75] text-muted-foreground">
                Share your dates, expected headcount, and session structure (plenary, breakouts, meals). Our events team will confirm
                room combinations on the 11th floor, catering notes, and any suite blocks you need for speakers or sponsors.
              </p>
              <ul className="space-y-3 border-l-2 border-accent/30 pl-6 leading-[1.75] text-muted-foreground">
                <li>
                  Review facilities on the{" "}
                  <Link href="/conference" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                    conference page
                  </Link>
                </li>
                <li>
                  Submit an inquiry through{" "}
                  <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                    contact
                  </Link>{" "}
                  or call <strong className="font-medium text-foreground">+252 61 4232739</strong>
                </li>
                <li>
                  Reserve guest rooms early via{" "}
                  <Link href="/rooms" className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">
                    rooms
                  </Link>{" "}
                  so your rooming list stays aligned with the event schedule
                </li>
              </ul>
              <p className="leading-[1.75] text-muted-foreground">
                For suite-specific questions before you finalize blocks, the{" "}
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  one-bedroom suite
                </Link>{" "}
                page summarizes layout and amenities many event clients prefer.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <footer className="mt-24 border-t border-border pt-12">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-muted-foreground">Topics</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Conference venue Mogadishu",
                  "Samaan Suites Event Center",
                  "11th floor auditorium",
                  "Meeting rooms Mogadishu",
                  "Corporate events Somalia",
                  "Secure conference hotel",
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
                  href="/conference"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  Conference venue
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  View suites
                </Link>
                <Link
                  href="/rooms/one-bedroom-suite"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  One-bedroom suite
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark"
                >
                  Contact us
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
