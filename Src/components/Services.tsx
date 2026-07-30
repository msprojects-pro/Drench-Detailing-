import React from 'react';
import { SERVICES } from '../data/detailingData';
import { Truck, Sparkles, ShieldCheck, Car, Sun, Crown, Clock, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Car': return <Car className="w-6 h-6 text-blue-400" />;
      case 'Sun': return <Sun className="w-6 h-6 text-blue-400" />;
      case 'Crown': return <Crown className="w-6 h-6 text-blue-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Our Specialist Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            TAILORED MOBILE DETAILING SOLUTIONS
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From routine maintenance valets to multi-stage paint correction and ceramic protection, we bring showroom precision directly to your Cheshire driveway.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/60 transition-all duration-300 flex flex-col overflow-hidden group shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {service.isPopular && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                    POPULAR CHOICE
                  </div>
                )}

                <div className="absolute bottom-3 left-4 flex items-center space-x-2 text-xs text-neutral-300 font-medium bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/50">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs text-blue-400 font-semibold">
                      Starting {service.startingPrice}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 mt-auto">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Recommendation Tag */}
                <div className="mb-6 pt-3 border-t border-neutral-900">
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold block">Recommended For:</span>
                  <span className="text-xs text-neutral-300 font-medium">{service.recommendedFor}</span>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => onSelectServiceForQuote(service.id)}
                  className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-blue-600 text-white font-semibold text-sm border border-neutral-800 hover:border-blue-500 transition-all flex items-center justify-center space-x-2 group-hover:bg-blue-600 cursor-pointer"
                >
                  <span>Select for Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
