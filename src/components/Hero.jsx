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
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-blue-900 sm:text-5xl lg:text-7xl">
              Plan your next
              <br />
              <span style={{ color: '#EA5327' }}>gateway </span>
              {" "}to adventure
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              YatraSutra helps you discover destinations, craft itineraries, and
              travel smarter—beautifully organized in one place.
            </p>

            <div className="mt-12 flex items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex-1 max-w-[140px]"
              >
                Get Started
              </a>
              <a
                href="#explore"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-indigo-700 flex-1 max-w-[140px]"
              >
                Destinations
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
              
              {/* Floating Badge */}
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-center">
                  <div className="md:text-4xl text-2xl text-orange-600 mt-1" style={{ fontFamily: 'Melody' }}>YATRASUTRA</div>
                  <span className="md:text-xs text-xs font-semibold text-slate-600 uppercase tracking-wider">We handle the chaos—You just pack</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}