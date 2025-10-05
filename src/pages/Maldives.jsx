import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Maldives() {
  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero */}
      <div className="relative">
        <div className="mx-auto max-w-7xl mt-[-30px] md:mt-0 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Maldives <span className="text-orange-600">Tour Packages</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
              The Maldives, a paradise of over 1,000 coral islands, offers two distinct travel experiences: 
              <span className="font-semibold text-blue-700"> Private Island Resorts</span> for exclusive luxury stays and 
              <span className="font-semibold text-teal-700"> Public/Local Islands</span> for authentic Maldivian culture and budget-friendly getaways.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Luxury Resorts</span>
              <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">Local Islands</span>
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">Overwater Villas</span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Water Sports</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {/* Private Island Resorts */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-blue-900">1. Private Island Resort Packages</h2>
              </div>
              <p className="mt-2 text-slate-700">
                Exclusive luxury stays with overwater and beach villas, premium dining, and world-class service. 
                Designed for travelers seeking exclusivity, comfort, and premium services.
              </p>

              {/* 3N/4D */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">3 Nights / 4 Days</p>
                  <p className="text-xs text-slate-600">Luxury Private Island Experience</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Accommodation:</span> 2 Nights in Beach Villa + 1 Night in Water Villa
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Full Board / All Inclusive (resort dependent)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat or Seaplane from Male International Airport
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Non-motorized water sports, snorkeling, evening entertainment (as per resort)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Includes:</span> Taxes and Green Tax
                  </p>
                  <p className="mt-2 font-semibold text-blue-600">Average Starting Price: ₹95,000 – ₹1,20,000 per person</p>
                </div>
              </div>

              {/* 4N/5D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">4 Nights / 5 Days</p>
                  <p className="text-xs text-slate-600">Premium Private Island Experience</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Accommodation:</span> 2 Nights in Beach Villa + 2 Nights in Water Villa
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Full Board / All Inclusive (resort dependent)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat or Seaplane from Male International Airport
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Dolphin cruise / sunset fishing / sandbank trip (as per resort), snorkeling, water activities
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Includes:</span> Taxes and Green Tax
                  </p>
                  <p className="mt-2 font-semibold text-blue-600">Average Starting Price: ₹1,25,000 – ₹1,55,000 per person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Public/Local Island Packages */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">2. Public / Local Island Packages</h2>
              <p className="mt-2 text-slate-700">
                Ideal for budget-conscious travelers who want to explore the Maldives while experiencing local culture. 
                Stays are arranged in guesthouses managed by locals with modern facilities.
              </p>

              {/* 3N/4D */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">3 Nights / 4 Days</p>
                  <p className="text-xs text-slate-600">Budget-Friendly Local Experience</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Accommodation:</span> 3 Nights in guesthouse with AC rooms
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Breakfast included (Half / Full Board upgrades available)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat or Domestic Flight + Speedboat (island dependent)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Half-day snorkeling trip, sandbank visit, dolphin watching
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Includes:</span> Taxes and Green Tax
                  </p>
                  <p className="mt-2 font-semibold text-orange-600">Average Starting Price: ₹28,000 – ₹32,000 per person</p>
                </div>
              </div>

              {/* 4N/5D */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">4 Nights / 5 Days</p>
                  <p className="text-xs text-slate-600">Extended Local Island Experience</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Accommodation:</span> 4 Nights in guesthouse with AC rooms
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Breakfast included (Half / Full Board upgrades available)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat or Domestic Flight + Speedboat (island dependent)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Snorkeling trips, dolphin cruise, sandbank visits, cultural shows
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Includes:</span> Taxes and Green Tax
                  </p>
                  <p className="mt-2 font-semibold text-orange-600">Average Starting Price: ₹35,000 – ₹45,000 per person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Public Islands */}
          <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70"></div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900">3. Featured Public Islands</h2>
              <p className="mt-2 text-slate-700">
                Carefully selected local islands offering unique experiences and authentic Maldivian culture.
              </p>

              {/* Maafushi */}
              <div className="mt-6 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Maafushi</p>
                  <p className="text-xs text-slate-600">Speedboat from Male (30 mins)</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Stay:</span> 3N/4D or 4N/5D in guesthouse (standard room)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Breakfast included
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat from Male (30 mins)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Snorkeling, sandbank visit, dolphin cruise, optional water sports
                  </p>
                  <p className="mt-2 font-semibold text-amber-600">
                    Starting Price: ₹28,000 (3N) / ₹35,000 (4N) per person
                  </p>
                </div>
              </div>

              {/* Thulusdhoo */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Thulusdhoo</p>
                  <p className="text-xs text-slate-600">Speedboat from Male (40 mins)</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Stay:</span> 3N/4D or 4N/5D in guesthouse
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Breakfast included
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Speedboat from Male (40 mins)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Snorkeling, surfing trips, cultural experiences
                  </p>
                  <p className="mt-2 font-semibold text-amber-600">
                    Starting Price: ₹30,000 (3N) / ₹38,000 (4N) per person
                  </p>
                </div>
              </div>

              {/* Dhigurah */}
              <div className="mt-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Dhigurah (South Ari Atoll)</p>
                  <p className="text-xs text-slate-600">Domestic Flight + Speedboat (1.5 hrs approx.)</p>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                  <p className="mb-2">
                    <span className="font-semibold">Stay:</span> 3N/4D or 4N/5D in guesthouse
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Meal Plan:</span> Breakfast included
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Transfers:</span> Domestic Flight + Speedboat (1.5 hrs approx.)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Inclusions:</span> Whale shark safari, snorkeling, island tours
                  </p>
                  <p className="mt-2 font-semibold text-amber-600">
                    Starting Price: ₹31,000 (3N) / ₹42,000 (4N) per person
                  </p>
                </div>
              </div>

              {/* Additional Islands Grid */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Rasdhoo", transfer: "Speedboat from Male (1 hr 20 mins)", price3N: "₹29,000", price4N: "₹40,000", inclusions: "Diving, snorkeling, fishing trips" },
                  { name: "Ukulhas", transfer: "Speedboat from Male (1.5 hrs)", price3N: "₹29,500", price4N: "₹39,000", inclusions: "Snorkeling, fishing trips, island exploration" },
                  { name: "Fulidhoo", transfer: "Speedboat from Male (1 hr 15 mins)", price3N: "₹28,500", price4N: "₹37,000", inclusions: "Night fishing, snorkeling, cultural programs" }
                ].map((island, index) => (
                  <div key={index} className="rounded-xl border border-white/40 bg-white/80 backdrop-blur p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">{island.name}</p>
                    <p className="text-xs text-slate-600 mb-2">{island.transfer}</p>
                    <p className="text-xs text-slate-700 mb-2">{island.inclusions}</p>
                    <p className="text-xs font-semibold text-amber-600">
                      Starting: {island.price3N} (3N) / {island.price4N} (4N)
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/40 text-sm text-slate-700">
                ✅ <span className="font-semibold">Why Book with Us:</span> Wide range of packages covering both luxury resorts and budget guesthouses • Transparent pricing with no hidden charges • Carefully selected resorts and local islands for the best experiences • Assistance in planning and customization based on preferences
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700">
                  Enquire Now
                </button>
                <button className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg border border-orange-200 bg-white/80 px-5 py-3 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur transition hover:bg-white">
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