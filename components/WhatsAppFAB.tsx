'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface WhatsAppFABProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppFAB({
  phoneNumber = '2348039876543',
  defaultMessage = 'Hello Chapelhill, I am interested in inquiring about your luxury estates. Could you please share more details regarding property availability, pricing, and scheduling a private viewing?',
}: WhatsAppFABProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissedNotification, setDismissedNotification] = useState(false);

  const encodedDefaultMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedDefaultMessage}`;

  const propertyQuickInquiries = [
    {
      label: 'Ivy Homes Abijo GRA',
      msg: 'Hello Chapelhill, I am interested in the completed Ivy Homes Abijo GRA apartments. Could you please share current availability, unit pricing, and inspection dates?',
    },
    {
      label: 'Ogudu GRA Penthouse',
      msg: 'Hello Chapelhill, I would like to inquire about the 5-bedroom penthouse project at Ogudu GRA. Could you please send the brochure and milestone payment details?',
    },
    {
      label: 'Lekki Phase 1 Project',
      msg: 'Hello Chapelhill, I am inquiring about the 18-unit luxury residential development in Lekki Phase 1. Could you please provide off-plan pricing and reservation details?',
    },
  ];

  return (
    <aside 
      aria-label="Direct WhatsApp Property Inquiries" 
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Floating Prompt Notification Bubble (Optional preview card on first visit) */}
      {!dismissedNotification && (
        <div 
          className="pointer-events-auto max-w-[290px] sm:max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_32px_rgba(22,37,33,0.12)] border border-stone-200/80 animate-in slide-in-from-bottom-3 duration-300 transition-all text-left"
          role="dialog"
          aria-label="WhatsApp Inquiry Assistant"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#461313]">
                Chapelhill Private Advisory
              </span>
            </div>
            <button
              onClick={() => setDismissedNotification(true)}
              id="dismiss-whatsapp-notification"
              className="text-stone-400 hover:text-stone-700 p-0.5 rounded-md transition-colors cursor-pointer"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#162521]/80 leading-relaxed mb-3">
            Interested in <strong className="text-[#461313]">Chapelhill luxury estates</strong>? Chat with our client director directly on WhatsApp for immediate brochures and pricing.
          </p>

          {/* Quick Select Buttons */}
          <div className="space-y-1.5 mb-3">
            {propertyQuickInquiries.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[11px] font-medium text-[#162521] hover:text-[#461313] bg-stone-50 hover:bg-[#C0E8F9]/30 border border-stone-200/60 rounded-lg px-2.5 py-1.5 transition-colors group cursor-pointer"
              >
                <span className="truncate">{item.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-notification-action-link"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
            <span>Open Direct Chat Window</span>
          </a>
        </div>
      )}

      {/* Main Floating Action Button */}
      <div className="relative pointer-events-auto flex items-center gap-3">
        {/* Hover Pill Label on Desktop */}
        {showTooltip && (
          <div 
            className="hidden sm:flex items-center gap-1.5 bg-[#162521] text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg border border-white/10 whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
            role="tooltip"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C0E8F9]" />
            <span>Chat about Chapelhill Estates</span>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-chat-fab"
          aria-label="Direct WhatsApp chat window for Chapelhill luxury estates inquiries"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Pulsing Presence Ring */}
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#162521] border-2 border-white text-[8px] font-black text-white items-center justify-center">
              1
            </span>
          </span>

          <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </aside>
  );
}
