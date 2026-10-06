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
  Maximize,
  FileText,
  CalendarCheck,
  ChevronRight,
  Info,
  Tag,
  Banknote
} from 'lucide-react';

export interface FeaturedProperty {
  id: string;
  name: string;
  location: string;
  tagline: string;
  status: 'completed' | 'ongoing' | 'sold-out';
  statusLabel: string;
  startingPrice: string;
  priceRange: string;
  paymentPlan?: string;
  landSize?: string;
  totalUnits?: string;
  image: string;
  description: string;
  unitBreakdown: {
    title: string;
    count: string;
    price?: string;
    description?: string;
  }[];
  specifications: string[];
  investmentHighlights: string[];
}

export const FEATURED_PROPERTIES: FeaturedProperty[] = [
  {
    id: 'ivy-homes-abijo',
    name: 'Ivy Homes Abijo GRA',
    location: 'Abijo GRA, Lekki Axis, Lagos',
    tagline: 'Luxury Finished Apartments • Prestigious Abijo GRA, Lekki',
    status: 'completed',
    statusLabel: 'Completed • Ready for Occupancy',
    startingPrice: 'Starting from ₦50,000,000',
    priceRange: '₦50M – ₦75M ($34,774 – $52,161)',
    paymentPlan: 'Installmental Payment Plans Available',
    totalUnits: '1, 2 & 3 Bedroom Flats',
    image: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 1.webp',
    description: 'A prestigious residential development in Abijo GRA, Lekki. Featuring luxury finished 1, 2, and 3-bedroom flats with fitted kitchens, 24/7 power backed by solar, 24/7 security, fully interlocked roads, efficient drainage, and dedicated parking.',
    unitBreakdown: [
      {
        title: '1-Bedroom Flat',
        count: 'Multiple Available',
        price: '₦50M ($34,774)',
        description: 'Luxury finished 1-bedroom flat with fitted kitchen, dedicated parking space, and 24/7 solar-backed power.',
      },
      {
        title: '2-Bedroom Flat',
        count: 'Multiple Available',
        price: '₦65M ($45,207)',
        description: 'Spacious dual-ensuite flat with generous living salon, fitted kitchen, private balcony, and dedicated parking.',
      },
      {
        title: '3-Bedroom Flat',
        count: 'Multiple Available',
        price: '₦75M ($52,161)',
        description: 'Expansive 3-bedroom family residence with master ensuite sanctuary, dining salon, fitted kitchen, and dedicated parking.',
      },
    ],
    specifications: [
      'Prestigious Abijo GRA Address (Only GRA in Lekki Axis)',
      '24/7 Uninterruptible Power with Fully Installed Solar System',
      'Luxury Finished with Fitted Contemporary Kitchens',
      '12 Dedicated Car Parking Spaces & Fully Interlocked Roads',
      'Under 3 Minutes to Lekki-Epe Expressway, 30 Mins to Dangote Refinery',
    ],
    investmentHighlights: [
      'Installmental payment plans available across all unit types',
      'Fastest growing corridor in Lagos State with high rental yields',
      'Turnkey delivery with immediate physical key handover',
    ],
  },
  {
    id: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    tagline: 'Architectural Trophy Penthouse Residence',
    status: 'sold-out',
    statusLabel: 'Sold Out • 100% Allocated',
    startingPrice: 'Sold Out (Guide: ₦650M)',
    priceRange: 'Sold Out • Fully Allocated',
    paymentPlan: 'Project 100% Sold Out — Waitlist Open',
    totalUnits: 'Exclusive Single Penthouse (Sold Out)',
    image: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    description: 'An elite private penthouse residence crowned at the pinnacle of Ogudu GRA. Engineered for supreme privacy, lavish entertainment, and seamless indoor-outdoor living with panoramic skyline views of Lagos. This landmark project is now 100% sold out.',
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse',
        count: '1 Unit (Sold Out)',
        price: 'Sold Out',
        description: 'Palatial multi-level penthouse with soaring double-height ceilings, wraparound terraces, and private elevator landing. 100% Allocated.',
      },
      {
        title: 'Ensuite Service Room (Maid’s Quarters)',
        count: '1 Room (Sold Out)',
        price: 'Sold Out',
        description: 'Dedicated auxiliary staff accommodation with independent access point.',
      },
    ],
    specifications: [
      'Dedicated Private Elevator & Sky Lounge',
      'Full Ensuite Service Room / Quarter with Private Entrance',
      'Floor-to-Ceiling Thermal Acoustic Glazing',
      'Smart Home Automation Pre-Wiring & Solar Inverter Integration',
      'Covered Multi-Vehicle Staged Parking',
    ],
    investmentHighlights: [
      '100% Sold Out: Landmark single penthouse asset in mainland Lagos’ premier GRA',
      'Secondary Market Inquiries: Waitlist active for potential resales or subsequent phases',
      'Unobstructed 270-degree horizon views spanning from mainland greenery to the lagoon',
    ],
  },
  {
    id: 'lekki-phase-1-project',
    name: 'Ivy Heights, Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos State, Nigeria',
    tagline: 'Exclusive Off-Plan Investment • 5-Storey Luxury Residential Building',
    status: 'ongoing',
    statusLabel: 'Exclusive Off-Plan Investment • Currently Ongoing',
    startingPrice: 'Starting from ₦200,000,000',
    priceRange: '₦200M – ₦250M',
    paymentPlan: '50% First Instalment • Balance over 8 Monthly Instalments',
    landSize: '866 sqm Parcel',
    totalUnits: '5-Storey Building',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    description: 'An exclusive off-plan development redefining luxury living in Lekki Phase One, Lagos. A sophisticated 5-storey residential building designed to meet the highest standards of modern architecture and comfort, offering expansive living spaces, premium finishes, and breathtaking views.',
    unitBreakdown: [
      {
        title: '2-Bedroom Flat + BQ',
        count: 'Available Units',
        price: '₦200M (Off-Plan)',
        description: 'Expansive 200m² residence with fully fitted Boys’ Quarters (BQ), spacious living room, dining area, private balcony, and fitted kitchen with pantry.',
      },
      {
        title: '3-Bedroom Flat + BQ',
        count: 'Available Units',
        price: '₦250M (Off-Plan)',
        description: 'Generous 250m² executive residence featuring dedicated home office/study room, fully fitted Boys’ Quarters (BQ), and master suite with walk-in closet.',
      },
      {
        title: 'Penthouse Units',
        count: 'Exclusive Units',
        price: 'Available on Request',
        description: 'Top-tier crown penthouses offering panoramic Lekki skyline views, vast private sky terraces, luxury smart home features, and supreme privacy.',
      },
    ],
    specifications: [
      'Prime Lekki Phase One Address in High-Demand Corridor',
      'World-Class Afrocentric Architecture & 5-Storey Mid-Rise Design',
      'Residents’ Lounge, Fully Equipped Gym & Children’s Play Area',
      'Landscaped Courtyard, 24/7 Concierge & Secure Gated Entry',
      'Guaranteed Backup Power & Water Supply with Dedicated Parking',
    ],
    investmentHighlights: [
      'Strong Value Upside: 2-Bedroom at ₦200M; 3-Bedroom at ₦250M at off-plan pricing',
      'Limited Luxury Inventory in one of Lekki Phase One’s most coveted residential streets',
      'Flexible 8-Month Payment Plan with 50% initial commitment',
    ],
  },
];

