import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-950 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-white">Grand Renovations</p>
          <p className="mt-2 max-w-xs text-sm text-stone-400">
            {SITE.shortDescription}
          </p>
          <p className="mt-4 text-sm text-stone-400">{SITE.hours}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-stone-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="text-stone-300 transition-colors hover:text-white"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="text-stone-300 transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </li>
            <li className="text-stone-400">
              Serving {SITE.serviceArea.slice(0, -1).join(", ")} & {SITE.serviceArea.at(-1)}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-stone-500">
          <span>
            © {new Date().getFullYear()} Grand Renovations. All rights reserved.
          </span>
          <span>Dallas–Fort Worth, Texas</span>
        </div>
      </div>
    </footer>
  );
}
