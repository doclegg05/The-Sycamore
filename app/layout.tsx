import type { Metadata } from 'next';
import { Bodoni_Moda, Syne, Space_Mono } from 'next/font/google';
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

const body = Syne({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
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
    default: 'The Sycamore — Spruce Ridge Lodge',
    template: '%s | Spruce Ridge Lodge',
  },
  description: 'A short-term rental shaped around the tree it was built for. A stay with deliberate detail, in the hills of West Virginia.',
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
