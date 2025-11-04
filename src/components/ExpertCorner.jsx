import { useState, useEffect } from 'react'; 
import { getExperts } from '../services/api'; 
 
const ExpertCorner = () => { 
  const [experts, setExperts] = useState([]); 
 
  useEffect(() => { 
    const fetchExperts = async () => { 
      try { 
        const response = await getExperts(); 
        setExperts(response.data); 
      } catch (error) { 
        console.error('Error fetching experts:', error); 
      } 
    }; 
 
    fetchExperts(); 
  }, []); 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6"> 
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Expert Corner 👨⚕️</h3> 
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {experts.map((expert) => ( 
          <div key={expert.id} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 
border border-pink-100 hover:shadow-lg transition-all duration-300"> 
            <div className="flex items-center space-x-4 mb-4"> 
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex 
items-center justify-center"> 
                <span className="text-white text-xl">👩⚕️</span> 
              </div> 
              <div> 
                <h4 className="font-semibold text-gray-800">{expert.name}</h4> 
                <p className="text-sm text-purple-600">{expert.specialization}</p> 
              </div> 
            </div> 
             
            <p className="text-sm text-gray-600 mb-4">{expert.experience} experience</p> 
             
            <button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 
rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300"> 
              Ask Now 
            </button> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default ExpertCorner;