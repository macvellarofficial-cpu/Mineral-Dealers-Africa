import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Mail, Phone, Building, Send, ShieldCheck, CheckCircle } from 'lucide-react';
import { Inquiry, MineralListing } from '../types';

interface InquiryModalProps {
  mineral: MineralListing | null; // null represents general consultancy inquiry
  onClose: () => void;
  onSubmit: (inquiry: Omit<Inquiry, 'id' | 'date'>) => void;
}

export default function InquiryModal({ mineral, onClose, onSubmit }: InquiryModalProps) {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [quantityRequired, setQuantityRequired] = useState('');
  const [preferredTerms, setPreferredTerms] = useState<'FOB' | 'CIF'>('FOB');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail || !buyerPhone) {
      alert('Please fill out all required communication fields.');
      return;
    }
    onSubmit({
      mineralId: mineral?.id,
      mineralTitle: mineral?.title,
      buyerName,
      buyerEmail,
      buyerPhone,
      companyName,
      quantityRequired: quantityRequired || 'Not specified',
      preferredTerms,
      message
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm" id="inquiry-modal-backdrop">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-charcoal-900 border border-gold-500/30 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative"
        id="inquiry-modal-container"
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-gold-900/40 via-gold-800/20 to-neutral-900 p-5 flex justify-between items-center border-b border-gold-500/10">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-500 block mb-1">CONCURRENT INTEREST REQUEST</span>
            <h3 className="font-serif text-lg font-bold text-white">
              {mineral ? `Inquire: ${mineral.type}` : 'Request Expert Consultation'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded bg-white/5 hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            id="close-modal-btn"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          /* Submission Success State */
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 mb-2 animate-bounce">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white">Inquiry Lodged Successfully</h4>
            <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
              Your formal letter of intent has been generated. Sourcing consultants from our Kampala headquarters (Plot 429, Lubowa Estate) will contact you shortly using your verified details.
            </p>
            <div className="w-full bg-charcoal-950 p-4 rounded border border-gold-500/10 text-xs text-gray-500 text-left">
              <span className="font-mono text-gold-500 font-semibold block mb-1">PRE-COMPLEX TICKET ASSIGNED:</span>
              <p>Reference Code: <span className="font-mono text-white font-bold">MDA-LT-{Math.floor(Math.random() * 900000) + 100000}</span></p>
              <p className="mt-1">Expected Callback Time: <span className="text-emerald-500 font-bold">Within 2 business hours (EAT)</span></p>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Interactive Inquiry Form */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[80vh] flex flex-col gap-4">
            
            {/* Show specific target details if inquiring about an existing catalog listing */}
            {mineral && (
              <div className="bg-charcoal-950 border border-gold-500/10 rounded p-3 text-xs flex justify-between items-center">
                <div>
                  <span className="text-gray-500 block">SELECTED PRODUCT</span>
                  <span className="font-semibold text-white block">{mineral.title}</span>
                  <span className="text-[10px] text-gold-500 font-medium">Origin: {mineral.origin} | Purity: {mineral.purity}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 block">AVAILABILITY</span>
                  <span className="font-mono text-gray-300 font-bold">{mineral.quantity}</span>
                </div>
              </div>
            )}

            {/* Buyer Contact Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1 required-field">Full Name *</label>
                <input
                  type="text"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="e.g., John Smith"
                  className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 outline-none font-medium"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1">Company Entity</label>
                <div className="relative">
                  <Building className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-600" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g., Gold Traders Corp"
                    className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 pl-8 outline-none font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1 required-field">Corporate Email *</label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-600" />
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="corporate@email.com"
                    className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 pl-8 outline-none font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1 required-field">WhatsApp/Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-3 h-3.5 w-3.5 text-gray-600" />
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 pl-8 outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            {/* sSipping metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1">Target Quantity</label>
                <input
                  type="text"
                  value={quantityRequired}
                  onChange={(e) => setQuantityRequired(e.target.value)}
                  placeholder="e.g., 50 kg / 200 Carats"
                  className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 outline-none font-medium"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1">Preferred Shipment Incoterms</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredTerms('FOB')}
                    className={`flex-1 py-2 text-xs font-bold rounded uppercase tracking-wider border transition-all ${
                      preferredTerms === 'FOB'
                        ? 'bg-gold-500/10 text-gold-400 border-gold-500/40 font-black'
                        : 'bg-charcoal-950 text-gray-500 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    FOB (Uganda EBB)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTerms('CIF')}
                    className={`flex-1 py-2 text-xs font-bold rounded uppercase tracking-wider border transition-all ${
                      preferredTerms === 'CIF'
                        ? 'bg-gold-500/10 text-gold-400 border-gold-500/40 font-black'
                        : 'bg-charcoal-950 text-gray-500 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    CIF (DAP Air)
                  </button>
                </div>
              </div>
            </div>

            {/* Letter of Intent details / messages */}
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1">Transaction Terms or Special Requirements</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Include details regarding assay verification expectations, refining mandates, proxy inspections, or banking coordinates..."
                className="w-full bg-charcoal-950 border border-neutral-800 focus:border-gold-500 text-white text-xs rounded p-2.5 outline-none font-medium"
              />
            </div>

            {/* Compliancy Commitment seal & actions */}
            <div className="mt-2 bg-emerald-500/5 border border-emerald-500/15 p-3 rounded text-[11px] text-emerald-400/90 leading-tight">
              <span className="font-bold flex items-center gap-1 mb-1 uppercase tracking-wide">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                <span>Double-Blind Due Diligence Guarantee</span>
              </span>
              <span>All inquiries undergo active KYC and AML automated matching against Sanction watchlists, protecting our network cooperatives and licensing authorities.</span>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 tracking-widest font-bold uppercase text-xs rounded shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer"
              id="submit-inquiry-btn"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit Formal Inquiry Ticket</span>
            </button>

          </form>
        )}
      </motion.div>
    </div>
  );
}
