import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Samridhi Sabharwal",
    location: "New Delhi",
    body: "Amazing, well trusted, good service 👍👍 They took care of all the details.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbd1c0030f13b2ec0/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Agatti Island, Lakshadweep"
  },
  {
    name: "Ananthakrishnan S",
    location: "Kochi, Kerala",
    body: "Had an amazing trip to Kashmir. Everything was perfectly organized and the team made the journey comfortable, memorable, and truly unforgettable.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbdc00036a8fdebe8/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Kashmir"
  },
  {
    name: "Roushan Raj Singh",
    location: "Bihar",
    body: "We went to Lakshadweep and had a nice experience. The trip was simple, well arranged, and we enjoyed the island without any hassle.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbc480010886ee4a6/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Lakshadweep"
  },
  {
    name: "Paul Hongkung",
    location: "Panjabari, Assam",
    body: "We visited Lakshadweep as a family and had a really good experience. Everything went smoothly, and the team was responsive. A peaceful break with beautiful views and simple local food.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbe6100256133155c/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Lakshadweep"
  },
  {
    name: "Alokesh Bhattacharjee",
    location: "Assam, India",
    body: "We were a group of 8 in Lakshadweep, and the trip was amazing! Everything was perfectly organized, and the team was very helpful. Highly recommended!",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbea1002d842d04af/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Lakshadweep"
  },
  {
    name: "Jibesh Chakraborty",
    location: "Guwahati, Assam",
    body: "My family trip to Agatti, Lakshadweep was excellent. The resort, food, and water activities were amazing. A very hassle-free journey with great hospitality.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebc025002b3de8c4f0/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Agatti, Lakshadweep"
  },
  {
    name: "Adv. Aparna Wagle",
    location: "Mumbai, Maharashtra",
    body: "Our Maldives anniversary trip was curated beautifully by Yatrasutra. Every detail, from the resort to decorations, made our special day amazing. Thank you!",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbf8000161286119f/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Maldives"
  },
  {
    name: "Delmi Vadakkan",
    location: "Ireland",
    body: "Had a great experience in Malaysia. Yatrasutra organized everything perfectly, allowing us to enjoy every moment stress-free.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbfcc00382e381063/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Malaysia"
  },
  {
    name: "Sandeep D",
    location: "Karnataka",
    body: "We had a wonderful holiday in Lakshadweep! Yatrasutra Holidays provided outstanding service, and the resort staff were extremely polite and friendly. Highly recommended!",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/68ebbbcb0032e5820fc4/files/68ebbffd0037a0bce1cf/view?project=68e3521900146ef84822&mode=user",
    rating: 5,
    destination: "Agatti Island, Lakshadweep"
  }
];


// Testimonial Card Component
const TestimonialCard = ({ img, name, location, body, rating, destination }) => {
  return (
    <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border border-orange-500 bg-white/40 p-4 mx-3 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Header with avatar and info */}
      <div className="flex flex-row items-center gap-3 mb-3">
        <img 
          className="rounded-full ring-2 ring-orange-500/30 object-cover w-10 h-10 flex-shrink-0" 
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