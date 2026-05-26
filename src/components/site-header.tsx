import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            Grand Renovations
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-stone-500 sm:inline">
            DFW
          </span>
        </Link>

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

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-medium text-stone-700 hover:text-stone-950 sm:inline"
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
      </div>
    </header>
  );
}
