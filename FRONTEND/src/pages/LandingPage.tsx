import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ToolsSection from '../components/ToolsSection';
import ImpactSection from '../components/ImpactSection';
import VerificationPortal from '../components/VerificationPortal';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ToolsSection />
      <ImpactSection />
      <VerificationPortal />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;