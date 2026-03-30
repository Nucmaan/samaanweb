"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Suites" },
  { href: "/contact", label: "Contact" },
] as const;

const MORE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
] as const;

const ALL_LINKS = [...PRIMARY_LINKS, ...MORE_LINKS];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} className={`h-3 w-3 ${className ?? ""}`} aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkColor = scrolled ? "text-foreground/60" : "text-white/80";
  const linkHover = scrolled ? "hover:text-accent" : "hover:text-white";
  const brandColor = scrolled ? "text-foreground" : "text-white";
  const barColor = scrolled ? "bg-foreground" : "bg-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-sm"
          : "bg-linear-to-b from-black/40 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-70">
          <Image
            src="/logo.png"
            alt="Samaan Suites hotel logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded"
            priority
          />
          <span className={`hidden font-heading text-xl tracking-[0.12em] transition-colors duration-500 sm:block ${brandColor}`}>
            Samaan Suites
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${linkColor} ${linkHover}`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* More dropdown */}
          <li className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${linkColor} ${linkHover}`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <ChevronIcon className={`transition-transform duration-300 ${moreOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-4 -translate-x-1/2 overflow-hidden rounded-sm border border-border/60 bg-background/95 shadow-lg backdrop-blur-xl"
                >
                  <ul className="flex flex-col py-2">
                    {MORE_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMoreOpen(false)}
                          className="block whitespace-nowrap px-7 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:bg-accent/10 hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-none border px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-500 ${
              scrolled
                ? "border-accent bg-accent text-white hover:bg-transparent hover:text-accent"
                : "border-white/40 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
            }`}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-px w-6 transition-all duration-500 ${barColor} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 transition-all duration-500 ${barColor} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 transition-all duration-500 ${barColor} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {ALL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block border border-accent bg-accent py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-white"
                >
                  Reserve Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
