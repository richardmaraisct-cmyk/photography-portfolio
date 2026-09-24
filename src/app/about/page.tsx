"use client";

import { useState } from "react";

export default function About() {
  const [reveal, setReveal] = useState(0);

  return (
    <main
  className="min-h-screen bg-[#F7F4ED] text-[#1717E8] px-3 pt-3 pb-24"
  onMouseMove={(event) => {
  const image = document.getElementById("about-image");

  if (!image) return;

  const rect = image.getBoundingClientRect();

  const position =
    ((event.clientX - rect.left) / rect.width) * 100;

  const clampedPosition = Math.max(0, Math.min(100, position));

  setReveal(clampedPosition);
}}
>
      {/* Navigation */}
      <nav className="flex items-start justify-between">
        <a href="/" className="font-akira text-lg">
          RICHARD MARAIS
        </a>

        <div className="font-akira flex items-center text-lg">
          <a href="/work" className="pr-4">
            WORK
          </a>

          <span className="h-6 w-px bg-[#1717E8]" />

          <a href="/contact" className="pl-4">
            CONTACT
          </a>
        </div>
      </nav>

      {/* About */}
      <section className="mx-auto mt-28 max-w-[1500px] px-[5vw]">
        <div className="grid items-start gap-16 md:grid-cols-[0.8fr_1.2fr]">
          
          {/* Text */}
          <div>
            <h1 className="font-akira text-[46px] leading-none md:text-[56px]">
              ABOUT
            </h1>

            <div
              className="mt-12 max-w-[520px] text-[17px] leading-[1.55] tracking-[-0.01em]"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              <p>
                Richard Marais is a photographer based in Cape Town, South
                Africa.
              </p>

              <p className="mt-5">
                Biography goes here. We can develop this once the layout and
                typography feel right.
              </p>
            </div>
          </div>

          {/* Invisible image reveal */}
          <div
  id="about-image"
  className="relative w-full overflow-hidden"
>
            <img
              src="/photos/about1.JPG"
              alt=""
              className="block h-auto w-full"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - reveal}% 0 0)`,
              }}
            >
              <img
                src="/photos/about2.JPG"
                alt=""
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}