function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-gold/10 bg-navy-light/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-navy-light">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground/60">{description}</p>
    </div>
  );
}

function SuiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M3 21V7l9-4 9 4v14" />
      <path d="M9 21V11h6v10" />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 2v4M16 2v4" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function DiningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M6.5 6.5a1.5 1.5 0 113 0v11a1.5 1.5 0 01-3 0v-11z" />
      <path d="M14.5 6.5a1.5 1.5 0 113 0v11a1.5 1.5 0 01-3 0v-11z" />
      <path d="M4 10h2.5M17.5 10H20M4 14h2.5M17.5 14H20" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

function MosqueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M12 3c-2 2-4 4-4 7v11h8V10c0-3-2-5-4-7z" />
      <path d="M4 21V13a3 3 0 013-3h0" />
      <path d="M20 21V13a3 3 0 00-3-3h0" />
      <path d="M2 21h20" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gold/3 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Decorative top element */}
          <div className="animate-fade-in-up mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/40" />
            <DiamondIcon className="h-3 w-3 text-gold animate-pulse-glow" />
            <span className="h-px w-12 bg-gold/40" />
          </div>

          {/* Hotel name */}
          <h1 className="animate-fade-in-up-delay-1 mb-2 text-5xl font-bold tracking-wide text-foreground sm:text-6xl md:text-7xl">
            SAMAAN
          </h1>
          <p className="animate-fade-in-up-delay-1 mb-8 text-lg tracking-[0.35em] text-gold font-light sm:text-xl">
            S U I T E S
          </p>

          {/* Coming Soon badge */}
          <div className="animate-fade-in-up-delay-2 mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-sm font-medium tracking-wider text-gold">
              OPENING SOON
            </span>
          </div>

          {/* Tagline */}
          <p className="animate-fade-in-up-delay-3 mx-auto mb-6 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            A newly developed serviced hotel designed for long-stay guests,
            business travelers, NGOs, and events.
          </p>

          {/* Location */}
          <div className="animate-fade-in-up-delay-4 inline-flex items-center gap-2 text-foreground/50">
            <LocationIcon />
            <span className="text-sm tracking-wide">Mogadishu Airport Area, Somalia</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 px-6">
        <span className="h-px flex-1 max-w-24 bg-gold/10" />
        <DiamondIcon className="h-2.5 w-2.5 text-gold/30" />
        <span className="h-px flex-1 max-w-24 bg-gold/10" />
      </div>

      {/* Property Highlights */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">
            THE PROPERTY
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            60 Luxury Suites Across 10 Floors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/50">
            One-bedroom and two-bedroom serviced apartments designed for comfort,
            privacy, and extended stays — supported by full hotel amenities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<SuiteIcon />}
            title="Serviced Suites"
            description="60 fully serviced suites — 3 one-bedroom and 3 two-bedroom per floor — ideal for short and long stays."
          />
          <FeatureCard
            icon={<EventIcon />}
            title="Events & Conferences"
            description="11th-floor auditorium and meeting rooms for conferences, workshops, corporate meetings, and functions."
          />
          <FeatureCard
            icon={<SecurityIcon />}
            title="24/7 Security"
            description="Dedicated CCTV control room with round-the-clock monitoring and professional security infrastructure."
          />
          <FeatureCard
            icon={<DiningIcon />}
            title="Restaurant & Dining"
            description="On-site restaurant on the ground floor offering quality cuisine for guests and visitors."
          />
          <FeatureCard
            icon={<GymIcon />}
            title="Fitness Center"
            description="Fully equipped gym facility available to all guests to maintain their wellness routines."
          />
          <FeatureCard
            icon={<MosqueIcon />}
            title="Masjid"
            description="Convenient on-site prayer facility for guests, with easy access from all floors via two elevators."
          />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-gold/10 bg-navy-light/40">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: "60", label: "Suites" },
            { value: "10", label: "Residential Floors" },
            { value: "2", label: "Basement Levels" },
            { value: "11F", label: "Event Floor" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-10">
              <span className="text-3xl font-bold text-gold sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs tracking-wider text-foreground/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Ground Floor overview */}
      <section className="mx-auto w-full max-w-4xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold/70">
          GROUND FLOOR
        </p>
        <h2 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
          Everything You Need
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Reception",
            "Lobby",
            "Restaurant",
            "Gym",
            "Masjid",
            "Security Control",
            "Management Office",
            "Laundry",
            "Stores",
            "2 Elevators",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/15 bg-navy-light/60 px-5 py-2.5 text-sm text-foreground/70 transition-colors hover:border-gold/30 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 px-6 py-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold/20" />
          <DiamondIcon className="h-2.5 w-2.5 text-gold/30" />
          <span className="h-px w-8 bg-gold/20" />
        </div>
        <p className="text-sm font-medium tracking-wider text-foreground/40">
          SAMAAN SUITES
        </p>
        <p className="mt-1 text-xs text-foreground/25">
          Mogadishu Airport Area &middot; Opening Soon
        </p>
      </footer>
    </div>
  );
}
