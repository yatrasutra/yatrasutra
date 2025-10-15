import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/20 px-4 py-3 shadow-lg backdrop-blur-md">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-melody text-2xl text-orange-600">yatrasutra</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-800/90 sm:flex">
            <Link to="/about" className="transition hover:text-slate-900">About us</Link>
            <div className="relative">
              <button
                onClick={() => setPackagesOpen(!packagesOpen)}
                className="flex items-center gap-1 transition hover:text-slate-900"
              >
                Packages
                <svg className={`h-4 w-4 transition-transform ${packagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {packagesOpen && (
                <div className="absolute top-full left-0 mt-7 w-48 rounded-lg border border-white/20 bg-white/90 py-2 shadow-lg backdrop-blur-md">
                  <Link to="/international" className="block px-4 py-2 text-sm transition hover:bg-white/50">International</Link>
                  <Link to="/domestic" className="block px-4 py-2 text-sm transition hover:bg-white/50">Domestic</Link>
                </div>
              )}
            </div>
            <Link to="/lakshadweep" className="transition hover:text-slate-900">Lakshadweep</Link>
            <Link to="/maldives" className="transition hover:text-slate-900">Maldives</Link>
            <Link to="/srilanka" className="transition hover:text-slate-900">Sri Lanka</Link>
            <Link to="/cruise" className="transition hover:text-slate-900">Cruise</Link>
            <Link to="/blog" className="transition hover:text-slate-900">Blogs</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* Socials */}
            <a href="#instagram" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#facebook" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#whatsapp" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/50">
              <FaWhatsapp className="h-5 w-5" />
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

        {/* Mobile full-screen drawer */}
        <div className={`sm:hidden fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Sliding Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-full max-w-none bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/40">
              <span className="font-melody text-3xl text-orange-600">yatrasutra</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-md p-3 text-slate-700 hover:bg-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-24 text-slate-800 text-lg">
              <Link to="/about" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-4 hover:bg-white/70 transition">About us</Link>
              <div className="mt-2">
                <button
                  onClick={() => setPackagesOpen(!packagesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 hover:bg-white/70 transition"
                >
                  Packages
                  <svg className={`h-5 w-5 transition-transform ${packagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${packagesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}> 
                  <div className="min-h-0">
                    <Link to="/international" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 hover:bg-white/70 transition">International</Link>
                    <Link to="/domestic" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 hover:bg-white/70 transition">Domestic</Link>
                  </div>
                </div>
              </div>
              <Link to="/lakshadweep" onClick={() => setOpen(false)} className="mt-2 block rounded-xl px-4 py-4 hover:bg-white/70 transition">Lakshadweep</Link>
              <Link to="/maldives" onClick={() => setOpen(false)} className="mt-2 block rounded-xl px-4 py-4 hover:bg-white/70 transition">Maldives</Link>
              <Link to="/srilanka" onClick={() => setOpen(false)} className="mt-2 block rounded-xl px-4 py-4 hover:bg-white/70 transition">Sri Lanka</Link>
              <Link to="/cruise" onClick={() => setOpen(false)} className="mt-2 block rounded-xl px-4 py-4 hover:bg-white/70 transition">Cruise</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="mt-2 block rounded-xl px-4 py-4 hover:bg-white/70 transition">Blogs</Link>
            </div>
            {/* Footer socials fixed at bottom */}
            <div className="border-t border-white/40 px-6 py-5 bg-transparent">
              <div className="flex items-center justify-center gap-5">
                <a href="#instagram" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md transition hover:scale-105">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#facebook" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md transition hover:scale-105">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="#whatsapp" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md transition hover:scale-105">
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}