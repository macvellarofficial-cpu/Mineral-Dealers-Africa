import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Award, ShieldCheck, MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import CompanyLogo from './CompanyLogo';
import { useGoldPrice } from '../hooks/useGoldPrice';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onRequestConsultation: () => void;
}

export default function Header({ currentTab, setCurrentTab, onRequestConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pricePerOunce, change24h, source } = useGoldPrice(40000);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'miners', label: 'For Miners' },
    { id: 'education', label: 'Education Center' },
    { id: 'investor', label: 'Investor Center' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative z-50 w-full" id="site-header">
      {/* Top Professional Contact Ribbon */}
      <div className="w-full bg-[#111111] border-b border-white/5 text-xs px-4 py-2.5 text-white/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
          {/* Sourcing credentials and compliance badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="font-bold tracking-widest uppercase text-[9px] sm:text-[10px]">Verified Mineral Gateway</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/40">
              <Award className="h-3.5 w-3.5" />
              <span>Uganda Mining Act 2022 Compliant</span>
            </span>
          </div>

          {/* Real-Time LBMA Gold Price Ticker in middle */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 bg-black/40 border border-white/5 px-3 py-1 rounded-sm text-[10px] font-mono select-none" 
            title={`Real-time Spot Gold spot rate (Source: ${source})`}
            id="header-gold-ticker"
          >
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-white/40 uppercase font-black tracking-widest text-[9px]">LBMA GOLD SPOT:</span>
            <span className="text-white font-bold font-mono text-xs">${pricePerOunce.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className="text-white/30 text-[9px]">/oz</span>
            <span className={`inline-flex items-center gap-0.5 font-bold text-[11px] ${change24h >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
              {change24h >= 0 ? "+" : ""}{change24h.toFixed(2)}%
              {change24h >= 0 ? <TrendingUp className="h-3 w-3 shrink-0" /> : <TrendingDown className="h-3 w-3 shrink-0" />}
            </span>
          </div>
          
          {/* Quick contact and social handles */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5">
            <a 
              href="mailto:info@mineraldealersafrica.com" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
              title="Official Email"
            >
              <Mail className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>info@mineraldealersafrica.com</span>
            </a>
            <a 
              href="https://wa.me/256762079775" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors font-medium text-emerald-500"
              title="Official WhatsApp Sourcing Line"
            >
              <Phone className="h-3.5 w-3.5 animate-pulse" />
              <span>+256 762 079775</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Navbar */}
      <nav className="w-full bg-black/15 backdrop-blur-[20px] border-b border-[#D4AF37]/12 py-4 px-4 sticky top-0 shadow-[0_4px_32px_rgba(0,0,0,0.5)]" id="luxury-navbar">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Corporate Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group transition-transform focus:outline-none cursor-pointer"
            id="nav-logo-btn"
          >
            <CompanyLogo variant="horizontal" iconSize={42} />
          </button>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-semibold rounded-md transition-all relative ${
                    isActive 
                      ? 'text-[#D4AF37] font-bold bg-white/5' 
                      : 'text-white/70 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator" 
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37]" 
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Primary CTA and Mobile Toggle Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestConsultation}
              id="header-cta-btn"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-bold luxury-gold-button text-black rounded-sm border border-[#D4AF37]/30 transition-all cursor-pointer"
            >
              Request Consultation
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-[#D4AF37] transition-colors focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu Layout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-black/85 backdrop-blur-[22px] border-b border-[#D4AF37]/20 absolute left-0 right-0 top-full overflow-hidden shadow-2xl"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded text-sm font-semibold uppercase tracking-widest transition-all ${
                      isActive 
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] pl-3' 
                        : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestConsultation();
                  }}
                  className="w-full text-center py-3 luxury-gold-button text-black font-bold uppercase tracking-widest text-xs rounded shadow-lg"
                >
                  Request Consultation
                </button>
                <div className="flex flex-col gap-2 p-3 bg-black/20 border border-white/5 rounded text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>Lubowa Estate, Kampala, Uganda</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
