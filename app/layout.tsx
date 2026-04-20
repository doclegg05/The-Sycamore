import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, Space_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const body = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const label = Space_Mono({
  subsets: ['latin'],
  variable: '--font-label',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Spruce Ridge Properties',
    template: '%s | Spruce Ridge Properties',
  },
  description: 'A curated collection of thoughtfully-designed stays.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${label.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
