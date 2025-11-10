import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300 via-fuchsia-300 to-indigo-300 opacity-60 pointer-events-none" />

      {/* Decorative chibi/manga character badge */}
      <div className="absolute -top-8 -right-6 rotate-6 hidden md:block">
        <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-white/30 dark:border-white/10 shadow-xl rounded-2xl p-3">
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-indigo-400 flex items-center justify-center">
            <span className="text-4xl">(ᵔᴥᵔ)</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 shadow-sm mb-4">
            <Star className="w-4 h-4 text-fuchsia-500" />
            Vibrant. Colorful. Otaku-friendly.
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            Anime Visuals for Everyone
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-200 text-base md:text-lg">
            Ilustrasi bergaya anime untuk brand, merch, dan kolektor di seluruh dunia. Soft gradients, cel-shading, dan energi Jepang modern.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow"
            >
              <Rocket className="w-5 h-5" /> Browse Shop
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-fuchsia-700 dark:text-fuchsia-300 bg-white/80 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 hover:bg-white transition-colors"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
