import React from 'react';
import BlogCenterComponent from '../components/BlogCenter';
import SEO from '../components/SEO';

export default function Blog() {
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
        title="Africa Mineral Sourcing Journal & News | Mineral Dealers Africa"
        description="Insights on ASM mineral compliance. Read expert reports on Uganda Mining Act 2022 compliance, state assaying, and LBMA-standard gold export laws."
        canonicalUrl="https://mineraldealersafrica.com/blog"
        keywords={[
          "Uganda Mining Act 2022 Compliant",
          "LBMA-standard gold export Uganda",
          "Licensed gold exporters Kampala",
          "African precious minerals journal",
          "Sovereign sourcing blog Kampala",
          "DGSM mineral policies news"
        ]}
        schemaJson={blogSchema}
      />

      <BlogCenterComponent />
    </div>
  );
}
