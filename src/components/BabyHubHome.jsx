import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const BabyHubHome = () => { 
const navigate = useNavigate(); 
const handleExplore = () => { 
navigate('/babycarehub'); 
}; 
return ( 
<div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 flex 
f
 lex-col justify-center items-center text-center space-y-8 p-4"> 
<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-4xl w-full 
transform transition-all duration-500 hover:scale-105"> 
<h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-700 font-bold mb-6 leading-tight"> 
�
� Baby Care Hub — Your Partner in Every Giggle, Step & Word 
</h1> 
<p className="text-xl md:text-2xl text-pink-700 font-semibold mb-8 leading-relaxed"> 
From newborn snuggles to first school days — nurture your child's mind, body, and heart. 
</p> 
<button 
onClick={handleExplore} 
className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 text-lg font
semibold transition-all duration-300 transform hover:scale-105 shadow-lg" 
> 
Explore Now 
</button> 
</div> 
</div> 
); 
}; 
export default BabyHubHome;