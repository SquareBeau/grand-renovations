import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  PHOTOS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
} from "@/lib/photos";
import { PhotoGrid } from "@/components/photo-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Recent Grand Renovations projects across the DFW metro — decks, patios, fences, kitchens, baths, hardwood floors, and full renovations. Real photos from real DFW jobs.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Gallery
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            {PHOTOS.length} real DFW projects.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Every photo here is from a real Grand Renovations job. Decks,
            patios, fences, kitchens, baths, hardwood floors, and the
            renovations in between — all built by {SITE.owner} and his crew.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {CATEGORY_ORDER.map((cat) => {
              const count = PHOTOS.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              return (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950"
                >
                  {CATEGORY_LABELS[cat]}
                  <span className="text-xs text-stone-500">{count}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {CATEGORY_ORDER.map((cat) => {
          const photos = PHOTOS.filter((p) => p.category === cat);
          if (photos.length === 0) return null;
          return (
            <div key={cat} id={cat} className="mb-20 scroll-mt-20 last:mb-0">
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                  {CATEGORY_LABELS[cat]}
                </h2>
                <span className="text-sm text-stone-500">{photos.length} photos</span>
              </div>
              <PhotoGrid photos={photos} />
            </div>
          );
        })}

        <div className="mt-4 rounded-3xl bg-stone-950 px-8 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Want yours photographed next?
              </h2>
              <p className="mt-2 text-stone-300">
                Tell {SITE.owner} what you&apos;ve got going on. Small repair
                or full remodel — both lanes welcome.
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
