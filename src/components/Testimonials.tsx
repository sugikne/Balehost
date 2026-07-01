import { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];
  const displayRole = language === 'id' && current.roleId ? current.roleId : current.role;
  const displayContent = language === 'id' ? current.content : (current.contentEn || current.content);
  const displayLocation = language === 'id' && current.locationId ? current.locationId : current.location;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-neutral-50 grid-bg">
      <div className="absolute top-1/3 right-10 w-[200px] h-[200px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Testimonial Klien', '// Client Testimonials')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Apa Kata Mitra Kami Tentang BaleHost', 'What Our Partners Say About BaleHost')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Dengarkan penuturan dari pemilik hotel lokal, pendiri vila, dan perusahaan rental kendaraan di Nusa Penida yang telah membuka saluran pendapatan digital langsung.',
              'Hear from local hotel operators, villa founders, and vehicle rental companies in Nusa Penida who have unlocked direct digital revenue channels.'
            )}
          </p>
        </div>

        {/* Carousel Slider Card (Glassmorphism design) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card with beautiful slide animation triggers */}
          <div className="glass-card-premium rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50 text-left relative overflow-hidden">
            {/* Elegant Background Quote Indicator */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-brand-blue/5 pointer-events-none stroke-[1.5]" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
              
              {/* Client Avatar with double circular borders */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue to-brand-soft blur-xs animate-pulse" />
                <img
                  src={current.avatarUrl}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Review Text info */}
              <div className="space-y-4 flex-1 text-center sm:text-left">
                {/* Five Star rating */}
                <div className="flex justify-center sm:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-base sm:text-lg italic text-brand-dark/90 leading-relaxed font-sans text-justify sm:text-left">
                  "{displayContent}"
                </p>

                {/* Identity Credits */}
                <div>
                  <h4 className="text-base font-extrabold text-brand-dark">
                    {current.name}
                  </h4>
                  <p className="text-xs text-brand-dark/60 font-mono mt-0.5">
                    {displayRole}, <span className="text-brand-blue font-bold">{current.businessName}</span>
                  </p>
                  <p className="text-[10px] text-brand-dark/40 font-semibold font-sans mt-0.5">
                    {displayLocation}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Arrows on Left/Right */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#0C1446] hover:bg-brand-blue text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dot indicators */}
            <div className="flex space-x-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 bg-[#0C1446]'
                      : 'bg-[#0C1446]/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#0C1446] hover:bg-brand-blue text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
