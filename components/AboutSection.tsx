'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Hammer, ShieldCheck, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreServices?: () => void;
  onContactClick?: () => void;
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
  statLabel: string;
  statValue: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'development',
    number: '01',
    title: 'Property Development',
    subtitle: 'Visionary Masterplanning & Site Curation',
    icon: Building2,
    tagline: 'Transforming prime geographic topography into generational architectural icons.',
    description:
      'We excel in designing and constructing diverse projects, from buildings to industrial properties. Our expertise spans automated architectural designs, road construction, drainage, and structural steel work for clients and corporations alike.',
    highlights: [
      'Prime off-market acquisition & zoning entitlements',
      'Award-winning architectural concept integration',
      'Sustainable high-performance ecological footprint',
    ],
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(1).jpeg',
    imageAlt: 'Chapelhill cantilevered masterplanned hillside estate',
    statLabel: 'Portfolio Value',
    statValue: '$2.8B+',
  },
  {
    id: 'Remodeling & renovation',
    number: '02',
    title: 'Remodelling & Renovation',
    subtitle: 'Structural Mastery & Bespoke Engineering',
    icon: Hammer,
    tagline: 'Uncompromising engineering standards from sub-grade foundations to frameless glass skies.',
    description:
      'We specialize in impeccable finishing for structures, from carcasses to semi-completed projects. Our expertise extends to remodeling, renovation, and innovative space design, including rapid wall partitions.',
    highlights: [
      'Seismic cantilever & structural glass engineering',
      'Artisan millwork, thermal envelopes & radiant systems',
      'Zero-defect delivery and verified acoustic insulation',
    ],
    image: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (11).jpeg',
    imageAlt: 'Chapelhill precision construction and contemporary architectural finishes',
    statLabel: 'On-Time Handover',
    statValue: '100%',
  },
  {
    id: 'maintenance',
    number: '03',
    title: 'Property Maintenance & Project Management',
    subtitle: 'White-Glove Asset Preservation',
    icon: ShieldCheck,
    tagline: 'Continuous private estate stewardship to protect and enhance property value.',
    description:
      'Regular maintenance of our customers’ property/facility, plumbing, electrical works, air-conditioning repairs, tiling,building works,roof leakages,reclamation of land in water front areas etc to enable them focus on their core businesses',
    highlights: [
      '24/7 dedicated estate concierge & mechanical technicians',
      'Preventative climate, solar & structural diagnostics',
      'Discreet family office and VIP privacy compliance',
    ],
    image: '/maintenance.webp',
    imageAlt: 'Chapelhill luxury estate maintenance and pool grounds care',
    statLabel: 'Client Retention',
    statValue: '98.4%',
  },
];

export default function AboutSection({ onLearnMoreServices, onContactClick }: AboutSectionProps) {
  const [activeDisciplineId, setActiveDisciplineId] = useState<string>('development');

  const currentDiscipline =
    DISCIPLINES.find((d) => d.id === activeDisciplineId) || DISCIPLINES[0];

  return (
    <section id="about-us" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 relative z-20">
      {/* Decorative ambient sky glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-white/40 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Header Eyebrow & Brand Quote Statement */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/80 shadow-2xs rounded-full px-3.5 py-1.5 mb-4 sm:mb-5 transition-all">
          
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#162521]">
            About Chapelhill
          </span>
        </div>

        {/* The Exact Quote Formatted with Editorial Elegance & Color Accents */}
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.25] sm:leading-[1.18] px-2">
          &ldquo;At Chapelhill Multicompany International, we epitomize excellence in{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            property development
          </span>
          ,{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            construction
          </span>
          , and{' '}
          <span className="underline decoration-[#D64933] decoration-2 underline-offset-4 sm:underline-offset-8">
            maintenance services
          </span>
          .&rdquo;
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#162521]/80 max-w-2xl mx-auto leading-relaxed px-2">
          A unified standard of architectural vision, bespoke construction rigor, and continuous estate preservation across premier global markets.
        </p>
      </div>

      {/* Modern Asymmetric Editorial Layout: Interactive Disciplines + Dynamic Architectural Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column (6 Cols): The 3 Disciplines with Sleek Minimalist Dividers */}
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
                  className={`group relative rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-stone-200/90 shadow-[0_12px_32px_rgba(70,19,19,0.07)] scale-[1.01]'
                      : 'bg-white/60 hover:bg-white/90 backdrop-blur-sm border-stone-200/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-3.5">
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
                          <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase ${isActive ? 'text-[#D64933]' : 'text-[#162521]/60'}`}>
                            {discipline.number}
                          </span>
                          <span className="text-[#162521]/30">•</span>
                          <span className="text-[11px] sm:text-xs font-semibold text-[#162521]/70 truncate">
                            {discipline.subtitle}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-[#162521] mt-0.5 tracking-tight group-hover:text-[#461313] transition-colors">
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

                      <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {discipline.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#162521]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
            <Link
              href="/about"
              id="about-cta-full-page"
              className="group bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[44px]"
            >
              <span>Meet Leadership & Full Story</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>

            <button
              onClick={onContactClick}
              id="about-cta-inquire"
              className="bg-white/90 hover:bg-white text-[#162521] hover:text-[#461313] border border-stone-200/90 hover:border-[#461313]/40 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Consult Senior Advisory
            </button>

            <Link
              href="/services"
              id="about-cta-view-services"
              className="bg-white/80 hover:bg-white text-stone-700 hover:text-[#162521] border border-stone-200/90 hover:border-stone-300 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
            >
              <span>Services Overview</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </Link>
          </div>
        </div>

        {/* Right Column (6 Cols): Architectural Showcase Mirroring Active Discipline */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[420px] lg:h-full min-h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 shadow-[0_16px_44px_rgba(22,37,33,0.09)] group">
            {/* Background Image of Selected Discipline */}
            <Image
              src={currentDiscipline.image}
              alt={currentDiscipline.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

            

            {/* Top Right Metric Badge */}
            <div className="absolute top-5 right-5 z-10 bg-[#461313]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold">
              {currentDiscipline.statLabel}: <span className="font-bold text-[#C0E8F9]">{currentDiscipline.statValue}</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 inset-x-6 z-10 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C0E8F9]">
                {currentDiscipline.subtitle}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentDiscipline.title}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
                {currentDiscipline.tagline}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
