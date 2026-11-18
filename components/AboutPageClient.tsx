'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Compass, 
  Layers, 
  Clock, 
  Users, 
  FileCheck, 
  X,
  Target,
  Eye,
  HeartHandshake,
  MessageCircle,
  Handshake
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import InfoDrawer from '@/components/InfoDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  phone?: string;
  email?: string;
  qualifications?: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Christopher Inegbedion',
    role: 'Chairman',
    image: '/images/team/dr-christopher-inegbedion.png',
    bio: 'Dr. Christopher Obhiokholen Inegbedion brings a wealth of leadership, governance, and strategic expertise to our board as Chairman. A respected Geriatric Psychiatrist by profession—holding an MB BS from Ahmadu Bello University alongside advanced certifications from the Royal College of Physicians and Surgeons of Canada and the CPSBC—Dr. Inegbedion is deeply committed to ethical, community-focused leadership. His extensive background in specialized care and organizational oversight guides our company’s strategic direction, ensuring steady growth, strong governance, and a steadfast commitment to excellence.',
    qualifications: [
      'Board Governance & Strategic Direction',
  
    ],
  },
  {
    name: 'Victoria Olubunmi Afolayan',
    role: 'Board Member',
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
    name: 'Barr. Blessing Agada',
    role: 'Director',
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
    name: 'Stephen Agada',
    role: 'Chief Operating Officer',
    image: '/images/team/stephen-agada.jpg',
    bio: 'Stephen Agada brings extensive expertise in facility management, project execution, procurement, and quantity surveying.',
    phone: '+234 803 286 5488',
    email: 'chapelhillmulticompanyltd@gmail.com',
    qualifications: [
      'Facility Management & Turnkey Operations',
      'Procurement & Supply Chain Efficiency',
      'Project Costing & Quantity Surveying',
      'End-to-End Construction Oversight',
    ],
  },
  {
    name: 'Nick Joel Okpanachi',
    role: 'Chief Executive Officer',
    image: '/images/team/nick-joel-okpanachi.png',
    bio: 'Nick Joel Okpanachi leads the executive management, development pipeline, client relations, and overall vision of ChapelHill Multicompany Limited across Nigeria and the diaspora.',
    phone: '+234 703 836 8119',
    email: 'chapelhillmulticompanyltd@gmail.com',
    qualifications: [
      'Executive Leadership & Corporate Vision',
      'Real Estate Investment Portfolio Architecture',
      'Institutional Strategic Partnerships',
      'Client Satisfaction & Quality Assurance',
    ],
  },
  {
    name: 'Olueseun',
    role: 'Technical Director',
    image: '/images/team/olueseun.png',
    bio: 'Directs engineering precision, structural integrity, rapid wall technologies, architectural execution, and on-site building compliance across all ongoing and completed projects.',
    
    qualifications: [
      'Civil Engineering & Structural Design',
      'Automated Architectural Execution',
      'Quality Control & Site Safety Compliance',
      'Carcass to Turnkey Finishing Mastery',
    ],
  },
  {
    name: 'Dennis Baba',
    role: 'Secretary & Legal Adviser',
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

const CORE_SERVICES = [
  {
    id: 'development-sales',
    code: 'A',
    number: '01',
    title: 'Property Development and Sales',
    description:
      'Development and sale of residential and other approved real estate projects, including off-plan developments.',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited Property Development and Sales',
    highlights: [
      'Residential & approved real estate developments',
      'Off-plan property sales with structured payment options',
      'Completed homes ready for inspection and handover',
      'Verified title documentation & buyer support',
    ],
    icon: Building2,
  },
  {
    id: 'construction-management',
    code: 'B',
    number: '02',
    title: 'Construction and Project Management',
    description:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.',
    image:
      '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
    imageAlt: 'ChapelHill Multicompany Limited Construction and Project Management',
    highlights: [
      'Construction for private individuals & corporate clients',
      'Pre- and post-contract project coordination & supervision',
      'Renovations, remodelling & carcass-to-turnkey finishing',
      'Transparent milestone reporting & budget discipline',
    ],
    icon: Hammer,
  },
  {
    id: 'facility-management',
    code: 'C',
    number: '03',
    title: 'Property and Facility Management',
    description:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.',
    image: '/maintenance.webp',
    imageAlt: 'ChapelHill Multicompany Limited Property and Facility Management',
    highlights: [
      'Ongoing property maintenance & facility management',
      'Building repairs, plumbing, electrical & HVAC upkeep',
      'Estate roads, drainage & infrastructure maintenance',
      'Scheduled preventive asset care & technical support',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'joint-ventures',
    code: 'D',
    number: '04',
    title: 'Joint Ventures and Investment Partnerships',
    description:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.',
    image: '/images/joint-venture-partnerships.jpg',
    imageAlt: 'ChapelHill Multicompany Limited Joint Ventures and Investment Partnerships',
    highlights: [
      'Landowner & developer joint-venture collaborations',
      'Investor & financial institution project partnerships',
      'Feasibility review, planning & joint development structuring',
      'Transparent governance from inception to project delivery',
    ],
    icon: Handshake,
  },
];

const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We start with an in-depth conversation to understand your vision, goals, and budget. This helps us align our services with your exact specifications.',
  },
  {
    step: '02',
    title: 'Site Visit & Assessment',
    desc: 'Our technical team visits your site to evaluate the geographic environment, assess soil and drainage conditions, and identify project opportunities or challenges.',
  },
  {
    step: '03',
    title: 'Proposal & Quotation',
    desc: 'We prepare a detailed project proposal, including the full scope of work, automated architectural concepts, milestones, timelines, and a transparent cost breakdown.',
  },
  {
    step: '04',
    title: 'Agreement & Kickoff',
    desc: 'Once approved, we formalize the statutory agreement and assign a dedicated project manager to lead your project with uncompromised precision from start to finish.',
  },
  {
    step: '05',
    title: 'Project Execution & Updates',
    desc: 'We execute with precision craftsmanship and keep you fully informed through regular photo updates, video milestone reports, and transparent communication.',
  },
  {
    step: '06',
    title: 'Final Delivery & Ongoing Support',
    desc: 'After rigorous multi-stage inspection and official handover, we remain available for ongoing property maintenance to ensure enduring peace of mind.',
  },
];

