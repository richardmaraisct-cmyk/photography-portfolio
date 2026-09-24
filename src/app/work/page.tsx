"use client";

import { useState } from "react";

const photos = [
  { src: "/photos/clothingvendor.jpg", alt: "Clothing vendor" },
  { src: "/photos/augustflowers.JPG", alt: "Wildflowers" },
  { src: "/photos/prompool.jpg", alt: "Swimming pool" },
  { src: "/photos/p800river.jpeg", alt: "River" },
  { src: "/photos/uctnight.jpg", alt: "UCT at night" },
  { src: "/photos/churchhavenhide.JPG", alt: "Churchhaven" },
  { src: "/photos/karoobw.JPG", alt: "Karoo" },
  { src: "/photos/cambridge.jpg", alt: "Cambridge" },
  { src: "/photos/dublin.jpg", alt: "Dublin" },
  { src: "/photos/london%20heat.JPG", alt: "London" },
];

export default function Work() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#1717E8] px-3 pt-3 pb-24">

      {/* Navigation */}
      <nav className="flex items-start justify-between">
        <a href="/" className="font-akira text-lg">
          RICHARD MARAIS
        </a>

        <div className="font-akira flex items-center text-lg">
          <a href="/about" className="pr-4">
            ABOUT
          </a>

          <span className="h-6 w-px bg-[#1717E8]" />

          <a href="/contact" className="pl-4">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Work heading */}
      <header className="mt-20">
        <h1 className="font-akira text-center text-[38px] leading-none">
          WORK
        </h1>
      </header>

      {/* Photo grid */}
      <section className="mx-auto mt-16 max-w-6xl">
        <div className="columns-1 gap-8 md:columns-3">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => setSelectedPhoto(index)}
              className="mb-8 block w-full break-inside-avoid cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="block h-auto w-full"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Enlarged photo */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F4ED]/95 p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="font-akira absolute right-6 top-5 text-2xl text-[#1717E8]"
            aria-label="Close photograph"
          >
            ×
          </button>

          <img
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].alt}
            className="max-h-[88vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}