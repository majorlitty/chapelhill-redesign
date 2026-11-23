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
    tagline: 'Pre-Construction / Off-Plan · 24-Month Proposed Build',
    status: 'ongoing',
    statusBadge: 'Pre-Construction · Off-Plan',
    statusLabel: 'Pre-Construction / Off-Plan',
    startingPrice: 'Offer Sheet on Request',
    priceRange: '2 & 3-Bed · 2–3 Baths',
    essentialMetrics: [
      { label: 'Apartment Mix', value: '2 & 3 Bedroom (2–3 Baths)' },
      { label: 'Stage & Build', value: 'Off-Plan · 24-Mo Schedule' },
      { label: 'Payment Tracks', value: '12 / 18-Mo · 24-Mo Zero Deposit' },
    ],
    overlayNote:
      'Pricing, signing terms, and due diligence subject to formal offer. Visuals are illustrative design previews. WhatsApp Desk: +234 803 286 5488.',
    isIllustrativeRender: true,
    paymentPlan:
      '12-month upfront-deposit, 18-month milestone, or 24-month zero-initial-deposit plan',
    landSize: 'Proposed 24-Month Build Schedule',
    totalUnits: '2 & 3-Bedroom Apartments',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    description:
      'Modern residential development in Ikate, Lekki Phase 1, Lagos, tailored for end-users and long-term real estate investors.',
    unitBreakdown: [
      {
        title: '2-Bedroom Apartments',
        count: 'Pre-Construction / Off-Plan',
        price: 'Pricing Sheet on Request',
        description:
          'Designed for compact urban living and rental demand (2 to 3 bathrooms depending on configuration); layout details available per floor plan.',
      },
      {
        title: '3-Bedroom Apartments',
        count: 'Pre-Construction / Off-Plan',
        price: 'Pricing Sheet on Request',
        description:
          'Larger floorplates suited for families or executive rentals (2 to 3 bathrooms depending on configuration).',
      },
    ],
    specifications: [
      'Location: Ikate, Lekki Phase 1, Lagos',
      'Stage & Timeline: Pre-construction / off-plan with a proposed 24-month build schedule',
      'Payment Tracks: 12-month, 18-month, and 24-month zero-initial-deposit plan',
      'Visuals: Exterior views, interior concepts, and floor plans are illustrative design previews',
    ],
    investmentHighlights: [
      'Built for buyers seeking central Lekki access, structured payments, and modern apartment layouts',
      'Final pricing, signing requirements, and title status subject to formal offer terms and due diligence',
      'Request pricing sheets, floor plans, or site inspection via WhatsApp Desk: +234 803 286 5488',
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
    name: 'IVY Homes, Ogudu GRA',
    shortTitle: 'IVY Homes, Ogudu GRA',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    microLocation: 'Ogudu GRA, Lagos',
    tagline: 'SOLD OUT · Construction Ongoing',
    status: 'sold-out',
    statusBadge: 'SOLD OUT · Ongoing',
    statusLabel: 'SOLD OUT · Construction Ongoing',
    startingPrice: 'SOLD OUT',
    priceRange: 'SOLD OUT',
    essentialMetrics: [
      { label: 'Availability', value: 'SOLD OUT' },
      { label: 'Construction', value: 'Ongoing' },
      { label: 'Next Release', value: 'Future Developments' },
    ],
    overlayNote:
      'Fully SOLD OUT while construction is ongoing. Enquire with us for upcoming and future residential developments.',
    paymentPlan: 'Fully sold out — enquire for future developments',
    landSize: 'Construction Ongoing',
    totalUnits: 'SOLD OUT · Ongoing Construction',
    image: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    description:
      'IVY Homes, Ogudu GRA is currently under construction and fully SOLD OUT. Prospective buyers may enquire about future developments.',
    unitBreakdown: [
      {
        title: '5-Bedroom Master Penthouse',
        count: 'SOLD OUT',
        price: 'SOLD OUT',
        description:
          'Multi-level penthouse residence currently under construction and fully sold out.',
      },
      {
        title: 'Ensuite Service Quarters',
        count: 'SOLD OUT',
        price: 'SOLD OUT',
        description:
          'Dedicated auxiliary accommodation with independent access point.',
      },
    ],
    specifications: [
      'Status: SOLD OUT — All units allocated',
      'Construction Status: Ongoing site works',
      'Approved architectural renders and project updates',
      'Solar inverter integration & smart home pre-wiring planned',
      'Enquiry open for upcoming and future developments',
    ],
    investmentHighlights: [
      'SOLD OUT: IVY Homes, Ogudu GRA is fully allocated',
      'Ongoing Construction: Development works currently in progress',
      'Future Releases: Enquire for upcoming residential developments',
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
                href={`/projects/${property.id}`}
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
                    href={`/projects/${property.id}`}
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
                      onInquireProperty(
                        isSoldOut
                          ? `Future Developments (Enquiry from ${property.name})`
                          : property.name
                      );
                    }}
                    id={`btn-inquire-${property.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#E5C583] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>
                      {isSoldOut
                        ? 'Enquire Future Projects'
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
