export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">

      <img
        src="/photos/000025.jpg"
        alt="Photography"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-6xl font-light tracking-wide">
          RICHARD MARAIS
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-white/70">
          Photography
        </p>
      </div>

    </main>
  );
}