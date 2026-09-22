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
import { Search, SlidersHorizontal, ArrowUpRight, Sparkles, MapPin, Building, DollarSign } from 'lucide-react';

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
      <section className="w-full max-w-5xl mx-auto px-6 -mt-4 sm:-mt-8 mb-6 relative z-30">
        <div className="bg-white/90 hover:bg-white backdrop-blur-xl border border-stone-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(22,37,33,0.06)] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Location selector */}
            <div className="w-full md:w-1/3 flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#C0E8F9] text-[#162521] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#461313]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#162521]/60">
                  Location
                </p>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer w-full"
                >
                  <option value="All Locations">All Locations</option>
                  <option value="Abijo GRA, Lagos">Abijo GRA, Lagos</option>
                  <option value="Ogudu GRA, Lagos">Ogudu GRA, Lagos</option>
                  <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200" />

            {/* Property Type */}
            <div className="w-full md:w-1/3 flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#D64933]/15 text-[#D64933] flex items-center justify-center shrink-0">
                <Building className="w-4 h-4 text-[#D64933]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#162521]/60">
                  Estate Type
                </p>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer w-full"
                >
                  <option value="All Developments">All Developments</option>
                  <option value="Apartment Community">Apartment Community (1, 2 & 3 Bed)</option>
                  <option value="Master Penthouse">5-Bed Penthouse + Service Room</option>
                  <option value="Luxury Residential Development">18-Unit Prime Development (866sqm)</option>
                </select>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200" />

            {/* Status & Search CTA */}
            <div className="w-full md:w-1/3 flex items-center justify-between gap-3 pl-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#461313]/10 text-[#461313] flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4 text-[#461313]" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#162521]/60">
                    Project Status
                  </p>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-bold text-[#162521] focus:outline-none cursor-pointer"
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
                className="bg-[#461313] hover:bg-[#D64933] text-white p-3 rounded-xl flex items-center justify-center transition-all hover:scale-105 shadow-md cursor-pointer shrink-0"
                aria-label="View Available Properties"
              >
                <Search className="w-4 h-4" />
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
