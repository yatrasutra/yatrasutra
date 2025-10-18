import React from 'react';

export default function Cruise() {
  const handleAllPackages = () => {
    // Pre-filled WhatsApp message about Cordelia Cruises
    const message = `Hello! I'm interested in booking a cruise with Cordelia Cruises. Could you please provide more information about the available packages?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919746816609?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  

  return (
    <section className="w-full overflow-hidden relative bg-transparent">
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-28">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
                  Experience Luxury at Sea: <span className="text-orange-600">Cordelia Cruises 2025</span>
                </h1>
                <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
                  Set sail on an unforgettable journey aboard Cordelia Cruises' The Empress — India's most celebrated luxury cruise liner. 
                  Whether you crave adventure, relaxation, or world-class entertainment, Cordelia Cruises offers a perfect blend of all three. 
                  Step aboard A City on the Sea and discover a world of indulgence, style, and endless fun.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Luxury Experience</span>
                  <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">All-Inclusive</span>
                  <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">Premium Dining</span>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Entertainment</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ee7c0600086af945b4/view?project=68e3521900146ef84822&mode=user" 
                  alt="Cordelia Cruises The Empress" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          
          {/* Cruise Experience */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">🚢 The Cordelia Cruise Experience</h2>
              <p className="mt-2 text-slate-700">
                Discover the unparalleled luxury and comfort of India's premier cruise experience.
              </p>

              {/* Fitness & Wellness */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ee806300376634412e/view?project=68e3521900146ef84822&mode=user" 
                      alt="Fitness Center" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm font-semibold text-slate-800">🏋️ Fitness & Wellness at Sea</p>
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>Keep your fitness goals afloat while you sail! Cordelia's fully equipped fitness centre is designed for travellers who love to stay active. 
                      Enjoy ocean views as you work out, stretch, or meditate — keeping your body and mind in perfect balance throughout your voyage.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboard Spa */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" 
                      alt="Onboard Spa" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm font-semibold text-slate-800">💆 Rejuvenate at the Onboard Spa</p>
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>Unwind at Serena Spa, Cordelia's signature onboard retreat. From deep tissue massages to beauty therapies, thermal showers, and saunas — 
                      the spa is your sanctuary at sea. Book a couples' session or a private suite for an extra touch of luxury.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bars & Lounges */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ee8094003c7e802129/view?project=68e3521900146ef84822&mode=user" 
                      alt="Bars & Lounges" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm font-semibold text-slate-800">🍸 Bars & Lounges</p>
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>Sip and sail! Whether it's a romantic evening cocktail or a tropical drink by the pool, Cordelia's bars and lounges are the perfect places to relax. 
                      Each bar offers a fine selection of international spirits and signature concoctions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dining Delights */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ee8170001063884e1f/view?project=68e3521900146ef84822&mode=user" 
                      alt="Dining Delights" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm font-semibold text-slate-800">🍽️ Dining Delights</p>
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>Prepare for a culinary voyage! Enjoy everything from Oriental delicacies and Continental fare to Mughlai feasts and Indian street food. 
                      For our Jain guests, special menus are thoughtfully curated. And don't miss the dessert section — it's a dream for anyone with a sweet tooth!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entertainment */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://i.pinimg.com/1200x/54/7a/18/547a1855ae11b39fcafc1f202b64ac26.jpg" 
                      alt="Entertainment" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm font-semibold text-slate-800">🎭 Entertainment Extravaganza</p>
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>From Broadway-style shows to live music, magic performances, and dance nights — entertainment never stops aboard The Empress. 
                      Feeling lucky? Try your hand at the casino. Kids and teens can have a blast in their dedicated fun zones and game academies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation Options */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">🛏️ Accommodation Options</h2>
              <p className="mt-2 text-slate-700">
                Experience comfort like never before with Cordelia's wide range of staterooms and suites:
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Interior Standard / Upper / Premium",
                    desc: "Cozy, budget-friendly comfort for up to 4 guests.",
                    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ef9500000cf5305f6d/view?project=68e3521900146ef84822&mode=user"
                  },
                  {
                    title: "Ocean View (Standard, Upper, Premium)",
                    desc: "Wake up to serene sea views every morning.",
                    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ef957f002724717c3d/view?project=68e3521900146ef84822&mode=user"
                  },
                  {
                    title: "Balcony Suite",
                    desc: "Enjoy sunrises and sunsets from your private balcony.",
                    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ef956000269f37753b/view?project=68e3521900146ef84822&mode=user"
                  },
                  {
                    title: "Suite & Chairman's Suite",
                    desc: "Ultra-luxurious living with private jacuzzis, walk-in closets, and personalized service.",
                    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ef95720001a11fa6b3/view?project=68e3521900146ef84822&mode=user"
                  }
                ].map((room, idx) => (
                  <div key={idx} className="rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <img 
                          src={room.img}
                          alt={room.title}
                          className="rounded-lg w-full h-24 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-sm font-semibold text-slate-800">{room.title}</p>
                        <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                          <p>{room.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Itineraries */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">🌅 Featured Itineraries for 2025</h2>
              <p className="mt-2 text-slate-700">
                Explore a variety of routes from India's coastal cities to exotic international destinations.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "2 Nights & 3 Days",
                    subtitle: "Perfect for short getaways",
                    routes: ["Mumbai – At Sea – Kochi", "Mumbai – At Sea – Goa", "Chennai – At Sea – Chennai"],
                    desc: "Perfect for short getaways, these mini cruises are packed with relaxation, gourmet dining, and lively entertainment.",
                    img: "https://i.pinimg.com/1200x/a6/91/7c/a6917c2ed20178baa68c27163375b194.jpg"
                  },
                  {
                    title: "3 Nights & 4 Days",
                    subtitle: "Explore Lakshadweep",
                    routes: ["Kochi – Lakshadweep – At Sea – Mumbai", "Goa – Lakshadweep – At Sea – Mumbai"],
                    desc: "Explore India's tropical gem — Lakshadweep, known for its coral reefs and crystal-clear lagoons. Dive, snorkel, and soak in paradise!",
                    img: "https://i.pinimg.com/736x/12/bc/0c/12bc0cc4ceb069a5a378efaaa4e87a48.jpg"
                  },
                  {
                    title: "4 Nights & 5 Days",
                    subtitle: "Adventure meets elegance",
                    routes: ["Mumbai – At Sea – Lakshadweep – At Sea – Mumbai", "Visakhapatnam – Puducherry – Chennai"],
                    desc: "Adventure meets elegance with beach stops, on-deck fun, and premium luxury.",
                    img: "https://i.pinimg.com/1200x/8b/e1/36/8be13658603732729897454610f125ca.jpg"
                  },
                  {
                    title: "5 Nights & 6 Days",
                    subtitle: "Extended voyages",
                    routes: ["Mumbai – Goa – Lakshadweep – Mumbai", "Mumbai – Kochi – Lakshadweep – Mumbai", "Chennai – Hambantota – Trincomalee – Jaffna – Chennai"],
                    desc: "From the exotic islands of Sri Lanka to the vibrant coasts of Goa, these voyages redefine cruising.",
                    img: "https://i.pinimg.com/736x/0a/83/68/0a8368e084d44ab04137c75a2f67570b.jpg"
                  },
                  {
                    title: "10 Nights & 11 Days – International Route",
                    subtitle: "Grand voyage",
                    routes: ["Chennai – Singapore – Kuala Lumpur – Langkawi – Phuket – Back to Chennai"],
                    desc: "This grand voyage combines luxury, culture, and tropical bliss across Southeast Asia — a once-in-a-lifetime experience aboard The Empress.",
                    img: "https://i.pinimg.com/736x/c8/a7/6a/c8a76a2900569fbad19444fce83b6987.jpg"
                  }
                ].map((itinerary, idx) => (
                  <div key={idx} className="rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <img 
                          src={itinerary.img}
                          alt={itinerary.title}
                          className="rounded-lg w-full h-24 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-slate-800">{itinerary.title}</p>
                          <p className="text-xs text-slate-600">{itinerary.subtitle}</p>
                        </div>
                        <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                          <p className="mb-2 font-semibold">Routes:</p>
                          {itinerary.routes.map((route, ridx) => (
                            <p key={ridx}>• {route}</p>
                          ))}
                          <p className="mt-3">{itinerary.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Highlights */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">💰 Pricing Highlights</h2>
              <p className="mt-2 text-slate-700">
                Experience luxury at competitive prices with our exclusive offers.
              </p>

              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src="https://i.pinimg.com/1200x/bb/bb/b5/bbbbb559196d061467b668ad617cf115.jpg" 
                      alt="Cruise Pricing" 
                      className="rounded-lg w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                      <p>Packages start from <span className="font-bold text-orange-600">₹39,832</span> for short 2-night cruises and go up to <span className="font-bold text-orange-600">₹1,97,814</span> for luxurious 6-night voyages.</p>
                      <p className="mt-3">(Special deals and tax-inclusive offers vary by departure date — contact us for exclusive early-bird rates!)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Cordelia */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-full">
                  <h2 className="text-2xl font-bold text-blue-900">🌴 Why Choose Cordelia Cruises?</h2>
                  
                  <div className="mt-6 space-y-4">
                    {[
                      "India's premier cruise experience",
                      "Premium dining, entertainment, and spa facilities",
                      "Family-friendly activities and kids' programs",
                      "Multiple route options from Mumbai, Kochi, Chennai, Goa, and Visakhapatnam",
                      "Visa-free coastal and international sailing options"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
                            <span className="text-orange-600 text-sm">✓</span>
                          </div>
                        </div>
                        <p className="ml-3 text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/40 text-sm text-slate-700">
                    ✅ <span className="font-semibold">Book Your Voyage Today!</span> The ocean is calling — and The Empress awaits! 
                    Limited cabins available — reserve your spot before they're gone!
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button 
                      onClick={handleAllPackages}
                      className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700 md:w-[20%]"
                    >
                      Enquire on WhatsApp
                    </button>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}