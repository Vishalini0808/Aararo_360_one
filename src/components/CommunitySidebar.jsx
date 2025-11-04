import { useState } from 'react'; 
 
const CommunitySidebar = ({ activeSection, setActiveSection }) => { 
  const [isCollapsed, setIsCollapsed] = useState(false); 
 
  const menuItems = [ 
    { id: 'feed', label: 'Home / Feed', icon: '🏠' }, 
    { id: 'categories', label: 'Categories', icon: '🏷️' }, 
    { id: 'create', label: 'Create Post', icon: '📝' }, 
    { id: 'experts', label: 'Expert Corner', icon: '👨⚕️' }, 
    { id: 'notifications', label: 'Notifications', icon: '🔔' }, 
    { id: 'saved', label: 'Saved Posts', icon: '💾' } 
  ]; 
 
  return ( 
    <div className={`bg-white shadow-lg rounded-r-2xl h-full ${isCollapsed ? 'w-16' : 'w-64'} 
transition-all duration-300`}> 
      <div className="p-4"> 
        {/* Toggle Button */} 
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="w-full flex justify-end mb-4 text-gray-600 hover:text-purple-600" 
        > 
          {isCollapsed ? '➡️' : '⬅️'} 
        </button> 
 
        {/* Menu Items */} 
        <nav className="space-y-2"> 
          {menuItems.map((item) => ( 
            <button 
              key={item.id} 
              onClick={() => setActiveSection(item.id)} 
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${ 
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 shadow-md' 
                  : 'text-gray-600 hover:bg-pink-50 hover:text-purple-500' 
              }`} 
            > 
              <span className="text-lg">{item.icon}</span> 
              {!isCollapsed && ( 
                <span className="font-medium">{item.label}</span> 
              )} 
            </button> 
          ))} 
        </nav> 
      </div> 
    </div> 
  ); 
}; 
 
export default CommunitySidebar;