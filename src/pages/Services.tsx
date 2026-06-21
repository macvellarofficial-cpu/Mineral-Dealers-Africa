import React from 'react';
import ServicesLayout from '../components/ServicesLayout';
import SEO from '../components/SEO';

interface ServicesProps {
  onInquireService: (serviceName: string) => void;
}

export default function Services({ onInquireService }: ServicesProps) {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "LBMA-Standard Gold Export & Assaying Facilitation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gold and Precious Minerals Procurement, Clearing, Logistical & Assaying Suite",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gold Sourcing & Smelting Compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Licensed Customs & Entebbe Airport Export Clearance"
          }
        }
      ]
    }
  };

  return (
    <div className="w-full" id="services-page-layout">
      {/* Dynamic SEO Injector for Services */}
      <SEO
        title="Gold Sourcing & Assay Services Kampala | Mineral Dealers Africa"
        description="Explore 12 institutional mineral services: licensed gold export in Uganda, spectrograph assaying, secure logistics escort, and Uganda Mining Act 2022 compliant due diligence."
        canonicalUrl="https://mineraldealersafrica.com/services"
        keywords={[
          "LBMA-standard gold export Uganda",
          "Licensed gold exporters Kampala",
          "Spectrograph Assaying Entebbe",
          "Uganda Mining Act 2022 compliant",
          "Refinery coordination Kampala",
          "Gold customs clearing Entebbe airport"
        ]}
        schemaJson={servicesSchema}
      />

      <ServicesLayout onInquireService={onInquireService} />
    </div>
  );
}
