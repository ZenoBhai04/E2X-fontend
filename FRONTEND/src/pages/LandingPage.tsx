import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ToolsSection from '../components/ToolsSection';
import ImpactSection from '../components/ImpactSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MaskCursor from '../components/MaskCursor';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaskCursor />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ToolsSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;