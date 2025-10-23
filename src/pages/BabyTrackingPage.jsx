import { useState } from 'react';
import NavbarTabs from '../components/NavbarTabs';
import BabyGrowthSection from '../components/BabyGrowthSection';
import BabyTrackingSection from '../components/BabyTrackingSection';
import ReportsSection from '../components/ReportsSection';
import GrowthCalculatorSection from '../components/GrowthCalculatorSection';
import VaccinationSection from '../components/VaccinationSection';



export default function BabyTrackingPage() {
  const [activeSection, setActiveSection] = useState('growth');

  const renderSection = () => {
    switch (activeSection) {
      case 'growth':
        return <BabyGrowthSection />;
      case 'tracking':
        return <BabyTrackingSection />;
      case 'reports':
        return <ReportsSection />;
      case 'calculator':
        return <GrowthCalculatorSection />;
      case 'vaccination':
        return <VaccinationSection />;
      default:
        return <BabyGrowthSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7FB]">
       
      <NavbarTabs
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="transition-all duration-500 ease-in-out">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white text-center py-8 mt-16">
        <p className="text-xl mb-2 font-semibold">Track every milestone with love 💕</p>
        <p className="text-white/80">Keep your baby's growth journey safe and joyful.</p>
      </footer>
    </div>
  );
}