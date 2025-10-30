import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const packages = [
  { 
    key: 'lakshadweep', 
    name: 'Lakshadweep', 
    image: 'https://i.pinimg.com/736x/f4/63/c6/f463c63423fe47f5b82157dc4f2f22ca.jpg',
    description: 'Pristine coral islands',
    position: 'md:col-span-2 md:row-span-2'
  },
  { 
    key: 'srilanka', 
    name: 'Sri Lanka', 
    image: 'https://i.pinimg.com/1200x/7a/fb/18/7afb1867ab39dcc0187ca69d9318d791.jpg',
    description: 'Pearl of the Indian Ocean',
    position: 'md:col-span-1 md:row-span-1'
  },
  { key: 'malaysia', 
    name: 'Malaysia', 
    image: 'https://i.pinimg.com/1200x/c9/75/77/c97577f3302c0f994e5de1007bfd12ed.jpg',
    description: 'Truly Asia experience',
    position: 'md:col-span-1 md:row-span-1'
  },
   { 
    key: 'maldives', 
    name: 'Maldives', 
    image: 'https://i.pinimg.com/736x/9e/ea/8a/9eea8a8d5160ed40e8b55000a401f92a.jpg',
    description: 'Paradise on Earth',
    position: 'md:col-span-2 md:row-span-2'
  },
  { 
    key: 'thailand', 
    name: 'Thailand', 
    image: 'https://i.pinimg.com/1200x/86/63/49/866349dcbd04b86af456875a27dce5b6.jpg',
    description: 'Land of smiles',
    position: 'md:col-span-1 md:row-span-1'
  },
  { 
    key: 'vietnam', 
    name: 'Vietnam', 
    image: 'https://i.pinimg.com/1200x/fe/c4/95/fec4951b504d36c5729c70a5b9a23b61.jpg',
    description: "God's own country",
    position: 'md:col-span-1 md:row-span-1'
  },
];

export default function Popular() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleViewAllDestinations = () => {
    navigate('/international');
  };

  // Function to handle navigation to international page with filter
  const handleViewPackage = (packageName) => {
    // Convert package name to match filter format
    const formattedName = packageName
      .replace('Lakshadweep', 'Lakshadweep')
      .replace('Sri Lanka', 'Sri Lanka')
      .replace('Malaysia', 'Malaysia')
      .replace('Maldives', 'Maldives')
      .replace('Thailand', 'Thailand')
      .replace('Vietnam', 'Vietnam');
    
    navigate(`/international?category=${encodeURIComponent(formattedName)}`);
  };

  return (
    <section id="popular-destinations" className="w-full mt-[-80px] md:mt-[-90px] overflow-hidden relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-start sm:text-left">
          
          
          <h2 className="mt-4 sm:mt-5 text-start text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-blue-900">
            Popular{" "}
            <span style={{ color: '#EA5327' }}>packages</span>
          </h2>
          
          <p className="mt-3 sm:mt-4 text-left sm:text-left text-sm sm:text-base leading-6 sm:leading-7 text-slate-700 ">
            Discover destinations that speak to your wanderlust. Each journey crafted for unforgettable experiences.
          </p>
        </div>

        {/* Glass Container */}
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl p-2 sm:p-2">
          {/* Responsive Bento Grid */}
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-6 sm:grid-rows-3 lg:grid-rows-3 gap-4 sm:gap-4 h-auto sm:h-[500px] lg:h-[600px] xl:h-[650px]">
              {packages.map((pkg, index) => (
                <article
                  key={pkg.key}
                  className={`group relative overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:z-10 cursor-pointer rounded-xl sm:rounded-2xl border border-white/20 shadow-lg min-h-[200px] sm:min-h-0 ${
                    index === 0 || index === 3 ? 'sm:row-span-2' : 'sm:row-span-1'
                  } ${pkg.position}`}
                  onMouseEnter={() => setHoveredCard(pkg.key)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Background Image with Blur Effect */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    hoveredCard === pkg.key ? 'backdrop-blur-sm' : ''
                  }`}>
                    
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        hoveredCard === pkg.key ? 'scale-110' : 'group-hover:scale-110'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent transition-opacity duration-300 ${
                      hoveredCard === pkg.key ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>

                  {/* Top Badge */}
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-10 transition-all duration-300 ${
                    hoveredCard === pkg.key ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}>
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2 sm:px-3 py-1 text-xs font-medium text-white border border-white/30">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      {index < 2 ? 'Featured' : 'Top pick'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-4 z-10 transition-all duration-300 ${
                    hoveredCard === pkg.key ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}>
                    <div className="space-y-1 sm:space-y-1">
                      <h3 className={`font-bold text-white ${
                        pkg.position.includes('col-span-2') 
                          ? 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl' 
                          : 'text-lg sm:text-xl lg:text-2xl'
                      }`}>
                        {pkg.name}
                      </h3>
                      
                      <p className={`text-white/90 ${
                        pkg.position.includes('col-span-2') 
                          ? 'text-sm sm:text-base lg:text-lg' 
                          : 'text-xs sm:text-sm lg:text-base'
                      }`}>
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  {/* View Button on Hover */}
                  <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
                    hoveredCard === pkg.key ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button 
                      className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                      onClick={() => handleViewPackage(pkg.name)}
                    >
                      <MdKeyboardDoubleArrowRight className="text-white text-2xl ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className=" text-center mt-6 sm:mt-6">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-end w-full mx-auto">
            <button 
              onClick={handleViewAllDestinations}
              className="inline-flex items-center justify-center rounded-tr-[15px] rounded-bl-[15px] bg-orange-600 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-[90%] h-[50px] sm:w-auto"
            >
              View all destinations <MdKeyboardDoubleArrowRight className="ml-2 text-xl mt-1" size={25}  />
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}