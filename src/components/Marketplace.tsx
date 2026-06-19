import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShieldCheck, MapPin, Tag, Plus, UserPlus, Info, CheckCircle, Package, ArrowUpRight } from 'lucide-react';
import { MineralListing, Supplier, MineralCategory } from '../types';
import { INITIAL_MARKETPLACE_LISTINGS } from '../data/mineralData';

interface MarketplaceProps {
  onInquire: (mineral: MineralListing) => void;
}

export default function Marketplace({ onInquire }: MarketplaceProps) {
  // State for listings (combining static list + user-added listings from localStorage)
  const [listings, setListings] = useState<MineralListing[]>(INITIAL_MARKETPLACE_LISTINGS);
  const [filteredListings, setFilteredListings] = useState<MineralListing[]>(INITIAL_MARKETPLACE_LISTINGS);
  
  // Selection/Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | MineralCategory>('All');
  
  // Modal layout toggles
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showAddListingModal, setShowAddListingModal] = useState(false);
  
  // Registry success indicators
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [addListingSuccess, setAddListingSuccess] = useState(false);

  // Supplier Form State
  const [supCompany, setSupCompany] = useState('');
  const [supContact, setSupContact] = useState('');
  const [supCountry, setSupCountry] = useState('Uganda');
  const [supPhone, setSupPhone] = useState('');
  const [supEmail, setSupEmail] = useState('');
  const [supLicense, setSupLicense] = useState('');
  
  // Listing Form State
  const [listTitle, setListTitle] = useState('');
  const [listCategory, setListCategory] = useState<MineralCategory>('Gold');
  const [listType, setListType] = useState('Gold Nuggets');
  const [listOrigin, setListOrigin] = useState('Uganda');
  const [listPurity, setListPurity] = useState('98.5% (23 Karat)');
  const [listQty, setListQty] = useState('50 kg');
  const [listSupplier, setListSupplier] = useState('');
  const [listPhotoType, setListPhotoType] = useState<'gold' | 'diamond' | 'emerald' | 'tanzanite'>('gold');
  const [listDesc, setListDesc] = useState('');

  // Load user custom assets on mount
  useEffect(() => {
    try {
      const persisted = localStorage.getItem('mda_marketplace_listings');
      if (persisted) {
        const parsed = JSON.parse(persisted);
        // Combine initial standard stock with customized local user assets
        setListings([...INITIAL_MARKETPLACE_LISTINGS, ...parsed]);
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  // Filter listings based on search metrics and category hooks
  useEffect(() => {
    let result = listings;
    
    // Category match
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Search query match (broad match against title, country, description, supplier)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.supplierName.toLowerCase().includes(query)
      );
    }

    setFilteredListings(result);
  }, [listings, searchQuery, selectedCategory]);

  // Handle supplier submissions
  const handleRegisterSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supCompany || !supContact || !supEmail) {
      alert("Please specify complete registration particulars.");
      return;
    }

    const newSupplier: Supplier = {
      id: `sup-${Date.now()}`,
      companyName: supCompany,
      contactPerson: supContact,
      country: supCountry,
      email: supEmail,
      phone: supPhone,
      licenseNumber: supLicense || 'PENDING_REGISTRATION_AUDIT',
      isVerified: true, // Auto-verified for interactive prototype fun!
      mineralsOffered: ['Gold'],
      registrationDate: new Date().toISOString().split('T')[0]
    };

    // Save supplier to local history
    try {
      const activeSuppliers = JSON.parse(localStorage.getItem('mda_suppliers') || '[]');
      localStorage.setItem('mda_suppliers', JSON.stringify([...activeSuppliers, newSupplier]));
      setRegisterSuccess(true);
      setTimeout(() => {
        setRegisterSuccess(false);
        setShowRegisterModal(false);
        // Wipe fields
        setSupCompany(''); setSupContact(''); setSupPhone(''); setSupEmail(''); setSupLicense('');
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle addition of custom listings
  const handleAddListingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!listTitle || !listSupplier || !listQty) {
      alert("Please fulfill key parameters, including Title, Supplier and Quantity.");
      return;
    }

    // Select suitable Unsplash URL representing the metal
    const photoMap = {
      gold: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600',
      diamond: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
      emerald: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600',
      tanzanite: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600'
    };

    const newListing: MineralListing = {
      id: `lst-custom-${Date.now()}`,
      title: listTitle,
      category: listCategory,
      type: listType,
      origin: listOrigin,
      purity: listPurity,
      quantity: listQty,
      photoUrl: photoMap[listPhotoType],
      supplierName: listSupplier,
      isSupplierVerified: true, // local miners uploaded through control panel are pre-vetted
      supplierLocation: `${listOrigin} Mining Zone`,
      description: listDesc || 'Professional, legally approved raw mining yield registered under domestic mining provisions. Full legal chain-of-custody in order.',
      specifications: [
        { label: 'Licensed Cooperative', value: listSupplier },
        { label: 'Origin Cleared', value: 'Yes' },
        { label: 'Purity Certificate', value: 'SGS/Ministerial Registry pending' },
        { label: 'Export Eligibility', value: 'Legal FOB cleared' }
      ],
      dateAdded: new Date().toISOString().split('T')[0]
    };

    try {
      const persisted = JSON.parse(localStorage.getItem('mda_marketplace_listings') || '[]');
      const updated = [...persisted, newListing];
      localStorage.setItem('mda_marketplace_listings', JSON.stringify(updated));
      
      setListings([...INITIAL_MARKETPLACE_LISTINGS, ...updated]);
      setAddListingSuccess(true);
      setTimeout(() => {
        setAddListingSuccess(false);
        setShowAddListingModal(false);
        // Wipe fields
        setListTitle(''); setListDesc(''); setListQty(''); setListSupplier('');
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 text-white relative" id="marketplace-hub">
      {/* Background ambient lighting glow */}
      <div className="absolute top-[30%] right-[5%] w-[40%] h-[40%] rounded-full bg-[#D4AF37]/3 blur-[150px] pointer-events-none" />

      {/* Top Banner / Marketplace Description */}
      <div className="luxury-glass border border-[#D4AF37]/18 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/3 blur-[100px] pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-extrabold">Active Cooperative Vault</span>
            </div>
            <h2 className="font-serif text-3xl font-extrabold text-white tracking-wide">
              African Mineral <span className="gold-text-gradient">Gateway Portal</span>
            </h2>
            <div className="gold-accent-line my-3 max-w-xs" />
            <p className="text-xs md:text-sm text-white/70 mt-2 max-w-xl leading-relaxed font-light">
              The standard hub connecting licensed artisanal mining cooperatives (ASM), regional operations, and sovereign deposits to checked global refineries and financial brokers. Browse current raw blocks or register your deposit today.
            </p>
          </div>

          {/* Global Registry quick selectors */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowRegisterModal(true)}
              id="register-supplier-btn"
              className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Register as Supplier</span>
            </button>
            
            <button
              onClick={() => setShowAddListingModal(true)}
              id="list-mineral-btn"
              className="luxury-gold-button flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/15 transition-all cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5 text-black" />
              <span>List Mineral Assets</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Bento Filtering Panel */}
      <div className="luxury-glass p-4 border border-[#D4AF37]/12 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
        
        {/* Category Controls */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {['All', 'Gold', 'Diamonds', 'Gemstones', 'Strategic Minerals'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider rounded transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-black/40 text-white/50 border border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/35'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Real-time search element */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37] gold-glow-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search country, purity, cooperative..."
            className="w-full bg-black/40 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded-lg p-3 pl-10 text-xs text-white placeholder-white/30 outline-none"
          />
        </div>
      </div>

      {/* Main Catalog Grid */}
      {filteredListings.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 luxury-glass border border-[#D4AF37]/15 rounded-3xl z-10 relative">
          <Package className="h-12 w-12 text-[#D4AF37] mx-auto mb-4 animate-bounce" />
          <h4 className="font-serif text-lg font-bold text-white">No Mineral Stock Found</h4>
          <p className="text-xs text-white/50 max-w-sm mx-auto mt-2 leading-relaxed">
            There are currently no catalog deposits matching your specified category or search metrics. Try clearing your filters or query, or submit a custom procurement order.
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-6 px-6 py-2.5 bg-black/40 border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] rounded-full transition-all uppercase tracking-widest font-extrabold text-[10px] cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        /* Dynamic Listings list */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative" id="marketplace-catalog-grid">
          {filteredListings.map((item) => (
            <div 
              key={item.id}
              className="luxury-glass border border-[#D4AF37]/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/32 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.08)] hover:-translate-y-1.5 group h-full"
              id={`listing-${item.id}`}
            >
              
              {/* Product Photo Container */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900 border-b border-[#D4AF37]/10 shrink-0">
                <img 
                  src={item.photoUrl} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                
                {/* Product Tags */}
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#D4AF37]/15 border border-[#D4AF37]/35 rounded text-[9px] font-mono text-[#D4AF37] uppercase font-bold backdrop-blur-sm">
                  {item.category}
                </span>

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-[10px] font-mono text-[#D4AF37] font-extrabold uppercase tracking-widest">{item.type}</span>
                  <p className="font-serif font-bold text-white text-base leading-tight mt-0.5">{item.title}</p>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-white/60 leading-normal font-light line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  {/* Specification Table */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-black/45 border border-[#D4AF37]/15 rounded-xl text-[11px] font-mono mb-4 text-white/60">
                    <div>
                      <span className="text-white/40 block uppercase text-[8px] font-bold">ORIGIN COUNTRY</span>
                      <span className="font-medium text-white flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-[#D4AF37] shrink-0 gold-glow-icon" />
                        <span>{item.origin}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block uppercase text-[8px] font-bold">CERTIFIED PURITY</span>
                      <span className="font-medium text-white mt-0.5 block">{item.purity}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-white/5 mt-1">
                      <span className="text-white/40 block uppercase text-[8px] font-bold">STOCK QUANTITY</span>
                      <span className="font-bold text-[#D4AF37]">{item.quantity}</span>
                    </div>
                  </div>
                </div>

                {/* Supplier Profile & Action Buttons */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between gap-1 mb-4">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="h-7 w-7 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 text-[10px] font-bold text-[#D4AF37] uppercase shrink-0">
                        {item.supplierName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] leading-tight font-bold text-white truncate font-medium" title={item.supplierName}>
                          {item.supplierName}
                        </span>
                        <span className="block text-[9px] uppercase font-mono text-white/40">ASM Cooperative</span>
                      </div>
                    </div>

                    {item.isSupplierVerified && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded text-[9px] font-bold text-emerald-400 shrink-0 uppercase tracking-widest leading-none">
                        <ShieldCheck className="h-2.5 w-2.5" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onInquire(item)}
                    id={`inquire-btn-${item.id}`}
                    className="luxury-gold-button w-full py-2.5 text-[10px] font-extrabold uppercase rounded-full shadow-sm shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Lodge Formal Inquiry</span>
                    <ArrowUpRight className="h-3 w-3 text-black" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* MODAL 1: Supplier Registration UI */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="luxury-glass border border-[#D4AF37]/25 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
              id="supplier-register-dialog"
            >
              <div className="bg-[#D4AF37]/5 p-5 flex justify-between items-center border-b border-[#D4AF37]/15">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">Artisanal Alliance</span>
                  <h3 className="font-serif text-lg font-bold text-white">Cooperative / Supplier Registration</h3>
                </div>
                <button onClick={() => setShowRegisterModal(false)} className="text-white/60 hover:text-white transition-colors cursor-pointer select-none text-sm p-1">
                  ✕
                </button>
              </div>

              {registerSuccess ? (
                <div className="p-8 text-center flex flex-col items-center gap-4">
                  <CheckCircle className="h-12 w-12 text-emerald-400 animate-pulse" />
                  <h4 className="font-serif text-lg font-bold text-white">Application Pre-Approved</h4>
                  <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                    Corporate records successfully drafted. An on-ground compliance team will verify your mineral license and conduct assay auditing before issuing a Verified status.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSupplierSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
                  <div className="bg-[#D4AF37]/5 p-3 rounded-lg border border-[#D4AF37]/15 text-[11px] text-white/70 flex gap-2">
                    <Info className="h-5 w-5 text-[#D4AF37] shrink-0 gold-glow-icon" />
                    <span>In order to connect with verified global luxury jewelry makers and financial institutions, miners must declare authentic local municipal licenses.</span>
                  </div>

                  <div>
                    <label className="block text-xs text-white/55 font-semibold mb-1">Company / Mining Cooperative Name *</label>
                    <input
                      type="text" required value={supCompany} onChange={(e) => setSupCompany(e.target.value)}
                      placeholder="e.g., Karamoja Alluvial Miners Cooperative"
                      className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Authorized Representative *</label>
                      <input
                        type="text" required value={supContact} onChange={(e) => setSupContact(e.target.value)}
                        placeholder="e.g., Rogers Mukasa"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Sovereign Country Destination</label>
                      <select
                        value={supCountry} onChange={(e) => setSupCountry(e.target.value)}
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all select-none"
                      >
                        <option value="Uganda" className="bg-charcoal-900">Uganda</option>
                        <option value="Tanzania" className="bg-charcoal-900">Tanzania</option>
                        <option value="Zambia" className="bg-charcoal-900">Zambia</option>
                        <option value="DR Congo" className="bg-charcoal-900">DR Congo</option>
                        <option value="Angola" className="bg-charcoal-900">Angola</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Email Coordinates *</label>
                      <input
                        type="email" required value={supEmail} onChange={(e) => setSupEmail(e.target.value)}
                        placeholder="coop@mail.org"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Phone Number (WhatsApp preferred)</label>
                      <input
                        type="tel" value={supPhone} onChange={(e) => setSupPhone(e.target.value)}
                        placeholder="e.g., +256 700 000000"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/55 font-semibold mb-1">Mining Concession / Dealer License Code</label>
                    <input
                      type="text" value={supLicense} onChange={(e) => setSupLicense(e.target.value)}
                      placeholder="e.g., UGA-ML-2026-X83"
                      className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-mono uppercase transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="luxury-gold-button w-full py-3 mt-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-[#D4AF37]/15 transition-transform active:scale-95 cursor-pointer"
                  >
                    Register and Begin Vetting
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Create Mineral Listing UI */}
      <AnimatePresence>
        {showAddListingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="luxury-glass border border-[#D4AF37]/25 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
              id="listing-add-dialog"
            >
              <div className="bg-[#D4AF37]/5 p-5 flex justify-between items-center border-b border-[#D4AF37]/15">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">Asset Submission</span>
                  <h3 className="font-serif text-lg font-bold text-white">Create New Mineral Listing</h3>
                </div>
                <button onClick={() => setShowAddListingModal(false)} className="text-white/60 hover:text-white transition-colors cursor-pointer select-none text-sm p-1">
                  ✕
                </button>
              </div>

              {addListingSuccess ? (
                <div className="p-8 text-center flex flex-col items-center gap-4">
                  <CheckCircle className="h-12 w-12 text-emerald-400 animate-pulse" />
                  <h4 className="font-serif text-lg font-bold text-white">Listing Registered Live</h4>
                  <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                    Mineral asset registered onto MDA servers. Global buyers can now view and inquire about your inventory block.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddListingSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
                  
                  <div>
                    <label className="block text-xs text-white/55 font-semibold mb-1">Asset Highlight Title *</label>
                    <input
                      type="text" required value={listTitle} onChange={(e) => setListTitle(e.target.value)}
                      placeholder="e.g., LBMA Standard refined pure gold dust lot"
                      className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Cooperative Seller *</label>
                      <input
                        type="text" required value={listSupplier} onChange={(e) => setListSupplier(e.target.value)}
                        placeholder="e.g., Jinja Precious Metals Ltd"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-[#D4AF37] text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Mineral Category</label>
                      <select
                        value={listCategory} onChange={(e) => setListCategory(e.target.value as MineralCategory)}
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                      >
                        <option value="Gold" className="bg-charcoal-900">Gold</option>
                        <option value="Diamonds" className="bg-charcoal-900">Diamonds</option>
                        <option value="Gemstones" className="bg-charcoal-900">Gemstones</option>
                        <option value="Strategic Minerals" className="bg-charcoal-900">Strategic Minerals</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Mineral Subtype</label>
                      <input
                        type="text" value={listType} onChange={(e) => setListType(e.target.value)}
                        placeholder="e.g., Gold Nuggets"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Available Quantity *</label>
                      <input
                        type="text" required value={listQty} onChange={(e) => setListQty(e.target.value)}
                        placeholder="e.g., 200 kg / 14,000 Carats"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Origin Country</label>
                      <select
                        value={listOrigin} onChange={(e) => setListOrigin(e.target.value)}
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                      >
                        <option value="Uganda" className="bg-charcoal-900">Uganda</option>
                        <option value="Tanzania" className="bg-charcoal-900">Tanzania</option>
                        <option value="Zambia" className="bg-charcoal-900">Zambia</option>
                        <option value="DR Congo" className="bg-charcoal-900">DR Congo</option>
                        <option value="Angola" className="bg-charcoal-900">Angola</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Purity Details</label>
                      <input
                        type="text" value={listPurity} onChange={(e) => setListPurity(e.target.value)}
                        placeholder="e.g., 99.9% 24K"
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/55 font-semibold mb-1">Select Graphic Representation</label>
                      <select
                        value={listPhotoType} onChange={(e) => setListPhotoType(e.target.value as any)}
                        className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none font-medium transition-all"
                      >
                        <option value="gold" className="bg-charcoal-900">Gold Bullion/Nuggets</option>
                        <option value="diamond" className="bg-charcoal-900">Diamonds (Brilliant Clear)</option>
                        <option value="emerald" className="bg-charcoal-900">Emerald (Rich Deep Green)</option>
                        <option value="tanzanite" className="bg-charcoal-900">Tanzanite (Blue-Violet)</option>
                      </select>
                    </div>
                    <div className="flex flex-col justify-end text-[10px] text-white/40 leading-snug">
                      <span>Proximity graphics will be applied to guarantee high-end layout standards for investors.</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/55 font-semibold mb-1">Asset Description & Assay Notes</label>
                    <textarea
                      rows={3} value={listDesc} onChange={(e) => setListDesc(e.target.value)}
                      placeholder="Specifies conflict-free status, export licenses, custody logs, or transport assay files..."
                      className="w-full bg-black/45 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white text-xs rounded-lg p-2.5 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="luxury-gold-button w-full py-3 mt-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-[#D4AF37]/15 transition-transform active:scale-95 cursor-pointer"
                  >
                    Submit Mineral Listing
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