interface FeaturedPropertiesProps {
  onInquireProperty: (propertyName: string) => void;
  onOpenConsultation: () => void;
}

export default function FeaturedProperties({
  onInquireProperty,
  onOpenConsultation,
}: FeaturedPropertiesProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'sold-out'>('all');
  const [selectedPropertyDetail, setSelectedPropertyDetail] = useState<FeaturedProperty | null>(null);

  const filteredProperties = FEATURED_PROPERTIES.filter((property) => {
    if (filter === 'all') return true;
    return property.status === filter;
  });

  return (
    <section 
      id="featured-properties" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 relative z-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-white/90 border border-stone-200/90 shadow-xs rounded-full px-4 py-1.5 mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#461313]">
              Properties Available for Sale
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#162521] tracking-tight leading-[1.15]">
            Featured Prime Developments
          </h2>
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-[#162521]/75 leading-relaxed">
            Explore our curated portfolio of completed turnkey residences, high-yield ongoing developments, and landmark sold-out projects across Nigeria’s most coveted residential destinations.
          </p>
        </div>

        {/* Filter Tabs - Horizontal scrollable on mobile */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white border border-stone-200/90 rounded-2xl sm:rounded-full shadow-xs self-start md:self-auto shrink-0 overflow-x-auto max-w-full overscroll-x-contain scrollbar-none touch-manipulation">
          <button
            onClick={() => setFilter('all')}
            id="filter-all-properties"
            className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] touch-manipulation ${
              filter === 'all'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
            }`}
          >
            All Projects ({FEATURED_PROPERTIES.length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            id="filter-completed-properties"
            className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] touch-manipulation ${
              filter === 'completed'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
            }`}
          >
            Completed ({FEATURED_PROPERTIES.filter(p => p.status === 'completed').length})
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            id="filter-ongoing-properties"
            className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] touch-manipulation ${
              filter === 'ongoing'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
            }`}
          >
            Ongoing ({FEATURED_PROPERTIES.filter(p => p.status === 'ongoing').length})
          </button>
          <button
            onClick={() => setFilter('sold-out')}
            id="filter-sold-out-properties"
            className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] touch-manipulation ${
              filter === 'sold-out'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
            }`}
          >
            Sold Out ({FEATURED_PROPERTIES.filter(p => p.status === 'sold-out').length})
          </button>
        </div>
      </div>

      {/* Properties Grid: Responsive 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProperties.map((property) => {
          const isCompleted = property.status === 'completed';
          const isSoldOut = property.status === 'sold-out';

          return (
            <article
              key={property.id}
              id={`featured-property-${property.id}`}
              className="group bg-white rounded-3xl border border-stone-200/90 shadow-[0_10px_30px_rgba(22,37,33,0.05)] hover:shadow-[0_20px_45px_rgba(70,19,19,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Media Header */}
              <div>
                <Link 
                  href={`/properties/${property.id}`}
                  className="block relative w-full h-64 sm:h-72 overflow-hidden bg-stone-100 cursor-pointer"
                  aria-label={`View ${property.name}`}
                >
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Status & Land Size Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span 
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-xs ${
                        isSoldOut
                          ? 'bg-rose-950/90 text-rose-200 border border-rose-400/40'
                          : isCompleted 
                            ? 'bg-emerald-900/90 text-emerald-100 border border-emerald-400/30' 
                            : 'bg-[#461313]/90 text-[#C0E8F9] border border-white/20'
                      }`}
                    >
                      {isSoldOut ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-300" />
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-[#D64933]" />
                      )}
                      <span>{property.statusLabel}</span>
                    </span>

                    {property.landSize && (
                      <span className="bg-white/90 text-[#162521] text-xs font-bold px-3 py-1.5 rounded-full shadow-xs backdrop-blur-md">
                        {property.landSize}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 text-xs text-stone-200 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                        <span className="font-medium truncate">{property.location}</span>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 backdrop-blur-md ${
                        isSoldOut 
                          ? 'text-rose-200 bg-rose-950/80 border-rose-400/30' 
                          : 'text-[#C0E8F9] bg-black/50 border-white/15'
                      }`}>
                        {property.startingPrice}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {property.name}
                    </h3>
                  </div>
                </Link>

                {/* Card Body Details */}
                <div className="p-4 sm:p-6">
                  {/* Tagline / Subtitle */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D64933] mb-2">
                    {property.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#162521]/80 leading-relaxed line-clamp-3 mb-4 sm:mb-5">
                    {property.description}
                  </p>

                  {/* Financial Expectations & Starting Price Card */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FEFCFD] border border-stone-200/90 shadow-2xs mb-4 sm:mb-5 group-hover:border-[#461313]/30 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#D64933]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#461313]">
                          {isSoldOut ? 'Allocation Status' : 'Starting From'}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSoldOut ? 'text-rose-700 bg-rose-50' : 'text-[#162521]/60 bg-stone-100'
                      }`}>
                        {isSoldOut ? '100% Sold Out' : 'Est. Price Range'}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <span className="text-lg sm:text-2xl font-black text-[#162521] tracking-tight">
                        {property.startingPrice}
                      </span>
                      <span className={`text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-lg ${
                        isSoldOut ? 'text-rose-700 bg-rose-50' : 'text-[#D64933] bg-[#D64933]/10'
                      }`}>
                        {property.priceRange}
                      </span>
                    </div>

                    {property.paymentPlan && (
                      <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] text-[#162521]/75 font-medium">
                        <Banknote className="w-3 h-3 text-[#D64933] shrink-0" />
                        <span className="truncate">{property.paymentPlan}</span>
                      </div>
                    )}
                  </div>

                  {/* Unit Breakdown Container */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FEFCFD] border border-stone-200/80 mb-2">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#461313]" />
                        <span className="text-xs font-bold text-[#162521] uppercase tracking-wider">
                          Unit Breakdown
                        </span>
                      </div>
                      {property.totalUnits && (
                        <span className="text-[11px] font-bold text-[#461313] bg-[#C0E8F9]/50 px-2.5 py-0.5 rounded-full">
                          {property.totalUnits}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {property.unitBreakdown.map((unit, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between gap-2.5 text-xs py-1.5 border-b border-stone-100 last:border-0"
                        >
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-[#162521]/90 truncate">
                              {unit.title}
                            </span>
                            {unit.price && (
                              <span className="text-[11px] font-medium text-[#D64933]">
                                {unit.price}
                              </span>
                            )}
                          </div>
                          <span className="font-bold text-[#461313] bg-white border border-stone-200 px-2 py-0.5 rounded-md shadow-2xs shrink-0 self-center text-[11px]">
                            {unit.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-4 sm:p-6 pt-0">
                <Link
                  href={`/properties/${property.id}`}
                  id={`btn-view-${property.id}`}
                  className="w-full bg-[#461313] hover:bg-[#D64933] text-white py-3 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer min-h-[44px]"
                >
                  <span>View Property</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Advisory Banner */}
      <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#461313] text-[#C0E8F9] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#162521]">
              Seeking Bespoke Bulk Allocations or Joint-Venture Collaborations?
            </h4>
            <p className="text-xs sm:text-sm text-[#162521]/70 mt-1 max-w-2xl leading-relaxed">
              Our acquisitions division provides institutional investors, diaspora buyers, and family offices with transparent milestone oversight, title verification, and tailored payment schedules.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenConsultation}
          id="btn-featured-consult-advisory"
          className="w-full sm:w-auto bg-[#461313] hover:bg-[#D64933] text-white px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-md shrink-0 cursor-pointer min-h-[44px]"
        >
          <span>Speak with Project Directors</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Full Architectural Detail Modal - Fitted to Screen Viewport */}
      {selectedPropertyDetail && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl border border-stone-200 w-full max-w-3xl max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden shadow-2xl relative my-auto animate-in zoom-in-95 duration-200">
            {/* Modal Image Header (Compact height so entire modal comfortably fits on all displays) */}
            <div className="relative h-40 sm:h-48 w-full shrink-0">
              <Image
                src={selectedPropertyDetail.image}
                alt={selectedPropertyDetail.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <button
                onClick={() => setSelectedPropertyDetail(null)}
                id="btn-close-property-detail"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block bg-[#461313] text-[#C0E8F9] text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                  {selectedPropertyDetail.statusLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedPropertyDetail.name}
                </h3>
                <p className="text-xs text-stone-200 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D64933]" />
                  {selectedPropertyDetail.location}
                </p>
              </div>
            </div>

            {/* Modal Body with internal scrolling */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 overscroll-contain">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#461313] mb-1.5">
                  Overview & Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-[#162521]/80 leading-relaxed">
                  {selectedPropertyDetail.description}
                </p>
              </div>

              {/* Unit Breakdown Detailed */}
              <div className="p-4 rounded-2xl bg-[#FEFCFD] border border-stone-200">
                <h4 className="text-xs font-bold text-[#162521] uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Unit Inventory Breakdown</span>
                  {selectedPropertyDetail.totalUnits && (
                    <span className="text-[11px] font-bold text-[#461313] bg-[#C0E8F9]/50 px-2.5 py-0.5 rounded-full">
                      {selectedPropertyDetail.totalUnits}
                    </span>
                  )}
                </h4>

                <div className="space-y-3">
                  {selectedPropertyDetail.unitBreakdown.map((unit, uIdx) => (
                    <div key={uIdx} className="p-3 rounded-xl bg-white border border-stone-100 shadow-2xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-[#162521]">{unit.title}</h5>
                          {unit.price && (
                            <span className="text-xs font-semibold text-[#D64933]">
                              {unit.price}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold text-white bg-[#461313] px-2 py-0.5 rounded-md self-start">
                          {unit.count}
                        </span>
                      </div>
                      {unit.description && (
                        <p className="text-xs text-[#162521]/70 leading-relaxed mt-1">
                          {unit.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications & Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#162521]/70 mb-2">
                    Architectural Specifications
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPropertyDetail.specifications.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#162521]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#162521]/70 mb-2">
                    Investment Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPropertyDetail.investmentHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#162521]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#461313] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer (Pinned and fitted with rounded-full buttons) */}
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedPropertyDetail(null)}
                className="px-5 py-2.5 rounded-full border border-stone-300 text-xs font-semibold text-[#162521] hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const propName = selectedPropertyDetail.name;
                  setSelectedPropertyDetail(null);
                  onInquireProperty(propName);
                }}
                id="modal-detail-inquire-btn"
                className="bg-[#461313] hover:bg-[#D64933] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>
                  {selectedPropertyDetail.status === 'sold-out'
                    ? 'Join Waitlist / Inquire for Resale'
                    : 'Inquire & Reserve This Property'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
