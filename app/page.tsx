import Link from 'next/link';
import { getAllProperties } from '@/lib/properties';

export default function HomePage() {
  const properties = getAllProperties().filter((p) => p.status === 'active');
  const featured = properties[0];

  return (
    <>
      <section className="section pt-40">
        <p className="label mb-8">Issue 001 — Est. 2026</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink">
          Spruce Ridge
          <br />
          <em className="italic text-gold">Properties</em>
        </h1>
        <p className="mt-10 max-w-xl text-xl text-charcoal-light">
          A small, growing collection of places to stay — each one chosen, shaped,
          and looked after by hand.
        </p>
      </section>

      {featured && (
        <section className="section-dark section">
          <p className="label text-gold-bright mb-8">Property No. 01</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream">{featured.name}</h2>
          {featured.tagline && (
            <p className="mt-6 text-xl text-cream/80 max-w-2xl italic font-body">
              {featured.tagline}
            </p>
          )}
          <Link
            href={`/stay/${featured.slug}`}
            className="label inline-block mt-12 pb-2 border-b border-gold-bright text-gold-bright hover:text-gold-glow hover:border-gold-glow transition"
          >
            Visit the property →
          </Link>
        </section>
      )}
    </>
  );
}
