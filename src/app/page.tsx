export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8EAD7] text-[#1717E8] px-3 pt-3 pb-20">

      {/* Navigation */}
      <nav className="flex items-start justify-between">

        <div className="flex">
          <a
            href="#work"
            className="border-2 border-[#1717E8] px-5 py-2 text-xl font-black"
          >
            WORK
          </a>

          <a
            href="#about"
            className="border-2 border-l-0 border-[#1717E8] px-5 py-2 text-xl font-black"
          >
            ABOUT
          </a>
        </div>

        <a
          href="#contact"
          className="border-2 border-[#1717E8] px-5 py-2 text-xl font-black"
        >
          CONTACT
        </a>

      </nav>

      {/* Masthead */}
      <header className="mt-16 flex justify-center">
        <div className="border-2 border-[#1717E8] px-5 py-1">
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            RICHARD MARAIS
          </h1>
        </div>
      </header>

      {/* Photograph */}
      <section id="work" className="mx-auto mt-10 max-w-4xl">

        <img
          src="/photos/000025.jpg"
          alt="Karoo"
          className="h-auto w-full"
        />

        <div className="ml-auto mt-3 w-fit min-w-52">
          <p className="text-right text-sm italic">
            Karoo 2024, Ilford HP5
          </p>

          <div className="mt-2 h-[2px] w-full bg-[#1717E8]" />
        </div>

      </section>

    </main>
  );
}