import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/20 px-4 py-3 shadow-lg backdrop-blur-md">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-melody text-4xl text-orange-600">yatrasutra</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-800/90 sm:flex">
            <a href="#explore" className="transition hover:text-slate-900">Explore</a>
            <a href="#itineraries" className="transition hover:text-slate-900">Packages</a>
            <a href="#itineraries" className="transition hover:text-slate-900">About us</a>
            <a href="#itineraries" className="transition hover:text-slate-900">Gallery</a>
            <a href="#stories" className="transition hover:text-slate-900">Stories</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* Socials */}
            <a href="#instagram" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A4.5 4.5 0 1112 17a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.5 6A1.5 1.5 0 1116 7.5 1.5 1.5 0 0117.5 6z"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M13 22v-8h2.5l.5-3H13V9.25C13 8.56 13.56 8 14.25 8H16V5h-2c-2.21 0-4 1.79-4 4v2H8v3h2v8h3z"/>
                  </svg>
                </a>
                <a href="#whatsapp" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.9 11.9 0 0012.05.05C5.53.05.25 5.33.25 11.86a11.74 11.74 0 001.56 5.89L.04 24l6.4-1.72a11.9 11.9 0 005.6 1.44h.01c6.53 0 11.81-5.28 11.81-11.81 0-3.15-1.23-6.12-3.34-8.33zM12.05 21.2a9.3 9.3 0 01-4.74-1.3l-.34-.2-3.79 1.02 1.01-3.69-.22-.38a9.28 9.28 0 01-1.39-4.79c0-5.14 4.18-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.73a9.227 9.227 0 012.73 6.59c0 5.15-4.19 9.34-9.34 9.34zm5.42-6.97c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 01-1.67-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.47 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.07 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  </svg>
                </a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Start planning
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zm0 7.5a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zm0 7.5a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="mx-4 mt-2 rounded-2xl border border-white/20 bg-white/30 p-4 text-sm text-slate-800 shadow-lg backdrop-blur-md sm:hidden">
            <a href="#explore" className="block rounded-lg px-3 py-2 hover:bg-white/50">Explore</a>
            <a href="#itineraries" className="mt-1 block rounded-lg px-3 py-2 hover:bg-white/50">Packages</a>
            <a href="#itineraries" className="mt-1 block rounded-lg px-3 py-2 hover:bg-white/50">About us</a>
            <a href="#itineraries" className="mt-1 block rounded-lg px-3 py-2 hover:bg-white/50">Gallery</a>
            <a href="#stories" className="mt-1 block rounded-lg px-3 py-2 hover:bg-white/50">Stories</a>
            <div className="mt-3 flex items-center justify-between gap-3">
              {/* Socials */}
              <div className="flex items-center gap-3">
                <a href="#instagram" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A4.5 4.5 0 1112 17a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.5 6A1.5 1.5 0 1116 7.5 1.5 1.5 0 0117.5 6z"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M13 22v-8h2.5l.5-3H13V9.25C13 8.56 13.56 8 14.25 8H16V5h-2c-2.21 0-4 1.79-4 4v2H8v3h2v8h3z"/>
                  </svg>
                </a>
                <a href="#whatsapp" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.9 11.9 0 0012.05.05C5.53.05.25 5.33.25 11.86a11.74 11.74 0 001.56 5.89L.04 24l6.4-1.72a11.9 11.9 0 005.6 1.44h.01c6.53 0 11.81-5.28 11.81-11.81 0-3.15-1.23-6.12-3.34-8.33zM12.05 21.2a9.3 9.3 0 01-4.74-1.3l-.34-.2-3.79 1.02 1.01-3.69-.22-.38a9.28 9.28 0 01-1.39-4.79c0-5.14 4.18-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.73a9.227 9.227 0 012.73 6.59c0 5.15-4.19 9.34-9.34 9.34zm5.42-6.97c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 01-1.67-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.47 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.07 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  </svg>
                </a>
              </div>
              <a
                href="#get-started"
                className="flex-1 rounded-lg bg-orange-600 px-4 py-2 text-center text-white hover:bg-orange-700"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}


