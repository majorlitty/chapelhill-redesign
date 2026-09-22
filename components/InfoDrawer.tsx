'use client';

import React from 'react';
import { X, Building2, Shield, Compass, KeyRound, Award, Sparkles } from 'lucide-react';

interface InfoDrawerProps {
  isOpen: boolean;
  type: 'services' | 'about' | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export default function InfoDrawer({ isOpen, type, onClose, onBookVisit }: InfoDrawerProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-black transition-colors"
          id="close-info-drawer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'services' ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#D64933]" />
              Bespoke Real Estate Advisory
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
              Chapelhill Private Services
            </h2>
            <p className="mt-1 text-sm text-[#162521]/70">
              End-to-end white-glove real estate advisory for high-net-worth individuals, institutional collectors, and architecture enthusiasts.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center shrink-0">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162521]">Off-Market Acquisitions</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Discreet representation granting access to unlisted architectural landmarks and trophy residences globally.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162521]">Architectural Development & Custom Build</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Collaboration with world-renowned modernist architects to commission, permit, and construct bespoke estate residences.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162521]">Portfolio Asset Advisory</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Comprehensive cross-border wealth structuring, valuation, and capital appreciation strategies for luxury portfolios.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Tailored to your family office requirements</span>
              <button
                onClick={() => {
                  onClose();
                  onBookVisit();
                }}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
              >
                Inquire With Advisor
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D64933]" />
              Our Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#162521] tracking-tight">
              About Chapelhill
            </h2>
            <p className="mt-3 text-sm text-[#162521]/80 leading-relaxed">
              Founded on the belief that a home is not merely an asset but a sanctuary of timeless human experience, Chapelhill represents the pinnacle of contemporary architecture and prime residential investment.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We exclusively curate properties that demonstrate uncompromising structural integrity, biophilic harmony with their natural surroundings, and forward-thinking sustainability. Over 3,500 discerning clients rely on our guidance to find spaces that elevate their lives.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div>
                <p className="text-xl font-bold text-[#461313]">$2.8B+</p>
                <p className="text-[11px] text-slate-500 font-medium">Estate Volume</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#D64933]">98.4%</p>
                <p className="text-[11px] text-slate-500 font-medium">Client Retention</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#162521]">14</p>
                <p className="text-[11px] text-slate-500 font-medium">Global Markets</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={onClose}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
