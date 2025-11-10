import React, { useState } from 'react';
import { Instagram, Mail, Image as ImageIcon } from 'lucide-react';

const AboutContact = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return alert('Please enter a valid email');
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50/40 via-pink-50/40 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 shadow-sm mb-3">
              <ImageIcon className="w-4 h-4 text-fuchsia-500" />
              About the Creator
            </span>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Hi, I’m Aki — visual storyteller.</h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Terinspirasi dari anime dan manga, aku mencampur soft gradients dengan cel-shading untuk visual yang vibrant dan ekspresif. Karya-karyaku cocok untuk brand, poster, merch, hingga koleksi pribadi.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Fokus pada character design, background art, dan motion frames — dengan sentuhan chibi dan nuansa Jepang modern.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/30 dark:border-white/10 shadow-xl">
            <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Contact</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">Pesan commission, kolaborasi, atau sekadar say hi.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubscribe} className="bg-white/80 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Newsletter</label>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Dapatkan update rilisan baru & diskon.</p>
              {submitted ? (
                <div className="text-green-600 font-semibold">Terima kasih! Silakan cek email untuk konfirmasi.</div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@otaku.co"
                    className="flex-1 px-4 py-2 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    required
                  />
                  <button type="submit" className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow">
                    Subscribe
                  </button>
                </div>
              )}
            </form>

            <div className="bg-white/80 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Reach me</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@akistudio.art" className="inline-flex items-center gap-2 text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
                  <Mail className="w-4 h-4" /> hello@akistudio.art
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://www.artstation.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
                  <img src="https://images.unsplash.com/photo-1650403684544-3f8910854077?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcnRTdGF0aW9ufGVufDB8MHx8fDE3NjI3NjE4NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="ArtStation" className="w-4 h-4" /> ArtStation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
