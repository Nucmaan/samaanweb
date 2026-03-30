import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://www.samaansuites.com";

export const metadata: Metadata = {
  title: "Contact Samaan Suites Mogadishu – Phone, Address & Map",
  description:
    "Contact Samaan Suites hotel in Mogadishu. Phone: +252 61 4232739. Located in Mogadishu Airport Area, Somalia. Get directions, enquire about rooms, or book your stay.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Samaan Suites Mogadishu – Phone, Address & Map",
    description:
      "Reach Samaan Suites, the best hotel near Mogadishu Airport. Call +252 61 4232739 or visit us in Mogadishu Airport Area, Somalia.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-6 w-6" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-6 w-6" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function JsonLdContact() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Samaan Suites",
    telephone: "+252614232739",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mogadishu Airport Area",
      addressLocality: "Mogadishu",
      addressRegion: "Banaadir",
      addressCountry: "SO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.0469,
      longitude: 45.3182,
    },
    hasMap: "https://www.google.com/maps?q=2.0469,45.3182",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLdContact />

      <div className="bg-background text-foreground">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <Link href="/">Samaan Suites – Home</Link>
            </li>
            <li>Contact</li>
          </ol>
        </nav>

        <header className="relative flex min-h-[60vh] items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85"
            alt="Samaan Suites hotel lobby and reception in Mogadishu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />

          <div className="relative z-10 w-full px-6 pb-16 pt-32 lg:px-10">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">Get in touch</p>
              <h1 className="font-heading text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
                Contact Samaan Suites
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                Reach out for room enquiries, conference bookings, or any questions about your stay in Mogadishu.
              </p>
            </div>
          </div>
        </header>

        <section aria-labelledby="contact-info-heading" className="px-6 py-24 md:py-32">
          <h2 id="contact-info-heading" className="sr-only">
            Contact Information
          </h2>
          <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3 md:gap-0 md:border md:border-border">
            <ScrollReveal className="bg-background p-10 md:border-r md:border-border md:p-14">
              <div className="mb-8 flex justify-center md:justify-start">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-border text-accent">
                  <PhoneIcon />
                </span>
              </div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Phone</p>
              <a
                href="tel:+252614232739"
                className="font-heading text-xl text-foreground transition-colors hover:text-accent md:text-2xl"
              >
                +252 61 4232739
              </a>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Available 24/7 for reservations and enquiries.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="bg-background p-10 md:border-r md:border-border md:p-14">
              <div className="mb-8 flex justify-center md:justify-start">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-border text-accent">
                  <MapPinIcon />
                </span>
              </div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Address</p>
              <address className="not-italic">
                <p className="font-heading text-xl text-foreground md:text-2xl">Samaan Suites</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Mogadishu Airport Area
                  <br />
                  Mogadishu, Somalia
                </p>
              </address>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="bg-background p-10 md:p-14">
              <div className="mb-8 flex justify-center md:justify-start">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-border text-accent">
                  <ClockIcon />
                </span>
              </div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Hours</p>
              <p className="font-heading text-xl text-foreground md:text-2xl">Open around the clock</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                24 hours, seven days a week.
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                Check-in 2:00 PM · Check-out 12:00 PM
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="map-heading" className="border-t border-border bg-secondary/40 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal className="mb-12 text-center md:mb-16">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Location</p>
              <h2 id="map-heading" className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Find Samaan Suites on the Map
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Samaan Suites Mogadishu location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.317323538119!2d45.305231875216776!3d2.028805097952938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58410056f1e2a5%3A0xd863c025990adcb!2sSamaan%20Suites!5e0!3m2!1sen!2sso!4v1774857450463!5m2!1sen!2sso"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Samaan Suites · Mogadishu Airport Area, Mogadishu, Somalia · Near Aden Abdulle International Airport (MGQ)
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="contact-seo-heading" className="border-t border-border px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal className="mb-14 text-center md:mb-16">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">Arriving</p>
              <h2
                id="contact-seo-heading"
                className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl"
              >
                How to Reach Samaan Suites in Mogadishu
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="space-y-8 text-base leading-[1.85] text-muted-foreground">
                <p>
                  <strong className="font-medium text-foreground">Samaan Suites</strong> is located in the Mogadishu Airport
                  Area, one of the most accessible areas in the city. If you are arriving from{" "}
                  <strong className="font-medium text-foreground">Aden Abdulle International Airport (MGQ)</strong>, the hotel
                  is just minutes away — making it the most convenient{" "}
                  <strong className="font-medium text-foreground">airport hotel in Mogadishu</strong>.
                </p>
                <p>
                  To contact Samaan Suites directly, call{" "}
                  <strong className="font-medium text-foreground">+252 61 4232739</strong>. Our front desk team is available
                  around the clock to assist with room reservations, conference bookings, airport transfers, and any other
                  requests. We are committed to making your stay in Mogadishu as comfortable and seamless as possible.
                </p>
                <p>
                  Whether you are planning a business trip, an NGO deployment, a diplomatic visit, or a family vacation to
                  Mogadishu, the team at <strong className="font-medium text-foreground">Samaan Suites Mogadishu</strong> is
                  ready to help you plan the perfect stay at the best hotel near Mogadishu Airport.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
