import React from 'react';

const VisionMission = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 ">
            <span className="text-3xl text-white"></span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Vision & Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming maternal and child healthcare through technology and compassion
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl text-blue-600">👁</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A future where technology and healthcare unite for better outcomes for mothers and children.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  We envision healthcare where every mother receives <span className="font-semibold text-blue-600">personalized guidance</span> 
                  and emotional support from pregnancy to early childhood.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Where <span className="font-semibold text-purple-600">technology eliminates disparities</span> and ensures every child gets 
                  the best start in life, accessible to all families across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 lg:order-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl text-purple-600">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Taking actionable steps to turn our vision into reality for families across India.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8 lg:order-1">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  To <span className="font-semibold text-purple-600">empower Indian mothers</span> with accessible digital healthcare 
                  for pregnancy tracking and child development.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We <span className="font-semibold text-pink-600">bridge traditional healthcare with modern technology</span>, 
                  making quality care available to every family with medical accuracy and support.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;