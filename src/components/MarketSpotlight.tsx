import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, RefreshCw, Calculator, DollarSign, BarChart3, Info } from 'lucide-react';

interface MetalRate {
  name: string;
  symbol: string;
  spotPricePerOunce: number;
  change24hPercent: number;
  lastUpdated: string;
}

export default function MarketSpotlight() {
  const [rates, setRates] = useState<MetalRate[]>([
    { name: 'Gold (LBMA Spot)', symbol: 'XAU', spotPricePerOunce: 2368.45, change24hPercent: 0.84, lastUpdated: new Date().toLocaleTimeString() },
    { name: 'Silver Spot', symbol: 'XAG', spotPricePerOunce: 29.35, change24hPercent: -1.02, lastUpdated: new Date().toLocaleTimeString() },
    { name: 'Platinum Spot', symbol: 'XPT', spotPricePerOunce: 984.10, change24hPercent: 0.15, lastUpdated: new Date().toLocaleTimeString() },
    { name: 'Palladium Spot', symbol: 'XPD', spotPricePerOunce: 902.50, change24hPercent: -1.45, lastUpdated: new Date().toLocaleTimeString() }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [calcWeight, setCalcWeight] = useState<number>(1);
  const [calcUnit, setCalcUnit] = useState<'kg' | 'g' | 'oz'>('kg');
  const [calcMetal, setCalcMetal] = useState<string>('XAU');
  const [calcPurity, setCalcPurity] = useState<number>(0.9999); // Karat purity multiplier

  // Apply a gentle live price ticket update ("Random walk") to simulate a real live API feed
  useEffect(() => {
    const interval = setInterval(() => {
      setRates((prevRates) =>
        prevRates.map((rate) => {
          const deltaPercent = (Math.random() - 0.49) * 0.1; // gentle volatility
          const oldPrice = rate.spotPricePerOunce;
          const newPrice = Number((oldPrice * (1 + deltaPercent / 100)).toFixed(2));
          const newChange = Number((rate.change24hPercent + deltaPercent).toFixed(2));
          return {
            ...rate,
            spotPricePerOunce: newPrice,
            change24hPercent: newChange,
            lastUpdated: new Date().toLocaleTimeString()
          };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const triggerManualRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setRates((prevRates) =>
        prevRates.map((rate) => {
          const drift = (Math.random() - 0.5) * 0.5;
          const newPrice = Number((rate.spotPricePerOunce * (1 + drift / 100)).toFixed(2));
          const newChange = Number((rate.change24hPercent + drift).toFixed(2));
          return {
            ...rate,
            spotPricePerOunce: newPrice,
            change24hPercent: newChange,
            lastUpdated: new Date().toLocaleTimeString()
          };
        })
      );
      setIsLoading(false);
    }, 800000 / 1000000); // quick mock effect
  };

  // Conversions
  // 1 Troy Ounce = 31.1034768 Grams
  // 1 KG = 32.1507 Troy Ounces
  const convertToOunces = (weight: number, unit: 'kg' | 'g' | 'oz'): number => {
    if (unit === 'oz') return weight;
    if (unit === 'g') return weight / 31.1034768;
    return weight * 32.1507466;
  };

  const selectedMetalRate = rates.find((r) => r.symbol === calcMetal) || rates[0];
  const valueInOunces = convertToOunces(calcWeight, calcUnit);
  const calculatedValueRaw = valueInOunces * selectedMetalRate.spotPricePerOunce;
  const finalCalculatedValue = calculatedValueRaw * calcPurity;

  return (
    <section className="luxury-glass border border-[#D4AF37]/15 rounded-3xl p-6 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.03)]" id="market-spotlight">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-[#D4AF37]/10">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-1 font-bold">LIVE COMMODITIES SYNDICATE</span>
          <h3 className="font-serif text-2xl font-light text-white">Global Precious Metals Ticker</h3>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs text-white/40 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded border border-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Feed Active</span>
          </span>
          <button
            onClick={triggerManualRefresh}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-[#D4AF37] hover:text-black bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/25 px-4 py-2 rounded transition-all ml-auto cursor-pointer"
            disabled={isLoading}
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin text-inherit' : ''}`} />
            <span>Update Spot</span>
          </button>
        </div>
      </div>

      {/* Grid: 4 Metal Tickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {rates.map((rate) => {
          const isPositive = rate.change24hPercent >= 0;
          const pricePerGram = (rate.spotPricePerOunce / 31.1034768).toFixed(2);
          const pricePerKg = (rate.spotPricePerOunce * 32.1507466).toFixed(2);

          return (
            <div 
              key={rate.symbol} 
              className="luxury-glass border border-[#D4AF37]/10 rounded-2xl p-5 hover:border-[#D4AF37]/35 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(212,175,55,0.08)]"
              id={`ticker-${rate.symbol}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs font-semibold text-white/50 block">{rate.name}</span>
                  <span className="text-[10px] font-mono font-medium text-[#D4AF37] uppercase">{rate.symbol} / USD</span>
                </div>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isPositive 
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/15' 
                    : 'text-red-400 bg-red-500/10 border border-red-500/15'
                }`}>
                  {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  <span>{isPositive ? '+' : ''}{rate.change24hPercent}%</span>
                </span>
              </div>

              <div className="my-3">
                <span className="text-2.5xl font-mono font-bold text-white tracking-tight">${rate.spotPricePerOunce.toLocaleString()}</span>
                <span className="text-xs text-white/40 ml-1.5">/ oz</span>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40">
                <div>
                  <span className="text-white/30 block text-[9px]">GRAM PRICE</span>
                  <span className="font-semibold text-white">${pricePerGram}</span>
                </div>
                <div>
                  <span className="text-white/30 block text-[9px]">KILO PRICE</span>
                  <span className="font-semibold text-white">${Number(pricePerKg).toLocaleString()}</span>
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 opacity-[0.02] text-[#D4AF37] font-mono text-7xl font-extrabold select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                {rate.symbol}
              </div>
            </div>
          );
        })}
      </div>

      {/* Calculator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 luxury-glass p-6 border border-[#D4AF37]/12 rounded-2xl relative overflow-hidden">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="font-serif text-lg font-bold text-white">Investment Valuation Estimator</h4>
          </div>

          <p className="text-xs text-white/50 leading-normal mb-2">
            Calculate accurate physical trade approximations. Select target metal, unit weight, and gold purity to instantly compute base global metal market valuations conformable with regional Kampala refinery standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Select Metal Asset</label>
              <select
                value={calcMetal}
                onChange={(e) => setCalcMetal(e.target.value)}
                className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] text-white rounded p-2.5 text-xs font-semibold outline-none cursor-pointer"
              >
                {rates.map((r) => (
                  <option key={r.symbol} value={r.symbol}>{r.name} ({r.symbol})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Purity Specification</label>
              {calcMetal === 'XAU' ? (
                <select
                  value={calcPurity}
                  onChange={(e) => setCalcPurity(Number(e.target.value))}
                  className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] text-white rounded p-2.5 text-xs font-semibold outline-none cursor-pointer"
                >
                  <option value={0.9999}>24 Karat (99.99% Refined)</option>
                  <option value={0.958}>23 Karat (95.8% Standard Nugget)</option>
                  <option value={0.916}>22 Karat (91.6% Alluvial Dust)</option>
                  <option value={0.750}>18 Karat (75.0% Raw Compound)</option>
                </select>
              ) : (
                <select
                  value={calcPurity}
                  onChange={(e) => setCalcPurity(Number(e.target.value))}
                  className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] text-white rounded p-2.5 text-xs font-semibold outline-none cursor-pointer"
                >
                  <option value={1.0}>100% Fine Grade</option>
                  <option value={0.925}>Sterling Grade (0.925)</option>
                  <option value={0.900}>Coin Grade (0.900)</option>
                </select>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="block text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Enter Weight</label>
              <input
                type="number"
                min="0.001"
                step="any"
                value={calcWeight}
                onChange={(e) => setCalcWeight(Number(e.target.value))}
                className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] text-white rounded p-2.5 text-xs font-mono outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Unit</label>
              <select
                value={calcUnit}
                onChange={(e) => setCalcUnit(e.target.value as 'kg' | 'g' | 'oz')}
                className="w-full bg-black/50 border border-white/10 focus:border-[#D4AF37] text-white rounded p-2.5 text-xs outline-none cursor-pointer"
              >
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="oz">Ounces (oz)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculated Output card */}
        <div className="lg:col-span-5 bg-black/40 border border-[#D4AF37]/25 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <div className="text-[10px] uppercase font-bold text-[#D4AF37] mb-2 tracking-widest flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Assumed Market Spot Valuation</span>
            </div>
            
            <div className="my-4 font-mono">
              <span className="text-[11px] text-white/40 block">ESTIMATED ASSET WORTH</span>
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight break-all">
                ${finalCalculatedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-xs text-[#D4AF37] block mt-1 uppercase font-extrabold tracking-wider">USD (United States Dollars)</span>
            </div>

            <div className="bg-black/40 p-3 rounded border border-white/5 text-[11px] text-white/50 leading-relaxed flex items-start gap-2 max-w-sm">
              <Info className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5 gold-glow-icon" />
              <span>Values exclude municipal clearing fees, export royalty taxes, and security freight charges. For physical trading execution, contact our Kampala office.</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 relative z-10 font-mono">
            <span>Exchange Base Rate Source:</span>
            <span className="font-semibold text-white/60">Continuous LBMA Spot Proxy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
