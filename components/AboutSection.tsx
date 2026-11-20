'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Hammer,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: (serviceTitle?: string) => void;
}

interface Discipline {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'development-sales',
    number: '01',
    title: 'Property Development and Sales',
    subtitle: 'Residential & Approved Off-Plan Projects',
    icon: Building2,
    tagline:
      'Development and sale of residential and other approved real estate projects, including off-plan developments.',
    description:
      'Development and sale of residential and other approved real estate projects, including off-plan developments. From pre-construction residences at IVY Heights, Ikate, Lekki Phase 1, Lagos to completed homes at Ivy Homes Abijo GRA, we deliver thoughtfully planned properties with verified documentation.',
    highlights: [
      'Residential & approved real estate developments',
      'Off-plan acquisition with flexible payment schedules',
      'Verified title documentation & structured handover',
    ],
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited residential development and sales',
  },
  {
    id: 'construction-management',
    number: '02',
    title: 'Construction and Project Management',
    subtitle: 'Builds, Coordination, Renovations & Remodelling',
    icon: Hammer,
    tagline:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.',
    description:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions. Our team manages ground-up builds, carcass completion, interior transformations, and disciplined site coordination.',
    highlights: [
      'Construction for private & corporate clients',
      'Pre- and post-contract project coordination',
      'Renovations, remodelling & finishing solutions',
    ],
    image:
      '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited construction and project management',
  },
  {
    id: 'facility-management',
    number: '03',
    title: 'Property and Facility Management',
    subtitle: 'Maintenance, Repairs & Infrastructure Care',
    icon: ShieldCheck,
    tagline:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.',
    description:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services. We preserve residential estates and commercial facilities through responsive MEP repairs, grounds care, and scheduled preventive maintenance.',
    highlights: [
      'Preventive property & facility management',
      'Building repairs, electrical, plumbing & HVAC care',
      'Estate infrastructure & utilities maintenance',
    ],
    image: '/maintenance.webp',
    imageAlt: 'ChapelHill Multicompany Limited property and facility management',
  },
  {
    id: 'joint-ventures',
    number: '04',
    title: 'Joint Ventures and Investment Partnerships',
    subtitle: 'Landowners, Investors & Strategic Partners',
    icon: Handshake,
    tagline:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.',
    description:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities. We structure transparent co-development frameworks that unlock viable residential and commercial land parcels.',
    highlights: [
      'Landowner & developer joint-venture structuring',
      'Investor & institutional co-development partnerships',
      'Feasibility review & end-to-end project delivery',
    ],
    image: '/images/joint-venture-partnerships.jpg',
    imageAlt: 'ChapelHill Multicompany Limited joint ventures and investment partnerships',
  },
];

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const [activeDisciplineId, setActiveDisciplineId] = useState<string>('development-sales');

  const currentDiscipline =
    DISCIPLINES.find((d) => d.id === activeDisciplineId) || DISCIPLINES[0];

  return (
    <section
      id="about-us"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 relative z-20"
    >
      {/* Decorative ambient sky glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-white/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Header Eyebrow & Brand Quote Statement */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/80 shadow-2xs rounded-full px-3.5 py-1.5 mb-4 sm:mb-5 transition-all">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#162521]">
            Our Core Services &amp; Focus
          </span>
        </div>

        {/* Brand Editorial Statement */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.25] sm:leading-[1.18] px-2">
          &ldquo;At ChapelHill Multicompany Limited, we deliver trusted expertise across{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            property development
          </span>
          ,{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            construction
          </span>
          ,{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            facility management
          </span>
          , and{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            partnerships
          </span>
          .&rdquo;
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#162521]/80 max-w-2xl mx-auto leading-relaxed px-2">
          A unified standard of architectural vision, bespoke construction rigor, continuous property preservation, and collaborative partnerships across Nigeria.
        </p>
      </div>

      {/* Asymmetric Editorial Layout: Interactive 4 Disciplines + Dynamic Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column (6 Cols): The 4 Official Service Categories */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {DISCIPLINES.map((discipline) => {
              const isActive = discipline.id === activeDisciplineId;
              const IconComponent = discipline.icon;

              return (
                <div
                  key={discipline.id}
                  onClick={() => setActiveDisciplineId(discipline.id)}
                  id={`discipline-tab-${discipline.id}`}
                  className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-stone-200/90 shadow-[0_12px_32px_rgba(70,19,19,0.07)]'
                      : 'bg-white/60 hover:bg-white/90 backdrop-blur-sm border-stone-200/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors mt-0.5 sm:mt-0 ${
                          isActive
                            ? 'bg-[#461313] text-white shadow-sm'
                            : 'bg-slate-200/80 text-[#162521] group-hover:bg-[#C0E8F9] group-hover:text-[#461313]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase ${
                              isActive ? 'text-[#D64933]' : 'text-[#162521]/60'
                            }`}
                          >
                            {discipline.number}
                          </span>
                          <span className="text-[#162521]/30">·</span>
                          <span className="text-[11px] sm:text-xs font-semibold text-[#162521]/70 truncate">
                            {discipline.subtitle}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#162521] mt-0.5 tracking-tight group-hover:text-[#461313] transition-colors">
                          {discipline.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                        isActive
                          ? 'bg-[#461313] text-white rotate-90'
                          : 'text-slate-400 group-hover:text-[#461313] group-hover:translate-x-0.5'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Expanded Detail When Active */}
                  {isActive && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 animate-in fade-in duration-300">
                      <p className="text-xs sm:text-sm text-[#162521]/80 leading-relaxed">
                        {discipline.description}
                      </p>

                      <div className="mt-3 grid grid-cols-1 gap-1.5">
                        {discipline.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs font-medium text-[#162521]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Relevant Per-Category Enquiry Action */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onContactClick?.(discipline.title);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <span>Enquire About This Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <Link
                          href={`/services#${discipline.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors"
                        >
                          <span>Explore Full Scope</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2 sm:pt-4 flex items-center">
            <Link
              href="/services"
              id="about-cta-view-services"
              className="group bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[44px] whitespace-nowrap shrink-0"
            >
              <span>Explore All Services</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column (6 Cols): Architectural Showcase Mirroring Active Service Category */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-full min-h-[300px] lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 shadow-[0_16px_44px_rgba(22,37,33,0.09)] group">
            <Image
              src={currentDiscipline.image}
              alt={currentDiscipline.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Measured Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Bottom Caption & Enquiry Action Overlay */}
            <div className="absolute bottom-6 inset-x-6 z-10 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C0E8F9]">
                {currentDiscipline.number} · {currentDiscipline.subtitle}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentDiscipline.title}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
                {currentDiscipline.tagline}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onContactClick?.(currentDiscipline.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#162521] hover:bg-[#E5C583] text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href={`/services#${currentDiscipline.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                >
                  <span>Service Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
