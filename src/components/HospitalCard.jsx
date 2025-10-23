export function HospitalCard({ hospital, onClick }) { 
return ( 
<div 
onClick={onClick} 
className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 
hover:scale-105 cursor-pointer border border-pink-100" 
role="button" 
tabIndex={0} 
onKeyDown={(e) => e.key === 'Enter' && onClick()} 
aria-label={`View details for ${hospital.name}`} 
> 
<div className="flex items-start justify-between mb-4"> 
<h3 className="text-lg font-bold text-gray-800 flex-1 pr-2">{hospital.name}</h3> 
<div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg"> 
<span className="text-yellow-500">★</span> 
<span className="text-amber-700 font-medium">{hospital.rating}</span> 
</div> 
</div> 
<div className="flex items-start gap-2 mb-3 text-gray-600"> 
<span className="text-pink-500 mt-1 flex-shrink-0">📍</span> 
<p className="text-sm">{hospital.address}</p> 
</div> 
<p className="text-gray-700 mb-4 line-clamp-2">{hospital.description}</p> 
<div className="flex items-center gap-2 text-gray-600 mb-4"> 
<span className="text-purple-500">📞</span> 
<p className="text-sm">{hospital.contact}</p> 
</div> 
<div className="flex flex-wrap gap-2"> 
{hospital.services.slice(0, 3).map((service, index) => ( 
<span 
key={index} 
className="text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full" 
> 
{service} 
</span> 
))} 
{hospital.services.length > 3 && ( 
<span className="text-xs text-gray-500 px-2 py-1"> 
+{hospital.services.length - 3} more 
</span> 
)} 
</div> 
</div> 
); 
} 
