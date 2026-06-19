import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import MarketSpotlight from './components/MarketSpotlight';
import Marketplace from './components/Marketplace';
import EducationCenter from './components/EducationCenter';
import InvestorGuide from './components/InvestorGuide';
import BlogCenter from './components/BlogCenter';
import ServicesLayout from './components/ServicesLayout';
import InquiryModal from './components/InquiryModal';

// @ts-ignore
import goldBarsImg from './assets/images/gold_bars_uganda_1781900099865.jpg';
// @ts-ignore
import rawGoldBowlsImg from './assets/images/raw_gold_bowls_1781900113727.jpg';

import { 
  ShieldCheck, Award, MessageSquare, ArrowRight, MapPin, 
  Phone, Mail, Clock, ShieldAlert, Sparkles, Check, CheckCircle2, 
  HelpCircle, Send, Star, ExternalLink, Library, Briefcase, Landmark 
} from 'lucide-react';
import { MineralListing, Inquiry } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeInquiryMineral, setActiveInquiryMineral] = useState<MineralListing | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState<boolean>(false);
  const [preselectedInquiryContext, setPreselectedInquiryContext] = useState<string>('');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Auto-scroll on tab change
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch inquiry modal for a specific marketplace listing
  const handleInquireListing = (mineral: MineralListing) => {
    setActiveInquiryMineral(mineral);
    setShowInquiryModal(true);
  };

  // Launch general inquiry modal with a preselected service / context
  const handleInquireGeneral = (contextText: string) => {
    setActiveInquiryMineral(null);
    setPreselectedInquiryContext(contextText);
    setShowInquiryModal(true);
  };

  const handleInquirySubmit = (inquiryData: Omit<Inquiry, 'id' | 'date'>) => {
    // Write inquiry locally to simulate active secure CRM delivery
    try {
      const activeInquiries = JSON.parse(localStorage.getItem('mda_inquiries') || '[]');
      const newInquiry = {
        ...inquiryData,
        id: `inq-${Date.now()}`,
        date: new Date().toISOString().split('T')[0]
      };
      localStorage.setItem('mda_inquiries', JSON.stringify([...activeInquiries, newInquiry]));
    } catch (e) {
      console.error(e);
    }
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Please fulfill key communication criteria before sending.");
      return;
    }
    
    // Save contact logs locally
    try {
      const activeContacts = JSON.parse(localStorage.getItem('mda_contact_logs') || '[]');
      localStorage.setItem('mda_contact_logs', JSON.stringify([...activeContacts, {
        name: contactName,
        email: contactEmail,
        subject: contactSubject,
        message: contactMessage,
        date: new Date().toISOString()
      }]));
    } catch (err) {
      console.error(err);
    }

    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#070604] text-white flex flex-col font-sans md:border-[12px] border-[#13100a] relative overflow-hidden" id="applet-viewport">
      
      {/* Premium Luxury Soft Ambient Lighting Sources */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-15%] w-[50%] h-[50%] rounded-full bg-[#AA7C11]/3 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[40%] rounded-full bg-[#D4AF37]/2 blur-[100px] pointer-events-none z-0" />

      {/* Navigation Header bar */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={handleTabChange} 
        onRequestConsultation={() => handleInquireGeneral('Direct Advisory Consult requested from Header')} 
      />

      {/* Main Corporate Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-12 relative z-10" id="main-corporate-workspace">
        
        {/* HOMEPAGE VIEW */}
        {currentTab === 'home' && (
          <div className="flex flex-col gap-16" id="home-view">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 lg:py-24" id="corporate-hero">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero messaging body */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-mono tracking-[0.15em] font-semibold self-start shadow-[0_0_15px_rgba(212,175,55,0.08)] backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#D4AF37] gold-glow-icon" />
                    <span className="gold-glow">Africa's Verified Sovereign Sourcing Pipeline</span>
                  </div>

                  <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                    Connecting Global Investors to Africa's Most <span className="gold-text-gradient gold-glow">Valuable Mineral</span> Opportunities
                  </h1>

                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl">
                    Trusted sourcing, compliance vetting, independent due diligence consultancy, and secured export logistics facilitation for gold, diamonds, and gemstones across East Africa. Headquartered in Kampala, Uganda.
                  </p>

                  {/* High conversion call-to-actions */}
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <button
                      onClick={() => handleInquireGeneral('General Sourcing consultation inquiry launched from Hero')}
                      className="px-6 py-3.5 luxury-gold-button text-black font-extrabold uppercase tracking-widest text-xs rounded-sm cursor-pointer flex items-center gap-2 group transition-transform active:scale-95"
                    >
                      <span>Request Consultation</span>
                      <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleTabChange('marketplace')}
                      className="px-6 py-3.5 bg-black/40 border border-[#D4AF37]/25 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white rounded-sm text-xs uppercase tracking-widest font-bold backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] cursor-pointer"
                    >
                      Browse Minerals
                    </button>
                  </div>

                  {/* Trust indicator badges requested */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 border-t border-neutral-800/80 pt-6 mt-4 text-[11px] font-mono font-medium text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>Verified Suppliers Only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>Export Document Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>Professional Due Diligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>Secure Transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>International Logistics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">✓</span>
                      <span>Expert Mineral Consultancy</span>
                    </div>
                  </div>
                </div>

                {/* Hero Visual Block */}
                <div className="lg:col-span-5 relative flex justify-center items-center">
                  <div className="absolute inset-0 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />
                  
                  {/* Styled bento preview showcase card */}
                  <div className="relative luxury-glass border border-[#D4AF37]/15 p-6 rounded-2xl w-full max-w-sm overflow-hidden flex flex-col gap-5 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.04)] luxury-glass-hover hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.18)] transition-all duration-300">
                    
                    <div className="flex justify-between items-start pb-4 border-b border-[#D4AF37]/10">
                      <div>
                        <span className="text-[10px] text-white/40 block font-mono font-bold uppercase tracking-wider"> Kampala Headquarters</span>
                        <h4 className="font-serif text-lg font-bold text-white">Refining & Clearing Desk</h4>
                      </div>
                      <Award className="h-6 w-6 text-[#D4AF37] gold-glow-icon" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="p-2 h-9 w-9 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
                          KG
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-white">Smelted Gold Bars</span>
                          <span className="block text-[11px] text-white/55 font-light">LBMA Grade 24K export ready. Assayed by government-vetted Directorate officials.</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="p-2 h-9 w-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] font-bold text-xs flex items-center justify-center">
                          KP
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-white">Kimberley Diamonds lot</span>
                          <span className="block text-[11px] text-white/55 font-light">Conflict-free gemstone rough crystals sourced legally at Saurimo mine gates.</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-black/40 border border-white/5 rounded-sm flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-white/55 font-mono">Vault Storage Active</span>
                      </div>
                      <span className="font-mono text-[#D4AF37] font-bold uppercase">Plot 429</span>
                    </div>

                    <button
                      onClick={() => handleTabChange('services')}
                      className="w-full text-center py-2.5 luxury-gold-button text-black font-extrabold uppercase tracking-widest text-[10px] rounded-sm cursor-pointer"
                    >
                      Audit Our Services
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* LIVE MARKETPLACE DASHBOARD WIDGET */}
            <MarketSpotlight />

            {/* PREMIUM MINERAL SELECTION SHOWCASE */}
            <section className="flex flex-col gap-8 relative" id="minerals-showcase">
              {/* Background ambient lighting glow */}
              <div className="absolute top-[20%] left-[30%] w-[40%] h-[60%] rounded-full bg-[#D4AF37]/3.5 blur-[130px] pointer-events-none" />

              <div className="text-center relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#D4AF37] block mb-2 font-bold">COMPREHENSIVE DEPOSIT CORES</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide">
                  African Sourced <span className="gold-text-gradient font-black">Asset Catalog</span>
                </h2>
                <div className="gold-accent-line my-4 max-w-sm mx-auto" />
                <p className="text-xs text-white/60 max-w-lg mx-auto font-light leading-relaxed">
                  Explore precious metals and strategic minerals sourced from verified concessionaires. We manage full local tax clearances, independent assaying, and G4S air transport.
                </p>
              </div>

              {/* Showcase Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    title: "Gold Bars",
                    desc: "Assayed LBMA bullion bars of 1kg blocks. 99.99% purity. Smelted inside government approved Kampala facilities.",
                    badge: "Refined",
                    img: goldBarsImg
                  },
                  {
                    title: "Gold Nuggets",
                    desc: "Natural alluvial gold nuggets with purity exceeding 94%. Direct from community cooperatives in Geita.",
                    badge: "ASM Direct",
                    img: rawGoldBowlsImg
                  },
                  {
                    title: "Gold Dust Concentrate",
                    desc: "Raw alluvial gold gold dust. Tested and certified. Conflict-free chain-of-custody in order.",
                    badge: "Raw Grade",
                    img: "https://images.unsplash.com/photo-1610375229632-c7158c35a537?auto=format&fit=crop&q=80&w=600"
                  },
                  {
                    title: "Gemstones (Emerald & Tanzanite)",
                    desc: "Phenomenal raw emeralds from Lufwanyama (Zambia) and intense blue Block D Tanzanites.",
                    badge: "Fine Gems",
                    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="luxury-glass border border-[#D4AF37]/12 rounded-2xl overflow-hidden flex flex-col justify-between luxury-glass-hover shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.18)] hover:-translate-y-2 group transition-all duration-300">
                    <div className="relative h-44 w-full overflow-hidden bg-black/40">
                      <img src={item.img} alt={item.title} referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300" />
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 backdrop-blur-md border border-[#D4AF37]/35 text-[9px] text-[#D4AF37] font-mono rounded-md uppercase font-bold tracking-wider">{item.badge}</span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                        <p className="text-xs text-white/50 font-light mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                      <button 
                        onClick={() => handleTabChange('marketplace')}
                        className="mt-5 w-full py-2.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/25 hover:border-transparent text-[#D4AF37] hover:text-black text-[10px] font-extrabold uppercase tracking-widest rounded-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300"
                      >
                        <span>View Marketplace</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TRUST SIGNAL & COMPLIANCE SYSTEM SECTION */}
            <section className="luxury-glass rounded-3xl p-8 lg:p-10 border border-[#D4AF37]/15 flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.04)]" id="trust-signal-blocks">
              <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#D4AF37]/3.5 blur-[120px] pointer-events-none" />

              <div className="lg:w-1/2 flex flex-col gap-4 relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block font-extrabold">STRICT SYSTEM STANDARD</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-snug">The Mineral Dealers Africa Due Diligence Mandate</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Fraud, substitution, and licensing violations are widespread in informal markets. Our company was built specifically to bridge this gap by enforcing legal transparency. We inspect mineral sites on-ground and handle chemical assays inside state laboratories.
                </p>
                
                <div className="flex gap-4 items-center bg-black/30 border border-[#D4AF37]/10 p-4 rounded-xl mt-2 backdrop-blur-sm">
                  <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] rounded-full shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <ShieldCheck className="h-6 w-6 gold-glow-icon" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block uppercase tracking-wide">OECD Annex II Compliance</span>
                    <span className="text-[11px] text-white/40">All minerals fully traced, certified, and compliant under anti-conflict codes.</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
                {[
                  { title: "Supplier Audits", text: "Physical concessions are vetted thoroughly. We check mining license logs and confirm active corporate registry codes before listings go live." },
                  { title: "Spectrograph Assaying", text: "Independent chemical analyses inside DGSM state laboratory rooms guarantees accurate Karat weight determinations." },
                  { title: "Secure Custody Logistics", text: "We partner with global secure lines like G4S to escort assets from storage chambers directly to airport carrier decks." },
                  { title: "Verified Escrow", text: "FOB and CIF contracts are processed using dedicated escrow bank accounts, protecting buyers' deposit capital." }
                ].map((item, idx) => (
                  <div key={idx} className="luxury-glass p-5 rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 luxury-glass-hover hover:-translate-y-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <span className="text-xs font-bold text-[#D4AF37] block mb-1 uppercase tracking-wider">{item.title}</span>
                    <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS SLIDER SECTION */}
            <section className="flex flex-col gap-8 relative" id="testimonials">
              <div className="text-center">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block font-extrabold">SUCCESSFUL TRANSACTIONS</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mt-1.5">International Buyer Endorsements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    quote: "Sourcing rough diamond lots in Central Africa requires extraordinary caution. Mineral Dealers Africa managed on-ground Kimberley license inspections in Angola and secure air transport flawless. Excellent corporate compliance.",
                    author: "Marcus Van Den Berg",
                    company: "Gems & Bullion BV (Antwerp)",
                    stars: 5
                  },
                  {
                    quote: "Their knowledge of Uganda's New Mining Act of 2022 prevented a major regulatory bottleneck for our joint equipment-financing venture. Andrew Nakato managed licensing applications directly with the Kampala ministry.",
                    author: "Dr. Chen Wei",
                    company: "Eastern Commodities Alliance (Hong Kong)",
                    stars: 5
                  },
                  {
                    quote: "Buying physical Gold in Africa is safe only if you use state-level laboratories for assaying. MDA monitored our sample fire assays at the DGSM Entebbe laboratory and handled clearance protocols accurately.",
                    author: "Jean-Louis Dupont",
                    company: "Prestige Bullion Smelters (Geneva)",
                    stars: 5
                  }
                ].map((item, idx) => (
                  <div key={idx} className="frosted-glass border border-[#D4AF37]/10 p-6 rounded-2xl flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/35 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-2 group">
                    <div>
                      <div className="flex gap-1 mb-4 text-[#D4AF37]">
                        {[...Array(item.stars)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37] gold-glow-icon" />)}
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed font-light italic">"{item.quote}"</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 text-xs text-left">
                      <span className="font-bold text-white block uppercase tracking-wide">{item.author}</span>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider font-mono">{item.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* QUICK FAQ ACCORDION SECTION */}
            <section className="luxury-glass border border-[#D4AF37]/15 rounded-2xl p-6 md:p-8 flex flex-col gap-6" id="home-faqs">
              <h3 className="font-serif text-xl font-bold text-white border-b border-[#D4AF37]/15 pb-4">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    q: "Can I buy gold directly from hotel suites in Kampala?",
                    a: "No. Legitimate dealers and verified cooperatives run trade negotiations exclusively inside licensed boardrooms, bank chambers, or official company offices. Hotel corridor sales are the signature of unverified operators."
                  },
                  {
                    q: "How is mineral purity officially assayed in Uganda?",
                    a: "Official chemical assay reports are generated at the Directorate of Geological Survey and Mines (DGSM) laboratories in Entebbe. Their labs utilize XRF spectrograph scans and fire testing assays."
                  },
                  {
                    q: "What is your stance regarding conflict minerals?",
                    a: "Mineral Dealers Africa possesses a rigid anti-conflict protocol. All listings on our Amazon Mineral Marketplace are traced directly back to their source ASM concessions to comply with OECD Due Diligence Guidelines."
                  },
                  {
                    q: "How are shipping logistics and customs managed?",
                    a: "We coordinate end-to-end transport with first-class armored couriers (e.g., G4S or Brinks). We manage royal declarations, pay export taxes, and issue official custom permits at Entebbe terminal."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <h4 className="font-serif text-xs uppercase tracking-wider font-bold text-[#D4AF37] flex items-start gap-2">
                      <HelpCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5 gold-glow-icon" />
                      <span>{item.q}</span>
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light pl-6">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* ABOUT US VIEW */}
        {currentTab === 'about' && (
          <div className="flex flex-col gap-10" id="about-us-view">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* narrative column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-mono tracking-[0.15em] font-semibold self-start shadow-[0_0_15px_rgba(212,175,55,0.08)] backdrop-blur-md">
                  <Award className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
                  <span>Bridging Governance, Compliance & Mineral Abundance</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  We are Africa's Trusted Gateway to <span className="gold-text-gradient">Legitimate Minerals</span> Sourcing
                </h2>

                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                  Founded upon the core tenets of absolute transparency, corporate compliance, on-ground diligence, and regional Mining Act alignment, <strong>Mineral Dealers Africa (MDA)</strong> helps bridge the gap between global buyers and local mineral producers.
                </p>

                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                  Working direct with mining cooperatives (ASM) in Uganda, Tanzania, and central Africa, we replace high-risk broker corridors with structured, bank-verified pipelines. We maintain direct relationships with central authorities like the Directorate of Geological Survey and Mines (DGSM) to ensure all regulatory clearances, royalty computations, and export permits are processed cleanly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/5 pt-6 mt-4">
                  <div>
                    <span className="font-serif text-[#D4AF37] font-bold text-sm block">Our Mission</span>
                    <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">To sanitize the regional mineral trade by enforcing strict background vetting, double-blind assays, and legal export clearing, ensuring buyers receive genuine precious assets safely.</p>
                  </div>
                  <div>
                    <span className="font-serif text-emerald-400 font-bold text-sm block">Responsible Trade Sourcing</span>
                    <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">Enforcing OECD global standards to eradicate conflict-minerals and support certified artisanal mining collectives as an avenue for community development.</p>
                  </div>
                </div>
              </div>

              {/* Corporate Identity Profile card */}
              <div className="lg:col-span-5 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none">
                <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">MEMORANDUM OF COMPLIANCE</span>
                <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">Corporate Credentials</h3>
                <ul className="space-y-4 text-xs text-white/60">
                  <li className="flex justify-between py-1 border-b border-white/5">
                    <span className="font-light">Registered Address:</span>
                    <span className="text-white text-right font-semibold font-mono text-[11px]">Plot 429, Lubowa Estate, Kampala</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-white/5">
                    <span className="font-light">Regulatory Body:</span>
                    <span className="text-white text-right font-semibold">Directorate of Geological Survey & Mines</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-white/5">
                    <span className="font-light">Export Port Authorized:</span>
                    <span className="text-white text-right font-semibold font-mono text-[11px]">Entebbe Airport Terminal (EBB)</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-white/5">
                    <span className="font-light">Trade Guidelines Protocol:</span>
                    <span className="text-[#D4AF37] text-right font-bold text-[11px]">OECD Annex II Standard</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-white/5">
                    <span className="font-light">Verification Facility:</span>
                    <span className="text-emerald-400 text-right font-semibold">Accredited State Laboratories</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-black/40 rounded-xl border border-[#D4AF37]/10 flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <p className="text-[10px] text-white/50 leading-relaxed font-light">Board members hold full consulting licenses and actively cooperate with legal compliance firms globally.</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* COMPREHENSIVE SERVICES VIEW */}
        {currentTab === 'services' && (
          <ServicesLayout onInquireService={(serviceTitle) => handleInquireGeneral(`Brief requested representing client interest in: ${serviceTitle}`)} />
        )}

        {/* AMAZON-STYLE MARKETPLACE VIEW */}
        {currentTab === 'marketplace' && (
          <Marketplace onInquire={handleInquireListing} />
        )}

        {/* FOR MINERS PAGE */}
        {currentTab === 'miners' && (
          <div className="flex flex-col gap-10" id="for-miners-desk">
            
            {/* Lead Section */}
            <div className="luxury-glass border border-[#D4AF37]/20 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.04)]">
              <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[150%] rounded-full bg-[#D4AF37]/3.5 blur-[120px] pointer-events-none" />
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">LOCAL MINING ALLIANCE POWER</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Empowering African Miners to Access <span className="gold-text-gradient">Global Liquidity</span>
              </h2>
              <div className="gold-accent-line my-4 max-w-xs" />
              <p className="text-xs text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
                Are you an authorized artisanal mining cooperative (ASM) or licensed dealer in East Africa? We help you connect directly with international jewelry refiners, commodities funds, and secure metal brokers.
              </p>
            </div>

            {/* Grid Explaining Process */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* How to register step column */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="font-serif text-sm uppercase tracking-widest font-extrabold text-white border-l-2 border-[#D4AF37] pl-3 mb-4">
                  The Miner Onboarding Guidelines
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      step: "01",
                      title: "Digital Registration",
                      desc: "Submit your corporate details, concession location, and municipal dealer license code using our digital register. Zero registration fees."
                    },
                    {
                      step: "02",
                      title: "Physical Vetting & Assay",
                      desc: "An MDA compliance officer executes a brief site audit, checks concession parameters, and performs chemical assays inside Kampala laboratories."
                    },
                    {
                      step: "03",
                      title: "Upload Mineral Listing",
                      desc: "Specify your stock category, origin country, certified purity level, and total available kilogram/carat bulk volume on our Amazon-style portal."
                    },
                    {
                      step: "04",
                      title: "Secure Contract Handoff",
                      desc: "Upon buyer inquiries, our escrow accounts secure transaction capitals. Transport teams escort stocks to Entebbe terminal under complete legal clearance."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="luxury-glass border border-[#D4AF37]/10 p-5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] luxury-glass-hover hover:-translate-y-1.5 transition-all duration-300">
                      <span className="font-mono text-xs text-[#D4AF37] font-extrabold block mb-1">PARTICULAR STEP {item.step}</span>
                      <h4 className="font-serif text-sm font-bold text-white mt-0.5 mb-2">{item.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Benefits */}
              <div className="lg:col-span-4 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none">
                <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">COOPERATIVE VALUE PROPOSITION</span>
                <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">Alliance Privileges</h3>
                
                <ul className="space-y-4 text-xs text-white/60">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
                    <div>
                      <span className="text-white font-semibold block uppercase">Global Exposure</span>
                      <span>Access verified premium jewelry brands and investment funds looking for ethical metal.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
                    <div>
                      <span className="text-white font-semibold block uppercase">Direct Buyer Access</span>
                      <span>Eradicates expensive broker networks, maximizing mineral profit yield direct to smallholders.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
                    <div>
                      <span className="text-white font-semibold block uppercase">Professional Legal Support</span>
                      <span>Full assistance with DGSM export permits, transport secure escorts, and assay logistics.</span>
                    </div>
                  </li>
                </ul>

                <button
                  onClick={() => handleTabChange('marketplace')}
                  className="w-full text-center py-2.5 luxury-gold-button text-black font-extrabold uppercase tracking-widest text-[10px] rounded-sm mt-6 cursor-pointer"
                >
                  Join Sourcing Alliance
                </button>
              </div>

            </div>
          </div>
        )}

        {/* BUYER EDUCATION VIEW */}
        {currentTab === 'education' && (
          <EducationCenter />
        )}

        {/* INVESTOR CENTER */}
        {currentTab === 'investor' && (
          <InvestorGuide onRequestConsultation={() => handleInquireGeneral('Corporate Investment inquiry launched from Investor Briefing desktop')} />
        )}

        {/* BLOG VIEW */}
        {currentTab === 'blog' && (
          <BlogCenter />
        )}

        {/* CONTACT & SUPPORT VIEW */}
        {currentTab === 'contact' && (
          <div className="flex flex-col gap-10" id="contact-desk">
            
            {/* Title Block */}
            <div className="border bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-neutral-900 p-8 rounded-xl border-gold-500/10">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-500 block mb-1">SECURED INTENT LOGISTICS</span>
              <h2 className="font-serif text-3xl font-bold text-white leading-tight">
                Establish Direct <span className="text-gold-500">Communication Channel</span>
              </h2>
              <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
                Contact our headquarters at Lubowa Estate in Kampala to query mineral listings, book verification site audits, or arrange fire-assay schedules.
              </p>
            </div>

            {/* Split layout: Contacts vs Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Contact Details */}
              <div className="lg:col-span-4 flex flex-col gap-6 font-light">
                <div className="bg-charcoal-900/60 border border-neutral-800 rounded-lg p-5 flex flex-col gap-4">
                  <h3 className="font-serif text-xs uppercase tracking-widest font-bold text-white border-l border-gold-500 pl-2 mb-2">Corporate Directory</h3>
                  
                  <div className="flex items-start gap-3 text-xs text-gray-400 leading-normal">
                    <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block uppercase">Registered Headquarters</span>
                      <span>Plot 429, Lubowa Estate, Sseguku, Off Entebbe Road, Wakiso District, Uganda</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-gray-400">
                    <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block uppercase">WhatsApp Direct Line</span>
                      <a href="https://wa.me/256762079775" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold">
                        +256 762 079775
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-gray-400">
                    <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block uppercase">Email Coordinates</span>
                      <a href="mailto:info@mineraldealersafrica.com" className="hover:text-gold-400 transition-colors">
                        info@mineraldealersafrica.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Local hours block */}
                <div className="bg-charcoal-900/40 p-5 rounded-lg border border-neutral-805 text-xs text-gray-400 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-gold-500 font-semibold uppercase font-mono text-[10px] tracking-wider mb-1">
                    <Clock className="h-4 w-4 text-gold-500" />
                    <span>Kampala Vault Hours</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-charcoal-900">
                    <span>Monday - Friday:</span>
                    <span>08:30 AM - 05:30 PM (EAT)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-charcoal-900 text-gray-500">
                    <span>Saturdays:</span>
                    <span>09:00 AM - 02:30 PM (EAT) (Desk only)</span>
                  </div>
                  <div className="flex justify-between py-1 text-red-500">
                    <span>Sundays:</span>
                    <span>Closed for audit</span>
                  </div>
                </div>

                {/* Stylized Google maps vector replacement container */}
                <div className="bg-charcoal-950 border border-gold-500/15 rounded-lg p-3 text-xs flex flex-col gap-3 relative overflow-hidden" id="maps-vector-replacement">
                  <div className="h-32 bg-gradient-to-br from-neutral-900 to-black select-none flex flex-col justify-center items-center relative rounded border border-neutral-850">
                    <MapPin className="h-8 w-8 text-gold-500 animate-bounce" />
                    <span className="block text-[10px] font-mono font-bold text-gray-400 mt-2">PLOT 429, LUBOWA ESTATE, UGANDA</span>
                    <span className="block text-[8px] text-gray-600">Off Entebbe Road Corridor Map</span>
                  </div>
                  <a
                    href="https://wa.me/256762079775"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-2 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500 hover:text-charcoal-950 text-emerald-400 text-[10px] font-bold uppercase rounded tracking-widest transition-all"
                  >
                    Open Live GPS Coordinates
                  </a>
                </div>
              </div>

              {/* Right Column CRM Contact Form */}
              <div className="lg:col-span-8 bg-charcoal-900 border border-neutral-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gold-500/15">
                  <MessageSquare className="h-5 w-5 text-gold-400" />
                  <h3 className="font-serif text-xs uppercase tracking-widest font-bold text-white">Generate Direct Sourcing Request</h3>
                </div>

                {contactSuccess ? (
                  <div className="p-8 text-center flex flex-col items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center animate-bounce">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">Message Dispatched</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Your communications have been recorded. Our communications officers at Plot 429, Lubowa office will check validation criteria and reply promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactFormSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Corporate Representative Name *</label>
                        <input
                          type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g., Charles Dube"
                          className="w-full bg-charcoal-950 border border-neutral-850 focus:border-gold-500 text-xs rounded p-2.5 outline-none text-white font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Email Coordinates *</label>
                        <input
                          type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="corporate@holding.com"
                          className="w-full bg-charcoal-950 border border-neutral-850 focus:border-gold-500 text-xs rounded p-2.5 outline-none text-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Corporate Subject Profile</label>
                      <input
                        type="text" value={contactSubject} onChange={(e) => setContactSubject(e.target.value)}
                        placeholder="e.g., Request for physical gold gold bar assay auditing in Kampala"
                        className="w-full bg-charcoal-950 border border-neutral-850 focus:border-gold-500 text-xs rounded p-2.5 outline-none text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Transaction Specifications or Brief Message *</label>
                      <textarea
                        rows={4} required value={contactMessage} onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Specify destination port (FOB Kampala EBB or CIF destinations), target metals purities, or licensing questions..."
                        className="w-full bg-charcoal-950 border border-neutral-850 focus:border-gold-500 text-xs rounded p-2.5 outline-none text-white leading-relaxed font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 font-bold uppercase tracking-widest text-xs rounded shadow-lg shadow-gold-500/10 flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Dispatch Request Ticket</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Global Corporate Footer element */}
      <Footer 
        currentTab={currentTab} 
        setCurrentTab={handleTabChange} 
        onRequestConsultation={() => handleInquireGeneral('Direct consultation requested from corporate Footer')} 
      />

      {/* DYNAMIC LEADS MODAL */}
      <AnimatePresence>
        {showInquiryModal && (
          <InquiryModal 
            mineral={activeInquiryMineral} 
            onClose={() => setShowInquiryModal(false)} 
            onSubmit={handleInquirySubmit} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
