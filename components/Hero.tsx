'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle2, Eye, Compass, Maximize2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreHomes: () => void;
  onBookVisit: () => void;
}

interface Hotspot {
  id: string;
  top: string;
  left: string;
  title: string;
  subtitle: string;
  details: string;
}

const ARCHITECTURAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'penthouse',
    top: '28%',
    left: '68%',
    title: 'Executive Sky Suite',
    subtitle: 'Cantilevered Glass Panorama',
    details: 'Frameless triple-pane thermal glass with 270° hillside horizon views and automated solar shading.',
  },
  {
    id: 'biophilic',
    top: '34%',
    left: '38%',
    title: 'Biophilic Sky Gardens',
    subtitle: 'Tiered Rooftop Terraces',
    details: 'Drought-tolerant native Mediterranean landscaping with integrated ambient drip irrigation and night uplighting.',
  },
  {
    id: 'atrium',
    top: '64%',
    left: '52%',
    title: 'Grand Living Atrium',
    subtitle: 'Double-Height Hearth Gallery',
    details: 'Seamless indoor-outdoor entertaining lounge with custom walnut accents and radiant heated Italian terrazzo.',
  },
];

export default function Hero({ onExploreHomes, onBookVisit }: HeroProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [viewMode, setViewMode] = useState<'framed' | 'full'>('framed');

  return (
    <section className="relative w-full overflow-hidden pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-20">
      {/* Background Soft Sky & Cloud Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5]"
        aria-hidden="true"
      >
        {/* Soft background cloud swells with subtle powder blue glow */}
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[350px] bg-[#C0E8F9]/20 rounded-full blur-3xl filter" />
        <div className="absolute top-1/3 right-[-10%] w-[650px] h-[400px] bg-[#C0E8F9]/25 rounded-full blur-3xl filter" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-20">
        
        {/* Hero Title - Centered & Bold over imagery */}
        <h1 
          id="hero-title"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold text-[#162521] tracking-[-0.038em] leading-[1.06] max-w-4xl mx-auto drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
        >
          Find Your Dream Home
        </h1>

        {/* Subtitle - Exact copy and tone from reference */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#162521]/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Explore thoughtfully designed homes in premium locations, crafted to match
          modern lifestyles with comfort, elegance, and long-term value.
        </p>

        {/* Action Buttons - Matching Reference with custom palette */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {/* Button 1: Explore Homes with primary #461313 & accent #D64933 */}
          <button
            onClick={onExploreHomes}
            id="hero-cta-explore"
            className="group bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-3 transition-all duration-200 shadow-[0_4px_18px_rgba(70,19,19,0.25)] hover:shadow-[0_6px_24px_rgba(214,73,51,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Homes</span>
            <span className="w-8 h-8 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </button>

          {/* Button 2: Book a Visit with glassy pill & subtle border */}
          <button
            onClick={onBookVisit}
            id="hero-cta-book-visit"
            className="bg-white/80 hover:bg-white text-[#162521] border border-white/90 hover:border-[#D64933]/50 px-7 py-3 rounded-full font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200 shadow-[0_2px_10px_rgba(22,37,33,0.05)] hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Visit
          </button>
        </div>

        {/* View Mode Toggle Pill (Lets users experience both Image 1 compact framing and Image 2 panoramic estate) */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="inline-flex items-center p-1 bg-white/50 backdrop-blur-md rounded-full border border-white/70 text-xs font-medium text-[#162521]">
            <button
              onClick={() => setViewMode('framed')}
              id="toggle-view-framed"
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === 'framed'
                  ? 'bg-[#461313] text-white shadow-xs font-semibold'
                  : 'hover:text-[#461313]'
              }`}
            >
              Framed Vista
            </button>
            <button
              onClick={() => setViewMode('full')}
              id="toggle-view-full"
              className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'full'
                  ? 'bg-[#461313] text-white shadow-xs font-semibold'
                  : 'hover:text-[#461313]'
              }`}
            >
              <Maximize2 className="w-3 h-3" />
              Full Estate
            </button>
          </div>
        </div>
      </div>

      {/* Hero Imagery Showcase: The Modern Cantilevered Luxury Villa Nestled in Clouds */}
      <div className="relative w-full max-w-6xl mx-auto mt-6 sm:mt-10 px-4 sm:px-6">
        <div 
          className={`relative w-full mx-auto transition-all duration-700 ease-out overflow-hidden rounded-3xl ${
            viewMode === 'framed'
              ? 'h-[360px] sm:h-[460px] md:h-[540px]'
              : 'h-[500px] sm:h-[640px] md:h-[760px]'
          }`}
        >
          {/* Luxury Villa Hero Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/luxury_villa_hero.jpg"
              alt="Chapelhill architectural hillside luxury estate nestled in clouds"
              fill
              priority
              className="object-cover object-center scale-100 hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Cloud Mist Overlays (Top, sides, and bottom ethereal mist blending with the sky) */}
          {/* Top subtle fade into sky */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD]/60 to-transparent pointer-events-none" />

          {/* Bottom billowing cloud mist bank */}
          <div className="absolute bottom-0 inset-x-0 h-44 sm:h-56 bg-gradient-to-t from-[#FEFCFD] via-[#FEFCFD]/85 to-transparent pointer-events-none" />

          {/* Left & Right ambient mist vignetting */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FEFCFD]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FEFCFD]/70 to-transparent pointer-events-none" />

          {/* Interactive Architectural Hotspot Beacons */}
          {ARCHITECTURAL_HOTSPOTS.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute z-20 group"
              style={{ top: hotspot.top, left: hotspot.left }}
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#162521] shadow-lg border border-white/90 hover:scale-110 transition-all cursor-pointer"
                aria-label={hotspot.title}
                id={`hotspot-${hotspot.id}`}
              >
                {/* Pulsing beacon wave with accent #D64933 */}
                <span className="absolute inset-0 rounded-full bg-[#D64933] animate-ping opacity-40 pointer-events-none" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#461313]" />
              </button>

              {/* Tooltip Card */}
              {activeHotspot?.id === hotspot.id && (
                <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-64 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/80 text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#D64933] uppercase mb-1">
                    <span>{hotspot.subtitle}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(null);
                      }}
                      className="text-slate-400 hover:text-[#162521]"
                    >
                      ✕
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-[#162521]">{hotspot.title}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {hotspot.details}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Floating Estate Details Badge in Bottom Corner */}
          <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/90 rounded-2xl px-4 py-2.5 shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center">
              <Compass className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#D64933]">
                Flagship Estate • Chapelhill
              </p>
              <p className="text-xs font-bold text-[#162521]">
                The Lumina Belvedere Residence
              </p>
            </div>
          </div>

          {/* Verified Architecture Tag in Right Corner */}
          <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/90 rounded-full px-3.5 py-1.5 shadow-md text-xs font-medium text-[#162521]">
            <ShieldCheck className="w-4 h-4 text-[#D64933]" />
            <span>Curated Architectural Masterpiece</span>
          </div>
        </div>
      </div>
    </section>
  );
}
