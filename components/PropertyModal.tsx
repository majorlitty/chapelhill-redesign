'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, ArrowRight, Star } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string;
  imageUrl: string;
  description: string;
}

const LUXURY_PROPERTIES: Property[] = [
  {
    id: 'ivy-homes-abijo',
    name: 'Ivy Homes Abijo GRA',
    location: 'Abijo GRA, Lekki-Epe Expressway, Lagos',
    price: 'Starting from ₦38,000,000',
    beds: 3,
    baths: 3,
    sqft: '8x 1-Bed • 2x 2-Bed • 3x 3-Bed',
    tag: 'Completed • Immediate Handover',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Residential enclave comprising 8 units of 1-bedroom apartments, 2 units of 2-bedroom apartments, and 3 units of 3-bedroom apartments with full utilities and private security.',
  },
  {
    id: 'ogudu-gra-project',
    name: 'Ogudu GRA Project',
    location: 'Ogudu GRA, Mainland Prime, Lagos',
    price: 'Starting from ₦380,000,000',
    beds: 5,
    baths: 6,
    sqft: 'Penthouse + Service Room',
    tag: 'Currently Ongoing',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Exclusive 5-bedroom luxury penthouse with dedicated ensuite service room, double-height living spaces, panoramic rooftop terraces, and private elevator access.',
  },
  {
    id: 'lekki-phase-1-project',
    name: 'Lekki Phase 1 Project',
    location: 'Prime 866sqm Site, Lekki Phase 1, Lagos',
    price: 'Starting from ₦145,000,000',
    beds: 3,
    baths: 3,
    sqft: '18 Units on 866sqm',
    tag: 'Currently Ongoing',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'High-yield 18-unit residential development featuring 8 units of 2-bedroom apartments, 8 units of 3-bedroom apartments, and 2 exclusive 2-bedroom penthouses.',
  },
  {
    id: 'lumina-belvedere',
    name: 'The Lumina Belvedere',
    location: 'Chapelhill Ridge, Pacific Palisades',
    price: '$18,500,000',
    beds: 6,
    baths: 8,
    sqft: '9,450 sq ft',
    tag: 'Architectural Trophy',
    imageUrl: '/luxury_villa_hero.jpg',
    description: 'Multi-tiered modernist sanctuary with cantilevered terraces, glass walls, and ethereal hillside vistas.',
  },
];

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTour: (propertyName: string) => void;
}

export default function PropertyModal({ isOpen, onClose, onBookTour }: PropertyModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'california' | 'alpine' | 'coastal'>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[calc(100dvh-2rem)] bg-[#f8fafc] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/60">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Chapelhill Private Portfolio
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Curated Luxury Estates
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-black transition-colors shrink-0 cursor-pointer"
            id="close-property-modal"
            aria-label="Close portfolio modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Property Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {LUXURY_PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={property.imageUrl}
                      alt={property.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#461313]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {property.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#162521] px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-xs">
                      {property.price}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D64933]" />
                      {property.location}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#162521] group-hover:text-[#461313] transition-colors">
                      {property.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                      {property.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs text-[#162521]/70 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#D64933]" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-[#D64933]" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-[#D64933]" />
                        <span>{property.sqft}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <button
                    onClick={() => {
                      onClose();
                      onBookTour(property.name);
                    }}
                    className="w-full bg-[#461313] hover:bg-[#D64933] text-white py-2.5 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Schedule Private Viewing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <p>Chapelhill Private Portfolio • Verified Off-Market and Premier Listings</p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-stone-300 text-xs font-semibold text-[#162521] hover:bg-stone-200 transition-colors cursor-pointer"
          >
            Back to Overview
          </button>
        </div>
      </div>
    </div>
  );
}
