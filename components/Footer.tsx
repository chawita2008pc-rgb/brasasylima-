import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl font-bold tracking-tight mb-2">
            BRASAS <span className="text-brand-coral">Y</span> LIMA
          </h3>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Brasas y Lima. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-coral transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-coral transition-colors" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-coral transition-colors" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}