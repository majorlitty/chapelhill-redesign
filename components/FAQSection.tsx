'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  HelpCircle, 
  ShieldCheck, 
  Globe2, 
  HardHat, 
  Building2, 
  ArrowRight, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  category: 'diaspora' | 'construction' | 'legal' | 'general';
  answer: string;
  highlights?: string[];
}

export const FAQS: FAQItem[] = [
  {
    id: 'buy-property-abroad',
    category: 'diaspora',
    question: 'How can I buy property in Nigeria while living abroad?',
    answer: 'We have structured a remote acquisition process designed specifically for diaspora clients and international buyers. From your initial digital consultation, our team provides virtual walkthroughs, video site surveys, and clear legal documentation. You can execute contracts electronically with digital signatures, appoint a local representative or legal counsel through a limited Power of Attorney (if desired), and make payments securely via bank transfer with verifiable receipts at each milestone.',
    highlights: [
      'Encrypted digital contracts & e-signature onboarding',
      'High-definition video walk-throughs & site video footage',
      'Transparent milestone invoicing in USD, GBP, EUR, or NGN',
      'Full representation coordination with appointed legal counsel',
    ],
  },
  {
    id: 'verify-authenticity-documents',
    category: 'legal',
    question: 'How do I verify the authenticity of the property and documents?',
    answer: 'Transparency and clear title ownership form the cornerstone of ChapelHill Multicompany Limited. Every development in our portfolio undergoes thorough legal review. Before any commitment, we provide copies of available title documents—including Certificate of Occupancy (C of O), Governor’s Consent, Registered Survey plans, and building plan approvals. We actively encourage and coordinate independent verification with your personal attorney or estate surveyor at the Lagos State Lands Bureau.',
    highlights: [
      'Clean, government-registered titles (C of O / Governor’s Consent)',
      'Pre-purchase search reports provided upfront',
      'Open coordination with client-appointed independent legal counsel',
      'Perimeter survey coordinates cross-checked with official land charts',
    ],
  },
  {
    id: 'finance-property-abroad',
    category: 'diaspora',
    question: 'Can I finance my property purchase from abroad?',
    answer: 'Yes. We provide structured developer payment plans across our developments alongside third-party mortgage options where applicable. Depending on the project and current management-approved schedule, off-plan plans include 12-month and 18-month deposit-based options as well as our management-approved 24-month zero-initial-deposit plan on IVY Heights (subject to contractual obligations, signing requirements, and formal offer approval).',
    highlights: [
      'Phased milestone disbursement tied to verified civil progress',
      'Multi-currency institutional banking routes (USD, GBP, EUR, NGN)',
      'Access to diaspora mortgage facilitation partners',
      'Zero predatory hidden fees or unexpected closing charges',
    ],
  },
  {
    id: 'ensure-construction-quality',
    category: 'construction',
    question: 'How do you ensure the quality of construction in my absence?',
    answer: 'Our engineering protocols follow rigorous Nigerian building and safety standards. We deploy dedicated project managers, experienced structural engineers, and site quality supervisors for every concrete pour, steel reinforcement cage, and MEP installation. Diaspora clients receive regular photo and video progress updates and can schedule live WhatsApp or video inspections directly with the site project manager.',
    highlights: [
      'Experienced structural engineers and site supervisors',
      'Regular multimedia progress reports & site quality updates',
      'Real-time live video site walk-throughs on your schedule',
      'Full material traceability and documented milestone sign-offs',
    ],
  },
  {
    id: 'property-management-service',
    category: 'general',
    question: 'Can you help with property management after purchase?',
    answer: 'Absolutely. ChapelHill Multicompany Limited offers ongoing property maintenance and facility stewardship services. Our team handles plumbing, electrical works, air-conditioning repairs, tiling, general building works, roof leakages, and tenant coordination so you can enjoy complete peace of mind and focus on your core business.',
    highlights: [
      'Preventive plumbing, electrical & HVAC maintenance',
      'Roof leakage remediation, tiling & building repairs',
      'Tenant coordination & routine property upkeep',
      'Regular property condition reporting for diaspora owners',
    ],
  },
  {
    id: 'types-of-properties-developed',
    category: 'general',
    question: 'What types of properties do you develop?',
    answer: 'We specialize in residential apartment developments, gated communities, and private residences. Our portfolio features our key pre-construction development IVY Heights at Ikate, Lekki Phase 1, Lagos (offering 2-bedroom and 3-bedroom apartments), completed apartments at Ivy Homes Abijo GRA, and our sold-out Ogudu GRA Project, alongside custom turnkey builds for landowners.',
    highlights: [
      'Turnkey gated residential apartment communities',
      'Private penthouses & contemporary family duplexes',
      'Boutique urban mid-rise apartment developments',
      'Custom architectural design and client-owned developments',
    ],
  },
  {
    id: 'construction-project-timeline',
    category: 'construction',
    question: 'How long does it take to complete a construction project?',
    answer: 'Timelines vary by structural scope and architectural complexity. For private bespoke villas and penthouses, construction typically spans 9 to 14 months from foundation breaking to completion. For medium-scale multi-unit developments, completion generally requires 14 to 20 months. Every project contract includes a detailed project schedule outlining clear phase completions, civil milestones, finishes, and expected handover timelines.',
    highlights: [
      'Contractual project schedule provided at inception',
      'Bespoke luxury residences: typically 9 to 14 months',
      'Multi-unit apartment communities: typically 14 to 20 months',
      'Transparent contingency planning and clear handover milestones',
    ],
  },
  {
    id: 'how-to-start-project',
    category: 'general',
    question: 'How do I get a project started?',
    answer: 'Getting started is straightforward. Begin by booking an introductory advisory consultation through our website or directly via WhatsApp with our Senior Development Directors. We will evaluate your investment objectives, budget parameters, and preferred locations. If you are acquiring an existing or off-plan estate, we immediately issue the allocation pack and payment schedule. If you are developing a private land parcel, we conduct a site topography survey, preliminary architectural concept sketches, and feasibility study within 5 business days.',
    highlights: [
      'Step 1: Confidential exploratory consultation (Virtual or In-Person)',
      'Step 2: Needs assessment & property/site feasibility review',
      'Step 3: Formal allocation documentation or architectural blueprint agreement',
      'Step 4: Milestone escrow setup and immediate project mobilization',
    ],
  },
];

