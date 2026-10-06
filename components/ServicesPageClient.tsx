'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Hammer, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  FileText, 
  Check, 
  Sparkles,
  Compass,
  Wrench,
  DraftingCompass,
  HardHat,
  Droplets,
  Zap,
  Wind,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingAdvisoryBanner from '@/components/ClosingAdvisoryBanner';
import BookingModal from '@/components/BookingModal';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
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
    id: 'development',
    number: '01',
    title: 'Property Development',
    tagline: 'Automated Architectural Design, Civil Construction & Infrastructure',
    summary: 'We excel in designing and constructing diverse projects, from residential buildings to industrial properties. Our expertise spans automated architectural designs, road construction, drainage, and structural steel work for clients and corporations alike.',
    description: 'At Chapelhill Multicompany International, our property development division transforms raw terrain and strategic parcels into enduring architectural masterworks. Leveraging automated CAD/BIM tools, state-of-the-art structural modeling, and deep institutional relationships with regulatory bodies, we guide developments from initial topography assessment through to full civil infrastructure execution.',
    icon: Building2,
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(1).jpeg',
    imageAlt: 'Chapelhill luxury architectural estate development in Lekki Phase 1',
    scopeItems: [
      {
        category: 'Architectural & Engineering Design',
        items: [
          'Automated architectural design and photorealistic 3D visualization',
          'Structural steel engineering and load-bearing calculations',
          'HVAC, MEP, and electrical system schematics',
          'Environmental impact and natural lighting simulations',
        ],
      },
      {
        category: 'Civil Infrastructure & Construction',
        items: [
          'Site clearance, grading, and sub-grade soil stabilization',
          'Heavy-duty concrete road networks and paved access corridors',
          'Reinforced stormwater drainage and flood mitigation systems',
          'Multi-storey residential towers, terraces, and trophy penthouses',
          'Industrial complexes, logistics hubs, and commercial spaces',
        ],
      },
    ],
    deliverables: [
      'Approved LASPPPA / statutory building approvals',
      'Structural integrity certification by COREN-registered engineers',
      'Turnkey physical handover with full utility integration',
    ],
    caseStudyRef: {
      projectName: 'Ivy Heights (Lekki Phase 1)',
      location: 'Lekki Phase 1, Lagos',
      type: '5-Storey Luxury Development',
      href: '/properties/lekki-phase-1',
    },
  },
  {
    id: 'remodeling',
    number: '02',
    title: 'Remodeling & Renovation',
    tagline: 'Structural Mastery, Impeccable Finishing & Innovative Space Design',
    summary: 'We specialize in impeccable finishing for structures, from carcasses to semi-completed projects. Our expertise extends to remodeling, renovation, and innovative space design, including rapid wall partitions.',
    description: 'Whether you hold an uncompleted carcass structure or desire to completely modernize an existing residence into a contemporary luxury showcase, Chapelhill delivers artisan craftsmanship. We eliminate contractor bottlenecks, replace subpar structural elements, and implement cutting-edge rapid partition walls that dramatically reduce construction timelines while maximizing acoustic and thermal insulation.',
    icon: Hammer,
    image: '/images/5 bed Ogudu GRA Project/Ogudu 3d/Ogudu 3d (11).jpeg',
    imageAlt: 'Chapelhill precision interior remodeling and luxury ceiling finishes',
    scopeItems: [
      {
        category: 'Carcass Completion & Structural Upgrades',
        items: [
          'Structural integrity audits of abandoned or semi-completed buildings',
          'Reinforcement of slabs, cantilevered balconies, and roof trusses',
          'Frameless floor-to-ceiling curtain wall glazing installation',
          'Premium marble, porcelain tiling, and custom micro-cement finishes',
        ],
      },
      {
        category: 'Modern Space Redesign & Rapid Partitions',
        items: [
          'Innovative rapid wall partitions for agile, lightweight layouts',
          'Double-height ceiling conversions and architectural void lighting',
          'Custom carpentry, acoustic wall panelling, and integrated joinery',
          'Complete bathroom and chef’s kitchen luxury overhauls',
        ],
      },
    ],
    deliverables: [
      'Zero-defect snag-free completion schedule',
      'Upgraded mechanical, electrical, and plumbing certifications',
      'Substantial immediate capital value appreciation',
    ],
    caseStudyRef: {
      projectName: 'Ogudu GRA Project',
      location: 'Ogudu GRA, Mainland Prime',
      type: 'Trophy Penthouse Residence',
      href: '/properties/ogudu-gra-project',
    },
  },
  {
    id: 'maintenance',
    number: '03',
    title: 'Property Maintenance & Facility Stewardship',
    tagline: 'Preventive Preservation, MEP Diagnostics & Waterfront Land Reclamation',
    summary: 'Regular maintenance of our customers’ property/facility, plumbing, electrical works, air-conditioning repairs, tiling, building works, roof leakages, reclamation of land in waterfront areas etc., to enable them to focus on their core businesses.',
    description: 'Chapelhill offers institutional-grade facility management and technical property maintenance for residential estates, corporate headquarters, and high-net-worth private residences. Our rapid-response technicians and preventive maintenance protocols protect capital investments from weathering, tropical humidity, and infrastructure wear.',
    icon: ShieldCheck,
    image: '/maintenance.webp',
    imageAlt: 'Chapelhill comprehensive luxury property and pool grounds maintenance',
    scopeItems: [
      {
        category: 'Facility & MEP Stewardship',
        items: [
          'Plumbing, high-pressure booster systems & sewage maintenance',
          'Electrical distribution boards, backup generators & surge arrestors',
          'HVAC and split/ducted air-conditioning preventative overhauls',
          'Roof leakage diagnostics, elastomeric coatings & gutter clearing',
          'Floor tiling, grout remediation, and exterior facade power-washing',
        ],
      },
      {
        category: 'Waterfront & Marine Infrastructure',
        items: [
          'Reclamation of land in prime waterfront and marshy coastal zones',
          'Shoreline revetment, sheet piling, and erosion barrier construction',
          'Drainage outfall clearing and high-tide anti-backflow valves',
          'Groundwater filtration and borehole water purification systems',
        ],
      },
    ],
    deliverables: [
      '24/7 dedicated emergency technical dispatch desk',
      'Scheduled quarterly MEP diagnostics and asset health reports',
      'Significantly extended lifespan of electro-mechanical equipment',
    ],
  },
  {
    id: 'project-management',
    number: '04',
    title: 'Project Management & Advisory',
    tagline: 'Specialist Acquisition Due Diligence, Consultant Coordination & Budget Rigor',
    summary: 'We offer specialist advice on property purchase, construction and development as well as management of consultants and contractors at both pre- and post-contract stages to meet our clients’ requirements.',
    description: 'Navigating real estate development in Lagos requires strict fiduciary controls, legal vigilance, and experienced on-site oversight. Led by certified professionals with credentials from Lagos Business School and the UK’s Prince2 framework, Chapelhill serves as your trusted owner’s representative, managing contractors, auditing material costs, and safeguarding your capital from inflation and delays.',
    icon: Briefcase,
    image: '/luxury_villa_closing.jpg',
    imageAlt: 'Chapelhill senior management conducting high-level property advisory',
    scopeItems: [
      {
        category: 'Pre-Contract Due Diligence & Tendering',
        items: [
          'Land title verification with Lagos State Lands Bureau (C of O, Consent)',
          'Pre-acquisition feasibility, highest-and-best-use financial models',
          'Architectural, structural, and quantity surveying consultant selection',
          'Comprehensive contractor bill of quantities (BOQ) auditing',
        ],
      },
      {
        category: 'Post-Contract Supervision & Handover',
        items: [
          'Continuous on-site quality assurance and statutory milestone sign-offs',
          'Escrow milestone valuations and transparent payment disbursements',
          'Risk management, material testing, and delay mitigation protocols',
          'Commissioning, final snag clearance, and statutory title perfection',
        ],
      },
    ],
    deliverables: [
      'Prince2-governed weekly progress dashboards with photo/video logs',
      'Transparent itemized accounting with zero surprise cost escalations',
      'Independent investor protection for domestic and diaspora clients',
    ],
    caseStudyRef: {
      projectName: 'Ivy Homes, Abijo GRA',
      location: 'Abijo GRA Corridor, Lekki-Epe',
      type: 'Completed Luxury Residential Community',
      href: '/properties/ivy-homes-abijo',
    },
  },
];

