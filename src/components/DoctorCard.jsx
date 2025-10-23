export function DoctorCard({ doctor, onBookAppointment, onViewProfile }) { 
return ( 
<div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration
300 border border-purple-100"> 
<div className="flex gap-4 mb-4"> 
<div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex 
items-center justify-center flex-shrink-0"> 
<span className="text-2xl text-purple-600">{doctor.name.charAt(0)}</span> 
</div> 
<div className="flex-1"> 
<h3 className="text-gray-800 mb-1">{doctor.name}</h3> 
<p className="text-sm text-gray-600 mb-2">{doctor.specialization}</p> 
<div className="flex items-center gap-1"> 
<span className="text-yellow-500">★</span> 
<span className="text-sm text-gray-700">{doctor.rating}</span> 
</div> 
</div> 
</div> 
<div className="space-y-2 mb-4"> 
<div className="flex items-center gap-2 text-gray-600"> 
<span className="text-pink-500">💼</span> 
<span className="text-sm">{doctor.experience} years experience</span> 
</div> 
<div className="flex items-center gap-2 text-gray-600"> 
<span className="text-purple-500">🏥</span> 
<span className="text-sm">{doctor.hospitalAffiliation}</span> 
</div> 
</div> 
<p className="text-sm text-gray-700 mb-4 line-clamp-2">{doctor.about}</p> 
<div className="flex gap-2"> 
<button 
onClick={onBookAppointment} 
className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to
purple-600 text-white rounded-xl py-3 transition-all duration-300" 
> 
Book Appointment 
</button> 
<button 
onClick={onViewProfile} 
className="flex-1 border border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl 
py-3 transition-all duration-300" 
> 
See Profile 
</button> 
</div> 
</div> 
); 
} 
// HomePage.jsx 
import { useNavigate } from "react-router-dom"; 
export function HomePage() { 
const navigate = useNavigate(); 
const features = [ 
{ 
id: 'hospitals', 
name: 'Hospitals', 
      subtitle: 'Find maternity hospitals & doctors near you', 
      icon: '🏥', 
      gradient: 'from-pink-400 to-purple-500', 
      path: '/hospitals' 
    }, 
    { 
      id: 'tracker', 
      name: 'Pregnancy Tracker', 
      subtitle: 'Track your baby\'s growth week by week', 
      icon: '❤️', 
      gradient: 'from-purple-400 to-pink-500', 
      path: '/tracker' 
    }, 
    { 
      id: 'appointments', 
      name: 'Appointments', 
      subtitle: 'Schedule and manage your prenatal visits', 
      icon: '📅', 
      gradient: 'from-pink-500 to-rose-500', 
      path: '/appointments' 
    }, 
    { 
      id: 'resources', 
      name: 'Resources', 
      subtitle: 'Expert articles, tips, and pregnancy guides', 
      icon: '📚', 
      gradient: 'from-purple-500 to-indigo-500', 
      path: '/resources' 
    } 
  ]; 
 
return ( 
<div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white"> 
{/* Header */} 
<div className="bg-white border-b border-pink-100 shadow-sm"> 
<div className="container mx-auto px-4 py-6"> 
<div className="flex items-center gap-3"> 
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex 
items-center justify-center shadow-lg"> 
<span className="text-white text-xl">❤️</span> 
</div> 
<div> 
<h1 className="text-2xl font-bold text-gray-800">MommyCare</h1> 
<p className="text-gray-600">Your pregnancy companion</p> 
</div> 
</div> 
</div> 
</div> 
<div className="container mx-auto px-4 py-12"> 
{/* Welcome Section */} 
<div className="text-center mb-12"> 
<h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Pregnancy 
Journey</h2> 
<p className="text-gray-600 max-w-2xl mx-auto text-lg"> 
We're here to support you every step of the way with trusted healthcare providers, helpful 
resources, and personalized care for you and your baby. 
</p> 
</div> 
{/* Feature Cards */} 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"> 
{features.map((feature) => ( 
<div 
key={feature.id} 
onClick={() => navigate(feature.path)} 
onKeyDown={(e) => e.key === 'Enter' && navigate(feature.path)} 
role="button" 
tabIndex={0} 
aria-label={`Navigate to ${feature.name}`} 
className={` 
bg-gradient-to-br ${feature.gradient} 
rounded-2xl p-8 shadow-lg hover:shadow-2xl 
transform transition-all duration-300 hover:scale-105 
cursor-pointer group relative overflow-hidden 
`} 
> 
{/* Background decoration */} 
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 
group-hover:scale-150 transition-transform duration-500"></div> 
<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb
12 group-hover:scale-150 transition-transform duration-500"></div> 
{/* Content */} 
<div className="relative z-10"> 
<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 
group-hover:bg-white/30 transition-colors duration-300"> 
<span className="text-2xl">{feature.icon}</span> 
</div> 
<h3 className="text-white text-xl font-bold mb-2">{feature.name}</h3> 
<p className="text-white/90">{feature.subtitle}</p> 
</div> 
</div> 
))} 
</div> 
{/* Info Section */} 
<div className="mt-16 bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto border 
border-pink-100"> 
<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose 
MommyCare?</h2> 
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
<div className="text-center"> 
<div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex 
items-center justify-center mx-auto mb-4"> 
<span className="text-2xl">🏥</span> 
</div> 
<h3 className="text-lg font-bold text-gray-800 mb-2">Trusted Hospitals</h3> 
<p className="text-gray-600"> 
Access to the best maternity hospitals and specialists in Chennai 
</p> 
</div> 
<div className="text-center"> 
<div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex 
items-center justify-center mx-auto mb-4"> 
<span className="text-2xl">👶</span> 
</div> 
<h3 className="text-lg font-bold text-gray-800 mb-2">Personalized Care</h3> 
<p className="text-gray-600"> 
Track your pregnancy journey with customized insights and tips 
</p> 
</div> 
<div className="text-center"> 
<div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex 
items-center justify-center mx-auto mb-4"> 
<span className="text-2xl">📖</span> 
</div> 
<h3 className="text-lg font-bold text-gray-800 mb-2">Expert Resources</h3> 
<p className="text-gray-600"> 
Evidence-based articles and guides for informed decision-making 
</p> 
</div> 
</div> 
</div> 
{/* CTA Section */} 
<div className="mt-12 text-center"> 
<div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 
border border-pink-200"> 
<h3 className="text-xl font-bold text-gray-800 mb-3">Ready to get started?</h3> 
<p className="text-gray-600 mb-6"> 
Explore our features and find the perfect maternity care for you 
</p> 
<button 
onClick={() => navigate('/hospitals')} 
className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to
purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
transform hover:scale-105" 
> 
Find Hospitals Near You 
</button> 
</div> 
</div> 
</div> 
</div> 
); 
}