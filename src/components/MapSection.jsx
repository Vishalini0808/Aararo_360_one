import { useState } from "react"; 
export function MapSection({ hospitals, onHospitalClick }) { 
const [selectedPin, setSelectedPin] = useState(null); 
const handlePinClick = (hospital) => { 
setSelectedPin(hospital.id); 
setTimeout(() => { 
onHospitalClick(hospital); 
}, 300); 
}; 
return ( 
<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100"> 
<div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-white"> 
<div className="flex items-center gap-2"> 
<span>📍</span> 
<h3 className="text-lg font-bold">Nearby Maternity Hospitals</h3> 
</div> 
<p className="text-sm text-pink-50 mt-1">Interactive map showing hospitals near you</p> 
</div> 
{/* Map Container - Simulated Map */} 
<div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 p-8"> 
{/* User Location Marker */} 
<div 
className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" 
style={{ animation: 'pulse 2s infinite' }} 
> 
<div className="relative"> 
<span className="text-blue-600 text-2xl">📍</span> 
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 
border-white"></div> 
</div> 
<span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-blue-600 
text-white px-2 py-1 rounded whitespace-nowrap"> 
You are here 
</span> 
</div> 
{/* Hospital Markers */} 
{hospitals.map((hospital, index) => { 
const angle = (index * 360) / hospitals.length; 
const radius = 120; 
const x = Math.cos((angle * Math.PI) / 180) * radius; 
const y = Math.sin((angle * Math.PI) / 180) * radius; 
return ( 
<div 
key={hospital.id} 
className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" 
style={{ 
top: `calc(50% + ${y}px)`, 
left: `calc(50% + ${x}px)`, 
zIndex: selectedPin === hospital.id ? 30 : 10, 
}} 
onClick={() => handlePinClick(hospital)} 
role="button" 
              tabIndex={0} 
              onKeyDown={(e) => e.key === 'Enter' && handlePinClick(hospital)} 
              aria-label={`View ${hospital.name} on map`} 
            > 
              <div className={`transition-all duration-300 ${ 
                selectedPin === hospital.id ? 'scale-125' : 'group-hover:scale-110' 
              }`}> 
                <span className={`text-3xl drop-shadow-lg ${ 
                  selectedPin === hospital.id 
                    ? 'text-pink-600' 
                    : 'text-purple-500' 
                }`}> 
                  📍 
                </span> 
              </div> 
 
              {/* Popup on hover or selection */} 
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 ${ 
                selectedPin === hospital.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100' 
              } transition-opacity duration-200 pointer-events-none`}> 
                <div className="bg-white rounded-lg shadow-xl p-3 min-w-48 border border-pink-200"> 
                  <p className="text-sm text-gray-800 mb-1 font-medium">{hospital.name}</p> 
                  <p className="text-xs text-gray-600 mb-2">{hospital.address.split(',')[0]}</p> 
                  <div className="flex items-center gap-1 text-xs text-amber-600"> 
                    <span>★</span> 
                    <span>{hospital.rating}</span> 
                  </div> 
                </div> 
                <div className="w-3 h-3 bg-white border-b border-r border-pink-200 transform rotate-45 
absolute top-full left-1/2 -translate-x-1/2 -mt-1.5"></div> 
              </div> 
</div> 
); 
})} 
{/* Legend */} 
<div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 border border gray-200"> 
<div className="flex items-center gap-2 mb-2"> 
<span className="text-purple-500">📍</span> 
<span className="text-xs text-gray-700">Hospitals</span> 
</div> 
<div className="flex items-center gap-2"> 
<span className="text-blue-600">📍</span> 
<span className="text-xs text-gray-700">Your Location</span> 
</div> 
</div> 
</div> 
<div className="p-4 bg-purple-50 border-t border-purple-100"> 
<p className="text-xs text-gray-600 text-center"> 
Click on hospital markers to view details • This is a simulated map view 
</p> 
</div> 
<style jsx>{` 
@keyframes pulse { 
0%, 100% { opacity: 1; } 
50% { opacity: 0.5; } 
} 
`}</style> 
</div> 
); 
}