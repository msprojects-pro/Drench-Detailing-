import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('maintenance-valet');

  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Banner Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* About Us & Mobile Van Capabilities */}
      <AboutUs />

      {/* Core Services Grid */}
      <Services onSelectServiceForQuote={handleOpenQuoteModal} />

      {/* Packages & Transparent Pricing */}
      <Packages onSelectPackageForQuote={handleOpenQuoteModal} />

      {/* Before/After Paint Correction Interactive Comparison */}
      <BeforeAfterSlider />

      {/* Portfolio & Work Gallery */}
      <Gallery />

      {/* Customer Testimonials & Reviews */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Form & Location Map */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingMobileBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}
