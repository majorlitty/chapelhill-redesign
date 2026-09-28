'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Home, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onExploreClick: () => void;
  onServicesClick: () => void;
  onAboutClick: () => void;
  onFAQClick?: () => void;
}

export default function Navbar({
  onContactClick,
  onExploreClick,
  onServicesClick,
  onAboutClick,
  onFAQClick,
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
    <header className="w-full max-w-7xl mx-auto pt-3 sm:pt-6 md:pt-8 px-4 sm:px-8 lg:px-12 relative z-40">
      <nav className="flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo matching reference */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 text-[#162521] group transition-opacity hover:opacity-90 py-1"
          id="chapelhill-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-[#461313] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L3 10V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V10L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M9 21V12H15V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#162521] group-hover:text-[#461313] transition-colors">
            Chapelhill
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <button
            onClick={onExploreClick}
            id="nav-link-properties"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer py-1"
          >
            Properties
          </button>
          <button
            onClick={onServicesClick}
            id="nav-link-services"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={onAboutClick}
            id="nav-link-about"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer py-1"
          >
            About
          </button>
          {onFAQClick && (
            <button
              onClick={onFAQClick}
              id="nav-link-faq"
              className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer py-1"
            >
              FAQ
            </button>
          )}
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onExploreClick();
            }}
            className="text-left py-3 px-3.5 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50 rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation"
          >
            <span>Properties</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onServicesClick();
            }}
            className="text-left py-3 px-3.5 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50 rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation"
          >
            <span>Services</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onAboutClick();
            }}
            className="text-left py-3 px-3.5 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50 rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation"
          >
            <span>About</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </button>
          {onFAQClick && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onFAQClick();
              }}
              className="text-left py-3 px-3.5 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] active:bg-stone-100 hover:bg-stone-50 rounded-xl uppercase transition-colors min-h-[48px] flex items-center justify-between touch-manipulation"
            >
              <span>FAQ</span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </button>
          )}
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
    </header>
  );
}
