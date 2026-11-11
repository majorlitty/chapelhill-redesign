import type { Metadata, Viewport } from 'next';
import { Outfit, Manrope } from 'next/font/google';
import './globals.css';
import DigitalConcierge from '@/components/DigitalConcierge';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#461313',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Chapelhill Luxury Real Estate',
  description:
    'Find your dream luxury home with Chapelhill. Curated architectural estates, premium locations, and bespoke property advisory.',
  openGraph: {
    title: 'Chapelhill Luxury Real Estate',
    description:
      'Find your dream luxury home with Chapelhill. Curated architectural estates, premium locations, and bespoke property advisory.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapelhill Luxury Real Estate',
    description:
      'Find your dream luxury home with Chapelhill. Curated architectural estates, premium locations, and bespoke property advisory.',
  },
  icons: {
    icon: '/Chapelhill-Company-Logo.png',
    apple: '/Chapelhill-Company-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${manrope.variable} font-sans scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FEFCFD] text-[#162521] selection:bg-[#461313] selection:text-white min-h-full w-full" suppressHydrationWarning>
        {children}
        <DigitalConcierge />
      </body>
    </html>
  );
}

