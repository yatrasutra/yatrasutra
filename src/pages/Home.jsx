import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero.jsx";
import Popular from "../components/Popular.jsx";
import TravelEnquiryForm from "../components/StepperForm.jsx";
import TravelMarquee from "../components/TravelMarquee.jsx";
import Domestic from "../components/Domestic.jsx";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="w-full">
      {/* Beta Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Website Under Maintenance</h3>
              <p className="text-slate-700 mb-1">
                Thank you for your visiting! Our website is currently in beta and undergoing development.                All features and packages will be available soon.
                 <p className="text-orange-600 font-semibold mt-4 mb-4">– Team Yatrasutra</p>
              </p>
           
              
              
              
              <button
                onClick={closePopup}
                className="mt-6 w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                Continue to Site
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Hero />
      
      <Popular />
      
      <TravelEnquiryForm />
      <Domestic />
      <TravelMarquee />
    </main>
  )
}