const WORK_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We start with an in-depth conversation to understand your vision, operational goals, and budget. This helps us align our services with your exact project needs.',
  },
  {
    step: '02',
    title: 'Site Visit & Assessment',
    desc: 'Our technical and engineering team visits your site to evaluate soil conditions, topography, access roads, drainage dynamics, and potential project challenges.',
  },
  {
    step: '03',
    title: 'Proposal & Quotation',
    desc: 'We prepare a detailed project proposal, including the full scope of work, automated design concepts, milestone timelines, and a transparent, itemized cost breakdown.',
  },
  {
    step: '04',
    title: 'Agreement & Kickoff',
    desc: 'Once approved, we formalize the statutory contract agreement and assign a dedicated project manager to lead your project from inception to handover.',
  },
  {
    step: '05',
    title: 'Project Execution & Updates',
    desc: 'We execute with precision craftsmanship and keep you informed through regular photo updates, video milestone reports, and transparent communication.',
  },
  {
    step: '06',
    title: 'Final Delivery & Ongoing Support',
    desc: 'After rigorous multi-stage inspection and official handover, we remain available for needed maintenance or support to ensure long-term satisfaction.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What’s included in your property maintenance services?',
    a: 'Our maintenance services cover plumbing, electrical work, air-conditioning repairs, tiling, roofing, general building repairs, and even land reclamation in waterfront areas to protect your asset and enable you to focus on your core business.',
  },
  {
    q: 'Can you handle both new constructions and renovations?',
    a: 'Yes, we specialize in both. We build from the ground up — managing excavation, civil works, and structural engineering — and also remodel or renovate existing structures, including carcasses and semi-completed buildings.',
  },
  {
    q: 'Do you provide customized architectural designs?',
    a: 'Absolutely. We use automated architectural design and 3D modeling tools to deliver tailored building plans and photorealistic interior/exterior renderings that suit each client’s unique aesthetic and functional requirements.',
  },
  {
    q: 'Can you manage an entire construction project for me?',
    a: 'Yes. We offer full project management services — from property acquisition and pre-construction planning to contractor coordination, quality audits, cost control, and post-construction maintenance.',
  },
  {
    q: 'How do I get started with your services?',
    a: 'Simply contact us for a consultation. We’ll assess your needs, provide expert advice, and develop a customized plan tailored to your project goals, timelines, and budget.',
  },
];

