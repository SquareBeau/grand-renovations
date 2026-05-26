import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              What customers say
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              {SITE.googleRating.toFixed(1)} ★ on Google · {SITE.googleReviewCount} reviews
            </h2>
            <p className="mt-3 max-w-xl text-stone-600">
              Real reviews from DFW homeowners, lifted straight from our Google
              profile. No editing, no curation.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6"
            >
              <blockquote className="text-stone-800">
                <span className="block text-amber-500" aria-hidden>
                  {"★".repeat(t.rating)}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-stone-600">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
