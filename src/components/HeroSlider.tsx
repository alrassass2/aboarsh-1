import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, ChevronRight, ChevronLeft, Shield, Wrench, Award, Clock, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface HeroSliderProps {
  onOpenQuoteModal: () => void;
  onExploreDepartment: (deptName: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenQuoteModal,
  onExploreDepartment,
}) => {
  const slides = [
    {
      title: 'واجهات زجاجية واستركشر معماري فاخر',
      subtitle: 'تنفيذ واجهات المباني والمحلات والفلل بأعلى معايير الأمان وعزل الحرارة والصوت في أبو عريش وجيزان',
      image: '/hero_glass_facade.jpg',
      badge: 'الريادة في الواجهات والاستركشر',
      dept: 'الواجهات الزجاجية'
    },
    {
      title: 'بلكونات زجاجية بانورامية بدون إطارات',
      subtitle: 'أنظمة زجاج سيكوريت قابلة للطي والسحب برؤية كاملة 100% وحماية تامة من الغبار والرياح',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHgozg-THGe1eY7Td7ZXCZZckNb87XOKVJIauDm6wP-XxWntTNxc-fPOcBbMx5xcgME9zEI-O89WFfh_LAVHVDGLw3b1we0nqk6xNLkGx_maSvgAoKWn9jswlusGb_yYmUihdM_shtj56mC43pi80TjJ-ppbHQtnWQ_8P3CBHVL527OEQlERjQgy0U/s1600/%D8%A8%D9%84%D9%83%D9%88%D9%86%D8%A7%D8%AA4.jpg',
      badge: 'إغلاق شرفات حديث وعصري',
      dept: 'بلكونات زجاجية'
    },
    {
      title: 'أبواب زجاج سيكوريت ذكية وسحابة',
      subtitle: 'أبواب أوتوماتيكية بالحساسات الذكية وماكينات أرضية هيدروليكية إيطالية للمحلات والشركات',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivr3OtcJXeiF6qx1haGOW_4RhykBkMF-5YA5dm0hHFBy_6U6Vj77nrCkquyP8OvsW8ICnyunu0iTpRKB4dU0LfxZP01BVH6JIDWo1IbIorhab0TJi_kMw1vfy8Q-x4tOpvbU8wxfASJk5Y2_qI2hpIX7jjDOMyOPBop6WDy5MbMj8p0X3lD6KUPEbZ/s1600/%D9%88%D8%A7%D8%AC%D9%87%D8%A76.jpg',
      badge: 'أنظمة أبواب متطورة',
      dept: 'أبواب زجاجية'
    },
    {
      title: 'كبائن شاور فاخرة ومرايا ديكورية مودرن',
      subtitle: 'تصاميم زجاجية عازلة للمياه وإكسسوارات ستانلس ستيل 304 مع مرايا ليد بلجيكية نقية',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt2t2nUqomtPcOi8j21L0gOihneqADZ_YF9Ss0ySNYAAk6PvNLzULHZe3v69eXx1Pcn2Anbzc3iCSQiS9amIv5WWBmhOs5CId8cz343TLx4con7DNL2qjiLSPdYCLAZk5ua0PYZ7oTO9XUCqLvI7OQcolZCWds0CwPAIzpxlVi0eaUL-LxcMLzjEXa/s1600/%D8%AD%D9%85%D8%A7%D9%85%D8%A7%D8%AA1.jpg',
      badge: 'فخامة الحمامات والديكورات',
      dept: 'كبائن الشاور والحمامات'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between">
      {/* 1. Background Slider Layer (Visuals Only) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback to trusted official photo if any fails
                const img = e.target as HTMLImageElement;
                if (!img.src.includes('blogger.googleusercontent')) {
                  img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHgozg-THGe1eY7Td7ZXCZZckNb87XOKVJIauDm6wP-XxWntTNxc-fPOcBbMx5xcgME9zEI-O89WFfh_LAVHVDGLw3b1we0nqk6xNLkGx_maSvgAoKWn9jswlusGb_yYmUihdM_shtj56mC43pi80TjJ-ppbHQtnWQ_8P3CBHVL527OEQlERjQgy0U/s1600/%D8%A8%D9%84%D9%83%D9%88%D9%86%D8%A7%D8%AA4.jpg';
                }
              }}
            />
          </div>
        ))}

        {/* Robust Multi-layer Scrims for 100% Permanent Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/70" />
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. Foreground Hero Content Layer (STABLE & PERMANENT - NEVER VANISHES) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl text-right space-y-4 sm:space-y-6">
          
          {/* Permanent Company & Credibility Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>الورشة المتخصصة الأولى في أبو عريش ومنطقة جازان</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <span>ضمان معتمد 5 سنوات</span>
            </span>
          </div>

          {/* Permanent Master Headline (SITE IDENTITY & SERVICE OFFERING) */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              زجاج سكريت <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 via-sky-300 to-white">ابوعريش</span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl font-bold text-sky-200 leading-snug">
              توريد وتركيب وصيانة الواجهات والاستركشر والأبواب والكبائن والبلكونات
            </p>
          </div>

          {/* Dynamic Active Service Card (Shows active slide info with rock-solid visibility) */}
          <div className="bg-slate-900/80 border border-sky-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-black text-sky-300 uppercase tracking-wide">
                  {slides[currentSlide].badge}
                </span>
              </div>
              <button
                onClick={() => onExploreDepartment(slides[currentSlide].dept)}
                className="text-xs text-sky-400 hover:text-white underline underline-offset-4 cursor-pointer font-bold"
              >
                تصفح قسم {slides[currentSlide].dept} ←
              </button>
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 transition-all">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Permanent Key Value Proposition & Specifications */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl font-medium hidden xs:block">
            تنفيذ احترافي بالزجاج المقسى 10 مم و 12 مم، إكسسوارات إيطالية وستانلس ستيل 304 مقاوم تماماً للرطوبة والصدأ، رفع مقاسات ومعاينة مجانية في كافة أحياء أبو عريش وجيزان وصبيا وصامطة.
          </p>

          {/* Primary Action Buttons (Responsive CTAs) */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {/* Phone Call CTA */}
            <a
              href={`tel:${COMPANY_DATA.phonePrimary}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 active:scale-95 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white animate-pulse" />
              <span>اتصل الآن: {COMPANY_DATA.phonePrimary}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={COMPANY_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm sm:text-base font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/40 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>طلب عرض سعر واتساب</span>
            </a>

            {/* Free Quote Modal */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>معاينة مجانية للموقع</span>
            </button>

            {/* Google Maps Location */}
            <a
              href={COMPANY_DATA.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>طريق الملك فيصل على الخريطة</span>
            </a>
          </div>

          {/* Slide Switchers / Quick Tabs */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-bold ml-1">تصفح الخدمات:</span>
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  idx === currentSlide
                    ? 'bg-sky-500 text-white shadow-sm ring-1 ring-sky-300'
                    : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {s.badge}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Slider Navigation Controls (Bottom-left) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-all active:scale-95"
            aria-label="السابق"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-all active:scale-95"
            aria-label="التالي"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 mr-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? 'w-6 bg-sky-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`شريحة ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <span className="text-[11px] text-slate-400 font-mono">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* 4. Adjacent Trust Badges Strip */}
      <div className="relative z-20 border-t border-slate-800/80 bg-slate-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-right">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">زجاج سيكوريت معتمد</h4>
                <p className="text-[11px] text-slate-400">سماكات 10 مم و 12 مم أصلية</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">ستانلس 304 إيطالي</h4>
                <p className="text-[11px] text-slate-400">مقاومة تامة للرطوبة والصدأ</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">معاينة ومقاسات فورية</h4>
                <p className="text-[11px] text-slate-400">خدمة مجانية في أبو عريش</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">ضمان شامل معتمد</h4>
                <p className="text-[11px] text-slate-400">ضمان كتابي 5 سنوات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
