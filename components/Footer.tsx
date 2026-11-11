'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Globe2, 
  ArrowRight,
  MessageCircle,
  Clock
} from 'lucide-react';

interface FooterProps {
  onExploreClick?: () => void;
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onFAQClick?: () => void;
  onContactClick?: () => void;
}

export default function Footer({
  onExploreClick,
  onServicesClick,
  onAboutClick,
  onFAQClick,
  onContactClick,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer" 
      aria-label="Chapelhill Corporate Directory and Advisory Footer"
      className="w-full bg-[#121212] text-stone-300 relative z-20 overflow-hidden font-sans border-t border-[#E5C583]/20"
    >
      {/* Subtle warm gold ambient radiance */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-b from-[#E5C583]/[0.07] via-[#E5C583]/[0.02] to-transparent pointer-events-none -z-10 blur-3xl" 
        aria-hidden="true" 
      />

      {/* Top subtle warm gold accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E5C583]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        {/* Main 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 xl:gap-12">
          
          {/* ================= COLUMN 1: High-Res Emblem & Brand Manifesto ================= */}
          <div className="flex flex-col text-left">
            {/* High-Res Chapelhill Emblem */}
            <Link 
              href="/" 
              className="inline-flex items-center self-start bg-white/95 hover:bg-white rounded-2xl px-4 py-2.5 border border-[#E5C583]/30 shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.02] mb-5 group"
              aria-label="Chapelhill Multicompany International Home"
            >
              <Image
                src="/Chapelhill-Company-Logo.png"
                alt="Chapelhill Multicompany International"
                width={240}
                height={110}
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                priority={false}
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Premium Brand Manifesto Statement */}
            <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal">
              Institutional-grade architectural excellence, bespoke turnkey civil engineering, and vetted high-yield prime developments. Engineered to create enduring generational legacy across Lagos, Nigeria, and key global diaspora gateways.
            </p>

            {/* Corporate Accreditations & Trust Metrics */}
            <div className="space-y-2 text-[11px] text-stone-400 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]" />
                <span className="text-white font-semibold">RC Number: 1849204</span>
                <span className="text-stone-600">•</span>
                <span className="text-stone-400">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C583] shrink-0" />
                <span>Governor&apos;s Consent & Verified Title Records</span>
              </div>
            </div>

            {/* Quick Action Consultation Button */}
            <div className="mt-auto pt-2">
              <button
                type="button"
                onClick={onContactClick}
                id="footer-col1-consultation-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FEFCFD] text-[#121212] hover:text-[#461313] font-bold text-xs shadow-[0_4px_20px_rgba(255,255,255,0.12)] border border-[#E5C583]/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>Book Private Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#461313]" />
              </button>
            </div>
          </div>

          {/* ================= COLUMN 2: Our Projects (Hover-Reveal Animations) ================= */}
          <div className="flex flex-col text-left">
            {/* Column Header with Subtle Gold Accent Bar */}
            <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-[#E5C583]/20">
              <span className="h-3.5 w-[2px] bg-gradient-to-b from-[#E5C583] to-[#E5C583]/40 rounded-full" />
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#E5C583]" />
                <h3 className="text-white font-bold uppercase tracking-[0.14em] text-xs font-heading">
                  Our Projects
                </h3>
              </div>
            </div>

            {/* Projects List with Clean Hover-Reveal Animations */}
            <ul className="space-y-1.5">
              {/* Project 1 */}
              <li>
                <Link
                  href="/properties/lekki-phase-1-project"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Ivy Heights (Lekki Phase 1)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400/90 bg-sky-950/60 border border-sky-500/30 px-1.5 py-0.5 rounded opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                      Ongoing
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Multi-floor luxury residences & commercial units
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Project 2 */}
              <li>
                <Link
                  href="/properties/ivy-homes-abijo"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Ivy Homes, Abijo GRA
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                      Completed
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Gated luxury flats & duplexes in prime corridor
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Project 3 */}
              <li>
                <Link
                  href="/properties/ogudu-gra-project"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Ogudu GRA Penthouses
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-rose-400/90 bg-rose-950/60 border border-rose-500/30 px-1.5 py-0.5 rounded opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                      Sold Out
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      High-yield sold out architectural milestone
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Project 4 */}
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="w-full text-left group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Bespoke Civil Commissions
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#E5C583] bg-[#E5C583]/10 border border-[#E5C583]/30 px-1.5 py-0.5 rounded opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                      Private
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Turnkey construction on client-owned plots
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </button>
              </li>
            </ul>

            {/* Explore All Projects Link */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <Link
                href="/projects"
                className="group flex items-center justify-between text-xs font-semibold text-[#E5C583] hover:text-white transition-colors"
              >
                <span>Explore All Projects & Masterplans</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#E5C583]" />
              </Link>
            </div>
          </div>

          {/* ================= COLUMN 3: Advisory & Services (Hover-Reveal Animations) ================= */}
          <div className="flex flex-col text-left">
            {/* Column Header with Subtle Gold Accent Bar */}
            <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-[#E5C583]/20">
              <span className="h-3.5 w-[2px] bg-gradient-to-b from-[#E5C583] to-[#E5C583]/40 rounded-full" />
              <div className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#E5C583]" />
                <h3 className="text-white font-bold uppercase tracking-[0.14em] text-xs font-heading">
                  Advisory & Services
                </h3>
              </div>
            </div>

            {/* Services List with Clean Hover-Reveal Animations */}
            <ul className="space-y-1.5">
              {/* Service 1 */}
              <li>
                <Link
                  href="/services#development"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Turnkey Civil Construction
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Structural foundations, engineering & turnkey delivery
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Service 2 */}
              <li>
                <Link
                  href="/services#development"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Off-Plan Property Development
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Flexible 8-month installment milestone plans
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Service 3 */}
              <li>
                <Link
                  href="/services#remodeling"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Remodeling & Interior Architecture
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Acoustic finishing, partition walls & fit-outs
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>

              {/* Service 4 */}
              <li>
                <Link
                  href="/services#project-management"
                  className="group relative block p-2.5 -mx-2.5 rounded-xl border border-transparent hover:border-[#E5C583]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C583]/50 group-hover:bg-[#E5C583] group-hover:scale-125 transition-all duration-300 shrink-0" />
                      <span className="text-stone-300 group-hover:text-white font-medium text-xs sm:text-[13px] transition-colors duration-200">
                        Diaspora Project Supervision
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1 pl-3.5">
                    <p className="text-[11px] text-stone-500 group-hover:text-stone-400 transition-colors line-clamp-1">
                      Drone site audits, milestone verification & escrow
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C583] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </div>
                </Link>
              </li>
            </ul>

            {/* View All Services Link */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <Link
                href="/services"
                className="group flex items-center justify-between text-xs font-semibold text-[#E5C583] hover:text-white transition-colors"
              >
                <span>View All Services & Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#E5C583]" />
              </Link>
            </div>
          </div>

          {/* ================= COLUMN 4: Corporate Office & Direct Advisory Links ================= */}
          <div className="flex flex-col text-left space-y-4">
            {/* Column Header with Subtle Gold Accent Bar */}
            <div className="flex items-center gap-2.5 mb-1 pb-2 border-b border-[#E5C583]/20">
              <span className="h-3.5 w-[2px] bg-gradient-to-b from-[#E5C583] to-[#E5C583]/40 rounded-full" />
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5C583]" />
                <h3 className="text-white font-bold uppercase tracking-[0.14em] text-xs font-heading">
                  Corporate & Advisory
                </h3>
              </div>
            </div>

            {/* Principal Corporate Office Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-[#E5C583]/20 hover:border-[#E5C583]/40 transition-all duration-300">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E5C583]/10 border border-[#E5C583]/25 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C583]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-tight">Principal Corporate Office</p>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction, Lekki, Lagos State, Nigeria
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-stone-400 font-medium">
                    <Clock className="w-3 h-3 text-[#E5C583]" />
                    <span>Mon – Sat: 8:00 AM – 6:00 PM (WAT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Advisory Button with Polished State */}
            <a
              href="https://wa.me/2349039130207?text=Hello%20Chapelhill%2C%20I%20am%20inquiring%20about%20your%20luxury%20estates%20and%20civil%20engineering%20advisory."
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-direct-btn"
              className="group flex items-center justify-between p-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/35 hover:border-[#25D366] transition-all duration-300 shadow-sm active:scale-[0.99] touch-manipulation cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-xs group-hover:text-[#25D366] transition-colors">
                      Direct WhatsApp Desk
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-300 font-medium leading-tight">
                    Instant brochures, floorplans & title deeds
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#25D366] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
            </a>

            {/* Direct Phone & Email Advisory Lines with Polished States */}
            <div className="space-y-1.5 pt-0.5">
              <a
                href="tel:+2349039130207"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#E5C583]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#E5C583]/10 flex items-center justify-center text-[#E5C583] group-hover:bg-[#E5C583]/20 transition-colors">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-stone-400 leading-none">Senior Client Director</p>
                    <p className="text-white font-semibold text-xs mt-1 leading-none group-hover:text-[#E5C583] transition-colors">
                      (+234) 903 913 0207
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#E5C583] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="tel:+2348032865488"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#E5C583]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#E5C583]/10 flex items-center justify-center text-[#E5C583] group-hover:bg-[#E5C583]/20 transition-colors">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-stone-400 leading-none">Corporate Liaison Desk</p>
                    <p className="text-white font-semibold text-xs mt-1 leading-none group-hover:text-[#E5C583] transition-colors">
                      (+234) 803 286 5488
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#E5C583] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:chapelhillmulticompanyltd@gmail.com"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#E5C583]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 truncate max-w-[85%]">
                  <div className="w-6 h-6 rounded-lg bg-[#E5C583]/10 flex items-center justify-center text-[#E5C583] group-hover:bg-[#E5C583]/20 transition-colors shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <div className="text-left truncate">
                    <p className="text-[10px] text-stone-400 leading-none">Institutional Dispatch</p>
                    <p className="text-white font-semibold text-xs mt-1 leading-none group-hover:text-[#E5C583] transition-colors truncate">
                      chapelhillmulticompanyltd@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#E5C583] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider subtle warm gold accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E5C583]/25 to-transparent my-10 sm:my-14" />

        {/* Bottom Attribution & Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="font-semibold text-white tracking-wide">CHAPELHILL REAL ESTATE INC.</span>
            <span className="text-[#E5C583]">•</span>
            <span className="text-stone-300">RC: 1849204</span>
            <span className="text-[#E5C583]">•</span>
            <span className="text-stone-400">Equal Housing Opportunity</span>
            <span className="text-[#E5C583]">•</span>
            <span className="text-stone-400">LASRERA Compliant</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-400">
            <Link href="/about" className="hover:text-[#E5C583] transition-colors">
              About Firm
            </Link>
            <span>•</span>
            <button 
              type="button"
              onClick={onFAQClick} 
              className="hover:text-[#E5C583] transition-colors cursor-pointer"
            >
              Due Diligence FAQ
            </button>
            <span>•</span>
            <button 
              type="button"
              onClick={onContactClick} 
              className="hover:text-[#E5C583] transition-colors cursor-pointer"
            >
              Legal Disclaimers
            </button>
            <span>•</span>
            <span className="text-stone-300">© {currentYear} Chapelhill. All rights reserved.</span>
          </div>
        </div>

        {/* Statutory Regulatory Notice */}
        <p className="mt-4 text-[10px] text-stone-400 leading-relaxed text-center sm:text-left">
          Notice: Architectural representations, 3D renderings, and milestone projections are for illustrative and artistic purposes and are subject to architectural modifications and statutory approvals. Official land titles, survey coordinates, and Governor&apos;s Consent records are verified under official Lagos State Lands Bureau parameters.
        </p>
      </div>
    </footer>
  );
}
