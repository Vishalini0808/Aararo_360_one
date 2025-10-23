import React from 'react';
import { useNavigate } from 'react-router-dom';

const ParentingGuidelinesBanner = () => {
  const navigate = useNavigate();

  const guidelineCards = [
    {
      id: 1,
      icon: '🤰',
      title: 'Pregnancy Guide',
      description: 'Weekly pregnancy tracking, health tips, and expert advice',
      features: ['Week-by-week updates', 'Health monitoring'],
      gradient: 'from-blue-500 to-pink-500',
      comingSoon: false
    },
    {
      id: 2,
      icon: '👶',
      title: 'Baby Details & Tracking',
      description: 'Track your baby\'s growth, milestones, and development',
      features: ['Growth charts', 'Milestone tracker', 'Health records'],
      gradient: 'from-purple-500 to-pink-500',
      comingSoon: false
    },
    {
      id: 3,
      icon: '📊',
      title: 'Government Schemes',
      description: 'Explore government schemes that support maternal health and early childhood care',
      features: ['Baby cleaning', 'Feeding schedule', 'Mother health'],
      gradient: 'from-indigo-500 to-purple-500',
      comingSoon: false
    },
    {
      id: 4,
      icon: '💖',
      title: 'Baby Care Hub',
      description: 'Complete baby care information',
      features: ['Activity notes', 'Doctor contacts', 'Care tips'],
      gradient: 'from-pink-500 to-red-500',
      comingSoon: false
    },
    {
      id: 5,
      icon: '🛍',
      title: 'Baby & Mother Products',
      description: 'Essential products for baby and mother care',
      features: ['Product reviews', 'Shopping guide', 'Deals & offers'],
      gradient: 'from-green-500 to-blue-500',
      comingSoon: false
    },
    {
      id: 6,
      icon: '👨‍👩‍👧‍👦',
      title: 'Baby Sitting Assistance',
      description: 'Connect with other parents and experts',
      features: ['Baby Care', 'Experienced Persons', 'Trustable'],
      gradient: 'from-orange-500 to-pink-500',
      comingSoon: false
    }
  ];

  const handleCardClick = (cardId) => {
    if (cardId === 1) {
      navigate('/pregnancy-guide');
    } else if (cardId === 2) {
      navigate('/monitoringpage');
    } else if (cardId === 3) {
      navigate('/schemes');
    } else if (cardId === 4) {
      navigate('/elderlyadvice');
    } else if (cardId === 5) {
      navigate('/shop');
    } else if (cardId === 6) {
      navigate('/babysittingpage');
    }
  };

  return (
    <>
      {/* Main Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h4 className="text-2xl md:text-3xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              From pregnancy to toddler years - everything you need in one place
            </h4> 
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From pregnancy to toddler years - everything you need in one place
            </p> */}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {guidelineCards.map((card, index) => (
              <div
                key={card.id}
                className={`relative group bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeInUp ${
                  card.comingSoon ? 'opacity-80' : ''
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                onClick={() => !card.comingSoon && handleCardClick(card.id)}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r  from-purple-600 to-pink-500 rounded-t-3xl`}></div>

                {/* Coming Soon Badge */}
                {card.comingSoon && (
                  <div className="absolute top-4 right-4 bg-pink-500/10 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold border border-pink-500/20">
                    Coming Soon
                  </div>
                )}

                {/* Card Icon */}
                <div className="text-4xl mb-4">{card.icon}</div>

                {/* Card Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{card.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-white/80 border border-pink-200 px-3 py-1 rounded-full text-sm text-gray-600 font-medium"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    card.comingSoon
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                  }`}
                  disabled={card.comingSoon}
                >
                  {card.comingSoon ? 'Coming Soon' : 'Explore Now →'}
                </button>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-pink-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Parenting Journey Today
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Join thousands of parents who trust us for their parenting journey
              </p>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParentingGuidelinesBanner;