'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreHomes: () => void;
}

export default function Hero({ onExploreHomes }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

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

  const tactileTransition = {
    type: 'spring' as const,
    stiffness: 460,
    damping: 26,
    mass: 0.6,
  };

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
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] text-balance"
          >
            Building Value. <br />
            Developing Possibilities.
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-white/90 font-normal leading-relaxed max-w-2xl"
          >
            ChapelHill Multicompany Limited is a Nigerian real estate company specialising in property development, construction, management, and strategic partnerships. We work with individuals, businesses, and investors to deliver quality projects and create lasting property value.
          </motion.p>

          {/* Primary CTA Row */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.button
              type="button"
              onClick={onExploreHomes}
              id="hero-cta-explore"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              transition={tactileTransition}
              className="group min-h-[48px] sm:min-h-[52px] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FEFCFD] hover:bg-[#E5C583] text-[#162521] border border-white/80 hover:border-[#E5C583] font-semibold text-sm sm:text-[15px] tracking-[-0.01em] inline-flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 touch-manipulation select-none active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e0d]"
            >
              <span>Explore Properties</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 stroke-[1.75] text-[#162521]/75 group-hover:text-[#162521] group-hover:translate-x-1 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
