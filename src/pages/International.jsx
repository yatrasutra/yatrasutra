import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineKeyboardDoubleArrowRight, MdFilterList } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

export default function International() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchParams] = useSearchParams();

  const countries = ["All", "Maldives", "Sri Lanka", "Thailand", "Indonesia", "Malaysia", "Vietnam"];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/international`)
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Handle URL parameter for category filter
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && countries.includes(category)) {
      // If "All" is selected, clear the filter
      if (category === "All") {
        setFilter("");
      } else {
        setFilter(category);
      }
    }
  }, [searchParams]);

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.destination.toLowerCase().includes(search.toLowerCase());
    // If filter is empty or "All" is selected, show all packages
    const matchesFilter = !filter || filter === "All" ? true : pkg.category?.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setCurrentImageIndex(0);
    setIsDrawerOpen(true);
  };

  const handleWhatsApp = (pkg) => {
    const message = `Hi! I'm interested in the ${pkg.destination} package (₹${pkg.price}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919746816609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedPackage(null);
    setCurrentImageIndex(0);
  };

  // Get all images for the selected package
  const getPackageImages = (pkg) => {
    const images = [pkg.image];
    if (pkg.image2) images.push(pkg.image2);
    if (pkg.image3) images.push(pkg.image3);
    return images;
  };

  const nextImage = () => {
    const images = getPackageImages(selectedPackage);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = getPackageImages(selectedPackage);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-swipe functionality
  useEffect(() => {
    if (!isDrawerOpen || !selectedPackage) return;

    const images = getPackageImages(selectedPackage);
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Auto-swipe every 4 seconds

    return () => clearInterval(interval);
  }, [isDrawerOpen, selectedPackage]);

  // Loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-64 w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
    </div>
  );

  // Skeleton card component for loading state
  const SkeletonCard = () => (
    <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full animate-pulse">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
      <div className="relative h-44 w-full overflow-hidden bg-gray-200"></div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-16"></div>
          <div className="h-10 bg-gray-200 rounded-tr-lg rounded-bl-lg w-32"></div>
        </div>
      </div>
    </div>
  );

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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-white/50 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm min-w-0"
            />
            <div className="relative flex-shrink-0">
              <select
                value={filter || (countries.includes("All") ? "All" : "")}
                onChange={(e) => {
                  // If "All" is selected, clear the filter
                  if (e.target.value === "All") {
                    setFilter("");
                  } else {
                    setFilter(e.target.value);
                  }
                }}
                className="appearance-none px-3 py-3 pr-10 rounded-lg border border-white/50 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm cursor-pointer w-12 h-12"
              >
                {countries.map((country) => (
                  <option key={country} value={country === "All" ? "" : country}>
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
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.$id}
                className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-70"></div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={pkg.image} alt={pkg.destination} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow">
                    {pkg.period}
                  </span>
                  <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-1 text-[11px] font-semibold text-yellow-700 shadow">
                    {pkg.ratings} ★
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-indigo-900">{pkg.destination}</h2>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{pkg.subtext || 'Handpicked itinerary with hotels, transfers, and guided experiences.'}</p>
                  </div>
                  
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-bold text-orange-600">₹{pkg.price}</p>
                    <button 
                      onClick={() => handleBookNow(pkg)}
                      className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700"
                    >
                      Book Now <MdOutlineKeyboardDoubleArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPackages.length === 0 && !loading && (
              <p className="text-center text-gray-500 col-span-full">No packages found.</p>
            )}
          </div>
        )}
      </div>

      {/* Bottom Drawer */}
      {isDrawerOpen && selectedPackage && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={closeDrawer}
          />
          
          {/* Drawer */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-3xl lg:max-w-4xl lg:w-full lg:max-h-[90vh]">
            {/* Mobile Layout */}
            <div className="flex flex-col h-[80vh] lg:hidden">
              {/* Handle and Close Button */}
              <div className="flex justify-between items-center py-4 px-4">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                <button 
                  onClick={closeDrawer}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 pb-4">
                {/* Mobile Image Carousel */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6">
                  <img 
                    src={getPackageImages(selectedPackage)[currentImageIndex]} 
                    alt={selectedPackage.destination} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Navigation Arrows */}
                  {getPackageImages(selectedPackage).length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Image Indicators */}
                  {getPackageImages(selectedPackage).length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {getPackageImages(selectedPackage).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Header */}
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{selectedPackage.destination}</h2>
                  <p className="text-lg text-slate-600">{selectedPackage.period}</p>
                </div>

                {/* Package Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-orange-600">₹{selectedPackage.price}</span>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      {selectedPackage.ratings} ★
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
                    <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Itneraries</h3>
                    <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.itineraries}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Inclusions</h3>
                    <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.inclusions}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Exclusions</h3>
                    <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.exclusions}</p>
                  </div>
                </div>
              </div>

              {/* Fixed Button */}
              <div className="border-t border-gray-200 px-6 py-4 bg-white">
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWhatsApp(selectedPackage)}
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => window.open(`mailto:info@yatrasutra.com?subject=Inquiry about ${selectedPackage.destination} package&body=Hi, I'm interested in the ${selectedPackage.destination} package (₹${selectedPackage.price}). Could you please provide more details?`)}
                    className="flex items-center justify-center rounded-tr-lg rounded-bl-lg bg-blue-900 px-4 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex lg:h-[90vh] lg:flex-col lg:p-0">
              {/* Main Content Area */}
              <div className="lg:flex lg:flex-1 lg:overflow-hidden">
                {/* Content - Left Side (Desktop) */}
                <div className="lg:flex-1 lg:p-8 lg:overflow-y-auto">
                  {/* Desktop Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedPackage.destination}</h2>
                    <p className="text-xl text-slate-600">{selectedPackage.period}</p>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-orange-600">₹{selectedPackage.price}</span>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                        {selectedPackage.ratings} ★
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
                      <p className="whitespace-pre-wrap text-slate-700">{selectedPackage.description}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Itineraries</h3>
                      <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.itineraries}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Inclusions</h3>
                      <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.inclusions}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Exclusions</h3>
                      <p className="text-slate-700 whitespace-pre-wrap">{selectedPackage.exclusions}</p>
                    </div>
                  </div>
                </div>

                {/* Image - Right Side (Desktop) */}
                <div className="lg:flex-1 lg:relative">
                  <div className="h-full w-full rounded-r-3xl overflow-hidden relative">
                    <img 
                      src={getPackageImages(selectedPackage)[currentImageIndex]} 
                      alt={selectedPackage.destination} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Navigation Arrows */}
                    {getPackageImages(selectedPackage).length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Indicators */}
                    {getPackageImages(selectedPackage).length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {getPackageImages(selectedPackage).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* WhatsApp Button - Bottom Fixed */}
              <div className="border-t border-gray-200 px-8 py-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWhatsApp(selectedPackage)}
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Book on WhatsApp
                  </button>
                  <button
                    onClick={() => window.open(`mailto:info@yatrasutra.com?subject=Inquiry about ${selectedPackage.destination} package&body=Hi, I'm interested in the ${selectedPackage.destination} package (₹${selectedPackage.price}). Could you please provide more details?`)}
                    className="flex items-center justify-center rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}