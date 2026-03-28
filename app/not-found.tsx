import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Samaan Suites Mogadishu",
  description:
    "The page you are looking for does not exist. Return to Samaan Suites — luxury serviced hotel near Mogadishu Airport, Somalia.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-medium tracking-[0.2em] text-gold/70">
        PAGE NOT FOUND
      </p>
      <h1 className="mb-2 text-6xl font-bold text-foreground sm:text-8xl">
        404
      </h1>
      <p className="mb-8 max-w-md text-foreground/50">
        The page you are looking for does not exist or has been moved.
        Return to Samaan Suites to explore our luxury serviced hotel in Mogadishu.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
      >
        Back to Samaan Suites
      </Link>
    </div>
  );
}
