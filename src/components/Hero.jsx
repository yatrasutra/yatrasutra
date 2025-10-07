
export default function Hero() {
  return (
    <section className="w-full overflow-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px) rotate(-5deg);
          }
        }
        
        .floating-badge {
          animation: float 3s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 mt-[-50px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="order-2 md:order-1 mt-2 md:mt-1">
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
          <div className="relative order-1 mb-16 md:mb-0 md:order-2">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-transparent">
              <img
                src="/hero.png"
                alt="YatraSutra hero"
                className="w-full h-auto object-contain mt-[-30px]"
                loading="eager"
              />
              
              {/* Floating Badge - Responsive */}
              <div className="absolute bottom-[-80px] sm:bottom-[-80px] md:bottom-[-100px] md:left-2/3 left-2/3 floating-badge bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl w-[75%] sm:w-auto max-w-[160px] sm:max-w-none" 
                   style={{ transform: 'translate(-50%, 0) rotate(-5deg)' }}>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-4xl text-orange-600 mt-1 leading-tight" style={{ fontFamily: 'Melody' }}>
                    YATRASUTRA
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider block mt-0.5">
                    Gateway to adventure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}