import { cn } from "@/lib/utils";

// Travel testimonials data matching your app's travel theme
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    body: "YatraSutra made our Goa trip absolutely perfect! Every detail was handled beautifully.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=fac",
    rating: 5,
    destination: "Goa"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    body: "From Kerala backwaters to hill stations - they curated memories we'll treasure forever.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    destination: "Kerala"
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad, India",
    body: "The Rajasthan itinerary was magical! Every palace, every sunset perfectly planned.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    destination: "Rajasthan"
  },
  {
    name: "Vikram Singh",
    location: "Bangalore, India",
    body: "Himachal Pradesh adventure exceeded expectations. They handle chaos, we just packed!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    destination: "Himachal"
  },
  {
    name: "Meera Iyer",
    location: "Chennai, India",
    body: "Tamil Nadu temple tour was spiritually enriching and flawlessly organized.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    destination: "Tamil Nadu"
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad, India",
    body: "Kashmir valley trip was like a dream. Every moment was perfectly curated!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    destination: "Kashmir"
  }
];

// Testimonial Card Component
const TestimonialCard = ({ img, name, location, body, rating, destination }) => {
  return (
    <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border border-orange-500 bg-white/80 p-4 mx-3 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Header with avatar and info */}
      <div className="flex flex-row items-center gap-3 mb-3">
        <img 
          className="rounded-full ring-2 ring-orange-500/30" 
          width="40" 
          height="40" 
          alt={name}
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-blue-900">
            {name}
          </figcaption>
          <p className="text-xs text-slate-600 font-medium">{location}</p>
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-orange-500 text-sm">★</span>
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-sm text-slate-700 leading-relaxed mb-3">
        "{body}"
      </blockquote>

      {/* Destination badge */}
      <div className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1">
        <span className="text-xs font-medium text-orange-700">📍 {destination}</span>
      </div>
    </figure>
  );
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical && !reverse,
              "animate-marquee-reverse flex-row": !vertical && reverse,
              "animate-marquee-vertical flex-col": vertical && !reverse,
              "animate-marquee-vertical-reverse flex-col": vertical && reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`${i}-${index}`} {...testimonial} />
            ))}
          </div>
        ))}
      
      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes marquee-vertical-reverse {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse var(--duration) linear infinite;
        }
        
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
        
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse var(--duration) linear infinite;
        }
      `}</style>
    </div>
  );
}