import React from 'react';
import { Award, ShieldAlert, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

interface ForMinersProps {
  onNavigate: (path: string) => void;
}

export default function ForMiners({ onNavigate }: ForMinersProps) {
  const { t } = useLanguage();
  const minersSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "serviceOperator": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    },
    "name": "Cooperative Onboarding and Regulatory Vetting Portal",
    "description": "Onboarding programs for ASM (Artisanal & Small-Scale Mining) cooperatives in Uganda aligning with the regulatory controls of the Uganda Mining Act 2022."
  };

  return (
    <div className="flex flex-col gap-10" id="for-miners-layout">
      {/* Dynamic SEO Injector for For Miners */}
      <SEO
        title={t('seo.miners.title')}
        description={t('seo.miners.desc')}
        canonicalUrl="https://mineraldealersafrica.com/miners"
        keywords={t('seo.miners.keywords').split(',').map(s => s.trim())}
        schemaJson={minersSchema}
      />

      {/* Hero Header Card */}
      <div className="luxury-glass border border-[#D4AF37]/20 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.04)] text-left">
        <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[150%] rounded-full bg-[#D4AF37]/3.5 blur-[120px] pointer-events-none" />
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">{t('miners.tag')}</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          {t('miners.title')}
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          {t('miners.desc')}
        </p>
      </div>

      {/* Grid Explaining Onboarding Process */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Onboarding Steps */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="font-serif text-sm uppercase tracking-widest font-extrabold text-white border-l-2 border-[#D4AF37] pl-3 mb-4">
            {t('miners.onboard')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                sub: t('miners.step1.sub'),
                title: t('miners.step1.title'),
                desc: t('miners.step1.desc')
              },
              {
                sub: t('miners.step2.sub'),
                title: t('miners.step2.title'),
                desc: t('miners.step2.desc')
              },
              {
                sub: t('miners.step3.sub'),
                title: t('miners.step3.title'),
                desc: t('miners.step3.desc')
              },
              {
                sub: t('miners.step4.sub'),
                title: t('miners.step4.title'),
                desc: t('miners.step4.desc')
              }
            ].map((item, idx) => (
              <div key={idx} className="luxury-glass border border-[#D4AF37]/10 p-5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] luxury-glass-hover hover:-translate-y-1.5 transition-all duration-300">
                <span className="font-mono text-xs text-[#D4AF37] font-extrabold block mb-1">{item.sub}</span>
                <h4 className="font-serif text-sm font-bold text-white mt-0.5 mb-2">{item.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Value Proposition Sidebar */}
        <div className="lg:col-span-4 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none">
          <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">{t('miners.sidebar.tag')}</span>
          <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">{t('miners.sidebar.title')}</h3>
          
          <ul className="space-y-4 text-xs text-white/60">
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">{t('miners.privilege1.title')}</span>
                <span className="font-light">{t('miners.privilege1.desc')}</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">{t('miners.privilege2.title')}</span>
                <span className="font-light">{t('miners.privilege2.desc')}</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">{t('miners.privilege3.title')}</span>
                <span className="font-light">{t('miners.privilege3.desc')}</span>
              </div>
            </li>
          </ul>

          <button
            onClick={() => onNavigate('/marketplace')}
            className="w-full text-center py-2.5 bg-[#D4AF37] hover:bg-[#b8952d] text-black font-extrabold uppercase tracking-widest text-[10px] rounded-sm mt-6 cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.45)] transition-all"
          >
            {t('miners.cta')}
          </button>
        </div>

      </div>
    </div>
  );
}
