'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Home, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onExploreClick?: () => void;
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onFAQClick?: () => void;
  activePage?: 'home' | 'about' | 'properties' | 'services' | 'faq' | 'projects';
}

export default function Navbar({
  onContactClick,
  onExploreClick,
  onServicesClick,
  onAboutClick,
  onFAQClick,
  activePage,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FEFCFD]/95 backdrop-blur-md border-b border-stone-200/60 shadow-xs transition-all">
      <div className="w-full max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 py-1"
          id="chapelhill-logo"
          aria-label="Chapelhill Home"
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            href="/projects"
            id="nav-link-projects"
            className={`text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors py-1 ${
              activePage === 'properties' || activePage === 'projects'
                ? 'text-[#D64933] border-b-2 border-[#D64933]'
                : 'text-[#162521] hover:text-[#D64933]'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/services"
            id="nav-link-services"
            onClick={(e) => {
              if (onServicesClick && typeof window !== 'undefined' && window.location.pathname === '/services') {
                e.preventDefault();
                onServicesClick();
              }
            }}
            className={`text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors py-1 ${
              activePage === 'services'
                ? 'text-[#D64933] border-b-2 border-[#D64933]'
                : 'text-[#162521] hover:text-[#D64933]'
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            id="nav-link-about"
            onClick={(e) => {
              if (onAboutClick && typeof window !== 'undefined' && window.location.pathname === '/about') {
                e.preventDefault();
                onAboutClick();
              }
            }}
            className={`text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors py-1 ${
              activePage === 'about'
                ? 'text-[#D64933] border-b-2 border-[#D64933]'
                : 'text-[#162521] hover:text-[#D64933]'
            }`}
          >
            About
          </Link>
          <Link
            href="/#frequently-asked-questions"
            onClick={(e) => {
              if (onFAQClick && typeof window !== 'undefined' && window.location.pathname === '/') {
                e.preventDefault();
                onFAQClick();
              }
            }}
            id="nav-link-faq"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer py-1"
          >
            FAQ
          </Link>
        </div>

        {/* Contact Us CTA matching reference */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onContactClick}
            id="nav-cta-contact"
            className="bg-[#461313] hover:bg-[#D64933] text-white pl-5 pr-2 py-2 rounded-full inline-flex items-center gap-3 font-semibold text-[13px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group min-h-[44px]"
          >
            <span>Contact us</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle & quick contact */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="bg-[#461313] hover:bg-[#D64933] text-white px-3.5 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors min-h-[40px] shadow-xs active:scale-95"
          >
            <span>Contact</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl text-[#162521] bg-white/80 hover:bg-white border border-stone-200/80 shadow-xs flex items-center justify-center transition-colors cursor-pointer active:scale-95 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#461313]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown with subtle backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden mt-3 p-4 rounded-2xl bg-white/98 backdrop-blur-2xl border border-stone-200 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-stone-100 mb-2">
            <Image
              src="/Chapelhill-Company-Logo.png"
              alt="Chapelhill"
              width={140}
              height={63}
              className="h-7 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#461313] bg-[#C0E8F9]/40 px-2 py-0.5 rounded-full">
              Menu
            </span>
          </div>
          <Link
            href="/projects"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
            className={`text-left py-3 px-3.5 text-sm font-semibold tracking-wider rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation ${
              activePage === 'properties' || activePage === 'projects'
                ? 'text-[#D64933] bg-stone-100 font-bold'
                : 'text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50'
            }`}
          >
            <span>Projects</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
          <Link
            href="/services"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onServicesClick && typeof window !== 'undefined' && window.location.pathname === '/services') {
                onServicesClick();
              }
            }}
            className={`text-left py-3 px-3.5 text-sm font-semibold tracking-wider rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation ${
              activePage === 'services'
                ? 'text-[#D64933] bg-stone-100 font-bold'
                : 'text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50'
            }`}
          >
            <span>Services</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
          <Link
            href="/about"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onAboutClick && typeof window !== 'undefined' && window.location.pathname === '/about') {
                onAboutClick();
              }
            }}
            className={`text-left py-3 px-3.5 text-sm font-semibold tracking-wider rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation ${
              activePage === 'about'
                ? 'text-[#D64933] bg-stone-100 font-bold'
                : 'text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50'
            }`}
          >
            <span>About</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
          <Link
            href="/#frequently-asked-questions"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onFAQClick && typeof window !== 'undefined' && window.location.pathname === '/') {
                onFAQClick();
              }
            }}
            className="text-left py-3 px-3.5 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50 rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation"
          >
            <span>FAQ</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
          <div className="pt-2 mt-1 border-t border-stone-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full bg-[#461313] hover:bg-[#D64933] active:scale-[0.99] text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[48px] shadow-sm touch-manipulation"
            >
              <span>Book Private Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
