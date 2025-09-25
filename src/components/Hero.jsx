export default function Hero() {
  return (
    <section className="w-full overflow-hidden relative">
     
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 mt-[-40px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="order-2 md:order-1 mt-10 md:mt-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur-sm">
              🟠 Curate memories, not just trips
            </span>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-indigo-900 sm:text-5xl lg:text-7xl">
              Plan your next
              <br />
              <span style={{ color: '#EA5327' }}>gateway </span>
              {" "}to adventure
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              YatraSutra helps you discover destinations, craft itineraries, and
              travel smarter—beautifully organized in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Start your journey
              </a>
              <a
                href="#explore"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-indigo-900 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-indigo-700"
              >
                Explore destinations
              </a>
            </div>
            
          </div>

          {/* Visual/illustration */}
          <div className="relative order-1 mb-16 md:order-2 md:mb-0">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-transparent">
              <img
                src="/hero.png"
                alt="YatraSutra hero"
                className="w-full h-auto object-contain mt-[-30px]"
                loading="eager"
              />
              {/* Signature badge */}
              <div className="pointer-events-none absolute bottom-[-80px] right-4 md:bottom-[-110px] md:right-20 select-none transform -rotate-6 md:-rotate-12">
                <div className="relative">
                  <span
                    className="font-melody text-6xl md:text-8xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                    style={{ color: '#EA5327', marginLeft:'40px' }}
                  >
                    yatrasutra
                  </span>
                </div>
                <p className="font-melody mt-2 inline-block rotate-2 rounded-md bg-transparent px-2 py-0.5 text-2xl md:px-3 md:py-1 md:text-3xl text-slate-800/90 backdrop-blur-sm drop-shadow-sm">
                  We handle the chaos—You just pack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}