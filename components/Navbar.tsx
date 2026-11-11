'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  X,
  Calendar,
  MapPin,
  Mail,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onExploreClick?: () => void;
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onFAQClick?: () => void;
  activePage?: 'home' | 'about' | 'properties' | 'services' | 'faq' | 'projects';
}

interface NavItem {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  href: string;
  action?: () => void;
}

export default function Navbar({
  onContactClick,
  onExploreClick,
  onServicesClick,
  onAboutClick,
  onFAQClick,
  activePage = 'home',
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when overlay drawer is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Support Escape key to close the overlay drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems: NavItem[] = [
    {
      id: 'home',
      number: '01',
      label: 'Home',
      subtitle: 'Flagship architectural estates & luxury residences',
      href: '/',
      action: onExploreClick,
    },
    {
      id: 'about',
      number: '02',
      label: 'About Us',
      subtitle: 'Corporate legacy, engineering precision & leadership',
      href: '/about',
      action: onAboutClick,
    },
    {
      id: 'services',
      number: '03',
      label: 'Services',
      subtitle: 'Turnkey civil engineering, construction & title advisory',
      href: '/services',
      action: onServicesClick,
    },
    {
      id: 'projects',
      number: '04',
      label: 'Projects',
      subtitle: 'Ivy Heights Lekki, Ivy Homes Abijo & development pipeline',
      href: '/projects',
    },
    {
      id: 'faq',
      number: '05',
      label: 'FAQ & Advisory',
      subtitle: 'Title perfection, Governor’s Consent & allocation timelines',
      href: '/#frequently-asked-questions',
      action: onFAQClick,
    },
  ];

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);
    if (item.action && typeof window !== 'undefined') {
      // If we are already on the relevant target or have a direct modal/scroll handler
      item.action();
    }
  };

  const handleConsultationCTA = () => {
    setMenuOpen(false);
    onContactClick();
  };

  return (
    <>
      {/* Split-Layout Header Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#FEFCFD]/95 backdrop-blur-md border-b border-stone-200/60 shadow-xs transition-all">
        <div className="w-full max-w-7xl mx-auto py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12">
          <nav
            className="flex items-center justify-between gap-4"
            aria-label="Main Navigation"
          >
            {/* LEFT ANCHOR: Chapelhill Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 group transition-opacity hover:opacity-90 py-1"
                id="chapelhill-logo"
                aria-label="Chapelhill Home"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/Chapelhill-Company-Logo.png"
                  alt="Chapelhill"
                  width={238}
                  height={107}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                  priority
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            {/* CENTER: Quick-Action Contact Details */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 text-xs text-[#162521] font-medium">
              {/* WhatsApp Advisory Desk */}
              <a
                href="https://wa.me/2349039130207?text=Hello%20Chapelhill%2C%20I%20am%20inquiring%20about%20your%20luxury%20developments%20and%20private%20advisory%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/80 hover:bg-[#C0E8F9]/40 hover:text-[#461313] transition-all cursor-pointer group"
                id="nav-center-whatsapp"
                aria-label="WhatsApp Advisory Desk"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold text-[#461313]">WhatsApp Desk:</span>
                <span className="text-stone-700 group-hover:text-[#461313]">+234 903 913 0207</span>
              </a>

              {/* Direct Phone Line */}
              <a
                href="tel:+2348032865488"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-stone-100/80 transition-colors cursor-pointer text-stone-700 hover:text-[#461313]"
                id="nav-center-phone"
                aria-label="Call Chapelhill"
              >
                <Phone className="w-3.5 h-3.5 text-[#D64933]" />
                <span>+234 803 286 5488</span>
              </a>

              
            </div>

            {/* Mobile Compact Contact (Shown only on small screens) */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://wa.me/2349039130207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stone-100 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <button
                type="button"
                onClick={onContactClick}
                className="bg-[#461313] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                Consult
              </button>
            </div>

            {/* RIGHT: Minimalist Hamburger Menu Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop quick consultation trigger before hamburger */}
              <button
                type="button"
                onClick={onContactClick}
                id="nav-btn-book-consultation"
                className="hidden lg:inline-flex items-center gap-2 bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-xs cursor-pointer active:scale-95 touch-manipulation"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>

              {/* Minimalist Hamburger Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                id="navbar-hamburger-btn"
                aria-label="Open Full Navigation Menu"
                aria-expanded={menuOpen}
                className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-stone-100/90 hover:bg-[#162521] text-[#162521] hover:text-white border border-stone-200/80 hover:border-[#162521] transition-all duration-200 cursor-pointer active:scale-95 touch-manipulation min-h-[42px]"
              >
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase font-heading">
                  Menu
                </span>
                {/* Minimalist 2-line bespoke hamburger icon */}
                <div className="flex flex-col justify-center items-end gap-1.2 w-4 h-3.5">
                  <span className="w-4 h-[2px] bg-current rounded-full transition-transform group-hover:scale-x-90" />
                  <span className="w-2.5 h-[2px] bg-current rounded-full transition-transform group-hover:w-4" />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* FULL-SCREEN CINEMATIC OVERLAY DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="cinematic-menu-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0c1412] text-white flex flex-col justify-between overflow-y-auto overscroll-contain select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Cinematic Site Navigation"
          >
            {/* Dark Luxury Atmospheric Radial Glows & Grain Texture */}
            <div
              className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1d2d27] via-[#0f1714] to-[#080d0b]"
              aria-hidden="true"
            />
            {/* Top-Right Soft Burgundy Radial Ambient Glow */}
            <div
              className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#461313]/28 rounded-full blur-[140px] pointer-events-none -z-10"
              aria-hidden="true"
            />
            {/* Bottom-Left Soft Emerald/Gold Ambient Swell */}
            <div
              className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#E5C583]/10 rounded-full blur-[120px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* OVERLAY TOP BAR: Logo, Immediate CTA & Minimalist Close Button */}
            <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-between gap-4 border-b border-white/10 shrink-0">
              {/* White Logo Container */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 group transition-opacity hover:opacity-90 py-1"
                aria-label="Chapelhill Home"
              >
                <Image
                  src="/Chapelhill-Company-Logo.png"
                  alt="Chapelhill"
                  width={200}
                  height={90}
                  className="h-9 sm:h-11 w-auto object-contain brightness-0 invert opacity-95 transition-transform group-hover:scale-[1.02]"
                  priority
                  referrerPolicy="no-referrer"
                />
              </Link>

              {/* Actions Right: Immediate CTA Button + Minimalist Close Button */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Immediate 'Book Private Consultation' CTA Button */}
                <button
                  type="button"
                  onClick={handleConsultationCTA}
                  id="overlay-cta-book-consultation"
                  className="group bg-[#461313] hover:bg-[#D64933] active:scale-[0.98] text-white pl-4 sm:pl-5 pr-2.5 sm:pr-3 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2.5 transition-all duration-200 shadow-[0_4px_20px_rgba(70,19,19,0.5)] hover:shadow-[0_6px_28px_rgba(214,73,51,0.6)] cursor-pointer touch-manipulation min-h-[42px]"
                >
                  <span>Book Private Consultation</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </button>

                {/* Minimalist Close Trigger */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  id="overlay-close-btn"
                  aria-label="Close navigation overlay"
                  className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#162521] border border-white/15 transition-all duration-200 cursor-pointer active:scale-95 touch-manipulation min-h-[42px]"
                >
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase font-heading">
                    Close
                  </span>
                  <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-200" />
                </button>
              </div>
            </div>

            {/* OVERLAY MAIN CONTENT: Staggered Large Typography Links */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 my-auto flex-1 flex flex-col justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="space-y-3 sm:space-y-4 max-w-5xl"
              >
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, y: 36 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className="group border-b border-white/10 pb-3 sm:pb-4 transition-colors"
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item)}
                        className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-1 cursor-pointer"
                        id={`overlay-nav-${item.id}`}
                      >
                        <div className="flex items-baseline gap-3 sm:gap-6">
                          {/* Number Index */}
                          <span className="text-xs sm:text-sm font-mono text-[#E5C583] tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                            {item.number}
                          </span>
                          {/* Large Typography Link */}
                          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white group-hover:text-[#D64933] transition-colors leading-none">
                            {item.label}
                          </h2>
                          {isActive && (
                            <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-[#D64933] ml-2" />
                          )}
                        </div>

                        {/* Right Descriptor & Arrow on Hover */}
                        <div className="flex items-center gap-3 text-stone-400 group-hover:text-white transition-colors pl-7 sm:pl-0">
                          <p className="text-xs sm:text-sm font-normal text-stone-400 group-hover:text-stone-200 transition-colors hidden md:block">
                            {item.subtitle}
                          </p>
                          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#D64933] text-stone-400 group-hover:text-white flex items-center justify-center transition-all duration-200">
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* OVERLAY FOOTER: Quick Access Contact Columns & Security Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 border-t border-white/10 shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-stone-400"
            >
              {/* Column 1: WhatsApp Advisory */}
              <div className="space-y-1">
                <p className="text-stone-300 font-semibold uppercase tracking-wider text-[10px]">
                  Private Client WhatsApp
                </p>
                <a
                  href="https://wa.me/2349039130207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E5C583] transition-colors font-medium flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>+234 903 913 0207</span>
                </a>
              </div>

              {/* Column 2: Direct Inquiries */}
              <div className="space-y-1">
                <p className="text-stone-300 font-semibold uppercase tracking-wider text-[10px]">
                  Direct Executive Desk
                </p>
                <a
                  href="tel:+2348032865488"
                  className="text-white hover:text-[#E5C583] transition-colors font-medium flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D64933]" />
                  <span>+234 803 286 5488</span>
                </a>
              </div>

              {/* Column 3: Corporate Email */}
              <div className="space-y-1">
                <p className="text-stone-300 font-semibold uppercase tracking-wider text-[10px]">
                  Official Email
                </p>
                <a
                  href="mailto:info@chapelhillmulticompany.com"
                  className="text-white hover:text-[#E5C583] transition-colors font-medium flex items-center gap-1.5 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E5C583]" />
                  <span>info@chapelhillmulticompany.com</span>
                </a>
              </div>

              {/* Column 4: Verified Title Guarantee */}
              <div className="space-y-1">
                <p className="text-stone-300 font-semibold uppercase tracking-wider text-[10px]">
                  Title Security Guarantee
                </p>
                <p className="text-stone-400 text-[11px] leading-tight flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D64933] shrink-0" />
                  100% verified Governor’s Consent & C of O
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
