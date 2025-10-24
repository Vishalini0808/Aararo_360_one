import React from 'react';
import HeroSection from '../components/HeroSection';
import BabyDetailsBanner from '../components/BabyDetailsBanner';
import VisionMission from '../components/VisionMission';
// import FeaturesSection from '../components/FeaturesSection';
// import HowItWorks from '../components/HowItWorks';
// import Testimonials from '../components/Testimonials';
// import ElderlyAdvice from '../components/ElderlyAdvice';
import CommunityCTA from '../components/CommunityCTA';
import ParentingGuidelinesBanner from '../components/ParentingGuidelinesBanner';
// import BabyRegistryAd from '../components/BabyRegistryAd';
// import Advertisement from '../components/Advertisement';
// import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  return (
    <div className="home-page">
     
      <HeroSection />
      <BabyDetailsBanner />
      <ParentingGuidelinesBanner/>
      <VisionMission />
      {/* <FeaturesSection /> */}
      {/* <HowItWorks /> */}
      <CommunityCTA/>
      {/* <ElderlyAdvice /> */}
     
    </div>
  );
};

export default Home;