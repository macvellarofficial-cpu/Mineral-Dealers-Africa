import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Award, ShieldCheck, MapPin, TrendingUp, TrendingDown, Globe, Check, ChevronDown, Bell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CompanyLogo from './CompanyLogo';
import { useGoldPrice } from '../hooks/useGoldPrice';
import { useLanguage, LanguageCode } from '../hooks/useLanguage';

interface HeaderProps {
  onRequestConsultation: () => void;
}

export default function Header({ onRequestConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pricePerOunce, change24h, source } = useGoldPrice(40000);
  
  const location = useLocation();
  const navigate = useNavigate();

  const { lang, changeLanguage, t, languages, getLocalizedLink } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({ title: '', desc: '', flag: '🇬🇧' });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: LanguageCode) => {
    changeLanguage(code);
    setLangDropdownOpen(false);
    
    const targetLang = languages.find(l => l.code === code);
    
    // Setup toast notification
    setToastContent({
      title: t('lang.switched'),
      desc: t('lang.desc'),
      flag: targetLang?.flag || '🇬🇧'
    });
    setShowToast(true);
    
    // Auto clear toast after 5s
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  };

  const activeLangOption = languages.find(l => l.code === lang) || languages[0];

  // Map pathname to active tab item ID
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/marketplace')) return 'marketplace';
    if (path.startsWith('/miners')) return 'miners';
    if (path.startsWith('/education')) return 'education';
    if (path.startsWith('/investor')) return 'investor';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/contact')) return 'contact';
    return '';
  };

  const currentTab = getActiveTab();

  const navigationItems = [
    { id: 'home', labelKey: 'nav.home', path: '/' },
    { id: 'about', labelKey: 'nav.about', path: '/about' },
    { id: 'services', labelKey: 'nav.services', path: '/services' },
    { id: 'marketplace', labelKey: 'nav.marketplace', path: '/marketplace' },
    { id: 'miners', labelKey: 'nav.miners', path: '/miners' },
    { id: 'education', labelKey: 'nav.education', path: '/education' },
    { id: 'investor', labelKey: 'nav.investor', path: '/investor' },
    { id: 'blog', labelKey: 'nav.blog', path: '/blog' },
    { id: 'contact', labelKey: 'nav.contact', path: '/contact' }
  ];

  const handleNavClick = () => {
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
              <span className="font-bold tracking-widest uppercase text-[9px] sm:text-[10px]">{t('nav.tagline')}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/40">
              <Award className="h-3.5 w-3.5" />
              <span>{t('nav.compliance')}</span>
            </span>
          </div>

          {/* Real-Time LBMA Gold Price Ticker in middle */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 bg-black/40 border border-white/5 px-3 py-1 rounded-sm text-[10px] font-mono select-none" 
            title={`Real-time Spot Gold spot rate (Source: ${source})`}
            id="header-gold-ticker"
          >
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-white/40 uppercase font-black tracking-widest text-[9px]">{t('nav.spot')}:</span>
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
              <span>{t('nav.email')}</span>
            </a>
            <a 
              href="https://wa.me/256762079775" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors font-medium text-emerald-500"
              title="Official WhatsApp Sourcing Line"
            >
              <Phone className="h-3.5 w-3.5 animate-pulse" />
              <span>{t('nav.phone')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Navbar */}
      <nav className="w-full bg-black/15 backdrop-blur-[20px] border-b border-[#D4AF37]/12 py-4 px-4 sticky top-0 shadow-[0_4px_32px_rgba(0,0,0,0.5)]" id="luxury-navbar">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Corporate Brand Identity */}
          <Link 
            to={getLocalizedLink('/')}
            onClick={handleNavClick}
            className="flex items-center gap-3.5 text-left group transition-transform focus:outline-none cursor-pointer"
            id="nav-logo-btn"
          >
            <CompanyLogo variant="horizontal" iconSize={42} />
          </Link>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <Link
                  key={item.id}
                  to={getLocalizedLink(item.path)}
                  onClick={handleNavClick}
                  id={`nav-item-${item.id}`}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-semibold rounded-md transition-all relative ${
                    isActive 
                      ? 'text-[#D4AF37] font-bold bg-white/5' 
                      : 'text-white/70 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  <span>{t(item.labelKey)}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator" 
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37]" 
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Primary CTA and Mobile Toggle Button */}
          <div className="flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <div className="relative hidden md:block" ref={dropdownRef} id="language-switcher-wrapper">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-md border border-white/10 transition-all cursor-pointer"
                aria-label="Select Language"
              >
                <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{activeLangOption.flag}</span>
                <span className="uppercase tracking-wider font-mono text-[10px]">{activeLangOption.code}</span>
                <ChevronDown className={`h-3 w-3 opacity-60 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1.5 w-48 rounded bg-[#161616] border border-[#D4AF37]/20 shadow-2xl overflow-hidden z-50 text-left"
                  >
                    <div className="py-1">
                      <div className="px-3.5 py-2 border-b border-white/5 text-[9px] font-mono tracking-widest uppercase text-white/45">
                        SELECT TRADE CHANNEL
                      </div>
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language.code)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors hover:bg-white/5 ${
                            lang === language.code ? 'text-[#D4AF37] font-semibold bg-[#D4AF37]/5' : 'text-white/80 hover:text-[#D4AF37]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{language.flag}</span>
                            <div className="flex flex-col">
                              <span className="text-[11px] leading-tight font-medium">{language.nativeName}</span>
                              <span className="text-[9px] text-white/40 leading-none">{language.name}</span>
                            </div>
                          </div>
                          {lang === language.code && <Check className="h-3.5 w-3.5 text-[#D4AF37]" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={onRequestConsultation}
              id="header-cta-btn"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-bold luxury-gold-button text-black rounded-sm border border-[#D4AF37]/30 transition-all cursor-pointer"
            >
              {t('nav.cta')}
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
            <div className="px-4 py-5 flex flex-col gap-2">
              <div className="flex justify-between items-center px-3.5 pb-2 mb-1 border-b border-white/5">
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/45">Language / Lugha / Olubimi</span>
              </div>
              
              {/* Mobile Language Horizontal Switcher strip */}
              <div className="grid grid-cols-3 gap-1.5 px-3.5 mb-4">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      handleLanguageSelect(language.code);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2 w-full rounded border text-[11px] transition-all cursor-pointer ${
                      lang === language.code
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                        : 'border-white/10 bg-white/5 text-white/70'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span className="uppercase font-mono text-[9px]">{language.code}</span>
                  </button>
                ))}
              </div>

              {navigationItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <Link
                    key={item.id}
                    to={getLocalizedLink(item.path)}
                    onClick={handleNavClick}
                    className={`w-full text-left px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-widest transition-all block ${
                      isActive 
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] pl-3' 
                        : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
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
                  {t('nav.cta')}
                </button>
                <div className="flex flex-col gap-2 p-3 bg-black/20 border border-white/5 rounded text-[11px] text-white/50">
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

      {/* Floating Elegant Multi-language Confirmation Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] w-[320px] max-w-[calc(100vw-2rem)] bg-[#111111]/95 backdrop-blur-md border border-[#D4AF37]/35 rounded shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.08)] p-4 text-left overflow-hidden group"
          >
            {/* Subtle glow border effect */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4AF37]" />
            <div className="flex items-start gap-3 pl-1.5">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#D4AF37]/10 shrink-0 text-[#D4AF37]">
                <span className="text-base select-none">{toastContent.flag}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white tracking-tight uppercase flex items-center gap-1">
                  <span>{toastContent.title}</span>
                </p>
                <p className="text-[10px] text-white/60 font-light mt-1 leading-relaxed">
                  {toastContent.desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

