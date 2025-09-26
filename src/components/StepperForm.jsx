import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";

// Form Data Hook
function useEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    budget: '',
    phone: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1: return formData.name.trim().length >= 2;
      case 2: return formData.destination.trim().length >= 2;
      case 3: return formData.budget.trim() !== '';
      case 4: return formData.phone.trim().length >= 10;
      default: return true;
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      destination: '',
      budget: '',
      phone: ''
    });
  };

  return { formData, updateField, isStepValid, resetForm };
}

// Main Enquiry Form Component
export default function TravelEnquiryForm({ 
  onSubmit = () => {},
  className = '',
  title = "Plan Your Dream Trip",
  subtitle = "Let's create your perfect getaway together"
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData, updateField, isStepValid, resetForm } = useEnquiryForm();
  
  const totalSteps = 4;
  const isLastStep = currentStep === totalSteps;

  const destinationOptions = [
    'Lakshadweep', 'Thailand', 'Maldives', 'Sri Lanka', 'Malaysia', 'Kerala', 'Other'
  ];

  const budgetOptions = [
    'Under ₹10,000', '₹15,000 - ₹20,000', '₹25,000 - ₹2,00,000'
  ];

  const handleNext = () => {
    if (isStepValid(currentStep)) {
      if (isLastStep) {
        handleComplete();
      } else {
        setDirection(1);
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsSubmitted(true);
    onSubmit(formData);
    
    // Auto reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      resetForm();
    }, 3000);
  };

  const handleStepClick = (step) => {
    if (step <= currentStep || isStepValid(step - 1)) {
      setDirection(step > currentStep ? 1 : -1);
      setCurrentStep(step);
    }
  };

  return (
    <section className={`w-full mt-1 md:mt-0 overflow-hidden relative ${className}`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 text-start sm:text-left ml-0 sm:ml-4">
          <h2 className="ml-2 mt-1 sm:mt-4 text-start text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-indigo-900">
            {title.split(' ')[0]}{" "}
            <span style={{ color: '#EA5327' }}>
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="ml-2 mt-2 sm:mt-3 text-left text-sm sm:text-base leading-5 sm:leading-6 md:leading-7 text-slate-700">
            {subtitle}
          </p>
        </div>

        {/* Grid Layout for Form + About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Glass Form Container */}
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl p-3 sm:p-4 md:p-6">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              {/* Step Indicators */}
              <div className="flex items-center justify-center p-4 sm:p-6 bg-blue-900 rounded-t-xl sm:rounded-t-2xl">
                {[1, 2, 3, 4, 5].map((step, index) => (
                  <React.Fragment key={step}>
                    <StepIndicator
                      step={step}
                      currentStep={isSubmitted ? 5 : currentStep}
                      isValid={step <= (isSubmitted ? 5 : currentStep)}
                      onClick={() => !isSubmitted && handleStepClick(step)}
                    />
                    {index < 4 && <StepConnector isComplete={(isSubmitted ? 5 : currentStep) > step} />}
                  </React.Fragment>
                ))}
              </div>

              {/* Form Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {isSubmitted ? (
                  <SuccessMessage />
                ) : (
                  <>
                    <StepContentWrapper currentStep={currentStep} direction={direction}>
                      <FormStep
                        step={currentStep}
                        formData={formData}
                        updateField={updateField}
                        destinationOptions={destinationOptions}
                        budgetOptions={budgetOptions}
                      />
                    </StepContentWrapper>

                    {/* Navigation */}
                    <div className={`flex mt-6 sm:mt-8 ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
                      {currentStep > 1 && (
                        <button
                          onClick={handleBack}
                          className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base text-slate-600 hover:text-slate-800 transition-colors duration-200 rounded-lg border border-slate-200 hover:bg-white/50 min-w-[100px] sm:min-w-[120px]"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        onClick={handleNext}
                        disabled={!isStepValid(currentStep)}
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all duration-200 min-w-[100px] sm:min-w-[120px] ${
                          isStepValid(currentStep)
                            ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {isLastStep ? 'Submit Enquiry' : 'Next'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-6 sm:p-8">
             <h3 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4">About Us</h3>
             <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
               At <span className="font-semibold">Yatrasutra Holidays Pvt Ltd</span>, we are experts in beach and island
               vacations, specializing in <span className="font-medium">Lakshadweep, Maldives, and Sri Lanka</span>.
               We curate premium holidays that combine <span className="italic">luxury, culture, and adventure</span>.
               <br /><br />
               With in-depth destination expertise, trusted partnerships, and tailored itineraries,
               we make every journey seamless and unforgettable. Our team of travel specialists has personally
               visited every location we recommend, ensuring authentic experiences that go beyond the generic and typical
               tourist attractions.
               <br /><br />
               </p>
               
            </div>
            
          </div>
           <div className=" text-center mt-6 sm:mt-6">
           <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-end w-full mx-auto md:mt-[-90px]">
             {/* Contact Icons */}
             <div className="hidden sm:flex items-center gap-3">
               <a href="tel:+1234567890" className="grid h-14 w-14 place-items-center rounded-lg border border-white/40 bg-white/60 text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/80 hover:scale-105">
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                 </svg>
               </a>
               <a href="mailto:info@yatrasutra.com" className="grid h-14 w-14 place-items-center rounded-lg border border-white/40 bg-white/60 text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/80 hover:scale-105">
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                 </svg>
               </a>
               <a href="https://wa.me/1234567890" className="grid h-14 w-14 place-items-center rounded-lg border border-white/40 bg-white/60 text-orange-600 shadow-sm backdrop-blur-sm transition hover:bg-white/80 hover:scale-105">
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                 </svg>
               </a>
             </div>
             
             <button className="inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-[15px] bg-orange-600 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-[100%] h-[60px] sm:w-auto">
             <FaInfoCircle className="mr-2 text-xl mt-0" size={20} />More about us 
             </button>
             
           </div>
         </div>
          
      </div>
    </section>
  );
}

// Form Step Component
function FormStep({ step, formData, updateField, destinationOptions, budgetOptions }) {
  const steps = {
    1: {
      title: "What's your name?",
      subtitle: "How we should address you",
      content: (
        <div className="space-y-4 px-2 sm:px-4">
            <input
            type="text"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base"
          />
          <p className="text-xs sm:text-sm text-slate-500">We'll use this to personalize your travel plan</p>
        </div>
      )
    },
    2: {
      title: "Where would you like to go?",
      subtitle: "Choose your dream destination",
      content: (
        <div className="space-y-4 px-2 sm:px-4">
          <select
            value={formData.destination}
            onChange={(e) => updateField('destination', e.target.value)}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base"
          >
            <option value="">Select a destination</option>
            {destinationOptions.map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
          {formData.destination === 'Other' && (
            <input
              type="text"
              onChange={(e) => updateField('destination', e.target.value)}
              placeholder="Tell us your dream destination"
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base"
            />
          )}
          <p className="text-xs sm:text-sm text-slate-500">Don't see your destination? Select "Other".</p>
        </div>
      )
    },
    3: {
      title: "What's your budget range?",
      subtitle: "This helps us tailor your perfect package",
      content: (
        <div className="space-y-3">
          {budgetOptions.map((budget) => (
            <label
              key={budget}
              className={`flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer transition-all ${
                formData.budget === budget
                  ? 'border-orange-500 bg-orange-50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={formData.budget === budget}
                onChange={(e) => updateField('budget', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                formData.budget === budget
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-slate-300'
              }`}>
                {formData.budget === budget && (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-slate-700 font-medium text-sm sm:text-base">{budget}</span>
            </label>
          ))}
        </div>
      )
    },
    4: {
      title: "Your contact number?",
      subtitle: "We'll reach out to finalize your plans",
      content: (
        <div className="space-y-4 px-2 sm:px-4">
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base"
          />
          <p className="text-xs sm:text-sm text-slate-500">We'll call you soon to discuss your trip</p>
        </div>
      )
    }
  };

  const currentStepData = steps[step];

  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">
        {currentStepData.title}
      </h3>
      <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
        {currentStepData.subtitle}
      </p>
      <div className="text-left">
        {currentStepData.content}
      </div>
    </div>
  );
}

// Step Content Wrapper with Animation
function StepContentWrapper({ currentStep, direction, children }) {
  const [height, setHeight] = useState('auto');
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, [currentStep]);

  return (
    <div style={{ height, overflow: 'hidden' }} className="transition-all duration-300">
      <div
        ref={containerRef}
        key={currentStep}
        className={`transition-all duration-300 ${
          direction > 0 ? 'animate-slideInRight' : direction < 0 ? 'animate-slideInLeft' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// Step Indicator
function StepIndicator({ step, currentStep, isValid, onClick }) {
  const status = currentStep === step ? 'active' : currentStep > step ? 'complete' : 'inactive';

  return (
    <button
      onClick={onClick}
      disabled={step === 5 && currentStep !== 5}
      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-200 ${
        status === 'complete'
          ? 'bg-orange-600 border-orange-600 text-white'
          : status === 'active'
          ? 'bg-orange-100 border-orange-500 text-orange-700'
          : isValid
          ? 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-400'
      } ${step === 5 && currentStep !== 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {status === 'complete' && step !== 5 ? (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : step === 5 && currentStep === 5 ? (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        step
      )}
    </button>
  );
}

// Step Connector
function StepConnector({ isComplete }) {
  return (
    <div className="flex-1 h-0.5 mx-3 bg-slate-200">
      <div
        className={`h-full transition-all duration-500 ${
          isComplete ? 'bg-orange-600 w-full' : 'bg-transparent w-0'
        }`}
      />
    </div>
  );
}

// Success Message
function SuccessMessage() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white/90 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Submitted!</h3>
        <p className="text-slate-600 mb-4">
          Thank you for your interest! Our travel experts will contact you within 24 hours to discuss your dream trip.
        </p>
        <div className="animate-pulse text-orange-600 text-sm">
          Starting fresh in a moment...
        </div>
      </div>
    </div>
  );
}

