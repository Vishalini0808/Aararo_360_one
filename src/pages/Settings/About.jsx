import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
            <span className="text-3xl">👶</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-300">Aararo 360°</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion in the beautiful journey of pregnancy and parenting. 
            Where traditional wisdom meets modern technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
              🎯
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide accessible, personalized, and culturally sensitive support for expecting mothers 
              and new parents, ensuring every family feels confident and supported throughout their 
              parenting journey with evidence-based guidance and compassionate care.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
              🔭
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where every parent has the tools, knowledge, and community support needed to 
              raise healthy, happy children while maintaining their own well-being, creating a 
              nurturing environment for generations to come.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-purple-100">Happy Parents</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-green-100">Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-orange-100">Expert Advisors</div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="text-purple-600">Different</span>
            </h2>
            <p className="text-xl text-gray-600">
              We blend traditional wisdom with modern technology to provide comprehensive care 
              that respects cultural values while embracing scientific advancements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌍",
                title: "360° Holistic Approach",
                description: "Comprehensive care covering physical health, mental wellness, nutrition, and family dynamics"
              },
              {
                icon: "👵",
                title: "Elder Wisdom Integrated",
                description: "Blending time-tested traditional knowledge with evidence-based modern practices"
              },
              {
                icon: "🤝",
                title: "Community Powered",
                description: "Connect with parents and experts in a supportive, judgment-free environment"
              },
              {
                icon: "📊",
                title: "AI-Powered Insights",
                description: "Personalized tracking and recommendations tailored to your unique journey"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "💝",
                  title: "Compassion First",
                  description: "We understand every parenting journey is unique and deserves empathy, patience, and personalized care."
                },
                {
                  icon: "🔒",
                  title: "Trust & Privacy",
                  description: "Your privacy and data security are our top priorities. We maintain the highest standards of confidentiality."
                },
                {
                  icon: "🚀",
                  title: "Continuous Innovation",
                  description: "We constantly evolve with cutting-edge technology to serve you better and stay ahead of your needs."
                },
                {
                  icon: "🌍",
                  title: "Inclusive Support",
                  description: "Supporting diverse families from all backgrounds, cultures, and parenting styles with equal respect."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-2xl">{value.icon}</div>
                    <h4 className="text-xl font-bold">{value.title}</h4>
                  </div>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology & Innovation */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by <span className="text-purple-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging cutting-edge technology to deliver personalized, intelligent support 
              for modern parents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Insights</h4>
              <p className="text-gray-600">
                Smart algorithms analyze your patterns to provide personalized recommendations 
                and proactive health insights.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Seamless Experience</h4>
              <p className="text-gray-600">
                Intuitive design and smooth functionality ensure you get the support you need 
                without any complications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Evidence-Based</h4>
              <p className="text-gray-600">
                All our recommendations are backed by scientific research and reviewed by 
                medical professionals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who trust Aararo 360° for comprehensive, 
            compassionate support throughout their parenting journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg">
              Download App
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default About;