export default function AboutPageClient() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState(
    'ChapelHill Multicompany Limited Consultation'
  );
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [infoModal, setInfoModal] = useState<'services' | 'about' | null>(null);

  const openBookingFor = (topic?: string) => {
    if (topic) {
      setSelectedInquiryTopic(topic);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navigation */}
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
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 py-3 mb-6 border-b border-stone-200/60">
          <Link href="/" className="hover:text-[#461313] transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#162521] font-semibold">About Us</span>
        </div>

        {/* Hero Section: Brand Identity & Grand Quote */}
        <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 border-b border-stone-200/80">
          {/* Ambient decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C0E8F9]/30 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto text-center">
            {/* Clean metadata badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D64933]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#162521]">
                ChapelHill Multicompany Limited
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.2] sm:leading-[1.15]">
              Excellence in Property Development, Construction &amp; Maintenance
            </h1>

            {/* Core Brand Quote */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/80 border border-stone-200/80 shadow-[0_8px_30px_rgba(22,37,33,0.04)] backdrop-blur-md">
              <p className="text-base sm:text-xl md:text-2xl font-serif italic text-[#461313] leading-relaxed">
                &ldquo;At ChapelHill Multicompany Limited, we epitomize excellence in property development, construction, and maintenance services.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D64933]">
                <span>Where Home Meets Happiness</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <p className="mt-8 text-base sm:text-lg text-[#162521]/80 max-w-3xl mx-auto leading-relaxed">
              At <strong className="font-semibold text-[#162521]">ChapelHill Multicompany Limited</strong>, we deliver Property Development and Sales, Construction and Project Management, Property and Facility Management, and Joint Ventures and Investment Partnerships tailored to our clients’ goals.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#162521]/75 max-w-3xl mx-auto leading-relaxed">
              Our leadership team brings broad multidisciplinary expertise, serving private homeowners, diaspora buyers, corporate clients, landowners, and strategic development partners.
            </p>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openBookingFor('ChapelHill Multicompany Limited Consultation')}
                className="w-full sm:w-auto bg-[#461313] hover:bg-[#D64933] text-white pl-6 pr-3 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[48px] group"
              >
                <span>Book a Private Consultation</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <a
                href="https://wa.me/2348032865488?text=Hello%20ChapelHill%20Multicompany%20Limited%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20developments."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 px-6 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-[#128C7E]" />
                <span>Chat with Advisory on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Clean Typographic Pillars Strip (Zero-Pill Discipline) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-200/60 max-w-5xl mx-auto text-center">
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

        {/* Mission, Vision & Core Goals */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Our Mission, Vision &amp; Strategic Goals
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every foundation we pour and every project we manage is governed by uncompromising standards of craftsmanship, fiscal responsibility, and enduring architectural prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm relative overflow-hidden group hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#461313]/10 text-[#461313] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162521]">Our Mission</h3>
              <p className="mt-4 text-stone-600 text-base leading-relaxed">
                &ldquo;Exceeding customers’ expectations through excellent delivery of construction services, property development, space design, and maintenance solutions.&rdquo;
              </p>
              <div className="mt-6 flex flex-col gap-2 pt-6 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D64933]" />
                  <span>Precision architectural execution tailored to client visions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D64933]" />
                  <span>End-to-end quality assurance from sub-grade to finishing</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm relative overflow-hidden group hover:border-[#D64933]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#D64933]/10 text-[#D64933] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162521]">Our Vision</h3>
              <p className="mt-4 text-stone-600 text-base leading-relaxed">
                &ldquo;To be the leading brand reputed for quality in the property development, construction and maintenance industry.&rdquo;
              </p>
              <div className="mt-6 flex flex-col gap-2 pt-6 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D64933]" />
                  <span>Recognized across Nigeria and premier diaspora investment corridors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D64933]" />
                  <span>Benchmark for structural resilience, aesthetic prestige & longevity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Goals: Where Home Meets Happiness */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#162521] text-white relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#E5C583]">
                Our Goals &amp; Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                Where Home Meets Happiness
              </h3>
              <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
                At ChapelHill Multicompany Limited, we understand that every client is unique. That’s why we tailor our services to match individual visions, turning ideas into reality with precision and excellence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <div className="text-[#E5C583] font-bold text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E5C583]/20 flex items-center justify-center text-xs">1</span>
                  <span>Expertise you can trust</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Seasoned experience in quantity surveying, civil engineering, and facility stewardship producing dependable results.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#E5C583] font-bold text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E5C583]/20 flex items-center justify-center text-xs">2</span>
                  <span>Maximizing value</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Transparent budgeting, value engineering, and milestone tracking aligned with your project scope and budget.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#E5C583] font-bold text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E5C583]/20 flex items-center justify-center text-xs">3</span>
                  <span>Your perfect match</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Finding your ideal acquisition in prime Lagos real estate, tailored from raw site curation to bespoke finishing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Management Team Section ("Meet the Team") */}
        <section id="leadership-team" className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Leadership &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Meet the Team
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              At ChapelHill Multicompany Limited, our work is driven by the collective expertise and dedication of our management team. Together, we form a dynamic team committed to pushing boundaries and delivering reliable execution.
            </p>
          </div>

          {/* 6-Member Leadership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative w-full aspect-square bg-stone-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs font-semibold text-white bg-[#461313]/90 px-3 py-1 rounded-full backdrop-blur-xs">
                        View Executive Profile
                      </span>
                    </div>
                  </div>

                  {/* Body Information */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#162521]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#D64933] uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-[#461313] text-[#162521] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-stone-200 hover:border-[#461313]"
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Services & Capabilities Grid */}
        <section id="services-grid" className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Our Four Service Categories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Property Development, Construction, Facility Management &amp; Partnerships
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Each division is structured to support homeowners, corporate clients, landowners, investors, and institutional partners across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.number}
                  className="rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Supporting Service Imagery */}
                    <div className="relative w-full aspect-[16/10] bg-stone-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#461313] shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#C0E8F9]">
                          Category {service.code} · {service.number}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#162521]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5">
                        {service.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-[#D64933] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => openBookingFor(service.title)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-4">
                      <a
                        href={`https://wa.me/2348032865488?text=${encodeURIComponent(
                          `Hello ChapelHill Multicompany Limited, I would like to inquire about your "${service.title}" services.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#128C7E] hover:text-[#461313] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <Link
                        href={`/services#${service.id}`}
                        className="text-xs font-semibold text-stone-600 hover:text-[#461313] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Full Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How We Work: 6-Step Delivery Framework */}
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D64933]">
              Disciplined Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162521] mt-2">
              Paving the Way to Real Estate Glory
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Our 6-step project delivery methodology ensures transparency, risk mitigation, and flawless handover from first handshake to post-occupation support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-2xs relative"
              >
                <span className="text-2xl font-serif font-extrabold text-[#461313]/30 block mb-3">
                  {step.step}.
                </span>
                <h3 className="text-base font-bold text-[#162521]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Headquarters & Contact Detail Card */}
        <section className="py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#461313] text-white relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#E5C583]">
                  Direct Engagement
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                  Partner with ChapelHill Multicompany Limited
                </h2>
                <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed">
                  Whether you are interested in property development and sales, construction and project management, property and facility management, or joint venture partnerships, our team is ready to assist.
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
                  onClick={() => openBookingFor('ChapelHill Multicompany Limited Consultation')}
                  className="w-full bg-[#E5C583] hover:bg-white text-[#461313] py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Schedule Private Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2348032865488?text=Hello%20ChapelHill%20Multicompany%20Limited%2C%20I%20am%20reaching%20out%20from%20the%20About%20Us%20page."
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
        onServicesClick={() => setInfoModal('services')}
        onAboutClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
        onContactClick={() => setBookingModalOpen(true)}
      />

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video sm:aspect-[4/3] max-h-52 sm:max-h-64 bg-stone-100 shrink-0">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-8 overflow-y-auto flex-1 overscroll-contain">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D64933]">
                {selectedMember.role}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162521] mt-1">
                {selectedMember.name}
              </h3>

              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {selectedMember.bio}
              </p>

              {selectedMember.qualifications && (
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Key Areas of Focus &amp; Credentials
                  </p>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedMember.qualifications.map((q, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember.phone && (
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div className="text-xs">
                    <p className="text-stone-500 font-medium">Direct Phone</p>
                    <a 
                      href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-[#461313] hover:text-[#D64933] transition-colors"
                    >
                      {selectedMember.phone}
                    </a>
                  </div>

                  <a
                    href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                    className="px-4 py-2 rounded-xl bg-[#461313] text-white text-xs font-semibold hover:bg-[#D64933] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Booking Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedInquiryTopic}
      />

      {/* Info Drawer */}
      <InfoDrawer
        isOpen={infoModal !== null}
        type={infoModal}
        onClose={() => setInfoModal(null)}
        onBookVisit={(topic) =>
          openBookingFor(topic || 'ChapelHill Multicompany Limited Consultation')
        }
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFAB />
    </div>
  );
}
