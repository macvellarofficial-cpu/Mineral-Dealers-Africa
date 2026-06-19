import React from 'react';

interface CompanyLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  iconSize?: number;
}

export default function CompanyLogo({ variant = 'horizontal', className = '', iconSize = 42 }: CompanyLogoProps) {
  // SVG points forming a highly detailed geometric/faceted African gemstone shape
  // Colors mirror the iridescent violet, pink, cyan, and gold facets in the company logo image
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`} id="company-logo-identity">
      {/* Faceted Gem Africa Icon Container */}
      <div 
        className="relative flex items-center justify-center shrink-0" 
        style={{ width: iconSize, height: iconSize * 1.05 }}
        id="logo-gemstone-africa"
      >
        <svg 
          viewBox="0 0 100 110" 
          className="w-full h-full drop-shadow-[0_4px_10px_rgba(212,175,55,0.15)] filter"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* DEFINITIONS OF FAIRY Facet Gradients for iridescent 3D texture */}
          <defs>
            {/* Violet-Magenta Facets */}
            <linearGradient id="facet-magenta-violet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            
            {/* Iridescent Cyan-Blue Facets */}
            <linearGradient id="facet-cyan-blue" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            
            {/* Pure Gold Facet */}
            <linearGradient id="facet-gold" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>

            {/* Electric Royal Blue Facet */}
            <linearGradient id="facet-electric-blue" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            {/* Rich Ruby Pink Facet */}
            <linearGradient id="facet-pink-ruby" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>

            {/* Deep Amethyst Purple Facet */}
            <linearGradient id="facet-amethyst" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#701A75" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>

          {/* FACET CLUSTERS - Precise polygons mapping the outline of Africa */}
          {/* Top/Northwest Africa (Morocco/Algeria bulge) */}
          <polygon points="25,25 45,18 48,34" fill="url(#facet-magenta-violet)" />
          <polygon points="14,30 25,25 48,34" fill="url(#facet-pink-ruby)" />
          <polygon points="12,45 14,30 38,48" fill="url(#facet-amethyst)" />
          
          {/* North Coast / Tunisia & Libya */}
          <polygon points="45,18 68,19 48,34" fill="url(#facet-cyan-blue)" />
          
          {/* Northeast (Egypt / Red Sea) */}
          <polygon points="68,19 82,24 64,40" fill="url(#facet-gold)" />
          <polygon points="48,34 68,19 64,40" fill="url(#facet-electric-blue)" />
          
          {/* East Africa & Horn of Africa Star (Ethiopia/Somalia) */}
          <polygon points="82,24 92,38 72,48" fill="url(#facet-magenta-violet)" />
          <polygon points="64,40 82,24 72,48" fill="url(#facet-cyan-blue)" />
          <polygon points="72,48 92,38 80,62" fill="url(#facet-pink-ruby)" />
          
          {/* Central Africa Heart Hub */}
          <polygon points="38,48 48,34 64,40" fill="url(#facet-pink-ruby)" />
          <polygon points="38,48 64,40 60,65" fill="url(#facet-electric-blue)" />
          <polygon points="38,48 60,65 42,75" fill="url(#facet-amethyst)" />
          <polygon points="12,45 38,48 42,75" fill="url(#facet-magenta-violet)" />

          {/* West Africa Bulge Gulf (Nigeria/Ghana curve) */}
          <polygon points="12,45 42,75 32,60" fill="url(#facet-cyan-blue)" />
          
          {/* Southward Taper (Congo/Angola down to South Africa) */}
          <polygon points="42,75 60,65 65,85" fill="url(#facet-gold)" />
          <polygon points="42,75 65,85 55,104" fill="url(#facet-magenta-violet)" />
          <polygon points="65,85 75,60 60,65" fill="url(#facet-cyan-blue)" />
          
          {/* Cape Agulhas (South Africa Tip) */}
          <polygon points="65,85 78,88 55,104" fill="url(#facet-pink-ruby)" />
          <polygon points="75,60 81,72 65,85" fill="url(#facet-gold)" />
          
          {/* Madagascar Island Gemstone */}
          <polygon points="85,74 91,88 82,88" fill="url(#facet-magenta-violet)" className="animate-pulse" />
        </svg>
      </div>

      {/* Typography Column based on Variant with exact matching Slab-Serif layout */}
      {variant !== 'icon' && (
        <div className="flex flex-col select-none text-left" id="logo-branding-text">
          {variant === 'stacked' ? (
            <div className="flex flex-col leading-[1.0] font-bold uppercase select-none" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-sm md:text-base text-[#D4AF37] tracking-[0.05em]">
                Mineral
              </span>
              <span className="text-sm md:text-base text-[#D4AF37] tracking-[0.05em]">
                Dealers
              </span>
              <span className="text-sm md:text-base text-[#D4AF37] tracking-[0.05em]">
                Africa
              </span>
            </div>
          ) : (
            <div className="flex flex-col leading-[1.1] select-none">
              <span 
                className="font-bold text-base md:text-lg tracking-[0.02em] uppercase text-[#D4AF37] group-hover:text-white transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Mineral Dealers Africa
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium">
                Sourcing • Verification • Consultancy
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
