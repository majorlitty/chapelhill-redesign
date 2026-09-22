import type {Metadata} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chapelhill — Luxury Real Estate & Architectural Estates',
  description:
    'Explore thoughtfully designed luxury homes in premium locations, crafted to match modern lifestyles with comfort, elegance, and long-term value.',
  openGraph: {
    title: 'Chapelhill — Luxury Real Estate & Architectural Estates',
    description:
      'Explore thoughtfully designed luxury homes in premium locations, crafted to match modern lifestyles with comfort, elegance, and long-term value.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapelhill — Luxury Real Estate & Architectural Estates',
    description:
      'Explore thoughtfully designed luxury homes in premium locations, crafted to match modern lifestyles with comfort, elegance, and long-term value.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-[#FEFCFD] text-[#162521] selection:bg-[#461313] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

