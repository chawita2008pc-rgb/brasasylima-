import { Dish, Review, FAQItem, GalleryItem } from './types';

export const MENU_ITEMS: Dish[] = [
  // Entradas
  { id: 's1', name: 'Empanadas Salteñas', description: 'Carne picada a cuchillo, papa, cebolla de verdeo, comino, horneadas en horno de barro.', price: 2200, category: 'Starters', tags: ['Signature'] },
  { id: 's2', name: 'Provoleta Brasa', description: 'Queso provolone fundido, orégano, ají molido, morrón asado.', price: 3500, category: 'Starters', tags: ['V', 'GF'] },
  { id: 's3', name: 'Chorizo Bombón', description: 'Chorizo casero de cerdo, chimichurri rojo, pan crocante.', price: 2800, category: 'Starters' },
  { id: 's4', name: 'Mollejas al Limón', description: 'Mollejas crocantes, limón a la parrilla, sal marina.', price: 4200, category: 'Starters', tags: ['GF'] },
  { id: 's5', name: 'Carpaccio de Lomo', description: 'Lomo finamente laminado, alcaparras, parmesano, rúcula, aceite de trufa.', price: 4500, category: 'Starters', tags: ['GF'] },
  { id: 's6', name: 'Burrata & Duraznos', description: 'Burrata fresca, duraznos a la parrilla, aceite de albahaca, prosciutto crocante.', price: 4800, category: 'Starters', tags: ['GF'] },
  { id: 's7', name: 'Gambas al Ajillo', description: 'Langostinos, ajo, vino blanco, pimentón, perejil.', price: 5200, category: 'Starters', tags: ['Spicy'] },
  { id: 's8', name: 'Ceviche Clásico', description: 'Pescado blanco, leche de tigre, cebolla morada, choclo, cilantro.', price: 4900, category: 'Starters', tags: ['GF'] },

  // Principales
  { id: 'm1', name: 'Ojo de Bife (400g)', description: 'Bife de ojo, madurado en seco 45 días, sal marina.', price: 18500, category: 'Mains', tags: ['Signature', 'GF'] },
  { id: 'm2', name: 'Entraña Fina (300g)', description: 'Entraña fina, sabor intenso, chimichurri.', price: 16500, category: 'Mains', tags: ['GF'] },
  { id: 'm3', name: 'Bife de Chorizo (400g)', description: 'Bife de chorizo, corte clásico argentino.', price: 17500, category: 'Mains', tags: ['GF'] },
  { id: 'm4', name: 'Asado de Tira', description: 'Costilla de res, asada lentamente por 4 horas.', price: 15500, category: 'Mains', tags: ['GF'] },
  { id: 'm5', name: 'Lomo (300g)', description: 'Filete de lomo, extremadamente tierno y magro.', price: 19500, category: 'Mains', tags: ['GF'] },
  { id: 'm6', name: 'Matambre a la Pizza', description: 'Matambre, salsa de tomate, mozzarella, orégano.', price: 14000, category: 'Mains', tags: ['GF'] },
  { id: 'm7', name: 'Pollo al Limón', description: 'Medio pollo deshuesado, limón, tomillo, manteca de ajo.', price: 11000, category: 'Mains', tags: ['GF'] },
  { id: 'm8', name: 'Pacú a la Parrilla', description: 'Pescado de río, manteca al limón, alcaparras.', price: 13500, category: 'Mains', tags: ['GF'] },
  { id: 'm9', name: 'Salmón Rosado', description: 'Salmón a la parrilla, espárragos asados, crema de eneldo.', price: 18000, category: 'Mains', tags: ['GF'] },
  { id: 'm10', name: 'Risotto de Hongos', description: 'Arroz arborio, hongos silvestres, aceite de trufa, parmesano.', price: 12500, category: 'Mains', tags: ['V'] },
  { id: 'm11', name: 'Sorrentinos de Calabaza', description: 'Pasta artesanal, calabaza asada, mozzarella, manteca de salvia.', price: 11500, category: 'Mains', tags: ['V'] },
  { id: 'm12', name: 'Rack de Cordero', description: 'Cordero patagónico, chimichurri de menta, ajo asado.', price: 21000, category: 'Mains', tags: ['GF'] },
  { id: 'm13', name: 'Bondiola Braseada', description: 'Paleta de cerdo, braseada en cerveza, puré de batata.', price: 13000, category: 'Mains' },
  { id: 'm14', name: 'Brasa Burger', description: 'Doble medallón de carne, provoleta, cebolla caramelizada, brioche.', price: 9500, category: 'Mains' },
  { id: 'm15', name: 'Parrillada Veggie', description: 'Verduras de estación, halloumi, salsa romesco.', price: 10500, category: 'Mains', tags: ['V', 'GF'] },

  // Guarniciones
  { id: 'sd1', name: 'Papas Fritas Provenzal', description: 'Papas fritas, ajo, perejil.', price: 3500, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd2', name: 'Puré de Papa', description: 'Puré cremoso, ciboulette.', price: 3200, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd3', name: 'Batatas al Plomo', description: 'Batatas asadas, miel, canela.', price: 3400, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd4', name: 'Ensalada Mixta', description: 'Lechuga, tomate, cebolla, vinagreta.', price: 2800, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd5', name: 'Verduras a la Parrilla', description: 'Zucchini, berenjena, morrones, cebollas.', price: 3800, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd6', name: 'Arroz con Azafrán', description: 'Arroz con azafrán, arvejas.', price: 3000, category: 'Sides', tags: ['V', 'GF'] },
  { id: 'sd7', name: 'Crema de Espinaca', description: 'Espinaca cremosa, gratin de parmesano.', price: 3600, category: 'Sides', tags: ['V'] },
  { id: 'sd8', name: 'Huevo Frito (2)', description: 'Huevos fritos, sal marina.', price: 1500, category: 'Sides', tags: ['V', 'GF'] },

  // Postres
  { id: 'd1', name: 'Flan Casero', description: 'Flan tradicional, dulce de leche, crema batida.', price: 4200, category: 'Desserts', tags: ['Signature', 'V', 'GF'] },
  { id: 'd2', name: 'Panqueque DDL', description: 'Crepé relleno de dulce de leche caliente, azúcar quemada.', price: 4500, category: 'Desserts', tags: ['V'] },
  { id: 'd3', name: 'Volcán de Chocolate', description: 'Budín de chocolate fundido, helado de vainilla.', price: 5200, category: 'Desserts', tags: ['V'] },
  { id: 'd4', name: 'Don Pedro', description: 'Helado de vainilla, nueces, whisky.', price: 4800, category: 'Desserts', tags: ['V'] },
  { id: 'd5', name: 'Queso y Dulce', description: 'Tabla de queso fresco y batata.', price: 3900, category: 'Desserts', tags: ['V', 'GF'] },
  { id: 'd6', name: 'Tiramisú', description: 'Mascarpone, vainillas remojadas en café, cacao.', price: 4600, category: 'Desserts', tags: ['V'] },
  { id: 'd7', name: 'Helado Artesanal', description: 'Dos bochas de helado artesanal.', price: 3500, category: 'Desserts', tags: ['V', 'GF'] },

  // Bebidas
  { id: 'dr1', name: 'Malbec Reserva', description: 'Catena Zapata, copa.', price: 5500, category: 'Drinks' },
  { id: 'dr2', name: 'Fernet con Coca', description: 'El clásico argentino. 70/30.', price: 4200, category: 'Drinks' },
  { id: 'dr3', name: 'Caipirinha', description: 'Cachaça, limón, azúcar.', price: 4000, category: 'Drinks' },
  { id: 'dr4', name: 'Old Fashioned', description: 'Bourbon, amargo, azúcar, piel de naranja.', price: 4800, category: 'Drinks' },
  { id: 'dr5', name: 'Aperol Spritz', description: 'Prosecco, Aperol, soda, naranja.', price: 4500, category: 'Drinks' },
  { id: 'dr6', name: 'Gin Tonic Botánico', description: 'Gin artesanal, romero, pimienta rosa, tónica.', price: 4600, category: 'Drinks' },
  { id: 'dr7', name: 'Craft Beer IPA', description: 'Pinta de cerveza artesanal local.', price: 3200, category: 'Drinks' },
  { id: 'dr8', name: 'Limonada Menta', description: 'Limonada fresca, jengibre, menta.', price: 2500, category: 'Drinks', tags: ['Signature'] },
  { id: 'dr9', name: 'Agua Mineral', description: 'Con o sin gas.', price: 1800, category: 'Drinks' },
  { id: 'dr10', name: 'Cortado', description: 'Espresso cortado con leche.', price: 1500, category: 'Drinks' },
  { id: 'dr11', name: 'Té en Hebras', description: 'Selección de tés en hebras.', price: 1600, category: 'Drinks' },
  { id: 'dr12', name: 'Irish Coffee', description: 'Café, whisky, crema.', price: 4200, category: 'Drinks' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', src: 'https://picsum.photos/800/600?random=1', category: 'Comida', alt: 'Ojo de Bife Estrella' },
  { id: 'g2', src: 'https://picsum.photos/800/600?random=2', category: 'Interior', alt: 'Salón Principal' },
  { id: 'g3', src: 'https://picsum.photos/800/600?random=3', category: 'Bar', alt: 'Cócteles Artesanales' },
  { id: 'g4', src: 'https://picsum.photos/800/600?random=4', category: 'Comida', alt: 'Empanadas' },
  { id: 'g5', src: 'https://picsum.photos/800/600?random=5', category: 'Eventos', alt: 'Salón Privado' },
  { id: 'g6', src: 'https://picsum.photos/800/600?random=6', category: 'Comida', alt: 'Volcán de Chocolate' },
  { id: 'g7', src: 'https://picsum.photos/800/600?random=7', category: 'Interior', alt: 'Cocina Abierta con Fuego' },
  { id: 'g8', src: 'https://picsum.photos/800/600?random=8', category: 'Bar', alt: 'Selección de Vinos' },
  { id: 'g9', src: 'https://picsum.photos/800/600?random=9', category: 'Comida', alt: 'Ensalada Fresca' },
  { id: 'g10', src: 'https://picsum.photos/800/600?random=10', category: 'Eventos', alt: 'Terraza al Aire Libre' },
  { id: 'g11', src: 'https://picsum.photos/800/600?random=11', category: 'Comida', alt: 'Salmón a la Parrilla' },
  { id: 'g12', src: 'https://picsum.photos/800/600?random=12', category: 'Interior', alt: 'Rincón Acogedor' },
  { id: 'g13', src: 'https://picsum.photos/800/600?random=13', category: 'Bar', alt: 'Bartender en Acción' },
  { id: 'g14', src: 'https://picsum.photos/800/600?random=14', category: 'Comida', alt: 'Provoleta' },
  { id: 'g15', src: 'https://picsum.photos/800/600?random=15', category: 'Eventos', alt: 'Noche de Música en Vivo' },
  { id: 'g16', src: 'https://picsum.photos/800/600?random=16', category: 'Comida', alt: 'Detalle de Emplatado' },
  { id: 'g17', src: 'https://picsum.photos/800/600?random=17', category: 'Interior', alt: 'Ambiente Nocturno' },
  { id: 'g18', src: 'https://picsum.photos/800/600?random=18', category: 'Bar', alt: 'Colección de Whiskies' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: 'Sofia M.', platform: 'Google', rating: 5, text: '¡El mejor bife de Palermo! El Ojo de Bife estaba cocinado a la perfección. Ambiente increíble.', date: 'Hace 2 días' },
  { id: 'r2', name: 'John D.', platform: 'TripAdvisor', rating: 5, text: 'Servicio impecable y la carta de vinos es extensa. Recomiendo las mollejas sin dudarlo.', date: 'Hace 1 semana' },
  { id: 'r3', name: 'Valentina R.', platform: 'Yelp', rating: 4.5, text: 'Lugar ideal para una cena romántica. Los cócteles son de primer nivel.', date: 'Hace 2 semanas' },
  { id: 'r4', name: 'Lucas P.', platform: 'Google', rating: 5, text: 'El flan es obligatorio. Me recordó a la receta de mi abuela.', date: 'Hace 3 semanas' },
  { id: 'r5', name: 'Emily W.', platform: 'TripAdvisor', rating: 5, text: 'Vine de vacaciones y fue lo mejor del viaje. La decoración es hermosa.', date: 'Hace 1 mes' },
  { id: 'r6', name: 'Carlos T.', platform: 'Google', rating: 5, text: 'Atención al detalle impecable. Los cortes madurados valen cada peso.', date: 'Hace 1 mes' },
];

export const FAQS: FAQItem[] = [
  { id: 'f1', question: '¿Necesito reserva?', answer: 'Las reservas son muy recomendadas, especialmente los fines de semana. Podés reservar directamente por WhatsApp.' },
  { id: 'f2', question: '¿Tienen opciones vegetarianas o veganas?', answer: 'Sí, tenemos una variedad de entradas, principales (como nuestras pastas y risottos) y guarniciones vegetarianas. Las opciones veganas están disponibles bajo pedido.' },
  { id: 'f3', question: '¿La carne es sin gluten?', answer: 'Sí, todas nuestras carnes a la parrilla son sin gluten. Tomamos muy en serio la contaminación cruzada.' },
  { id: 'f4', question: '¿Organizan eventos privados?', answer: 'Por supuesto. Contamos con un salón privado para grupos de hasta 20 personas. Contáctenos para ver los menús.' },
  { id: 'f5', question: '¿Hay estacionamiento disponible?', answer: 'Hay estacionamiento en la calle en Palermo. También hay varios estacionamientos pagos a menos de 2 cuadras.' },
  { id: 'f6', question: '¿Cuál es el código de vestimenta?', answer: 'Casual elegante. Queremos que te sientas cómodo pero presentable.' },
  { id: 'f7', question: '¿Se permiten mascotas?', answer: 'Somos pet-friendly en nuestra zona de mesas al aire libre.' },
  { id: 'f8', question: '¿Aceptan tarjetas de crédito?', answer: 'Sí, aceptamos todas las tarjetas de crédito y débito principales.' },
  { id: 'f9', question: '¿El restaurante es accesible para sillas de ruedas?', answer: 'Sí, nuestro salón principal y los baños son completamente accesibles.' },
  { id: 'f10', question: '¿Ofrecen descorche?', answer: 'Sí, el descorche está disponible si deseas traer una botella especial que no figure en nuestra carta.' },
];
