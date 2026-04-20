import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const marqueeItems = [
  'Short-term rental',
  'Est. 2026',
  'Spruce Ridge Lodge',
  'West Virginia',
  'Property № 01',
  'The Sycamore',
];

const triptych = [
  {
    src: '/photos/Indoor Fireplace.jpeg',
    alt: 'The Sycamore — indoor fireplace',
    caption: 'Interior · №01',
  },
  {
    src: '/photos/Outdoor Kitchen with Stone Fireplace.jpg',
    alt: 'The Sycamore — outdoor kitchen with stone fireplace',
    caption: 'Outdoor Kitchen · №02',
  },
  {
    src: '/photos/Hottub.jpg',
    alt: 'The Sycamore — hot tub',
    caption: 'Hot Tub · №03',
  },
];

const amenities = [
  'Built around a living sycamore',
  'Hot tub',
  'Outdoor kitchen · stone fireplace',
  'Indoor fireplace',
  'Full kitchen',
  'WiFi',
  'Private parking',
  'Snow-season access',
];

export default function HomePage() {
  return (
    <>
      {/* ────────────── HERO — SPLIT GRID ────────────── */}
      <section className="relative grid grid-cols-1 md:grid-cols-[45%_55%] min-h-screen md:h-screen md:max-h-[900px]">
        <div className="relative z-[2] flex flex-col justify-end px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-28">
          <p className="label fade-up mb-8" style={{ animationDelay: '0.3s' }}>
            Issue 001 · Est. 2026
          </p>
          <h1 className="font-display text-[clamp(56px,7vw,100px)] leading-[0.95] text-cream font-normal">
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
            A short-term rental shaped around the tree it was built for.
            A stay with deliberate detail, near Summersville Lake, West Virginia.
          </p>
          <p
            className="label-muted mt-14 md:mt-20 fade-up"
            style={{ animationDelay: '1s' }}
          >
            A Spruce Ridge Lodge property
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
      <section className="border-y border-ink-elevated py-5 overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-16 flex-shrink-0">
              <span className="font-display italic text-stone text-sm">{item}</span>
              <span className="text-gold-dark" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ────────────── EDITORIAL №01 — STORY ────────────── */}
      <section id="story" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="relative bg-ink-warm px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center">
          <Reveal>
            <span className="gold-bar mb-8" />
            <p className="label mb-8">The Property · №01</p>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-cream font-normal leading-[1.15] mb-8 balance">
              A house shaped around <em className="italic text-gold">a tree.</em>
            </h2>
            <div className="font-body text-[15px] text-cream/65 leading-[1.9] max-w-md space-y-5 pretty">
              <p>
                The Sycamore was built around the kind of detail you usually only
                find in old stories — a full-grown tree held within the walls,
                a roof framed to welcome it.
              </p>
              <p>
                The space is designed for stays that feel considered: warm
                materials, thoughtful light, and the quiet that comes from being
                somewhere with care in every decision.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
          <Image
            src="/photos/Tree Feature.jpeg"
            alt="The Sycamore — tree feature inside the house"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-[1.04]"
          />
          <span
            className="absolute top-8 right-8 font-display text-gold/20 text-[72px] leading-none pointer-events-none"
            aria-hidden="true"
          >
            01
          </span>
        </div>
      </section>

      {/* ────────────── TRIPTYCH GALLERY ────────────── */}
      <section id="gallery" className="bg-ink py-[3px] px-[3px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
          {triptych.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 120}
              className="relative h-[50vh] md:h-[60vh] overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale-[30%] contrast-[1.1] transition-all duration-[800ms] ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-6 left-6 label text-gold translate-y-3 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────── PULL QUOTE ────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-36 max-w-[1100px] mx-auto text-center">
        <Reveal>
          <span className="block font-display text-gold text-4xl mb-10" aria-hidden="true">—</span>
          <blockquote className="font-display italic text-[clamp(28px,3.5vw,44px)] text-cream leading-[1.4] font-normal balance">
            The sycamore came first.
            <br />
            The house <span className="text-gold">grew around it.</span>
          </blockquote>
          <p className="label-muted mt-10">The Property · Est. 2026</p>
        </Reveal>
      </section>

      {/* ────────────── EDITORIAL №02 — LOCATION ────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="relative overflow-hidden min-h-[400px] md:min-h-0 order-2 md:order-1">
          <Image
            src="/photos/Summersville Lake_Surrounding Area.jpg"
            alt="Summersville Lake — the surrounding area"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-[1.04]"
          />
          <span
            className="absolute top-8 left-8 font-display text-gold/20 text-[72px] leading-none pointer-events-none"
            aria-hidden="true"
          >
            02
          </span>
        </div>

        <div className="relative bg-ink-warm px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center order-1 md:order-2">
          <Reveal>
            <span className="gold-bar mb-8" />
            <p className="label mb-8">The Setting · №02</p>
            <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-cream font-normal leading-[1.15] mb-8 balance">
              Near <em className="italic text-gold">Summersville Lake</em>, in the West Virginia hills.
            </h2>
            <div className="font-body text-[15px] text-cream/65 leading-[1.9] max-w-md space-y-5 pretty mb-10">
              <p>
                The Sycamore sits in a part of the state where the hills slow
                everything down. Exact address shared with confirmed guests.
              </p>
              <p>
                A short drive to the lake, the New River Gorge, and the quiet
                small towns of central Appalachia.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 list-none">
              {amenities.map((item, i) => (
                <li key={item} className="flex items-baseline gap-3 border-b border-ink-elevated pb-2">
                  <span className="label text-gold-dark text-[9px] w-4">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-body text-[13px] text-cream/80">{item}</span>
                </li>
              ))}
            </ul>
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
