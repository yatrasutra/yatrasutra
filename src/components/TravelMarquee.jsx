import { Marquee } from "@/components/ui/marquee.jsx";

export default function TravelMarquee() {
  return (
    <section className="w-full py-16 overflow-hidden mx-auto">
      {/* Section Header */}
      <div className="text-start mb-12 px-6">
        <span className="inline-flex items-start gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur-sm mb-4">
          ❤️ Real experiences from travelers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Stories from our <span style={{ color: '#EA5327' }}>adventure</span> family
        </h2>
        
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-90vw flex-col items-center justify-center overflow-hidden mx-auto">
        <Marquee pauseOnHover className="mb-4 [--duration:25s]" />
        <Marquee reverse pauseOnHover className="[--duration:30s]" />

     </div>

      {/* Bottom CTA */}
      <div className="text-end mt-12 mr-4">
        <a
          href="#testimonials"
          className="inline-flex items-center justify-end rounded-tr-xl rounded-bl-xl bg-blue-900 px-6 py-3 text-base text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <img src="/google.svg" className="w-6 h-6 mr-2" /> Reviews 
        </a>
      </div>
    </section>
  );
}