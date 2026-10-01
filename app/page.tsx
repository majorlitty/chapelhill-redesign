'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import PropertyModal from '@/components/PropertyModal';
import BookingModal from '@/components/BookingModal';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import FAQSection from '@/components/FAQSection';
import ClosingAdvisoryBanner from '@/components/ClosingAdvisoryBanner';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [propertyModalOpen, setPropertyModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [selectedPropertyForBooking, setSelectedPropertyForBooking] = useState('Ivy Homes Abijo GRA');

  const handleOpenBooking = (propertyName?: string) => {
    if (propertyName) {
      setSelectedPropertyForBooking(propertyName);
    }
    setBookingModalOpen(true);
  };

  const scrollToFeatured = () => {
    const el = document.getElementById('featured-properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPropertyModalOpen(true);
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setInfoModal('about');
    }
  };

  const scrollToFAQ = () => {
    const el = document.getElementById('frequently-asked-questions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onContactClick={() => handleOpenBooking()}
        onExploreClick={scrollToFeatured}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={scrollToAbout}
        onFAQClick={scrollToFAQ}
      />

      {/* Hero Section */}
      <Hero
        onExploreHomes={scrollToFeatured}
        onBookVisit={() => handleOpenBooking()}
      />

      {/* Brief About Us Section */}
      <AboutSection
        onLearnMoreServices={() => setInfoModal('services')}
        onContactClick={() => handleOpenBooking()}
      />

      {/* Featured Properties Section (Showcasing Ivy Homes Abijo GRA, Ogudu GRA, Lekki Phase 1) */}
      <FeaturedProperties
        onInquireProperty={(propName) => handleOpenBooking(propName)}
        onOpenConsultation={() => handleOpenBooking()}
      />

      {/* Frequently Asked Questions Section */}
      <FAQSection
        onContactClick={() => handleOpenBooking()}
      />

      {/* Closing Advisory Banner (Inspired by curved luxury architecture banner) */}
      <ClosingAdvisoryBanner
        onContactClick={() => handleOpenBooking()}
      />

      {/* Full Integrated Luxury Footer blending into the banner bottom */}
      <Footer
        onExploreClick={scrollToFeatured}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={scrollToAbout}
        onFAQClick={scrollToFAQ}
        onContactClick={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <PropertyModal
        isOpen={propertyModalOpen}
        onClose={() => setPropertyModalOpen(false)}
        onBookTour={(propName) => handleOpenBooking(propName)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedPropertyForBooking}
      />

      <InfoDrawer
        isOpen={infoModal !== null}
        type={infoModal}
        onClose={() => setInfoModal(null)}
        onBookVisit={() => handleOpenBooking()}
      />

      {/* Direct WhatsApp Inquiries Floating Action Button */}
      <WhatsAppFAB />
    </main>
  );
}
