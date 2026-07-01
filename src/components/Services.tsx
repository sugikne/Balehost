import { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { language, t } = useLanguage();

  // Dynamic Icon Renderer from Lucide
  const renderIcon = (iconName: string, className = "w-6 h-6 text-brand-blue") => {
    switch (iconName) {
      case 'Code':
        return <LucideIcons.Code className={className} />;
      case 'Layout':
        return <LucideIcons.Layout className={className} />;
      case 'Figma':
        return <LucideIcons.Layers className={className} />; // Fallback to Layers if Figma doesn't exist
      case 'Cloud':
        return <LucideIcons.Cloud className={className} />;
      case 'Globe':
        return <LucideIcons.Globe className={className} />;
      case 'Search':
        return <LucideIcons.Search className={className} />;
      default:
        return <LucideIcons.HelpCircle className={className} />;
    }
  };

  return (
    <section id="services" className="pt-12 sm:pt-16 pb-20 sm:pb-24 relative overflow-hidden bg-neutral-50 grid-bg">
      {/* Visual Accents */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-soft/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Layanan', '// Services')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Layanan Digital Kami', 'Our Premium Digital Services')}
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/70 font-sans">
            {t(
              'Solusi digital lengkap untuk bisnis Anda di Bali: mulai dari desain website premium, sistem kustom, hingga optimasi SEO lokal.',
              'Complete digital infrastructure tailored for Balinese businesses. From initial interactive user prototypes to high-speed cloud configurations and search visibility.'
            )}
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-5 text-[11px] font-bold tracking-wider uppercase text-brand-blue/80 font-mono animate-pulse">
          <span>{t('← Geser untuk melihat layanan →', '← Swipe to view services →')}</span>
        </div>

        {/* Services Grid (6 Premium Cards with Glassmorphism) */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
          {SERVICES_DATA.map((service) => {
            const displayTitle = language === 'id' && service.titleId ? service.titleId : service.title;
            const displayDesc = language === 'id' && service.descriptionId ? service.descriptionId : service.description;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center glass-card rounded-2xl p-8 cursor-pointer flex flex-col justify-between h-full group text-left"
              >
                <div className="space-y-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    {renderIcon(service.iconName, "w-6 h-6 text-brand-blue group-hover:text-white transition-colors")}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                    {displayTitle}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-brand-dark/80 leading-relaxed font-sans">
                    {displayDesc}
                  </p>
                </div>

                {/* Action Bottom Indicator */}
                <div className="pt-6 flex items-center text-xs font-bold text-brand-blue font-mono uppercase tracking-wider group-hover:underline">
                  <span>{t('Lihat Spesifikasi', 'View Specs')}</span>
                  <LucideIcons.ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Spec detail slider modal (Glassmorphism overlay) */}
        {selectedService && (() => {
          const displayTitle = language === 'id' && selectedService.titleId ? selectedService.titleId : selectedService.title;
          const displayLongDesc = language === 'id' && selectedService.longDescriptionId ? selectedService.longDescriptionId : selectedService.longDescription;
          const displayFeatures = language === 'id' && selectedService.featuresId ? selectedService.featuresId : selectedService.features;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0C1446]/40 backdrop-blur-sm transition-all animate-fade-in">
              <div className="relative w-full max-w-lg glass-panel rounded-3xl p-4 sm:p-10 shadow-2xl border border-white/30 text-left my-auto max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden">
                
                 {/* Close Button */}
                 <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3.5 right-3.5 p-2 rounded-xl hover:bg-brand-dark/10 transition-colors text-brand-dark/70 z-10"
                  aria-label="Close Modal"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>

                <div className="space-y-4 sm:space-y-6 overflow-y-auto pr-1 flex-1 scrollbar-thin pt-2">
                  {/* Header detail */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-blue/15 flex items-center justify-center flex-shrink-0">
                      {renderIcon(selectedService.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark leading-tight">
                        {displayTitle}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-brand-blue font-bold">
                        {t('Cakupan Spesifikasi', 'Specification Scope')}
                      </span>
                    </div>
                  </div>

                  {/* Long description */}
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-sans text-justify">
                    {displayLongDesc}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-dark/55 font-mono">
                      {t('Apa saja yang termasuk:', 'What is Included:')}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {displayFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-brand-dark/85 font-sans text-justify">
                          <span className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA inside detail */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const el = document.getElementById('pricing');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 sm:py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#0C1446] hover:bg-[#2B5C92] text-white shadow-md transition-colors"
                    >
                      {t('Pilih Layanan Ini', 'Select this Service')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
