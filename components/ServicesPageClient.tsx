'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Hammer,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Check,
  Info,
  ArrowUpRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface ServiceDetail {
  id: string;
  code: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  enquiryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imageAlt: string;
  scopeItems: {
    category: string;
    items: string[];
  }[];
  deliverables: string[];
  caseStudyRef?: {
    projectName: string;
    location: string;
    type: string;
    href: string;
  };
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'development-sales',
    code: 'A',
    number: '01',
    title: 'Property Development and Sales',
    tagline: 'Residential & Approved Real Estate Projects, Including Off-Plan Developments',
    summary:
      'Development and sale of residential and other approved real estate projects, including off-plan developments.',
    description:
      'At ChapelHill Multicompany Limited, our Property Development and Sales division plans, builds, and delivers contemporary residential and approved real estate projects tailored to homeowners and property buyers. From completed apartment residences ready for immediate occupation to structured off-plan developments, every project prioritizes sound design, verified title documentation, and dependable delivery.',
    enquiryLabel: 'Enquire About Property Development & Sales',
    icon: Building2,
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited Property Development and Sales showcase',
    scopeItems: [
      {
        category: 'Residential & Approved Developments',
        items: [
          'Design and development of residential apartment buildings and terraces',
          'Execution of other approved residential and mixed-use real estate projects',
          'Site preparation, roadworks, stormwater drainage, and estate utilities',
          'Coordinated architectural design and statutory building approvals',
        ],
      },
      {
        category: 'Off-Plan & Completed Property Sales',
        items: [
          'Structured off-plan acquisition opportunities with milestone payment plans',
          'Completed turnkey residences ready for inspection and physical handover',
          'Transparent allocation guidance for domestic and diaspora buyers',
          'Verified title documentation and conveyancing support upon purchase',
        ],
      },
    ],
    deliverables: [
      'Approved architectural and statutory documentation',
      'Flexible outright and milestone off-plan payment structures',
      'End-to-end handover support for buyers and corporate purchasers',
    ],
    caseStudyRef: {
      projectName: 'IVY Heights, Ikate, Lekki Phase 1, Lagos',
      location: 'Ikate, Lekki Phase 1, Lagos',
      type: 'Pre-Construction / Off-Plan 2 & 3 Bed Apartments',
      href: '/projects/lekki-phase-1-project',
    },
  },
  {
    id: 'construction-management',
    code: 'B',
    number: '02',
    title: 'Construction and Project Management',
    tagline: 'Construction for Individuals & Corporate Clients, Renovations & Remodelling',
    summary:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.',
    description:
      'Whether commissioning a ground-up residential or corporate building, completing an uncompleted carcass structure, or renovating and remodelling an existing property, ChapelHill Multicompany Limited provides disciplined construction execution and end-to-end project coordination. We manage contractors, technical consultants, material quality, and milestone schedules from pre-contract planning through final completion.',
    enquiryLabel: 'Request Construction or Project Proposal',
    icon: Hammer,
    image:
      '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited Construction and Project Management site work',
    scopeItems: [
      {
        category: 'Individual & Corporate Construction',
        items: [
          'Ground-up construction for private homeowners and corporate clients',
          'Sub-structure foundations, structural framing, and civil works',
          'Pre-contract feasibility, quantity surveying, and budget planning',
          'Post-contract project coordination and contractor supervision',
        ],
      },
      {
        category: 'Renovations, Remodelling & Finishing',
        items: [
          'Completion of carcass and semi-completed structures to turnkey standard',
          'Interior and exterior property renovations and spatial remodelling',
          'Rapid wall partitions, ceiling works, tiling, glazing, and joinery',
          'MEP upgrades, acoustic enhancements, and site quality inspections',
        ],
      },
    ],
    deliverables: [
      'Regular milestone progress updates with site photo and video logs',
      'Structured cost tracking and pre-/post-contract supervision',
      'Thorough snag clearance and quality verification before handover',
    ],
    caseStudyRef: {
      projectName: 'Beachwood Lagos Project',
      location: 'Ibeju-Lekki Axis, Lagos',
      type: 'Active Residential Construction Commission',
      href: '/projects/beachwood-lagos',
    },
  },
  {
    id: 'facility-management',
    code: 'C',
    number: '03',
    title: 'Property and Facility Management',
    tagline: 'Preventive Maintenance, Building Repairs & Estate Infrastructure Care',
    summary:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.',
    description:
      'ChapelHill Multicompany Limited provides structured property maintenance and facility management so residential homeowners, estate communities, and corporate facility owners can preserve asset condition without operational stress. Our technical team handles routine diagnostics, building repairs, electro-mechanical systems care, and shared estate infrastructure maintenance.',
    enquiryLabel: 'Enquire About Facility Management',
    icon: ShieldCheck,
    image: '/maintenance.webp',
    imageAlt: 'ChapelHill Multicompany Limited Property and Facility Management team',
    scopeItems: [
      {
        category: 'Property Maintenance & Building Repairs',
        items: [
          'Plumbing, booster pump servicing, and drainage line clearance',
          'Electrical systems upkeep, distribution boards, and solar/power care',
          'Air-conditioning servicing, HVAC diagnostics, and preventive repairs',
          'Roof leakage remediation, waterproofing, painting, tiling, and masonry',
        ],
      },
      {
        category: 'Facility & Infrastructure Management',
        items: [
          'Ongoing residential estate and commercial facility management',
          'Interlocked roads, perimeter drainage, and estate infrastructure maintenance',
          'Groundskeeping, common-area upkeep, and security access coordination',
          'Planned preventive maintenance schedules and responsive callouts',
        ],
      },
    ],
    deliverables: [
      'Responsive technical repair dispatch and preventive maintenance logs',
      'Preservation of building integrity and electro-mechanical systems',
      'Structured upkeep of shared estate infrastructure and utilities',
    ],
    caseStudyRef: {
      projectName: 'Ivy Homes, Abijo GRA',
      location: 'Abijo GRA Corridor, Lekki-Epe',
      type: 'Managed Residential Apartment Community',
      href: '/projects/ivy-homes-abijo',
    },
  },
  {
    id: 'joint-ventures',
    code: 'D',
    number: '04',
    title: 'Joint Ventures and Investment Partnerships',
    tagline: 'Collaborations with Landowners, Investors, Developers & Financial Institutions',
    summary:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.',
    description:
      'ChapelHill Multicompany Limited partners with landowners, private and institutional investors, co-developers, and financial institutions to unlock viable property development opportunities. By combining technical development expertise, legal diligence, and transparent governance structures, we collaborate with strategic partners to transform well-located land and capital into completed real estate assets.',
    enquiryLabel: 'Discuss a Joint Venture or Partnership',
    icon: Handshake,
    image: '/images/joint-venture-partnerships.jpg',
    imageAlt: 'ChapelHill Multicompany Limited Joint Ventures and Investment Partnerships briefing room',
    scopeItems: [
      {
        category: 'Landowner & Co-Developer Joint Ventures',
        items: [
          'Joint-venture development structuring on well-situated land parcels',
          'Title verification, technical site assessment, and development feasibility',
          'Shared architectural planning, statutory approvals, and build execution',
          'Transparent equity, milestone, and unit allocation frameworks',
        ],
      },
      {
        category: 'Investor & Institutional Partnerships',
        items: [
          'Structured real estate development collaborations with private investors',
          'Engagement with financial institutions on vetted development projects',
          'Dedicated project governance, cost transparency, and milestone reporting',
          'End-to-end delivery from concept structuring to sales or asset management',
        ],
      },
    ],
    deliverables: [
      'Clear joint-venture terms and transparent title due diligence',
      'Feasibility analysis, architectural concepting, and budget planning',
      'Structured partner reporting across planning, build, and delivery',
    ],
    caseStudyRef: {
      projectName: 'IVY Homes, Ogudu GRA (SOLD OUT)',
      location: 'Ogudu GRA, Mainland Prime',
      type: 'Ongoing Construction · Fully Sold Out',
      href: '/projects/ogudu-gra-project',
    },
  },
];

