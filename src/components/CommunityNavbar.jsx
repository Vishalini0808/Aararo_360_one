import { useState } from 'react'; 
 
const CommunityNavbar = () => { 
  const [searchQuery, setSearchQuery] = useState(''); 
 
  return ( 
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg"> 
      <div className="container mx-auto px-4 py-3"> 
        <div className="flex items-center justify-between"> 
          {/* Logo */} 
          <div className="flex items-center space-x-2"> 
           
          </div> 
 
          {/* Search Bar */} 
          <div className="flex-1 max-w-2xl mx-4"> 
            <div className="relative"> 
              <input 
                type="text" 
                placeholder="Search posts, users, or topics..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full px-4 py-2 pl-10 rounded-full border-0 focus:ring-2 focus:ring-pink-300 
focus:outline-none" 
              /> 
              <div className="absolute left-3 top-2.5 text-gray-400"> 
                🔍 
              </div> 
            </div> 
          </div> 
 
          {/* Profile */} 
          <div className="flex items-center space-x-4"> 
            <button className="text-white hover:text-pink-200 transition-colors"> 
              🔔 
            </button> 
            
          </div> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 
 
export default CommunityNavbar;