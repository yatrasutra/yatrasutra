export default function About() {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 md:mt-[-50px]">
         <div className="grid items-center md:gap-36 gap-12 lg:grid-cols-2">
          {/* Left side - Image */}
          <div className="order-1">
            <div className="mx-auto w-[90%] max-w-lg">
              <img
                src="/abt3.png"
                alt="About Yatrasutra"
                className="w-full h-auto object-contain rounded-2xl md:mt-0 mt-[-30px]"
                loading="lazy"
              />
            </div>
          </div>

           {/* Right side - Content */}
           <div className="order-2 lg:max-w-2xl">
             <div className="relative">
               {/* Decorative element */}
               
               <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl relative z-10 md:ml-0 ml-2">
                 Why <span style={{ color: '#EA5327' }}>Yatrasutra</span>
               </h2>
               
               {/* Underline accent */}
             </div>
             
             <div className="space-y-6 text-slate-700 leading-relaxed">
               <div className="bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-6">
                 <p className="text-base sm:text-lg">
                   At <span className="font-bold text-indigo-900">Yatrasutra Holidays Pvt Ltd</span>, we are experts in beach and island vacations, specializing in <span className="font-semibold text-orange-600">Lakshadweep, Maldives, and Sri Lanka</span>. We curate premium holidays that combine <span className="font-bold text-indigo-900">luxury, culture, and adventure.</span>.
                   With in-depth destination expertise, trusted partnerships, and tailored itineraries, we make every journey seamless and unforgettable. Our team of travel specialists has personally visited every location we recommend, ensuring authentic experiences.

                 </p>
               </div>
               
            
             </div>

             {/* Enhanced Call to Action */}
             <div className="mt-6 flex items-center gap-4">
               <a
                 href="#contact"
                 className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-orange-700 hover:to-orange-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
               >
                 
                 More about us
               </a>
               
               {/* Social Icons */}
               <div className="flex items-center gap-3">
                 {/* Mail Icon */}
                 <a
                   href="mailto:info@yatrasutra.com"
                   className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                   aria-label="Send us an email"
                 >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                   
                 </a>
                 
                 {/* WhatsApp Icon */}
                 <a
                   href="https://wa.me/1234567890"
                   className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-orange-500 hover:to-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                   aria-label="Contact us on WhatsApp"
                 >
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                   </svg>
                   
                 </a>
                 
                 {/* Call Icon */}
                 <a
                   href="tel:+1234567890"
                   className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-orange-700 hover:to-orange-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                   aria-label="Call us"
                 >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                   
                 </a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
