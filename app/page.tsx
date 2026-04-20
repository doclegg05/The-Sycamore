import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const marqueeItems = [
  'The Sycamore',
  'Spruce Ridge Lodge',
  'Near Summersville Lake',
  'West Virginia',
];

const gallery = [
  { src: '/photos/Title Shot of Cabin.jpg', alt: 'The Sycamore — cabin exterior', span: 'md:col-span-2 md:row-span-2' },
  { src: '/photos/Title Shot window to outside.jpg', alt: 'The Sycamore — interior looking out' },
  { src: '/photos/Bedroom 1.jpeg', alt: 'The Sycamore — bedroom' },
  { src: '/photos/Indoor Fireplace.jpeg', alt: 'The Sycamore — indoor fireplace', span: 'md:col-span-2' },
  { src: '/photos/Outdoor Kitchen with Stone Fireplace.jpg', alt: 'The Sycamore — outdoor kitchen with stone fireplace' },
  { src: '/photos/Hottub.jpg', alt: 'The Sycamore — hot tub' },
];

const amenities = [
  'Built around a living sycamore',
  'Hot tub',
  'Outdoor kitchen · stone fireplace',
  'Indoor fireplace',
  'Full kitchen',
  'WiFi',
  'Climate control',
  'Private parking',
];

export default function HomePage() {
  return (
    <>
      {/* ────────────── HERO ────────────── */}
      <section className="relative grid grid-cols-1 md:grid-cols-[45%_55%] min-h-screen md:h-screen md:max-h-[900px]">
        <div className="relative z-[2] flex flex-col justify-end px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-28">
          <p className="label fade-up mb-8" style={{ animationDelay: '0.3s' }}>
            A Spruce Ridge Lodge property
          </p>
          <h1 className="font-display text-[clamp(56px,7vw,104px)] leading-[0.92] text-cream font-normal">
            <span className="title-line">
              <span className="title-line-inner">The</span>
            </span>
            <span className="title-line">
              <span className="title-line-inner">
                <em className="italic text-gold">Sycamore</em>
              </span>
            </span>
          </h1>
          <p
            className="fade-up font-body text-[15px] md:text-base text-cream/65 max-w-sm mt-8 md:mt-10 leading-[1.75]"
            style={{ animationDelay: '0.8s' }}
          >
            A short-term rental in the hills near Summersville Lake, West Virginia.
          </p>
        </div>

        <div className="relative overflow-hidden min-h-[300px] md:min-h-0">
          <Image
            src="/photos/Title shot with Sycamore tree.jpg"
            alt="The Sycamore — the tree at the heart of the house"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/10 to-transparent md:from-ink md:via-transparent md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent md:hidden" />
        </div>

        <div
          className="hidden md:flex absolute bottom-20 right-12 z-[3] flex-col items-center gap-3 label-muted text-[9px]"
          style={{ writingMode: 'vertical-rl' }}
          aria-hidden="true"
        >
          Scroll
          <span className="block w-[1px] h-10 bg-gold-dark pulse-line" />
        </div>
      </section>

      {/* ────────────── MARQUEE ────────────── */}
      <section className="border-y border-ink-elevated py-5 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-20 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-20 flex-shrink-0">
              <span className="font-display italic text-stone text-sm">{item}</span>
              <span className="text-gold-dark">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ────────────── STORY ────────────── */}
      <section id="story" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="relative bg-ink-warm px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center">
          <Reveal>
            <span className="gold-bar mb-8" />
            <p className="label mb-8">The Story</p>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-cream font-normal leading-[1.1] mb-8 balance">
              A house built <em className="italic text-gold">around a tree.</em>
            </h2>
            <div className="font-body text-[15px] text-cream/65 leading-[1.9] max-w-md space-y-5 pretty">
              <p>
                The sycamore came first. The house grew around it — the roof
                framed to welcome it, the walls shaped to hold it.
              </p>
              <p>
                What that means for a stay is harder to describe. Warm materials,
                thoughtful light, and the quiet that comes from being somewhere
                with care in every decision.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
          <Image
            src="/photos/Tree Feature.jpeg"
            alt="The Sycamore — the tree inside the house"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-[1.04]"
          />
        </div>
      </section>

      {/* ────────────── GALLERY ────────────── */}
      <section id="gallery" className="bg-ink border-t border-ink-elevated">
        <div className="px-6 md:px-12 pt-20 md:pt-28 pb-12 max-w-[1800px] mx-auto">
          <Reveal>
            <p className="label mb-4">The Property</p>
            <h2 className="font-display text-[clamp(32px,3.5vw,48px)] text-cream font-normal leading-[1.05] balance">
              A walk through <em className="italic text-gold">The Sycamore.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] auto-rows-[200px] md:auto-rows-[300px] px-[3px] pb-[3px]">
          {gallery.map((img, i) => {
            const isWide = img.span?.includes('col-span-2');
            return (
              <Reveal
                key={img.src}
                delay={i * 80}
                className={`relative overflow-hidden group ${img.span ?? ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={isWide ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ────────────── STAY (amenities) ────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <span className="gold-bar mb-8" />
          <p className="label mb-4">The Stay</p>
          <h2 className="font-display text-[clamp(32px,3.5vw,48px)] text-cream font-normal leading-[1.05] mb-16 balance">
            Small details, <em className="italic text-gold">deliberately chosen.</em>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 list-none">
          {amenities.map((item, i) => (
            <Reveal key={item} delay={i * 40} as="li">
              <div className="flex items-baseline gap-6 border-b border-ink-elevated py-5">
                <span className="label text-gold-dark text-[10px] w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-body text-base md:text-lg text-cream/85">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={400}>
          <p className="label-muted italic mt-10 opacity-70">
            Sleeps [TBD] · minimum stay [TBD] — confirmed with booking
          </p>
        </Reveal>
      </section>

      {/* ────────────── LOCATION ────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] border-t border-ink-elevated">
        <div className="relative overflow-hidden min-h-[400px] md:min-h-0 order-2 md:order-1">
          <Image
            src="/photos/Summersville Lake_Surrounding Area.jpg"
            alt="Summersville Lake — the surrounding area"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-[1.04]"
          />
        </div>

        <div className="relative bg-ink-warm px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center order-1 md:order-2">
          <Reveal>
            <span className="gold-bar mb-8" />
            <p className="label mb-8">The Setting</p>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-cream font-normal leading-[1.1] mb-8 balance">
              Near <em className="italic text-gold">Summersville Lake.</em>
            </h2>
            <div className="font-body text-[15px] text-cream/65 leading-[1.9] max-w-md space-y-5 pretty">
              <p>
                The hills of central West Virginia — close to the lake, within
                reach of the New River Gorge, and a short drive from the small
                towns that still feel like a slower version of the country.
              </p>
              <p className="label-muted text-[10px] italic opacity-70">
                Exact address shared with confirmed guests.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section
        id="book"
        className="relative text-center px-6 md:px-12 py-28 md:py-36 border-t border-ink-elevated overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,67,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <Reveal>
          <p className="label mb-8">Reserve</p>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] text-cream font-normal leading-[1.05] mb-4 balance">
            Stay at <em className="italic text-gold">The Sycamore.</em>
          </h2>
          <p className="label-muted mb-12">Booking opens through Airbnb</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              aria-label="Book on Airbnb (link pending)"
              className="group relative overflow-hidden inline-flex items-center justify-center font-body text-sm font-semibold tracking-[0.25em] uppercase text-ink bg-gold px-12 md:px-16 py-5 transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-gold-bright -translate-x-full group-hover:translate-x-0 transition-transform duration-[400ms] ease-out" />
              <span className="relative z-[1]">Book on Airbnb</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-body text-sm font-semibold tracking-[0.25em] uppercase text-gold border border-gold px-12 md:px-16 py-5 hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              Inquire
            </Link>
          </div>
          <p className="label-muted mt-10 opacity-60 italic">
            Airbnb URL pending — placeholder link in place.
          </p>
        </Reveal>
      </section>
    </>
  );
}
