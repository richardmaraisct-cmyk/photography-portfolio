
"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/photos/clothingvendor.jpg",
    alt: "Clothing vendor",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/augustflowers.JPG",
    alt: "Wildflowers",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/prompool.jpg",
    alt: "Swimming pool",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/p800river.jpeg",
    alt: "River",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/uctnight.jpg",
    alt: "UCT at night",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/churchhavenhide.JPG",
    alt: "Churchhaven",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/karoobw.JPG",
    alt: "Karoo",
    category: "film",
    caption: "Klein Karoo, Ilford HP5, 2024",
  },
  {
    src: "/photos/cambridge.jpg",
    alt: "Cambridge",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/dublin.jpg",
    alt: "Dublin",
    category: "film",
    caption: "",
  },
  {
    src: "/photos/london%20heat.JPG",
    alt: "London",
    category: "film",
    caption: "",
  },
];

export default function Work() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextPhoto = () => {
    setSelectedPhoto((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  };

  const previousPhoto = () => {
    setSelectedPhoto((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    if (selectedPhoto === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedPhoto((current) =>
          current === null ? null : (current + 1) % photos.length
        );
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedPhoto((current) =>
          current === null
            ? null
            : (current - 1 + photos.length) % photos.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <main className="min-h-screen text-[#1717E8] px-3 pt-3 pb-24">
      {/* Navigation */}
      <nav className="mx-auto flex w-[96%] items-start justify-between md:w-[92%] lg:w-[98%]">
        <a href="/" className="font-akira text-xl">
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

      {/* Photography gallery */}
      <section className="mx-auto mt-3 w-[96%] md:w-[92%] lg:w-[98%]">
        <div className="columns-2 gap-4 md:columns-3 md:gap-7">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelectedPhoto(index)}
              className="mb-4 block w-full break-inside-avoid cursor-pointer text-left md:mb-7"
              aria-label={`Enlarge ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="block h-auto w-full rounded-none"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Enlarged photograph viewer */}
      {selectedPhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F6]/95 p-4 md:p-8"
          onClick={() => setSelectedPhoto(null)}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;

            const difference =
              touchStartX.current -
              event.changedTouches[0].clientX;

            if (difference > 50) {
              nextPhoto();
            } else if (difference < -50) {
              previousPhoto();
            }

            touchStartX.current = null;
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedPhoto(null);
            }}
            className="font-akira absolute right-5 top-5 z-20 text-2xl text-[#1717E8] md:right-8"
            aria-label="Close photograph"
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousPhoto();
            }}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 px-2 py-4 text-3xl text-[#1717E8] md:left-6 md:text-4xl"
            aria-label="Previous photograph"
          >
            ‹
          </button>

          {/* Photograph and caption */}
          <div
            className="flex w-fit max-w-[82vw] flex-col md:max-w-[88vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={photos[selectedPhoto].src}
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="block max-h-[76vh] w-auto max-w-full rounded-none object-contain md:max-h-[80vh]"
              draggable={false}
            />

            {/* Caption and counter */}
            <div className="mt-3 flex items-start justify-between gap-5">
              <div
                className="text-sm text-[#1717E8]"
                style={{
                  fontFamily:
                    '"Helvetica Neue Custom", Arial, sans-serif',
                  fontWeight: 300,
                }}
              >
                {photos[selectedPhoto].caption && (
                  <>
                    <p>{photos[selectedPhoto].caption}</p>
                    <div className="mt-2 h-[2px] w-12 bg-[#1717E8]" />
                  </>
                )}
              </div>

              <span
                className="ml-auto shrink-0 text-sm text-[#1717E8]"
                style={{
                  fontFamily:
                    '"Helvetica Neue Custom", Arial, sans-serif',
                  fontWeight: 300,
                }}
              >
                {String(selectedPhoto + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 px-2 py-4 text-3xl text-[#1717E8] md:right-6 md:text-4xl"
            aria-label="Next photograph"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
