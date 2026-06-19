import React from 'react';
import { ShieldCheck, TrendingUp, Landmark, FileCheck, Coins, HelpCircle, Briefcase } from 'lucide-react';

export default function InvestorGuide({ onRequestConsultation }: { onRequestConsultation: () => void }) {
  const investorTiers = [
    {
      title: "Physical Gold Arbitrage",
      subtitle: "Direct Metal Procurement",
      description: "Buy assayed alluvial nuggets or unrefined gold dust direct from local smallholder mines, and refine locally in Kampala to LBMA standards. MDA manages the provenance verification, transport secure escorts, and customs clearance.",
      potential: "Highly Liquid Asset Reserve",
      riskProfile: "Low (When verified on-ground)"
    },
    {
      title: "Mining Concessions & Equipment Finance",
      subtitle: "Capital Joint-Ventures",
      description: "Capital injection into licensed artisanal cooperatives in Uganda and Tanzania to scale mechanical capability (e.g. wet magnetic separation plants, excavators) in exchange for direct metal yield contracts.",
      potential: "Exponential Yield Scaling",
      riskProfile: "Medium (Requires strict escrow)"
    }
  ];

  const proceduralPillars = [
    {
      step: "01",
      title: "Establish Corporate Presence & KYC",
      text: "Global buyers are registered into the Uganda Directorate portal (DGSM) and set up direct corporate banking channels to comply with anti-money laundering regulations."
    },
    {
      step: "02",
      title: "Local Assay Auditing Integration",
      text: "Never wire funds prior to neutral fire assays. Minerals must be brought to Kampala, sampled, and assayed in governmental labs under strict legal observation."
    },
    {
      step: "03",
      title: "EBB Exit Customs & Clearance",
      text: "All royalties (nominal 5% export tax on refined gold) must be paid, custom state certificates generated, and shipments sealed under double-custody rules."
    }
  ];

  return (
    <div className="w-full flex flex-col gap-8 relative text-white" id="investor-guide-desk">
      {/* Background ambient lighting glow */}
      <div className="absolute top-[20%] left-[10%] w-[35%] h-[40%] rounded-full bg-[#D4AF37]/2.5 blur-[130px] pointer-events-none" />

      {/* Top Professional Intelligence Card */}
      <div className="luxury-glass border border-[#D4AF37]/18 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)] z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/3 blur-[100px] pointer-events-none"></div>
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">SOVEREIGN CAPITAL RESOURCE</span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Strategic Mineral <span className="gold-text-gradient">Investor Center</span>
        </h2>
        <div className="gold-accent-line my-4 max-w-xs" />
        <p className="text-xs md:text-sm text-white/70 mt-2 max-w-xl leading-relaxed font-light">
          Africa presents outstanding geological yield potential. We advise family offices, luxury jewel houses, commodity trading desks, and bullion buyers on safe capital deployment structures designed to reduce regulatory risk.
        </p>
      </div>

      {/* Main Grid: Investment Tiers and Compliance Trackers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative">
        
        {/* Left: Investment Pathways */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="font-serif text-xs uppercase tracking-widest font-extrabold text-white/50 border-l-2 border-[#D4AF37] pl-2.5">
            Primary Investment Frameworks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investorTiers.map((tier, idx) => (
              <div key={idx} className="luxury-glass border border-[#D4AF37]/10 p-5 rounded-2xl flex flex-col justify-between h-full hover:border-[#D4AF37]/30 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(212,175,55,0.05)] hover:-translate-y-1.5">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold">{tier.subtitle}</span>
                  <h4 className="font-serif text-base font-bold text-white mt-1 mb-3">{tier.title}</h4>
                  <p className="text-xs text-white/55 leading-relaxed font-light">{tier.description}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono">
                  <div className="flex justify-between py-1">
                    <span className="text-white/40">CAPITAL OUTCOME:</span>
                    <span className="text-white font-bold">{tier.potential}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-white/40">ASSUMED RISK:</span>
                    <span className="text-[#D4AF37] font-bold">{tier.riskProfile}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Management Banner */}
          <div className="bg-emerald-950/15 p-5 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] backdrop-blur-md flex gap-4">
            <ShieldCheck className="h-10 w-10 text-emerald-400 shrink-0 gold-glow-icon" />
            <div>
              <h4 className="font-serif text-xs uppercase tracking-widest font-extrabold text-emerald-400 mb-1">
                Risk Management Protocol
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                All physical gold procurement deals are managed through secure regional accounts and escrow trusts. Asset transactions remain pending until neutral spectrograph reports are generated and signed by both parties.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step compliance pipeline */}
        <div className="lg:col-span-5 luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-5 w-5 text-[#D4AF37] gold-glow-icon" />
              <h3 className="font-serif text-xs uppercase tracking-widest font-extrabold text-white/50">Sovereign Compliance Route</h3>
            </div>
            
            <p className="text-xs text-white/50 leading-normal mb-6 font-light">
              We guide investors through standard domestic regulatory requirements for seamless international shipping operations.
            </p>

            <div className="space-y-6">
              {proceduralPillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-mono text-lg font-black text-[#D4AF37]/35 tracking-tight shrink-0">
                    {pillar.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-xs uppercase tracking-widest font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-[10px] text-white/40 font-mono">
              <span className="block">Director of Investment Desk:</span>
              <span className="text-[#D4AF37] font-semibold">Compliance Oversight Committee</span>
            </div>
            <button
              onClick={onRequestConsultation}
              className="luxury-gold-button shrink-0 py-2.5 px-5 rounded-full text-[10px] tracking-widest font-extrabold shadow-[0_4px_15px_rgba(212,175,55,0.25)]"
            >
              Get Trade Brief
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
