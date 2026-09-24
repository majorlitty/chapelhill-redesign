'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle, Shield, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultProperty = 'The Lumina Belvedere',
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: defaultProperty,
    tourType: 'in-person',
    date: '2026-09-24',
    time: '14:00',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[calc(100dvh-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header (Pinned at top) */}
        <div className="p-5 sm:p-6 pb-3 border-b border-stone-100 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-xs font-semibold mb-2">
              <Shield className="w-3.5 h-3.5 text-[#D64933]" />
              Private Advisory & Discreet Viewings
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight">
              Schedule a Private Viewing
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#162521]/70">
              Experience the craftsmanship and tranquility of Chapelhill estates in person or via high-definition virtual tour.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-black transition-colors shrink-0 cursor-pointer"
            id="close-booking-modal"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with internal scrolling so it never requires zoom-out */}
        <div className="p-5 sm:p-6 pt-4 overflow-y-auto flex-1 overscroll-contain">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                  Selected Estate
                </label>
                <input
                  type="text"
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-medium text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Victoria Sinclair"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                    Viewing Format
                  </label>
                  <select
                    value={formData.tourType}
                    onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] bg-white"
                  >
                    <option value="in-person">Private In-Person Tour</option>
                    <option value="virtual-vip">Live 4K Virtual Walkthrough</option>
                    <option value="advisory">Confidential Advisory Call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                  Specific Inquiries or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Architectural preferences, timing flexibility, or private hangar/garage requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-booking-button"
                  className="w-full bg-[#461313] hover:bg-[#D64933] text-white py-3 px-6 rounded-full font-semibold text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
                >
                  Confirm Viewing Request
                </button>
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-px bg-stone-200 flex-1" />
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Or Instant Chat</span>
                  <div className="h-px bg-stone-200 flex-1" />
                </div>
                <a
                  href={`https://wa.me/2348039876543?text=${encodeURIComponent(`Hello Chapelhill, I am interested in inquiring about ${formData.property} and scheduling a private viewing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="booking-modal-whatsapp-link"
                  className="mt-2 w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 py-2.5 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>Chat with Senior Advisor on WhatsApp</span>
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-1.5">
                  All requests are held under strict non-disclosure and assigned to a dedicated Senior Partner.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#461313]/10 text-[#461313] flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-[#162521]">
                Viewing Request Received
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#162521]/70 max-w-sm mx-auto">
                Thank you, {formData.name || 'valued guest'}. A Chapelhill Senior Private Advisor will contact you at {formData.email || 'your email'} within 2 hours to confirm your confidential access.
              </p>
              <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs text-slate-600 space-y-1">
                <p><strong className="text-[#162521]">Estate:</strong> {formData.property}</p>
                <p><strong className="text-[#162521]">Date:</strong> {formData.date}</p>
                <p><strong className="text-[#162521]">Format:</strong> {formData.tourType}</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-5 w-full bg-[#461313] text-white py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#D64933] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
