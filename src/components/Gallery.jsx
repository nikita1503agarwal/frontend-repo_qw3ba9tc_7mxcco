import React, { useMemo, useState } from 'react';

const items = [
  { id: 1, title: 'Chibi Adventurer', category: 'character', img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Neon Alley', category: 'background', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Speed Lines', category: 'motion', img: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Mage Girl', category: 'character', img: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Sunset Rooftop', category: 'background', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Action Cut', category: 'motion', img: 'https://images.unsplash.com/photo-1517814077560-156a9b1a8d2a?q=80&w=1200&auto=format&fit=crop' },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'character', label: 'Character Design' },
  { key: 'background', label: 'Background Art' },
  { key: 'motion', label: 'Motion Frames' },
];

const Gallery = () => {
  const [active, setActive] = useState('all');
  const filtered = useMemo(() => (active === 'all' ? items : items.filter(i => i.category === active)), [active]);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Gallery</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-3 py-1.5 text-sm rounded-full border transition ${active === cat.key ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white border-transparent' : 'bg-white/80 dark:bg-neutral-900/70 text-neutral-800 dark:text-neutral-200 border-white/30 dark:border-white/10'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(item => (
            <figure key={item.id} className="group rounded-2xl overflow-hidden bg-white/80 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-4 text-sm text-neutral-700 dark:text-neutral-300">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
