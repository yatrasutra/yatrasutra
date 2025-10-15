import { Marquee } from "@/components/ui/marquee.jsx";

export default function TravelMarquee() {
  const handleReviewClick = () => {
    window.open('https://www.google.com/search?sca_esv=fb973f3e0fcee097&rlz=1C1PNFE_enIN1036IN1036&sxsrf=AE3TifN25kOPAdb7vfy0SNQg5kdr0Vlzuw:1760532229921&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6HKxFSIjDI0_8bKr-Yhv8Qx0o0dl4nR_be9vf-sPte6yF18FmxB_0k1v_Qyk3F5_H9fiCMgx09yXPstiWfCoyLvHQCM5yrCiGv_MTC_t8W5VQwImw%3D%3D&q=Yatrasutra+Holidays+Reviews&sa=X&ved=2ahUKEwiMkLjRnaaQAxWYyjgGHTqYMHIQ0bkNegQIMxAE&biw=1536&bih=730&dpr=1.25', '_blank');
  };

  return (
    <section className="w-full py-16 overflow-hidden mx-auto relative mt-[-30px]">
      {/* Section Header */}
      <div className="text-start mb-12 px-6">
        <span className="inline-flex items-start gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur-sm mb-4">
          ❤️ Real experiences from travelers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Stories from our{" "}
          <span style={{ color: "#EA5327" }}>adventure</span> family
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto">
       
        
        <Marquee pauseOnHover className="mb-4 [--duration:25s]" />
        <Marquee reverse pauseOnHover className="[--duration:30s]" />
      </div>

      {/* Bottom CTA */}
      <div className="text-end mt-12 mr-4">
        <button
          onClick={handleReviewClick}
          className="inline-flex items-center justify-end rounded-tr-xl rounded-bl-xl bg-blue-900 px-6 py-3 text-base text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <img src="/google.svg" className="w-6 h-6 mr-2" /> Reviews
        </button>
      </div>
    </section>
  );
}