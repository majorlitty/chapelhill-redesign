'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  HardHat,
  Building2,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_IDENTITY } from '@/lib/seo/businessIdentity';

export interface FAQItem {
  id: string;
  question: string;
  category: 'buying' | 'legal' | 'construction' | 'general';
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'how-to-buy',
    category: 'buying',
    question: 'How do I buy a ChapelHill property?',
    answer:
      'Tell us the development and unit type you are interested in. We can share current approved information, discuss the payment arrangements, arrange an inspection where available and connect you with the sales team to review documentation and next steps.',
  },
  {
    id: 'buy-off-plan',
    category: 'buying',
    question: 'Can I buy off-plan?',
    answer:
      'Some ChapelHill developments are offered off-plan. Availability, payment terms, construction milestones and documentation depend on the particular project. Our sales team can provide the current offer and relevant documents for review.',
  },
  {
    id: 'zero-deposit-plan',
    category: 'buying',
    question: 'Is there a zero-deposit plan?',
    answer:
      'A 24-month zero-initial-deposit payment option has been developed for IVY Heights, subject to current availability and the approved terms. Our sales team will confirm the exact unit price, instalments, eligibility and agreement conditions.',
  },
  {
    id: 'pay-in-instalments',
    category: 'buying',
    question: 'Can I pay in instalments?',
    answer:
      'Selected projects may offer structured payment plans. The deposit, number of instalments, price and due dates depend on the specific unit and approved offer.',
  },
  {
    id: 'use-a-mortgage',
    category: 'buying',
    question: 'Can I use a mortgage?',
    answer:
      'ChapelHill is exploring mortgage-financing arrangements. Mortgage availability, bank participation, interest rates and eligibility must be confirmed by the lender and ChapelHill. We can refer your enquiry to our team.',
  },
  {
    id: 'nigerians-abroad',
    category: 'buying',
    question: 'Can Nigerians abroad purchase?',
    answer:
      'Yes, we welcome enquiries from Nigerians abroad. We can discuss remote consultations and the documents and inspection arrangements available for your chosen project. Any virtual tours, e-signatures, escrow or foreign-currency payments are subject to confirmation, not guaranteed services.',
  },
  {
    id: 'see-title-documents',
    category: 'legal',
    question: 'Can I see title documents?',
    answer:
      'Relevant property documents can be made available through the authorised sales or legal team as part of the due-diligence process. Buyers should conduct independent legal checks before committing.',
  },
  {
    id: 'returns-guaranteed',
    category: 'legal',
    question: 'Are returns guaranteed?',
    answer:
      'No property investment return or capital appreciation can be guaranteed. Our team can provide project information to support your independent assessment.',
  },
  {
    id: 'visit-the-site',
    category: 'legal',
    question: 'Can I visit the site?',
    answer:
      "Yes, you can request an inspection, subject to site access, safety requirements and the team's availability.",
  },
  {
    id: 'construction-duration',
    category: 'construction',
    question: 'How long does construction take?',
    answer:
      'It depends on the project and the signed agreement. For IVY Heights, the planned construction duration discussed by management was 24 months, subject to the approved programme and contract.',
  },
  {
    id: 'build-on-client-land',
    category: 'construction',
    question: 'Do you build on client-owned land?',
    answer:
      'Yes, ChapelHill considers construction projects on client-owned sites. We would first need the site location, intended building type, project stage and requirements so the technical team can assess the scope.',
  },
  {
    id: 'handle-renovations',
    category: 'construction',
    question: 'Do you handle renovations?',
    answer:
      'Yes. Please tell us the property location, the work required and whether the building is occupied or under construction. The team can advise on an assessment and quotation.',
  },
  {
    id: 'manage-properties',
    category: 'construction',
    question: 'Do you manage properties?',
    answer:
      'ChapelHill provides property and facility maintenance services and can discuss property management requirements. The precise services, fees and coverage will be agreed following an assessment.',
  },
  {
    id: 'partner-using-land',
    category: 'construction',
    question: 'Can I partner with ChapelHill using land?',
    answer:
      'ChapelHill considers suitable joint-development proposals. Please share the general location, land size, title type and your preferred partnership arrangement. Our management team will review the opportunity.',
  },
  {
    id: 'where-located',
    category: 'general',
    question: 'Where is ChapelHill located?',
    answer: `Our physical office is located at ${BUSINESS_IDENTITY.address.full}. We provide property development, construction, and facility management services nationwide across Nigeria.`,
  },
  {
    id: 'how-to-contact',
    category: 'general',
    question: 'How do I contact ChapelHill?',
    answer: `Our published telephone contacts are ${BUSINESS_IDENTITY.contact.primaryPhone.display} (also our WhatsApp desk) and ${BUSINESS_IDENTITY.contact.secondaryPhone.display}, and our published email is ${BUSINESS_IDENTITY.contact.email}.`,
  },
  {
    id: 'opening-hours',
    category: 'general',
    question: 'What are your opening hours?',
    answer: `${BUSINESS_IDENTITY.operatingHours.displayWithClosed}.`,
  },
];

