'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreHomes: () => void;
  onBookVisit: () => void;
}

export default function Hero({ onExploreHomes, onBookVisit }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      videoEl.pause();
    } else {
      videoEl.play().catch(() => {
        // Ignore autoplay rejection if browser policy blocks un-interacted playback
      });
    }
  }, []);

  return (
    <section
      id="hero-section"
      aria-label="ChapelHill Multicompany Limited Hero Showcase"
      className="relative w-full h-[100dvh] min-h-[620px] overflow-hidden bg-[#0c1412] flex flex-col justify-end"
    >
      {/* Full-Bleed Architectural Looping Video Background (Ivy Heights) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/ivy-frame.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
      >
        <source src="/videos/ivy-heights-loop.mp4" type="video/mp4" />
      </video>

      {/* Semi-Transparent Dimming Gradient Overlays for Readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-black/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#090e0d]/95 via-[#090e0d]/60 to-black/25"
        aria-hidden="true"
      />

      {/* Bottom Overlay Content Stack */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-16">
        <div className="flex flex-col items-start text-left max-w-3xl">
          {/* Heading */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] text-balance"
          >
            Building Value. <br />
            Developing Possibilities.
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-white/90 font-normal leading-relaxed max-w-2xl"
          >
            ChapelHill Multicompany Limited is a Nigerian real estate company specialising in property development, construction, management, and strategic partnerships. We work with individuals, businesses, and investors to deliver quality projects and create lasting property value.
          </motion.p>

          {/* Dual Action CTA Row (Primary on Left, Secondary on Right, Same Baseline) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Primary Button (Left) */}
            <button
              type="button"
              onClick={onExploreHomes}
              id="hero-cta-explore"
              className="group bg-[#461313] hover:bg-[#D64933] active:scale-[0.98] text-white pl-5 sm:pl-6 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base inline-flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-200 shadow-[0_6px_24px_rgba(70,19,19,0.45)] hover:shadow-[0_8px_28px_rgba(214,73,51,0.45)] hover:-translate-y-0.5 cursor-pointer min-h-[46px] sm:min-h-[48px] whitespace-nowrap shrink-0 touch-manipulation"
            >
              <span>Explore Homes</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </span>
            </button>

            {/* Secondary Button (Right) */}
            <button
              type="button"
              onClick={onBookVisit}
              id="hero-cta-book-visit"
              className="bg-white/15 hover:bg-white active:scale-[0.98] text-white hover:text-[#162521] border border-white/45 hover:border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base backdrop-blur-md transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 cursor-pointer min-h-[46px] sm:min-h-[48px] inline-flex items-center justify-center whitespace-nowrap shrink-0 touch-manipulation"
            >
              Book a Visit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
