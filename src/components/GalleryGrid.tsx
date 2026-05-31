"use client";
import { useState } from "react";
import Lightbox, { GalleryImage } from "@/components/Lightbox";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => { setI(idx); setOpen(true); }}
            className={`group relative overflow-hidden bg-white ${idx === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-[4/5]"}`}
            aria-label={`Open image ${idx + 1}: ${img.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            />
            <span className="absolute inset-0 bg-noir/5 group-hover:bg-transparent transition-colors duration-500" />
            <span className="absolute bottom-4 right-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-[0.3em]">
              View →
            </span>
          </button>
        ))}
      </div>
      <Lightbox images={images} open={open} index={i} onIndex={setI} onClose={() => setOpen(false)} />
    </>
  );
}
