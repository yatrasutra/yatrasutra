import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const EnquirySection = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact method data - updated with your color scheme
  const contactMethods = [
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/filmaatic_productions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-r from-pink-100 to-rose-100",
      borderColor: "border-pink-200/60",
      hoverBg: "hover:from-pink-200 hover:to-rose-200",
      shadowColor: "shadow-pink-200/50"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/+919946232437",
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-100 to-emerald-100",
      borderColor: "border-green-200/60",
      hoverBg: "hover:from-green-200 hover:to-emerald-200",
      shadowColor: "shadow-green-200/50"
    },
    {
      name: "Phone",
      icon: <FaPhone className="w-6 h-6" />,
      href: "tel:+919946232437",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-100 to-cyan-100",
      borderColor: "border-blue-200/60",
      hoverBg: "hover:from-blue-200 hover:to-cyan-200",
      shadowColor: "shadow-blue-200/50"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:filmaaticproduction@gmail.com",
      color: "text-amber-600",
      bgColor: "bg-gradient-to-r from-amber-100 to-orange-100",
      borderColor: "border-amber-200/60",
      hoverBg: "hover:from-amber-200 hover:to-orange-200",
      shadowColor: "shadow-amber-200/50"
    }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const response = await fetch('https://filmaatic-backend-neon.vercel.app/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      // Success - reset form and show success toast
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully! We\'ll get back to you soon.', { 
        id: toastId,
        duration: 4000 
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to send message. Please try again.', { 
        id: toastId,
        duration: 4000 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry-section" className="bg-transparent py-24 px-6 relative overflow-hidden">
      {/* Animated Background Elements - matching your style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       </div>

      {/* Toaster component with updated styling */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: 'bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg',
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#374151',
            border: '1px solid rgba(156, 163, 175, 0.5)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            zIndex: 1000,
            marginTop: '50px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
          loading: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#fff',
            },
          }
        }}
      />
      
      <div className="container mx-auto w-full relative z-10">
        {/* Section Header - Enhanced to match your style */}
        <div className="mb-10 text-start">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-blue-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
          
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Contact Form - Updated styling */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/80 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              
              <h3 className="text-2xl font-black text-indigo-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all shadow-sm"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all shadow-sm"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2"></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all shadow-sm"
                  placeholder="Tell us about your destination or inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 ${
                  isSubmitting 
                    ? 'bg-gradient-to-r from-orange-400 to-red-400 opacity-70' 
                    : 'bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600'
                } text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center group`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Methods - Updated to match your style */}
          <div className="space-y-8">
            <div className="text-center">
            
             
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 ${method.bgColor} ${method.borderColor} border rounded-2xl flex items-center transition-all duration-300 ${method.hoverBg} shadow-lg ${method.shadowColor} hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <div className={`p-4 rounded-2xl bg-white/80 ${method.color} mr-4 shadow-md group-hover:shadow-lg transition-all`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium">Connect via</p>
                    <p className={`text-lg font-bold ${method.color}`}>{method.name}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            
            
          </div>
        </div>

        

          </div>
    </section>
  );
};

export default EnquirySection;