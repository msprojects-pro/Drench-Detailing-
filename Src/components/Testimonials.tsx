import React from 'react';
import { TESTIMONIALS } from '../data/detailingData';
import { Star, MapPin, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            5-Star Client Reputation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            WHAT CHESHIRE DRIVERS SAY
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Read real feedback from vehicle owners across Knutsford, Alderley Edge, Wilmslow, Hale, and Greater Manchester.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 relative flex flex-col justify-between shadow-xl"
            >
              <Quote className="w-10 h-10 text-neutral-800 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Vehicle Details */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-base flex items-center space-x-2">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center space-x-2 mt-0.5">
                    <span className="text-blue-400 font-medium">{review.vehicle}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      <span>{review.location}</span>
                    </span>
                  </div>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
