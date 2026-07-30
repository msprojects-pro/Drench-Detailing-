import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformation" className="py-20 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Real Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            PAINT CORRECTION BEFORE & AFTER
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Drag the slider below to see how our dual-action machine polishing removes swirl marks, holograms, and oxidation to reveal deep mirror clarity.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize border-2 border-neutral-800 shadow-2xl"
          >
            {/* After Image (Full width background) */}
            <div className="absolute inset-0">
              <img
                src={BUSINESS_INFO.ceramicImage}
                alt="After Paint Correction Ceramic Shine"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-blue-600/90 text-white text-xs font-black px-3 py-1.5 rounded-md backdrop-blur-md uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AFTER: DRENCH MIRROR FINISH</span>
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={BUSINESS_INFO.paintCorrectionImage}
                alt="Before Paint Correction Swirl Marks"
                className="w-full h-full object-cover filter contrast-125 saturate-50 brightness-75"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                  maxWidth: 'none'
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-neutral-900/90 text-neutral-300 text-xs font-black px-3 py-1.5 rounded-md backdrop-blur-md uppercase tracking-wider border border-neutral-700">
                <span>BEFORE: SWIRL MARKS & HAZING</span>
              </div>
            </div>

            {/* Divider Line & Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white border-2 border-white shadow-2xl flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Key Facts Below Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="text-blue-400 font-extrabold text-lg mb-0.5">85% - 95%+</div>
              <div className="text-xs text-neutral-400">Swirl & Scratch Defect Removal</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="text-blue-400 font-extrabold text-lg mb-0.5">Dual-Action</div>
              <div className="text-xs text-neutral-400">Safe Machine Polish Technique</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="text-blue-400 font-extrabold text-lg mb-0.5">Ceramic Ready</div>
              <div className="text-xs text-neutral-400">Prepped for 3-5 Year Ceramic Bond</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
