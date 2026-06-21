import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

// Modular Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import MarketplacePage from './pages/Marketplace';
import ForMiners from './pages/ForMiners';
import Education from './pages/Education';
import Investor from './pages/Investor';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Types
import { MineralListing, Inquiry } from './types';

function AppContent() {
  const navigate = useNavigate();
  const [activeInquiryMineral, setActiveInquiryMineral] = useState<MineralListing | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState<boolean>(false);
  const [preselectedInquiryContext, setPreselectedInquiryContext] = useState<string>('');

  // Sourcing Inquiry handlers
  const handleInquireListing = (mineral: MineralListing) => {
    setActiveInquiryMineral(mineral);
    setShowInquiryModal(true);
  };

  const handleInquireGeneral = (contextText: string) => {
    setActiveInquiryMineral(null);
    setPreselectedInquiryContext(contextText);
    setShowInquiryModal(true);
  };

  const handleInquirySubmit = (inquiryData: Omit<Inquiry, 'id' | 'date'>) => {
    try {
      const activeInquiries = JSON.parse(localStorage.getItem('mda_inquiries') || '[]');
      const newInquiry = {
        ...inquiryData,
        id: `inq-${Date.now()}`,
        date: new Date().toISOString().split('T')[0]
      };
      localStorage.setItem('mda_inquiries', JSON.stringify([...activeInquiries, newInquiry]));
    } catch (e) {
      console.error("Local storage inquiry error:", e);
    }
  };

  return (
    <div className="min-h-screen bg-[#070604] text-white flex flex-col font-sans md:border-[12px] border-[#13100a] relative overflow-hidden" id="applet-viewport">
      
      {/* Premium Luxury Soft Ambient Lighting Sources */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-15%] w-[50%] h-[50%] rounded-full bg-[#AA7C11]/3 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[40%] rounded-full bg-[#D4AF37]/2 blur-[100px] pointer-events-none z-0" />

      {/* Persistent Navigation Header */}
      <Header 
        onRequestConsultation={() => handleInquireGeneral('Direct Advisory Consult requested from Header')} 
      />

      {/* Main Corporate Workspace container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-12 relative z-10" id="main-corporate-workspace">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onInquireGeneral={handleInquireGeneral} 
                onNavigate={(path) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              />
            } 
          />
          <Route path="/about" element={<AboutUs />} />
          <Route 
            path="/services" 
            element={<Services onInquireService={(serviceName) => handleInquireGeneral(`Service Briefing Request: ${serviceName}`)} />} 
          />
          <Route 
            path="/marketplace" 
            element={<MarketplacePage onInquire={handleInquireListing} />} 
          />
          <Route 
            path="/miners" 
            element={
              <ForMiners 
                onNavigate={(path) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              />
            } 
          />
          <Route path="/education" element={<Education />} />
          <Route 
            path="/investor" 
            element={<Investor onInquire={() => handleInquireGeneral('Sovereign Investor consultation briefing requested')} />} 
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Persistent Corporate Footer */}
      <Footer 
        onRequestConsultation={() => handleInquireGeneral('Direct consultation requested from corporate Footer')} 
      />

      {/* DYNAMIC LEADS INTAKE MODAL */}
      <AnimatePresence>
        {showInquiryModal && (
          <InquiryModal 
            mineral={activeInquiryMineral} 
            preselectedContext={preselectedInquiryContext}
            onClose={() => setShowInquiryModal(false)} 
            onSubmit={handleInquirySubmit} 
          />
        )}
      </AnimatePresence>

      {/* PERSISTENT WHATSAPP SECURE FLOATING BUTTON ON BOTTOM LEFT */}
      <a 
        href="https://wa.me/256762079775" 
        target="_blank" 
        rel="noopener noreferrer"
        id="whatsapp-floating-button"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-black/85 hover:bg-[#12100a] text-white border border-[#D4AF37]/35 hover:border-[#D4AF37] p-3 pl-4 pr-5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] backdrop-blur-md transition-all duration-300 group hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Active online pulse indicator */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          {/* Custom SVG WhatsApp Logo */}
          <div className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">
            <svg className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-col text-left select-none">
          <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#D4AF37] group-hover:text-gold-400 transition-colors">WhatsApp Secure</span>
          <span className="text-xs font-semibold text-white/90 font-sans group-hover:text-white transition-colors">+256 762 079775</span>
        </div>
      </a>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
