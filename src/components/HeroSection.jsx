import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center overflow-hidden px-25">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-19 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
           

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight ">
              Your Complete{' '}
             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-size-300 animate-gradient">
              Pregnancy & Parenting
             </span>

             <div className="animate-float">
              {/* Floating content */}
             </div>
              Companion
            </h1>
            
            <p className="text-xl lg:text-1xl text-gray-600 font-semibold leading-relaxed max-w-2xl mx-auto  lg:mx-0 ">
              Nurturing Mothers, Growing Futures - Your 5-Year Parenting Companion. 
              From bump to brilliance - Your trusted guide through pregnancy and beyond.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3.5 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-10 py-3.5 rounded-2xl font-semibold text-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>
            
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="pregnantlady2.png"
                    alt="Happy pregnant mother enjoying her journey with modern parenting app"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>           
            </div>
          </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-yellow-200/40 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl"></div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg 
          className="w-full h-20 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;