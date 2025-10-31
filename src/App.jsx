import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schemes from './pages/GovernmentSchemes';
import Shop from './pages/Shop';
import Community from './pages/Community';
import './index.css';
import PregnancyGuide from './pages/PregnancyGuide';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Layout from './components/Layout';
import ForgotPassword from './pages/Auth/ForgotPassword';
import VerifyOTP from './pages/Auth/VerifyOTP'; // Add this import
import ResetPassword from './pages/Auth/ResetPassword'; // Add this import
import SettingsLayout from './pages/Settings/SettingsLayout';
import ProfileInfo from './pages/Settings/ProfileInfo';
import PremiumMembership from './pages/Settings/PremiumMembership';
import About from './pages/Settings/About';
import Options from './pages/Settings/Options';
import { HospitalsHomePage } from './components/HospitalsHomePage';
import { HospitalsPage } from './components/HospitalsPage';
import ScrollToTop from './components/ScrollToTop';
import BabyCareHub from './components/BabyCareHub';
import AppointmentDashboard from './pages/AppointmentDashboard';
import AppointmentDetail from './components/AppointmentDetail';
import AddAppointment from './components/AddAppointment';
import { checkUpcomingReminders } from './utils/ReminderUtils';
import BabysitterDashboard from './components/BabySitterDashboard';
import Checkout from './components/CheckOut';
import FatherRole from './components/FatherRole';
import ProfessionalElderlyPregnancyGuide from './components/ProfessionalElderlyPregnancyGuide';
import BabyHubHome from './components/BabyHubHome';
import BabyTracker from './pages/BabyTracker';
import PregnancyTracker from './components/PregnancyTracker';
import BabyGrowthCharts from './pages/BabyGrowthChart';
import BabyDetailsFormPage from './components/BabyDetailsFormPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('aararo_user') !== null;
  return isLoggedIn ? children : <Navigate to="/" />;
};

// Public Route Component (redirect to home if already logged in)
const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('aararo_user') !== null;
  return !isLoggedIn ? children : <Navigate to="/" />;
};

// Layout Component for pages that need Header & Footer
const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// Sample seed data for initial appointments 
const SEED_APPOINTMENTS = [ 
  { 
    id: 1, 
    month: 8, 
    date: "2025-11-18", 
    time: "10:00 AM", 
    doctor: "Dr. Priya Rajesh", 
    hospital: "Cloudnine Hospital  T. Nagar", 
    reminder: "Bring urine test report and ultrasound scans", 
    completed: false 
  }, 
]

function App() {
  useEffect(() => { 
    // Initialize with seed data if no appointments exist 
    const existingAppointments = localStorage.getItem('appointments'); 
    if (!existingAppointments) { 
      localStorage.setItem('appointments', JSON.stringify(SEED_APPOINTMENTS)); 
    } 
 
    // Check for reminders on app load 
    const reminders = checkUpcomingReminders(); 
    if (reminders.length > 0) { 
      console.log('Upcoming reminders:', reminders); 
    } 
  }, []); 

  return (
    <div className="App">
      <ScrollToTop/>
      <main>
        <Routes>
          {/* Auth Routes - Public */}
          <Route 
            path="/signup" 
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            } 
          />

          <Route 
            path="/signin" 
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            } 
          />

          {/* Add these new routes for password reset flow */}
          <Route 
            path="/forgot-password" 
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            } 
          />

          <Route 
            path="/verify-otp" 
            element={
              <PublicRoute>
                <VerifyOTP />
              </PublicRoute>
            } 
          />

          <Route 
            path="/reset-password" 
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            } 
          />

          {/* Keep your existing forgotpassword route for backward compatibility */}
          <Route 
            path="/forgotpassword" 
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            } 
          />

          {/* Protected Routes - With Header/Footer */} 
          <Route path="/" element={
            <ProtectedRoute> 
              <AppLayout>
                <Home />
              </AppLayout> 
            </ProtectedRoute>
          }/>
          
          <Route path='/layout' element={<Layout />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileInfo />} />
            <Route path="premium" element={<PremiumMembership />} />
            <Route path="options" element={<Options />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pregnancy-guide" element={<PregnancyGuide />} />
          <Route path="/elderlyadvice" element={<BabyCareHub />} />
          <Route path="/monitoringpage" element={<HospitalsHomePage />} /> 
          <Route path="/hospitals" element={<HospitalsPage />} /> 
          {/* <Route path='/babytracker' element={<BabyTracker/>} /> */}
          <Route path='/appointments' element={<AppointmentDashboard/>} />
          <Route path='/appointments/:id' element={<AppointmentDetail/>} /> 
          <Route path='/add' element={<AddAppointment/>} />
          <Route path='/babysittingpage' element={<BabysitterDashboard/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/father-role' element={<FatherRole/>} />
          <Route path='/baby-details' element={<BabyTracker/>} />
          <Route path='/elderly-advice' element={<ProfessionalElderlyPregnancyGuide/>} />
          <Route path='/pregnancy-tracker' element={<PregnancyTracker/>} />
          {/* <Route path='/baby-details' element={<BabyDetailsFormPage/>} /> */}
          <Route path="/babytracker" element={ <ProtectedRoute><AppLayout> <BabyGrowthCharts /> </AppLayout></ProtectedRoute> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;