import { Link, Navigate } from "react-router-dom";

export default function NavbarTabs({ activeSection, onSectionChange }) {
  const tabs = [
    { id: 'growth', label: 'Baby Growth', icon: '👶' },
    { id: 'tracking', label: 'Baby Tracking', icon: '📊' },
    { id: 'reports', label: 'Reports', icon: '📋' },
    { id: 'calculator', label: 'Growth Calculator', icon: '🧮' },
    { id: 'vaccination', label: 'Vaccination Details', icon: '💉' }
  ];

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-[#FF6EA6]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center py-4 gap-4">
            {/* Back Button */}
            <Link 
              to="/babygrowthtracker"
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-medium whitespace-nowrap flex-shrink-0"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              
            </Link>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2 flex-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onSectionChange(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap 
                    transition-all duration-300 transform hover:scale-105 font-medium flex-shrink-0
                    ${activeSection === tab.id 
                      ? 'bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}