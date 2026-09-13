export default function Work() {
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
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">

          <img
            src="/photos/clothingvendor.jpg"
            alt="Clothing vendor"
            className="h-auto w-full"
          />

          <img
            src="/photos/augustflowers.JPG"
            alt="Wildflowers"
            className="h-auto w-full"
          />

          <img
            src="/photos/prompool.jpg"
            alt="Swimming pool"
            className="h-auto w-full"
          />

          <img
            src="/photos/p800river.jpeg"
            alt="River"
            className="h-auto w-full"
          />

          <img
            src="/photos/uctnight.jpg"
            alt="UCT at night"
            className="h-auto w-full"
          />

          <img
            src="/photos/churchhavenhide.JPG"
            alt="Churchhaven"
            className="h-auto w-full"
          />

          <img
            src="/photos/karoobw.JPG"
            alt="Karoo"
            className="h-auto w-full"
          />

          <img
            src="/photos/clothingvendor.jpg"
            alt="Clothing vendor"
            className="h-auto w-full"
          />

          <img
            src="/photos/augustflowers.JPG"
            alt="Wildflowers"
            className="h-auto w-full"
          />

        </div>
      </section>

    </main>
  );
}