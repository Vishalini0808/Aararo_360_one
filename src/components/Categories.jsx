import { useState, useEffect } from 'react'; 
import { getCategories } from '../services/api'; 
 
const Categories = ({ selectedCategory, onCategorySelect }) => { 
  const [categories, setCategories] = useState([]); 
 
  useEffect(() => { 
    const fetchCategories = async () => { 
      try { 
        const response = await getCategories(); 
        setCategories(response.data); 
      } catch (error) { 
        console.error('Error fetching categories:', error); 
      } 
    }; 
 
    fetchCategories(); 
  }, []); 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6"> 
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse Categories</h3> 
       
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide"> 
        {categories.map((category) => ( 
          <button 
            key={category} 
            onClick={() => onCategorySelect(category)} 
            className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 ${ 
              selectedCategory === category 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600' 
            }`} 
          > 
            {category} 
          </button> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default Categories;