interface FAQSectionProps {
  onContactClick: () => void;
}

export default function FAQSection({ onContactClick }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>('buy-property-abroad');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'diaspora' | 'construction' | 'legal' | 'general'>('all');
  
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredFaqs = FAQS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const updateScrollState = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = tabsRef.current;
    if (!el) return;

    window.addEventListener('resize', updateScrollState);
    el.addEventListener('scroll', updateScrollState, { passive: true });

    // Initial check after paint
    const timer = setTimeout(updateScrollState, 150);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScrollState);
      el.removeEventListener('scroll', updateScrollState);
    };
  }, [updateScrollState]);

  const handleSlideLeft = () => {
    if (!tabsRef.current) return;
    tabsRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    setTimeout(updateScrollState, 300);
  };

  const handleSlideRight = () => {
    if (!tabsRef.current) return;
    tabsRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    setTimeout(updateScrollState, 300);
  };

  const handleSelectFilter = (
    category: 'all' | 'diaspora' | 'construction' | 'legal' | 'general',
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedFilter(category);
    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section 
      id="frequently-asked-questions" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 relative z-20 border-t border-stone-200/80"
    >
      {/* Background ambient accents */}
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#C0E8F9]/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Header Eyebrow & Title (Centered) */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-white/90 border border-stone-200/90 shadow-xs rounded-full px-4 py-1.5 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#D64933]" />
          <span className="text-xs font-bold tracking-wider uppercase text-[#461313]">
            Investor Knowledge Base
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#162521] tracking-tight leading-[1.15] px-2">
          Frequently Asked Questions
        </h2>
        <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base md:text-lg text-[#162521]/75 leading-relaxed max-w-2xl px-2">
          Clear, transparent guidance on acquiring property in Lagos, verifying title documentation, managing construction remotely, and working with ChapelHill Multicompany Limited.
        </p>

        {/* Filter Categories with Left & Right Sliders */}
        <div className="relative max-w-full w-full flex items-center justify-center gap-2 sm:gap-2.5 mt-6 px-1">
          {/* Left Slider Button */}
          <button
            type="button"
            onClick={handleSlideLeft}
            disabled={!canScrollLeft}
            id="faq-filter-slider-left"
            aria-label="Slide FAQ categories left to view hidden options"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 shrink-0 touch-manipulation shadow-xs cursor-pointer ${
              canScrollLeft
                ? 'bg-white hover:bg-[#461313] hover:text-white border-stone-300 text-[#162521] hover:shadow-md active:scale-95'
                : 'bg-stone-100/70 border-stone-200/70 text-stone-300 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Horizontal Scrollable Tabs Container with Dynamic Edge Fades */}
          <div className="relative max-w-[calc(100vw-6.5rem)] sm:max-w-2xl lg:max-w-4xl overflow-hidden rounded-2xl sm:rounded-full">
            {/* Left Edge Shadow / Fade Indicator when scrolled */}
            {canScrollLeft && (
              <div 
                aria-hidden="true"
                className="absolute left-0 inset-y-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none z-10 rounded-l-2xl sm:rounded-l-full" 
              />
            )}

            {/* Right Edge Shadow / Fade Indicator when more options are hidden */}
            {canScrollRight && (
              <div 
                aria-hidden="true"
                className="absolute right-0 inset-y-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/85 to-transparent pointer-events-none z-10 rounded-r-2xl sm:rounded-r-full" 
              />
            )}

            <div
              ref={tabsRef}
              className="flex items-center gap-1.5 p-1.5 bg-white border border-stone-200/90 rounded-2xl sm:rounded-full shadow-xs max-w-full overflow-x-auto scroll-smooth overscroll-x-contain scrollbar-none touch-manipulation"
            >
              <button
                type="button"
                onClick={(e) => handleSelectFilter('all', e)}
                id="faq-filter-all"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'all'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                All Questions ({FAQS.length})
              </button>
              <button
                type="button"
                onClick={(e) => handleSelectFilter('diaspora', e)}
                id="faq-filter-diaspora"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'diaspora'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Diaspora & Financing</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleSelectFilter('legal', e)}
                id="faq-filter-legal"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'legal'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Title & Due Diligence</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleSelectFilter('construction', e)}
                id="faq-filter-construction"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'construction'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                <HardHat className="w-3.5 h-3.5" />
                <span>Construction & Quality</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleSelectFilter('general', e)}
                id="faq-filter-general"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'general'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Management & Onboarding</span>
              </button>
            </div>
          </div>

          {/* Right Slider Button */}
          <button
            type="button"
            onClick={handleSlideRight}
            disabled={!canScrollRight}
            id="faq-filter-slider-right"
            aria-label="Slide FAQ categories right to view hidden options"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 shrink-0 touch-manipulation shadow-xs cursor-pointer ${
              canScrollRight
                ? 'bg-white hover:bg-[#461313] hover:text-white border-stone-300 text-[#162521] hover:shadow-md active:scale-95'
                : 'bg-stone-100/70 border-stone-200/70 text-stone-300 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Accordion List (Centered) */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openItem === faq.id;

          return (
            <motion.div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl border transition-colors duration-200 overflow-hidden bg-white ${
                isOpen 
                  ? 'border-[#461313]/40 shadow-[0_8px_25px_rgba(70,19,19,0.06)]' 
                  : 'border-stone-200/90 shadow-2xs hover:border-stone-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                id={`faq-btn-${faq.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#461313]/20 touch-manipulation min-h-[48px]"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="w-6 h-6 rounded-full bg-stone-100 text-[#461313] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
                    {index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#162521] leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                  ? 'bg-[#461313] text-white rotate-180' 
                  : 'bg-stone-100 text-[#162521] hover:bg-stone-200'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="overflow-hidden border-t border-stone-100"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-3 text-sm text-[#162521]/80 leading-relaxed">
                      <p className="text-stone-700 leading-relaxed sm:text-[15px]">
                        {faq.answer}
                      </p>

                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="mt-4 p-4 rounded-xl bg-[#FEFCFD] border border-stone-200/80">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#461313] block mb-2">
                            Key Assurance Protocols:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {faq.highlights.map((item, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-[#162521]/85">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
