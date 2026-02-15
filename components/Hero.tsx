import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#menu');
    if (element) {
      const offset = 80; // Match Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="OMS Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in mt-16">
        <span className="text-brand-amber font-medium tracking-[0.2em] uppercase mb-4 block text-sm md:text-base">
          Palermo, Buenos Aires
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Fuego, Pasión <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-amber">Y Sabor</span>
        </h1>
        <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-elegant italic font-medium tracking-wide">
          Cocina latina moderna donde el arte primitivo del fuego se encuentra con cócteles artesanales contemporáneos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu"
            onClick={handleMenuClick}
            className="bg-brand-coral text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:scale-105 shadow-lg shadow-brand-coral/30 cursor-pointer"
          >
            Ver Menú
          </a>
          <a 
            href="https://wa.me/5491160022197"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all cursor-pointer"
          >
            Reservar Mesa
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={32} className="opacity-70" />
      </div>
    </section>
  );
}