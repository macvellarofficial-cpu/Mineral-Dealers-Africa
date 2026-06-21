import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Gem, ShieldCheck, FileSearch, PlaneTakeoff, Briefcase, Landmark, FileSpreadsheet, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ServicesLayoutProps {
  onInquireService: (serviceName: string) => void;
}

export default function ServicesLayout({ onInquireService }: ServicesLayoutProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'procure' | 'compliance' | 'operational'>('all');

  // Extended service catalogs mapping the full 12 services requested by the user:
  const fullTwelveServices = [
    {
      id: 'srv-gold-sourcing',
      title: t('services.gold.title'),
      category: 'procure',
      icon: Hammer,
      short: t('services.gold.short'),
      detail: t('services.gold.detail'),
      keyBenefit: t('services.gold.benefit')
    },
    {
      id: 'srv-gem-sourcing',
      title: t('services.gem.title'),
      category: 'procure',
      icon: Gem,
      short: t('services.gem.short'),
      detail: t('services.gem.detail'),
      keyBenefit: t('services.gem.benefit')
    },
    {
      id: 'srv-supplier-vetting',
      title: t('services.vet.title'),
      category: 'compliance',
      icon: ShieldCheck,
      short: t('services.vet.short'),
      detail: t('services.vet.detail'),
      keyBenefit: t('services.vet.benefit')
    },
    {
      id: 'srv-brokerage',
      title: t('services.broker.title'),
      category: 'procure',
      icon: TrendingUp,
      short: t('services.broker.short'),
      detail: t('services.broker.detail'),
      keyBenefit: t('services.broker.benefit')
    },
    {
      id: 'srv-due-diligence',
      title: t('services.due.title'),
      category: 'compliance',
      icon: FileSearch,
      short: t('services.due.short'),
      detail: t('services.due.detail'),
      keyBenefit: t('services.due.benefit')
    },
    {
      id: 'srv-export-clearance',
      title: t('services.export.title'),
      category: 'operational',
      icon: PlaneTakeoff,
      short: t('services.export.short'),
      detail: t('services.export.detail'),
      keyBenefit: t('services.export.benefit')
    },
    {
      id: 'srv-mining-consultancy',
      title: t('services.consult.title'),
      category: 'operational',
      icon: Briefcase,
      short: t('services.consult.short'),
      detail: t('services.consult.detail'),
      keyBenefit: t('services.consult.benefit')
    },
    {
      id: 'srv-invest-advisory',
      title: t('services.advis.title'),
      category: 'compliance',
      icon: Landmark,
      short: t('services.advis.short'),
      detail: t('services.advis.detail'),
      keyBenefit: t('services.advis.benefit')
    },
    {
      id: 'srv-refinery-coordination',
      title: t('services.refine.title'),
      category: 'operational',
      icon: Landmark,
      short: t('services.refine.short'),
      detail: t('services.refine.detail'),
      keyBenefit: t('services.refine.benefit')
    },
    {
      id: 'srv-assay-purity',
      title: t('services.assay.title'),
      category: 'compliance',
      icon: FileSpreadsheet,
      short: t('services.assay.short'),
      detail: t('services.assay.detail'),
      keyBenefit: t('services.assay.benefit')
    },
    {
      id: 'srv-logistics-freight',
      title: t('services.logis.title'),
      category: 'operational',
      icon: TrendingUp,
      short: t('services.logis.short'),
      detail: t('services.logis.detail'),
      keyBenefit: t('services.logis.benefit')
    },
    {
      id: 'srv-market-intelligence',
      title: t('services.intel.title'),
      category: 'compliance',
      icon: Briefcase,
      short: t('services.intel.short'),
      detail: t('services.intel.detail'),
      keyBenefit: t('services.intel.benefit')
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
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">{t('services.tag')}</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          {t('services.title')}
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          {t('services.desc')}
        </p>
      </div>

      {/* Mini Segment selector */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start border-b border-white/5 pb-4 z-10 relative">
        {[
          { id: 'all', label: t('services.tab.all') },
          { id: 'procure', label: t('services.tab.procure') },
          { id: 'compliance', label: t('services.tab.compliance') },
          { id: 'operational', label: t('services.tab.operational') }
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
                    <span>{t('services.contact')}</span>
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
