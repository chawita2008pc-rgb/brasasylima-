import { Dish, Review, FAQItem, GalleryItem } from './types';

export const MENU_ITEMS: Dish[] = [
  // Starters
  { id: 's1', name: 'Empanadas Salteñas', description: 'Hand-cut beef, potato, scallions, cumin, baked in clay oven.', price: 2200, category: 'Starters', tags: ['Signature'] },
  { id: 's2', name: 'Provoleta Brasa', description: 'Melted provolone cheese, oregano, chili flakes, roasted red pepper.', price: 3500, category: 'Starters', tags: ['V', 'GF'] },
  { id: 's3', name: 'Chorizo Bombón', description: 'House-made pork sausage, chimichurri rojo, crusty bread.', price: 2800, category: 'Starters' },
  { id: 's4', name: 'Mollejas al Limón', description: 'Crispy sweetbreads, grilled lemon, sea salt.', price: 4200, category: 'Starters', tags: ['GF'] },
  { id: 's5', name: 'Carpaccio de Lomo', description: 'Thinly sliced tenderloin, capers, parmesan, arugula, truffle oil.', price: 4500, category: 'Starters', tags: ['GF'] },
  { id: 's6', name: 'Burrata & Peaches', description: 'Fresh burrata, grilled peaches, basil oil, prosciutto crisp.', price: 4800, category: 'Starters', tags: ['GF'] },
  { id: 's7', name: 'Gambas al Ajillo', description: 'Prawns, garlic, white wine, paprika, parsley.', price: 5200, category: 'Starters', tags: ['Spicy'] },
  { id: 's8', name: 'Ceviche Clásico', description: 'White fish, leche de tigre, red onion, corn, cilantro.', price: 4900, category: 'Starters', tags: ['GF'] },
  
  // Mains
  { id: 'm1', name: 'Ojo de Bife (400g)', description: 'Ribeye steak, 45-day dry-aged, sea salt.', price: 18500, category: 'Mains', tags: ['Signature', 'GF'] },
  { id: 'm2', name: 'Entraña Fina (300g)', description: 'Skirt steak, full flavor, chimichurri.', price: 16500, category: 'Mains', tags: ['GF'] },
  { id: 'm3', name: 'Bife de Chorizo (400g)', description: 'Sirloin strip steak, classic Argentine cut.', price: 17500, category: 'Mains', tags: ['GF'] },
  { id: 'm4', name: 'Asado de Tira', description: 'Short ribs, slow-grilled for 4 hours.', price: 15500, category: 'Mains', tags: ['GF'] },
  { id: 'm5', name: 'Lomo (300g)', description: 'Tenderloin filet, extremely tender, lean.', price: 19500, category: 'Mains', tags: ['GF'] },
  { id: 'm6', name: 'Matambre a la Pizza', description: 'Rose meat, tomato sauce, mozzarella, oregano.', price: 14000, category: 'Mains', tags: ['GF'] },
  { id: 'm7', name: 'Pollo al Limón', description: 'Half boneless chicken, lemon, thyme, garlic butter.', price: 11000, category: 'Mains', tags: ['GF'] },
  { id: 'm8', name: 'Pacú a la Parrilla', description: 'River fish, lemon butter, capers.', price: 13500, category: 'Mains', tags: ['GF'] },
  { id: 'm9', name: 'Salmon Rosado', description: 'Grilled salmon, grilled asparagus, dill cream.', price: 18000, category: 'Mains', tags: ['GF'] },
  { id: 'm10', name: 'Risotto de Hongos', description: 'Arborio rice, wild mushrooms, truffle oil, parmesan.', price: 12500, category: 'Mains', tags: ['V'] },
  { id: 'm11', name: 'Sorrentinos de Calabaza', description: 'Handmade pasta, roasted pumpkin, mozzarella, sage butter.', price: 11500, category: 'Mains', tags: ['V'] },
  { id: 'm12', name: 'Lamb Rack', description: 'Patagonian lamb, mint chimichurri, roasted garlic.', price: 21000, category: 'Mains', tags: ['GF'] },
  { id: 'm13', name: 'Bondiola Braised', description: 'Pork shoulder, beer braised, sweet potato mash.', price: 13000, category: 'Mains' },
  { id: 'm14', name: 'Brasa Burger', description: 'Double beef patty, provoleta, caramelized onion, brioche.', price: 9500, category: 'Mains' },
  { id: 'm15', name: 'Veggie Grill Platter', description: 'Seasonal vegetables, halloumi, romesco sauce.', price: 10500, category: 'Mains', tags: ['V', 'GF'] },

  // Sides
  { id: 'sd1', name: 'Papas Fritas Provenzal', description: 'French fries, garlic, parsley.', price: 3500, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd2', name: 'Puré de Papa', description: 'Creamy mashed potatoes, chives.', price: 3200, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd3', name: 'Batatas al Plomo', description: 'Roasted sweet potatoes, honey, cinnamon.', price: 3400, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd4', name: 'Ensalada Mixta', description: 'Lettuce, tomato, onion, vinaigrette.', price: 2800, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd5', name: 'Grilled Vegetables', description: 'Zucchini, eggplant, peppers, onions.', price: 3800, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd6', name: 'Arroz con Azafrán', description: 'Saffron rice, peas.', price: 3000, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd7', name: 'Spinach Cream', description: 'Creamed spinach, parmesan gratin.', price: 3600, category: 'Sides', tags: ['V'] },
  { id: 'sd8', name: 'Huevo Frito (2)', description: 'Fried eggs, sea salt.', price: 1500, category: 'Sides', tags: ['V', 'GF'] },

  // Desserts
  { id: 'd1', name: 'Flan Casero', description: 'Traditional custard, dulce de leche, whipped cream.', price: 4200, category: 'Desserts', tags: ['Signature', 'V', 'GF'] },
  { id: 'd2', name: 'Panqueque DDL', description: 'Crêpe filled with warm dulce de leche, burnt sugar.', price: 4500, category: 'Desserts', tags: ['V'] },
  { id: 'd3', name: 'Volcán de Chocolate', description: 'Molten chocolate cake, vanilla ice cream.', price: 5200, category: 'Desserts', tags: ['V'] },
  { id: 'd4', name: 'Don Pedro', description: 'Vanilla ice cream, walnuts, whiskey.', price: 4800, category: 'Desserts', tags: ['V'] },
  { id: 'd5', name: 'Queso y Dulce', description: 'Fresu & Batata cheese platter.', price: 3900, category: 'Desserts', tags: ['V', 'GF'] },
  { id: 'd6', name: 'Tiramisu', description: 'Mascarpone, coffee soaked ladyfingers, cocoa.', price: 4600, category: 'Desserts', tags: ['V'] },
  { id: 'd7', name: 'Helado Artesanal', description: 'Two scoops of artisanal gelato.', price: 3500, category: 'Desserts', tags: ['V', 'GF'] },

  // Drinks
  { id: 'dr1', name: 'Malbec Reserva', description: 'Catena Zapata, glass.', price: 5500, category: 'Drinks' },
  { id: 'dr2', name: 'Fernet con Coca', description: 'The Argentine classic. 70/30.', price: 4200, category: 'Drinks' },
  { id: 'dr3', name: 'Caipirinha', description: 'Cachaça, lime, sugar.', price: 4000, category: 'Drinks' },
  { id: 'dr4', name: 'Old Fashioned', description: 'Bourbon, bitters, sugar, orange peel.', price: 4800, category: 'Drinks' },
  { id: 'dr5', name: 'Aperol Spritz', description: 'Prosecco, Aperol, soda, orange.', price: 4500, category: 'Drinks' },
  { id: 'dr6', name: 'Gin Tonic Botánico', description: 'Craft gin, rosemary, pink pepper, tonic.', price: 4600, category: 'Drinks' },
  { id: 'dr7', name: 'Craft Beer IPA', description: 'Local brewery draft pint.', price: 3200, category: 'Drinks' },
  { id: 'dr8', name: 'Limonada Menta', description: 'Fresh lemonade, ginger, mint.', price: 2500, category: 'Drinks', tags: ['Signature'] },
  { id: 'dr9', name: 'Agua Mineral', description: 'Still or sparkling.', price: 1800, category: 'Drinks' },
  { id: 'dr10', name: 'Cortado', description: 'Espresso cut with milk.', price: 1500, category: 'Drinks' },
  { id: 'dr11', name: 'Té en Hebras', description: 'Loose leaf tea selection.', price: 1600, category: 'Drinks' },
  { id: 'dr12', name: 'Irish Coffee', description: 'Coffee, whiskey, cream.', price: 4200, category: 'Drinks' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', src: 'https://picsum.photos/800/600?random=1', category: 'Food', alt: 'Signature Ribeye Steak' },
  { id: 'g2', src: 'https://picsum.photos/800/600?random=2', category: 'Interior', alt: 'Main Dining Hall' },
  { id: 'g3', src: 'https://picsum.photos/800/600?random=3', category: 'Bar', alt: 'Craft Cocktails' },
  { id: 'g4', src: 'https://picsum.photos/800/600?random=4', category: 'Food', alt: 'Empanadas' },
  { id: 'g5', src: 'https://picsum.photos/800/600?random=5', category: 'Events', alt: 'Private Dining' },
  { id: 'g6', src: 'https://picsum.photos/800/600?random=6', category: 'Food', alt: 'Chocolate Volcano' },
  { id: 'g7', src: 'https://picsum.photos/800/600?random=7', category: 'Interior', alt: 'Open Kitchen Fire' },
  { id: 'g8', src: 'https://picsum.photos/800/600?random=8', category: 'Bar', alt: 'Wine Selection' },
  { id: 'g9', src: 'https://picsum.photos/800/600?random=9', category: 'Food', alt: 'Fresh Salad' },
  { id: 'g10', src: 'https://picsum.photos/800/600?random=10', category: 'Events', alt: 'Outdoor Patio' },
  { id: 'g11', src: 'https://picsum.photos/800/600?random=11', category: 'Food', alt: 'Grilled Salmon' },
  { id: 'g12', src: 'https://picsum.photos/800/600?random=12', category: 'Interior', alt: 'Cozy Corner' },
  { id: 'g13', src: 'https://picsum.photos/800/600?random=13', category: 'Bar', alt: 'Bartender Mixing' },
  { id: 'g14', src: 'https://picsum.photos/800/600?random=14', category: 'Food', alt: 'Provoleta' },
  { id: 'g15', src: 'https://picsum.photos/800/600?random=15', category: 'Events', alt: 'Live Music Night' },
  { id: 'g16', src: 'https://picsum.photos/800/600?random=16', category: 'Food', alt: 'Plating Detail' },
  { id: 'g17', src: 'https://picsum.photos/800/600?random=17', category: 'Interior', alt: 'Evening Ambiance' },
  { id: 'g18', src: 'https://picsum.photos/800/600?random=18', category: 'Bar', alt: 'Whiskey Collection' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: 'Sofia M.', platform: 'Google', rating: 5, text: 'Best steak in Palermo! The Ojo de Bife was cooked to perfection. Great atmosphere.', date: '2 days ago' },
  { id: 'r2', name: 'John D.', platform: 'TripAdvisor', rating: 5, text: 'Amazing service and the wine list is extensive. Highly recommend the sweetbreads.', date: '1 week ago' },
  { id: 'r3', name: 'Valentina R.', platform: 'Yelp', rating: 4.5, text: 'Lovely place for a date night. Cocktails are top notch.', date: '2 weeks ago' },
  { id: 'r4', name: 'Lucas P.', platform: 'Google', rating: 5, text: 'The flan is a must-try. Reminded me of my grandmother\'s recipe.', date: '3 weeks ago' },
  { id: 'r5', name: 'Emily W.', platform: 'TripAdvisor', rating: 5, text: 'Came here on vacation and it was the highlight of our trip. Beautiful decor.', date: '1 month ago' },
  { id: 'r6', name: 'Carlos T.', platform: 'Google', rating: 5, text: 'Impeccable attention to detail. The dry-aged cuts are worth every peso.', date: '1 month ago' },
];

export const FAQS: FAQItem[] = [
  { id: 'f1', question: 'Do I need a reservation?', answer: 'Reservations are highly recommended, especially on weekends. You can book directly via WhatsApp.' },
  { id: 'f2', question: 'Do you offer vegetarian or vegan options?', answer: 'Yes, we have a variety of vegetarian starters, mains (like our pasta and risottos), and sides. Vegan options are available upon request.' },
  { id: 'f3', question: 'Is the meat gluten-free?', answer: 'Yes, all our grilled meats are gluten-free. We take cross-contamination very seriously.' },
  { id: 'f4', question: 'Do you host private events?', answer: 'Absolutely. We have a private dining area for groups up to 20 people. Contact us for menus.' },
  { id: 'f5', question: 'Is there parking available?', answer: 'Street parking is available in Palermo. There are also several paid parking lots within 2 blocks.' },
  { id: 'f6', question: 'What is the dress code?', answer: 'Smart casual. We want you to feel comfortable but elegant.' },
  { id: 'f7', question: 'Are pets allowed?', answer: 'We are pet-friendly in our outdoor seating area.' },
  { id: 'f8', question: 'Do you accept credit cards?', answer: 'Yes, we accept all major credit cards and debit cards.' },
  { id: 'f9', question: 'Is the restaurant wheelchair accessible?', answer: 'Yes, our main dining room and restrooms are fully accessible.' },
  { id: 'f10', question: 'Do you offer corkage?', answer: 'Yes, corkage fee is available if you wish to bring a special vintage not on our list.' },
];