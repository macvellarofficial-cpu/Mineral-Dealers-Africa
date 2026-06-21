import React from 'react';
import ServicesLayout from '../components/ServicesLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

interface ServicesProps {
  onInquireService: (serviceName: string) => void;
}

export default function Services({ onInquireService }: ServicesProps) {
  const { t } = useLanguage();
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
        title={t('seo.services.title')}
        description={t('seo.services.desc')}
        canonicalUrl="https://mineraldealersafrica.com/services"
        keywords={t('seo.services.keywords').split(',').map(s => s.trim())}
        schemaJson={servicesSchema}
      />

      <ServicesLayout onInquireService={onInquireService} />
    </div>
  );
}
