'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreHomes: () => void;
  onBookVisit: () => void;
}

export default function Hero({ onExploreHomes, onBookVisit }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex flex-col justify-start pb-16 sm:pb-24">
      {/* Background Soft Sky & Cloud Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5]"
        aria-hidden="true"
      >
        {/* Soft background cloud swells with subtle powder blue glow */}
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[350px] bg-[#C0E8F9]/20 rounded-full blur-3xl filter" />
        <div className="absolute top-1/3 right-[-10%] w-[650px] h-[400px] bg-[#C0E8F9]/25 rounded-full blur-3xl filter" />
      </div>

      {/* Main Content Container with vertical spacing below the navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center relative z-20 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        
        {/* Hero Title - Centered & Bold over imagery */}
        <motion.h1 
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold text-[#162521] tracking-[-0.035em] leading-[1.12] sm:leading-[1.06] max-w-4xl mx-auto drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] px-2"
        >
          You Dream. We Build.
        </motion.h1>

        {/* Subtitle - Exact copy and tone from reference */}
        <motion.p 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#162521]/80 max-w-2xl mx-auto font-normal leading-relaxed px-2"
        >
          Embark on a journey of innovation and excellence with Chapelhill Multicompany International. 
          Whether you have a specific project in mind or are seeking inspiration, we look forward to collaborating with you.
        </motion.p>

        {/* Action Buttons - Matching Reference with custom palette */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-2 sm:px-0"
        >
          {/* Button 1: Explore Homes with primary #461313 & accent #D64933 */}
          <button
            onClick={onExploreHomes}
            id="hero-cta-explore"
            className="group w-full sm:w-auto bg-[#461313] hover:bg-[#D64933] active:scale-[0.98] text-white pl-6 pr-3 py-3.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-[0_4px_18px_rgba(70,19,19,0.25)] hover:shadow-[0_6px_24px_rgba(214,73,51,0.35)] hover:-translate-y-0.5 cursor-pointer min-h-[48px] touch-manipulation"
          >
            <span>Explore Homes</span>
            <span className="w-8 h-8 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </button>

          {/* Button 2: Book a Visit with glassy pill & subtle border */}
          <button
            onClick={onBookVisit}
            id="hero-cta-book-visit"
            className="w-full sm:w-auto bg-white/90 hover:bg-white active:scale-[0.98] text-[#162521] border border-stone-200 hover:border-[#D64933]/50 px-7 py-3.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200 shadow-[0_2px_10px_rgba(22,37,33,0.05)] hover:-translate-y-0.5 cursor-pointer min-h-[48px] flex items-center justify-center touch-manipulation"
          >
            Book a Visit
          </button>
        </motion.div>
      </div>

      {/* Hero Imagery Showcase: The Modern Cantilevered Luxury Villa Nestled in Clouds */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl mx-auto mt-10 sm:mt-14 lg:mt-16 px-3 sm:px-6"
      >
        <div className="relative w-full mx-auto overflow-hidden rounded-2xl sm:rounded-3xl h-[340px] sm:h-[540px] md:h-[680px] lg:h-[760px]">
          {/* Luxury Villa Hero Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg"
              alt="Chapelhill architectural hillside luxury estate nestled in clouds"
              fill
              priority
              className="object-cover object-center scale-100 hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Cloud Mist Overlays (Top, sides, and bottom ethereal mist blending with the sky) */}
          {/* Top subtle fade into sky */}
          <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD]/60 to-transparent pointer-events-none" />

          {/* Bottom billowing cloud mist bank */}
          <div className="absolute bottom-0 inset-x-0 h-32 sm:h-56 bg-gradient-to-t from-[#FEFCFD] via-[#FEFCFD]/85 to-transparent pointer-events-none" />

          {/* Left & Right ambient mist vignetting */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#FEFCFD]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#FEFCFD]/70 to-transparent pointer-events-none" />

          {/* Floating Estate Details Badge in Bottom Corner */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/90 rounded-2xl px-4 py-2.5 shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center">
              <Compass className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#D64933]">
                Flagship Estate • Chapelhill
              </p>
              <p className="text-xs font-bold text-[#162521]">
                Lekki Phase 1 Project
              </p>
            </div>
          </div>

          {/* Verified Architecture Tag in Right Corner */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/90 rounded-full px-3.5 py-1.5 shadow-md text-xs font-medium text-[#162521]">
            <ShieldCheck className="w-4 h-4 text-[#D64933]" />
            <span>Curated Architectural Masterpiece</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
