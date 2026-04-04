import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Samaan Suites Mogadishu",
  description:
    "The page you are looking for does not exist. Return to Samaan Suites — luxury serviced hotel near Mogadishu Airport, Somalia.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="gold-line mb-10 w-16" />
      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">
        Page Not Found
      </p>
      <h1 className="font-heading text-8xl font-medium text-foreground sm:text-9xl">
        404
      </h1>
      <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has been moved.
        Return to Samaan Suites to explore our luxury hotel in Mogadishu.
      </p>
      <Link
        href="/"
        className="mt-12 inline-flex items-center border border-accent bg-accent px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-accent-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
