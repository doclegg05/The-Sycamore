import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllProperties, getPropertyBySlug } from '@/lib/properties';

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: property.name,
    description: property.tagline ?? property.seo?.description,
  };
}

export default async function PropertyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const { name, tagline, location, capacity, booking } = property;

  return (
    <>
      <section className="section pt-40">
        <p className="label mb-8">Property No. 01</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink">
          {name}
        </h1>
        {tagline && (
          <p className="mt-10 max-w-2xl text-2xl italic text-charcoal-light font-body">
            {tagline}
          </p>
        )}
        {location && (location.city || location.region) && (
          <p className="label mt-8">
            {[location.city, location.state, location.region].filter(Boolean).join(' · ')}
          </p>
        )}
      </section>

      {capacity && (capacity.bedrooms || capacity.bathrooms || capacity.maxGuests) && (
        <section className="section border-t border-stone-light/30">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {capacity.bedrooms != null && (
              <div>
                <p className="label">Bedrooms</p>
                <p className="font-display text-4xl mt-2">{capacity.bedrooms}</p>
              </div>
            )}
            {capacity.bathrooms != null && (
              <div>
                <p className="label">Bathrooms</p>
                <p className="font-display text-4xl mt-2">{capacity.bathrooms}</p>
              </div>
            )}
            {capacity.maxGuests != null && (
              <div>
                <p className="label">Sleeps</p>
                <p className="font-display text-4xl mt-2">{capacity.maxGuests}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {booking && (booking.airbnb || booking.vrbo || booking.direct || booking.inquiryEnabled) && (
        <section className="section-dark section">
          <p className="label text-gold-bright mb-8">Book Your Stay</p>
          <div className="flex flex-wrap gap-4">
            {booking.direct && (
              <a
                href={booking.direct}
                className="bg-gold text-ink px-8 py-4 font-label text-xs tracking-label hover:bg-gold-bright transition"
              >
                Book Direct
              </a>
            )}
            {booking.airbnb && (
              <a
                href={booking.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-bright text-gold-bright px-8 py-4 font-label text-xs tracking-label hover:bg-gold-bright hover:text-ink transition"
              >
                Airbnb
              </a>
            )}
            {booking.vrbo && (
              <a
                href={booking.vrbo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-bright text-gold-bright px-8 py-4 font-label text-xs tracking-label hover:bg-gold-bright hover:text-ink transition"
              >
                VRBO
              </a>
            )}
            {booking.inquiryEnabled && (
              <a
                href="/contact"
                className="border border-cream text-cream px-8 py-4 font-label text-xs tracking-label hover:bg-cream hover:text-ink transition"
              >
                Inquire
              </a>
            )}
          </div>
        </section>
      )}
    </>
  );
}
