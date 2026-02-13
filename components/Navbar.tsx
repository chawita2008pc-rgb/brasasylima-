import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#root')}
          className="font-display text-2xl font-bold tracking-tight text-brand-dark hover:text-brand-coral transition-colors"
        >
          BRASA <span className="text-brand-coral">&</span> LIMA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-brand-gray hover:text-brand-coral transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5491160022197" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-coral text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-500 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-dark p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-brand-dark py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="https://wa.me/5491160022197" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-coral text-white text-center py-3 rounded-xl font-bold mt-2"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </nav>
  );
}