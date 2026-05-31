"use client";
import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryImage = { src: string; alt: string; caption?: string };

export default function Lightbox({
  images,
  open,
  index,
  onClose,
  onIndex,
}: {
  images: GalleryImage[];
  open: boolean;
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const next = useCallback(() => onIndex((index + 1) % images.length), [index, images.length, onIndex]);
  const prev = useCallback(() => onIndex((index - 1 + images.length) % images.length), [index, images.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-md p-6"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 text-noir text-xs uppercase tracking-[0.3em] hover:text-gold"
            aria-label="Close gallery"
          >
            Close ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-noir hover:text-gold text-2xl"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-noir hover:text-gold text-2xl"
            aria-label="Next image"
          >
            →
          </button>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            {images[index].caption && (
              <p className="mt-4 text-center text-noir/70 text-sm tracking-wide">{images[index].caption}</p>
            )}
            <p className="mt-2 text-center text-gold text-xs tracking-[0.3em]">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
