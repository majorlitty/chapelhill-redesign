'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import PropertyModal from '@/components/PropertyModal';
import BookingModal from '@/components/BookingModal';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  const [propertyModalOpen, setPropertyModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [selectedPropertyForBooking, setSelectedPropertyForBooking] = useState('IVY Heights, Ikate, Lekki Phase 1, Lagos');

  useEffect(() => {
    function handleBookingEvent(e: Event) {
      const customEvent = e as CustomEvent<{ propertyName?: string }>;
      if (customEvent.detail?.propertyName) {
        setSelectedPropertyForBooking(customEvent.detail.propertyName);
      }
      setBookingModalOpen(true);
    }

    window.addEventListener('open-booking-consultation', handleBookingEvent);
    return () => window.removeEventListener('open-booking-consultation', handleBookingEvent);
  }, []);

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
      {/* Top Navigation Overlay */}
      <Navbar
        overlayHero
        onContactClick={() => handleOpenBooking()}
        onExploreClick={scrollToFeatured}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={scrollToAbout}
        onFAQClick={scrollToFAQ}
      />

      {/* Full-Viewport Video Hero Section */}
      <Hero
        onExploreHomes={scrollToFeatured}
        onBookVisit={() => handleOpenBooking()}
      />

      {/* Brief About Us Section */}
      <ScrollReveal yOffset={36} duration={0.8} viewportAmount={0.12}>
        <AboutSection
          onLearnMoreServices={() => setInfoModal('services')}
          onContactClick={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />
      </ScrollReveal>

      {/* Featured Properties Section (Showcasing IVY Heights Ikate Lekki Phase 1 first) */}
      <ScrollReveal yOffset={36} duration={0.8} viewportAmount={0.08}>
        <FeaturedProperties
          onInquireProperty={(propName) => handleOpenBooking(propName)}
          onOpenConsultation={() => handleOpenBooking()}
        />
      </ScrollReveal>

      {/* Frequently Asked Questions Section */}
      <ScrollReveal yOffset={36} duration={0.8} viewportAmount={0.12}>
        <FAQSection
          onContactClick={() => handleOpenBooking()}
        />
      </ScrollReveal>

      {/* Full Integrated Luxury Footer */}
      <ScrollReveal yOffset={20} duration={0.7} viewportAmount={0.05}>
        <Footer
          onExploreClick={scrollToFeatured}
          onServicesClick={() => setInfoModal('services')}
          onAboutClick={scrollToAbout}
          onFAQClick={scrollToFAQ}
          onContactClick={() => handleOpenBooking()}
        />
      </ScrollReveal>

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
        onBookVisit={(topic) => handleOpenBooking(topic)}
      />

      {/* Direct WhatsApp Inquiries Floating Action Button */}
      <WhatsAppFAB />
    </main>
  );
}
