import React from 'react';

const products = [
  { id: 1, title: 'Chibi Hero Pack', price: 12, img: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Manga Cel Bundle', price: 18, img: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e42?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Neon Tokyo Poster', price: 24, img: 'https://images.unsplash.com/photo-1608451643042-423967cd7554?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Background Art Set', price: 15, img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Motion Frames Vol.1', price: 20, img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Character Design Sketches', price: 10, img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop' },
];

const Shop = () => {
  const handleCheckout = (product) => {
    alert(`Checkout placeholder for ${product.title}. Integrate Stripe/Razorpay backend to proceed.`);
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white to-pink-50/50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Shop</h2>
            <p className="text-neutral-700 dark:text-neutral-300">Pilih ilustrasi favoritmu dan dukung kreator.</p>
          </div>
          <a href="#contact" className="text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700">Need custom work?</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative bg-white/80 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-neutral-800 dark:text-neutral-100">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-fuchsia-600 font-semibold">${p.price}</span>
                  <button
                    onClick={() => handleCheckout(p)}
                    className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-md shadow-pink-500/30 hover:shadow-pink-500/50 transition"
                  >
                    Buy
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/0 via-fuchsia-500/10 to-indigo-500/20" />
                <div className="absolute inset-0 ring-2 ring-fuchsia-400/40 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
