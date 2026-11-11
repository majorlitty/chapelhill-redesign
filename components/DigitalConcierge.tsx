'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  X,
  Send,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageCircle,
  RotateCcw,
  Minimize2,
  Maximize2,
  ExternalLink,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedActions?: {
    whatsapp?: boolean;
    booking?: boolean;
  };
}

const INITIAL_GREETING: ChatMessage = {
  id: 'initial-greeting',
  role: 'assistant',
  content:
    'Welcome to **Chapelhill Multicompany International**. I am your 24/7 Digital Concierge & Private Property Advisor.\n\nWhether you are exploring active developments such as **Ivy Heights Lekki Phase 1** and **Ivy Homes Abijo GRA**, evaluating our 8-month installment schedules, or commissioning bespoke turnkey civil construction, how may I assist your portfolio today?',
  timestamp: 'Just now',
  suggestedActions: {
    whatsapp: false,
    booking: false,
  },
};

const SUGGESTED_PROMPTS = [
  'Ivy Heights Lekki Phase 1 pricing & plans',
  'Ivy Homes Abijo GRA completed flats',
  'What are your flexible milestone payment plans?',
  'Turnkey construction on personal land',
];

let globalMsgCounter = 0;
function generateMessageId(prefix: string): string {
  globalMsgCounter += 1;
  return `${prefix}-${globalMsgCounter}`;
}

