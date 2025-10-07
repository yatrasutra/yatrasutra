import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



export default function SriLanka() {
  const navigate = useNavigate();

  const handleAllPackages = () => {
    navigate('/international?category=Sri Lanka');
  };

  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero */}
      <div className="relative">
        
        <div className="mx-auto max-w-7xl mt-[-30px] md:mt-0 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-indigo-900">
              Sri Lanka <span className="text-orange-600">Tour Packages</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
              Sri Lanka, the Pearl of the Indian Ocean, offers a perfect blend of heritage, romance, wildlife, and beach escapes.
              Our packages are carefully curated to cater to all types of travelers, with expanded day-by-day itineraries for every option.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Heritage</span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Honeymoon</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Beaches</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {/* Ramayana Heritage */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 opacity-70"></div>
            {/* Card Image */}
            
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-indigo-900">1. Ramayana Heritage Package</h2>
              </div>

              {/* 5N/6D */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">5 Nights / 6 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Nuwara Eliya – Ramboda – Chilaw</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival at Colombo Airport. Drive to Chilaw, visit Munneswaram Temple & Manavari Temple. Overnight in Colombo. Day 2: Drive to Kandy. Stop at Pinnawala Elephant Orphanage en route. Evening visit Temple of the Sacred Tooth Relic & cultural dance show. Overnight in Kandy. Day 3: Excursion to Ramboda. Visit Ramboda waterfalls & Hanuman Temple. Drive to Nuwara Eliya. Overnight stay. Day 4: Visit Seetha Amman Temple & Hakgala Ashok Vatika. Explore Gregory Lake & tea plantations. Overnight in Nuwara Eliya. Day 5: Visit Divurumpola Temple. Return to Kandy for local market shopping. Overnight in Kandy. Day 6: Transfer to Colombo for departure.
                  </p>
                  <p className="mt-2"><span className="font-semibold">Inclusions:</span> Hotels, transfers, daily breakfast + 2 dinners, guided temple visits, taxes.</p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹46,000 per person</p>
                </div>
              </div>

              {/* 6N/7D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">6 Nights / 7 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Nuwara Eliya – Ramboda – Trincomalee – Chilaw</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival at Colombo Airport. Drive to Chilaw. Visit Munneswaram Temple & Manavari Temple. Overnight in Colombo. Day 2: Transfer to Kandy. Stop at Pinnawala Elephant Orphanage. Visit Temple of the Tooth & cultural show. Overnight in Kandy. Day 3: Ramboda waterfalls & Hanuman Temple excursion. Drive to Nuwara Eliya. Overnight stay. Day 4: Visit Seetha Amman Temple & Hakgala Ashok Vatika. Explore Gregory Lake & local tea gardens. Overnight in Nuwara Eliya. Day 5: Travel to Trincomalee. Visit Koneswaram Temple & Shankari Devi Temple. Overnight in Trincomalee. Day 6: Relax at Nilaveli Beach. Optional water activities. Overnight in Trincomalee. Day 7: Transfer to Colombo for departure.
                  </p>
                  <p className="mt-2"><span className="font-semibold">Inclusions:</span> Hotels, transfers, breakfast + 3 dinners, guided temple visits, taxes.</p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹54,000 per person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Honeymoon Packages */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-70"></div>
            {/* Card Image */}
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-indigo-900">2. Honeymoon Packages</h2>

              {/* 3N/4D */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">3 Nights / 4 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Bentota</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival at Colombo Airport. Drive to Kandy. Visit Temple of Tooth Relic & Kandy Lake. Overnight in Kandy. Day 2: Scenic drive to Bentota. Evening candlelight dinner at beachside resort. Overnight in Bentota. Day 3: Water sports at Bentota beach, sunset river cruise. Overnight in Bentota. Day 4: Transfer to Colombo for departure.
                  </p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹32,000 per person</p>
                </div>
              </div>

              {/* 4N/5D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">4 Nights / 5 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Nuwara Eliya – Bentota</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival at Colombo Airport. Drive to Kandy. Visit Temple of Tooth Relic & Kandy Lake. Overnight in Kandy. Day 2: Transfer to Nuwara Eliya. Explore tea plantations, waterfalls & Gregory Lake. Overnight in Nuwara Eliya. Day 3: Full day in Nuwara Eliya. Visit Hakgala Botanical Gardens & Seetha Amman Temple. Overnight stay. Day 4: Transfer to Bentota. Beach leisure & evening candlelight dinner. Overnight in Bentota. Day 5: Departure via Colombo Airport.
                  </p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹40,000 per person</p>
                </div>
              </div>

              {/* 5N/6D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">5 Nights / 6 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Nuwara Eliya – Bentota – Galle</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival Colombo. Transfer to Kandy. Temple of Tooth Relic & Kandy Lake visit. Overnight in Kandy. Day 2: Transfer to Nuwara Eliya. Tea plantation visit & scenic spots. Overnight in Nuwara Eliya. Day 3: Explore Nuwara Eliya: Gregory Lake, Hakgala Gardens, Seetha Amman Temple. Overnight stay. Day 4: Drive to Bentota. Leisure beach activities. Overnight in Bentota. Day 5: Day excursion to Galle. Visit Galle Fort, lighthouse & shopping. Overnight in Bentota. Day 6: Departure via Colombo.
                  </p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹48,000 per person</p>
                </div>
              </div>

              {/* 6N/7D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">6 Nights / 7 Days</p>
                  <p className="text-xs text-slate-600">Destinations: Colombo – Kandy – Nuwara Eliya – Ella – Bentota</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold">Itinerary:</span> Day 1: Arrival Colombo. Transfer to Kandy. Temple of Tooth & Kandy Lake visit. Overnight in Kandy. Day 2: Transfer to Nuwara Eliya. Tea plantation & Gregory Lake. Overnight in Nuwara Eliya. Day 3: Visit Hakgala Gardens & Seetha Amman Temple. Overnight in Nuwara Eliya. Day 4: Scenic train ride to Ella. Visit Nine Arch Bridge & Ravana Falls. Overnight in Ella. Day 5: Drive to Bentota. Beach leisure & resort activities. Overnight in Bentota. Day 6: Water sports / spa day in Bentota. Overnight stay. Day 7: Departure via Colombo.
                  </p>
                  <p className="mt-1 font-semibold text-orange-600">Starting Price: ₹56,000 per person</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/40 text-sm text-slate-700">
                ✅ All packages include: 3★/4★ hotel accommodation (upgradeable), daily breakfast, private transfers, sightseeing, guide services & taxes
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


