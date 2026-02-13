import React, { useState } from 'react';
import { REVIEWS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Guest Love</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="fill-brand-amber text-brand-amber" />
            ))}
          </div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <Quote className="absolute top-8 left-8 text-brand-coral opacity-30" size={64} />
          
          <div className="min-h-[200px] flex flex-col justify-center items-center text-center">
             <p className="text-xl md:text-2xl italic font-light leading-relaxed mb-8">
               "{REVIEWS[activeIndex].text}"
             </p>
             <div>
               <h4 className="font-display font-bold text-lg tracking-wide">{REVIEWS[activeIndex].name}</h4>
               <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest text-xs">
                 {REVIEWS[activeIndex].platform} • {REVIEWS[activeIndex].date}
               </p>
             </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevReview}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
              aria-label="Previous Review"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="p-3 rounded-full bg-brand-coral hover:bg-red-500 transition-all text-white shadow-lg shadow-brand-coral/20"
              aria-label="Next Review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}