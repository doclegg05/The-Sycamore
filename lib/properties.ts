import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PropertyStatus = 'active' | 'coming-soon' | 'archived';

export interface Property {
  slug: string;
  name: string;
  tagline?: string;
  status: PropertyStatus;
  location?: {
    city?: string;
    state?: string;
    region?: string;
    mapEmbedUrl?: string;
  };
  capacity?: {
    bedrooms?: number;
    bathrooms?: number;
    maxGuests?: number;
  };
  stayRules?: {
    minNights?: number;
    checkIn?: string;
    checkOut?: string;
    pets?: string;
  };
  amenities?: Record<string, string[] | Record<string, unknown>>;
  booking?: {
    airbnb?: string;
    vrbo?: string;
    direct?: string;
    inquiryEnabled?: boolean;
    pricingDisplayed?: boolean;
  };
  contact?: {
    email?: string;
    phone?: string;
    formEndpoint?: string;
  };
  images?: {
    hero?: string;
    gallery?: string[];
  };
  seo?: {
    title?: string;
    description?: string;
  };
  /** Raw MDX body content. */
  body: string;
}

const PROPERTIES_DIR = path.join(process.cwd(), 'content', 'properties');

export function getAllProperties(): Property[] {
  if (!fs.existsSync(PROPERTIES_DIR)) return [];
  return fs
    .readdirSync(PROPERTIES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      return loadProperty(slug);
    })
    .filter((p): p is Property => p !== null);
}

export function getPropertyBySlug(slug: string): Property | null {
  return loadProperty(slug);
}

function loadProperty(slug: string): Property | null {
  const filePath = path.join(PROPERTIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    name: data.name ?? slug,
    status: data.status ?? 'active',
    ...data,
    body: content,
  } as Property;
}
