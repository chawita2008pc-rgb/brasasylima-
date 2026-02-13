import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import FAQ from './components/FAQ';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Location />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}