import React from 'react';
import InvestorGuideComponent from '../components/InvestorGuide';
import SEO from '../components/SEO';

interface InvestorProps {
  onInquire: () => void;
}

export default function Investor({ onInquire }: InvestorProps) {
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
        title="Gold Investment & Sourcing Center | Mineral Dealers Africa"
        description="Fiduciary mineral investment advisory. Secure physical gold arbitrage, mining concessions equipment funding, and Uganda Mining Act 2022 compliant escrows."
        canonicalUrl="https://mineraldealersafrica.com/investor"
        keywords={[
          "Uganda Mining Act 2022 Compliant",
          "Licensed gold exporters Kampala",
          "Gold investment advisory Uganda",
          "Corporate assay audits Kampala desk",
          "Family office sovereign gold sourcing",
          "East African mining joint-ventures"
        ]}
        schemaJson={investorSchema}
      />

      <InvestorGuideComponent onRequestConsultation={onInquire} />
    </div>
  );
}
