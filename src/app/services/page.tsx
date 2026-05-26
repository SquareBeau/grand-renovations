import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { HANDYMAN_SERVICES, REMODEL_SERVICES, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Handyman repairs, carpentry, fences, decks, kitchens, bathrooms, hardwood floors, and full renovations across the Dallas–Fort Worth metro.",
};

function ServiceList({ services }: { services: readonly Service[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.slug}
          className="rounded-2xl border border-stone-200 bg-white p-7"
        >
          <h3 className="text-xl font-semibold tracking-tight text-stone-950">
            {service.title}
          </h3>
          <p className="mt-2 text-stone-600">{service.shortDescription}</p>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-amber-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Services
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            Handyman work, repairs, and full renovations.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            {SITE.owner} handles the small punch-list jobs and the full-scale
            remodels — same craftsman, same standard. Here&apos;s what we do.
          </p>
        </div>
      </section>

      {/* Handyman lane */}
      <section className="border-b border-stone-200 bg-amber-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Most-called lane
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
                Handyman & Repairs
              </h2>
              <p className="mt-2 max-w-2xl text-stone-700">
                The stuff most contractors won&apos;t pick up the phone for.
                Small jobs, fast turnaround, honest pricing.
              </p>
            </div>
          </div>
          <ServiceList services={HANDYMAN_SERVICES} />
        </div>
      </section>

      {/* Remodel lane */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
            When you&apos;re ready for the big project
          </p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
            Renovations & Builds
          </h2>
          <p className="mt-2 max-w-2xl text-stone-700">
            Bigger work, run by the same craftsman who handles the small
            stuff. One point of accountability from quote to walk-through.
          </p>
        </div>
        <ServiceList services={REMODEL_SERVICES} />

        <div className="mt-16 rounded-3xl bg-stone-950 px-8 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Don&apos;t see it listed?
              </h2>
              <p className="mt-2 text-stone-300">
                Ask. If {SITE.owner} can&apos;t do it himself he&apos;ll tell
                you who can.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-amber-400 px-6 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-300"
              >
                {SITE.primaryCtaLabel}
              </Link>
              <a
                href={SITE.phoneHref}
                className="text-sm font-medium text-stone-300 hover:text-white"
              >
                Or call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
