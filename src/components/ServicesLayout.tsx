import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Gem, ShieldCheck, FileSearch, PlaneTakeoff, Briefcase, Landmark, FileSpreadsheet, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/mineralData';

interface ServicesLayoutProps {
  onInquireService: (serviceName: string) => void;
}

export default function ServicesLayout({ onInquireService }: ServicesLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'procure' | 'compliance' | 'operational'>('all');

  // Extended service catalogs mapping the full 12 services requested by the user:
  const fullTwelveServices = [
    {
      id: 'srv-gold-sourcing',
      title: 'Gold Sourcing & Procurement',
      category: 'procure',
      icon: Hammer,
      short: 'Vetted physical gold dust, nuggets, and LBMA standard gold bars.',
      detail: 'Directly sourcing gold through certified smallholder mines and cooperatives across Uganda, Tanzania, and DR Congo. We manage complete chain-of-custodies, verify mineral tax stamps, and consolidate lots for secure transfer.',
      keyBenefit: 'Guaranteed provenance tracking and zero-middlemen trading margins.'
    },
    {
      id: 'srv-gem-sourcing',
      title: 'Precious Stone Sourcing',
      category: 'procure',
      icon: Gem,
      short: 'Sourcing premium rough diamonds, tanzanite, emeralds, and sapphires.',
      detail: 'Connecting collectors and jewelry refiners directly to primary mining fields (e.g. Lufwanyama emerald lots, Mirerani Block D Tanzanite collections, Lunda Sul diamonds). All diamonds carry authentic Kimberley certificates.',
      keyBenefit: 'Conflict-free certification and certified geological transparency.'
    },
    {
      id: 'srv-supplier-vetting',
      title: 'Supplier Verification & Vetting',
      category: 'compliance',
      icon: ShieldCheck,
      short: 'Background licensing checks and physical concession inspections.',
      detail: 'Protecting your capital by deploying on-ground inspectors to verify if a local supplier possesses legal mining leases, active municipal licenses, and holds legitimate stocks as presented.',
      keyBenefit: 'Bypasses shell broker networks and fraudulent online intermediaries.'
    },
    {
      id: 'srv-brokerage',
      title: 'Secured Mineral Brokerage',
      category: 'procure',
      icon: TrendingUp,
      short: 'Facilitating secure buyer-seller trade frameworks.',
      detail: 'Drafting international standard contracts (FOB & CIF terms) tailored to regional mining laws, establishing escrow trusts, and securing clearing coordinates to coordinate legitimate transaction pathways.',
      keyBenefit: 'Reduces capital exposure using secure international vault channels.'
    },
    {
      id: 'srv-due-diligence',
      title: 'Due Diligence & Compliance Reports',
      category: 'compliance',
      icon: FileSearch,
      short: 'OECD Annex II and regional Uganda Mining Act compliance reporting.',
      detail: 'Conducting audit-ready operational research to satisfy institutional KYC standards. Reports include background sanctions matching, geological provenance records, and environmental code compliance checking.',
      keyBenefit: 'Ensures absolute safety and legal eligibility for western importers.'
    },
    {
      id: 'srv-export-clearance',
      title: 'Export & Customs Facilitation',
      category: 'operational',
      icon: PlaneTakeoff,
      short: 'Domestic royal tax clearing, customs stamp management.',
      detail: 'Managing all administrative clearances at Entebbe Airport (EBB). We process export permits with the DGSM, resolve provincial taxes and royalties, and issue authentic certificates of origin for flawless clearing.',
      keyBenefit: 'Fast-tracks customs clearing with complete regulatory transparency.'
    },
    {
      id: 'srv-mining-consultancy',
      title: 'Mining Consultancy & Concessions',
      category: 'operational',
      icon: Briefcase,
      short: 'Advisory on mining lease applications and machinery setup.',
      detail: 'Assisting international joint-ventures on licensing routes. We consult on environmental impact assessment mandates, concession mapping, tax structures, and importing heavy mechanical mining machinery.',
      keyBenefit: 'Aligns concessions with Uganda’s latest Mining Act of 2022.'
    },
    {
      id: 'srv-invest-advisory',
      title: 'Strategic Investment Advisory',
      category: 'compliance',
      icon: Landmark,
      short: 'Risk management models for family offices & sovereign funds.',
      detail: 'Fostering long-term market positions. We provide intelligence reports on localized mining codes, financial hedges, and capital-placement schemes for precious metals operations in Africa.',
      keyBenefit: 'Protects foreign capital against political and administrative hurdles.'
    },
    {
      id: 'srv-refinery-coordination',
      title: 'Refinery Coordination Solutions',
      category: 'operational',
      icon: Landmark,
      short: 'Upgrading metal purity inside verified regional facilities.',
      detail: 'Managing raw metal transformation to high-investment grade gold bars (99.5%+). We supervise deliveries to government-certified local smelting refineries, witness smelting processes, and retrieve certified bar assays.',
      keyBenefit: 'Ensures you only export standard bullion certified by registered refiners.'
    },
    {
      id: 'srv-assay-purity',
      title: 'Assaying & Purity Verification',
      category: 'compliance',
      icon: FileSpreadsheet,
      short: 'Entebbe DGSM Geological spectrograph and laboratory assays.',
      detail: 'Ensuring absolute karat verification. We witness mineral lot extraction and handle independent chemical assaying inside the Directorate of Geological Survey and Mines laboratories.',
      keyBenefit: 'Eliminates chemical fraud, ensuring you pay strictly for audited precious elements.'
    },
    {
      id: 'srv-logistics-freight',
      title: 'Logistics, Shipping & Vault custody',
      category: 'operational',
      icon: TrendingUp,
      short: 'Brinks / G4S transit and high-security air transport.',
      detail: 'Coordinating high-security physical transfers. Mineral parcels are escorted from the mine vault to domestic storage hubs, and cleared on international secure logistics airlines for final destination delivery.',
      keyBenefit: 'Ensures double-custody secure handoffs under continuous bank coverage.'
    },
    {
      id: 'srv-market-intelligence',
      title: 'Market Intelligence & Forecasting',
      category: 'compliance',
      icon: Briefcase,
      short: 'Dynamic regional mineral pricing surveys and policy shifts.',
      detail: 'Delivering comprehensive research. Studies explore policy trends, local royalty adjustments, and pricing variations inside community trading centers across East and Central Africa.',
      keyBenefit: 'Maintains your competitive edge using reliable regional insights.'
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? fullTwelveServices
    : fullTwelveServices.filter(s => s.category === selectedCategory);

  return (
    <div className="w-full flex flex-col gap-8 text-white relative" id="services-hub">
      {/* Background ambient lighting glow */}
      <div className="absolute top-[30%] left-[20%] w-[30%] h-[50%] rounded-full bg-[#D4AF37]/2.5 blur-[120px] pointer-events-none" />

      {/* Title Header Card */}
      <div className="luxury-glass border border-[#D4AF37]/18 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] pointer-events-none"></div>
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">COMPREHENSIVE SOLVING DESK</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Sourcing, Compliance & <span className="gold-text-gradient">Advisory Services</span>
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          Mineral Dealers Africa provides a robust collection of professional services under one roof. We act as your on-ground eyes, ears, and compliance officers, verifying every ounce of gold, gemstone, and documentation to protect your transactions.
        </p>
      </div>

      {/* Mini Segment selector */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start border-b border-white/5 pb-4 z-10 relative">
        {[
          { id: 'all', label: 'All Services (12)' },
          { id: 'procure', label: 'Procurement & Broking' },
          { id: 'compliance', label: 'Audit, Assaying & Compliance' },
          { id: 'operational', label: 'Logistics, Refineries & Customs' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as any)}
            className={`px-4 py-2 rounded-sm text-xs uppercase font-extrabold tracking-widest transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-[#D4AF37] text-black font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'bg-black/40 text-white/50 border border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/35'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid mapping out the Selected Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative" id="services-list-grid">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="luxury-glass border border-[#D4AF37]/12 rounded-2xl p-5 flex flex-col justify-between luxury-glass-hover hover:-translate-y-2 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.18)] group"
                id={`service-${service.id}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/25 group-hover:border-[#D4AF37]/45 rounded text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                      <Icon className="h-5 w-5 gold-glow-icon" />
                    </div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-white/40 bg-black/40 border border-white/5 px-2 py-1 rounded-sm">
                      {service.category === 'procure' ? 'PROCUREMENT' : service.category === 'compliance' ? 'COMPLIANCE' : 'LOGISTICS & OPS'}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-white mt-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-[#D4AF37] font-mono mt-1 mb-3">
                    {service.short}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed font-light mb-4">
                    {service.detail}
                  </p>
                </div>

                {/* Foot indicators and CTA */}
                <div className="pt-4 border-t border-[#D4AF37]/10 flex flex-col gap-3">
                  <div className="text-[10px] text-white/50 leading-snug">
                    <span className="font-bold uppercase tracking-widest text-[#D4AF37] block text-[9px] mb-0.5">CORE ADVANTAGE</span>
                    <span>{service.keyBenefit}</span>
                  </div>

                  <button
                    onClick={() => onInquireService(service.title)}
                    className="w-full text-center py-2.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/25 hover:border-transparent text-[#D4AF37] hover:text-black rounded-sm text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Service Brief</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}
