import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <Gallery />
        <AboutContact />
      </main>
      <footer className="border-t border-white/30 dark:border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Aki Studio — Anime visuals for everyone.</p>
          <div className="text-xs text-neutral-500">SEO-ready • Responsive • Analytics-ready</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
