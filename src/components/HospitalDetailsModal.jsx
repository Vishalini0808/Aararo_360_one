export function HospitalDetailsModal({ hospital, isOpen, onClose }) { 
if (!hospital || !isOpen) return null; 
return ( 
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"> 
<div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"> 
<div className="p-6 border-b border-gray-200"> 
<div className="flex items-start justify-between"> 
<div className="flex-1"> 
<h2 className="text-2xl font-bold text-gray-800 mb-2">{hospital.name}</h2> 
<div className="flex items-center gap-2"> 
<div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg"> 
<span className="text-yellow-500">★</span> 
<span className="text-sm text-amber-700">{hospital.rating} Rating</span> 
</div> 
</div> 
</div> 
<button 
onClick={onClose} 
className="text-gray-400 hover:text-gray-600 text-2xl" 
> 
× 
</button> 
</div> 
</div> 
<div className="p-6 space-y-6"> 
{/* Description */} 
<div> 
<p className="text-gray-700 leading-relaxed">{hospital.description}</p> 
</div> 
{/* Contact Information */} 
<div className="bg-pink-50 rounded-xl p-4 space-y-3"> 
<h3 className="text-lg font-bold text-gray-800">Contact Information</h3> 
<div className="flex items-start gap-3"> 
<span className="text-pink-500 mt-0.5 flex-shrink-0">📍</span> 
<div> 
<p className="text-gray-600">Address</p> 
<p className="text-gray-800">{hospital.address}</p> 
</div> 
</div> 
 
            <div className="flex items-start gap-3"> 
              <span className="text-purple-500 mt-0.5 flex-shrink-0">📞</span> 
              <div> 
                <p className="text-gray-600">Phone</p> 
                <p className="text-gray-800">{hospital.contact}</p> 
              </div> 
            </div> 
 
            <div className="flex items-start gap-3"> 
              <span className="text-blue-500 mt-0.5 flex-shrink-0">🌐</span> 
              <div> 
                <p className="text-gray-600">Website</p> 
                <a 
                  href={`https://${hospital.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-600 hover:underline" 
                > 
                  {hospital.website} 
                </a> 
              </div> 
            </div> 
          </div> 
 
          {/* Services */} 
          <div> 
            <div className="flex items-center gap-2 mb-3"> 
              <span className="text-purple-500">💼</span> 
              <h3 className="text-lg font-bold text-gray-800">Services Offered</h3> 
            </div> 
            <div className="flex flex-wrap gap-2"> 
              {hospital.services.map((service, index) => ( 
                <span 
                  key={index} 
                  className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl border border-purple-200" 
                > 
                  {service} 
                </span> 
              ))} 
            </div> 
          </div> 
 
          {/* Maternity Packages */} 
          <div> 
            <div className="flex items-center gap-2 mb-3"> 
              <span className="text-pink-500">📦</span> 
              <h3 className="text-lg font-bold text-gray-800">Maternity Packages</h3> 
            </div> 
            <div className="space-y-3"> 
              {hospital.packages.map((pkg, index) => ( 
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border
pink-200" 
                > 
                  <p className="text-gray-800">{pkg}</p> 
                </div> 
              ))} 
            </div> 
          </div> 
 
{/* Action Buttons */} 
<div className="flex gap-3 pt-4 border-t border-gray-200"> 
<button 
className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 
hover:to-purple-600 text-white rounded-xl py-3 transition-all duration-300" 
onClick={() => alert(`Booking appointment at ${hospital.name}`)} 
> 
Book Appointment 
</button> 
<button 
className="flex-1 border border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl 
py-3 transition-all duration-300" 
onClick={() => window.open(`https://${hospital.website}`, '_blank')} 
> 
Visit Website 
</button> 
</div> 
</div> 
</div> 
</div> 
); 
}