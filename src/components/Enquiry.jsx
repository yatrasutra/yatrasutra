import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";


const EnquirySection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/filmaatic_productions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-r from-pink-100 to-rose-100",
      hoverBg: "hover:from-pink-200 hover:to-rose-200",
      shadowColor: "shadow-pink-200/50",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/+91 81296 67933",
      color: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-100 to-emerald-100",
      hoverBg: "hover:from-green-200 hover:to-emerald-200",
      shadowColor: "shadow-green-200/50",
    },
    {
      name: "Phone",
      icon: <FaPhoneAlt className="w-6 h-6" />,
      href: "tel:+91 81296 67933",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-100 to-cyan-100",
      hoverBg: "hover:from-blue-200 hover:to-cyan-200",
      shadowColor: "shadow-blue-200/50",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:yatrasutraholidays@gmail.com",
      color: "text-amber-600",
      bgColor: "bg-gradient-to-r from-amber-100 to-orange-100",
      hoverBg: "hover:from-amber-200 hover:to-orange-200",
      shadowColor: "shadow-amber-200/50",
    },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!", { id: toastId });
    } catch (err) {
      toast.error(err.message || "Failed to send message.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry-section" className="bg-transparent py-24 px-6 relative">
      <Toaster position="top-center" />
      <div className="container mx-auto w-full relative z-10">
        <div className="mb-10 text-start">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/80 rounded-3xl p-8 shadow-xl hover:scale-105 transition-all">
            <h3 className="text-2xl font-black text-indigo-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field) => (
                <div key={field}>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      rows="4"
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-400/50 shadow-sm"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field === "name" ? "Full Name" : "Email Address"}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/60 rounded-xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-400/50 shadow-sm"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 text-white font-bold rounded-xl shadow-lg flex justify-center items-center group transition-all ${
                  isSubmitting
                    ? "bg-gradient-to-r from-orange-400 to-red-400 opacity-70"
                    : "bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-4">
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 ${m.bgColor} border border-opacity-60 rounded-2xl flex items-center transition-all ${m.hoverBg} shadow-lg ${m.shadowColor} hover:-translate-y-1`}
              >
                <div className={`p-4 rounded-2xl bg-white/80 ${m.color} mr-4 shadow-md`}>{m.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 font-medium">Connect via</p>
                  <p className={`text-lg font-bold ${m.color}`}>{m.name}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
