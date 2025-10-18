import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formData, updateField, isStepValid, resetForm } = useEnquiryForm();
  const navigate = useNavigate();
  
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

  const handleSubmitToAPI = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your travel plan request...");
    
    try {
      // Map budget to price to match backend model
      const requestData = {
        name: data.name,
        destination: data.destination,
        price: data.budget, // Map budget to price
        phone: data.phone
      };

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/planrequest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      
      const result = await res.json();
      
      if (!res.ok) throw new Error(result.error || "Failed to submit request");
      
      toast.success("Travel plan request submitted successfully!", { id: toastId });
      return result;
    } catch (err) {
      toast.error(err.message || "Failed to submit request.", { id: toastId });
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComplete = async () => {
    try {
      await handleSubmitToAPI(formData);
      setIsSubmitted(true);
      onSubmit(formData);
      
      // Auto reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(1);
        resetForm();
      }, 3000);
    } catch (error) {
      // Error already handled by toast
      console.error("Submission error:", error);
    }
  };

  const handleStepClick = (step) => {
    if (step <= currentStep || isStepValid(step - 1)) {
      setDirection(step > currentStep ? 1 : -1);
      setCurrentStep(step);
    }
  };

  return (
    <section className={`w-full mt-1 md:mt-[-30px] overflow-hidden relative ${className}`}>
      <Toaster position="top-center" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 text-start sm:text-left">
          <h2 className="mt-1 sm:mt-4 text-start text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-indigo-900">
            {title.split(' ')[0]}{" "}
            <span style={{ color: '#EA5327' }}>
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 text-left text-sm sm:text-base leading-5 sm:leading-6 md:leading-7 text-slate-700">
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
                        disabled={!isStepValid(currentStep) || isSubmitting}
                        className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all duration-200 min-w-[100px] sm:min-w-[120px] ${
                          isStepValid(currentStep)
                            ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Submitting...
                          </div>
                        ) : isLastStep ? 'Submit Enquiry' : 'Next'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Exclusive Cruise Voyage Card */}
          <div className="relative bg-blue-900 rounded-2xl shadow-2xl overflow-hidden h-full">
            {/* Luxury Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ✨ EXCLUSIVE
              </div>
            </div>
            
            {/* Background Pattern */}
          
            <div className="relative z-10 p-6 sm:p-8">
              {/* Cruise Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full p-1 flex items-center justify-center backdrop-blur-sm">
                  <img 
                    src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ee7c0600086af945b4/view?project=68e3521900146ef84822&mode=user" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
            </div>
            
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Cordelia Cruise Voyage</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 leading-relaxed">
                Experience the ultimate luxury with our premium cruise packages to exotic destinations. 
                Sail through crystal-clear waters while enjoying world-class amenities and personalized service.
              </p>
              
              {/* Features */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-blue-100 text-sm">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  All-inclusive luxury packages
          </div>
                <div className="flex items-center text-blue-100 text-sm">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                 </svg>
                  Premium dining & entertainment
                </div>
                <div className="flex items-center text-blue-100 text-sm">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                 </svg>
                  Private shore excursions
                </div>
             </div>
             
              <button 
               onClick={() => navigate('/cruise')}
               className="mt-6 w-full md:w-[40%] bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:translate-x-2 hover:-translate-y-1 hover:scale-105 active:translate-x-0 active:translate-y-0 border-b-4 border-r-2 border-orange-700 hover:border-orange-600 active:border-b-2 active:border-r-0"
             >
               Book Now
             </button>
           </div>
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
    <div className="text-start">
      <h3 className="ml-2 text-lg sm:text-xl md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">
        {currentStepData.title}
      </h3>
      <p className="ml-2 text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
        {currentStepData.subtitle}
      </p>
      <div className="text-start">
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