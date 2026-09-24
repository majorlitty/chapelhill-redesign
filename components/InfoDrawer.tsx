'use client';

import React from 'react';
import { X, Building2, Shield, Compass, KeyRound, Award } from 'lucide-react';

interface InfoDrawerProps {
  isOpen: boolean;
  type: 'services' | 'about' | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export default function InfoDrawer({ isOpen, type, onClose, onBookVisit }: InfoDrawerProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header with Close Button */}
        <div className="p-5 sm:p-6 pb-3 border-b border-stone-100 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-xs font-semibold mb-1.5">
              {type === 'services' ? (
                <>
                  <Award className="w-3.5 h-3.5 text-[#D64933]" />
                  <span>Bespoke Real Estate Advisory</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5 text-[#D64933]" />
                  <span>Our Philosophy</span>
                </>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight">
              {type === 'services' ? 'Chapelhill Private Services' : 'About Chapelhill'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-black transition-colors shrink-0 cursor-pointer"
            id="close-info-drawer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {type === 'services' ? (
            <div>
              <p className="text-xs sm:text-sm text-[#162521]/70 leading-relaxed">
                End-to-end white-glove real estate advisory for high-net-worth individuals, institutional collectors, and architecture enthusiasts.
              </p>

              <div className="mt-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#461313] text-white flex items-center justify-center shrink-0">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#162521]">Off-Market Acquisitions</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
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
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
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
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Comprehensive cross-border wealth structuring, valuation, and capital appreciation strategies for luxury portfolios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#162521]/80 leading-relaxed">
                Founded on the belief that a home is not merely an asset but a sanctuary of timeless human experience, Chapelhill represents the pinnacle of contemporary architecture and prime residential investment.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We exclusively curate properties that demonstrate uncompromising structural integrity, biophilic harmony with their natural surroundings, and forward-thinking sustainability. Over 3,500 discerning clients rely on our guidance to find spaces that elevate their lives.
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#461313]">$2.8B+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Estate Volume</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#D64933]">98.4%</p>
                  <p className="text-[11px] text-slate-500 font-medium">Client Retention</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#162521]">14</p>
                  <p className="text-[11px] text-slate-500 font-medium">Global Markets</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-stone-50 flex items-center justify-between gap-3 shrink-0">
          {type === 'services' ? (
            <>
              <span className="text-xs text-slate-500">Tailored to your family office requirements</span>
              <button
                onClick={() => {
                  onClose();
                  onBookVisit();
                }}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                Inquire With Advisor
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-slate-500">Chapelhill Advisory Group</span>
              <button
                onClick={onClose}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
