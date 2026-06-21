import React from 'react';
import BlogCenterComponent from '../components/BlogCenter';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function Blog() {
  const { t } = useLanguage();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "African Mineral Trade Journal & Policy Bulletins",
    "description": "Expert insights and publications assessing mineral smuggling avoidance, Uganda Mining Act 2022 regulatory compliance, and LBMA gold smelting pathways.",
    "publisher": {
      "@type": "Organization",
      "name": "Mineral Dealers Africa (MDA)"
    }
  };

  return (
    <div className="w-full" id="blog-page-layout">
      {/* Dynamic SEO Injector for Blog */}
      <SEO
        title={t('seo.blog.title')}
        description={t('seo.blog.desc')}
        canonicalUrl="https://mineraldealersafrica.com/blog"
        keywords={t('seo.blog.keywords').split(',').map(s => s.trim())}
        schemaJson={blogSchema}
      />

      <BlogCenterComponent />
    </div>
  );
}
