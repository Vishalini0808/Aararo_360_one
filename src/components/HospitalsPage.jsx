import { useState } from "react"; 
import { hospitals, doctors } from "../Data/mockData" 
import { HospitalCard } from "./HospitalCard"; 
import { DoctorCard } from "./DoctorCard"; 
import { MapSection } from "./MapSection"; 
import { HospitalDetailsModal } from "./HospitalDetailsmodal";
import { useNavigate } from "react-router-dom"; 
export function HospitalsPage() { 
const [selectedHospital, setSelectedHospital] = useState(null); 
const [isModalOpen, setIsModalOpen] = useState(false); 
const [activeTab, setActiveTab] = useState("hospitals"); 
const navigate = useNavigate(); 
const handleHospitalClick = (hospital) => { 
setSelectedHospital(hospital); 
setIsModalOpen(true); 
}; 
const handleBookAppointment = (doctor) => { 
alert(`Booking appointment with ${doctor.name}.\n\nIn a real app, this would open a booking 
form.`); 
}; 
const handleViewProfile = (doctor) => { 
alert(`Viewing profile for ${doctor.name}.\n\nDetailed profile information would be displayed 
here.`); 
}; 
return ( 
<div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white"> 
{/* Header */} 
<div className="bg-white border-b border-pink-100 sticky top-0 z-40 shadow-sm"> 
<div className="container mx-auto px-4 py-4"> 
<div className="flex items-center gap-4"> 
<button 
onClick={() => navigate('/')} 
className="rounded-xl text-3xl mr-3" 
aria-label="Go back to homepage" 
> 
← 
</button> 
<div className=""> 
<h1 className="text-2xl font-bold text-gray-800">Find Maternity Care</h1> 
<p className="text-gray-600">Trusted hospitals & doctors for your pregnancy journey</p> 
</div> 
</div> 
</div> 
</div> 
<div className="container mx-auto px-4 py-8"> 
{/* Welcome Message */} 
<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white mb-8 
shadow-lg"> 
<h2 className="text-2xl font-bold text-white mb-2">Find the Best Maternity Care Near 
You</h2> 
<p className="text-pink-50"> 
We've carefully curated a list of Chennai's finest maternity hospitals and experienced doctors 
to ensure you receive the best care during your pregnancy journey. 
</p> 
</div> 
{/* Tabs */} 
<div className="space-y-6"> 
<div className="bg-white rounded-xl p-1 shadow-md border border-pink-100 flex"> 
{[ 
{ value: "hospitals", label: "Hospitals", icon: "🏥" }, 
{ value: "map", label: "Map View", icon: "🗺️" }, 
{ value: "doctors", label: "Doctors", icon: "👨⚕️" } 
].map((tab) => ( 
<button 
key={tab.value} 
                onClick={() => setActiveTab(tab.value)} 
                className={`flex-1 flex items-center justify-center py-3 rounded-lg transition-all duration
300 ${ 
                  activeTab === tab.value 
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md" 
                    : "text-gray-600 hover:text-gray-800" 
                }`} 
              > 
                <span className="mr-2">{tab.icon}</span> 
                {tab.label} 
              </button> 
            ))} 
          </div> 
 
          {/* Hospitals Tab */} 
          {activeTab === "hospitals" && ( 
            <div className="space-y-6"> 
              <div> 
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Chennai Maternity Hospitals</h2> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                  {hospitals.map((hospital) => ( 
                    <HospitalCard 
                      key={hospital.id} 
                      hospital={hospital} 
                      onClick={() => handleHospitalClick(hospital)} 
                    /> 
                  ))} 
                </div> 
              </div> 
            </div> 
          )} 
 
          {/* Map Tab */} 
          {activeTab === "map" && ( 
            <div className="space-y-6"> 
              <MapSection 
                hospitals={hospitals} 
                onHospitalClick={handleHospitalClick} 
              /> 
              <div className="bg-white rounded-2xl p-6 shadow-md border border-pink-100"> 
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Access to Nearby 
Hospitals</h3> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                  {hospitals.slice(0, 4).map((hospital) => ( 
                    <button 
                      key={hospital.id} 
                      onClick={() => handleHospitalClick(hospital)} 
                      className="text-left p-4 rounded-xl border border-purple-200 hover:border-purple-400 
hover:bg-purple-50 transition-all duration-200" 
                    > 
                      <p className="text-gray-800 mb-1 font-medium">{hospital.name}</p> 
                      <p className="text-sm text-gray-600">{hospital.address.split(',')[0]}</p> 
                    </button> 
                  ))} 
                </div> 
              </div> 
            </div> 
          )} 
 
          {/* Doctors Tab */} 
          {activeTab === "doctors" && ( 
            <div className="space-y-6"> 
              <div> 
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Recommended OB/GYN 
Specialists</h2> 
                <p className="text-gray-600 mb-6"> 
                  Connect with experienced obstetricians and gynecologists who specialize in maternal care 
                </p> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                  {doctors.map((doctor) => ( 
                    <DoctorCard 
                      key={doctor.id} 
                      doctor={doctor} 
                      onBookAppointment={() => handleBookAppointment(doctor)} 
                      onViewProfile={() => handleViewProfile(doctor)} 
                    /> 
                  ))} 
                </div> 
              </div> 
            </div> 
          )} 
        </div> 
 
        {/* Helpful Tips Section */} 
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-pink-100"> 
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Choosing the Right Hospital</h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            <div className="space-y-2"> 
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3"> 
                <span className="text-xl">🏥</span> 
              </div> 
              <h3 className="text-lg font-bold text-gray-800">Facilities & Equipment</h3> 
              <p className="text-gray-600"> 
                Ensure the hospital has modern NICU, emergency care, and birthing facilities 
</p> 
</div> 
<div className="space-y-2"> 
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb
3"> 
<span className="text-xl">👨⚕️</span> 
</div> 
<h3 className="text-lg font-bold text-gray-800">Experienced Staff</h3> 
<p className="text-gray-600"> 
Look for hospitals with skilled obstetricians and supportive nursing staff 
</p> 
</div> 
<div className="space-y-2"> 
<div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3"> 
<span className="text-xl">💰</span> 
</div> 
<h3 className="text-lg font-bold text-gray-800">Cost & Insurance</h3> 
<p className="text-gray-600"> 
Compare packages and check if your insurance is accepted 
</p> 
</div> 
</div> 
</div> 
</div> 
{/* Hospital Details Modal */} 
<HospitalDetailsModal 
hospital={selectedHospital} 
isOpen={isModalOpen} 
onClose={() => setIsModalOpen(false)} 
/> 
</div> 
); 
}