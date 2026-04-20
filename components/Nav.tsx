'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-stone-light/20 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 max-w-[1600px] mx-auto">
        <Link
          href="/"
          className={`font-display text-xl md:text-2xl transition-colors ${
            scrolled ? 'text-ink' : 'text-cream'
          } hover:text-gold`}
        >
          Spruce Ridge
        </Link>
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li>
            <a href="#story" className={`label transition-colors ${scrolled ? 'text-charcoal-light' : 'text-cream/80'} hover:text-gold`}>
              The Property
            </a>
          </li>
          <li>
            <a href="#gallery" className={`label transition-colors ${scrolled ? 'text-charcoal-light' : 'text-cream/80'} hover:text-gold`}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#book" className={`label transition-colors ${scrolled ? 'text-charcoal-light' : 'text-cream/80'} hover:text-gold`}>
              Book
            </a>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block w-6 h-[1.5px] transition-all ${
              scrolled ? 'bg-ink' : 'bg-cream'
            } ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all ${
              scrolled ? 'bg-ink' : 'bg-cream'
            } ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all ${
              scrolled ? 'bg-ink' : 'bg-cream'
            } ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>
      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-cream transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 pt-16 list-none">
          <li><a href="#story" onClick={() => setOpen(false)} className="font-display text-3xl text-ink hover:text-gold">The Property</a></li>
          <li><a href="#gallery" onClick={() => setOpen(false)} className="font-display text-3xl text-ink hover:text-gold">Gallery</a></li>
          <li><a href="#book" onClick={() => setOpen(false)} className="font-display text-3xl text-ink hover:text-gold">Book</a></li>
        </ul>
      </div>
    </nav>
  );
}
