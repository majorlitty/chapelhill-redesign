'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  X,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

interface DevelopmentMeta {
  title: string;
  subtitle: string;
  image: string;
}

function getDevelopmentMeta(selected: string): DevelopmentMeta {
  const lower = selected.toLowerCase();

  if (lower.includes('abijo')) {
    return {
      title: selected,
      subtitle: 'Abijo GRA, Lekki · Completed 1, 2 & 3-Bed Flats · From ₦50M',
      image: '/images/Ivy Homes Abijo GRA/Ivy Homes Abijo GRA 1.webp',
    };
  }

  if (lower.includes('ogudu')) {
    return {
      title: selected,
      subtitle: 'Ogudu GRA, Lagos · SOLD OUT (Ongoing Construction) · Future Releases',
      image: '/images/5 bed Ogudu GRA Project/5 bed ogudu GRA 1.webp',
    };
  }

  if (lower.includes('ivy heights') || lower.includes('ikate') || lower.includes('lekki')) {
    return {
      title: selected,
      subtitle: 'Ikate, Lekki Phase 1 · 2 & 3-Bed Off-Plan · 24-Mo Build Schedule',
      image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
    };
  }

  return {
    title: selected,
    subtitle: 'ChapelHill Multicompany Limited · Advisory, Construction & Partnerships',
    image: '/images/lekki-phase-1/lekki 3d/Lekki phase 1(4).jpeg',
  };
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
  const developmentMeta = getDevelopmentMeta(selectedProperty);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) {
        if (submitted) {
          setSubmitted(false);
          setEditedProperty(null);
        }
        setErrorMessage(null);
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isSubmitting, submitted, onClose]);

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

  const whatsappHref = `https://wa.me/2348032865488?text=${encodeURIComponent(
    `Hello ChapelHill Multicompany Limited, I am inquiring about ${selectedProperty} and would like to schedule a consultation or viewing.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2.5rem)] rounded-3xl shadow-2xl border border-stone-200/80 overflow-y-auto md:overflow-hidden overscroll-contain bg-[#FEFCFD] grid grid-cols-1 md:grid-cols-12 animate-in zoom-in-95 duration-200"
      >
        {/* LEFT PANEL: Dark Architectural Summary */}
        <aside className="md:col-span-5 bg-[#162521] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#162521] via-[#162521] to-[#461313]/55 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-5">
            {/* Brand Header */}
            <div className="flex items-center justify-between gap-3">
              <Image
                src="/Chapelhill-Company-Logo.png"
                alt="ChapelHill Multicompany Limited"
                width={120}
                height={54}
                className="h-7 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#E5C583]">
                <Shield className="w-3.5 h-3.5" />
                <span>Private Desk</span>
              </span>
            </div>

            {/* Selected Development / Subject Card */}
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden">
              <div className="relative h-28 sm:h-32 w-full bg-stone-900 overflow-hidden">
                <Image
                  src={developmentMeta.image}
                  alt={developmentMeta.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162521] via-black/25 to-transparent" />
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E5C583]">
                  <Building2 className="w-3 h-3 shrink-0" />
                  <span>Selected Inquiry</span>
                </div>
              </div>

              <div className="p-4">
                <p className="font-heading text-base font-bold text-white leading-snug">
                  {developmentMeta.title}
                </p>
                <p className="font-sans text-xs text-stone-300 mt-1 leading-relaxed">
                  {developmentMeta.subtitle}
                </p>
              </div>
            </div>

            {/* Office Hours & Headquarters */}
            <dl className="border-t border-white/10 divide-y divide-white/10 text-xs">
              <div className="py-3 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5C583] shrink-0 mt-0.5" />
                <div>
                  <dt className="font-semibold text-white">Office Hours</dt>
                  <dd className="text-stone-300 mt-0.5 leading-relaxed">
                    Monday – Saturday · 9:00 AM – 5:00 PM WAT
                  </dd>
                </div>
              </div>

              <div className="py-3 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5C583] shrink-0 mt-0.5" />
                <div>
                  <dt className="font-semibold text-white">Lekki Advisory Office</dt>
                  <dd className="text-stone-300 mt-0.5 leading-relaxed">
                    Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction, Lekki-Epe Expy,
                    Lagos
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Direct WhatsApp Desk & Voice Line */}
          <div className="relative z-10 mt-5 pt-4 border-t border-white/10 space-y-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="booking-modal-whatsapp-link"
              className="w-full rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 px-4 py-3 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-300 leading-none">
                    WhatsApp Desk
                  </p>
                  <p className="font-heading text-sm font-bold text-white mt-1 truncate">
                    +234 803 286 5488
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#25D366] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-[11px] text-stone-300 px-1">
              <Phone className="w-3.5 h-3.5 text-[#E5C583] shrink-0" />
              <span>Advisory Line: +234 903 913 0207 · +234 803 286 5488</span>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL: Clean Light Form Surface */}
        <div className="md:col-span-7 bg-[#FEFCFD] flex flex-col md:max-h-[calc(100dvh-2.5rem)] md:overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-stone-200/80 flex items-start justify-between gap-4 shrink-0">
            <div>
              <h2
                id="booking-modal-title"
                className="font-heading text-xl sm:text-2xl font-bold text-[#162521] tracking-[-0.02em]"
              >
                Schedule a Consultation or Viewing
              </h2>
              <p className="font-sans mt-1 text-xs sm:text-sm text-stone-600">
                Share your contact details and preferred timing; our advisory team will respond
                promptly.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 disabled:opacity-50 flex items-center justify-center text-stone-600 hover:text-[#162521] transition-colors shrink-0 cursor-pointer"
              id="close-booking-modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Form Body */}
          <div className="px-6 sm:px-8 py-5 overflow-y-auto flex-1 overscroll-contain">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                    Selected Property or Service
                  </label>
                  <input
                    type="text"
                    value={selectedProperty}
                    onChange={(e) => setEditedProperty(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-sm font-medium text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Victoria Sinclair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 803 286 5488"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                      Consultation Format
                    </label>
                    <select
                      value={formData.tourType}
                      onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] min-h-[44px] disabled:opacity-60"
                    >
                      <option value="in-person">In-Person Meeting / Site Visit</option>
                      <option value="virtual-vip">Virtual Walkthrough &amp; Briefing</option>
                      <option value="advisory">Advisory &amp; Partnership Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-[0.12em] mb-1.5">
                    Inquiry Message &amp; Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share unit interest, payment plan questions, pricing sheet request, or inspection timing..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-[#162521] focus:outline-none focus:ring-2 focus:ring-[#461313] resize-none disabled:opacity-60"
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

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-booking-button"
                    className="w-full bg-[#461313] hover:bg-[#D64933] disabled:bg-[#461313]/70 disabled:cursor-not-allowed text-white py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer inline-flex items-center justify-center gap-2 min-h-[48px]"
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
                  <p className="text-[11px] text-center text-stone-500 mt-2.5">
                    All inquiries are handled confidentially by the ChapelHill Multicompany Limited
                    advisory team.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-[#461313]/10 text-[#461313] flex items-center justify-center mx-auto mb-3.5">
                  <CheckCircle className="w-7 h-7 stroke-[2.25]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162521]">
                  Enquiry Request Sent
                </h3>
                <p className="font-sans mt-1.5 text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'valued guest'}. Your inquiry has been dispatched to
                  our team, and a ChapelHill representative will reach you at {formData.email} or{' '}
                  {formData.phone}.
                </p>
                <div className="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-left text-xs text-stone-600 space-y-1.5">
                  <p>
                    <strong className="text-[#162521]">Subject:</strong> {selectedProperty}
                  </p>
                  <p>
                    <strong className="text-[#162521]">Phone:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong className="text-[#162521]">Preferred Date:</strong> {formData.date}
                  </p>
                  <p>
                    <strong className="text-[#162521]">Format:</strong> {formData.tourType}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 w-full bg-[#461313] text-white py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#D64933] transition-colors cursor-pointer min-h-[46px]"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
