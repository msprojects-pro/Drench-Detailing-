import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface FloatingMobileBarProps {
  onOpenQuoteModal: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 border-t border-neutral-800 p-3 sm:hidden backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Drench%20Detailing,%20I'd%20like%20a%20mobile%20detailing%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-bold flex items-center justify-center space-x-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-lg shadow-blue-900/40"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </div>
    </div>
  );
};
