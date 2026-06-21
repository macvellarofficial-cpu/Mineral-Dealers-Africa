import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Star, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
// @ts-ignore
import goldBarsImg from '../assets/images/gold_bars_uganda_1781900099865.jpg';
// @ts-ignore
import rawGoldBowlsImg from '../assets/images/raw_gold_bowls_1781900113727.jpg';

interface HomeProps {
  onInquireGeneral: (contextText: string) => void;
  onNavigate: (path: string) => void;
}

export default function Home({ onInquireGeneral, onNavigate }: HomeProps) {
  // SEO structured schema for local mineral export corporate organization
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentPermit",
    "name": "Licensed Gold Exporters Kampala - Mineral Dealers Africa",
    "description": "Licensed gold exporters Kampala compliant with the Uganda Mining Act 2022. Operating gold export and smelting clearance desks at Entebbe airport.",
    "issuedBy": {
      "@type": "GovernmentOrganization",
      "name": "Directorate of Geological Survey and Mines (DGSM) Uganda"
    },
    "permitType": "Class A Mineral Dealer & Refined Gold Export License",
    "validIn": {
      "@type": "AdministrativeArea",
      "name": "Uganda"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mineral Dealers Africa (MDA)",
      "image": "https://mineraldealersafrica.com/assets/og-image-luxury-gold.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 429, Lubowa Estate, Sseguku, Off Entebbe Road",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      },
      "telephone": "+256-762-079775"
    }
  };

  return (
    <div className="flex flex-col gap-16" id="home-page-layout">
      {/* Dynamic SEO Injector for Home */}
      <SEO
        title="Licensed Gold Exporters Kampala | Mineral Dealers Africa"
        description="Africa's Verified Sovereign Sourcing Pipeline. Uganda Mining Act 2022 Compliant. Secure on-site Kampala Headquarters Refining, Clearing Desk, and EBB export."
        canonicalUrl="https://mineraldealersafrica.com/"
        keywords={[
          "Licensed gold exporters Kampala",
          "Uganda Mining Act 2022 Compliant",
          "Kampala Headquarters Refining",
          "LBMA-standard gold export Uganda",
          "Sovereign Sourcing Pipeline Africa",
          "Ugandan gold nuggets documentation",
          "Kampala gold smelting desk"
        ]}
        schemaJson={homeSchema}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24" id="corporate-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero messages and tags */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-mono tracking-[0.15em] font-semibold self-start shadow-[0_0_15px_rgba(212,175,55,0.08)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#D4AF37] gold-glow-icon" />
              <span className="gold-glow">Africa's Verified Sovereign Sourcing Pipeline</span>
            </div>

            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Connecting Global Investors to Africa's Most <span className="gold-text-gradient gold-glow">Valuable Mineral</span> Opportunities
            </h1>

            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl">
              Fully **Uganda Mining Act 2022 Compliant**. Trusted sourcing, compliance vetting, independent due diligence consultancy, and secured export logistics facilitation for gold, diamonds, and gemstones across East Africa. Managed from our **Kampala Headquarters Refining & Clearing Desk**.
            </p>

            {/* High conversion call-to-actions */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => onInquireGeneral('General Sourcing consultation inquiry launched from Hero')}
                className="px-6 py-3.5 luxury-gold-button text-black font-extrabold uppercase tracking-widest text-xs rounded-sm cursor-pointer flex items-center gap-2 group transition-all active:scale-95"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-black group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('/marketplace')}
                className="px-6 py-3.5 border border-white/10 hover:border-[#D4AF37]/50 text-white rounded-sm text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-black/40 transition-all cursor-pointer"
              >
                Explore Marketplace
              </button>
            </div>

            {/* Micro value proofs */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-white/5 mt-4">
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold font-serif text-[#D4AF37] gold-glow mb-0.5">100%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 leading-tight">Act 2022 Regulated</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold font-serif text-[#D4AF37] gold-glow mb-0.5">DGSM</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 leading-tight">State Lab Assayed</span>
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xl font-bold font-serif text-[#D4AF37] gold-glow mb-0.5">FOB/CIF</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 leading-tight">Verified Escrow</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] sm:h-[400px] w-full" id="hero-interactive-showcase">
            <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#D4AF37]/15 shadow-2xl shadow-black/80 flex items-center justify-center">
              <img 
                src={goldBarsImg} 
                className="w-full h-full object-cover grayscale-[15%] brightness-95 contrast-105 hover:scale-105 transition-transform duration-700" 
                alt="Uganda LBMA bullion refinery - Mineral Dealers Africa" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-black/75 backdrop-blur-md rounded-xl border border-white/10 text-left select-none">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase font-mono text-[#D4AF37] tracking-[0.2em] font-black">Refinery Clearance Active</span>
                </div>
                <h2 className="text-xs uppercase font-serif font-black text-white leading-normal tracking-wide">
                  Kampala Headquarters Refining & Clearing Desk
                </h2>
                <p className="text-[10px] text-white/50 leading-normal font-light mt-1">
                  Direct FOB pipeline from our state-certified smelting rooms to Entebbe Airport under rigid security.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="flex flex-col lg:flex-row gap-10 items-center justify-between" id="trust-metrics">
        <div className="lg:w-1/2 flex flex-col gap-4 text-left">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] font-extrabold">SECURE SOURCING INFRASTRUCTURE</span>
          <h2 className="font-serif text-3xl font-bold text-white leading-tight">
            Institutional Assurances for International Buyer Alliances
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] my-1" />
          <p className="text-xs text-gray-400 font-light leading-relaxed mb-2">
            The regional trade hosts significant regulatory pitfalls. Mineral Dealers Africa completely replaces speculative trading corridors with safe, state-verified, and licensed logistics.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Double-blind fire assay testing coordinates at the official state Entebbe mineral lab.",
              "Strict vetting of artisanal gold mining cooperatives (ASM) in alignment with clean ethical chains.",
              "Complete export royalty, withholding duties settlement, and custom clearance generation.",
              "Guaranteed logistics handover via armored vehicle lines directly to carrier aircraft holds."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                <span className="text-[#D4AF37] mt-0.5">✔</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
          {[
            { title: "Supplier Audits", text: "Physical concessions are vetted thoroughly. We check mining license logs and confirm active corporate registry codes before listings go live." },
            { title: "Spectrograph Assaying", text: "Independent chemical analyses inside DGSM state laboratory rooms guarantees accurate Karat weight determinations." },
            { title: "Secure Custody Logistics", text: "We partner with global secure lines like G4S to escort assets from storage chambers directly to airport carrier decks." },
            { title: "Verified Escrow", text: "FOB and CIF contracts are processed using dedicated escrow bank accounts, protecting buyers' deposit capital." }
          ].map((item, idx) => (
            <div key={idx} className="luxury-glass p-5 rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 luxury-glass-hover hover:-translate-y-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300">
              <span className="text-xs font-bold text-[#D4AF37] block mb-1 uppercase tracking-wider">{item.title}</span>
              <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section className="flex flex-col gap-8 relative" id="testimonials">
        <div className="text-center">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block font-extrabold">SUCCESSFUL TRANSACTIONS</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mt-1.5">International Buyer Endorsements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: "Sourcing rough diamond lots in Central Africa requires extraordinary caution. Mineral Dealers Africa managed on-ground Kimberley license inspections in Angola and secure air transport flawless. Excellent corporate compliance.",
              author: "Marcus Van Den Berg",
              company: "Gems & Bullion BV (Antwerp)",
              stars: 5
            },
            {
              quote: "Their knowledge of Uganda's New Mining Act of 2022 prevented a major regulatory bottleneck for our joint equipment-financing venture. Andrew Nakato managed licensing applications directly with the Kampala ministry.",
              author: "Dr. Chen Wei",
              company: "Eastern Commodities Alliance (Hong Kong)",
              stars: 5
            },
            {
              quote: "Buying physical Gold in Africa is safe only if you use state-level laboratories for assaying. MDA monitored our sample fire assays at the DGSM Entebbe laboratory and handled clearance protocols accurately.",
              author: "Jean-Louis Dupont",
              company: "Prestige Bullion Smelters (Geneva)",
              stars: 5
            }
          ].map((item, idx) => (
            <div key={idx} className="frosted-glass border border-[#D4AF37]/10 p-6 rounded-2xl flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/35 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-2 group">
              <div>
                <div className="flex gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(item.stars)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37] gold-glow-icon" />)}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light italic">"{item.quote}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 text-xs text-left">
                <span className="font-bold text-white block uppercase tracking-wide">{item.author}</span>
                <span className="text-[10px] text-white/45 uppercase tracking-wider font-mono">{item.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK FAQ ACCORDION SECTION */}
      <section className="luxury-glass border border-[#D4AF37]/15 rounded-2xl p-6 md:p-8 flex flex-col gap-6" id="home-faqs">
        <h3 className="font-serif text-xl font-bold text-white border-b border-[#D4AF37]/15 pb-4">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Can I buy gold directly from hotel suites in Kampala?",
              a: "No. Legitimate dealers and verified cooperatives run trade negotiations exclusively inside licensed boardrooms, bank chambers, or official company offices. Hotel corridor sales are the signature of unverified operators."
            },
            {
              q: "How is mineral purity officially assayed in Uganda?",
              a: "Official chemical assay reports are generated at the Directorate of Geological Survey and Mines (DGSM) laboratories in Entebbe. Their labs utilize XRF spectrograph scans and fire testing assays."
            },
            {
              q: "What is your stance regarding conflict minerals?",
              a: "Mineral Dealers Africa possesses a rigid anti-conflict protocol. All regional gold nuggets and doré bars documentation is traced directly back to their source ASM concessions to comply with OECD Due Diligence Guidelines."
            },
            {
              q: "How are shipping logistics and customs managed?",
              a: "We coordinate end-to-end transport with first-class armored couriers (e.g., G4S or Brinks). We manage royal declarations, pay export taxes under the Uganda Mining Act 2022, and issue official custom permits at Entebbe terminal."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300">
              <h4 className="font-serif text-xs uppercase tracking-wider font-bold text-[#D4AF37] flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5 gold-glow-icon" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
