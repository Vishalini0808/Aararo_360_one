import React from 'react';
import HeroSection from '../components/HeroSection';
import BabyDetailsBanner from '../components/BabyDetailsBanner';
import VisionMission from '../components/VisionMission';
// import ElderlyAdvice from '../components/ElderlyAdvice';
import CommunityCTA from '../components/CommunityCTA';
import ParentingGuidelinesBanner from '../components/ParentingGuidelinesBanner';
// import Advertisement from '../components/Advertisement';
// import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  return (
    <div className="home-page">
     
      <HeroSection />
      <BabyDetailsBanner />
      <ParentingGuidelinesBanner/>
      <VisionMission />
      <CommunityCTA/>
      {/* <ElderlyAdvice /> */}
     
    </div>
  );
};

export default Home;