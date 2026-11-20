'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface DeliveryStage {
  step: string;
  title: string;
  phase: string;
  summary: string;
  details: string;
  deliverables: string[];
}

const DELIVERY_STAGES: DeliveryStage[] = [
  {
    step: '01',
    title: 'Initial Consultation',
    phase: 'Brief & Alignment',
    summary:
      'We start with an in-depth conversation to understand your vision, goals, and budget. This helps us align our services with your exact specifications.',
    details:
      'Whether you are acquiring an off-plan residence, commissioning a custom build on client-owned land, planning a renovation, or exploring a joint venture, we establish practical scope, intended timelines, and commercial parameters upfront.',
    deliverables: [
      'Project objective & brief definition',
      'Preliminary budget & timeline framing',
      'Service track & documentation guidance',
    ],
  },
  {
    step: '02',
    title: 'Site Visit & Assessment',
    phase: 'Technical Due Diligence',
    summary:
      'Our technical team visits your site to evaluate the geographic environment, assess soil and drainage conditions, and identify project opportunities or challenges.',
    details:
      'Engineers and quantity surveyors inspect physical access, topography, neighborhood drainage patterns, and existing structural conditions before any execution schedule or engineering assumption is finalized.',
    deliverables: [
      'Physical site, access & terrain inspection',
      'Soil, drainage & environmental review',
      'Technical risk & feasibility notes',
    ],
  },
  {
    step: '03',
    title: 'Proposal & Quotation',
    phase: 'Scope & Costing',
    summary:
      'We prepare a detailed project proposal, including the full scope of work, architectural concepts, milestones, timelines, and a transparent cost breakdown.',
    details:
      'Every line item is structured so clients and institutional partners can review technical specifications, material standards, milestone tranches, and payment terms clearly prior to commitment.',
    deliverables: [
      'Detailed scope of work & architectural brief',
      'Transparent cost breakdown & schedule',
      'Milestone plan & commercial offer sheet',
    ],
  },
  {
    step: '04',
    title: 'Agreement & Kickoff',
    phase: 'Governance & Mobilization',
    summary:
      'Once approved, we formalize the statutory agreement and assign a dedicated project manager to lead your project with uncompromised precision from start to finish.',
    details:
      'Legal and project teams align contract terms, statutory compliance requirements, procurement lead times, and site safety protocols before mobilizing on site.',
    deliverables: [
      'Formalized agreement & compliance sign-off',
      'Dedicated project manager assignment',
      'Site mobilization & work programme activation',
    ],
  },
  {
    step: '05',
    title: 'Project Execution & Updates',
    phase: 'Construction & Reporting',
    summary:
      'We execute with precision craftsmanship and keep you fully informed through regular photo updates, video milestone reports, and transparent communication.',
    details:
      'For both local clients and Nigerians in the diaspora, structured reporting keeps construction progress, quality checks, and stage transitions visible without needing daily physical presence on site.',
    deliverables: [
      'Stage-by-stage structural & finishing supervision',
      'Regular photo updates & video milestone reports',
      'Procurement control & site safety compliance',
    ],
  },
  {
    step: '06',
    title: 'Final Delivery & Ongoing Support',
    phase: 'Handover & Stewardship',
    summary:
      'After rigorous multi-stage inspection and official handover, we remain available for ongoing property maintenance to ensure enduring peace of mind.',
    details:
      'Upon completion walkthrough and snagging sign-off, ChapelHill transitions smoothly from construction delivery into preventive maintenance, repairs, and facility management support where engaged.',
    deliverables: [
      'Multi-stage inspection & handover walkthrough',
      'Completion documentation & key transfer',
      'Ongoing facility & preventive maintenance options',
    ],
  },
];

interface DeliveryMethodologyStickyProps {
  onConsultClick?: () => void;
}

