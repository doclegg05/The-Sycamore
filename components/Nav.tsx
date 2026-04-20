import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-stone-light/20">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link href="/" className="font-display text-xl text-ink hover:text-gold transition">
          Spruce Ridge
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><Link href="/" className="label hover:text-gold transition">Home</Link></li>
          <li><Link href="/stay/the-sycamore" className="label hover:text-gold transition">The Sycamore</Link></li>
          <li><Link href="/contact" className="label hover:text-gold transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
