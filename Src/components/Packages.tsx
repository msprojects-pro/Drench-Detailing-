import React from 'react';
import { PACKAGES } from '../data/detailingData';
import { Check, ShieldCheck, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface PackagesProps {
  onSelectPackageForQuote: (packageId: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForQuote }) => {
  return (
    <section id="packages" className="py-20 bg-neutral-950 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Clear Pricing & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            POPULAR DETAILING PACKAGES
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Choose a structured package or customize your service according to your vehicle type and requirements.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl bg-neutral-900/90 border transition-all duration-300 flex flex-col p-6 relative ${
                pkg.popular 
                  ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.25)] bg-gradient-to-b from-neutral-900 via-neutral-900 to-blue-950/40' 
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg tracking-widest flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-extrabold text-white mb-1">{pkg.name}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed min-h-[36px]">{pkg.tagline}</p>
              </div>

              {/* Price & Duration */}
              <div className="py-4 border-y border-neutral-800/80 my-2">
                <div className="text-3xl font-black text-blue-400">{pkg.price}</div>
                <div className="flex items-center space-x-1.5 text-xs text-neutral-400 mt-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Est. Duration: {pkg.estTime}</span>
                </div>
              </div>

              {/* Features checklist */}
              <div className="space-y-2.5 my-6 flex-1">
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-2">Package Inclusions:</div>
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Ideal For */}
              <div className="mb-6 p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 text-[11px] text-neutral-400">
                <span className="font-bold text-neutral-300 block">Best suited for:</span>
                <span>{pkg.idealFor}</span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackageForQuote(pkg.id)}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                <span>Select {pkg.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Custom Quote Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/40 hidden sm:block">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Need a bespoke multi-car or supercar quote?</h4>
              <p className="text-neutral-400 text-xs sm:text-sm">We provide tailored packages for fleet maintenance, exotic supercars, and commercial prestige vehicles.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPackageForQuote('custom')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shrink-0 cursor-pointer shadow-lg shadow-blue-900/30"
          >
            Custom Quote Request
          </button>
        </div>

      </div>
    </section>
  );
};
