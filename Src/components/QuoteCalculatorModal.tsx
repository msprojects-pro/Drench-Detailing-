import React, { useState } from 'react';
import { X, Check, Calculator, MessageSquare, Send, Car, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId = 'maintenance-valet'
}) => {
  const [vehicleSize, setVehicleSize] = useState<'hatchback' | 'saloon' | 'suv' | 'supercar'>('saloon');
  const [packageType, setPackageType] = useState<string>(preselectedServiceId);
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');

  if (!isOpen) return null;

  // Base pricing matrix
  const basePrices: Record<string, number> = {
    'maintenance-valet': 80,
    'deep-clean-valet': 160,
    'paint-correction-package': 290,
    'ceramic-protection-package': 420,
    'mobile-detailing': 80,
    'paint-correction': 250,
    'ceramic-coating': 350,
    'deep-interior': 90,
    'exterior-polish': 120,
    'full-transformation': 550,
  };

  const sizeMultipliers: Record<string, number> = {
    'hatchback': 1.0,
    'saloon': 1.1,
    'suv': 1.25,
    'supercar': 1.35
  };

  const addonPrices: Record<string, { label: string; price: number }> = {
    'glass-coating': { label: 'Hydrophobic Glass Coating', price: 30 },
    'wheel-ceramic': { label: 'Wheel Face Ceramic Coat', price: 50 },
    'leather-feed': { label: 'Leather Conditioning & Ceramic Feed', price: 40 },
    'engine-bay': { label: 'Engine Bay Detail & Dressing', price: 40 }
  };

  const calculateEstimate = () => {
    const base = basePrices[packageType] || 100;
    const sizeFactor = sizeMultipliers[vehicleSize] || 1.0;
    const addonsTotal = addons.reduce((sum, item) => sum + (addonPrices[item]?.price || 0), 0);
    const total = Math.round(base * sizeFactor) + addonsTotal;
    return total;
  };

  const toggleAddon = (addonKey: string) => {
    if (addons.includes(addonKey)) {
      setAddons(addons.filter(a => a !== addonKey));
    } else {
      setAddons([...addons, addonKey]);
    }
  };

  const estimatedTotal = calculateEstimate();

  const handleWhatsAppSend = () => {
    const text = `Hi Drench Detailing! I generated an instant estimate on your website:%0A%0A` +
      `🚗 Vehicle Size: ${vehicleSize.toUpperCase()}%0A` +
      `🛠️ Service: ${packageType}%0A` +
      `➕ Add-ons: ${addons.length ? addons.join(', ') : 'None'}%0A` +
      `💰 Est. Total: ~£${estimatedTotal}%0A` +
      `📍 Location: ${postcode || 'Cheshire'}%0A` +
      `👤 Name: ${name || 'Customer'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8">
        
        {/* Header */}
        <div className="bg-neutral-950 p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/40">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Quote Calculator</h3>
              <p className="text-neutral-400 text-xs">Estimate costs and submit booking directly to Drench Detailing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Step 1: Vehicle Size */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              1. Select Vehicle Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'hatchback', label: 'Hatchback / Coupe' },
                { id: 'saloon', label: 'Saloon / Sedan' },
                { id: 'suv', label: 'SUV / 4x4' },
                { id: 'supercar', label: 'Luxury / Supercar' },
              ].map(v => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleSize(v.id as any)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    vehicleSize === v.id
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-900/40'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Package Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              2. Select Service Package
            </label>
            <div className="space-y-2">
              {[
                { id: 'maintenance-valet', title: 'Essential Maintenance Detail', base: 'From £80' },
                { id: 'deep-clean-valet', title: 'Deep Clean & Valet Enhancement', base: 'From £160' },
                { id: 'paint-correction-package', title: 'Paint Correction & Polish', base: 'From £290' },
                { id: 'ceramic-protection-package', title: 'Ultimate 3-5 Year Ceramic Shield', base: 'From £420' },
              ].map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPackageType(p.id)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                    packageType === p.id
                      ? 'bg-blue-950/80 border-blue-500 text-white'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-sm">{p.title}</span>
                  <span className="text-blue-400 font-extrabold">{p.base}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              3. Optional Detailing Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(addonPrices).map(([key, item]) => {
                const isSelected = addons.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAddon(key)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-950/80 border-blue-500 text-white'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-bold text-blue-400">+£{item.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Total Display */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-950 via-blue-950/40 to-neutral-950 border border-blue-500/40 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">Estimated Total Quote</span>
              <span className="text-xs text-neutral-500">Includes 100% mobile water & power setup in Cheshire</span>
            </div>
            <div className="text-3xl font-black text-blue-400">
              ~£{estimatedTotal}
            </div>
          </div>

          {/* Step 4: Quick Details for Booking */}
          <div className="space-y-3 pt-2 border-t border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Postcode / Town in Cheshire"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-neutral-950 p-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleWhatsAppSend}
            className="w-full sm:w-1/2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-950/50"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Quote via WhatsApp</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-1/2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-blue-950/50"
          >
            <Send className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
