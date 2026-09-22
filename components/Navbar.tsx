'use client';

import React from 'react';
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

  return (
    <header className="w-full max-w-7xl mx-auto pt-6 sm:pt-8 px-6 sm:px-10 lg:px-12 relative z-30">
      <nav className="flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo matching reference */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#162521] group transition-opacity hover:opacity-90"
          id="chapelhill-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-[#461313] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Distinctive modern architectural house silhouette matching Homy reference */}
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
          <span className="text-2xl font-extrabold tracking-tight text-[#162521] group-hover:text-[#461313] transition-colors">
            Chapelhill
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            onClick={onExploreClick}
            id="nav-link-properties"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer"
          >
            Properties
          </button>
          <button
            onClick={onServicesClick}
            id="nav-link-services"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={onAboutClick}
            id="nav-link-about"
            className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer"
          >
            About
          </button>
          {onFAQClick && (
            <button
              onClick={onFAQClick}
              id="nav-link-faq"
              className="text-[13px] font-semibold tracking-[0.08em] text-[#162521] hover:text-[#D64933] transition-colors uppercase cursor-pointer"
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
            className="bg-[#461313] hover:bg-[#D64933] text-white pl-5 pr-2 py-2 rounded-full inline-flex items-center gap-3 font-semibold text-[13px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>Contact us</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#461313] group-hover:text-[#D64933] flex items-center justify-center group-hover:translate-x-0.5 transition-all">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="bg-[#461313] hover:bg-[#D64933] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            Contact
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#162521] hover:bg-white/40 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onExploreClick();
            }}
            className="text-left py-2 px-3 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] hover:bg-slate-100 rounded-lg uppercase"
          >
            Properties
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onServicesClick();
            }}
            className="text-left py-2 px-3 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] hover:bg-slate-100 rounded-lg uppercase"
          >
            Services
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onAboutClick();
            }}
            className="text-left py-2 px-3 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] hover:bg-slate-100 rounded-lg uppercase"
          >
            About
          </button>
          {onFAQClick && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onFAQClick();
              }}
              className="text-left py-2 px-3 text-sm font-semibold tracking-wider text-[#162521] hover:text-[#D64933] hover:bg-slate-100 rounded-lg uppercase"
            >
              FAQ
            </button>
          )}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full mt-2 bg-[#461313] hover:bg-[#D64933] text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
