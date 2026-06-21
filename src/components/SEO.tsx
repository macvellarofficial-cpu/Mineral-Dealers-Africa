import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'company';
  keywords?: string[];
  schemaJson?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  keywords = [],
  schemaJson
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to find or create meta tag
    const updateOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Helper to find or create link tag
    const updateOrCreateLink = (relVal: string, hrefVal: string) => {
      let element = document.querySelector(`link[rel="${relVal}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', relVal);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefVal);
    };

    // 2. Base meta tags
    updateOrCreateMeta('name', 'description', description);
    if (keywords.length > 0) {
      updateOrCreateMeta('name', 'keywords', keywords.join(', '));
    }

    // 3. Open Graph (OG) social sharing optimization
    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:site_name', 'Mineral Dealers Africa');
    updateOrCreateMeta('property', 'og:image', 'https://mineraldealersafrica.com/assets/og-image-luxury-gold.jpg');

    // 4. Twitter Cards
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', 'https://mineraldealersafrica.com/assets/og-image-luxury-gold.jpg');

    // 5. Canonical Link
    updateOrCreateLink('canonical', canonicalUrl);

    // 6. Structured Schema JSON-LD Injection
    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaJson) {
      const script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup structured data script on unmount
      const script = document.getElementById('seo-structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, keywords, schemaJson]);

  return null; // Side-effect only component
}
