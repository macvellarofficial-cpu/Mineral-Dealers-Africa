import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ShieldAlert, AlertTriangle, Scale, CheckCircle2, ChevronRight, Search, FileText, Landmark } from 'lucide-react';
import { EDUCATION_GUIDES } from '../data/mineralData';

export default function EducationCenter() {
  const [selectedGuideId, setSelectedGuideId] = useState(EDUCATION_GUIDES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Find active guide
  const activeGuide = EDUCATION_GUIDES.find(g => g.id === selectedGuideId) || EDUCATION_GUIDES[0];

  // Specific additional short FAQ/bullet structures demanded by the user
  const additionalEducationSections = [
    {
      title: "Gold Export Regulations & Royalties",
      content: "Under Ugandan DGSM policies re-instituted in the Mining Act of 2022, unprocessed gold exports are highly protected to promote regional refining. For refined gold (99.5%+), exporters must clear a 5% royal tax on bullion, obtain custom state export permits, and carry certified assay reports.",
      icon: Landmark
    },
    {
      title: "Understanding Gold Purity & Karat Weight",
      content: "Physical gold in East Africa is mostly alluvial. Raw gold dust and nuggets generally test between 21K to 23K (87% to 96% pure gold). Pure investment bullion requires custom smelting and refining up to 24K (99.99% pure), performed inside verified local facilities.",
      icon: Scale
    },
    {
      title: "Export Documentation Checklist",
      content: "A legal shipping container requires: 1) Valid Mineral Dealer License, 2) Official DGSM Export Permit, 3) Customs Bill of Lading, 4) Certificate of Origin from the Ministry of Energy and Mineral Development, 5) Authorized Independent Assaying Certificate.",
      icon: FileText
    }
  ];

  return (
    <div className="w-full flex flex-col gap-8 relative" id="education-hub">
      {/* Editorial Title Banner */}
      <div className="luxury-glass border border-[#D4AF37]/18 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/3 blur-[100px] pointer-events-none"></div>
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">REGULATORY COMPLIANCE ACADEMY</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          International Buyer <span className="gold-text-gradient">Education Center</span>
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          Knowledge is the supreme defender of investor capital in African mineral trade. We publish definitive legal overviews, export templates, guidelines, and risk maps to shield global investors from compliance failures and fraudulent entities.
        </p>
      </div>

      {/* Main 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Side: Navigation & Educational Checklist */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xs uppercase tracking-widest font-extrabold text-white/50 border-l-2 border-[#D4AF37] pl-2.5">
              Select Legal Briefing
            </h3>
            <div className="flex flex-col gap-2">
              {EDUCATION_GUIDES.map((guide) => {
                const isSelected = guide.id === selectedGuideId;
                return (
                  <button
                    key={guide.id}
                    onClick={() => setSelectedGuideId(guide.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer ${
                      isSelected 
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37]/35 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.08)]' 
                        : 'luxury-glass border-[#D4AF37]/10 hover:border-[#D4AF37]/25 text-white/75'
                    }`}
                  >
                    <BookOpen className={`h-5 w-5 shrink-0 mt-0.5 ${isSelected ? 'text-[#D4AF37] gold-glow-icon' : 'text-white/35'}`} />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider">{guide.title}</span>
                      <span className="block text-[11px] text-white/45 mt-1 line-clamp-2 leading-relaxed font-light">{guide.shortSummary}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sourcing Safety Protocols Display */}
          <div className="bg-red-950/15 p-5 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)] backdrop-blur-md flex flex-col gap-3">
            <div className="flex items-center gap-2 text-red-400">
              <ShieldAlert className="h-5 w-5" />
              <h4 className="font-serif text-xs uppercase tracking-widest font-bold">Scam Alert Notice</h4>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed font-light">
              If an unknown online supplier pitches you raw gold bullion with deep discounts exceeding 10% off the standard spot, demand physical on-ground verification. Mineral Dealers Africa provides prompt, independent audits.
            </p>
          </div>
        </div>

        {/* Right Side: Active Educational Briefing Content */}
        <div className="lg:col-span-8 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGuide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              id="education-content"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#D4AF37]/15">
                <BookOpen className="h-6 w-6 text-[#D4AF37] gold-glow-icon" />
                <h3 className="font-serif text-xl font-bold text-white">{activeGuide.title}</h3>
              </div>

              <div className="space-y-6">
                {activeGuide.sections.map((sect, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h4 className="font-serif text-sm font-semibold text-[#D4AF37] flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#D4AF37] shrink-0" />
                      <span>{sect.heading}</span>
                    </h4>
                    
                    <div className="space-y-3 pl-6">
                      {sect.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-xs text-white/70 leading-relaxed font-light">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono">
            <span>Authoritative Compliance Sourcing Desk</span>
            <span className="font-semibold text-[#D4AF37]">Mineral Dealers Africa Ltd</span>
          </div>
        </div>
      </div>

      {/* Grid: Additional Crucial Mini-topics requested */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 relative z-10">
        {additionalEducationSections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="luxury-glass border border-[#D4AF37]/10 p-5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(212,175,55,0.05)] hover:-translate-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded text-[#D4AF37]">
                  <Icon className="h-4 w-4 gold-glow-icon" />
                </div>
                <h4 className="font-serif text-xs uppercase tracking-widest font-bold text-white">
                  {section.title}
                </h4>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed mt-2 font-light">
                {section.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
