"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Suites" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkColor = scrolled ? "text-foreground/60" : "text-white/80";
  const linkHover = scrolled ? "hover:text-accent" : "hover:text-white";
  const brandColor = scrolled ? "text-foreground" : "text-white";
  const barColor = scrolled ? "bg-foreground" : "bg-white";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-700 ${
          scrolled
            ? "border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-linear-to-b from-black/50 to-transparent"
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
            <span className={`hidden font-heading text-xl tracking-[0.12em] transition-colors duration-700 sm:block ${brandColor}`}>
              Samaan Suites
            </span>
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${linkColor} ${linkHover}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`rounded-full transition-colors duration-500 ${
                  scrolled
                    ? "text-foreground/60 hover:bg-muted hover:text-foreground"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <SunIcon className="size-[18px]" /> : <MoonIcon className="size-[18px]" />}
              </Button>
            )}
            <Link
              href="/contact"
              className={`inline-flex items-center rounded-none border px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${
                scrolled
                  ? "border-accent bg-accent text-white hover:bg-transparent hover:text-accent"
                  : "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              Book Now
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-px w-6 origin-center transition-all duration-500 ${barColor} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 transition-all duration-500 ${barColor} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 origin-center transition-all duration-500 ${barColor} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-background lg:hidden"
          >
            <div className="h-[76px]" />

            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-heading text-3xl font-medium tracking-wide text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="border border-accent bg-accent px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-accent"
                >
                  Book Now
                </Link>
                {mounted && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="shrink-0 rounded-full"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  >
                    {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
                  </Button>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pb-10 text-center"
            >
              <a href="tel:+252614232739" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                +252 61 4232739
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
