import type { Metadata, Viewport } from 'next';
import { Outfit, Manrope } from 'next/font/google';
import './globals.css';
import DigitalConcierge from '@/components/DigitalConcierge';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chapelhill.com.ng'),
  title: 'Property Development & Construction in Nigeria | ChapelHill',
  description:
    'ChapelHill Multicompany Limited provides property development, construction, property management and development partnerships across Nigeria.',
  alternates: {
    canonical: 'https://chapelhill.com.ng/',
  },
  openGraph: {
    title: 'Property Development & Construction in Nigeria | ChapelHill',
    description:
      'ChapelHill Multicompany Limited provides property development, construction, property management and development partnerships across Nigeria.',
    url: 'https://chapelhill.com.ng/',
    siteName: 'ChapelHill Multicompany Limited',
    type: 'website',
    images: [
      {
        url: '/videos/ivy-frame.jpg',
        width: 1920,
        height: 1080,
        alt: 'ChapelHill Multicompany Limited — Property Development & Construction in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Development & Construction in Nigeria | ChapelHill',
    description:
      'ChapelHill Multicompany Limited provides property development, construction, property management and development partnerships across Nigeria.',
    images: ['/videos/ivy-frame.jpg'],
  },
  icons: {
    icon: '/Chapelhill-Company-Logo.png',
    apple: '/Chapelhill-Company-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} font-sans`}>
      <body className="font-sans antialiased bg-[#FEFCFD] text-[#162521] selection:bg-[#461313] selection:text-white min-h-full w-full" suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
          <DigitalConcierge />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

