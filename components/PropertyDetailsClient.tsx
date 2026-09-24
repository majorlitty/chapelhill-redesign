'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Maximize2,
  CalendarCheck,
  ChevronRight,
  Info,
  Tag,
  Banknote,
  TrendingUp,
  Percent,
  Calendar,
  FileCheck2,
  Lock,
  ChevronLeft,
  X,
  BedDouble,
  Bath,
  Maximize,
  Compass
} from 'lucide-react';
import { Property, getAllProperties } from '@/lib/propertiesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingAdvisoryBanner from '@/components/ClosingAdvisoryBanner';
import BookingModal from '@/components/BookingModal';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface PropertyDetailsClientProps {
  property: Property;
}

export default function PropertyDetailsClient({ property }: PropertyDetailsClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('all');
  const [selectedUnitForInquiry, setSelectedUnitForInquiry] = useState<string | null>(null);

  // Filter gallery images
  const filteredGallery = activeGalleryCategory === 'all' 
    ? property.gallery 
    : property.gallery.filter(img => img.category === activeGalleryCategory || (activeGalleryCategory === 'interior' && ['living', 'bedroom', 'kitchen'].includes(img.category)));

  const otherProperties = getAllProperties().filter(p => p.id !== property.id);

  const openBooking = (unitTitle?: string) => {
    if (unitTitle) {
      setSelectedUnitForInquiry(`${property.name} (${unitTitle})`);
    } else {
      setSelectedUnitForInquiry(property.name);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onContactClick={() => openBooking()}
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={() => {
          window.location.href = '/#about-us';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-20">
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6 text-xs text-stone-500 border-b border-stone-200/60">
          <nav className="flex items-center gap-2" aria-label="Breadcrumb">
            <Link 
              href="/"
              className="hover:text-[#461313] transition-colors font-medium flex items-center gap-1"
            >
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link 
              href="/#featured-properties"
              className="hover:text-[#461313] transition-colors font-medium"
            >
              <span>Featured Properties</span>
            </Link>
            <span>/</span>
            <span className="text-[#162521] font-semibold truncate max-w-[200px] sm:max-w-none">
              {property.name}
            </span>
          </nav>

          <Link
            href="/#featured-properties"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Properties</span>
          </Link>
        </div>

        {/* Hero Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-600 mb-3">
            <span className="font-semibold tracking-wider uppercase text-[#D64933]">
              {property.tagline}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D64933]" />
              {property.location}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-emerald-800">
              {property.statusLabel}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#162521] tracking-tight font-serif">
                {property.name}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
                {property.extendedOverview}
              </p>
            </div>

            {/* Price & Primary CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
              <div className="text-left lg:text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                  Guide Price
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#461313]">
                  {property.financials.startingPrice}
                </span>
                <span className="text-xs text-stone-500 block font-medium">
                  Range: {property.financials.priceRange}
                </span>
              </div>

              <button
                onClick={() => openBooking()}
                id="hero-inquire-reserve-btn"
                className="w-full sm:w-auto bg-[#461313] hover:bg-[#D64933] text-white px-7 py-3.5 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Inquire & Reserve This Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-xs text-stone-500 block">Total Inventory</span>
              <span className="text-base sm:text-lg font-bold text-[#162521]">{property.totalUnits}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-xs text-stone-500 block">Development Stage</span>
              <span className="text-base sm:text-lg font-bold text-[#461313]">{property.financials.handoverTimeline}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-xs text-stone-500 block">Projected Net Yield</span>
              <span className="text-base sm:text-lg font-bold text-emerald-700">{property.financials.projectedRentalYield}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-xs text-stone-500 block">Legal Title Status</span>
              <span className="text-sm sm:text-base font-bold text-[#162521] truncate block" title={property.financials.titleStatus}>
                {property.financials.titleStatus.split(' ')[0]} Verified
              </span>
            </div>
          </div>
        </div>

        {/* SECTION: High-Resolution Image Gallery */}
        <section className="mb-16" aria-label="Property High-Resolution Gallery">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
                Visual Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
                High-Resolution Architectural Gallery
              </h2>
            </div>

            {/* Gallery Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'exterior', label: 'Exterior & Grounds' },
                { id: 'interior', label: 'Interiors & Salons' },
                { id: 'bedroom', label: 'Suites' },
                { id: 'kitchen', label: 'Kitchens' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeGalleryCategory === tab.id
                      ? 'bg-[#461313] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-[#162521]/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Primary Highlight Image (Takes 2 cols & 2 rows on large) */}
            {filteredGallery[0] && (
              <div 
                onClick={() => setLightboxIndex(0)}
                className="relative md:col-span-2 md:row-span-2 h-72 sm:h-96 md:h-full min-h-[320px] rounded-3xl overflow-hidden cursor-pointer group shadow-sm"
              >
                <Image
                  src={filteredGallery[0].url}
                  alt={filteredGallery[0].caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C0E8F9] block mb-0.5">
                    Featured Perspective
                  </span>
                  <p className="text-sm sm:text-base font-bold leading-tight drop-shadow-sm">
                    {filteredGallery[0].caption}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* Secondary Gallery Images */}
            {filteredGallery.slice(1, 5).map((img, idx) => {
              const actualIndex = idx + 1;
              return (
                <div 
                  key={actualIndex}
                  onClick={() => setLightboxIndex(actualIndex)}
                  className="relative h-48 sm:h-56 rounded-3xl overflow-hidden cursor-pointer group shadow-xs bg-stone-100"
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold leading-tight line-clamp-2 drop-shadow-sm">
                      {img.caption}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredGallery.length > 5 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setLightboxIndex(0)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-xs font-bold text-[#162521] transition-colors cursor-pointer"
              >
                <span>View All {property.gallery.length} High-Resolution Photographs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-white pb-4 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-stone-300">
                  {lightboxIndex + 1} of {filteredGallery.length}
                </span>
                <span className="text-sm font-semibold text-white">
                  {filteredGallery[lightboxIndex].caption}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <div className="relative w-full h-full max-h-[78vh] max-w-5xl">
                <Image
                  src={filteredGallery[lightboxIndex].url}
                  alt={filteredGallery[lightboxIndex].caption}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prev / Next controls */}
              {filteredGallery.length > 1 && (
                <>
                  <button
                    onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1))}
                    className="absolute left-2 sm:left-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setLightboxIndex((prev) => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0))}
                    className="absolute right-2 sm:right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="text-center text-xs text-stone-400 pt-2 border-t border-white/10">
              {property.name} · Exclusive High-Resolution Architectural Archive
            </div>
          </div>
        )}

        {/* SECTION: Full Unit Breakdowns */}
        <section className="mb-16" id="unit-breakdowns">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
              Residential Inventory & Layouts
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
                  Comprehensive Unit Breakdowns
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  Carefully proportioned architectural floorplans designed for functional living and maximum rental returns.
                </p>
              </div>
              <span className="text-xs font-bold text-[#461313] bg-[#C0E8F9]/50 px-4 py-1.5 rounded-full self-start sm:self-auto shrink-0">
                {property.totalUnits}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {property.unitBreakdown.map((unit, uIdx) => (
              <div 
                key={uIdx}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_10px_30px_rgba(22,37,33,0.04)] hover:border-[#461313]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6"
              >
                <div>
                  {/* Top Unit Badge & Count */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#D64933] bg-stone-100 px-3 py-1 rounded-full">
                      {unit.count}
                    </span>
                    <span className="text-sm font-extrabold text-[#461313]">
                      {unit.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#162521] mb-2 tracking-tight">
                    {unit.title}
                  </h3>

                  {/* Size and bed/bath metrics */}
                  <div className="flex items-center gap-4 text-xs text-stone-600 py-3 border-y border-stone-100 mb-4">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-[#461313]" />
                      <span>{unit.bedrooms} {unit.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-[#461313]" />
                      <span>{unit.bathrooms} {unit.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    {unit.sizeSqM && (
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-[#461313]" />
                        <span>{unit.sizeSqM}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                    {unit.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-stone-400">
                      Configuration Highlights
                    </p>
                    {unit.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unit CTA */}
                <button
                  onClick={() => openBooking(unit.title)}
                  className="w-full bg-stone-50 hover:bg-[#461313] text-[#162521] hover:text-white border border-stone-200 hover:border-transparent py-3 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group"
                >
                  <span>Inquire on this Unit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Financial Expectations and Investment Pricing */}
        <section className="mb-16 bg-white rounded-3xl border border-stone-200/90 shadow-[0_10px_35px_rgba(22,37,33,0.05)] p-6 sm:p-10 lg:p-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
              Investment Projections & Capital Security
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
              Financial Expectations & Investment Pricing
            </h2>
            <p className="mt-1 text-sm text-stone-600 max-w-3xl">
              Transparent economic fundamentals structured for institutional investors, family offices, and diaspora wealth preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Financial Yield Highlights */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Projected Net Rental Yield
                  </span>
                </div>
                <p className="text-2xl font-black text-emerald-800">
                  {property.financials.projectedRentalYield}
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Benchmarked against prime corporate leasing rates in the immediate neighborhood.
                </p>
              </div>

              {property.financials.projectedShortLetAnnualGross && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#C0E8F9] text-[#461313] flex items-center justify-center">
                      <Percent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Short-Stay Hospitality Projection
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#461313]">
                    {property.financials.projectedShortLetAnnualGross}
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    Based on verified 70-75% historical occupancy across managed luxury assets.
                  </p>
                </div>
              )}

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Capital Appreciation Forecast
                  </span>
                </div>
                <p className="text-lg font-bold text-[#162521]">
                  {property.financials.capitalAppreciationForecast}
                </p>
              </div>
            </div>

            {/* Column 2 & 3: Phased Payment Milestone Structure & Title */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/70">
                <h3 className="text-base font-bold text-[#162521] mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#461313]" />
                  <span>Structured Milestone Payment Schedule</span>
                </h3>
                <p className="text-xs text-stone-600 mb-4">
                  {property.financials.paymentStructure}
                </p>

                <div className="space-y-3">
                  {property.financials.milestones.map((milestone, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#461313] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 sm:mt-0">
                          {mIdx + 1}
                        </span>
                        <div>
                          <span className="font-bold text-[#162521] block">
                            {milestone.stage}
                          </span>
                          <span className="text-stone-500">
                            {milestone.description}
                          </span>
                        </div>
                      </div>
                      <span className="font-extrabold text-[#D64933] bg-stone-100 px-3 py-1 rounded-full shrink-0 self-start sm:self-center">
                        {milestone.percentage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Title & Service Charge Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Legal Title
                  </span>
                  <p className="text-xs font-bold text-[#162521] leading-relaxed">
                    {property.financials.titleStatus}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#461313]" />
                    Estimated Service Charge
                  </span>
                  <p className="text-xs font-bold text-[#162521] leading-relaxed">
                    {property.financials.estimatedServiceCharge}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Architectural Specifications */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
              Engineering & Material Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
              Architectural & Engineering Specifications
            </h2>
            <p className="mt-1 text-sm text-stone-600 max-w-3xl">
              Constructed to international structural standards with premium European fixtures and sustainable MEP integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {property.architecturalSpecifications.map((specSection, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#461313] text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#162521]">
                    {specSection.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {specSection.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D64933] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Prominent CTA [Inquire & reserve This Property] */}
        <section 
          id="reservation-cta-section"
          className="mb-20 p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#162521] text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle warm architectural ambient glow */}
          <div 
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D64933]/20 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -left-20 -top-20 w-80 h-80 bg-[#C0E8F9]/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-semibold mb-4 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C0E8F9]" />
              <span>Direct Developer Allocation · Chapelhill Verified</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-serif text-white">
              Inquire & Reserve This Property
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              Connect directly with our senior development advisory team to request full architectural blueprints, review unencumbered title deeds, or schedule a private VIP site walkthrough.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openBooking()}
                id="main-inquire-reserve-cta-btn"
                className="bg-white hover:bg-stone-100 text-[#162521] px-8 py-4 rounded-full font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                <span>Inquire & Reserve This Property</span>
                <ArrowRight className="w-4 h-4 text-[#461313]" />
              </button>

              <button
                onClick={() => {
                  const subject = encodeURIComponent(`Executive Inquiry: ${property.name}`);
                  const body = encodeURIComponent(`Hello Chapelhill Advisory,\n\nI am interested in exploring an acquisition at ${property.name}. Please provide current allocation availability, payment plans, and legal title documents.\n\nThank you.`);
                  window.location.href = `mailto:concierge@chapelhillre.com?subject=${subject}&body=${body}`;
                }}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Email Private Concierge</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Guaranteed Allocation Transparency
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Diaspora Escrow Protection
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Agency Commission Fees
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: Other Available Properties */}
        {otherProperties.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
                  Explore More Developments
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
                  Other Featured Residences
                </h2>
              </div>
              <Link
                href="/#featured-properties"
                className="text-xs font-bold text-[#461313] hover:text-[#D64933] inline-flex items-center gap-1 group"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProperties.map((other) => (
                <div 
                  key={other.id}
                  className="group bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-full h-56 overflow-hidden bg-stone-100">
                    <Image
                      src={other.heroImage}
                      alt={other.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold text-stone-300 block">
                        {other.location}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {other.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-stone-600 line-clamp-2 mb-4">
                      {other.description}
                    </p>
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-stone-100">
                      <div>
                        <span className="text-[11px] text-stone-400 block">Starting From</span>
                        <span className="text-sm font-bold text-[#461313]">{other.financials.startingPrice}</span>
                      </div>
                      <Link
                        href={`/properties/${other.id}`}
                        className="bg-[#461313] hover:bg-[#D64933] text-white px-5 py-2 rounded-full font-semibold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>View Property</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Closing Advisory Banner (Matches Home Page) */}
      <ClosingAdvisoryBanner
        onContactClick={() => openBooking()}
      />

      {/* Full Integrated Luxury Footer (Matches Home Page) */}
      <Footer
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={() => {
          window.location.href = '/#about-us';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
        onContactClick={() => openBooking()}
      />

      {/* WhatsApp Concierge FAB */}
      <WhatsAppFAB
        defaultMessage={`Hello Chapelhill, I am interested in inquiring about ${property.name}. Could you please share more details regarding availability, pricing, and scheduling a private viewing?`}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedUnitForInquiry || property.name}
      />

      {/* Info Drawer */}
      <InfoDrawer
        isOpen={infoModal !== null}
        type={infoModal}
        onClose={() => setInfoModal(null)}
        onBookVisit={() => openBooking()}
      />
    </div>
  );
}
