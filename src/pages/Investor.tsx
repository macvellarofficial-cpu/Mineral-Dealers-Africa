import React from 'react';
import InvestorGuideComponent from '../components/InvestorGuide';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

interface InvestorProps {
  onInquire: () => void;
}

export default function Investor({ onInquire }: InvestorProps) {
  const { t } = useLanguage();
  const investorSchema = {
    "@context": "https://schema.org",
    "@type": "InvestmentOrDepositScheme",
    "name": "Uganda Sovereign Precious Metals Procurement & Smelting Advisory",
    "description": "Risk management advisory guides, on-site fire assaying vetting, and secure logistics pipeline frameworks for family offices, jewelry firms, and commodity traders.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    }
  };

  return (
    <div className="w-full" id="investor-page-layout">
      {/* Dynamic SEO Injector for Investor */}
      <SEO
        title={t('seo.investor.title')}
        description={t('seo.investor.desc')}
        canonicalUrl="https://mineraldealersafrica.com/investor"
        keywords={t('seo.investor.keywords').split(',').map(s => s.trim())}
        schemaJson={investorSchema}
      />

      <InvestorGuideComponent onRequestConsultation={onInquire} />
    </div>
  );
}
