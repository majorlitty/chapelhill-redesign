'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Calendar, 
  Sparkles,
  Phone,
  MessageCircle,
  Eye,
  SlidersHorizontal,
  Home,
  Clock
} from 'lucide-react';
import { Property, getAllProperties } from '@/lib/propertiesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface ProjectDisplayItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  cityState: string;
  fullLocation: string;
  status: 'completed' | 'ongoing' | 'sold-out';
  statusLabel: string;
  heroImage: string;
  startingPrice: string;
  priceRange: string;
  totalUnits: string;
  description: string;
  highlights: string[];
}

export default function ProjectsPageClient() {
  const allProperties = getAllProperties();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'completed' | 'ongoing' | 'sold-out'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedProjectForBooking, setSelectedProjectForBooking] = useState<string>('Ivy Homes Abijo GRA');

  // Format properties with clear City, State
  const projects: ProjectDisplayItem[] = useMemo(() => {
    return allProperties.map((p) => {
      let cityState = 'Lagos State';
      if (p.id === 'ivy-homes-abijo') {
        cityState = 'Lekki, Lagos State';
      } else if (p.id === 'lekki-phase-1-project') {
        cityState = 'Lekki Phase 1, Lagos State';
      } else if (p.id === 'ogudu-gra-project') {
        cityState = 'Ogudu GRA, Lagos State';
      } else if (p.id.includes('royal-garden') || p.location.includes('Royal')) {
        cityState = 'Royal Gardens, Lekki-Ajah';
      }

      return {
        id: p.id,
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        cityState,
        fullLocation: p.location,
        status: p.status,
        statusLabel: p.statusLabel,
        heroImage: p.heroImage,
        startingPrice: p.financials.startingPrice,
        priceRange: p.financials.priceRange,
        totalUnits: p.totalUnits,
        description: p.description,
        highlights: p.keyHighlights.slice(0, 3),
      };
    });
  }, [allProperties]);

  // Filter and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = selectedFilter === 'all' || project.status === selectedFilter;
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.cityState.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.fullLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  // Status counts
  const counts = useMemo(() => {
    return {
      all: projects.length,
      completed: projects.filter((p) => p.status === 'completed').length,
      ongoing: projects.filter((p) => p.status === 'ongoing').length,
      soldOut: projects.filter((p) => p.status === 'sold-out').length,
    };
  }, [projects]);

  const handleOpenBooking = (projectName: string) => {
    setSelectedProjectForBooking(projectName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFCFD] via-[#FEFCFD] to-[#f7f3f5] text-[#162521] flex flex-col justify-between selection:bg-[#461313] selection:text-white">
      {/* Top Navbar with active indicator on projects */}
      <Navbar
        activePage="projects"
        onContactClick={() => handleOpenBooking('General Development Inquiry')}
        onExploreClick={() => {
          window.scrollTo({ top: 300, behavior: 'smooth' });
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

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 py-3 mb-6 border-b border-stone-200/60">
          <Link href="/" className="hover:text-[#461313] transition-colors font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#162521] font-semibold">Our Projects</span>
        </div>

        {/* Header Section */}
        <header className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-stone-200/80">
          {/* Ambient decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#C0E8F9]/30 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#D64933]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#162521]">
                Portfolio &amp; Developments
              </span>
            </div>

            {/* Clear Heading required by user */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#162521] tracking-[-0.03em] leading-[1.15]">
              Our Projects
            </h1>

            {/* Brief Subheading explaining completed & ongoing developments */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#162521]/80 max-w-2xl mx-auto font-normal leading-relaxed">
              Explore our portfolio of completed and ongoing residential and commercial developments crafted with precision, enduring quality, and architectural excellence across prime Lagos corridors.
            </p>

            {/* Filter and Search Bar Controls */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              {/* Segmented Filter Buttons */}
              <div 
                className="flex items-center gap-1 p-1 bg-stone-100/90 rounded-2xl border border-stone-200/80 w-full sm:w-auto overflow-x-auto scrollbar-none"
                role="tablist"
                aria-label="Filter projects by phase"
              >
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedFilter === 'all'
                      ? 'bg-white text-[#461313] shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                  role="tab"
                  aria-selected={selectedFilter === 'all'}
                >
                  All Projects ({counts.all})
                </button>
                <button
                  onClick={() => setSelectedFilter('completed')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedFilter === 'completed'
                      ? 'bg-white text-[#461313] shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                  role="tab"
                  aria-selected={selectedFilter === 'completed'}
                >
                  Completed ({counts.completed})
                </button>
                <button
                  onClick={() => setSelectedFilter('ongoing')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedFilter === 'ongoing'
                      ? 'bg-white text-[#461313] shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                  role="tab"
                  aria-selected={selectedFilter === 'ongoing'}
                >
                  Ongoing ({counts.ongoing})
                </button>
                <button
                  onClick={() => setSelectedFilter('sold-out')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedFilter === 'sold-out'
                      ? 'bg-white text-[#461313] shadow-sm'
                      : 'text-stone-600 hover:text-[#162521]'
                  }`}
                  role="tab"
                  aria-selected={selectedFilter === 'sold-out'}
                >
                  Sold Out ({counts.soldOut})
                </button>
              </div>

              {/* Quick Search Input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter by city, area or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-stone-200 focus:border-[#461313] focus:outline-none rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-[#162521] placeholder:text-stone-400 transition-colors shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Clean Unboxed Key Performance Indicators (Zero-Pill Discipline) */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-200/60 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#461313] font-serif">100%</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Verified C of O / Governor’s Consent</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#461313] font-serif">Turnkey</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Fitted Contemporary Standard</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#461313] font-serif">24/7</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Solar-Backed Estate Power</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#461313] font-serif">Lagos</p>
              <p className="mt-1 text-xs text-stone-500 font-medium">Lekki &amp; Mainland High-Yield Zones</p>
            </div>
          </div>
        </header>

        {/* Project List / Grid Section */}
        <section className="py-12 sm:py-16">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-stone-200 p-8">
              <Building2 className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#162521]">No projects found matching your criteria</h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-2 max-w-md mx-auto">
                Try adjusting your search query or reset the filter to view all completed and ongoing developments.
              </p>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="mt-6 px-5 py-2.5 rounded-xl bg-[#461313] text-white text-xs font-semibold hover:bg-[#D64933] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const isCompleted = project.status === 'completed';
                const isOngoing = project.status === 'ongoing';
                const isSoldOut = project.status === 'sold-out';

                return (
                  <article
                    key={project.id}
                    className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* 1. Project Image / Preview Thumbnail with Smooth Hover Zoom */}
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="block relative w-full aspect-[16/10] bg-stone-100 overflow-hidden cursor-pointer"
                        aria-label={`View ${project.name} details`}
                      >
                        <Image
                          src={project.heroImage}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Top Status & Phase Strip */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                          <span className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-xs ${
                            isCompleted 
                              ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/30'
                              : isOngoing
                              ? 'bg-amber-950/80 text-amber-200 border border-amber-500/30'
                              : 'bg-rose-950/80 text-rose-200 border border-rose-500/30'
                          }`}>
                            {isCompleted ? 'Completed' : isOngoing ? 'Ongoing · Off-Plan' : 'Sold Out'}
                          </span>

                          <span className="text-[11px] font-mono font-medium text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {project.totalUnits.split('•')[0].trim()}
                          </span>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
                          <span className="text-white/90 truncate">
                            {project.tagline.split('•')[0].trim()}
                          </span>
                          <span className="shrink-0 text-[#C0E8F9] font-mono text-[11px]">
                            {project.startingPrice}
                          </span>
                        </div>
                      </Link>

                      {/* Card Body */}
                      <div className="p-6">
                        {/* 2. Location (City, State) required by user */}
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-semibold mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                          <span className="text-stone-700">{project.cityState}</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <span className="text-stone-400 truncate max-w-[150px]">{project.fullLocation.split(',')[0]}</span>
                        </div>

                        {/* 3. Project Title required by user */}
                        <h2 className="text-xl sm:text-2xl font-bold text-[#162521] group-hover:text-[#461313] transition-colors leading-snug">
                          <Link href={`/projects/${project.slug}`}>
                            {project.name}
                          </Link>
                        </h2>

                        {/* Short Excerpt */}
                        <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Key Highlights Snippet */}
                        <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5">
                          {project.highlights.map((hl, hlIdx) => (
                            <div key={hlIdx} className="flex items-start gap-2 text-xs text-stone-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D64933] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: 4. Clear "Project Details" / "View Project" link/button */}
                    <div className="p-6 pt-0 flex items-center gap-2.5">
                      <Link
                        href={`/projects/${project.slug}`}
                        id={`view-project-${project.slug}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#461313] hover:bg-[#D64933] text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={() => handleOpenBooking(project.name)}
                        className="py-3 px-3.5 rounded-xl border border-stone-200 hover:border-[#461313] hover:bg-stone-50 text-[#162521] text-xs font-semibold transition-colors flex items-center justify-center cursor-pointer shrink-0"
                        title={`Inquire or schedule viewing for ${project.name}`}
                      >
                        <Calendar className="w-4 h-4 text-stone-600" />
                        <span className="sr-only">Schedule Inspection</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Development Advisory & Off-Market Portfolio Banner */}
        <section className="py-12 sm:py-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#162521] text-white relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#E5C583]">
                  Off-Market &amp; Bespoke Commissions
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                  Looking for Upcoming Sites or Off-Market Acquisitions?
                </h3>
                <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
                  In addition to our flagship residential developments, Chapelhill Multicompany International advises institutional investors, diaspora buyers, and private syndicates on strategic land banking and customized turnkey civil construction across Lagos.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E5C583]" />
                    <span>Governor’s Consent Due Diligence</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E5C583]" />
                    <span>Flexible Stage-Based Milestone Plans</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E5C583]" />
                    <span>Dedicated Diaspora Advisory Desk</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => handleOpenBooking('Private Investor Portfolio Advisory')}
                  className="w-full bg-[#E5C583] hover:bg-white text-[#461313] py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2349039130207?text=Hello%20Chapelhill%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20completed%20and%20ongoing%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-2xl font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Advisory (+234 903 913 0207)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onExploreClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
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
        onContactClick={() => handleOpenBooking('General Development Inquiry')}
      />

      {/* Booking Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultProperty={selectedProjectForBooking}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFAB defaultMessage="Hello Chapelhill, I am viewing the Our Projects portfolio page and would like to inquire about availability and scheduling an inspection." />
    </div>
  );
}
