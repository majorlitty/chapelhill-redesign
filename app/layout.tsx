import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#461313',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
  icons: {
    icon: '/Chapelhill-Company-Logo.png',
    apple: '/Chapelhill-Company-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakarta.variable} overflow-x-hidden scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FEFCFD] text-[#162521] selection:bg-[#461313] selection:text-white overflow-x-hidden min-h-screen w-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

