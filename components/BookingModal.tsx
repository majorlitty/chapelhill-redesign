'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  CheckCircle,
  Shield,
  MessageCircle,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultProperty = 'IVY Heights, Ikate, Lekki Phase 1, Lagos',
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [editedProperty, setEditedProperty] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: 'in-person',
    date: '2026-09-24',
    notes: '',
  });

  const selectedProperty = editedProperty ?? defaultProperty;

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property: selectedProperty,
          tourType: formData.tourType,
          date: formData.date,
          message: formData.notes,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || 'Unable to send your inquiry right now. Please try again.'
        );
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'A network error occurred while submitting your request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setIsSubmitting(false);
    setEditedProperty(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourType: 'in-person',
      date: '2026-09-24',
      notes: '',
    });
    onClose();
  };

  const handleClose = () => {
    if (isSubmitting) return;
    if (submitted) {
      handleReset();
      return;
    }
    setErrorMessage(null);
    setEditedProperty(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[calc(100dvh-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header (Pinned at top) */}
        <div className="p-5 sm:p-6 pb-3 border-b border-stone-100 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Image
                src="/Chapelhill-Company-Logo.png"
                alt="Chapelhill"
                width={120}
                height={54}
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C0E8F9]/70 text-[#461313] text-[11px] font-semibold">
                <Shield className="w-3 h-3 text-[#D64933]" />
                Private Advisory & Discreet Viewings
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#162521] tracking-tight">
              Schedule a Consultation or Viewing
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#162521]/70">
              Connect with the ChapelHill Multicompany Limited team regarding our properties, construction services, facility management, or joint-venture partnerships.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50 flex items-center justify-center text-slate-500 hover:text-black transition-colors shrink-0 cursor-pointer"
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
                  Selected Property or Service
                </label>
                <input
                  type="text"
                  value={selectedProperty}
                  onChange={(e) => setEditedProperty(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-base sm:text-sm font-medium text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
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
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
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
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+234 803 286 5488"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                  required
                />
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
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                    Consultation Format
                  </label>
                  <select
                    value={formData.tourType}
                    onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] bg-white min-h-[44px] disabled:opacity-60"
                  >
                    <option value="in-person">In-Person Meeting / Site Visit</option>
                    <option value="virtual-vip">Virtual Walkthrough &amp; Briefing</option>
                    <option value="advisory">Advisory &amp; Partnership Call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#162521]/80 uppercase tracking-wider mb-1">
                  Inquiry Message & Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Share architectural preferences, budget range, payment plan questions, or timing flexibility..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] resize-none disabled:opacity-60"
                  required
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-800"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-booking-button"
                  className="w-full bg-[#461313] hover:bg-[#D64933] disabled:bg-[#461313]/70 disabled:cursor-not-allowed text-white py-3 px-6 rounded-full font-semibold text-xs sm:text-sm transition-colors shadow-md cursor-pointer inline-flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Enquiry</span>
                  )}
                </button>
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-px bg-stone-200 flex-1" />
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Or Instant Chat</span>
                  <div className="h-px bg-stone-200 flex-1" />
                </div>
                <a
                  href={`https://wa.me/2348032865488?text=${encodeURIComponent(`Hello ChapelHill Multicompany Limited, I am interested in inquiring about ${selectedProperty} and scheduling a private viewing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="booking-modal-whatsapp-link"
                  className="mt-2 w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 py-2.5 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>Chat on WhatsApp (+234 803 286 5488)</span>
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-1.5">
                  All inquiries are handled confidentially by the ChapelHill Multicompany Limited advisory team.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#461313]/10 text-[#461313] flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-[#162521]">
                Enquiry Request Sent
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#162521]/70 max-w-sm mx-auto">
                Thank you, {formData.name || 'valued guest'}. Your inquiry has been dispatched to our team, and a ChapelHill representative will contact you at {formData.email} or {formData.phone}.
              </p>
              <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs text-slate-600 space-y-1">
                <p><strong className="text-[#162521]">Subject:</strong> {selectedProperty}</p>
                <p><strong className="text-[#162521]">Phone:</strong> {formData.phone}</p>
                <p><strong className="text-[#162521]">Date:</strong> {formData.date}</p>
                <p><strong className="text-[#162521]">Format:</strong> {formData.tourType}</p>
              </div>
              <button
                type="button"
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
