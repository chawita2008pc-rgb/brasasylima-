import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(GALLERY_ITEMS[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">The Experience</h2>
          <p className="text-brand-gray">A glimpse into our world of flavor and design.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item)}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative"
            >
              <img 
                src={item.src} 
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl animate-slide-up"
          />

          <div className="absolute bottom-8 left-0 w-full text-center text-white/90 font-medium text-lg">
            {selectedImage.alt}
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}