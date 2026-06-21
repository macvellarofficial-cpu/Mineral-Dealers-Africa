import React from 'react';
import MarketplaceComponent from '../components/Marketplace';
import SEO from '../components/SEO';
import { MineralListing } from '../types';

interface MarketplacePageProps {
  onInquire: (mineral: MineralListing) => void;
}

export default function MarketplacePage({ onInquire }: MarketplacePageProps) {
  const marketplaceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "African Precious Minerals Marketplace Portfolio",
      "description": "Vetted gold bars, nuggets, doré, diamonds, and gemstones available for international institutional export from Kampala.",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "LBMA Gold Bars (99.99%)",
          "description": "Assayed bullion gold blocks of 1kg blocks. Purity 99.99%. Smelted inside government approved Kampala refinery facilities.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "eligibleRegion": "Global"
          }
        },
        {
          "@type": "Product",
          "name": "Raw Alluvial Gold Nuggets",
          "description": "Direct non-refined high-grade gold nuggets sourced from mineral concessions in Uganda, Tanzania, and central Africa.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "eligibleRegion": "Global"
          }
        }
      ]
    }
  };

  return (
    <div className="w-full" id="marketplace-page-layout">
      {/* Dynamic SEO Injector for Marketplace */}
      <SEO
        title="Verified Gold & Mineral Marketplace | Mineral Dealers Africa"
        description="Licensed gold exporters in Kampala. Browse 99.99% LBMA standard gold bars, gold nuggets, doré, and conflict-free diamonds with verified documentation."
        canonicalUrl="https://mineraldealersafrica.com/marketplace"
        keywords={[
          "Licensed gold exporters Kampala",
          "Ugandan gold nuggets documentation",
          "LBMA-standard gold export Uganda",
          "African sovereign sourcing pipeline",
          "Verified mineral marketplace Kampala",
          "Buy gold bars Kampala Uganda"
        ]}
        schemaJson={marketplaceSchema}
      />

      <MarketplaceComponent onInquire={onInquire} />
    </div>
  );
}
