'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Eye,
  Hammer,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import DeliveryMethodologySticky from '@/components/DeliveryMethodologySticky';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { BUSINESS_IDENTITY, getWhatsAppUrl } from '@/lib/seo/businessIdentity';

type LeadershipTrack = 'board-legal' | 'executive-technical';
type FilterOption = 'all' | LeadershipTrack;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  track: LeadershipTrack;
  trackLabel: string;
  image: string;
  bio: string;
  phone?: string;
  email?: string;
  qualifications: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-christopher-inegbedion',
    name: 'Dr. Christopher Inegbedion',
    role: 'Chairman',
    track: 'board-legal',
    trackLabel: 'Board & Governance',
    image: '/images/team/dr-christopher-inegbedion.png',
    bio: 'Dr. Christopher Obhiokholen Inegbedion brings a wealth of leadership, governance, and strategic expertise to our board as Chairman. A respected Geriatric Psychiatrist by profession—holding an MB BS from Ahmadu Bello University alongside advanced certifications from the Royal College of Physicians and Surgeons of Canada and the CPSBC—Dr. Inegbedion is deeply committed to ethical, community-focused leadership. His extensive background in specialized care and organizational oversight guides our company’s strategic direction, ensuring steady growth, strong governance, and a steadfast commitment to excellence.',
    qualifications: [
      'Board Governance & Strategic Direction',
      'MB BS, Ahmadu Bello University',
      'Royal College of Physicians & Surgeons of Canada / CPSBC Certifications',
    ],
  },
  {
    id: 'nick-joel-okpanachi',
    name: 'Nick Joel Okpanachi',
    role: 'Chief Executive Officer',
    track: 'executive-technical',
    trackLabel: 'Executive & Technical',
    image: '/images/team/nick-joel-okpanachi.png',
    bio: 'Nick Joel Okpanachi leads the executive management, development pipeline, client relations, and overall vision of ChapelHill Multicompany Limited across Nigeria and the diaspora.',
    phone: '+234 703 836 8119',
    email: BUSINESS_IDENTITY.contact.email,
    qualifications: [
      'Executive Leadership & Corporate Vision',
      'Real Estate Investment Portfolio Architecture',
      'Institutional Strategic Partnerships',
      'Client Satisfaction & Quality Assurance',
    ],
  },
  {
    id: 'victoria-olubunmi-afolayan',
    name: 'Victoria Olubunmi Afolayan',
    role: 'Board Member',
    track: 'board-legal',
    trackLabel: 'Board & Governance',
    image: '/Victoria Olubunmi Afolayan.jpeg',
    bio: 'Victoria Afolayan brings 20 years of extensive experience in administration, finance, and business management. Holding a Postgraduate Diploma in Accounting, a Postgraduate Certificate in Business Accounting, and a Certificate IV in Human Resources, she has built a strong background across both corporate and community services sectors, including finance management and quality assurance. Victoria combines her robust financial expertise with a dedicated, people-first leadership style for our board.',
    qualifications: [
      'Board Governance & Corporate Oversight',
      'Strategic Real Estate Investment Direction',
      'Fiduciary & Institutional Stewardship',
      'Stakeholder & Partner Relations',
    ],
  },
  {
    id: 'stephen-agada',
    name: 'Stephen Agada',
    role: 'Chief Operating Officer',
    track: 'executive-technical',
    trackLabel: 'Executive & Technical',
    image: '/images/team/stephen-agada.jpg',
    bio: 'Stephen Agada brings extensive expertise in facility management, project execution, procurement, and quantity surveying.',
    phone: BUSINESS_IDENTITY.contact.primaryPhone.display,
    email: BUSINESS_IDENTITY.contact.email,
    qualifications: [
      'Facility Management & Turnkey Operations',
      'Procurement & Supply Chain Efficiency',
      'Project Costing & Quantity Surveying',
      'End-to-End Construction Oversight',
    ],
  },
  {
    id: 'barr-blessing-agada',
    name: 'Barr. Blessing Agada',
    role: 'Director',
    track: 'board-legal',
    trackLabel: 'Board & Legal',
    image: '/images/team/barr-blessing-agada.jpg',
    bio: 'Barrister Blessing Agada oversees institutional governance, legal risk mitigation, land title verification, and corporate structuring for ChapelHill Multicompany Limited.',
    qualifications: [
      'Legal & Corporate Regulatory Governance',
      'Lands Bureau & Governor’s Consent Title Advisory',
      'Commercial Property Contracts & Joint Ventures',
      'Diaspora Investment Fiduciary Oversight',
    ],
  },
  {
    id: 'olueseun',
    name: 'Olueseun',
    role: 'Technical Director',
    track: 'executive-technical',
    trackLabel: 'Executive & Technical',
    image: '/images/team/olueseun.png',
    bio: 'Directs engineering precision, structural integrity, rapid wall technologies, architectural execution, and on-site building compliance across all ongoing and completed projects.',
    qualifications: [
      'Civil Engineering & Structural Design',
      'Precision Architectural Execution',
      'Quality Control & Site Safety Compliance',
      'Carcass to Turnkey Finishing Mastery',
    ],
  },
  {
    id: 'dennis-baba',
    name: 'Dennis Baba',
    role: 'Secretary & Legal Adviser',
    track: 'board-legal',
    trackLabel: 'Board & Legal',
    image: '/images/team/dennis-baba.jpg',
    bio: 'Dennis Baba spearheads legal compliance, statutory board secretarial documentation, contracts, and regulatory liaison with governmental authorities and institutional partners.',
    qualifications: [
      'Corporate Secretarial Management',
      'Statutory & Contractual Compliance',
      'Property Rights & Conveyancing Due Diligence',
      'Dispute Prevention & Risk Management',
    ],
  },
];

