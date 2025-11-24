import React, { useRef } from 'react';
import Hero from "../components/Hero.jsx";
import Popular from "../components/Popular.jsx";
import TravelEnquiryForm from "../components/StepperForm.jsx";
import TravelMarquee from "../components/TravelMarquee.jsx";
import Domestic from "../components/Domestic.jsx";

export default function Home() {
  const enquiryFormRef = useRef(null);

  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      <Hero onGetStartedClick={scrollToEnquiryForm} />
      
      <Popular />
      
      <div ref={enquiryFormRef}>
        <TravelEnquiryForm />
      </div>
      <Domestic />
      <TravelMarquee />
    </main>
  )
}