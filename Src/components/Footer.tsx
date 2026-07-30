import React from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/detailingData';
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-24 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-blue-500/60 shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center font-black text-lg tracking-tighter select-none">
                <span className="text-white">D</span>
                <span className="text-blue-500">D</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">DRENCH DETAILING</span>
                <span className="text-[10px] tracking-widest text-blue-400 uppercase font-semibold block -mt-1">
                  Mobile Detailing Service
                </span>
              </div>
            </a>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional mobile car detailing, valeting, paint correction, and ceramic protection. 100% self-contained with onboard spot-free water & power serving Cheshire, Manchester & the Northwest.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-blue-600 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-emerald-600 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-blue-600 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Drench</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile Services</a></li>
              <li><a href="#packages" className="hover:text-blue-400 transition-colors">Packages & Pricing</a></li>
              <li><a href="#transformation" className="hover:text-blue-400 transition-colors">Paint Correction</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Recent Work Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Specialist Services</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Coverage Areas</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              {BUSINESS_INFO.areasCovered.slice(0, 8).map(area => (
                <li key={area}>📍 {area}</li>
              ))}
              <li className="text-blue-400 font-semibold pt-1">+ Surrounding Northwest UK</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-neutral-300">Drench Detailing</strong>. All Rights Reserved. Mobile Detailing Cheshire.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
