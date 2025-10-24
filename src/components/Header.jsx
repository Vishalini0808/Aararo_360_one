import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('aararo_user') !== null;
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('aararo_user')) : null;
  const navigate = useNavigate();
  const location = useLocation();

  const moreItems = [
    { 
      name: 'Schemes', 
      path: '/schemes', 
      description: 'Government & Private Schemes',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      name: 'Vaccinations', 
      path: '/baby-tracking', 
      description: 'Vaccine Schedule & Tracker',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      name: 'Shop', 
      path: '/shop', 
      description: 'Baby Products & Essentials',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      name: 'Child Growth', 
      path: '/elderlyadvice', 
      description: 'Growth Charts & Milestones',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      name: 'Hospitals', 
      path: '/monitoringpage', 
      description: 'Find Maternity Hospitals',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      name: 'Nutrition', 
      path: '/nutrition', 
      description: 'Diet Plans & Recipes',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'PregnancyGuide', path: '/pregnancy-guide' },
    { name: 'Elderly Advice', path: '/elderlyadvice' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setIsMoreOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('aararo_user');
    navigate('/signin');
  };

  const handlePremium = () => {
    navigate('/settings/premium');
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 p-2.5  ${
          isScrolled 
            ? 'bg-gradient-to-r from-pink-50/95 via-white to-blue-50/95 backdrop-blur-xl border-b border-pink-200/30 shadow-lg h-16' 
            : 'bg-gradient-to-r from-pink-50/90 via-white to-blue-50/90 backdrop-blur-lg border-b border-pink-200/20 h-20'
        }`}
        role="banner"
      >
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-200/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group flex-shrink-0"
              aria-label="Aararo 360° - Home"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                <img 
                  src="aararo_logo.png" 
                  alt="ஆராரோ 360°" 
                  className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  ஆராரோ 360°
                </span>
                <span className="text-xs text-gray-600 font-medium tracking-wide">Pregnancy Companion</span>
              </div>
            </Link>

            {/* Desktop Navigation - Perfectly Aligned */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-12" aria-label="Main navigation">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-semibold transition-all duration-300 py-2 px-1 text-[15px] ${
                      isActivePath(item.path)
                        ? 'text-pink-600'
                        : 'text-gray-700 hover:text-pink-600'
                    }`}
                    aria-current={isActivePath(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                    {isActivePath(item.path) && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                    )}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    onMouseEnter={() => setIsMoreOpen(true)}
                    className="flex items-center space-x-2 font-semibold text-gray-700 hover:text-pink-600 transition-all duration-300 py-2 px-1 text-[15px]"
                    aria-expanded={isMoreOpen}
                    aria-haspopup="true"
                  >
                    <span>More</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMoreOpen && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-pink-200/30 py-5"
                      onMouseLeave={() => setIsMoreOpen(false)}
                      role="menu"
                    >
                      <div className="px-6 pb-4 border-b border-pink-200/20">
                        <h4 className="font-bold text-gray-900 text-lg">Features</h4>
                        <p className="text-sm text-gray-600 mt-1">Everything you need for your parenting journey</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 p-4">
                        {moreItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-pink-50/80 transition-all duration-300 group border border-transparent hover:border-pink-200/50"
                            onClick={() => setIsMoreOpen(false)}
                            role="menuitem"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg flex items-center justify-center text-pink-600 group-hover:from-pink-100 group-hover:to-blue-100 transition-colors duration-300">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 truncate">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-600 truncate">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {/* User Actions - Right Aligned with Get Started at the end */}
            <div className="flex items-center space-x-4 flex-shrink-0 ml-auto">
              {/* Premium Button */}
              <button 
                onClick={handlePremium}
                className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>Premium</span>
              </button>

              {isLoggedIn ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-pink-200/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md">
                      {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</div>
                      <div className="text-xs text-gray-600">Premium Member</div>
                    </div>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div 
                      className="absolute right-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-pink-200/30 py-3 z-50"
                      onMouseLeave={() => setIsUserMenuOpen(false)}
                      role="menu"
                    >
                      <div className="px-5 py-3 border-b border-pink-200/20">
                        <div className="font-bold text-gray-900 truncate">{user?.name || 'User'}</div>
                        <div className="text-sm text-gray-600 truncate">{user?.email || 'user@example.com'}</div>
                      </div>
                      
                      <div className="py-2">
                        <Link 
                          to="/settings/profile" 
                          className="flex items-center space-x-3 px-5 py-2.5 text-gray-700 hover:bg-pink-50/80 transition-colors duration-300 group"
                          role="menuitem"
                        >
                          <svg className="w-5 h-5 text-gray-500 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-semibold">Settings</span>
                        </Link>
                        
                        <button 
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-5 py-2.5 text-red-600 hover:bg-red-50/80 transition-colors duration-300 w-full text-left"
                          role="menuitem"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span className="font-semibold">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/signin" 
                    className="hidden sm:block px-5 py-2.5 text-gray-700 hover:text-pink-600 font-semibold transition-colors duration-300"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col space-y-1.5 p-2.5 rounded-xl hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-pink-200/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl border border-pink-200/30 p-5 shadow-lg">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'bg-pink-50 text-pink-600 shadow-sm border border-pink-200/50'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile More Features */}
                <div className="pt-3">
                  <div className="px-4 py-2 text-sm font-bold text-gray-900">More Features</div>
                  <div className="grid grid-cols-2 gap-3">
                    {moreItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center space-x-2 p-3 rounded-xl bg-pink-50/80 hover:bg-pink-100 transition-all duration-300 border border-pink-200/30 hover:border-pink-300/50 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg flex items-center justify-center text-pink-600 group-hover:from-pink-200 group-hover:to-blue-200">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-sm truncate">{item.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                {!isLoggedIn && (
                  <div className="pt-4 border-t border-pink-200/30">
                    <div className="grid grid-cols-2 gap-3">
                      <Link 
                        to="/signin" 
                        className="px-4 py-3 text-center text-gray-700 font-semibold rounded-xl hover:bg-pink-50 transition-colors duration-300 border border-pink-200/30"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link 
                        to="/signup" 
                        className="px-3 py-2 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to content below fixed header */}
      <div className={isScrolled ? 'h-14' : 'h-18'}></div>
    </>
  );
};

export default Header;