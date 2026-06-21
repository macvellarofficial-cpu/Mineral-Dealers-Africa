import React from 'react';
import { Award, ShieldCheck, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutUs() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Mineral Dealers Africa (MDA)",
      "alternateName": "Mineral Dealers Africa",
      "legalName": "Mineral Dealers Africa Ltd",
      "hasCredential": "Uganda Mining Act 2022 Compliant Class A License",
      "foundingLocation": "Kampala, Uganda",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate, Sseguku",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    }
  };

  return (
    <div className="flex flex-col gap-10" id="about-us-layout">
      {/* Dynamic SEO Injector for About Us */}
      <SEO
        title="About Us | compliant with Uganda Mining Act 2022"
        description="Learn about Mineral Dealers Africa, a licensed mineral dealer in Kampala, completely compliant with the Uganda Mining Act 2022 and LBMA export standards."
        canonicalUrl="https://mineraldealersafrica.com/about"
        keywords={[
          "About Mineral Dealers Africa",
          "Uganda Mining Act 2022 Compliant",
          "Licensed gold exporters Kampala",
          "Lubowa Estate Kampala headquarters",
          "OECD Annex II Gold Standard",
          "Entebbe DGSM Mineral Assaying"
        ]}
        schemaJson={aboutSchema}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-mono tracking-[0.15em] font-semibold self-start shadow-[0_0_15px_rgba(212,175,55,0.08)] backdrop-blur-md">
            <Award className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
            <span>Bridging Governance, Compliance & Mineral Abundance</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
            We are Africa's Trusted Gateway to <span className="gold-text-gradient">Legitimate Minerals</span> Sourcing
          </h1>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
            Founded upon the core tenets of absolute transparency, corporate compliance, on-ground diligence, and regional Mining Act alignment, <strong>Mineral Dealers Africa (MDA)</strong> helps bridge the gap between global buyers and local mineral producers.
          </p>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
            Working directly with trusted mining cooperatives (ASM) in Uganda, Tanzania, and central Africa, we replace high-risk broker corridors with structured, bank-verified pipelines. We maintain direct relations with central authorities like the Directorate of Geological Survey and Mines (DGSM) to ensure all regulatory clearances, royalty computations, and export permits are processed cleanly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/5 pt-6 mt-4">
            <div>
              <span className="font-serif text-[#D4AF37] font-bold text-sm block">Our Mission</span>
              <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">To sanitize the regional mineral trade by enforcing strict background vetting, double-blind assays, and legal export clearing, ensuring buyers receive genuine precious assets safely.</p>
            </div>
            <div>
              <span className="font-serif text-emerald-400 font-bold text-sm block">Responsible Sourcing Pipeline</span>
              <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">Enforcing OECD global standards to eradicate conflict-minerals and support certified artisanal mining collectives as an avenue for community development.</p>
            </div>
          </div>
        </div>

        {/* Corporate Credentials Profile card */}
        <div className="lg:col-span-5 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none text-left">
          <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">MEMORANDUM OF COMPLIANCE</span>
          <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">Corporate Credentials</h3>
          <ul className="space-y-4 text-xs text-white/60">
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Registered Address:</span>
              <span className="text-white text-right font-semibold font-mono text-[11px]">Plot 429, Lubowa Estate, Kampala</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Regulatory Body:</span>
              <span className="text-white text-right font-semibold text-[11.5px]">Directorate of Geological Survey & Mines</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Legal Compliance Framework:</span>
              <span className="text-[#D4AF37] text-right font-bold text-[11px]">Uganda Mining Act 2022 Compliant</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Export Port Authorized:</span>
              <span className="text-white text-right font-semibold font-mono text-[11px]">Entebbe Airport Terminal (EBB)</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Trade Sourcing Pipeline:</span>
              <span className="text-[#D4AF37] text-right font-bold text-[11px]">OECD Annex II Standard</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">Verification Facility:</span>
              <span className="text-emerald-400 text-right font-semibold">Accredited State Laboratories</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-black/40 rounded-xl border border-[#D4AF37]/10 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-[10px] text-white/50 leading-relaxed font-light">Board members hold active gold dealer consultation licenses and fully cooperate with regional enforcement entities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