interface FAQSectionProps {
  onContactClick: () => void;
}

export default function FAQSection({ onContactClick }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>('how-to-buy');
  const [selectedFilter, setSelectedFilter] = useState<
    'all' | 'buying' | 'legal' | 'construction' | 'general'
  >('all');

  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const filteredFaqs = FAQS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const midpoint = Math.ceil(filteredFaqs.length / 2);
  const leftFaqs = filteredFaqs.slice(0, midpoint);
  const rightFaqs = filteredFaqs.slice(midpoint);

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
    category: 'all' | 'buying' | 'legal' | 'construction' | 'general',
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
            Client Guidance
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#162521] tracking-tight leading-[1.15] px-2">
          Frequently Asked Questions
        </h2>
        <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base md:text-lg text-[#162521]/75 leading-relaxed max-w-2xl px-2">
          Clear answers on purchasing property, off-plan plans, construction, renovations, facility management, partnerships, and contacting ChapelHill Multicompany Limited.
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
            {canScrollLeft && (
              <div
                aria-hidden="true"
                className="absolute left-0 inset-y-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none z-10 rounded-l-2xl sm:rounded-l-full"
              />
            )}

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
                onClick={(e) => handleSelectFilter('buying', e)}
                id="faq-filter-buying"
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] touch-manipulation shrink-0 ${
                  selectedFilter === 'buying'
                    ? 'bg-[#461313] text-white shadow-xs'
                    : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50 active:bg-stone-100'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Purchasing &amp; Plans</span>
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
                <span>Documents &amp; Visits</span>
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
                <span>Builds, Care &amp; JV</span>
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
                <span>Office &amp; Contact</span>
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

      {/* Balanced Two-Column Grid Layout (Evenly Split Across Left & Right Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-6 items-start">
        {[
          { items: leftFaqs, indexOffset: 0, columnKey: 'left' },
          { items: rightFaqs, indexOffset: leftFaqs.length, columnKey: 'right' },
        ].map((column) => (
          <div key={column.columnKey} className="space-y-3.5 min-w-0">
            {column.items.map((faq, localIdx) => {
              const globalIndex = column.indexOffset + localIdx;
              const isOpen = openItem === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(localIdx, 5) * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#461313]/30 touch-manipulation min-h-[52px]"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-stone-100 text-[#461313] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200 tabular-nums">
                        {globalIndex + 1}
                      </span>
                      <h3 className="text-[15px] sm:text-base font-bold text-[#162521] leading-snug">
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
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        className="overflow-hidden border-t border-stone-100"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-3 text-sm text-[#162521]/80 leading-relaxed">
                          <p className="text-stone-700 leading-relaxed text-sm sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Direct Enquiry Prompt Below FAQ List */}
      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onContactClick}
          id="faq-direct-enquiry-btn"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer min-h-[44px] whitespace-nowrap shrink-0 shadow-sm"
        >
          <span>Speak With Our Sales &amp; Advisory Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
