import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Shield, Info, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [mineral, setMineral] = useState('Gold');
  const [qty, setQty] = useState('');
  const [msg, setMsg] = useState('');
  
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please specify complete contact fields.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName(''); setOrg(''); setPhone(''); setEmail(''); setQty(''); setMsg('');
    }, 4000);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)",
      "telephone": "+256-762-079775",
      "email": "office@mineraldealersafrica.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate, Sseguku, Off Entebbe Road",
        "addressLocality": "Kampala",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 text-left" id="contact-us-layout">
      {/* Dynamic SEO Injector for Contact */}
      <SEO
        title={t('seo.contact.title')}
        description={t('seo.contact.desc')}
        canonicalUrl="https://mineraldealersafrica.com/contact"
        keywords={t('seo.contact.keywords').split(',').map(s => s.trim())}
        schemaJson={contactSchema}
      />

      {/* Corporate Communications Header */}
      <div className="luxury-glass border border-[#D4AF37]/20 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)]">
        <div className="absolute top-[-40%] right-[-10%] w-[50%] h-[150%] rounded-full bg-[#D4AF37]/3.5 blur-[120px] pointer-events-none" />
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold font-extrabold">SECURE COMMUNICATIONS</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Lodge Your Sourcing Briefs with <span className="gold-text-gradient">Legal Security</span>
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
          We maintain structured communications with international corporate bodies, jewelry firms, and capital brokers. Submit your procurement specifications or book physical appointments inside our secure Kampala headquarters chambers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Coordinates */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-serif text-xs uppercase tracking-widest font-extrabold text-white/50 border-l-2 border-[#D4AF37] pl-2.5">
            Kampala Headquarters Desk
          </h3>

          <div className="luxury-glass border border-[#D4AF37]/10 rounded-2xl p-6 shadow-md flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-white/40 tracking-wider">Registered Address</span>
                <p className="text-xs text-white leading-relaxed font-medium mt-0.5">
                  Plot 429, Lubowa Estate, Sseguku,<br />
                  Off Entebbe Road, Kampala, Uganda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-white/40 tracking-wider">Secure Phone Corridor</span>
                <a href="tel:+256762079775" className="text-xs text-white hover:text-[#D4AF37] leading-relaxed font-semibold block mt-0.5 font-mono">
                  +256 762 079775
                </a>
                <span className="text-[10px] text-emerald-400 block mt-0.5 font-mono">Available on WhatsApp</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-white/40 tracking-wider">Exchange Contact Email</span>
                <a href="mailto:office@mineraldealersafrica.com" className="text-xs text-white hover:text-[#D4AF37] leading-relaxed font-semibold block mt-0.5 font-mono">
                  office@mineraldealersafrica.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-white/5">
              <div className="h-9 w-9 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-white/40 tracking-wider">Operational Hours</span>
                <p className="text-xs text-white leading-relaxed font-medium mt-0.5 font-mono">
                  Mon - Fri: 08:00 - 18:00 (EAT)<br />
                  Emergency bullion transit hours: 24/7/365
                </p>
              </div>
            </div>
          </div>

          {/* Vetting Warning box */}
          <div className="bg-red-950/15 p-5 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.055)] flex gap-3 text-left">
            <Shield className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-xs uppercase tracking-widest font-extrabold text-red-450 mb-1">
                KYC Regulatory Vetting
              </h4>
              <p className="text-[11px] text-white/55 leading-relaxed font-light">
                All physical site visits to smelting rooms require a verified biometric passport copy, company business registration certificates, and an active compliance permit issued in alignment with the Directorate mineral register.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiries Intake Form */}
        <div className="lg:col-span-7 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 md:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
          <h3 className="font-serif text-xs uppercase tracking-widest font-extrabold text-white mb-4">Lodge Sourcing Brief</h3>

          {success ? (
            <div className="py-12 text-center flex flex-col items-center gap-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 animate-pulse" />
              <h4 className="font-serif text-lg font-bold text-white">Sourcing Brief Lodged Securely</h4>
              <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                Thank you. Your mineral request is indexed. Our compliance desk and legal advisors will analyze your specifications and verify company credentials before establishing a phone channel.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Full Corporate Name *</label>
                  <input
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Andrew Johnston"
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Organization / Family Office</label>
                  <input
                    type="text" value={org} onChange={(e) => setOrg(e.target.value)}
                    placeholder="e.g., Johnston Commodities LLC"
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Direct Phone/WhatsApp *</label>
                  <input
                    type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., +1 (415) 555-0199"
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Business Email Address *</label>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., procurement@johnston.com"
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Primary Mineral Interest</label>
                  <select
                    value={mineral} onChange={(e) => setMineral(e.target.value)}
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all select-none"
                  >
                    <option value="Gold Refined Bullion" className="bg-charcoal-900">Gold Refined Bullion (24K)</option>
                    <option value="Gold Raw Nuggets" className="bg-charcoal-900">Gold Raw Nuggets</option>
                    <option value="Rough Diamonds Collection" className="bg-charcoal-900">Rough Diamonds Collection</option>
                    <option value="Emeralds / Sapphires" className="bg-charcoal-900">Emeralds / Sapphires</option>
                    <option value="Strategic Battery Metals" className="bg-charcoal-900">Strategic Battery Metals</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Requested Kilogram/Carat Quantity</label>
                  <input
                    type="text" value={qty} onChange={(e) => setQty(e.target.value)}
                    placeholder="e.g., 20 kg gold / 500 carats"
                    className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-white/50 uppercase font-mono tracking-wider mb-1">Sourcing Specifications & Escrow Term Preferences</label>
                <textarea
                  rows={4} value={msg} onChange={(e) => setMsg(e.target.value)}
                  placeholder="Detail your request: e.g., We require FOB export terms, neutral spectrograph assaying, or require advisory on Kimberly certificates Angolan corridors..."
                  className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none transition-all leading-relaxed font-light"
                />
              </div>

              <div className="bg-[#D4AF37]/5 p-3 rounded-lg border border-[#D4AF37]/15 text-[10px] text-white/60 leading-normal flex items-start gap-2 select-none">
                <Info className="h-4 w-4 text-[#D4AF37] shrink-0 font-bold gold-glow-icon mt-0.5" />
                <span>By lodging this procurement request, you authorize Mineral Dealers Africa Ltd to run compliance audits. We treat raw transactional records with international bank privacy standards.</span>
              </div>

              <button
                type="submit"
                className="luxury-gold-button w-full py-3 mt-2 rounded-lg font-bold uppercase tracking-widest text-xs shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 transition-transform active:scale-95 cursor-pointer"
              >
                Launch Secure Sourcing Order
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
