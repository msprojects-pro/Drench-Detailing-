import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Zap, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden py-16 lg:py-24">
      {/* Background Image with Dark Blue & Black Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={BUSINESS_INFO.heroImage}
          alt="Drench Mobile Car Detailing Cheshire"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter contrast-125 brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-blue-950/30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Serving Cheshire, Manchester & Northwest UK</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            MOBILE DETAILING <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              REDEFINED.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Professional deep valeting, paint correction and ceramic coatings brought directly to your home or workplace. <strong className="text-white font-semibold">100% self-contained</strong> with our own spot-free purified water & electricity unit.
          </p>

          {/* Trust Highlights Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-10 text-sm text-neutral-200">
            <div className="flex items-center space-x-2 bg-neutral-900/60 border border-neutral-800/80 px-3.5 py-2 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>We bring our own Water & Power</span>
            </div>
            <div className="flex items-center space-x-2 bg-neutral-900/60 border border-neutral-800/80 px-3.5 py-2 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>5.0★ Rated by Local Drivers</span>
            </div>
            <div className="flex items-center space-x-2 bg-neutral-900/60 border border-neutral-800/80 px-3.5 py-2 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Fully Insured & Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-neutral-900/60 border border-neutral-800/80 px-3.5 py-2 rounded-lg backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Graphene & Ceramic Specialists</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all flex items-center justify-center space-x-3 cursor-pointer group"
            >
              <span>BOOK / REQUEST QUOTE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Drench%20Detailing,%20I'd%20like%20to%20inquire%20about%20a%20mobile%20detail%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl text-base font-semibold text-neutral-100 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 transition-colors flex items-center justify-center space-x-2.5"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Us Direct</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-5 py-4 rounded-xl text-base font-semibold text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-950/80 border border-blue-800/50 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center space-x-4 pt-4 border-t border-neutral-900">
            <div className="flex text-amber-400 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="text-sm text-neutral-400">
              <span className="font-bold text-white">5.0 Star Rating</span> across Cheshire & Manchester vehicle owners
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar at Bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-neutral-950/90 border-t border-neutral-800/80 py-4 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-white">500+</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider">Vehicles Detailed</div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-400">100%</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider">Self-Contained Mobile Unit</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white">5 Years</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider">Ceramic Shield Options</div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-400">Knutsford</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider">& Cheshire Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};