const LEADERSHIP_FILTERS: { id: FilterOption; label: string; count: number }[] = [
  { id: 'all', label: 'All Leadership', count: TEAM_MEMBERS.length },
  {
    id: 'board-legal',
    label: 'Board & Legal',
    count: TEAM_MEMBERS.filter((m) => m.track === 'board-legal').length,
  },
  {
    id: 'executive-technical',
    label: 'Executive & Technical',
    count: TEAM_MEMBERS.filter((m) => m.track === 'executive-technical').length,
  },
];

const CORE_SERVICES = [
  {
    id: 'development-sales',
    number: '01',
    title: 'Property Development and Sales',
    description:
      'Development and sale of residential and other approved real estate projects, including off-plan developments.',
    highlights: [
      'Residential & approved developments',
      'Structured off-plan payment options',
      'Verified documentation & buyer guidance',
    ],
    icon: Building2,
  },
  {
    id: 'construction-management',
    number: '02',
    title: 'Construction and Project Management',
    description:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.',
    highlights: [
      'Private & corporate builds',
      'Pre- and post-contract supervision',
      'Renovations & turnkey finishing',
    ],
    icon: Hammer,
  },
  {
    id: 'facility-management',
    number: '03',
    title: 'Property and Facility Management',
    description:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.',
    highlights: [
      'Preventive asset & building repairs',
      'Plumbing, electrical & HVAC upkeep',
      'Estate infrastructure maintenance',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'joint-ventures',
    number: '04',
    title: 'Joint Ventures and Investment Partnerships',
    description:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.',
    highlights: [
      'Landowner & developer collaborations',
      'Feasibility & joint structuring',
      'Transparent project governance',
    ],
    icon: Handshake,
  },
];

export default function AboutPageClient() {
  const shouldReduceMotion = useReducedMotion();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState(
    'ChapelHill Multicompany Limited Consultation'
  );
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [activeMemberId, setActiveMemberId] = useState<string>(TEAM_MEMBERS[0].id);

  const filteredMembers = useMemo(() => {
    if (activeFilter === 'all') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter((member) => member.track === activeFilter);
  }, [activeFilter]);

  const activeMember = useMemo(() => {
    return (
      filteredMembers.find((member) => member.id === activeMemberId) ??
      filteredMembers[0] ??
      TEAM_MEMBERS[0]
    );
  }, [filteredMembers, activeMemberId]);

  const activeIndex = useMemo(() => {
    return filteredMembers.findIndex((member) => member.id === activeMember.id);
  }, [filteredMembers, activeMember]);

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter);
    const nextList =
      filter === 'all' ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.track === filter);
    if (!nextList.some((m) => m.id === activeMemberId) && nextList[0]) {
      setActiveMemberId(nextList[0].id);
    }
  };

  const stepMember = (direction: -1 | 1) => {
    if (filteredMembers.length <= 1) return;
    const nextIdx =
      (activeIndex + direction + filteredMembers.length) % filteredMembers.length;
    setActiveMemberId(filteredMembers[nextIdx].id);
  };

  const openBookingFor = (topic?: string) => {
    if (topic) {
      setSelectedInquiryTopic(topic);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FEFCFD] text-[#162521] font-sans flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      <Navbar
        activePage="about"
        onContactClick={() => openBookingFor('ChapelHill Multicompany Limited Consultation')}
        onServicesClick={() => setInfoModal('services')}
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-20">
        {/* Editorial Breadcrumb */}
        <div className="flex items-center justify-between gap-4 text-xs text-stone-500 py-3 mb-8 sm:mb-12 border-b border-stone-200/70">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#461313] transition-colors font-medium">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#162521] font-semibold">About Us</span>
          </div>
          <span className="hidden sm:inline font-medium tracking-wide text-stone-500">
            {BUSINESS_IDENTITY.companyName} · {BUSINESS_IDENTITY.geographicCoverage.hqBadge}
          </span>
        </div>

        {/* SECTION 1: WIDE EDITORIAL OPENING + COMPACT ANCHOR BLOCK */}
        <section className="pb-14 sm:pb-20 border-b border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Wide Editorial Text Column */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D64933]">
                About ChapelHill Multicompany Limited
              </p>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162521] tracking-[-0.03em] leading-[1.12] mt-4 text-balance">
                Excellence in Property Development, Construction &amp; Maintenance
              </h1>

              <div className="mt-6 space-y-4 max-w-[65ch] text-base sm:text-[17px] text-[#162521]/80 leading-[1.7]">
                <p>
                  At{' '}
                  <strong className="font-semibold text-[#162521]">
                    ChapelHill Multicompany Limited
                  </strong>
                  , we deliver Property Development and Sales, Construction and Project Management,
                  Property and Facility Management, and Joint Ventures and Investment Partnerships
                  tailored to our clients’ goals.
                </p>
                <p className="text-[#162521]/75">
                  Our leadership team brings multidisciplinary expertise across board governance,
                  corporate law, civil engineering, quantity surveying, and asset stewardship—serving
                  private homeowners, diaspora buyers, corporate organizations, landowners, and
                  development partners across Nigeria.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openBookingFor('ChapelHill Multicompany Limited Consultation')}
                  className="bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3.5 py-3 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-3 transition-colors duration-200 shadow-sm cursor-pointer min-h-[48px] whitespace-nowrap shrink-0 group"
                >
                  <span>Book a Private Consultation</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 stroke-[2.25]" />
                  </span>
                </button>

                <a
                  href={getWhatsAppUrl(
                    'Hello ChapelHill Multicompany Limited, I would like to learn more about your services and developments.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#25D366]/10 text-[#128C7E] border border-stone-200 hover:border-[#25D366]/40 px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors min-h-[48px] whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Advisory on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Compact Scannable Quote & Corporate Index Block */}
            <aside className="lg:col-span-5 bg-[#F7F3F5] border border-stone-200/80 rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D64933]">
                Brand Ethos
              </p>
              <blockquote className="font-heading text-xl sm:text-2xl font-semibold text-[#461313] leading-snug mt-3">
                &ldquo;At ChapelHill Multicompany Limited, we epitomize excellence in property
                development, construction, and maintenance services.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#162521]/70">
                {BUSINESS_IDENTITY.slogan}
              </p>

              <dl className="mt-6 pt-6 border-t border-stone-200/80 divide-y divide-stone-200/70 text-xs sm:text-sm">
                <div className="py-2.5 flex items-baseline justify-between gap-4">
                  <dt className="text-stone-500 font-medium shrink-0">Headquarters</dt>
                  <dd className="text-right font-semibold text-[#162521]">
                    {BUSINESS_IDENTITY.address.compact}
                  </dd>
                </div>
                <div className="py-2.5 flex items-baseline justify-between gap-4">
                  <dt className="text-stone-500 font-medium shrink-0">Core Divisions</dt>
                  <dd className="text-right font-semibold text-[#162521]">
                    Development · Build · Facility · JV
                  </dd>
                </div>
                <div className="pt-2.5 flex items-baseline justify-between gap-4">
                  <dt className="text-stone-500 font-medium shrink-0">Advisory Lines</dt>
                  <dd className="text-right font-semibold text-[#461313]">
                    <a
                      href={BUSINESS_IDENTITY.contact.primaryPhone.telHref}
                      className="hover:text-[#D64933] transition-colors"
                    >
                      {BUSINESS_IDENTITY.contact.primaryPhone.display}
                    </a>{' '}
                    /{' '}
                    <a
                      href={BUSINESS_IDENTITY.contact.secondaryPhone.telHref}
                      className="hover:text-[#D64933] transition-colors"
                    >
                      {BUSINESS_IDENTITY.contact.secondaryPhone.display}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* SECTION 2: COMPACT SCANNABLE BAND — FOUR CORE SERVICE DIVISIONS */}
        <section id="services-grid" className="py-12 sm:py-16 border-b border-stone-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                Four Operating Divisions
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
                Integrated Real Estate Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#461313] hover:text-[#D64933] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-stone-200/90 rounded-2xl bg-white divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80 overflow-hidden">
            {CORE_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 flex flex-col justify-between hover:bg-[#F7F3F5]/60 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-heading text-xs font-bold tracking-widest text-[#D64933]">
                        {service.number}
                      </span>
                      <IconComp className="w-4 h-4 text-[#461313]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#162521] leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => openBookingFor(service.title)}
                      className="text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                    <Link
                      href={`/services#${service.id}`}
                      className="text-xs font-medium text-stone-500 hover:text-[#162521] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Scope</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE EXECUTIVE DIRECTORY (7 LEADERS — TABBED & FILTERABLE) */}
        <section id="leadership-team" className="py-14 sm:py-20 border-b border-stone-200/80">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D64933]">
                Leadership &amp; Governance Directory
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162521] mt-2 tracking-[-0.02em]">
                Meet the Executive Team &amp; Board
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-[62ch]">
                Filter by governance or operational track and select any leader to review credentials,
                board remit, and direct advisory channels.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter leadership directory"
              className="flex flex-wrap items-center gap-2"
            >
              {LEADERSHIP_FILTERS.map((filter) => {
                const isSelected = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer min-h-[42px] whitespace-nowrap shrink-0 border ${
                      isSelected
                        ? 'bg-[#461313] text-white border-[#461313] shadow-xs'
                        : 'bg-white text-[#162521] border-stone-200 hover:border-[#461313]/40 hover:bg-[#F7F3F5]'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Master-Detail Executive Switcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Compact Scannable Directory Selector */}
            <div
              role="tablist"
              aria-label="Select executive profile"
              aria-orientation="vertical"
              className="lg:col-span-5 bg-white border border-stone-200/90 rounded-2xl divide-y divide-stone-200/70 overflow-hidden"
            >
              {filteredMembers.map((member, index) => {
                const isActive = activeMember.id === member.id;
                return (
                  <button
                    key={member.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveMemberId(member.id)}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3.5 transition-colors cursor-pointer min-h-[68px] ${
                      isActive
                        ? 'bg-[#461313] text-white'
                        : 'bg-white hover:bg-[#F7F3F5] text-[#162521]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-heading text-[11px] font-bold w-5 shrink-0 ${
                          isActive ? 'text-[#E5C583]' : 'text-stone-400'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-stone-100 shrink-0 ring-1 ring-black/10">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="44px"
                          className="object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-heading text-sm sm:text-[15px] font-bold truncate">
                          {member.name}
                        </p>
                        <p
                          className={`text-xs truncate mt-0.5 ${
                            isActive ? 'text-stone-200' : 'text-stone-500'
                          }`}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-[#E5C583] translate-x-0.5' : 'text-stone-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Executive Dossier Panel */}
            <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeMember.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8"
                >
                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-stone-200/70">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200/70">
                      <Image
                        src={activeMember.image}
                        alt={activeMember.name}
                        fill
                        sizes="128px"
                        className="object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D64933]">
                        {activeMember.trackLabel} · {activeMember.role}
                      </p>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#162521] mt-1.5 tracking-[-0.02em]">
                        {activeMember.name}
                      </h3>

                      {(activeMember.phone || activeMember.email) && (
                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-stone-600">
                          {activeMember.phone && (
                            <a
                              href={`tel:${activeMember.phone.replace(/\s+/g, '')}`}
                              className="inline-flex items-center gap-1.5 font-semibold text-[#461313] hover:text-[#D64933] transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{activeMember.phone}</span>
                            </a>
                          )}
                          {activeMember.email && (
                            <a
                              href={`mailto:${activeMember.email}`}
                              className="inline-flex items-center gap-1.5 font-medium text-stone-600 hover:text-[#461313] transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>{activeMember.email}</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bio Prose (Manrope editorial measure) */}
                  <div className="mt-6">
                    <p className="text-[15px] sm:text-base text-[#162521]/80 leading-[1.72] max-w-[65ch]">
                      {activeMember.bio}
                    </p>
                  </div>

                  {/* Scannable Credentials */}
                  <div className="mt-6 pt-5 border-t border-stone-100">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 mb-3">
                      Key Remit &amp; Credentials
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#162521]/85">
                      {activeMember.qualifications.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D64933] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dossier Footer Navigation & Enquiry */}
                  <div className="mt-7 pt-5 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        openBookingFor(
                          `Consultation Request — ${activeMember.name} (${activeMember.role})`
                        )
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold transition-colors cursor-pointer min-h-[42px] whitespace-nowrap shrink-0"
                    >
                      <span>Consult with Leadership</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-stone-500 mr-1">
                        {activeIndex + 1} / {filteredMembers.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => stepMember(-1)}
                        aria-label="Previous executive profile"
                        className="w-10 h-10 rounded-full border border-stone-200 hover:border-[#461313] text-[#162521] hover:text-[#461313] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => stepMember(1)}
                        aria-label="Next executive profile"
                        className="w-10 h-10 rounded-full border border-stone-200 hover:border-[#461313] text-[#162521] hover:text-[#461313] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SECTION 4: ALTERNATING EDITORIAL NARRATIVE & FOUNDATIONAL PRINCIPLES */}
        <section className="py-14 sm:py-20 border-b border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Compact Scannable Mission & Vision Chapters */}
            <div className="lg:col-span-5 divide-y divide-stone-200/80 border-y border-stone-200/80">
              <div className="py-6">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#461313]">
                  <Target className="w-4 h-4 text-[#D64933]" />
                  <span>Our Mission</span>
                </div>
                <p className="font-heading text-lg sm:text-xl font-semibold text-[#162521] mt-3 leading-snug">
                  &ldquo;Exceeding customers’ expectations through excellent delivery of
                  construction services, property development, space design, and maintenance
                  solutions.&rdquo;
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Precision execution tailored to client briefs, backed by end-to-end quality
                  assurance from foundation works through finishing.
                </p>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#461313]">
                  <Eye className="w-4 h-4 text-[#D64933]" />
                  <span>Our Vision</span>
                </div>
                <p className="font-heading text-lg sm:text-xl font-semibold text-[#162521] mt-3 leading-snug">
                  &ldquo;To be the leading brand reputed for quality in the property development,
                  construction and maintenance industry.&rdquo;
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Setting a dependable benchmark for structural resilience, clear title processes,
                  and long-term property care across Nigeria and diaspora investment corridors.
                </p>
              </div>
            </div>

            {/* Wide Editorial Narrative & Deep Forest Anchor Strip */}
            <div className="lg:col-span-7 bg-[#162521] text-white rounded-2xl p-7 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E5C583]">
                Our Goals &amp; Philosophy
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2 tracking-[-0.02em]">
                Where Home Meets Happiness
              </h2>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-[1.7] max-w-[62ch]">
                Every client arrives with distinct residential, commercial, or joint-venture
                objectives. We align engineering discipline, commercial transparency, and structured
                facility stewardship so every development endures well beyond handover.
              </p>

              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="font-heading text-sm font-bold text-[#E5C583]">
                    01 · Expertise You Can Trust
                  </p>
                  <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
                    Multidisciplinary strength across quantity surveying, civil engineering, law, and
                    facility operations.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#E5C583]">
                    02 · Maximizing Value
                  </p>
                  <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
                    Clear budgeting, milestone tracking, and cost engineering aligned to agreed
                    specifications.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#E5C583]">
                    03 · Tailored Alignment
                  </p>
                  <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
                    Advisory shaped for end-users, diaspora purchasers, corporate clients, and
                    landowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: STICKY SPLIT 6-STEP PROJECT DELIVERY METHODOLOGY */}
        <DeliveryMethodologySticky
          onConsultClick={() =>
            openBookingFor('Stage 01 Initial Consultation — Project Delivery')
          }
        />

        {/* SECTION 6: COMPACT HEADQUARTERS & DIRECT ENGAGEMENT BAND */}
        <section className="pt-14 sm:pt-20">
          <div className="p-7 sm:p-11 rounded-2xl bg-[#461313] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E5C583]">
                  Direct Engagement
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2 tracking-[-0.02em]">
                  Partner with ChapelHill Multicompany Limited
                </h2>
                <p className="mt-3 text-stone-200 text-sm sm:text-base leading-relaxed max-w-[60ch]">
                  Whether you are exploring our developments, commissioning construction, arranging
                  facility maintenance, or proposing a joint venture, our advisory desk is ready to
                  assist.
                </p>

                <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-stone-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E5C583] shrink-0 mt-0.5" />
                    <span>{BUSINESS_IDENTITY.address.full}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#E5C583] shrink-0" />
                      <span>
                        <a
                          href={BUSINESS_IDENTITY.contact.primaryPhone.telHref}
                          className="hover:text-[#E5C583] transition-colors"
                        >
                          {BUSINESS_IDENTITY.contact.primaryPhone.display}
                        </a>{' '}
                        ·{' '}
                        <a
                          href={BUSINESS_IDENTITY.contact.secondaryPhone.telHref}
                          className="hover:text-[#E5C583] transition-colors"
                        >
                          {BUSINESS_IDENTITY.contact.secondaryPhone.display}
                        </a>
                      </span>
                    </span>
                    <a
                      href={BUSINESS_IDENTITY.contact.emailHref}
                      className="inline-flex items-center gap-2 hover:text-[#E5C583] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#E5C583] shrink-0" />
                      <span>{BUSINESS_IDENTITY.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => openBookingFor('ChapelHill Multicompany Limited Consultation')}
                  className="w-full bg-[#E5C583] hover:bg-white text-[#461313] py-3.5 px-6 rounded-full font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <span>Schedule Private Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(
                    'Hello ChapelHill Multicompany Limited, I am reaching out from the About Us page.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Desk ({BUSINESS_IDENTITY.contact.primaryPhone.display})</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onExploreClick={() => {
          window.location.href = '/#featured-properties';
        }}
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
        onContactClick={() => setBookingModalOpen(true)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedInquiryTopic}
      />

      <InfoDrawer
        isOpen={infoModal !== null}
        type={infoModal}
        onClose={() => setInfoModal(null)}
        onBookVisit={(topic) =>
          openBookingFor(topic || 'ChapelHill Multicompany Limited Consultation')
        }
      />

      <WhatsAppFAB />
    </div>
  );
}
