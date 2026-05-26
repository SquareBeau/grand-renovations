"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Photo } from "@/lib/photos";

type PhotoGridProps = {
  photos: Photo[];
  /** Tailwind grid columns class. Defaults to a 2 / 3 / 4 progression. */
  gridClassName?: string;
  /** Aspect ratio for each cell. */
  aspectClassName?: string;
};

export function PhotoGrid({
  photos,
  gridClassName = "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
  aspectClassName = "aspect-[4/3]",
}: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className={gridClassName}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`group relative ${aspectClassName} cursor-zoom-in overflow-hidden rounded-2xl bg-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-100`}
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: photos.length < 2 }}
        styles={{
          container: { backgroundColor: "rgba(15, 12, 10, 0.96)" },
        }}
      />
    </>
  );
}
