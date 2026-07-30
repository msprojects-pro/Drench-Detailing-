import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/detailingData';
import { GalleryItem } from '../types';
import { MapPin, X, ExternalLink, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'paint-correction', label: 'Paint Correction' },
    { id: 'valeting', label: 'Mobile Valeting' },
    { id: 'interior', label: 'Interior Detailing' },
    { id: 'full-detail', label: 'Full Transformations' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            FEATURED RECENT DETAILS
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Explore recent detailing projects delivered across Alderley Edge, Knutsford, Wilmslow, Hale, and Greater Manchester.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-400/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 cursor-pointer shadow-xl relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-1.5 text-xs text-blue-400 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.vehicle}
                  </h3>
                  <p className="text-neutral-400 text-xs line-clamp-1 mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white border border-neutral-800 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-[420px] relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Drench Portfolio Showcase</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.vehicle}</h3>
                
                <div className="flex items-center space-x-2 text-sm text-blue-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedImage.location}</span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400">
                  <span className="text-white font-semibold block mb-1">Service Performed:</span>
                  <span className="capitalize">{selectedImage.category.replace('-', ' ')}</span>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
