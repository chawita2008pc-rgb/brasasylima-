import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Bus } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Info Column */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6">Visit Us</h2>
          <p className="text-brand-gray text-lg mb-8 leading-relaxed">
            Nestled in the heart of Palermo Soho, surrounded by vibrant street art and cobblestone streets. 
            Brasa & Lima brings the warmth of a traditional parrilla with a modern, cosmopolitan twist.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-light rounded-full text-brand-coral">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg">Address</h4>
                <p className="text-gray-600">Costa Rica 4000, Palermo Soho</p>
                <p className="text-gray-600">Buenos Aires, C1414</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-light rounded-full text-brand-coral">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg">Opening Hours</h4>
                <div className="grid grid-cols-2 gap-x-8 text-gray-600">
                  <span>Tue - Thu:</span>
                  <span>19:00 - 00:00</span>
                  <span>Fri - Sat:</span>
                  <span>19:00 - 02:00</span>
                  <span>Sun:</span>
                  <span>12:00 - 16:00</span>
                  <span>Mon:</span>
                  <span className="text-brand-coral font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-light rounded-full text-brand-coral">
                <Car size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-lg">Arrival</h4>
                <p className="text-gray-600 text-sm">
                  Valet parking available Fri-Sat. Several paid parking lots on Thames St.
                  <br />
                  <span className="flex items-center gap-1 mt-1"><Bus size={14}/> Bus lines: 34, 39, 55, 111, 166</span>
                </p>
              </div>
            </div>
            
            <div className="pt-6 flex gap-4">
               <a href="mailto:reservations@brasalima.com" className="flex items-center gap-2 text-brand-gray hover:text-brand-coral transition-colors">
                  <Mail size={18} /> reservations@brasalima.com
               </a>
               <a href="tel:+5491160022197" className="flex items-center gap-2 text-brand-gray hover:text-brand-coral transition-colors">
                  <Phone size={18} /> +54 9 11 6002 2197
               </a>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="h-full min-h-[400px] w-full bg-brand-light rounded-2xl overflow-hidden shadow-lg relative group">
          {/* Placeholder Map Image */}
          <img 
            src="https://picsum.photos/800/800?random=map" 
            alt="Map location in Palermo" 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-white/90 px-6 py-3 rounded-lg shadow-xl text-brand-dark font-bold text-center">
               <span className="text-brand-coral">●</span> We are here
             </div>
          </div>
          <a 
            href="https://goo.gl/maps/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-50 transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}