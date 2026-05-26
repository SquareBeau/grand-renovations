import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { HANDYMAN_SERVICES, REMODEL_SERVICES } from "@/lib/services";
import { FEATURED_PHOTOS } from "@/lib/photos";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const heroPhoto = FEATURED_PHOTOS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/20" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-200">
              ★ {SITE.googleRating.toFixed(1)} · {SITE.googleReviewCount} Google reviews
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              From a leaky faucet to a full remodel.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
              Grand Renovations is {SITE.owner}&apos;s DFW handyman and general
              contracting business. The small stuff most contractors
              won&apos;t touch, the big jobs done right the first time, and
              one number to call for both.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-amber-400 px-6 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-300"
              >
                {SITE.primaryCtaLabel}
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-end">
            {[
              { value: "5.0 ★", label: "Google rated" },
              { value: "Big & small", label: "Every size job" },
              { value: "DFW", label: "Local & family-run" },
              { value: "Same crew", label: "Start to finish" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-stone-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-lane services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
            Two lanes. One contractor.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Most of {SITE.owner}&apos;s work is the everyday stuff — repairs,
            installs, and the small jobs no one else returns calls for. He
            also does the big remodels when the time comes. Both lanes, same
            craftsman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Handyman lane */}
          <div className="rounded-3xl border-2 border-amber-200 bg-amber-50/60 p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Most-called lane
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
              Handyman, Repairs & Punch-Lists
            </h3>
            <p className="mt-2 text-stone-700">
              The phone call most contractors won&apos;t return. Drywall
              patches, ceiling fans, faucets, fence repair, exterior lighting,
              attic ladders — the long list of stuff that piles up around the
              house.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-stone-700">
              {HANDYMAN_SERVICES.flatMap((s) => s.bullets)
                .slice(0, 10)
                .map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-amber-500" />
                    {b}
                  </li>
                ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              See repair & handyman list →
            </Link>
          </div>

          {/* Remodel lane */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
              When you&apos;re ready
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
              Renovations, Kitchens & Builds
            </h3>
            <p className="mt-2 text-stone-700">
              Kitchens, baths, decks, hardwood floors, full interior
              renovations. The big-ticket work, run by the same craftsman who
              fixed your back gate last spring.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-stone-700">
              {REMODEL_SERVICES.map((s) => (
                <li key={s.slug} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-stone-400" />
                  {s.title}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-50"
            >
              See remodel services →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                Recent work
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
                Photos from real DFW projects.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden text-sm font-medium text-stone-700 hover:text-stone-950 sm:inline"
            >
              See full gallery →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {FEATURED_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-6 inline-flex text-sm font-medium text-stone-700 hover:text-stone-950 sm:hidden"
          >
            See full gallery →
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              Why Grand
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              The contractor your neighbor recommended.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              {SITE.owner} runs the job and answers the phone. Whether
              it&apos;s a 30-minute fix or a 3-month renovation, you talk to
              the same person from quote to walk-through. Five stars on Google,
              and most of the work comes from referrals.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              {
                title: "He answers the phone",
                body: "No call-center, no sales rep, no quote dispatcher. You talk to Jeremy.",
              },
              {
                title: "No job too small",
                body: "Most contractors ghost small jobs. Jeremy doesn't. Drywall patch, fence hinge, dryer fix — call.",
              },
              {
                title: "Honest pricing, written down",
                body: "Detailed quotes before the work starts. No surprise change orders, no shifting numbers.",
              },
              {
                title: "Same craftsman, big or small",
                body: "The guy who fixes your gate is the same guy who'd build your kitchen. Quality doesn't change with ticket size.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5"
              >
                <span className="mt-1 inline-block size-2 shrink-0 rounded-full bg-amber-500" />
                <div>
                  <p className="font-semibold text-stone-950">{item.title}</p>
                  <p className="mt-1 text-sm text-stone-600">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <Testimonials />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-stone-950 px-8 py-16 text-white md:px-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Got a list of stuff?
              </h2>
              <p className="mt-3 max-w-xl text-stone-300">
                One job or fifteen. Tell {SITE.owner} what you need done. Same
                day callback during business hours.
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
