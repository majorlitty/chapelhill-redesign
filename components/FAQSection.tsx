'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
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
    answer: 'We have structured a frictionless, 100% remote acquisition process designed specifically for diaspora clients and international investors. From your initial digital consultation, our team provides virtual 3D walkthroughs, drone surveys, and verified legal documentation. You can execute contracts electronically with digital signatures, appoint an accredited local representative or legal counsel through a limited Power of Attorney (if desired), and make payments securely via direct international bank wire or designated escrow accounts with instant verifiable receipts at each milestone.',
    highlights: [
      'Encrypted digital contracts & e-signature onboarding',
      'High-definition video walk-throughs & drone footage',
      'Transparent milestone invoicing in USD, GBP, EUR, or NGN',
      'Full representation coordination with accredited conveyancers',
    ],
  },
  {
    id: 'verify-authenticity-documents',
    category: 'legal',
    question: 'How do I verify the authenticity of the property and documents?',
    answer: 'Transparency and unencumbered title ownership form the cornerstone of Chapelhill. Every development in our portfolio undergoes exhaustive legal scrutiny. Before any commitment, we provide certified true copies (CTC) of all title documents—including Certificate of Occupancy (C of O), Governor’s Consent, Registered Survey plans, and approved building plans from state planning authorities. We actively encourage and coordinate independent verification with your personal attorney or estate surveyor at the Lagos State Lands Bureau and surveyor general’s registries.',
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
    answer: 'Yes. We provide flexible off-plan developer payment structures as well as partnerships with reputable mortgage institutions and private asset financiers that service diaspora buyers. Typically, you can secure an off-plan property with a structured initial deposit (usually 20% to 30%), with the remaining balance spread across transparent construction milestones over 12 to 24 months. We also accept multi-currency remittances through regulated institutional channels, protecting you against volatile FX slippages.',
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
    answer: 'Our engineering protocols follow rigorous COREN and international British Standard (BS) building codes. We deploy dedicated project directors, certified structural engineers, and independent Quality Assurance (QA/QC) inspectors for every concrete pour, steel reinforcement cage, and MEP installation. Diaspora clients receive access to a private investor dashboard with weekly photo/video progress logs, material test certificates (cube test results, soil mechanics), and scheduled live Zoom/WhatsApp video inspections with the site project manager.',
    highlights: [
      'COREN-certified structural engineers and site supervisors',
      'Weekly multimedia progress reports & independent test certificates',
      'Real-time live video site walk-throughs on your schedule',
      'Full material traceability—from European MEP fittings to Grade-60 steel',
    ],
  },
  {
    id: 'property-management-service',
    category: 'general',
    question: 'Can you help with property management after purchase?',
    answer: 'Absolutely. Chapelhill operates an integrated Facility & Estate Management division. Whether your goal is capital preservation, high-yield luxury short-let hosting, or long-term corporate tenancy (servicing multinational executives and expatriates), our management team oversees tenant vetting, lease agreements, 24/7 round-the-clock power and water utility servicing, scheduled preventative maintenance, and automated quarterly net rental yield remittances directly to your offshore or local bank account.',
    highlights: [
      'Comprehensive tenant screening & corporate lease management',
      '24/7 dedicated facility care, grounds maintenance, and security',
      'High-yield short-let & executive tenancy optimization',
      'Quarterly net rental yield reporting & automated payouts',
    ],
  },
  {
    id: 'types-of-properties-developed',
    category: 'general',
    question: 'What types of properties do you develop?',
    answer: 'We specialize in institutional-grade luxury residential architecture, bespoke private villas, and high-density prime urban apartments. Our active developments include multi-unit contemporary residential communities (e.g. Ivy Homes Abijo GRA), architectural trophy penthouses with private sky lounges (such as our Ogudu GRA Project), and prime multi-unit mid-rise developments in high-capital areas (like our 18-unit Lekki Phase 1 project). We also undertake bespoke turnkey private builds for discerning private land owners.',
    highlights: [
      'Turnkey gated residential apartment communities',
      'Private architectural trophy estates & sky penthouses',
      'High-yield boutique urban mid-rise developments',
      'Custom bespoke architectural design and client-owned developments',
    ],
  },
  {
    id: 'construction-project-timeline',
    category: 'construction',
    question: 'How long does it take to complete a construction project?',
    answer: 'Timelines vary by structural scope and architectural complexity. For private bespoke villas and penthouses, construction typically spans 9 to 14 months from foundation breaking to turnkey commissioning. For medium-scale multi-unit developments (such as 12 to 18 apartments), completion generally requires 14 to 20 months. Every project contract includes a detailed Master Gantt Schedule outlining clear phase completions, civil milestones, finishes, and contractual handover guarantees with penalty clauses for unexcused delays.',
    highlights: [
      'Contractual Master Gantt Schedule provided at inception',
      'Bespoke luxury residences: typically 9 to 14 months',
      'Multi-unit apartment communities: typically 14 to 20 months',
      'Transparent contingency planning and guaranteed handover covenants',
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

  const filteredFaqs = FAQS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section 
      id="frequently-asked-questions" 
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 relative z-20 border-t border-stone-200/80"
    >
      {/* Background ambient accents */}
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#C0E8F9]/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Header Eyebrow & Title (Centered) */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-white/90 border border-stone-200/90 shadow-xs rounded-full px-4 py-1.5 mb-3.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#D64933]" />
          <span className="text-xs font-bold tracking-wider uppercase text-[#461313]">
            Investor Knowledge Base
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#162521] tracking-tight leading-[1.15]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-[#162521]/75 leading-relaxed max-w-2xl">
          Clear, transparent guidance on acquiring prime Nigerian property, verifying title security, managing construction remotely, and maximizing investment returns with Chapelhill.
        </p>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 p-1.5 bg-white border border-stone-200/90 rounded-full shadow-xs mt-6 max-w-full">
          <button
            onClick={() => setSelectedFilter('all')}
            id="faq-filter-all"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            All Questions ({FAQS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('diaspora')}
            id="faq-filter-diaspora"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === 'diaspora'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            <Globe2 className="w-3 h-3" />
            <span>Diaspora & Financing</span>
          </button>
          <button
            onClick={() => setSelectedFilter('legal')}
            id="faq-filter-legal"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === 'legal'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Title & Due Diligence</span>
          </button>
          <button
            onClick={() => setSelectedFilter('construction')}
            id="faq-filter-construction"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === 'construction'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            <HardHat className="w-3 h-3" />
            <span>Construction & Quality</span>
          </button>
          <button
            onClick={() => setSelectedFilter('general')}
            id="faq-filter-general"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === 'general'
                ? 'bg-[#461313] text-white shadow-xs'
                : 'text-[#162521]/70 hover:text-[#162521] hover:bg-stone-50'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>Management & Onboarding</span>
          </button>
        </div>
      </div>

      {/* Accordion List (Centered) */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openItem === faq.id;

          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
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
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#461313]/20"
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

              {isOpen && (
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#162521]/80 leading-relaxed border-t border-stone-100"
                >
                  <p className="mt-2 text-stone-700 leading-relaxed sm:text-[15px]">
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
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
