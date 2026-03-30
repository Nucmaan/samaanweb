import type { Metadata } from "next";
import Link from "next/link";

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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
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

      <div className="flex flex-col">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li><Link href="/">Samaan Suites – Home</Link></li>
            <li>Contact</li>
          </ol>
        </nav>

        <header className="border-b border-gold/20 px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">GET IN TOUCH</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Contact Samaan Suites
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Reach out to Samaan Suites for room enquiries, conference bookings, or any questions about
            the best hotel in Mogadishu.
          </p>
        </header>

        {/* Contact Cards */}
        <section aria-labelledby="contact-info-heading" className="mx-auto w-full max-w-5xl px-6 py-24">
          <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gold/20 bg-navy-light/60 p-8 text-center">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <PhoneIcon />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Call Us</h3>
              <a
                href="tel:+252614232739"
                className="text-lg font-medium text-gold transition-colors hover:text-gold-light"
              >
                +252 61 4232739
              </a>
              <p className="mt-2 text-sm text-foreground/50">Available 24/7 for reservations and enquiries</p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-navy-light/60 p-8 text-center">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <MapPinIcon />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Visit Us</h3>
              <address className="not-italic text-foreground/60">
                <p className="font-medium text-foreground/80">Samaan Suites</p>
                <p>Mogadishu Airport Area</p>
                <p>Mogadishu, Somalia</p>
              </address>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-navy-light/60 p-8 text-center">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <ClockIcon />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Front Desk Hours</h3>
              <p className="text-foreground/60">
                Open 24 hours<br />7 days a week
              </p>
              <p className="mt-2 text-sm text-foreground/50">Check-in: 2:00 PM &middot; Check-out: 12:00 PM</p>
            </div>
          </div>
        </section>

        {/* Google Map Embed */}
        <section aria-labelledby="map-heading" className="border-t border-gold/20 bg-navy-light/20">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 id="map-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Find Samaan Suites on the Map
            </h2>
            <div className="overflow-hidden rounded-2xl border border-gold/20">
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
            <p className="mt-4 text-center text-sm text-foreground/40">
              Samaan Suites &middot; Mogadishu Airport Area, Mogadishu, Somalia &middot;
              Near Aden Abdulle International Airport (MGQ)
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section aria-labelledby="contact-seo-heading" className="border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <h2 id="contact-seo-heading" className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
              How to Reach Samaan Suites in Mogadishu
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed">
              <p>
                <strong className="text-foreground/80">Samaan Suites</strong> is located in the Mogadishu Airport Area,
                one of the most accessible areas in the city. If you are arriving from{" "}
                <strong className="text-foreground/80">Aden Abdulle International Airport (MGQ)</strong>, the hotel is just
                minutes away — making it the most convenient <strong className="text-foreground/80">airport hotel in Mogadishu</strong>.
              </p>
              <p>
                To contact Samaan Suites directly, call <strong className="text-foreground/80">+252 61 4232739</strong>. Our front
                desk team is available around the clock to assist with room reservations, conference bookings, airport transfers,
                and any other requests. We are committed to making your stay in Mogadishu as comfortable and seamless as possible.
              </p>
              <p>
                Whether you are planning a business trip, an NGO deployment, a diplomatic visit, or a family vacation to Mogadishu,
                the team at <strong className="text-foreground/80">Samaan Suites Mogadishu</strong> is ready to help you plan the
                perfect stay at the best hotel near Mogadishu Airport.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
