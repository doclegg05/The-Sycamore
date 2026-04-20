import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const gallery = [
  { src: '/photos/IMG_7452.jpeg', alt: 'The Sycamore — interior view', span: 'md:col-span-2 md:row-span-2' },
  { src: '/photos/IMG_7454.jpeg', alt: 'The Sycamore — living space', span: '' },
  { src: '/photos/IMG_7455.jpeg', alt: 'The Sycamore — detail', span: '' },
  { src: '/photos/IMG_7456.jpeg', alt: 'The Sycamore — interior detail', span: 'md:col-span-2' },
  { src: '/photos/IMG_7457.jpeg', alt: 'The Sycamore — view' },
  { src: '/photos/IMG_7458.jpeg', alt: 'The Sycamore — view' },
  { src: '/photos/IMG_7839.jpg', alt: 'The Sycamore — detail', span: 'md:col-span-2' },
  { src: '/photos/IMG_7842.jpg', alt: 'The Sycamore — view' },
  { src: '/photos/IMG_7848.jpg', alt: 'The Sycamore — view' },
];

const amenities = [
  'Built around a living sycamore tree',
  'Sleeps [TBD] guests',
  'Full kitchen',
  'WiFi',
  'Washer & dryer',
  'Climate control',
  'Private parking',
  'Outdoor living space',
];

export default function HomePage() {
  return (
    <>
      {/* ────────────── HERO ────────────── */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <Image
          src="/photos/IMG_7451.jpeg"
          alt="The Sycamore exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 max-w-[1600px] mx-auto">
          <Reveal>
            <p className="label text-gold-bright mb-6">Issue 001 · Est. 2026</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-cream leading-[0.9] text-[clamp(64px,12vw,180px)] font-normal">
              The <em className="italic text-gold-glow">Sycamore</em>
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-8 max-w-xl font-body italic text-xl md:text-2xl text-cream/85">
              A stay shaped around the tree it was built for.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <p className="label text-cream/50 mt-16">A Spruce Ridge Lodge property</p>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
          <span className="label text-[9px]">Scroll</span>
          <span className="block h-10 w-[1px] bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* ────────────── STORY ────────────── */}
      <section id="story" className="section bg-cream">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label text-gold mb-6">The Property</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
              A house
              <br />
              <em className="italic text-gold">with a tree</em>
              <br />
              at the center.
            </h2>
          </Reveal>

          <Reveal delay={200} className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl text-charcoal-light leading-relaxed">
            <p className="font-body italic text-2xl md:text-3xl text-ink leading-[1.25]">
              &ldquo;The sycamore came first. The house grew around it.&rdquo;
            </p>
            <p>
              The Sycamore is a short-term rental built around the kind of detail you
              usually only find in old stories — a full-grown tree held within the walls,
              a roof framed to welcome it.
            </p>
            <p>
              The space is designed for stays that feel considered. Warm materials,
              thoughtful light, and the quiet that comes from being somewhere with
              care in every decision.
            </p>
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto mt-20 md:mt-28 grid grid-cols-3 gap-8 md:gap-16 border-t border-stone-light/40 pt-12">
          {[
            { label: 'Bedrooms', value: '[TBD]' },
            { label: 'Bathrooms', value: '[TBD]' },
            { label: 'Sleeps', value: '[TBD]' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className="label">{stat.label}</p>
              <p className="font-display text-4xl md:text-5xl mt-3 text-ink">{stat.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────── GALLERY ────────────── */}
      <section id="gallery" className="section bg-cream-warm pt-8 md:pt-12">
        <div className="max-w-[1600px] mx-auto">
          <Reveal className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="label text-gold mb-4">The Space</p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1]">
                Every room,
                <br />
                <em className="italic text-gold">its own weather.</em>
              </h2>
            </div>
            <p className="label text-charcoal-light md:text-right">
              {String(gallery.length).padStart(2, '0')} views · The Sycamore
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[260px]">
            {gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 60}
                className={`relative overflow-hidden group ${img.span ?? ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── AMENITIES ────────────── */}
      <section className="section bg-cream">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <p className="label text-gold mb-6">What&apos;s Included</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-14">
              Small details,
              <br />
              <em className="italic text-gold">deliberately chosen.</em>
            </h2>
          </Reveal>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5 list-none">
            {amenities.map((item, i) => (
              <Reveal key={item} delay={i * 50} as="li">
                <div className="flex items-baseline gap-5 border-b border-stone-light/40 pb-4">
                  <span className="label text-gold text-[10px] w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-body text-lg md:text-xl text-ink">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={400}>
            <p className="label text-charcoal-light mt-10 italic">
              Full amenity list finalized with the property owner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────── LOCATION / INTERLUDE ────────────── */}
      <section className="section section-dark">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label text-gold-bright mb-8">Location</p>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1] max-w-4xl">
              Set among
              <br />
              <em className="italic text-gold-glow">the ridges</em> of
              <br />
              [region TBD].
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-12 max-w-2xl font-body text-xl md:text-2xl text-cream/70 italic leading-relaxed">
              Exact location shared with confirmed guests. A short drive to
              [nearby towns/attractions — coming from client].
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────── BOOK ────────────── */}
      <section id="book" className="section section-dark pt-0">
        <div className="max-w-[1200px] mx-auto border-t border-ink-elevated pt-20 md:pt-28">
          <Reveal>
            <p className="label text-gold-bright mb-8">Reserve</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-5xl md:text-7xl text-cream leading-[1]">
              Stay at <em className="italic text-gold-glow">The Sycamore</em>.
            </h2>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-10 max-w-xl font-body text-xl text-cream/70">
              Booking opens through Airbnb. Availability updates from the live calendar.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-16 flex flex-wrap gap-4">
              <a
                href="#"
                aria-label="Book on Airbnb (link pending)"
                className="bg-gold text-ink px-10 py-5 font-label text-xs tracking-label hover:bg-gold-bright transition"
              >
                Book on Airbnb →
              </a>
              <Link
                href="/contact"
                className="border border-gold-bright text-gold-bright px-10 py-5 font-label text-xs tracking-label hover:bg-gold-bright hover:text-ink transition"
              >
                Inquire Directly
              </Link>
            </div>
            <p className="label text-stone mt-8 italic">
              Airbnb URL pending — placeholder link in place.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
