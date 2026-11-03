import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { SolarCalculatorSection } from './components/SolarCalculatorSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EngineeringStandardSection } from './components/EngineeringStandardSection';
import { SubsidyGuideSection } from './components/SubsidyGuideSection';
import { AuditBookingModal } from './components/AuditBookingModal';
import { Footer } from './components/Footer';
import { SegmentMode, SolarCalculation } from './types/solar';

export default function App() {
  const [segment, setSegment] = useState<SegmentMode>('residential');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [auditInitialCalc, setAuditInitialCalc] = useState<SolarCalculation | null>(null);
  const [auditInitialBill, setAuditInitialBill] = useState<number>(6500);
  const [activeSection, setActiveSection] = useState<string>('solutions');

  // Track active section for top navigation indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['solutions', 'calculator', 'projects', 'engineering', 'subsidies'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAuditModal = () => {
    setAuditInitialCalc(null);
    setAuditInitialBill(segment === 'residential' ? 6500 : 85000);
    setIsAuditModalOpen(true);
  };

  const handleOpenAuditModalWithData = (calc: SolarCalculation, bill: number) => {
    setAuditInitialCalc(calc);
    setAuditInitialBill(bill);
    setIsAuditModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#edfeef] text-[#111e16]">
      {/* 3-Zone Top Navigation */}
      <TopNav 
        onOpenAuditModal={handleOpenAuditModal} 
        activeSection={activeSection} 
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* 1. Hero Section with Segment Toggle & Proof Strip */}
        <HeroSection
          segment={segment}
          onSegmentChange={setSegment}
          onOpenAuditModal={handleOpenAuditModal}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* 2. Interactive Solar ROI & Area Calculator */}
        <SolarCalculatorSection
          segment={segment}
          onSegmentChange={setSegment}
          onOpenAuditModalWithData={handleOpenAuditModalWithData}
        />

        {/* 3. Solutions Asymmetric Bento Grid */}
        <SolutionsSection 
          onOpenAuditModal={handleOpenAuditModal} 
        />

        {/* 4. Verified Commissioned Case Studies */}
        <CaseStudiesSection 
          onOpenAuditModal={handleOpenAuditModal} 
        />

        {/* 5. Rigorous Engineering & Structural Standards */}
        <EngineeringStandardSection />

        {/* 6. Comprehensive Subsidy & Tax Depreciation Guide */}
        <SubsidyGuideSection 
          onOpenAuditModal={handleOpenAuditModal} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenAuditModal={handleOpenAuditModal} />

      {/* Interactive Rooftop Audit Booking & WhatsApp Dispatch Modal */}
      <AuditBookingModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialSegment={segment}
        initialCalc={auditInitialCalc}
        initialBill={auditInitialBill}
      />
    </div>
  );
}
