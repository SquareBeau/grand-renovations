import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Grand Renovations is a local general contractor serving Dallas–Fort Worth with a 5.0-star reputation and finished projects you can walk through.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            About
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            The DFW handyman who also does the big jobs.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Grand Renovations is {SITE.ownerFullName} — a one-call shop for
            everything from a stuck garbage disposal to a full kitchen
            remodel. Most of his work is the everyday stuff: drywall patches,
            ceiling fans, gate hinges, exterior lighting, the long list of
            things that pile up around a house.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            When the bigger projects come along — a new deck, a covered
            patio, a kitchen reno — it&apos;s the same {SITE.owner} on the
            job. Same craftsmanship, same accountability. The phone gets
            answered, the work gets done, and most customers come back the
            next time something breaks.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Google rating", value: `${SITE.googleRating.toFixed(1)} ★` },
            { label: "Google reviews", value: SITE.googleReviewCount },
            { label: "Serving", value: "All of DFW" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 bg-white px-6 py-7 text-center"
            >
              <p className="text-3xl font-semibold text-stone-950">
                {item.value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-wider text-stone-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-stone-100 px-8 py-12 md:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
            What working with us looks like
          </h2>
          <ol className="mt-6 space-y-5 text-stone-700">
            {[
              {
                step: "1",
                title: "Walkthrough",
                body: "We come to your home, see the space, and listen to what you actually want.",
              },
              {
                step: "2",
                title: "Detailed quote",
                body: "Written quote with the scope, materials, and timeline spelled out. No vague line items.",
              },
              {
                step: "3",
                title: "We build",
                body: "Our crew runs the job. Clean site, clear communication, and the same team start to finish.",
              },
              {
                step: "4",
                title: "Walk-through & warranty",
                body: "We don't leave until you're happy with the finish work. Then we stand behind it.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-stone-950">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-stone-950">{item.title}</p>
                  <p className="mt-1 text-stone-600">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              {SITE.primaryCtaLabel}
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center rounded-full border border-stone-300 px-6 text-sm font-semibold text-stone-800 transition-colors hover:bg-white"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