export default function ServicesPageClient() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Property Development');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const openBookingFor = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setBookingModalOpen(true);
  };

  const filteredServices = activeFilter === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.id === activeFilter);

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
            {/* Header Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D64933]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#162521]">
                Our Services &amp; Capabilities
              </span>
            </div>

            {/* Main Headline directly from chapelhill.com.ng/services/ */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.2] sm:leading-[1.15]">
              Empowering You to Make the Right Move
            </h1>

            {/* Subhead Quote */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#162521]/80 max-w-3xl mx-auto leading-relaxed">
              With a foundation built on years of dedicated service in property development, construction, remodeling, renovation, and maintenance, <strong className="font-semibold text-[#162521]">Chapelhill Multicompany International</strong> has established a legacy of unmatched expertise.
            </p>

            {/* Interactive Service Filter Tabs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100/80 backdrop-blur-md rounded-2xl border border-stone-200 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#461313] shadow-sm'
                    : 'text-stone-600 hover:text-[#162521]'
                }`}
              >
                All Capabilities
              </button>
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveFilter(srv.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeFilter === srv.id
                      ? 'bg-[#461313] text-white shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                >
                  <span className="text-xs opacity-75 font-mono">{srv.number}</span>
                  <span>{srv.title.split('&')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clean Typographic Metrics Strip (Zero-Pill Discipline) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-200/60 max-w-5xl mx-auto text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#461313] font-serif">Turnkey</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">From Carcass to Luxury Handover</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#461313] font-serif">Automated</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">BIM &amp; 3D Architectural Designs</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#461313] font-serif">COREN</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Certified Civil &amp; Structural Standards</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#461313] font-serif">24/7</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Rapid Facility Maintenance Support</p>
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
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left / Info Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Category Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-mono font-bold text-[#D64933] bg-[#D64933]/10 px-3.5 py-1 rounded-full">
                          {service.number} / SERVICE PILLAR
                        </span>
                        <span className="text-xs font-medium text-stone-500 tracking-wide uppercase">
                          {service.tagline.split(',')[0]}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] leading-tight">
                        {service.title}
                      </h2>

                      {/* Primary Excerpt */}
                      <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
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
                          <h3 className="text-xs font-bold uppercase tracking-wider text-[#461313] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D64933]" />
                            <span>{scope.category}</span>
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

                    {/* Deliverables Banner */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                        Guaranteed Execution Standards
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

                    {/* CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => openBookingFor(service.title)}
                        className="bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[44px] group"
                      >
                        <span>Inquire About {service.title}</span>
                        <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                      </button>

                      <a
                        href={`https://wa.me/2349039130207?text=${encodeURIComponent(`Hello Chapelhill, I am interested in inquiring about your "${service.title}" services. Could you please share more details and arrange a consultation?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Chat with Specialist</span>
                      </a>
                    </div>
                  </div>

                  {/* Right / Visual Column (5 Cols) */}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                      {/* Icon overlay */}
                      <div className="absolute top-4 left-4 z-10 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#461313] shadow-md">
                        <IconComponent className="w-5 h-5 stroke-[2.5]" />
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-5 inset-x-5 z-10 text-white">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C0E8F9]">
                          Chapelhill Portfolio Standard
                        </span>
                        <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Related Project Card if available */}
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
                            <p className="text-xs text-stone-500 font-medium">Explore Related Estate</p>
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

        {/* Why Choose Us: Real Estate Solutions That Click */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Real Estate Solutions That Click
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              With a foundation built on years of dedicated service in property development, construction, remodeling, renovation, and maintenance, Chapelhill Multicompany International has established a legacy of unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#461313]/10 text-[#461313] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Expertise you can trust, results you&apos;ll love
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Backed by formal credentials from Lagos Business School and UK Prince2 project governance, our leadership delivers structural mastery and audited execution.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#D64933]/10 text-[#D64933] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Maximizing value, exceeding expectations
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                From value engineering to eliminate costly variations, to selecting durable materials suited for tropical coastal climates, we protect and optimize your return on capital.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#162521]/10 text-[#162521] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                Finding your perfect match in real estate
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Whether creating a bespoke multi-generational residence in Lekki or acquiring high-yield residential units in Abijo, we match individual visions with precision.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work: Paving the Way to Real Estate Glory */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Paving the Way to Real Estate Glory
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Our structured 6-step project delivery methodology guarantees clarity, transparency, and uncompromised quality from initial consultation to long-term warranty support.
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
                  <h3 className="text-lg font-bold text-[#162521]">
                    {step.title}
                  </h3>
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
              We are here to help you 7 days a week and respond within 24 hours. Plus, you can find the most common answers to your questions right here.
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
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#162521]">
                      {item.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#461313] text-white rotate-180' : 'bg-stone-100 text-stone-600'
                    }`}>
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
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#E5C583]">
                  Ready to Build or Preserve?
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                  Request an Official Technical Proposal
                </h2>
                <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed">
                  Connect with our senior engineering and project management team. We will evaluate your drawings, inspect your site, and prepare a tailored milestone proposal.
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
                    <span>(+234) 903 913 0207 &nbsp;•&nbsp; (+234) 803 286 5488</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#E5C583] shrink-0" />
                    <span>chapelhillmulticompanyltd@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <button
                  onClick={() => openBookingFor('Custom Technical Proposal')}
                  className="w-full bg-[#E5C583] hover:bg-white text-[#461313] py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Request Project Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2349039130207?text=Hello%20Chapelhill%2C%20I%20would%20like%20to%20request%20a%20project%20proposal%20for%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 rounded-2xl font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Direct WhatsApp Line (+234 903 913 0207)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Closing Advisory Banner */}
      <ClosingAdvisoryBanner onContactClick={() => openBookingFor('General Consultation')} />

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
      <WhatsAppFAB defaultMessage="Hello Chapelhill, I am inquiring from the Services page regarding your property development, remodeling, and maintenance solutions." />
    </div>
  );
}
