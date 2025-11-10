import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Aki Studio</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-500 border border-pink-500/30">anime</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-fuchsia-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg shadow-pink-500/30"
          >
            Shop
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
