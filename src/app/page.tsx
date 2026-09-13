export default function Home() {
  return (
   <main className="min-h-screen bg-[#F7F4ED] text-[#1717E8] px-3 pt-3 pb-20">
      {/* Navigation */}
     <nav className="flex items-start justify-between">

  <div className="font-akira flex items-center text-lg">
    <a href="work" className="pr-4">
      WORK
    </a>

    <span className="h-6 w-px bg-[#1717E8]" />

    <a href="#about" className="pl-4">
      ABOUT
    </a>
  </div>

  <a
    href="#contact"
    className="font-akira text-lg"
  >
    CONTACT
  </a>

</nav>

      {/* Masthead */}
      <header className="mt-16 flex justify-center">
  <div className="border border-[#1717E8] px-8 py-3">
    <h1 className="font-akira text-[44px] leading-none tracking-tight md:text-[52px]">
      RICHARD MARAIS
    </h1>
  </div>
</header>

      {/* Photograph */}
      <section id="work" className="mx-auto mt-10 max-w-4xl">

        <img
  src="/photos/karoobw.JPG"
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