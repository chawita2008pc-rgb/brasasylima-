export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Sides' | 'Desserts' | 'Drinks';
  tags?: ('V' | 'GF' | 'Spicy' | 'Signature')[];
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  platform: 'Google' | 'TripAdvisor' | 'Yelp';
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'Food' | 'Interior' | 'Bar' | 'Events';
  alt: string;
}

export type Category = 'All' | 'Starters' | 'Mains' | 'Sides' | 'Desserts' | 'Drinks';