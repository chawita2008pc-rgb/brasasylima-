import React, { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { Dish, Category } from '../types';
import { Flame, Leaf, WheatOff } from 'lucide-react';

const CATEGORIES: Category[] = ['Starters', 'Mains', 'Sides', 'Desserts', 'Drinks'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Starters');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Menu</h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            A culinary journey through Latin America, cooked over open flames using sustainable wood and locally sourced ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 mb-12 pb-4 justify-start md:justify-center px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-brand-dark text-white shadow-lg scale-105'
                  : 'bg-brand-light text-brand-gray hover:bg-gray-200'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 min-h-[400px]">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: Dish }) {
  return (
    <div className="group flex justify-between items-start border-b border-gray-100 pb-6 hover:border-brand-coral/30 transition-colors animate-fade-in">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-xl font-bold text-brand-dark group-hover:text-brand-coral transition-colors">
            {item.name}
          </h3>
          <div className="flex gap-1">
            {item.tags?.includes('Signature') && <Flame size={16} className="text-brand-coral fill-brand-coral" aria-label="Signature Dish" />}
            {item.tags?.includes('V') && <Leaf size={16} className="text-brand-teal" aria-label="Vegetarian" />}
            {item.tags?.includes('GF') && <WheatOff size={16} className="text-brand-amber" aria-label="Gluten Free" />}
          </div>
        </div>
        <p className="text-brand-gray text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="text-right">
        <span className="font-display font-bold text-lg text-brand-dark">
          ${item.price.toLocaleString('es-AR')}
        </span>
      </div>
    </div>
  );
}