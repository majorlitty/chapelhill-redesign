'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Globe2, 
  ArrowRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onExploreClick: () => void;
  onServicesClick: () => void;
  onAboutClick: () => void;
  onFAQClick: () => void;
  onContactClick: () => void;
}

export default function Footer({
  onExploreClick,
  onServicesClick,
  onAboutClick,
  onFAQClick,
  onContactClick,
}: FooterProps) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim().length > 4) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer 
      id="main-footer" 
      aria-label="Chapelhill Footer and Advisory Directory"
      className="w-full bg-[#0e1715] text-stone-300 relative z-20 pt-16 sm:pt-20 pb-12 border-t border-white/5"
    >
      {/* Subtle architectural ambient light matching the warm glow of the villa above */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-48 bg-gradient-to-b from-[#E5C583]/10 via-transparent to-transparent pointer-events-none -z-10 blur-2xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Tier: Brand Statement & Instant Action */}
        <div className="pb-12 sm:pb-16 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-serif">
                CHAPELHILL
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E5C583]/15 text-[#E5C583] text-[11px] font-semibold border border-[#E5C583]/30 tracking-wide">
                <ShieldCheck className="w-3 h-3 text-[#E5C583]" />
                LASRERA Accredited
              </span>
            </div>
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Institutional-grade luxury architecture, private estates, and verified diaspora development advisory across Lagos and prime African real estate corridors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              id="footer-book-consultation-btn"
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-[#0e1715] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Book Private Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0e1715]" />
            </button>
            <a
              href="https://wa.me/2348039876543?text=Hello%20Chapelhill%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20luxury%20estates."
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-chat-btn"
              className="px-5 py-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-semibold text-xs sm:text-sm border border-[#25D366]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Directory */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-white/10 text-xs sm:text-sm">
          {/* Column 1: Featured Estates */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.12em] text-xs mb-4 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#E5C583]" />
              <span>Developments</span>
            </h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <button
                  onClick={onExploreClick}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <span className="text-[#E5C583] opacity-60 group-hover:opacity-100">▸</span>
                  <span>Ivy Homes, Abijo GRA</span>
                  <span className="text-[10px] text-emerald-400 font-mono ml-auto">Ready</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onExploreClick}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <span className="text-[#E5C583] opacity-60 group-hover:opacity-100">▸</span>
                  <span>Ogudu GRA Penthouse</span>
                  <span className="text-[10px] text-amber-300 font-mono ml-auto">Off-Plan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onExploreClick}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <span className="text-[#E5C583] opacity-60 group-hover:opacity-100">▸</span>
                  <span>Lekki Phase 1 Project (18 Units)</span>
                  <span className="text-[10px] text-sky-400 font-mono ml-auto">Prime</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <span className="text-[#E5C583] opacity-60 group-hover:opacity-100">▸</span>
                  <span>Epe Strategic Corridor Land</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <span className="text-[#E5C583] opacity-60 group-hover:opacity-100">▸</span>
                  <span>Bespoke Private Commissions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Advisory & Diaspora */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.12em] text-xs mb-4 flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-[#C0E8F9]" />
              <span>Advisory & Services</span>
            </h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <button
                  onClick={onServicesClick}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Remote Diaspora Acquisitions
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  C of O & Governor’s Consent Verification
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  COREN-Certified Civil Construction
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Turnkey Facility & Rental Management
                </button>
              </li>
              <li>
                <button
                  onClick={onFAQClick}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1 text-[#C0E8F9]"
                >
                  <span>Frequently Asked Questions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Advisory Desks & Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.12em] text-xs mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D64933]" />
              <span>Offices & Liaison</span>
            </h3>
            <div className="space-y-3 text-stone-400">
              <div>
                <p className="text-white font-medium text-xs">Lagos Principal Office</p>
                <p className="text-stone-400 text-xs mt-0.5">
                  Lekki Phase 1 / Victoria Island, Lagos State, Nigeria
                </p>
              </div>
              <div>
                <p className="text-white font-medium text-xs">Diaspora Advisory Desk</p>
                <p className="text-stone-400 text-xs mt-0.5">
                  Mayfair, London UK & North America Direct Liaison
                </p>
              </div>
              <div className="pt-1 flex flex-col gap-1.5 text-xs">
                <a
                  href="tel:+2348039876543"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3 h-3 text-stone-400" />
                  <span>+234 803 987 6543</span>
                </a>
                <a
                  href="mailto:private@chapelhillre.com"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3 h-3 text-stone-400" />
                  <span>private@chapelhillre.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Private Investor Circle */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.12em] text-xs mb-4 flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-[#E5C583]" />
              <span>Private Investor Circle</span>
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed mb-3">
              Receive confidential pre-launch property brochures, unlisted off-plan allocations, and quarterly prime yield market reports.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You have been added to the private advisory dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your institutional or private email"
                    id="footer-email-input"
                    className="w-full bg-white/5 border border-white/15 focus:border-[#E5C583] focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-stone-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  id="footer-subscribe-submit-btn"
                  className="w-full bg-[#1e2f2b] hover:bg-[#283e39] text-[#E5C583] border border-[#E5C583]/30 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Request Investor Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Attribution & Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-4 text-stone-400 text-[11px] sm:text-xs">
            <span className="font-semibold text-white">CHAPELHILL REAL ESTATE INC.</span>
            <span>•</span>
            <span>RC Number: 1849204</span>
            <span>•</span>
            <span className="text-stone-400">Equal Housing Opportunity</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-stone-500">
            <button onClick={onAboutClick} className="hover:text-stone-300 transition-colors cursor-pointer">
              About Firm
            </button>
            <span>•</span>
            <button onClick={onFAQClick} className="hover:text-stone-300 transition-colors cursor-pointer">
              Due Diligence FAQ
            </button>
            <span>•</span>
            <button onClick={onContactClick} className="hover:text-stone-300 transition-colors cursor-pointer">
              Legal Disclaimers
            </button>
            <span>•</span>
            <span>© {new Date().getFullYear()} Chapelhill. All rights reserved.</span>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-stone-600 leading-relaxed text-center sm:text-left">
          Notice: Architectural visual representations, 3D renderings, floor measurements, and milestone projections are for illustrative and artistic purposes and are subject to architectural modifications and statutory approvals. Title searches are conducted under official Lagos State Lands Bureau parameters.
        </p>
      </div>
    </footer>
  );
}
