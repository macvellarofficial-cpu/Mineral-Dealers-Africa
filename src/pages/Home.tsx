import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Star, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
// @ts-ignore
import goldBarsImg from '../assets/images/gold_bars_uganda_1781900099865.jpg';
// @ts-ignore
import rawGoldBowlsImg from '../assets/images/raw_gold_bowls_1781900113727.jpg';
// @ts-ignore
import goldNuggetsHandImg from '../assets/images/gold_nuggets_hand_1782011829727.jpg';
// @ts-ignore
import goldSmeltingImg from '../assets/images/gold_smelting_1782011846349.jpg';
// @ts-ignore
import goldNuggetsRawImg from '../assets/images/gold_nuggets_raw_1782011861528.jpg';

interface HomeProps {
  onInquireGeneral: (contextText: string) => void;
  onNavigate: (path: string) => void;
}

export default function Home({ onInquireGeneral, onNavigate }: HomeProps) {
  // Slider state and slide configurations
  const slides = [
    {
      image: goldNuggetsHandImg,
      tag: "Sovereign Alluvial Sourcing",
      title: "Direct Artisanal Mine Partnerships",
      description: "Partnering with verified and vetted community co-ops to maintain premium raw gold Nugget inventory, adhering strictly to global OECD standards."
    },
    {
      image: goldSmeltingImg,
      tag: "Kampala Smelting & Assaying",
      title: "LBMA-Standard Smelting & Verification",
      description: "On-site modern furnace systems upgrading mineral purity, backed by independent double-blind assays certified at Entebbe state-level DGSM chambers."
    },
    {
      image: goldNuggetsRawImg,
      tag: "Uganda Mining Act 2022 Pathways",
      title: "Legally Certified Airport Clearance Desk",
      description: "Securing compliant Class A export clearances, transit seals, and full federal royalty payments for safe delivery inside Entebbe International Terminal."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // SEO structured schema for local mineral export corporate organization combined with FAQPage schema
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the Uganda Mining Act 2022 regulate gold exports and trading in Kampala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Uganda Mining Act 2022, all physical mineral trading, smelting, and international exports are strictly governed by mandatory state licensing frameworks, including Class A Mineral Dealer and Refined Gold Export permits. As one of the premier licensed gold exporters Kampala accommodates, Mineral Dealers Africa conducts on-ground operations in absolute compliance with these requirements, ensuring all export taxes and clearance declarations are legally filed."
            }
          },
          {
            "@type": "Question",
            "name": "What is an LBMA-standard gold export and how is compliance validated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An LBMA-standard gold export represents refined precious metal shipped internationally at 99.99% investment-grade purity, validated via double-blind fire assay testing at verified government laboratories such as the Directorate of Geological Survey and Mines (DGSM). We assist physical gold buyers by coordinating safe passage from our Kampala headquarters clearing desk directly to armored carrier holds at Entebbe terminal."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Uganda Mining Act 2022 protect international buyers from unlicensed brokers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Uganda Mining Act 2022 criminalizes unlicensed trading, hotel corridor negotiations, and back-room cash brokers. To protect buyer capital and guarantee sovereign sourcing standards, all premium negotiations must be executed inside authorized corporate offices, certified refining suites, or bank chambers under safe, sovereign escrow bank safeguards."
            }
          },
          {
            "@type": "Question",
            "name": "What certifications are required for a legal mineral shipment out of Entebbe Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every compliant export shipment requires an official mineral export permit issued by the Ministry, certified DGSM purity assays, a legitimate customs clearance ticket, fully settled royalty payment tax certificates, and verified Kimberley / OECD origin trail credentials. Our logistics unit coordinates this complete package for safe international transit."
            }
          },
          {
            "@type": "Question",
            "name": "Can foreign family offices buy direct from artisanal mining cooperatives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foreign entities cannot purchase directly from hand-scale miners without custom Class A dealer authority. Under the Uganda Mining Act 2022, international offices must utilize registered regulatory conduits like Mineral Dealers Africa to bridge negotiations, monitor regional assays, clear statutory duties, and secure LBMA-standard gold export clearance."
            }
          },
          {
            "@type": "Question",
            "name": "How are mineral pure weight, Karats, and assays officially determined in East Africa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Purity levels are checked through state-of-the-art X-ray fluorescence (XRF) spectrography and classic fire assays at the official DGSM laboratories in Entebbe. This provides full regulatory and legal grading protection, ensuring independent chemical proof of purity before secure escrow funds release to sellers."
            }
          },
          {
            "@type": "Question",
            "name": "What transport and security precautions protect premium precious metals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We maintain strategic partnerships with premier armored security couriers (e.g., G4S or Brinks). Consignments are convoyed from protected vaults in Kampala under heavy security directly to security clearance areas at Entebbe International Airport, ensuring safe transit to carrier holds."
            }
          },
          {
            "@type": "Question",
            "name": "How do sovereign escrow accounts secure gold procurement contracts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Escrow structures shield purchasing capital throughout the assay process. Your funds remain guarded in tier-1 bank custody while the state laboratories perform physical double-blind assays. Settlement is unlocked only after the certification process conforms fully to contract parameters."
            }
          }
        ]
      }
    ]
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

      {/* AUTO-PLAYING IMAGE SLIDER SECTION */}
      <section className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_15px_45px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.02)] group mt-2" id="home-luxury-slider">
        {/* Slides Frame */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear scale-100 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Cinema Safe Gradient Dark Overlay for superior text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35 md:from-black/90 md:via-black/60 md:to-transparent z-10" />
                
                {/* Ambient glowing gold backdrop inside each slide */}
                <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[120%] rounded-full bg-[#D4AF37]/3.5 blur-[120px] pointer-events-none z-20" />

                {/* Left Aligned Premium Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 top-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 text-left max-w-2xl">
                  <div className="flex flex-col gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 border border-[#D4AF37]/25 text-[#D4AF37] text-[8px] sm:text-[9px] uppercase font-mono tracking-[0.2em] font-extrabold self-start shadow-[0_0_15px_rgba(212,175,55,0.06)]">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
                      <span>{slide.tag}</span>
                    </span>
                    
                    <h2 className="font-serif font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-tight">
                      {slide.title}
                    </h2>

                    <p className="text-[11px] sm:text-xs text-white/70 font-light leading-relaxed max-w-lg">
                      {slide.description}
                    </p>

                    <div className="flex gap-4 mt-1.5">
                      <button
                        onClick={() => onInquireGeneral(`Sourcing Inquiry initiated from Home Slider: ${slide.tag}`)}
                        className="px-4 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#f3cd57] hover:to-[#cd9f25] text-black font-extrabold uppercase tracking-widest text-[9px] rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        File Compliance Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal High-End Manual Hover Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full border border-white/10 bg-black/55 hover:bg-[#D4AF37] text-white hover:text-black hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full border border-white/10 bg-black/55 hover:bg-[#D4AF37] text-white hover:text-black hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Thin Luxury Progress/Paging Indicators */}
        <div className="absolute bottom-6 right-6 sm:right-12 md:right-16 z-30 flex gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive ? 'w-7 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </section>

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

      {/* ROBUST SEO-OPTIMIZED FAQ SECTION */}
      <section className="luxury-glass border border-[#D4AF37]/15 rounded-2xl p-6 md:p-8 flex flex-col gap-8" id="home-faqs">
        <div className="flex flex-col gap-2 border-b border-[#D4AF37]/15 pb-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] font-semibold">SEO & COMPLIANCE DIRECTIVES</span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-white">Uganda Gold Export Security FAQs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "How does the Uganda Mining Act 2022 regulate gold exports and trading in Kampala?",
              a: "Under the Uganda Mining Act 2022, all physical mineral trading, smelting, and international exports are strictly governed by mandatory state licensing frameworks, including Class A Mineral Dealer and Refined Gold Export permits. As one of the premier licensed gold exporters Kampala accommodates, Mineral Dealers Africa conducts on-ground operations in absolute compliance with these requirements, ensuring all export taxes and clearance declarations are legally filed."
            },
            {
              q: "What is an LBMA-standard gold export and how is compliance validated?",
              a: "An LBMA-standard gold export represents refined precious metal shipped internationally at 99.99% investment-grade purity, validated via double-blind fire assay testing at verified government laboratories such as the Directorate of Geological Survey and Mines (DGSM). We assist physical gold buyers by coordinating safe passage from our Kampala headquarters clearing desk directly to armored carrier holds at Entebbe terminal."
            },
            {
              q: "How does the Uganda Mining Act 2022 protect international buyers from unlicensed brokers?",
              a: "The Uganda Mining Act 2022 criminalizes unlicensed trading, hotel corridor negotiations, and back-room cash brokers. To protect buyer capital and guarantee sovereign sourcing standards, all premium negotiations must be executed inside authorized corporate offices, certified refining suites, or bank chambers under safe, sovereign escrow bank safeguards."
            },
            {
              q: "What certifications are required for a legal mineral shipment out of Entebbe Airport?",
              a: "Every compliant export shipment requires an official mineral export permit issued by the Ministry, certified DGSM purity assays, a legitimate customs clearance ticket, fully settled royalty payment tax certificates, and verified Kimberley / OECD origin trail credentials. Our logistics unit coordinates this complete package for safe international transit."
            },
            {
              q: "Can foreign family offices buy direct from artisanal mining cooperatives?",
              a: "Foreign entities cannot purchase directly from hand-scale miners without custom Class A dealer authority. Under the Uganda Mining Act 2022, international offices must utilize registered regulatory conduits like Mineral Dealers Africa to bridge negotiations, monitor regional assays, clear statutory duties, and secure LBMA-standard gold export clearance."
            },
            {
              q: "How are mineral pure weight, Karats, and assays officially determined in East Africa?",
              a: "Purity levels are checked through state-of-the-art X-ray fluorescence (XRF) spectrography and classic fire assays at the official DGSM laboratories in Entebbe. This provides full regulatory and legal grading protection, ensuring independent chemical proof of purity before secure escrow funds release to sellers."
            },
            {
              q: "What transport and security precautions protect premium precious metals?",
              a: "We maintain strategic partnerships with premier armored security couriers (e.g., G4S or Brinks). Consignments are convoyed from protected vaults in Kampala under heavy security directly to security clearance areas at Entebbe International Airport, ensuring safe transit to carrier holds."
            },
            {
              q: "How do sovereign escrow accounts secure gold procurement contracts?",
              a: "Escrow structures shield purchasing capital throughout the assay process. Your funds remain guarded in tier-1 bank custody while the state laboratories perform physical double-blind assays. Settlement is unlocked only after the certification process conforms fully to contract parameters."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/20 hover:bg-white/[0.04] transition-all duration-300">
              <h4 className="font-serif text-sm font-bold text-[#D4AF37] flex items-start gap-2 leading-snug">
                <HelpCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5 gold-glow-icon" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