const WORK_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We start with an in-depth conversation to understand your goals—whether purchasing property, commissioning construction, arranging facility care, or exploring a joint venture.',
  },
  {
    step: '02',
    title: 'Site Visit & Assessment',
    desc: 'Our technical team evaluates site conditions, existing structures, topography, access, drainage, or property documentation to establish a reliable baseline.',
  },
  {
    step: '03',
    title: 'Proposal & Structure',
    desc: 'We prepare a clear scope of work, design concepts or maintenance schedule, milestone timelines, and a transparent, itemized commercial framework.',
  },
  {
    step: '04',
    title: 'Agreement & Kickoff',
    desc: 'Once terms are aligned, we formalize the agreement and assign a dedicated coordinator to oversee execution with clarity from start to finish.',
  },
  {
    step: '05',
    title: 'Execution & Updates',
    desc: 'We carry out development, construction, facility operations, or joint-venture delivery with regular photo/video updates and milestone accountability.',
  },
  {
    step: '06',
    title: 'Handover & Ongoing Care',
    desc: 'Following thorough inspection and formal delivery, our Property and Facility Management team remains available to support long-term asset preservation.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What residential properties and off-plan options do you develop and sell?',
    a: 'Through our Property Development and Sales division, we develop and sell residential estates and approved real estate projects—including completed apartments ready for immediate handover at Ivy Homes Abijo GRA and pre-construction / off-plan 2- and 3-bedroom residences at IVY Heights, Ikate, Lekki Phase 1, Lagos with 12-month, 18-month, and management-approved 24-month zero-initial-deposit options (subject to offer terms).',
  },
  {
    q: 'Do you handle both new construction and property renovations or remodelling?',
    a: 'Yes. Under Construction and Project Management, we deliver ground-up residential and corporate builds, manage pre- and post-contract project coordination, and execute renovations, remodelling, and finishing works on carcass or semi-completed buildings.',
  },
  {
    q: 'What is covered under Property and Facility Management?',
    a: 'Our maintenance and facility management services cover routine building repairs, plumbing, electrical works, air-conditioning repairs, tiling, roofing maintenance, estate infrastructure upkeep, and other approved property management services.',
  },
  {
    q: 'How can landowners, investors, or institutions partner with ChapelHill?',
    a: 'Through our Joint Ventures and Investment Partnerships division, we engage with landowners, investors, developers, financial institutions, and strategic partners to evaluate suitable land parcels and development opportunities, establish clear legal and technical terms, and execute joint real estate projects.',
  },
  {
    q: 'How do I initiate an enquiry for any of your four service categories?',
    a: 'Click any enquiry button on this page to submit a consultation request directly to our team, or reach our direct WhatsApp and phone desk on +234 803 286 5488.',
  },
];

