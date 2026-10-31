import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenCms?: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'departments', label: 'الأقسام والخدمات' },
    { id: 'articles', label: 'المقالات والأرشيف' },
    { id: 'projects', label: 'أعمالنا ومشاريعنا' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro bar for quick contact and location */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>أبو عريش - جيزان وكافة محافظات المنطقة</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>زجاج سيكوريت معتمد وضمان حتى 5 سنوات</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DATA.phonePrimary}`}
              className="hover:text-sky-300 transition-colors flex items-center gap-1 font-medium text-white"
              dir="ltr"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{COMPANY_DATA.phonePrimary}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={COMPANY_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-emerald-400 font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>واتساب</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={COMPANY_DATA.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-400"
            >
              <MapPin className="w-3 h-3" />
              <span>{COMPANY_DATA.googleMapsTitle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Brand Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('home')}
              className="text-right flex items-center gap-3 focus:outline-hidden group"
            >
              <img
                src={COMPANY_DATA.logoUrl}
                alt="شعار زجاج سكريت ابوعريش"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0 drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
                loading="eager"
              />
              <div className="leading-tight">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                  زجاج سكريت <span className="text-sky-600">ابوعريش</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase block">
                  Securit Glass · Abu Arish
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentTab(link.id)}
                className={`whitespace-nowrap transition-colors py-1 ${
                  currentTab === link.id
                    ? 'text-sky-600 font-bold border-b-2 border-sky-600'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 active:scale-95 transition-all shadow-sm shadow-sky-600/20 whitespace-nowrap"
            >
              طلب معاينة مجانية
            </button>

            <a
              href={`tel:${COMPANY_DATA.phonePrimary}`}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all rounded-lg shadow-sm shadow-emerald-600/20 whitespace-nowrap"
              title="اتصال مباشر"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse shrink-0" />
              <span className="hidden md:inline">اتصال مباشر: </span>
              <span>{COMPANY_DATA.phonePrimary}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-right px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentTab === link.id
                    ? 'bg-sky-50 text-sky-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
            >
              <span>طلب معاينة ومقاسات مجانية</span>
            </button>

            <a
              href={`tel:${COMPANY_DATA.phonePrimary}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-lg"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>اتصال فوري: {COMPANY_DATA.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