function getFormattedTimestamp(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function DigitalConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, isMinimized]);

  // Listen for global triggers e.g. from Hero or navigation buttons
  useEffect(() => {
    function handleOpenEvent() {
      setIsOpen(true);
      setIsMinimized(false);
      setHasUnread(false);
    }

    window.addEventListener('open-digital-concierge', handleOpenEvent);
    return () => window.removeEventListener('open-digital-concierge', handleOpenEvent);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: generateMessageId('user'),
      role: 'user',
      content: text,
      timestamp: getFormattedTimestamp(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Map messages for server API endpoint
      const payloadMessages = newMessages.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        content: m.content,
      }));

      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      const data = await res.json();

      const assistantMessage: ChatMessage = {
        id: generateMessageId('assistant'),
        role: 'assistant',
        content: data.text || 'Thank you for your inquiry. Our Senior Advisory Desk is available on WhatsApp (+234 903 913 0207) to assist you with tailored portfolio schedules.',
        timestamp: getFormattedTimestamp(),
        suggestedActions: data.suggestedActions,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (!isOpen) {
        setHasUnread(true);
      }
    } catch (err) {
      console.error('Concierge send error:', err);
      const fallbackMessage: ChatMessage = {
        id: generateMessageId('fallback'),
        role: 'assistant',
        content:
          'Thank you for your inquiry. Our Senior Advisory Desk is immediately accessible via WhatsApp (+234 903 913 0207) or by booking a confidential private viewing.',
        timestamp: getFormattedTimestamp(),
        suggestedActions: { whatsapp: true, booking: true },
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_GREETING]);
    setInputValue('');
  };

  const handleWhatsAppHandoff = (summaryText?: string) => {
    const message = encodeURIComponent(
      `Hello Chapelhill Advisory, I was consulting with your Digital Concierge regarding luxury developments in Lagos. ${
        summaryText ? `I am specifically inquiring about: ${summaryText.slice(0, 120)}...` : 'I would like to receive current brochure allocations and schedule an inspection.'
      }\n\nThank you.`
    );
    window.open(`https://wa.me/2349039130207?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleBookingHandoff = (propertyName = 'Ivy Heights Lekki Phase 1') => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-booking-consultation', {
          detail: { propertyName },
        })
      );
    }
  };

  // Helper to format basic markdown (bold text, lists, linebreaks) cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      // Bold replacer
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-[#162521]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <li key={i} className="ml-4 list-disc text-xs sm:text-[13px] leading-relaxed my-0.5">
            {formattedLine}
          </li>
        );
      }

      if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }

      return (
        <p key={i} className="text-xs sm:text-[13px] leading-relaxed my-1">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button Container */}
      <div
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 pointer-events-none"
        aria-label="24/7 Digital Concierge Widget"
      >
        <div className="relative pointer-events-auto flex items-center gap-3">
          {/* Main Floating Trigger Button - Always visible without hover */}
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setIsMinimized(false);
              setHasUnread(false);
            }}
            id="digital-concierge-fab"
            aria-label={isOpen ? 'Close 24/7 digital concierge' : 'Ask 24/7 digital concierge AI assistant'}
            aria-expanded={isOpen}
            className={`group relative flex items-center gap-2.5 sm:gap-3 rounded-full bg-[#461313] hover:bg-[#D64933] text-white shadow-[0_10px_30px_rgba(70,19,19,0.45)] hover:shadow-[0_14px_35px_rgba(214,73,51,0.55)] border border-[#E5C583]/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#D64933]/30 touch-manipulation ${
              isOpen ? 'px-4 py-2.5 sm:py-3' : 'px-3.5 sm:px-4 py-2 sm:py-2.5'
            }`}
          >
            {/* Unread Indicator if closed */}
            {hasUnread && !isOpen && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C583] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D64933] border-2 border-white text-[9px] font-bold text-white items-center justify-center">
                  !
                </span>
              </span>
            )}

            {/* Icon / Live Indicator */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
              {isOpen ? (
                <X className="w-4 h-4 text-white transition-transform group-hover:rotate-90 duration-200" />
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 text-white stroke-[2]" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C583] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                </>
              )}
            </div>

            {/* Always-Visible Text & AI Assistant Badge */}
            {isOpen ? (
              <span className="text-xs sm:text-sm font-semibold tracking-wide pr-1">
                Close Concierge
              </span>
            ) : (
              <div className="flex flex-col text-left leading-tight pr-1">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight whitespace-nowrap">
                    Ask 24/7 Digital Concierge
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#E5C583] text-[#461313] text-[9px] font-extrabold uppercase tracking-wider leading-none shadow-xs shrink-0">
                    AI Assistant
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-stone-300 font-medium tracking-normal hidden xs:inline mt-0.5">
                  Instant Portfolio & Pricing Guidance
                </span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Floating Concierge Chat Window */}
      {isOpen && (
        <aside
          role="dialog"
          aria-label="Chapelhill Digital Concierge Chat"
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(22,37,33,0.25)] border border-stone-200/90 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            isMinimized ? 'h-[72px]' : 'h-[620px] max-h-[calc(100dvh-2.5rem)]'
          }`}
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#461313] via-[#350d0d] to-[#162521] text-white p-4 px-5 flex items-center justify-between gap-3 shrink-0 select-none shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/Chapelhill-Company-Logo.png"
                  alt="Chapelhill"
                  width={36}
                  height={36}
                  className="object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white leading-tight">
                    Chapelhill Concierge
                  </h3>
                  <span className="inline-flex items-center text-[10px] font-bold tracking-wider text-[#E5C583] bg-white/10 px-2 py-0.5 rounded-full uppercase border border-white/15">
                    24/7 AI Assistant
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 truncate max-w-[220px]">
                  Private Client & Portfolio AI Advisor
                </p>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Restart conversation"
                className="text-stone-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized((prev) => !prev)}
                title={isMinimized ? 'Expand' : 'Minimize'}
                className="text-stone-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={isMinimized ? 'Expand window' : 'Minimize window'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close"
                className="text-stone-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content (Visible when not minimized) */}
          {!isMinimized && (
            <>
              {/* Trust Sub-Header Banner */}
              <div className="bg-stone-50 border-b border-stone-200/70 px-4 py-2 flex items-center justify-between text-[11px] text-stone-600 shrink-0">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D64933]" />
                  Direct verified portfolio data & legal title guidance
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded px-1.5 py-0.5 font-semibold">
                  Online
                </span>
              </div>

              {/* Messages Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-left bg-gradient-to-b from-[#FEFCFD] to-[#f9f7f8]">
                {messages.map((message) => {
                  const isUser = message.role === 'user';
                  return (
                    <div
                      key={message.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in fade-in duration-150`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-[13px] shadow-xs ${
                          isUser
                            ? 'bg-[#461313] text-white rounded-tr-xs'
                            : 'bg-white text-[#162521] border border-stone-200/80 rounded-tl-xs shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
                        }`}
                      >
                        {isUser ? (
                          <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        ) : (
                          <div className="text-[#162521]/90">{renderFormattedContent(message.content)}</div>
                        )}
                      </div>

                      {/* Timestamp */}
                      <span className="text-[10px] text-stone-400 mt-1 px-1">{message.timestamp}</span>

                      {/* Suggested Handoff Action Cards (Only for assistant messages when triggered) */}
                      {!isUser && message.suggestedActions && (message.suggestedActions.whatsapp || message.suggestedActions.booking) && (
                        <div className="mt-2.5 flex flex-wrap gap-2 max-w-[90%]">
                          {message.suggestedActions.whatsapp && (
                            <button
                              type="button"
                              onClick={() => handleWhatsAppHandoff(message.content)}
                              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs transition-transform active:scale-95 cursor-pointer touch-manipulation"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                              <span>Connect on WhatsApp</span>
                              <ExternalLink className="w-3 h-3 opacity-80" />
                            </button>
                          )}

                          {message.suggestedActions.booking && (
                            <button
                              type="button"
                              onClick={() => handleBookingHandoff()}
                              className="inline-flex items-center gap-1.5 bg-[#461313] hover:bg-[#D64933] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs transition-transform active:scale-95 cursor-pointer touch-manipulation"
                            >
                              <Calendar className="w-3.5 h-3.5" />
                              <span>Schedule Private Viewing</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex items-center gap-2 text-stone-500 text-xs py-2 px-1">
                    <div className="w-6 h-6 rounded-full bg-[#461313]/10 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 border-2 border-[#461313] border-t-transparent rounded-full animate-spin" />
                    </div>
                    <span className="animate-pulse">Concierge is drafting portfolio details...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Inquiry Chips (When user hasn't asked a lot yet or at start) */}
              {messages.length <= 3 && !isLoading && (
                <div className="px-4 py-2 bg-stone-50/80 border-t border-stone-200/50 flex flex-wrap gap-1.5">
                  <span className="w-full text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5">
                    Suggested Inquiries:
                  </span>
                  {SUGGESTED_PROMPTS.map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[11px] bg-white hover:bg-[#C0E8F9]/30 text-[#162521] hover:text-[#461313] border border-stone-200/70 hover:border-[#D64933]/40 rounded-full px-2.5 py-1 transition-all text-left truncate max-w-full cursor-pointer touch-manipulation"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-white border-t border-stone-200/80 flex items-center gap-2 shrink-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about pricing, timeline, or bespoke build..."
                  disabled={isLoading}
                  className="flex-1 bg-stone-50 border border-stone-200 hover:border-stone-300 focus:border-[#461313] focus:bg-white focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#162521] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  id="digital-concierge-send-btn"
                  className="w-10 h-10 rounded-xl bg-[#461313] hover:bg-[#D64933] active:scale-95 disabled:opacity-40 disabled:hover:bg-[#461313] text-white flex items-center justify-center transition-all cursor-pointer shrink-0 touch-manipulation"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 stroke-[2]" />
                </button>
              </form>
            </>
          )}
        </aside>
      )}
    </>
  );
}