export default function DeliveryMethodologySticky({
  onConsultClick,
}: DeliveryMethodologyStickyProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const stagesContainerRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: stagesContainerRef,
    offset: ['start 55%', 'end 60%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let frameId = 0;

    const updateActiveStep = () => {
      const focusLine = window.innerHeight * 0.42;
      let nextActive = 0;

      for (let i = 0; i < stageRefs.current.length; i++) {
        const el = stageRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= focusLine) {
          nextActive = i;
        }
      }

      // If scrolled near the very end of the stages container, highlight final step
      const lastEl = stageRefs.current[DELIVERY_STAGES.length - 1];
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect();
        if (lastRect.bottom <= window.innerHeight * 0.92 && lastRect.top < window.innerHeight * 0.7) {
          nextActive = DELIVERY_STAGES.length - 1;
        }
      }

      setActiveIndex(nextActive);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveStep);
    };

    updateActiveStep();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToStage = (index: number) => {
    setActiveIndex(index);
    const target = stageRefs.current[index];
    if (!target) return;
    target.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  const activeStage = DELIVERY_STAGES[activeIndex] ?? DELIVERY_STAGES[0];
  const progressPercent = ((activeIndex + 1) / DELIVERY_STAGES.length) * 100;

  return (
    <section
      id="delivery-methodology"
      aria-labelledby="delivery-methodology-heading"
      className="py-14 sm:py-20 border-b border-stone-200/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* LEFT COLUMN: Pinned Sticky Numbered Index (01 through 06) */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
              Disciplined Execution · Stage {activeStage.step} of 06
            </p>
            <h2
              id="delivery-methodology-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#162521] mt-2 tracking-[-0.02em] leading-[1.15] text-balance"
            >
              Our 6-Step Project Delivery Methodology
            </h2>
            <p className="font-sans mt-3 text-sm sm:text-[15px] text-stone-600 leading-[1.68]">
              From initial brief and site assessment through handover and ongoing facility care,
              every engagement progresses through six structured checkpoints.
            </p>
          </div>

          {/* Vertical Numbered Index with Live Progress Line */}
          <nav
            aria-label="Project delivery stages"
            className="mt-8 relative pl-5"
          >
            {/* Background Track */}
            <div
              className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-stone-200 rounded-full overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="w-full bg-gradient-to-b from-[#461313] to-[#D64933] origin-top"
                animate={{ height: `${progressPercent}%` }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                }
              />
            </div>

            <ol className="space-y-1.5">
              {DELIVERY_STAGES.map((stage, index) => {
                const isActive = index === activeIndex;
                const isPassed = index < activeIndex;
                return (
                  <li key={stage.step} className="relative">
                    {/* Node Dot on Vertical Progress Line */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#D64933] border-[#D64933] ring-4 ring-[#D64933]/15'
                          : isPassed
                            ? 'bg-[#461313] border-[#461313]'
                            : 'bg-[#FEFCFD] border-stone-300'
                      }`}
                    >
                      {(isActive || isPassed) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>

                    <button
                      type="button"
                      onClick={() => scrollToStage(index)}
                      aria-current={isActive ? 'step' : undefined}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-baseline justify-between gap-3 transition-all duration-200 cursor-pointer min-h-[44px] ${
                        isActive
                          ? 'bg-[#F7F3F5] text-[#162521] shadow-2xs'
                          : 'text-stone-500 hover:text-[#162521] hover:bg-stone-100/70'
                      }`}
                    >
                      <span className="flex items-baseline gap-3 min-w-0">
                        <span
                          className={`font-heading text-xs font-bold tracking-wider shrink-0 transition-colors ${
                            isActive
                              ? 'text-[#D64933]'
                              : isPassed
                                ? 'text-[#461313]'
                                : 'text-stone-400'
                          }`}
                        >
                          {stage.step}
                        </span>
                        <span
                          className={`font-heading text-sm sm:text-[15px] truncate transition-colors ${
                            isActive ? 'font-bold text-[#162521]' : 'font-semibold'
                          }`}
                        >
                          {stage.title}
                        </span>
                      </span>

                      <span
                        className={`text-[11px] font-medium shrink-0 hidden sm:inline transition-opacity ${
                          isActive ? 'text-[#461313] opacity-100' : 'opacity-0'
                        }`}
                      >
                        Active
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          {onConsultClick && (
            <div className="mt-7 pt-6 border-t border-stone-200/80 hidden lg:block">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors cursor-pointer group"
              >
                <span>Start at Stage 01 — Book Initial Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </aside>

        {/* RIGHT COLUMN: Scrolling Detailed Stage Breakdowns with Live Continuous Progress Rail */}
        <div
          ref={stagesContainerRef}
          className="lg:col-span-7 relative pl-6 sm:pl-9"
        >
          {/* Continuous Vertical Scroll Progress Line */}
          <div
            className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-stone-200/90 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#461313] via-[#D64933] to-[#461313] origin-top"
              style={{
                scaleY: shouldReduceMotion ? 1 : smoothProgress,
              }}
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {DELIVERY_STAGES.map((stage, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;
              return (
                <article
                  key={stage.step}
                  id={`delivery-step-${stage.step}`}
                  ref={(el) => {
                    stageRefs.current[index] = el;
                  }}
                  className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-[#461313]/30 shadow-[0_12px_32px_rgba(22,37,33,0.06)]'
                      : 'bg-white/75 border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  {/* Numbered Milestone Marker Sitting Directly on the Live Rail */}
                  <div
                    aria-hidden="true"
                    className={`absolute -left-6 sm:-left-9 top-7 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-heading text-[10px] sm:text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#D64933] border-[#D64933] text-white scale-105 shadow-xs'
                        : isPassed
                          ? 'bg-[#461313] border-[#461313] text-white'
                          : 'bg-[#FEFCFD] border-stone-300 text-stone-500'
                    }`}
                  >
                    {stage.step}
                  </div>

                  {/* Top Stage Metadata Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-100">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D64933]">
                      Stage {stage.step} · {stage.phase}
                    </p>
                    <span className="font-heading text-xs font-semibold text-stone-400">
                      {stage.step} / 06
                    </span>
                  </div>

                  {/* Step Title (Outfit) */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#162521] mt-4 tracking-[-0.015em]">
                    {stage.title}
                  </h3>

                  {/* Detailed Stage Breakdown (Manrope) */}
                  <div className="font-sans mt-3 space-y-3 text-sm sm:text-[15px] text-[#162521]/85 leading-[1.7] max-w-[62ch]">
                    <p className="font-medium text-[#162521]">{stage.summary}</p>
                    <p className="text-stone-600">{stage.details}</p>
                  </div>

                  {/* Structured Stage Deliverables */}
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 mb-2.5">
                      Stage Outputs &amp; Client Visibility
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-[13px] text-[#162521]/80">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                              isActive ? 'text-[#D64933]' : 'text-[#461313]/70'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
