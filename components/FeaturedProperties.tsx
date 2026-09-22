'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
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
  status: 'completed' | 'ongoing';
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
    location: 'Abijo GRA, Lekki-Epe Corridor, Lagos',
    tagline: 'Turnkey Luxury Residential Community',
    status: 'completed',
    statusLabel: 'Completed • Ready for Occupancy',
    startingPrice: 'Starting from ₦38,000,000',
    priceRange: '₦38M – ₦95M',
    paymentPlan: 'Immediate Outright & Flexible Mortgage Supported',
    totalUnits: '13 Total Units',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'A distinguished residential enclave offering immediate handover and turnkey contemporary living. Built with precision engineering, modern fixtures, and dedicated utilities in the tranquil master-planned Abijo GRA neighborhood.',
    unitBreakdown: [
      {
        title: '1-Bedroom Apartment',
        count: '8 Units',
        price: 'From ₦38M',
        description: 'Optimized high-yield floorplans ideal for young executives, short-stay hosting, or first-time investors.',
      },
      {
        title: '2-Bedroom Apartment',
        count: '2 Units',
        price: 'From ₦65M',
        description: 'Spacious dual-ensuite layouts with open-concept chef kitchens and private balconies.',
      },
      {
        title: '3-Bedroom Apartment',
        count: '3 Units',
        price: 'From ₦95M',
        description: 'Expansive family residences featuring generous living salons, fitted storage, and premium master suites.',
      },
    ],
    specifications: [
      '100% Civil & MEP Works Finished',
      'Dedicated Transformer & Continuous Water Treatment',
      'Paved Internal Roads & Landscaped Patios',
      '24/7 Armed Security & CCTV Infrastructure',
      'Immediate Deed & Physical Handover Available',
    ],
    investmentHighlights: [
      'Immediate rental cash flow capability',
      'Prime proximity to Green Springs School & Novare Mall',
      'Strong historical capital growth along the Lekki-Epe corridor',
    ],
  },
  {
    id: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    tagline: 'Architectural Trophy Penthouse Residence',
    status: 'ongoing',
    statusLabel: 'Currently Ongoing • Off-Plan Opportunity',
    startingPrice: 'Starting from ₦380,000,000',
    priceRange: '₦380M – ₦450M',
    paymentPlan: 'Structured Milestone Construction Schedule',
    totalUnits: 'Exclusive Single Penthouse',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'An elite private penthouse residence crowned at the pinnacle of Ogudu GRA. Engineered for supreme privacy, lavish entertainment, and seamless indoor-outdoor living with panoramic skyline views of Lagos.',
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse',
        count: '1 Unit',
        price: 'Guide: ₦380M – ₦450M',
        description: 'Palatial multi-level penthouse with soaring double-height ceilings, wraparound terraces, and private elevator landing.',
      },
      {
        title: 'Ensuite Service Room (Maid’s Quarters)',
        count: '1 Room',
        price: 'Included with Penthouse',
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
      'Rare low-density penthouse asset in mainland Lagos’ premier GRA',
      'Favorable phased milestone construction payments',
      'High bespoke personalization potential during ongoing phase',
    ],
  },
  {
    id: 'lekki-phase-1-project',
    name: 'Lekki Phase 1 Project',
    location: 'Prime Lekki Phase 1, Island Hub, Lagos',
    tagline: '18-Unit Masterpiece Development',
    status: 'ongoing',
    statusLabel: 'Currently Ongoing • High Capital Appreciation',
    startingPrice: 'Starting from ₦145,000,000',
    priceRange: '₦145M – ₦285M',
    paymentPlan: '30% Initial Deposit with Phased Quarterly Tranches',
    landSize: '866 sqm Site',
    totalUnits: '18 Luxury Units',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'An 18-unit institutional-grade luxury residential development commanding a prime 866sqm parcel in Lekki Phase 1. Designed to set a benchmark in architectural elegance, spatial efficiency, and high rental yield.',
    unitBreakdown: [
      {
        title: 'Spacious 2-Bedroom Apartments',
        count: '8 Units',
        price: 'From ₦145M',
        description: 'Generous living areas, floor-to-ceiling windows, contemporary cabinetry, and dedicated laundry niches.',
      },
      {
        title: 'Elegant 3-Bedroom Apartments',
        count: '8 Units',
        price: 'From ₦195M',
        description: 'Refined multi-room living with all ensuite bedrooms, walk-in closets, and guest powder rooms.',
      },
      {
        title: 'Exclusive 2-Bedroom Penthouses',
        count: '2 Units',
        price: 'From ₦285M',
        description: 'Top-tier crown residences featuring expansive sky decks, outdoor barbecue lounges, and panoramic island views.',
      },
    ],
    specifications: [
      'Prime 866 sqm Parcel in High-Demand Lekki Phase 1',
      'Dual Rooftop Penthouse Patios & Entertainment Decks',
      'Communal Swimming Pool, Fitness Center & Residents Lounge',
      'Underground / Dedicated Surface Parking bays',
      'Dual Backup Generator Systems & Fiber Optic Connectivity',
    ],
    investmentHighlights: [
      'Targeted 18% - 24% annual yield on short-let / luxury leasing',
      'One of Lekki Phase 1’s most coveted residential streets',
      'Structured milestone disbursement for early off-plan investors',
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
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  const [selectedPropertyDetail, setSelectedPropertyDetail] = useState<FeaturedProperty | null>(null);

  const filteredProperties = FEATURED_PROPERTIES.filter((property) => {
    if (filter === 'all') return true;
    return property.status === filter;
  });

  return (
    <section 
      id="featured-properties" 
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 relative z-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-stone-200/90 shadow-xs rounded-full px-4 py-1.5 mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D64933]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#461313]">
              Properties Available for Sale
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#162521] tracking-tight leading-[1.15]">
            Featured Prime Developments
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#162521]/75 leading-relaxed">
            Explore our curated portfolio of completed turnkey residences and high-yield ongoing developments across Nigeria’s most coveted residential destinations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white border border-stone-200/90 rounded-2xl shadow-xs self-start md:self-auto shrink-0">
          <button
            onClick={() => setFilter('all')}
            id="filter-all-properties"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            All Projects ({FEATURED_PROPERTIES.length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            id="filter-completed-properties"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'completed'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            Completed (1)
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            id="filter-ongoing-properties"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'ongoing'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            Currently Ongoing (2)
          </button>
        </div>
      </div>

      {/* Properties Grid: 3 Distinct Architectural Showcases */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => {
          const isCompleted = property.status === 'completed';

          return (
            <article
              key={property.id}
              id={`featured-property-${property.id}`}
              className="group bg-white rounded-3xl border border-stone-200/90 shadow-[0_10px_30px_rgba(22,37,33,0.05)] hover:shadow-[0_20px_45px_rgba(70,19,19,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Media Header */}
              <div>
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-stone-100">
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
                        isCompleted 
                          ? 'bg-emerald-900/90 text-emerald-100 border border-emerald-400/30' 
                          : 'bg-[#461313]/90 text-[#C0E8F9] border border-white/20'
                      }`}
                    >
                      {isCompleted ? (
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
                      <span className="text-[11px] font-bold text-[#C0E8F9] bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 shrink-0">
                        {property.startingPrice}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {property.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6">
                  {/* Tagline / Subtitle */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D64933] mb-2">
                    {property.tagline}
                  </p>
                  <p className="text-sm text-[#162521]/80 leading-relaxed line-clamp-3 mb-5">
                    {property.description}
                  </p>

                  {/* Financial Expectations & Starting Price Card */}
                  <div className="p-4 rounded-2xl bg-[#FEFCFD] border border-stone-200/90 shadow-2xs mb-5 group-hover:border-[#461313]/30 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#D64933]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#461313]">
                          Starting From
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#162521]/60 bg-stone-100 px-2 py-0.5 rounded-md">
                        Est. Price Range
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <span className="text-xl sm:text-2xl font-black text-[#162521] tracking-tight">
                        {property.startingPrice}
                      </span>
                      <span className="text-xs font-bold text-[#D64933] bg-[#D64933]/10 px-2.5 py-1 rounded-lg">
                        {property.priceRange}
                      </span>
                    </div>

                    {property.paymentPlan && (
                      <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] text-[#162521]/75 font-medium">
                        <Sparkles className="w-3 h-3 text-[#D64933] shrink-0" />
                        <span className="truncate">{property.paymentPlan}</span>
                      </div>
                    )}
                  </div>

                  {/* Unit Breakdown Container */}
                  <div className="p-4 rounded-2xl bg-[#FEFCFD] border border-stone-200/80 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#461313]" />
                        <span className="text-xs font-bold text-[#162521] uppercase tracking-wider">
                          Unit Breakdown
                        </span>
                      </div>
                      {property.totalUnits && (
                        <span className="text-xs font-bold text-[#461313] bg-[#C0E8F9]/50 px-2.5 py-0.5 rounded-full">
                          {property.totalUnits}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      {property.unitBreakdown.map((unit, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between gap-3 text-xs py-1.5 border-b border-stone-100 last:border-0"
                        >
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-[#162521]/90">
                              {unit.title}
                            </span>
                            {unit.price && (
                              <span className="text-[11px] font-medium text-[#D64933]">
                                {unit.price}
                              </span>
                            )}
                          </div>
                          <span className="font-bold text-[#461313] bg-white border border-stone-200 px-2.5 py-0.5 rounded-md shadow-2xs shrink-0 self-center">
                            {unit.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-2">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[#162521]/60">
                      Development Features
                    </p>
                    {property.specifications.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#162521]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 pt-0 space-y-2.5">
                <button
                  onClick={() => onInquireProperty(property.name)}
                  id={`btn-inquire-${property.id}`}
                  className="w-full bg-[#461313] hover:bg-[#D64933] text-white py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Inquire & Book Viewing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedPropertyDetail(property)}
                  id={`btn-details-${property.id}`}
                  className="w-full bg-stone-50 hover:bg-stone-100 text-[#162521] border border-stone-200/80 py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#162521]/60" />
                  <span>View Comprehensive Specifications</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Advisory Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#461313] text-[#C0E8F9] flex items-center justify-center shrink-0 shadow-sm">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#162521]">
              Seeking Bespoke Bulk Allocations or Joint-Venture Collaborations?
            </h4>
            <p className="text-xs sm:text-sm text-[#162521]/70 mt-1 max-w-2xl">
              Our acquisitions division provides institutional investors, diaspora buyers, and family offices with transparent milestone oversight, title verification, and tailored payment schedules.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenConsultation}
          id="btn-featured-consult-advisory"
          className="bg-[#461313] hover:bg-[#D64933] text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span>Speak with Project Directors</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Full Architectural Detail Modal */}
      {selectedPropertyDetail && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl border border-stone-200 w-full max-w-3xl overflow-hidden shadow-2xl relative my-auto animate-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full">
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
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-[#461313] text-[#C0E8F9] text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {selectedPropertyDetail.statusLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedPropertyDetail.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D64933]" />
                  {selectedPropertyDetail.location}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#461313] mb-2">
                  Overview & Philosophy
                </h4>
                <p className="text-sm text-[#162521]/80 leading-relaxed">
                  {selectedPropertyDetail.description}
                </p>
              </div>

              {/* Financial Expectations & Investment Structure */}
              <div className="p-5 rounded-2xl bg-[#FEFCFD] border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[#461313]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#162521]">
                      Financial Expectations & Investment Pricing
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#D64933] bg-[#D64933]/10 px-2.5 py-1 rounded-md">
                    Range: {selectedPropertyDetail.priceRange}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#162521]/60 block mb-1">
                      Entry Price / Starting From
                    </span>
                    <span className="text-lg sm:text-xl font-black text-[#461313]">
                      {selectedPropertyDetail.startingPrice}
                    </span>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-stone-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#162521]/60 block mb-1">
                      Payment Terms & Plan
                    </span>
                    <span className="text-xs font-semibold text-[#162521] flex items-center gap-1.5 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                      {selectedPropertyDetail.paymentPlan || 'Milestone-based disbursement available'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Unit Breakdown Detailed */}
              <div className="p-5 rounded-2xl bg-[#FEFCFD] border border-stone-200">
                <h4 className="text-sm font-bold text-[#162521] uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Unit Inventory Breakdown</span>
                  {selectedPropertyDetail.totalUnits && (
                    <span className="text-xs font-bold text-[#461313] bg-[#C0E8F9]/50 px-3 py-1 rounded-full">
                      {selectedPropertyDetail.totalUnits}
                    </span>
                  )}
                </h4>

                <div className="space-y-4">
                  {selectedPropertyDetail.unitBreakdown.map((unit, uIdx) => (
                    <div key={uIdx} className="p-3.5 rounded-xl bg-white border border-stone-100 shadow-2xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div>
                          <h5 className="text-sm font-bold text-[#162521]">{unit.title}</h5>
                          {unit.price && (
                            <span className="text-xs font-semibold text-[#D64933]">
                              {unit.price}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold text-white bg-[#461313] px-2.5 py-0.5 rounded-md self-start">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#162521]/70 mb-3">
                    Architectural Specifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedPropertyDetail.specifications.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#162521]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#162521]/70 mb-3">
                    Investment Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedPropertyDetail.investmentHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#162521]/85">
                        <Sparkles className="w-3.5 h-3.5 text-[#461313] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedPropertyDetail(null)}
                className="px-5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-[#162521] hover:bg-stone-100 transition-colors cursor-pointer"
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
                className="bg-[#461313] hover:bg-[#D64933] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Inquire & Reserve This Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
