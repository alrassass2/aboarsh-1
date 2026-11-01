import React from 'react';
import { Phone, MessageCircle, MapPin, Bot, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface FloatingActionButtonsProps {
  onOpenAssistant?: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({
  onOpenAssistant,
}) => {
  return (
    <>
      {/* 1. Desktop & Tablet Floating Dock (bottom-left) */}
      <aside
        aria-label="قنوات الاتصال السريع والمساعد الذكي"
        className="hidden sm:flex fixed bottom-6 left-6 z-40 items-center gap-2.5 pointer-events-auto"
      >
        {/* AI Assistant Quick Trigger */}
        {onOpenAssistant && (
          <button
            onClick={onOpenAssistant}
            aria-label="فتح المساعد الذكي لزجاج سكريت ابوعريش"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-700 to-indigo-800 hover:from-sky-600 hover:to-indigo-700 text-white rounded-2xl shadow-xl shadow-indigo-950/25 active:scale-95 transition-all text-xs font-black border border-sky-400/40 cursor-pointer group"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            </div>
            <span className="whitespace-nowrap">المساعد الذكي</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>
        )}

        {/* Direct Phone Call Button */}
        <a
          href={`tel:${COMPANY_DATA.phonePrimary}`}
          aria-label={`اتصال فوري: ${COMPANY_DATA.phonePrimary}`}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl shadow-xl shadow-sky-950/20 active:scale-95 transition-all text-xs font-bold border border-sky-400/30"
          dir="ltr"
        >
          <Phone className="w-4 h-4 text-white animate-pulse" />
          <span className="whitespace-nowrap font-mono">{COMPANY_DATA.phonePrimary}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="مراسلة عبر واتساب"
          className="flex items-center justify-center gap-1.5 px-3.5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-950/20 active:scale-95 transition-all text-xs font-bold border border-emerald-400/30"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="whitespace-nowrap">واتساب</span>
        </a>

        {/* Google Maps Button */}
        <a
          href={COMPANY_DATA.googleMapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="موقعنا على خرائط Google"
          className="flex items-center justify-center p-3 bg-slate-900/90 hover:bg-slate-800 text-white rounded-2xl shadow-xl shadow-slate-950/20 active:scale-95 transition-all text-xs font-bold border border-slate-700/60 backdrop-blur-md"
          title="موقع الورشة على خرائط Google"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
        </a>
      </aside>

      {/* 2. Mobile Floating Icon Dock (Compact Symbols & Icons - Minimal screen impact) */}
      <aside
        aria-label="أيقونات الاتصال السريع للجوال"
        className="sm:hidden fixed bottom-4 left-3 z-40 pointer-events-auto"
      >
        <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl border border-white/15">
          {/* Call Icon Button */}
          <a
            href={`tel:${COMPANY_DATA.phonePrimary}`}
            className="w-10 h-10 rounded-full bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform relative"
            aria-label={`اتصال فوري: ${COMPANY_DATA.phonePrimary}`}
            title="اتصال هاتفي مباشر"
          >
            <Phone className="w-4 h-4 text-white animate-pulse" />
          </a>

          {/* WhatsApp Icon Button */}
          <a
            href={COMPANY_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] active:bg-emerald-600 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
            aria-label="مراسلة عبر واتساب"
            title="مراسلة واتساب"
          >
            <MessageCircle className="w-4 h-4 text-white" />
          </a>

          {/* AI Assistant Icon Button */}
          {onOpenAssistant && (
            <button
              onClick={onOpenAssistant}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-700 to-sky-600 active:from-indigo-800 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform cursor-pointer relative"
              aria-label="المساعد الذكي"
              title="المساعد الذكي لزجاج سكريت ابوعريش"
            >
              <Bot className="w-4 h-4 text-sky-200" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            </button>
          )}

          {/* Google Maps Pin Icon Button */}
          <a
            href={COMPANY_DATA.googleMapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 active:bg-slate-700 text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
            aria-label="موقعنا على خرائط Google"
            title="موقع الورشة على خرائط Google"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </aside>
    </>
  );
};
