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
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">LOCAL MINING ALLIANCE</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Empowering African Miners to Access <span className="gold-text-gradient">Global Liquidity</span>
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          Are you an authorized artisanal mining cooperative (ASM) or licensed dealer in East Africa? We help you connect directly with international jewelry refiners, commodities funds, and secure metal brokers in absolute alignment with the <strong>Uganda Mining Act 2022</strong>.
        </p>
      </div>

      {/* Grid Explaining Onboarding Process */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Onboarding Steps */}
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
                desc: "Specify your stock category, origin country, certified purity level, and total available kilogram/carat bulk volume on our digital marketplace."
              },
              {
                step: "04",
                title: "Secure Contract Handoff",
                desc: "Upon buyer inquiries, secure escrow accounts guard transaction capitals. Transport teams escort stocks to Entebbe Airport under complete legal clearance."
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

        {/* Core Value Proposition Sidebar */}
        <div className="lg:col-span-4 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none">
          <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">COOPERATIVE VALUE PROPOSITION</span>
          <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">Alliance Privileges</h3>
          
          <ul className="space-y-4 text-xs text-white/60">
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">Global Exposure</span>
                <span className="font-light">Access verified premium jewelry brands and investment funds looking for ethical metal.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">Direct Buyer Access</span>
                <span className="font-light">Eradicates expensive broker networks, maximizing mineral profit yield direct to smallholders.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold shrink-0">✔</span>
              <div>
                <span className="text-white font-semibold block uppercase text-[10px]">Professional Legal Support</span>
                <span className="font-light">Full assistance with DGSM export permits, transport secure escorts, and assay logistics.</span>
              </div>
            </li>
          </ul>

          <button
            onClick={() => onNavigate('/marketplace')}
            className="w-full text-center py-2.5 bg-[#D4AF37] hover:bg-[#b8952d] text-black font-extrabold uppercase tracking-widest text-[10px] rounded-sm mt-6 cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.45)] transition-all"
          >
            Join Sourcing Alliance
          </button>
        </div>

      </div>
    </div>
  );
}
