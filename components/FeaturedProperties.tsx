'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CalendarCheck, Plus, X } from 'lucide-react';

export interface FeaturedProperty {
  id: string;
  name: string;
  shortTitle: string;
  location: string;
  microLocation: string;
  tagline: string;
  status: 'completed' | 'ongoing' | 'sold-out';
  statusBadge: string;
  statusLabel: string;
  startingPrice: string;
  priceRange: string;
  essentialMetrics: {
    label: string;
    value: string;
  }[];
  overlayNote?: string;
  isIllustrativeRender?: boolean;
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
    id: 'lekki-phase-1-project',
    name: 'IVY Heights, Ikate, Lekki Phase 1, Lagos',
    shortTitle: 'IVY Heights',
    location: 'Ikate, Lekki Phase 1, Lagos',
    microLocation: 'Ikate, Lekki Phase 1, Lagos',
    tagline: 'Key Development · Pre-Construction / Off-Plan',
    status: 'ongoing',
    statusBadge: 'Pre-Construction · Off-Plan',
    statusLabel: 'Pre-Construction / Off-Plan',
    startingPrice: 'Approved Schedule on Request',
    priceRange: '2-Bed & 3-Bed Apartments',
    essentialMetrics: [
      { label: 'Residences', value: '2 & 3 Bedroom Apartments' },
      { label: 'Proposed Build', value: '24 Months (Subject to Offer)' },
      { label: 'Payment Plans', value: '12-Mo & 18-Mo · 24-Mo Zero Deposit' },
    ],
    overlayNote:
      'Pricing sheet on request. Zero initial deposit does not remove contractual or signing obligations; terms subject to signed offer & management approval. Illustrative render.',
    isIllustrativeRender: true,
    paymentPlan:
      '12-month & 18-month deposit-based plans, or management-approved 24-month zero-initial-deposit option',
    landSize: 'Proposed 24-Month Construction Period',
    totalUnits: '2-Bedroom & 3-Bedroom Apartments',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    description:
      'Flagship pre-construction residential apartment development at Ikate, Lekki Phase 1, Lagos.',
    unitBreakdown: [
      {
        title: '2-Bedroom Apartment',
        count: 'Pre-Construction / Off-Plan',
        price: 'Approved Pricing on Request',
        description:
          'Well-proportioned 2-bedroom apartment at Ikate, Lekki Phase 1 with 12-month, 18-month, and 24-month payment options.',
      },
      {
        title: '3-Bedroom Apartment',
        count: 'Pre-Construction / Off-Plan',
        price: 'Approved Pricing on Request',
        description:
          'Spacious 3-bedroom residential apartment at Ikate, Lekki Phase 1 with 12-month, 18-month, and 24-month payment options.',
      },
    ],
    specifications: [
      'Location: Ikate, Lekki Phase 1, Lagos State, Nigeria',
      'Status: Pre-Construction / Off-Plan residential apartment development',
      'Timeline: Proposed 24-month construction period (subject to offer & approvals)',
      'Options: 12-month deposit, 18-month deposit & 24-month zero-initial-deposit plan',
      'Visuals: Architectural renderings are illustrative and not completed units',
    ],
    investmentHighlights: [
      'Key development at Ikate, Lekki Phase 1 offering 2-bed and 3-bed apartment options',
      'Three payment pathways including management-approved 24-month zero-initial-deposit option (contractual obligations & signing terms apply)',
      'Official pricing sheet and site inspection available directly upon enquiry',
    ],
  },
  {
    id: 'ivy-homes-abijo',
    name: 'Ivy Homes Abijo GRA',
    shortTitle: 'Ivy Homes Abijo GRA',
    location: 'Abijo GRA, Lekki Axis, Lagos',
    microLocation: 'Abijo GRA, Lekki',
    tagline: 'Completed Residences',
    status: 'completed',
    statusBadge: 'Completed',
    statusLabel: 'Completed · Ready for Occupancy',
    startingPrice: 'From ₦50,000,000',
    priceRange: '₦50M – ₦75M',
    essentialMetrics: [
      { label: 'Starting From', value: '₦50,000,000' },
      { label: 'Residences', value: '1, 2 & 3 Bedroom Flats' },
      { label: 'Handover', value: 'Immediate · Solar Power' },
    ],
    paymentPlan: 'Outright purchase & flexible installmental plans available',
    landSize: 'Immediate Physical Key Handover',
    totalUnits: '1, 2 & 3 Bedroom Flats',
    image: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 1.webp',
    description:
      'Completed luxury finished apartments in Abijo GRA, Lekki with solar-backed power and dedicated parking.',
    unitBreakdown: [
      {
        title: '1-Bedroom Flat',
        count: 'Available',
        price: '₦50M',
        description:
          'Luxury finished 1-bedroom flat with fitted kitchen, dedicated parking space, and 24/7 solar-backed power.',
      },
      {
        title: '2-Bedroom Flat',
        count: 'Available',
        price: '₦65M',
        description:
          'Spacious dual-ensuite flat with generous living salon, fitted kitchen, private balcony, and dedicated parking.',
      },
      {
        title: '3-Bedroom Flat',
        count: 'Available',
        price: '₦75M',
        description:
          'Expansive 3-bedroom family residence with master ensuite sanctuary, dining salon, fitted kitchen, and dedicated parking.',
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
      'Rapidly developing residential corridor in Lekki, Lagos State',
      'Turnkey delivery with immediate physical key handover',
    ],
  },
  {
    id: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    shortTitle: 'Ogudu GRA Penthouse',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    microLocation: 'Ogudu GRA, Lagos',
    tagline: 'Private Penthouse · Allocated',
    status: 'sold-out',
    statusBadge: 'Sold Out',
    statusLabel: 'Sold Out',
    startingPrice: 'Fully Allocated',
    priceRange: 'Sold Out',
    essentialMetrics: [
      { label: 'Configuration', value: '5-Bedroom Penthouse' },
      { label: 'Availability', value: 'Fully Allocated' },
      { label: 'Inquiries', value: 'Future Release Waitlist' },
    ],
    paymentPlan: 'Waitlist open for upcoming private mainland developments',
    landSize: 'Handover & Allocation Complete',
    totalUnits: '5-Bedroom Master Penthouse + Service Room',
    image: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    description:
      'Completed private penthouse residence in Ogudu GRA, Lagos. Now fully allocated.',
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse',
        count: 'Sold Out',
        price: 'Fully Allocated',
        description:
          'Multi-level penthouse with double-height ceilings, wraparound terraces, and private elevator landing.',
      },
      {
        title: 'Ensuite Service Quarters',
        count: 'Included',
        price: 'Allocated',
        description:
          'Dedicated auxiliary accommodation with independent access point.',
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
      'Sold Out: Single penthouse residence in Ogudu GRA, Lagos',
      'Waitlist Open: Inquire for upcoming private residential developments',
      'Wide horizon views spanning mainland Lagos and the lagoon',
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
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleMobileOverlay = (id: string) => {
    setMobileExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="featured-properties"
      aria-label="Featured Prime Developments"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20"
    >
      {/* Quiet Architectural Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#D64933] mb-2">
            Selected Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#162521] tracking-[-0.025em] leading-[1.12] text-balance">
            Featured Prime Developments
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm">
          <Link
            href="/projects"
            id="btn-view-all-projects-portfolio"
            className="font-semibold text-[#162521] hover:text-[#461313] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <span>All Developments</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D64933]" />
          </Link>
          <span aria-hidden="true" className="text-stone-300">
            /
          </span>
          <button
            type="button"
            onClick={onOpenConsultation}
            id="btn-featured-consult-advisory"
            className="font-semibold text-stone-600 hover:text-[#162521] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Speak with Project Directors
          </button>
        </div>
      </div>

      {/* Modern Bento-Box Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        {FEATURED_PROPERTIES.map((property, idx) => {
          const isLead = idx === 0;
          const isSoldOut = property.status === 'sold-out';
          const isMobileOpen = mobileExpandedId === property.id;

          return (
            <motion.article
              key={property.id}
              id={`featured-property-${property.id}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              tabIndex={0}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/80 bg-[#101917] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#461313] ${
                isLead
                  ? 'md:col-span-7 md:row-span-2 min-h-[420px] sm:min-h-[480px] lg:h-[600px]'
                  : 'md:col-span-5 min-h-[290px] lg:h-[288px]'
              }`}
            >
              {/* Striking Full-Bleed Architectural Imagery */}
              <Image
                src={property.image}
                alt={property.name}
                fill
                priority={isLead}
                sizes={
                  isLead
                    ? '(max-width: 768px) 100vw, 58vw'
                    : '(max-width: 768px) 100vw, 42vw'
                }
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />

              {/* Subtle Measured Gradient Scrim for Quiet Resting Legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/15 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />

              {/* Full-Card Clickable Navigation Surface (Behind Overlay Action Buttons) */}
              <Link
                href={`/properties/${property.id}`}
                aria-label={`View ${property.name}`}
                className="absolute inset-0 z-10"
              />

              {/* Top Bar: Muted Status Badge + Subtle Touch Reveal Toggle on Mobile */}
              <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 z-20 flex items-center justify-between gap-2 pointer-events-none">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase text-stone-200">
                  {property.statusBadge}
                </span>

                {/* Touch-Friendly Toggle Button for Mobile / Small Viewports */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileOverlay(property.id);
                  }}
                  aria-label={
                    isMobileOpen
                      ? `Hide metrics for ${property.shortTitle}`
                      : `Show metrics for ${property.shortTitle}`
                  }
                  aria-expanded={isMobileOpen}
                  className="md:hidden pointer-events-auto w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors hover:bg-black/70 cursor-pointer touch-manipulation"
                >
                  {isMobileOpen ? (
                    <X className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Quiet Resting Micro-Typography (Fades out softly when frosted overlay rises) */}
              <div
                className={`absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMobileOpen
                    ? 'opacity-0 translate-y-2'
                    : 'md:group-hover:opacity-0 md:group-hover:translate-y-2 md:group-focus-within:opacity-0 md:group-focus-within:translate-y-2'
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-stone-300 font-medium mb-1">
                  <span>{property.microLocation}</span>
                  {property.isIllustrativeRender && (
                    <>
                      <span aria-hidden="true" className="text-white/40">
                        ·
                      </span>
                      <span className="text-stone-300/85">Illustrative Render</span>
                    </>
                  )}
                </div>

                <div className="flex items-end justify-between gap-3">
                  <h3
                    className={`font-semibold text-white tracking-tight leading-[1.15] ${
                      isLead
                        ? 'text-2xl sm:text-3xl lg:text-[32px]'
                        : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {property.shortTitle}
                  </h3>
                  <span className="hidden md:inline-flex items-center gap-1 text-[11px] tracking-[0.08em] uppercase text-white/70 font-medium shrink-0">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Hover-Reveal Frosted-Glass Overlay (Essential Metrics Only) */}
              <div
                className={`absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 bg-[#0d1614]/78 backdrop-blur-xl border-t border-white/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMobileOpen
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-full opacity-0 pointer-events-none md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto'
                }`}
              >
                {/* Frosted Overlay Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.14em] uppercase text-stone-300 font-medium truncate">
                      {property.location}
                    </p>
                    <h4
                      className={`font-semibold text-white tracking-tight mt-0.5 truncate ${
                        isLead ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'
                      }`}
                    >
                      {property.shortTitle}
                    </h4>
                  </div>

                  <Link
                    href={`/properties/${property.id}`}
                    id={`btn-view-${property.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[#E5C583] text-[#162521] text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Essential Metrics Grid (Tabular Numerals, Hairline Separation) */}
                <dl
                  className={`grid gap-3 pt-3 border-t border-white/15 ${
                    isLead ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-3'
                  }`}
                >
                  {property.essentialMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="min-w-0">
                      <dt className="text-[10px] tracking-[0.1em] uppercase text-stone-400 font-medium truncate">
                        {metric.label}
                      </dt>
                      <dd className="text-xs sm:text-[13px] font-semibold text-white mt-0.5 leading-snug tabular-nums">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Quiet Qualification Note (Only on IVY Heights) + Action Link */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                  {property.overlayNote ? (
                    <p className="text-[10px] sm:text-[11px] text-stone-300/85 leading-snug max-w-md">
                      {property.overlayNote}
                    </p>
                  ) : (
                    <span className="text-[11px] text-stone-300/85 truncate">
                      {property.tagline}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onInquireProperty(property.name);
                    }}
                    id={`btn-inquire-${property.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#E5C583] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>
                      {isSoldOut
                        ? 'Join Waitlist'
                        : property.id === 'lekki-phase-1-project'
                          ? 'Request Schedule'
                          : 'Request Visit'}
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
