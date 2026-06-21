import React from 'react';
import { Award, ShieldCheck, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function AboutUs() {
  const { t } = useLanguage();
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
        title={t('seo.about.title')}
        description={t('seo.about.desc')}
        canonicalUrl="https://mineraldealersafrica.com/about"
        keywords={t('seo.about.keywords').split(',').map(s => s.trim())}
        schemaJson={aboutSchema}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-mono tracking-[0.15em] font-semibold self-start shadow-[0_0_15px_rgba(212,175,55,0.08)] backdrop-blur-md">
            <Award className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
            <span>{t('about.badge')}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {t('about.title')}
          </h1>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
            {t('about.narrative1')}
          </p>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
            {t('about.narrative2')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-white/5 pt-6 mt-4">
            <div>
              <span className="font-serif text-[#D4AF37] font-bold text-sm block">{t('about.mission.title')}</span>
              <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">{t('about.mission.desc')}</p>
            </div>
            <div>
              <span className="font-serif text-emerald-400 font-bold text-sm block">{t('about.pipeline.title')}</span>
              <p className="text-xs text-white/50 mt-1.5 leading-relaxed font-light">{t('about.pipeline.desc')}</p>
            </div>
          </div>
        </div>

        {/* Corporate Credentials Profile card */}
        <div className="lg:col-span-5 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 select-none text-left">
          <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] block mb-1 font-bold">{t('about.credentials.tag')}</span>
          <h3 className="font-serif text-lg font-bold text-white border-b border-white/5 pb-3 mb-4">{t('about.credentials.title')}</h3>
          <ul className="space-y-4 text-xs text-white/60">
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.address')}:</span>
              <span className="text-white text-right font-semibold font-mono text-[11px]">{t('about.credentials.addressVal')}</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.regulatory')}:</span>
              <span className="text-white text-right font-semibold text-[11.5px]">{t('about.credentials.regulatoryVal')}</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.framework')}:</span>
              <span className="text-[#D4AF37] text-right font-bold text-[11px]">{t('about.credentials.frameworkVal')}</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.port')}:</span>
              <span className="text-white text-right font-semibold font-mono text-[11px]">{t('about.credentials.portVal')}</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.pipeline')}:</span>
              <span className="text-[#D4AF37] text-right font-bold text-[11px]">{t('about.credentials.pipelineVal')}</span>
            </li>
            <li className="flex justify-between py-1 border-b border-white/5">
              <span className="font-light">{t('about.credentials.facility')}:</span>
              <span className="text-emerald-400 text-right font-semibold">{t('about.credentials.facilityVal')}</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-black/40 rounded-xl border border-[#D4AF37]/10 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-[10px] text-white/50 leading-relaxed font-light">{t('about.credentials.footer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
