import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/30 bg-white/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="font-melody text-4xl text-orange-600">yatrasutra</div>
            <p className="mt-3 text-xs font-bold text-blue-900 max-w-xs">
              We handle the chaos - You just pack
            </p>
            <p className="mt-3 text-sm text-slate-700 max-w-xs">
              Curating premium island and beach journeys across Lakshadweep, Maldives, and Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><Link to="/" className="hover:text-slate-900 transition">Home</Link></li>
              <li><a href="/#itineraries" className="hover:text-slate-900 transition">Packages</a></li>
              <li><Link to="/srilanka" className="hover:text-slate-900 transition">Sri Lanka</Link></li>
              <li><Link to="/about" className="hover:text-slate-900 transition">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a href="mailto:info@yatrasutra.com" className="hover:text-slate-900 transition">info@yatrasutra.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-slate-900 transition">+91 81296 67933</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a aria-label="Instagram" href="#instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A4.5 4.5 0 1112 17a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.5 6A1.5 1.5 0 1116 7.5 1.5 1.5 0 0117.5 6z"/></svg>
              </a>
              <a aria-label="Facebook" href="#facebook" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M13 22v-8h2.5l.5-3H13V9.25C13 8.56 13.56 8 14.25 8H16V5h-2c-2.21 0-4 1.79-4 4v2H8v3h2v8h3z"/></svg>
              </a>
              <a aria-label="WhatsApp" href="#whatsapp" className="grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.52 3.48A11.9 11.9 0 0012.05.05C5.53.05.25 5.33.25 11.86a11.74 11.74 0 001.56 5.89L.04 24l6.4-1.72a11.9 11.9 0 005.6 1.44h.01c6.53 0 11.81-5.28 11.81-11.81 0-3.15-1.23-6.12-3.34-8.33zM12.05 21.2a9.3 9.3 0 01-4.74-1.3l-.34-.2-3.79 1.02 1.01-3.69-.22-.38a9.28 9.28 0 01-1.39-4.79c0-5.14 4.18-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.73a9.227 9.227 0 012.73 6.59c0 5.15-4.19 9.34-9.34 9.34zm5.42-6.97c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 01-1.67-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.47 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.07 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/30 pt-6 text-sm text-slate-700">
          <p>© {new Date().getFullYear()} Yatrasutra Holidays Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-slate-900 transition">Terms</a>
            <a href="#privacy" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#cookies" className="hover:text-slate-900 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


