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
    <aside
      aria-label="قنوات الاتصال السريع والمساعد الذكي"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 z-40 flex items-center justify-center sm:justify-start gap-2 pointer-events-auto flex-wrap sm:flex-nowrap"
    >
      {/* AI Assistant Quick Trigger */}
      {onOpenAssistant && (
        <button
          onClick={onOpenAssistant}
          aria-label="فتح المساعد الذكي لزجاج سكريت ابوعريش"
          className="flex items-center justify-center gap-2 px-3.5 py-3 bg-gradient-to-r from-sky-700 to-indigo-800 hover:from-sky-600 hover:to-indigo-700 text-white rounded-2xl shadow-xl shadow-indigo-950/30 active:scale-95 transition-all text-xs sm:text-sm font-black border border-sky-400/40 relative cursor-pointer group"
        >
          <div className="relative">
            <Bot className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="whitespace-nowrap">المساعد الذكي</span>
          <Sparkles className="w-3 h-3 text-amber-300 hidden sm:inline" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_DATA.phonePrimary}`}
        aria-label={`اتصال فوري: ${COMPANY_DATA.phonePrimary}`}
        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl shadow-xl shadow-sky-950/20 active:scale-95 transition-all text-xs sm:text-sm font-bold border border-sky-400/30"
      >
        <Phone className="w-4 h-4 text-white" />
        <span className="whitespace-nowrap">اتصال: {COMPANY_DATA.phonePrimary}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="مراسلة عبر واتساب"
        className="flex items-center justify-center p-3 sm:px-3.5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-950/20 active:scale-95 transition-all text-xs sm:text-sm font-bold border border-emerald-400/30"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span className="hidden sm:inline mr-1 whitespace-nowrap">واتساب</span>
      </a>

      {/* Google Maps Button */}
      <a
        href={COMPANY_DATA.googleMapsShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="موقعنا على خرائط Google"
        className="flex items-center justify-center p-3 sm:px-3 sm:py-3 bg-slate-900/90 hover:bg-slate-800 text-white rounded-2xl shadow-xl shadow-slate-950/20 active:scale-95 transition-all text-xs sm:text-sm font-bold border border-slate-700/60 backdrop-blur-md"
      >
        <MapPin className="w-4 h-4 text-amber-400" />
        <span className="hidden md:inline mr-1 whitespace-nowrap">الخريطة</span>
      </a>
    </aside>
  );
};
