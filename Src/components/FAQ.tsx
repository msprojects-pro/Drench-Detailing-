import React, { useState } from 'react';
import { FAQS } from '../data/detailingData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-neutral-400 text-base">
            Everything you need to know about our mobile detailing unit, equipment requirements, and ceramic coatings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-neutral-800/50 transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
