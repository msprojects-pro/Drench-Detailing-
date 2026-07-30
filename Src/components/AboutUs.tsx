import React, { useState } from 'react';
import { Truck, Shield, Zap, Sparkles, MapPin, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

export const AboutUs: React.FC = () => {
  const [searchPostcode, setSearchPostcode] = useState('');
  const [checkerResult, setCheckerResult] = useState<{ covered: boolean; message: string } | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPostcode.trim()) return;

    const query = searchPostcode.toUpperCase().trim();
    // Common Cheshire & Northwest postcodes & towns
    const coveredPrefixes = ['WA', 'SK', 'CW', 'M', 'CH', 'WN', 'OL', 'BL', 'PR'];
    
    const isMatchedPrefix = coveredPrefixes.some(prefix => query.startsWith(prefix));
    const isMatchedTown = BUSINESS_INFO.areasCovered.some(area => area.toUpperCase().includes(query) || query.includes(area.toUpperCase()));

    if (isMatchedPrefix || isMatchedTown) {
      setCheckerResult({
        covered: true,
        message: `Great news! ${query} is in our primary mobile detailing service area. We bring our full mobile water & power setup straight to your address.`
      });
    } else {
      setCheckerResult({
        covered: true,
        message: `We routinely service ${query} and surrounding areas across Northwest UK! Contact us to confirm exact booking slot availability.`
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-neutral-950 text-white relative overflow-hidden border-t border-neutral-900">
      {/* Background glowing glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 inline-block mb-3">
            About Drench Detailing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            THE ULTIMATE MOBILE DETAILING EXPERIENCE
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            We deliver studio-grade vehicle valeting, paint correction, and ceramic protection directly to your residence or workplace across Cheshire and the Northwest.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Image Showcase with Mobile Van */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src={BUSINESS_INFO.vanImage}
                alt="Drench Mobile Detailing Van Cheshire"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/90 backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-blue-600 text-white">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">100% Mobile & Self-Contained</h4>
                    <p className="text-neutral-400 text-xs">Purified spot-free water tank & onboard whisper generator included.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -top-4 -right-4 bg-neutral-900 border border-blue-500/50 p-4 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Based in Knutsford</span>
              </div>
            </div>
          </div>

          {/* Text Details & Pillars */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              No Hose Needed. No Extension Leads. Just Pure Convenience & Perfection.
            </h3>
            
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              Founded on a passion for automotive perfection, <strong className="text-white">Drench Detailing</strong> eliminates the hassle of traditional detailing shops. You don’t need to drive anywhere or leave your car away for days for routine valeting and maintenance.
            </p>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              Our bespoke mobile detailing rig brings industrial-grade pressure washers, spot-free reverse osmosis water tanks, dual-action machine polishers, and climate-controlled gazebos right to your driveway.
            </p>

            {/* 3 Core Advantage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Spot-Free Purified Water</h4>
                <p className="text-neutral-400 text-xs">Zero limescale water filtration guarantees no unsightly water spots on clear coats or glass.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Fully Insured & Certified</h4>
                <p className="text-neutral-400 text-xs">Complete trade insurance covering your vehicle while under our care and detailing process.</p>
              </div>
            </div>

            {/* Premium Chemical Partner Logos / Brands */}
            <div className="pt-6 border-t border-neutral-900">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-3">
                Using World-Leading Detailing Brands:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-400">
                <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Gtechniq</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">CarPro</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Koch Chemie</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Rupes</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Swissvax</span>
              </div>
            </div>

          </div>
        </div>

        {/* Postcode Coverage Interactive Widget */}
        <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-blue-950/40 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
              <MapPin className="w-4 h-4" />
              <span>Cheshire & Northwest Service Coverage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Check Mobile Availability For Your Postcode
            </h3>
            <p className="text-neutral-400 text-sm mb-8">
              We regularly visit Knutsford, Wilmslow, Alderley Edge, Hale, Altrincham, Bowdon, Macclesfield, Chester, Warrington, and South Manchester.
            </p>

            <form onSubmit={handlePostcodeCheck} className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto mb-6">
              <div className="relative w-full">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Enter your postcode or town (e.g. WA16, SK9, Hale)..."
                  value={searchPostcode}
                  onChange={(e) => setSearchPostcode(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/40 shrink-0 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Check Area</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {checkerResult && (
              <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-600/60 text-blue-200 text-sm max-w-xl mx-auto flex items-start space-x-3 text-left animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white mb-0.5">Mobile Coverage Confirmed</span>
                  <span>{checkerResult.message}</span>
                </div>
              </div>
            )}

            {/* List of Key Town Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {BUSINESS_INFO.areasCovered.map((area) => (
                <span 
                  key={area} 
                  className="text-xs px-3 py-1 rounded-full bg-neutral-950/80 text-neutral-300 border border-neutral-800"
                >
                  ✓ {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
