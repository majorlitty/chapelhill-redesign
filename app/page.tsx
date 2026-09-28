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
import { Search, SlidersHorizontal, ArrowUpRight, MapPin, Building, DollarSign } from 'lucide-react';

export default function HomePage() {
  const [propertyModalOpen, setPropertyModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [selectedPropertyForBooking, setSelectedPropertyForBooking] = useState('Ivy Homes Abijo GRA');

  // Quick search filter state
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Developments');
  const [selectedBudget, setSelectedBudget] = useState('All Stages');

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

      {/* Interactive Quick Discovery Strip */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-8 mb-6 relative z-30">
        <div className="bg-white/95 hover:bg-white backdrop-blur-xl border border-stone-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_12px_36px_rgba(22,37,33,0.08)] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            
            {/* Location selector */}
            <div className="w-full md:w-1/3 flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100 md:border-transparent">
              <div className="w-9 h-9 rounded-xl bg-[#C0E8F9] text-[#162521] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#461313]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#162521]/60">
                  Location
                </p>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent text-base sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer w-full truncate py-1 touch-manipulation"
                >
                  <option value="All Locations">All Locations</option>
                  <option value="Abijo GRA, Lagos">Abijo GRA, Lagos</option>
                  <option value="Ogudu GRA, Lagos">Ogudu GRA, Lagos</option>
                  <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200 shrink-0" />

            {/* Property Type */}
            <div className="w-full md:w-1/3 flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100 md:border-transparent">
              <div className="w-9 h-9 rounded-xl bg-[#D64933]/15 text-[#D64933] flex items-center justify-center shrink-0">
                <Building className="w-4 h-4 text-[#D64933]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#162521]/60">
                  Estate Type
                </p>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-transparent text-base sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer w-full truncate py-1 touch-manipulation"
                >
                  <option value="All Developments">All Developments</option>
                  <option value="Apartment Community">Apartment Community (1, 2 & 3 Bed)</option>
                  <option value="Master Penthouse">5-Bed Penthouse + Service Room</option>
                  <option value="Luxury Residential Development">18-Unit Prime Development (866sqm)</option>
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200 shrink-0" />

            {/* Status & Search CTA */}
            <div className="w-full md:w-1/3 flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center justify-between gap-3 px-3 py-2.5 md:py-0 border border-stone-100 md:border-transparent rounded-xl">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#461313]/10 text-[#461313] flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4 text-[#461313]" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#162521]/60">
                    Project Status
                  </p>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="bg-transparent text-base sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer w-full truncate py-1 touch-manipulation"
                  >
                    <option value="All Stages">All Project Stages</option>
                    <option value="Completed">Completed • Ready to Move</option>
                    <option value="Currently Ongoing">Currently Ongoing • Off-Plan</option>
                  </select>
                </div>
              </div>

              {/* Search Trigger with Primary #461313 and Hover #D64933 */}
              <button
                onClick={scrollToFeatured}
                id="search-estates-button"
                className="w-full sm:w-auto bg-[#461313] hover:bg-[#D64933] active:scale-[0.98] text-white px-5 py-3 sm:p-3 rounded-xl sm:rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer shrink-0 min-h-[48px] touch-manipulation"
                aria-label="View Available Properties"
              >
                <Search className="w-4 h-4" />
                <span className="sm:hidden text-xs font-semibold">Search Properties</span>
              </button>
            </div>

          </div>
        </div>
      </section>

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
