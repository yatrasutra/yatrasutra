import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineKeyboardDoubleArrowRight, MdFilterList } from "react-icons/md";

export default function International() {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const countries = ["Maldives", "Sri Lanka", "Thailand", "Indonesia", "Malaysia", "Vietnam", "Dubai"];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/international`)
      .then((res) => setPackages(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.destination.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? pkg.destination.toLowerCase().includes(filter.toLowerCase()) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero */}
      <div className="relative">
        <div className="mx-auto max-w-7xl mt-[-30px] md:mt-0 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              International <span className="text-orange-600">Tour Packages</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
              Explore curated experiences across the world with transparent pricing, premium support, and flexible customization.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Best Sellers</span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Family Friendly</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Honeymoon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-white/50 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-lg border border-white/50 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm cursor-pointer"
              >
                <option value=""></option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <MdFilterList className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Category Heading */}
      {filter && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <h2 className="text-2xl font-bold text-indigo-900">
            {filter} <span className="text-orange-600">Packages</span>
          </h2>
          <p className="text-slate-600 mt-1">
            {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} found
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.$id}
              className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img src={pkg.image} alt={pkg.destination} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow">
                  {pkg.period}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-indigo-900">{pkg.destination}</h2>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{pkg.subtext || 'Handpicked itinerary with hotels, transfers, and guided experiences.'}</p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-orange-600">₹{pkg.price}</p>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-1 text-[11px] font-semibold text-yellow-700">
                    {pkg.ratings} ★
                  </span>
                </div>

                <div className="mt-5 flex justify-between">
                  <button className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg border border-orange-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur transition hover:bg-white">
                    Details
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700">
                    Book Now <MdOutlineKeyboardDoubleArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredPackages.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">No packages found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
