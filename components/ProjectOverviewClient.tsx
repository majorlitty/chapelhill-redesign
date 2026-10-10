'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  X,
  BedDouble,
  Bath,
  Car,
  Home,
  Calendar,
  Phone,
  MessageCircle,
  Eye,
  Maximize2,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Property, getAllProperties } from '@/lib/propertiesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface ProjectOverviewClientProps {
  project: Property;
}

export default function ProjectOverviewClient({ project }: ProjectOverviewClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const touchStartXRef = React.useRef<number | null>(null);

  // Available categories in this project's gallery
  const categories = [
    { id: 'all', label: `All Photos (${project.gallery.length})` },
    { id: 'exterior', label: 'Exterior & Architecture' },
    { id: 'living', label: 'Living & Dining' },
    { id: 'kitchen', label: 'Fitted Kitchen' },
    { id: 'bedroom', label: 'Bedroom Suites' },
    { id: 'amenity', label: 'Baths & Amenities' },
    { id: 'interior', label: 'Interiors & Foyers' },
  ].filter(
    (cat) =>
      cat.id === 'all' ||
      project.gallery.some((img) => img.category === cat.id)
  );

  const filteredImages =
    activeCategory === 'all'
      ? project.gallery
      : project.gallery.filter((img) => img.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % project.gallery.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + project.gallery.length) % project.gallery.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  // Other projects for exploration
  const otherProjects = getAllProperties().filter((p) => p.id !== project.id);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      } catch {
        // ignore
      }
    }
  };

  const whatsappInquiryUrl = `https://wa.me/2348035222045?text=${encodeURIComponent(
    `Hello Chapelhill, I am interested in viewing ${project.name} in Royal Gardens Estate, Lekki-Ajah.`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activePage="projects"
        onContactClick={() => setBookingModalOpen(true)}
        onExploreClick={() => {
          window.location.href = '/projects';
        }}
        onServicesClick={() => {
          window.location.href = '/services';
        }}
        onAboutClick={() => {
          window.location.href = '/about';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-24 sm:pb-20">
        {/* Breadcrumb Navigation & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 mb-6 text-xs text-stone-500 border-b border-stone-200/70">
          <nav className="flex items-center gap-1.5 sm:gap-2 flex-wrap" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="hover:text-[#461313] transition-colors font-medium flex items-center gap-1 py-1"
            >
              Home
            </Link>
            <span>/</span>
            <Link 
              href="/projects" 
              className="hover:text-[#461313] transition-colors font-medium py-1"
            >
              Our Projects
            </Link>
            <span>/</span>
            <span className="text-[#162521] font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </nav>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors group cursor-pointer py-1"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* HERO / PROJECT HEADER */}
        <header className="mb-10 sm:mb-12">
          {/* Badge & Meta strip */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-600 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-800 border border-emerald-600/20 font-bold uppercase tracking-wider text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              {project.statusLabel}
            </span>

            <span aria-hidden="true" className="text-stone-300">·</span>

            <span className="flex items-center gap-1 text-stone-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
              <span>{project.location}</span>
            </span>

            <span aria-hidden="true" className="text-stone-300">·</span>

            <span className="text-stone-500 font-mono text-[11px]">
              {project.totalUnits}
            </span>
          </div>

          {/* Title & Actions Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#162521] tracking-tight font-serif leading-tight">
                {project.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 font-medium max-w-3xl">
                {project.tagline}
              </p>
            </div>

            {/* Quick Actions (Inspection & Share) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleShare}
                  className="flex-1 sm:flex-initial px-4 py-3 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs min-h-[44px]"
                  title="Copy project link"
                >
                  <Share2 className="w-4 h-4 text-stone-500" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#461313] hover:bg-[#D64933] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Private Viewing</span>
              </button>
            </div>
          </div>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mt-6 sm:mt-8">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-[#D64933]" />
                Bedrooms
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#162521] mt-1 block">
                5 Ensuite
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-[#D64933]" />
                Bathrooms
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#162521] mt-1 block">
                5.5 Baths
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-[#D64933]" />
                Staff BQ
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#162521] mt-1 block truncate">
                1 Ensuite BQ
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-[#D64933]" />
                Parking Space
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#162521] mt-1 block truncate">
                4 – 6 Cars
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Community
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#162521] mt-1 block truncate">
                Royal Gardens
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D64933]" />
                Handover
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-emerald-700 mt-1 block truncate">
                Immediate
              </span>
            </div>
          </div>
        </header>

        {/* SECTION 1: BRIEF & SIMPLE PROJECT OVERVIEW */}
        <section className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Overview Summary & Narrative */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D64933] mb-2">
                <Building2 className="w-4 h-4" />
                <span>Project Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight mb-4">
                Refined Luxury Living in Royal Gardens, Lekki-Ajah
              </h2>
              <div className="space-y-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {project.description}
                </p>
                <p>
                  Built and delivered to the exacting standards of Chapelhill Multicompany International, this completed 5-bedroom residence brings together generous family proportions, high-spec modern finishes, and serene privacy within one of the Lekki-Ajah corridor’s most prestigious master-planned communities.
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="mt-6 pt-6 border-t border-stone-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3.5">
                  Distinguished Features &amp; Finishes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D64933] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Turnkey Highlights Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Estate & Community Card */}
              <div className="bg-[#162521] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D64933]/15 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C583] block mb-1">
                  Prime Gated Community
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  Royal Gardens Estate, Lekki-Ajah
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                  Royal Gardens is celebrated for its lush greenery, wide tree-lined paved boulevards, underground drainage, 24/7 security with motorized patrols, and round-the-clock estate management.
                </p>

                <div className="space-y-2.5 text-xs text-stone-300 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Title Document:</span>
                    <span className="font-semibold text-white">Governor’s Consent / Deed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Plot Footprint:</span>
                    <span className="font-semibold text-white">{project.landSize || '600 sqm Site'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Power Supply:</span>
                    <span className="font-semibold text-white">Solar / Generator Integrated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Water Source:</span>
                    <span className="font-semibold text-white">Treated Industrial Borehole</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA Card */}
              <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Turnkey Handover
                  </span>
                  <h4 className="text-base font-bold text-[#162521]">
                    Ready for Immediate Physical Move-In
                  </h4>
                  <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                    Keys are ready for inspection and immediate allocation. Connect with our dedicated property advisory team to arrange a private walkthrough.
                  </p>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#461313] hover:bg-[#D64933] text-white text-xs font-bold text-center transition-colors cursor-pointer"
                  >
                    Schedule Private Inspection
                  </button>

                  <a
                    href="tel:+2348035222045"
                    className="py-3 px-4 rounded-xl border border-stone-200 hover:border-[#461313] text-[#162521] text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-600" />
                    <span>Call Team</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HIGH-RESOLUTION GALLERY */}
        <section className="mb-16 sm:mb-20" aria-label="Project Photo Gallery">
          {/* Gallery Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-stone-200/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
                Completed Project Gallery
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-[#162521] tracking-tight">
                Explore Photographs from this Development
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Click any photograph to view high-resolution details in full-screen gallery mode.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#461313] text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => {
              // Find index in master gallery for lightbox
              const masterIndex = project.gallery.findIndex((img) => img.url === image.url);

              return (
                <article
                  key={index}
                  onClick={() => setLightboxIndex(masterIndex >= 0 ? masterIndex : index)}
                  className="group relative bg-stone-100 rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer border border-stone-200/80 hover:shadow-xl hover:border-stone-400 transition-all duration-300"
                >
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>

                  {/* Top Zoom Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug drop-shadow-sm">
                      {image.caption}
                    </p>
                    <span className="text-[10px] text-stone-300 mt-1 inline-flex items-center gap-1 font-mono">
                      <Eye className="w-3 h-3" />
                      <span>View Fullscreen</span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: OTHER COMPLETED & ONGOING PROJECTS */}
        <section className="pt-10 border-t border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D64933] block mb-1">
                More Chapelhill Developments
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight">
                Explore Other Projects in Our Portfolio
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-xs font-bold text-[#461313] hover:text-[#D64933] inline-flex items-center gap-1 transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.slug}`}
                className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <Image
                      src={item.heroImage}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md">
                        {item.status === 'completed' ? 'Completed' : item.status === 'ongoing' ? 'Ongoing' : 'Sold Out'}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] text-stone-500 font-semibold flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-[#D64933]" />
                      <span className="truncate">{item.location.split(',')[0]}</span>
                    </span>
                    <h3 className="text-base font-bold text-[#162521] group-hover:text-[#461313] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#461313]">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && project.gallery[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div 
              className="flex items-center justify-between text-white max-w-7xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <p className="text-xs sm:text-sm font-semibold truncate max-w-[240px] sm:max-w-md">
                  {project.name}
                </p>
                <p className="text-[11px] text-stone-400 font-mono">
                  Photograph {lightboxIndex + 1} of {project.gallery.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Stage with Mobile Swipe Gesture Support */}
            <div 
              className="relative flex-1 w-full max-w-6xl mx-auto my-3 flex items-center justify-center overflow-hidden touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartXRef.current === null) return;
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartXRef.current - touchEndX;
                if (diff > 45) {
                  setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
                } else if (diff < -45) {
                  setLightboxIndex(
                    (lightboxIndex - 1 + project.gallery.length) % project.gallery.length
                  );
                }
                touchStartXRef.current = null;
              }}
            >
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={project.gallery[lightboxIndex].url}
                  alt={project.gallery[lightboxIndex].caption}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + project.gallery.length) % project.gallery.length
                  );
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Thumbnails */}
            <div 
              className="max-w-4xl w-full mx-auto text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm font-medium text-stone-200 mb-3 px-4 line-clamp-2">
                {project.gallery[lightboxIndex].caption}
              </p>

              {/* Thumbnail strip */}
              <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
                {project.gallery.map((thumb, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => setLightboxIndex(tIdx)}
                    className={`relative w-12 h-9 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      tIdx === lightboxIndex
                        ? 'border-white scale-105 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={thumb.url}
                      alt={thumb.caption}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking / Inspection Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={project.name}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFAB
        defaultMessage={`Hello Chapelhill, I would like to schedule a private inspection or inquire about ${project.name} in Royal Gardens Estate.`}
      />

      {/* Footer */}
      <Footer
        onExploreClick={() => {
          window.location.href = '/projects';
        }}
        onServicesClick={() => {
          window.location.href = '/services';
        }}
        onAboutClick={() => {
          window.location.href = '/about';
        }}
        onFAQClick={() => {
          window.location.href = '/#frequently-asked-questions';
        }}
        onContactClick={() => setBookingModalOpen(true)}
      />
    </div>
  );
}
