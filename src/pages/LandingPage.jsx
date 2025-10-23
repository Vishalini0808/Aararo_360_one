import { useNavigate } from 'react-router-dom'; 
import { Baby } from 'lucide-react'; 
 
export default function LandingPage() { 
  const navigate = useNavigate(); 
 
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100"> 
      <div className="container mx-auto px-4 py-16"> 
        <div className="text-center mb-16"> 
          <h1 className="text-5xl font-bold text-gray-800 mb-4"> 
            Welcome to <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text
transparent">CareConnect</span> 
          </h1> 
          <p className="text-xl text-gray-600">Your trusted platform for finding reliable care 
services</p> 
        </div> 
 
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration
300 hover:-translate-y-2"> 
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 w-16 h-16 rounded-full flex 
items-center justify-center mb-6"> 
              <Baby className="w-8 h-8 text-white" /> 
            </div> 
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Babysitting Services</h2> 
            <p className="text-gray-600 mb-6"> 
              Find trusted and experienced babysitters for your little ones. Available for hourly bookings 
with verified profiles. 
            </p> 
            <button 
              onClick={() => navigate('/babysitting')} 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg 
font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md 
hover:shadow-lg" 
            > 
              Explore Now 
            </button> 
          </div> 
 
          <div className="bg-white rounded-2xl shadow-xl p-8 opacity-60"> 
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-full flex 
items-center justify-center mb-6"> 
              <span className="text-2xl">🏥</span> 
            </div> 
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Elderly Care</h2> 
            <p className="text-gray-600 mb-6"> 
              Compassionate care for elderly family members. Coming soon. 
            </p> 
            <button 
              disabled 
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not
allowed" 
            > 
              Coming Soon 
            </button> 
          </div> 
 
          <div className="bg-white rounded-2xl shadow-xl p-8 opacity-60"> 
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full 
flex items-center justify-center mb-6"> 
              <span className="text-2xl">🐕</span> 
            </div> 
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pet Care</h2> 
            <p className="text-gray-600 mb-6"> 
              Professional pet sitters and dog walkers. Coming soon. 
            </p> 
            <button 
              disabled 
              className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not
allowed" 
            > 
              Coming Soon 
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}