'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: isHome ? '#story' : '/#story', label: 'Story' },
    { href: isHome ? '#gallery' : '/#gallery', label: 'Gallery' },
    { href: isHome ? '#book' : '/#book', label: 'Book' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-md border-b border-ink-elevated py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 max-w-[1800px] mx-auto">
        <Link href="/" className="font-display italic text-xl md:text-2xl text-gold hover:text-gold-glow transition-colors">
          Spruce Ridge
          <span className="not-italic font-label text-[9px] tracking-[0.3em] text-stone ml-3 hidden md:inline align-middle">
            LODGE · EST 2026
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label-muted hover:text-gold-bright transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 z-50"
        >
          <span
            className={`block w-6 h-[1.5px] bg-gold transition-all ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gold transition-all ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gold transition-all ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-ink transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-3xl text-cream hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
