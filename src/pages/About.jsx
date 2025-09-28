// import { Link } from "react-router-dom"; // Commented out for artifact compatibility

import EnquirySection from "@/components/Enquiry";

export default function About() {
  return (
    <div className="w-full relative bg-transparent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-orange-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          {/* Main Hero Content */}
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2 mb-20">
            {/* Left: Enhanced Image with Overlay */}
            <div className="order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-orange-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/abt3.png"
                  alt="About Yatrasutra - Luxury Travel Experiences"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end">
                  <div className="text-white p-6">
                    <p className="text-sm font-medium opacity-90">Crafting Your Dream Vacation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enhanced Text Content */}
            <div className="order-2 lg:max-w-2xl space-y-8">
              <div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-800 to-orange-600">
                  About <span className="text-orange-600">Yatrasutra</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-blue-700">Yatrasutra Holidays Pvt. Ltd.</span>, 
                  we don't just plan trips — we architect extraordinary journeys that transcend the ordinary. Born from a passion for pristine beaches and untouched islands, 
                  we've dedicated ourselves to mastering the art of <span className="font-bold text-orange-600">luxury coastal travel</span>.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  For over a decade, our expertise has been finely tuned around three crown jewels: 
                  <span className="font-semibold text-blue-700"> Lakshadweep's pristine coral atolls</span>, 
                  <span className="font-semibold text-blue-700"> the Maldives' overwater paradises</span>, and 
                  <span className="font-semibold text-blue-700"> Sri Lanka's cultural treasures</span>. Each destination represents a chapter in our story of excellence.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  We believe that luxury isn't just about opulent accommodations — it's about the seamless fusion of 
                  <span className="font-semibold text-orange-600"> authentic cultural immersion</span>, 
                  <span className="font-semibold text-orange-600"> personalized attention</span>, and 
                  <span className="font-semibold text-orange-600"> unforgettable moments</span> that money simply cannot buy elsewhere.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">500+ Happy Travelers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">10+ Years Experience</span>
                </div>
                
              </div>
            </div>
          </div>

          

          {/* Enhanced Expertise Section */}
          <div className="mb-20">
            <div className="text-start mb-12">
              <h2 className="text-3xl lg:text-4xl text-blue-900 font-bold mb-4">
                Our Signature Destinations
              </h2>
              <p className="text-xl text-slate-600 mx-auto">
                Three extraordinary destinations. Infinite possibilities. Unmatched expertise.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Lakshadweep",
                  subtitle: "India's Caribbean",
                  desc: "Navigate the complex world of permits and exclusive access with ease. From the turquoise lagoons of Agatti to the pristine beaches of Bangaram, we unlock India's most coveted island paradise. Experience coral diving, traditional island cuisine, and luxury eco-resorts that respect the delicate marine ecosystem.",
                  icon: "🌊",
                  features: ["Permit Assistance", "Eco-Luxury Resorts", "Coral Diving", "Local Cuisine"],
                  gradient: "from-orange-400 to-red-500"
                },
                {
                  title: "Maldives",
                  subtitle: "Overwater Paradise",
                  desc: "Indulge in the ultimate luxury with handpicked overwater villas, private sandbank picnics, and sunset yacht cruises. Our exclusive partnerships ensure you experience the Maldives beyond the ordinary — from swimming with manta rays to dining under the stars on deserted islands.",
                  icon: "🏖️",
                  features: ["Overwater Villas", "Private Transfers", "Marine Adventures", "Romantic Dinners"],
                  gradient: "from-orange-400 to-red-500"
                },
                {
                  title: "Sri Lanka",
                  subtitle: "Teardrop of India",
                  desc: "Discover a land where golden beaches meet ancient temples, tea plantations cascade down misty hills, and elephants roam freely in national parks. Our curated journeys blend heritage sites, luxury beach resorts, scenic train rides, and authentic cultural experiences into unforgettable adventures.",
                  icon: "🕌",
                  features: ["Cultural Heritage", "Tea Plantations", "Wildlife Safaris", "Beach Resorts"],
                  gradient: "from-orange-400 to-red-500"
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-transparent backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
                >
                  <div className={`text-5xl mb-4 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} w-fit shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-indigo-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-600 mb-4 uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <EnquirySection />

          {/* Enhanced Vision & Mission */}
          <div className="mb-10 mt-[-80px]">
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-blue-900 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                <p className="text-black leading-relaxed text-lg">
                  To redefine luxury travel by becoming the world's most trusted curator of premium beach and island experiences. We envision a future where every traveler can access authentic, sustainable, and transformative journeys that create lasting connections between people, cultures, and the natural world.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-blue-900 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                <p className="text-black leading-relaxed text-lg">
                  We exist to transform ordinary vacations into extraordinary stories. Through meticulous planning, local expertise, and unwavering commitment to excellence, we craft journeys that exceed expectations. Our motto remains: 
                  <span className="font-black text-orange-500"> "You dream, we design. You travel, we deliver."</span>
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { role: "Travel Consultants", desc: "Expert advisors who understand your dreams and craft the perfect itinerary", icon: "🧭" },
                { role: "Local Specialists", desc: "On-ground experts ensuring authentic experiences and seamless execution", icon: "🌍" },
                { role: "Support Team", desc: "24/7 assistance team ready to help at every step of your journey", icon: "🤝" }
              ].map((team, index) => (
                <div key={index} className="bg-transparent backdrop-blur-lg border border-white/80 rounded-2xl p-6 text-center shadow-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-start text-4xl mb-4">{team.icon}</div>
                  <h4 className="text-start font-bold text-xl text-blue-900 mb-3">{team.role}</h4>
                  <p className="text-start text-slate-700">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
          

          {/* Enhanced CTA */}
          <div className="text-center bg-blue-900 rounded-3xl shadow-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's turn your travel dreams into reality. Get in touch with our experts and start planning your perfect getaway today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Planning</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <div className="flex items-center gap-4">
                <a
                  href="mailto:info@yatrasutra.com"
                  className="group p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  title="Email Us"
                >
                  <span className="text-2xl">📧</span>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="group p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  title="WhatsApp"
                >
                  <span className="text-2xl">💬</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="group p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  title="Call Us"
                >
                  <span className="text-2xl">📞</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Personalized Service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}