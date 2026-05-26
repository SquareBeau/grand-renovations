"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes (link click on a different page).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and lock body scroll when open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            Grand Renovations
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-stone-500 sm:inline">
            DFW
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.phoneHref}
            className="text-sm font-medium text-stone-700 hover:text-stone-950"
          >
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-stone-900 px-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            {SITE.primaryCtaLabel}
          </Link>
        </div>

        {/* Mobile: phone link + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:bg-stone-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white transition-colors hover:bg-stone-800"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-30 bg-stone-950/40"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <nav className="fixed inset-x-0 top-16 z-40 border-b border-stone-200 bg-white shadow-lg">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-stone-100 py-4 text-base font-medium text-stone-900 last:border-b-0"
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-stone-400"
                    aria-hidden
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-stone-200 bg-stone-50 px-6 py-5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-white"
            >
              {SITE.primaryCtaLabel}
            </Link>
            <a
              href={SITE.phoneHref}
              className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-stone-300 text-sm font-semibold text-stone-900"
            >
              Call {SITE.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
