'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Shield, Compass, ArrowRight } from 'lucide-react';

interface InfoDrawerProps {
  isOpen: boolean;
  type: 'services' | 'about' | null;
  onClose: () => void;
  onBookVisit: (topic?: string) => void;
}

const SERVICE_CATEGORIES = [
  {
    id: 'development-sales',
    label: 'A',
    title: 'Property Development and Sales',
    description:
      'Development and sale of residential and other approved real estate projects, including off-plan developments.',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    imageAlt: 'Property Development and Sales showcase',
  },
  {
    id: 'construction-management',
    label: 'B',
    title: 'Construction and Project Management',
    description:
      'Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.',
    image:
      '/images/Beachwood Lagos/ongoing Beachwood project lagos/Beach wood construction progress (1).jpeg',
    imageAlt: 'Construction and Project Management showcase',
  },
  {
    id: 'facility-management',
    label: 'C',
    title: 'Property and Facility Management',
    description:
      'Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.',
    image: '/maintenance.webp',
    imageAlt: 'Property and Facility Management showcase',
  },
  {
    id: 'joint-ventures',
    label: 'D',
    title: 'Joint Ventures and Investment Partnerships',
    description:
      'Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.',
    image: '/images/joint-venture-partnerships.jpg',
    imageAlt: 'Joint Ventures and Investment Partnerships showcase',
  },
];

export default function InfoDrawer({ isOpen, type, onClose, onBookVisit }: InfoDrawerProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header with Close Button */}
        <div className="p-5 sm:p-6 pb-3 border-b border-stone-100 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Image
                src="/Chapelhill-Company-Logo.png"
                alt="ChapelHill Multicompany Limited"
                width={120}
                height={54}
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-[11px] font-semibold">
                {type === 'services' ? (
                  <>
                    <Shield className="w-3 h-3 text-[#D64933]" />
                    <span>Core Service Divisions</span>
                  </>
                ) : (
                  <>
                    <Compass className="w-3 h-3 text-[#D64933]" />
                    <span>Our Philosophy</span>
                  </>
                )}
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight">
              {type === 'services'
                ? 'ChapelHill Services & Capabilities'
                : 'About ChapelHill Multicompany Limited'}
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
              <p className="text-xs sm:text-sm text-[#162521]/75 leading-relaxed">
                Explore our four service divisions serving individuals, corporate clients, landowners, and strategic partners across Nigeria.
              </p>

              <div className="mt-5 space-y-3.5">
                {SERVICE_CATEGORIES.map((service) => (
                  <div
                    key={service.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row items-start gap-3.5"
                  >
                    <div className="relative w-full sm:w-24 h-36 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-stone-200">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 96px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-stone-500 font-semibold">
                        <span>{service.label}.</span>
                        <span aria-hidden="true">/</span>
                        <span className="text-[#461313] truncate">Core Service</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#162521] mt-0.5">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onBookVisit(service.title);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#461313] hover:bg-[#D64933] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                          <span>Enquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <Link
                          href={`/services#${service.id}`}
                          onClick={onClose}
                          className="text-xs font-semibold text-[#162521] hover:text-[#D64933] transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#162521]/80 leading-relaxed">
                Founded on the belief that a home is not merely an asset but a sanctuary of lasting comfort, ChapelHill Multicompany Limited is committed to contemporary architecture and dependable construction across Nigeria.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We specialize in property development and sales, construction and project management, property and facility management, and joint venture partnerships tailored to private homeowners, corporate clients, landowners, and investors.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-stone-50 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 shrink-0">
          {type === 'services' ? (
            <>
              <Link
                href="/services"
                onClick={onClose}
                className="text-xs font-semibold text-[#461313] hover:text-[#D64933] transition-colors"
              >
                Explore Full Services Page →
              </Link>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookVisit('General Services Consultation');
                }}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs min-h-[44px] touch-manipulation"
              >
                General Consultation
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-slate-500">ChapelHill Multicompany Limited</span>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#461313] hover:bg-[#D64933] text-white px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs min-h-[44px] touch-manipulation"
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