export default function ServicesPageClient() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>(
    'Property Development and Sales'
  );
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Scroll smoothly to hash target (e.g. /services#joint-ventures) on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const openBookingFor = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setBookingModalOpen(true);
  };

  const filteredServices =
    activeFilter === 'all' ? SERVICES_DATA : SERVICES_DATA.filter((s) => s.id === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activePage="services"
        onContactClick={() => openBookingFor('General Services Consultation')}
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onFAQClick={() => {
          const el = document.getElementById('services-faq');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 py-3 mb-6 border-b border-stone-200/60">
          <Link href="/" className="hover:text-[#461313] transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#162521] font-semibold">Services</span>
        </div>

        {/* Hero Section */}
        <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 border-b border-stone-200/80">
          {/* Ambient decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C0E8F9]/30 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto text-center">
            {/* Clean Eyebrow Label */}
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D64933] mb-4">
              Our Services &amp; Capabilities
            </p>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.2] sm:leading-[1.15] text-balance">
              Four Integrated Real Estate &amp; Construction Divisions
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#162521]/80 max-w-3xl mx-auto leading-relaxed">
              <strong className="font-semibold text-[#162521]">ChapelHill Multicompany Limited</strong> operates across four core service categories: Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships.
            </p>

            {/* Interactive Service Category Filter Tabs */}
            <div className="mt-8 sm:mt-10 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 bg-stone-100/80 backdrop-blur-md rounded-2xl border border-stone-200 max-w-4xl mx-auto overflow-x-auto sm:flex-wrap scrollbar-none touch-manipulation">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] touch-manipulation ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#461313] shadow-sm'
                    : 'text-stone-600 hover:text-[#162521]'
                }`}
              >
                All Services (4)
              </button>
              {SERVICES_DATA.map((srv) => (
                <button
                  type="button"
                  key={srv.id}
                  onClick={() => setActiveFilter(srv.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 min-h-[40px] touch-manipulation ${
                    activeFilter === srv.id
                      ? 'bg-[#461313] text-white shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                >
                  <span className="text-xs opacity-75 font-mono">{srv.code}.</span>
                  <span>{srv.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4-Category Summary Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-200/60 max-w-5xl mx-auto text-center">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#461313] font-serif">
                Development &amp; Sales
              </p>
              <p className="mt-1 text-xs text-stone-500 font-medium">
                Residential &amp; Off-Plan Projects
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#461313] font-serif">
                Construction
              </p>
              <p className="mt-1 text-xs text-stone-500 font-medium">
                Builds, Coordination &amp; Remodelling
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#461313] font-serif">
                Facility Care
              </p>
              <p className="mt-1 text-xs text-stone-500 font-medium">
                Maintenance, Repairs &amp; Infrastructure
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#461313] font-serif">
                Joint Ventures
              </p>
              <p className="mt-1 text-xs text-stone-500 font-medium">
                Landowners, Investors &amp; Partners
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services Breakdown Modules */}
        <section className="py-16 sm:py-24 space-y-16 sm:space-y-24 border-b border-stone-200/80">
          {filteredServices.map((service, idx) => {
              const isEven = idx % 2 === 1;
              const IconComponent = service.icon;

              return (
                <div
                  id={service.id}
                  key={service.id}
                  className="scroll-mt-24 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Asymmetric 2-Column Layout */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Info Column (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Clean Unboxed Category Metadata */}
                        <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                          <span className="font-mono font-bold text-[#D64933]">
                            Category {service.code} ({service.number})
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-stone-600">{service.tagline}</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] leading-tight">
                          {service.title}
                        </h2>

                        {/* Primary Excerpt */}
                        <p className="mt-4 text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
                          {service.summary}
                        </p>

                        {/* Comprehensive Narrative */}
                        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Detailed Scopes Grid */}
                      <div className="pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {service.scopeItems.map((scope, sIdx) => (
                          <div key={sIdx} className="space-y-2.5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#461313]">
                              {scope.category}
                            </h3>
                            <ul className="space-y-2 text-xs text-stone-600">
                              {scope.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2">
                                  <Check className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Execution Standards */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Key Deliverables &amp; Focus
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-[#162521] font-medium">
                          {service.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D64933] shrink-0" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Relevant Enquiry Options */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openBookingFor(service.title)}
                          className="bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[44px] group"
                        >
                          <span>{service.enquiryLabel}</span>
                          <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all">
                            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                        </button>

                        <a
                          href={`https://wa.me/2348032865488?text=${encodeURIComponent(
                            `Hello ChapelHill Multicompany Limited, I am inquiring about your "${service.title}" services. Could you please share more details and arrange a consultation?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                        >
                          <MessageCircle className="w-4 h-4 text-[#25D366]" />
                          <span>Enquire on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Visual Column (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col space-y-4">
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner group">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                        {/* Icon overlay */}
                        <div className="absolute top-4 left-4 z-10 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#461313] shadow-md">
                          <IconComponent className="w-5 h-5 stroke-[2.5]" />
                        </div>

                        {/* Bottom Caption Overlay */}
                        <div className="absolute bottom-5 inset-x-5 z-10 text-white">
                          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C0E8F9]">
                            Division {service.code} · {service.title}
                          </span>
                          <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Related Project Card */}
                      {service.caseStudyRef && (
                        <Link
                          href={service.caseStudyRef.href}
                          className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-[#D64933] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#461313]/10 text-[#461313] flex items-center justify-center shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs text-stone-500 font-medium">
                                Explore Related Project
                              </p>
                              <p className="text-sm font-bold text-[#162521] group-hover:text-[#D64933] transition-colors">
                                {service.caseStudyRef.projectName}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#D64933] transition-colors" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Real Estate Solutions Built on Clear Execution
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether acquiring an off-plan home, commissioning construction, maintaining a facility, or structuring a joint venture, ChapelHill Multicompany Limited delivers disciplined execution across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#461313]/10 text-[#461313] flex items-center justify-center mb-6">
                <Info className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Practical Expertise &amp; Coordination
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Experienced leadership across quantity surveying, engineering supervision, legal diligence, and facility operations ensures coordinated delivery across every phase.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#D64933]/10 text-[#D64933] flex items-center justify-center mb-6">
                <Info className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Long-Term Asset Quality
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                From structural builds and renovations to ongoing facility maintenance and infrastructure care, we prioritize durable workmanship that protects asset longevity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#162521]/10 text-[#162521] flex items-center justify-center mb-6">
                <Info className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Aligned Strategic Partnerships
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                We collaborate openly with landowners, private buyers, corporate clients, investors, and financial institutions to align project structure with real development value.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Structured Delivery Across Every Engagement
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Our 6-step engagement workflow keeps communication, technical assessment, budgeting, and delivery transparent from initial discussion through ongoing facility care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-extrabold text-[#461313]/25 block mb-4">
                    {step.step}.
                  </span>
                  <h3 className="text-lg font-bold text-[#162521]">{step.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-[#D64933]">
                  <span>Step {step.step} of 06</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="services-faq" className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Common questions covering property development and sales, construction and project management, facility management, and joint venture partnerships.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#162521]">{item.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-[#461313] text-white rotate-180'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Corporate Engagement & Direct Proposal Request Banner */}
        <section className="py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#461313] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#E5C583]">
                  Start a Conversation
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                  Request a Service Consultation or Partnership Discussion
                </h2>
                <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed">
                  Connect with our team regarding property development and sales, construction and project management, facility management, or joint venture opportunities.
                </p>

                <div className="mt-8 space-y-3 text-xs sm:text-sm text-stone-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E5C583] shrink-0 mt-0.5" />
                    <span>
                      Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction, Lekki, Lagos State, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E5C583] shrink-0" />
                    <span>+234 803 286 5488</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#E5C583] shrink-0" />
                    <span>chapelhillmulticompanyltd@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => openBookingFor('General Services Consultation')}
                  className="w-full bg-[#E5C583] hover:bg-white text-[#461313] py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Submit a Service Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2348032865488?text=Hello%20ChapelHill%20Multicompany%20Limited%2C%20I%20would%20like%20to%20discuss%20your%20services%20or%20a%20joint-venture%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 rounded-2xl font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Direct WhatsApp Line (+234 803 286 5488)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onAboutClick={() => {
          window.location.href = '/about';
        }}
        onFAQClick={() => {
          const el = document.getElementById('services-faq');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onContactClick={() => openBookingFor('General Consultation')}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedServiceForModal}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFAB defaultMessage="Hello ChapelHill Multicompany Limited, I am inquiring from the Services page regarding your real estate development, construction, facility management, or partnership services." />
    </div>
  );
}
