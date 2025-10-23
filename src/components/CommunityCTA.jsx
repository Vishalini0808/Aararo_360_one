import React, { useState, useEffect } from 'react';

const CommunityCTA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const communityCards = [
    {
      id: 1,
      type: "Community",
      icon: "💬",
      title: "Ask Our Community",
      description: "Connect with 10K+ parents and 500+ healthcare experts for real-time support and advice.",
      stats: "10K+ Active Members",
      buttonText: "Join Discussion",
    },
    {
      id: 2,
      type: "Products",
      icon: "🛍",
      title: "Baby & Mother Products",
      description: "Curated essentials and trusted products recommended by pediatricians and experienced parents.",
      stats: "500+ Products",
      buttonText: "Explore Shop",
    },
    {
      id: 3,
      type: "Pregnancy",
      icon: "🤰",
      title: "Pregnancy Guide",
      description: "Complete week-by-week tracking with expert guidance and personalized health monitoring.",
      stats: "40 Week Tracker",
      buttonText: "Start Journey",
    },
    {
      id: 4,
      type: "Elderly Advice",
      icon: "👵",
      title: "Traditional Wisdom",
      description: "Time-tested advice from elders combined with modern pediatric recommendations.",
      stats: "Cultural Insights",
      buttonText: "Learn More",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % communityCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [communityCards.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % communityCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + communityCards.length) % communityCards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Complete Parenting Companion
          </h2> */}
          <p className="text-lg text-pink-600 max-w-2xl mx-auto">
            Access all resources and support for your parenting journey in one place
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
          >
            ‹
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 hover:translate-x-1"
          >
            ›
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {communityCards.map((card) => (
                <div key={card.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                        {card.type}
                      </span>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                        {card.stats}
                      </span>
                      
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {communityCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        {/* <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {communityCards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-transparent bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
              >
                <div className={`text-2xl mb-2 transition-transform duration-300 ${
                  index === currentIndex ? 'scale-110' : ''
                }`}>
                  {card.icon}
                </div>
                <span className={`text-sm font-medium ${
                  index === currentIndex ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {card.type}
                </span>
              </button>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default CommunityCTA;