'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CircleDot, Sparkles, MessageCircle } from 'lucide-react';

interface ClosingAdvisoryBannerProps {
  onContactClick: () => void;
}

export default function ClosingAdvisoryBanner({ onContactClick }: ClosingAdvisoryBannerProps) {
  return (
    <section 
      id="closing-advisory-banner" 
      aria-label="Book Private Advisory Consultation"
      className="w-full relative overflow-hidden pt-20 sm:pt-28 pb-0 bg-gradient-to-b from-[#FEFCFD] via-[#cfe5f1]/40 via-45% to-[#0e1715] text-[#162521]"
    >
      {/* Atmospheric Cloud & Sky Ambient Light */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/90 via-[#d7e9f3]/60 to-[#0e1715]/95 pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Subtle Sky Horizon Mist */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-white to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Content Container (Centered exactly like inspiration) */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-20 flex flex-col items-center">
        
        {/* Eyebrow Target Pill: "⊙ Find your next home" */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-wide text-[#162521]/75 mb-5 sm:mb-6">
          <CircleDot className="w-3.5 h-3.5 text-[#162521]/70 animate-pulse" />
          <span>Find your next home</span>
        </div>

        {/* Display Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#162521] tracking-tight leading-[1.08] sm:leading-[1.06] max-w-3xl">
          Discover homes designed <br className="hidden sm:inline" />
          for your lifestyle
        </h2>

        {/* Editorial Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#162521]/80 max-w-2xl leading-relaxed">
          Explore properties, compare options, and move forward with confidence — everything you need in one place.
        </p>

        {/* Primary CTA: "Get in Touch →" */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            onClick={onContactClick}
            id="closing-advisory-cta-button"
            className="group relative inline-flex items-center gap-3.5 bg-[#162521] hover:bg-[#461313] text-white pl-7 pr-3 py-3 rounded-full shadow-[0_10px_30px_rgba(22,37,33,0.25)] hover:shadow-[0_16px_36px_rgba(70,19,19,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Book a private consultation to get in touch"
          >
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              Get in Touch
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-[#162521] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4 text-[#162521]" />
            </div>
          </button>

          {/* Quick Direct WhatsApp option */}
          <a
            href={`https://wa.me/2348039876543?text=${encodeURIComponent('Hello Chapelhill, I would like to book a private consultation regarding your luxury estates.')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="closing-advisory-whatsapp-link"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#162521]/80 hover:text-[#162521] bg-white/70 hover:bg-white/95 backdrop-blur-md px-5 py-3 rounded-full border border-white/80 shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Majestic Curved Modern Villa Base (Rising from bottom of the banner) */}
      <div className="relative w-full max-w-6xl mx-auto mt-12 sm:mt-16 h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-15px_40px_rgba(22,37,33,0.08)]">
        <Image
          src="/luxury_villa_closing.jpg"
          alt="Curved modern luxury architecture designed for modern lifestyle"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-top filter brightness-[1.02] contrast-[1.04]"
        />

        {/* Soft top gradient to blend the building image into the sky */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Smooth dark gradient to merge seamlessly into footer */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#0e1715] via-[#0e1715]/70 to-transparent pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Discreet Corner Badge */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 flex items-center gap-2 bg-[#0e1715]/80 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C583]" />
          <span>Chapelhill Architectural Masterpieces</span>
        </div>
      </div>

      {/* Full-width bottom feathering band matching the footer foundation */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 bg-[#0e1715] pointer-events-none -z-0"
        aria-hidden="true"
      />
    </section>
  );
}
