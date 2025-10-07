import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Lakshadweep() {
  const navigate = useNavigate();

  const handleAllPackages = () => {
    navigate('/domestic?category=Lakshadweep');
  };

  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero */}
      <div className="relative">
        <div className="mx-auto max-w-7xl mt-[-30px] md:mt-0 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Lakshadweep – <span className="text-orange-600">Limited Access, Unlimited Beauty</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
              Out of 36 islands, only 4 are open to travelers. Explore <span className="font-semibold text-blue-700">Agatti, Bangaram, Thinnakara, and Kavaratti</span> with our exclusive packages.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Limited Access</span>
              <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">4 Islands Open</span>
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">Special Permits</span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">All-Inclusive</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {/* Island Highlights */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">1. Island Highlights</h2>
              <p className="mt-2 text-slate-700">
                Discover the four exclusive islands open for tourism in Lakshadweep, each offering unique experiences and beauty.
              </p>

              {/* Agatti Island */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Agatti Island</p>
                  <p className="text-xs text-slate-600">Gateway Island • Adventure Hub • Airport Access</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Only island with an airport</p>
                  <p>• Offers all-inclusive water activities or normal stay packages</p>
                  <p>• Main hub for water sports and excursions</p>
                </div>
              </div>

              {/* Bangaram Island */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Bangaram Island (Taj Property)</p>
                  <p className="text-xs text-slate-600">Luxury Lagoon • Scuba Diving • Bioluminescence</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Exclusive Taj-managed property with luxury cocoon & shell cottages</p>
                  <p>• Premium luxury experience with pristine lagoon</p>
                  <p>• Famous for bioluminescence phenomena</p>
                </div>
              </div>

              {/* Thinnakara Island */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Thinnakara Island (Praveg Property)</p>
                  <p className="text-xs text-slate-600">Secluded Paradise • Camping-Style Luxury • Stargazing</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Praveg luxury tents, ideal for couples & nature lovers</p>
                  <p>• Stay style similar to Bangaram packages</p>
                  <p>• Perfect for stargazing and secluded beach experience</p>
                </div>
              </div>

              {/* Kavaratti Island */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Kavaratti Island</p>
                  <p className="text-xs text-slate-600">Cultural Capital • Scenic Beauty • Authentic Vibe</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Available only as single-island stay, not in combos</p>
                  <p>• Cultural hub with local experiences</p>
                  <p>• Authentic Lakshadweep cultural experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Packages */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">2. Featured Packages</h2>
              <p className="mt-2 text-slate-700">
                Curated packages for different preferences - from adventure-packed to luxury experiences.
              </p>

              {/* Ocean Whisper - Agatti Scuba Package */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Ocean Whisper – Agatti Scuba Package (Main Product)</p>
                  <p className="text-xs text-slate-600">3 Nights / 4 Days • All-Inclusive</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Destination:</span> Agatti Island, Lakshadweep
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Category:</span> All-Inclusive (Stay, Meals, Sightseeing, Water Activities & Entry Permit Included)
                  </p>
                  <p className="mb-3">
                    Ocean Whisper is an all-inclusive getaway to Agatti Island, curated for adventure seekers and marine life lovers.
                  </p>
                  
                  <div className="mb-3">
                    <span className="font-semibold">Itinerary:</span>
                    <p className="mt-1">• Day 1: Arrival & Coastal Welcome – Arrive at Agatti, transfer to beachfront property, explore beach, dinner, overnight stay.</p>
                    <p>• Day 2: Scuba Diving & Island Wonders – Breakfast, scuba diving session, snorkeling, visit Kalpetti Island, relaxation, dinner, overnight.</p>
                    <p>• Day 3: Jetski & Optional Thinnakara Visit – Morning Jetski, lunch at Agatti, optional Thinnakara Island & Sandbank excursion, dinner, overnight.</p>
                    <p>• Day 4: Leisure Morning & Departure – Early morning beach walk, breakfast, check-out, transfer to airport.</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• Welcome drink • Entry permits to Agatti • Airport pickup & drop • Beachfront accommodation • All meals</p>
                    <p>• Scuba diving session • Snorkeling, kayaking, glass-bottom boat ride • Jetski ride • Guided Kalpetti Island visit</p>
                    <p>• Heritage/environmental fees • Personal assistance & dedicated guide • All government taxes & service charges</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-orange-600">Price: ₹31,499 per person</p>
                </div>
              </div>

              {/* Agatti All-Inclusive Package */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Agatti All-Inclusive Package</p>
                  <p className="text-xs text-slate-600">3 Nights / 4 Days</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <div className="mb-3">
                    <span className="font-semibold">Itinerary:</span>
                    <p className="mt-1">• Day 1: Arrival Agatti – Airport pickup, transfer to beachfront property, relax, dinner, overnight.</p>
                    <p>• Day 2: Agatti Sightseeing – Museum, beaches, jetties, optional Kalpetti Island visit, dinner, overnight.</p>
                    <p>• Day 3: Excursions – Bangaram Lagoon or Thinnakara visit, sandbank visit, glass-bottom boat ride, dinner, overnight.</p>
                    <p>• Day 4: Leisure & Departure – Breakfast, check-out, airport transfer.</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• Entry permit & heritage fee • Airport pickup & drop • 3 nights beachfront AC stay</p>
                    <p>• Kalpetti Island visit & sightseeing • Agatti sightseeing: museum, beaches, jetties</p>
                    <p>• Excursions: Bangaram Lagoon, Thinnakara, sandbank • Glass-bottom boat ride • Experienced local guide</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-orange-600">Price: ₹28,000 per person</p>
                </div>
              </div>

              {/* Agatti Normal Stay Package */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Agatti Normal Stay Package</p>
                  <p className="text-xs text-slate-600">3 Nights / 4 Days • Budget Option</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <div className="mb-3">
                    <span className="font-semibold">Itinerary:</span>
                    <p className="mt-1">• Day 1: Arrival & Welcome – Airport pickup, transfer to homestay, relax, dinner, overnight.</p>
                    <p>• Day 2: Agatti Sightseeing – Museum, beaches, jetties, lunch/dinner, overnight stay.</p>
                    <p>• Day 3: Free Day – Optional beach activities or local exploration, dinner, overnight stay.</p>
                    <p>• Day 4: Departure – Breakfast, check-out, airport transfer.</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• 3 nights homestay accommodation • All meals (veg/non-veg) • Entry permit & documentation</p>
                    <p>• Welcome drink, tea/coffee • Tour guide services</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-orange-600">Price: ₹15,500 per adult</p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury & Special Packages */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">3. Luxury & Special Packages</h2>
              <p className="mt-2 text-slate-700">
                Premium experiences at Taj and Praveg properties for discerning travelers.
              </p>

              {/* Bangaram Package */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Bangaram Package (Taj Property)</p>
                  <p className="text-xs text-slate-600">3 Nights / 4 Days • Luxury Experience</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <div className="mb-3">
                    <span className="font-semibold">Itinerary:</span>
                    <p className="mt-1">• Day 1: Arrival Agatti & Transfer to Bangaram – Relax at lagoon, dinner, overnight.</p>
                    <p>• Day 2: Bangaram Leisure – Explore lagoon, water activities at extra cost, dinner, overnight.</p>
                    <p>• Day 3: Optional Excursions – Snorkeling, kayaking, parasailing, bioluminescence trail, yoga on beach, overnight.</p>
                    <p>• Day 4: Departure – Transfer back to Agatti Airport.</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• Transfers: Agatti ↔ Bangaram • Accommodation with meals (pure vegetarian, Taj-managed)</p>
                    <p>• Permits & taxes included • Personal assistance</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-amber-600">Contact for Pricing</p>
                </div>
              </div>

              {/* Thinnakara Package */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Thinnakara Package (Praveg Property)</p>
                  <p className="text-xs text-slate-600">2 / 3 / 4 Nights • Luxury Tents</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <div className="mb-3">
                    <span className="font-semibold">Itinerary:</span>
                    <p className="mt-1">• Day 1: Arrival Agatti & Transfer to Thinnakara – Settle into luxury tents, beach leisure, dinner, overnight.</p>
                    <p>• Day 2: Thinnakara Exploration – Snorkeling, stargazing, island walks, dinner, overnight.</p>
                    <p>• Day 3: Optional Water Activities – Kayaking, glass-bottom boat rides, relaxation, dinner, overnight.</p>
                    <p>• Day 4: Departure – Breakfast, transfer back to Agatti Airport.</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• Transfers: Agatti ↔ Thinnakara • Luxury tent stay • Meals included</p>
                    <p>• Permits & taxes included</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-amber-600">Contact for Pricing</p>
                </div>
              </div>

              {/* Multi-Island Combo Packages */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Multi-Island Combo Packages</p>
                  <p className="text-xs text-slate-600">Experience Multiple Islands</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-3 font-semibold">2-Island Combos (3N/4D):</p>
                  <p>• Agatti + Bangaram</p>
                  <p>• Agatti + Thinnakara</p>
                  <p>• Bangaram + Thinnakara</p>
                  
                  <p className="mt-3 mb-3 font-semibold">3-Island Combo (4N/5D):</p>
                  <p>• Agatti + Bangaram + Thinnakara</p>
                  
                  <p className="mt-3 mb-2">
                    <span className="font-semibold">Sample Itinerary for 2N Agatti + 2N Bangaram:</span>
                  </p>
                  <p>• Day 1: Arrival Agatti – Welcome, sightseeing, beach sunset</p>
                  <p>• Day 2: Water sports & optional Kalpetti visit</p>
                  <p>• Day 3: Transfer to Bangaram – Lagoon exploration, sunset</p>
                  <p>• Day 4: Full-day Bangaram – Optional Thinnakara visit, water sports</p>
                  <p>• Day 5: Breakfast, transfer to Agatti Airport</p>
                  
                  <div className="mt-3 mb-2">
                    <span className="font-semibold">Inclusions:</span>
                    <p className="mt-1">• Accommodation, meals, permits, inter-island transfers, local guide</p>
                    <p>• Activities included in Agatti all-inclusive; other activities optional at extra cost</p>
                  </div>
                  
                  <p className="mt-2 font-semibold text-amber-600">Custom Pricing Based on Combination</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/40 text-sm text-slate-700">
                ✅ <span className="font-semibold">Exclusivity Highlights:</span> Travel to Lakshadweep requires special permits – we arrange it • Limited resorts • Limited access • Maximum experience • All packages include permit arrangements and local guidance
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700">
                  Enquire Now
                </button>
                <button 
                  onClick={handleAllPackages}
                  className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg border border-orange-200 bg-white/80 px-5 py-3 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  All Packages
                  <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-xl mt-1" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}