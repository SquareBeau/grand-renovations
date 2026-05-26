import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PHOTOS, CATEGORY_LABELS, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Recent Grand Renovations projects across the DFW metro — decks, patios, fences, kitchens, baths, hardwood floors, and full renovations.",
};

const CATEGORY_ORDER: Photo["category"][] = [
  "decks-patios",
  "fences",
  "carpentry",
  "kitchens",
  "bathrooms",
  "renovations",
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Gallery
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            Real DFW projects.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Decks, patios, fences, kitchens, baths, carpentry. A sampling of{" "}
            {SITE.owner}&apos;s recent work — every photo is from a real
            Grand Renovations job.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {CATEGORY_ORDER.map((cat) => {
          const photos = PHOTOS.filter((p) => p.category === cat);
          if (photos.length === 0) return null;
          return (
            <div key={cat} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                {CATEGORY_LABELS[cat]}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {photos.map((photo) => (
                  <div
                    key={photo.src}
                    className={
                      "relative overflow-hidden rounded-2xl bg-stone-200 " +
                      (photo.orientation === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-[4/3]")
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
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
