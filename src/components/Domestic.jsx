import { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const domesticPackages = [
  {
    key: 'kerala',
    name: 'Kerala',
    image: 'https://i.pinimg.com/736x/e7/c4/c4/e7c4c47a7f6ed3a83e281caf70af3694.jpg',
    description: "God's own country",
    position: 'md:col-span-2 md:row-span-2'
  },
  {
    key: 'meghalaya',
    name: 'Meghalaya',
    image: 'https://i.pinimg.com/736x/7b/1b/13/7b1b131b37f0cef3c89e55a48f71699b.jpg',
    description: 'Abode of clouds',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'himachal',
    name: 'Himachal Pradesh',
    image: 'https://i.pinimg.com/1200x/6c/bd/ae/6cbdae8146d8eb235085b34bce86faa9.jpg',
    description: 'Land of snow',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'ladakh',
    name: 'Ladakh',
    image: 'https://i.pinimg.com/1200x/3d/e1/e7/3de1e7e11e347f5773c83306986d4450.jpg',
    description: 'Land of high passes',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'sikkim',
    name: 'Sikkim',
    image: 'https://i.pinimg.com/736x/64/7e/b0/647eb0f58e3481667bb12290e7c90cc6.jpg',
    description: 'Paradise of Himalayas',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'kashmir',
    name: 'Kashmir',
    image: 'https://i.pinimg.com/1200x/4a/0c/cc/4a0ccc9b68fe1d7ea9ba9e80cb13dbee.jpg',
    description: 'Heaven on Earth',
    position: 'md:col-span-2 md:row-span-1'
  },
  {
    key: 'rajasthan',
    name: 'Rajasthan',
    image: 'https://i.pinimg.com/1200x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg',
    description: 'Land of kings',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'hyderabad',
    name: 'Hyderabad',
    image: 'https://i.pinimg.com/736x/03/32/f2/0332f29360b59cd0dac5fc42137b7233.jpg',
    description: 'City of pearls',
    position: 'md:col-span-1 md:row-span-1'
  },
  {
    key: 'odisha',
    name: 'Odisha',
    image: 'https://i.pinimg.com/1200x/ef/26/6a/ef266a54a684fbbf3cec96317509548c.jpg',
    description: 'Temple state of India',
    position: 'md:col-span-1 md:row-span-1'
  }
];

export default function Domestic() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="w-full mt-[-2px] md:mt-[-30px] overflow-hidden relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-start sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur-sm">
            Explore the beauty of India
          </span>

          <h2 className="mt-4 sm:mt-5 text-start text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-blue-900">
            Domestic{" "}
            <span style={{ color: '#EA5327' }}>destinations</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-left sm:text-left text-sm sm:text-base leading-6 sm:leading-7 text-slate-700 ">
            Discover the incredible diversity of India. From snow-capped mountains to tropical beaches, experience the magic of our homeland.
          </p>
        </div>

        {/* Glass Container */}
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl p-2 sm:p-2">
          {/* Responsive Bento Grid */}
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-6 sm:grid-rows-3 lg:grid-rows-3 gap-4 sm:gap-4 h-auto sm:h-[500px] lg:h-[600px] xl:h-[650px]">
              {domesticPackages.map((pkg, index) => (
                <article
                  key={pkg.key}
                  className={`group relative overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:z-10 cursor-pointer rounded-xl sm:rounded-2xl border border-white/20 shadow-lg min-h-[200px] sm:min-h-0 ${index === 0 || index === 5 ? 'sm:row-span-2' : 'sm:row-span-1'
                    } ${pkg.position}`}
                  onMouseEnter={() => setHoveredCard(pkg.key)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent transition-opacity duration-300 ${hoveredCard === pkg.key ? 'opacity-100' : 'opacity-0'
                      }`} />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2 sm:px-3 py-1 text-xs font-medium text-white border border-white/30">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      {index < 2 ? 'Featured' : 'Top pick'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-4 z-10">
                    <div className="space-y-1 sm:space-y-1">
                      <h3 className={`font-bold text-white ${pkg.position.includes('col-span-2')
                          ? 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl'
                          : 'text-lg sm:text-xl lg:text-2xl'
                        }`}>
                        {pkg.name}
                      </h3>

                      <p className={`text-white/90 ${pkg.position.includes('col-span-2')
                          ? 'text-sm sm:text-base lg:text-lg'
                          : 'text-xs sm:text-sm lg:text-base'
                        }`}>
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  {/* Glassmorphism overlay on hover */}
                  <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${hoveredCard === pkg.key ? 'opacity-100' : 'opacity-0'
                    }`} />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className=" text-center mt-6 sm:mt-6">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-end w-full mx-auto">
            <button 
              onClick={() => navigate('/domestic')}
              className="inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-[15px] bg-orange-600 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-[90%] h-[50px] sm:w-auto"
            >
              View all domestic destinations <MdKeyboardDoubleArrowRight className="ml-2 text-xl mt-1" size={25} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}