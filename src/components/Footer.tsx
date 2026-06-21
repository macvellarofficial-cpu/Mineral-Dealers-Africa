import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyLogo from './CompanyLogo';
import { useLanguage } from '../hooks/useLanguage';

interface FooterProps {
  onRequestConsultation: () => void;
}

export default function Footer({ onRequestConsultation }: FooterProps) {
  const { getLocalizedLink } = useLanguage();
  
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/10 text-white/70 pt-16 pb-8" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Editorial Brief & Ethics */}
        <div className="flex flex-col gap-4">
          <CompanyLogo variant="horizontal" iconSize={42} />
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Headquartered in Uganda, we serve as Africa's elite mineral sourcing pipeline, supplier compliance assessor, and mining consultancy bureau. We guarantee secure, vetted transactions for global institutional investors.
          </p>
          <div className="flex items-center gap-2 mt-2 p-3 bg-white/5 border border-white/10 rounded">
            <Shield className="h-5 w-5 text-[#D4AF37] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-white block">ISO Compliance Audited</span>
              <span className="text-white/40">OECD Sourcing Chain Standard</span>
            </div>
          </div>
        </div>

        {/* Column 2: Specific Hot-Link Navigation */}
        <div>
          <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs mb-6 border-l-2 border-[#D4AF37] pl-3">
            Navigation Hub
          </h3>
          <ul className="space-y-3.5 text-sm font-light">
            {[
              { path: '/about', label: 'Who We Are' },
              { path: '/services', label: 'Consultancy Services' },
              { path: '/marketplace', label: 'Amazon Mineral Portal' },
              { path: '/miners', label: 'African Miner Hub' },
              { path: '/education', label: 'Buyer Legal Guides' },
              { path: '/investor', label: 'Investor Briefs' },
              { path: '/blog', label: 'SEO Market Journal' },
              { path: '/contact', label: 'Contact Us' }
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={getLocalizedLink(link.path)}
                  onClick={handleNavClick}
                  className="hover:text-[#D4AF37] text-white/60 hover:translate-x-1.5 transition-all text-left flex items-center gap-1.5 cursor-pointer block"
                >
                  <span className="text-[#D4AF37] font-mono text-[10px]">›</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Headquarters Office details */}
        <div>
          <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs mb-6 border-l-2 border-[#D4AF37] pl-3">
            Contact Office
          </h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Plot 429, Lubowa Estate,<br />
                Sseguku, Off Entebbe Road,<br />
                Wakiso District, Uganda
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#D4AF37] shrink-0" />
              <a href="https://wa.me/256762079775" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">
                +256 762 079775 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#D4AF37] shrink-0" />
              <a href="mailto:info@mineraldealersafrica.com" className="hover:text-[#D4AF37] transition-colors">
                info@mineraldealersafrica.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours & Verified Badges */}
        <div>
          <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs mb-6 border-l-2 border-[#D4AF37] pl-3">
            Verified Business Hours
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex gap-2 items-center">
              <Clock className="h-4 w-4 text-[#D4AF37]" />
              <span>Mon - Fri: 08:30 AM - 05:30 PM (EAT)</span>
            </li>
            <li className="flex gap-2 items-center text-white/30">
              <Clock className="h-4 w-4 text-white/20" />
              <span>Saturdays: 09:00 AM - 02:30 PM (EAT)</span>
            </li>
            <li className="flex gap-2 items-center text-red-500">
              <Clock className="h-4 w-4 text-red-900/30" />
              <span>Sundays & Public Holidays: Closed</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <span className="block text-xs uppercase tracking-widest text-white/40 mb-3">Follow Verification</span>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/MineralDealersAfrica" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
                title="Follow on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/mineraldealersafrica" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
                title="Follow on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://tiktok.com/@mineraldealersafrica" 
                target="_blank" 
                rel="noreferrer" 
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#D4AF37] hover:text-[#111111] transition-all font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                title="Follow on TikTok"
              >
                <span className="font-mono text-xs">TikTok</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Trust Insignia Seals Cluster */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-xs text-white/40">
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#006B3C]" />
            <span>DGSM Licensed Gateway</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <span>Certified Kimberly Diamond Shippers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span>Anti-Money Laundering (AML) Compliant</span>
          </div>
        </div>
        
        <p className="text-white/30">
          Regulatory Registration Ref: <span className="font-mono text-[10px] text-white/50">DGSM/UGA/2026/MD429</span>
        </p>
      </div>

      {/* Secondary compliance copyright band */}
      <div className="max-w-7xl mx-auto px-4 pt-4 border-t border-white/5 text-center text-xs text-white/30">
        <p>© {new Date().getFullYear()} Mineral Dealers Africa Ltd. Registered Plot 429, Lubowa Estate, Wakiso District. All Rights Reserved. Sourcing verified and regulated precious assets domestically and internationally.</p>
        <p className="mt-1 text-[10px] text-white/20 leading-normal">Information provided on this portal is educational and does not constitute a direct securities advisory solicitation. All physical gold transactions require full regulatory assent from Entebbe authorities.</p>
      </div>
    </footer>
  );
}
