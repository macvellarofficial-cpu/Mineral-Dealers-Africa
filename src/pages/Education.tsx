import React from 'react';
import EducationCenterComponent from '../components/EducationCenter';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function Education() {
  const { t } = useLanguage();
  const educationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Uganda Gold Sourcing & Regulatory Guide Compliance Program",
    "description": "Definitive educational guides on physical gold purchasing, assay verification, and export clearances under the Uganda Mining Act 2022.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)"
    },
    "location": {
      "@type": "VirtualLocation",
      "url": "https://mineraldealersafrica.com/education"
    }
  };

  return (
    <div className="w-full" id="education-page-layout">
      {/* Dynamic SEO Injector for Education */}
      <SEO
        title={t('seo.education.title')}
        description={t('seo.education.desc')}
        canonicalUrl="https://mineraldealersafrica.com/education"
        keywords={t('seo.education.keywords').split(',').map(s => s.trim())}
        schemaJson={educationSchema}
      />

      <EducationCenterComponent />
    </div>
  );
}
