import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* Mobile Bottom Sticky Bar - Optional if we want a full width bar, but floating button is cleaner. 
          Prompt asked for floating button bottom-right min 56px.
      */}
      
      <a
        href="https://wa.me/5491160022197"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#25d366]/40 group"
        aria-label="Book via WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Reserve Table
        </span>
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <MessageCircle size={32} fill="white" className="relative z-10" />
      </a>
    </>
  );
}