import React from 'react';
import EducationCenterComponent from '../components/EducationCenter';
import SEO from '../components/SEO';

export default function Education() {
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
        title="Mineral Buyer Education Academy | Mineral Dealers Africa"
        description="Familiarize yourself with Uganda Mining Act 2022. Master gold nuggets, doré bars documentation, DGSM assay auditing, and custom clearance pathways."
        canonicalUrl="https://mineraldealersafrica.com/education"
        keywords={[
          "Ugandan gold nuggets documentation",
          "Uganda Mining Act 2022 Compliant",
          "LBMA-standard gold export Uganda",
          "Licensed gold exporters Kampala",
          "Escrow gold purchase safeties",
          "Entebbe DGSM assay guidelines"
        ]}
        schemaJson={educationSchema}
      />

      <EducationCenterComponent />
    </div>
  );
}
