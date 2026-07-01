import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';
import { Layers, MapPin, Building, ArrowUpRight, Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'All', label: t('Semua Proyek', 'All Projects') },
    { id: 'Villa', label: t('Villa & Resort', 'Villa & Resort') },
    { id: 'Hotel', label: t('Hotel', 'Hotels') },
    { id: 'Restaurant', label: t('Restoran', 'Restaurants') },
    { id: 'Rental', label: t('Rental', 'Rentals') },
    { id: 'Tour', label: t('Tur & Travel', 'Tours') },
    { id: 'Dive Center', label: t('Pusat Selam', 'Diving') },
    { id: 'UMKM', label: t('UMKM', 'UMKM & Retail') },
    { id: 'Company Profile', label: t('Profil Perusahaan', 'Company Profile') },
    { id: 'Landing Page', label: t('Landing Page', 'Landing Page') }
  ];

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">
      {/* Dynamic Radial Background lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-soft/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Showcase Kreatif', '// Creative Showcase')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Hasil Karya & Kesuksesan Klien Kami', 'Our Local Craft & Client Successes')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans">
            {t(
              'Jelajahi galeri tata letak website premium dan profil digital yang kami buat khusus untuk pemilik bisnis di Nusa Penida dan Bali. Klik kartu apa saja untuk melihat spesifikasi detail dan teknologi terintegrasi.',
              'Explore our showcase of premium website layouts and digital profiles created specifically for Nusa Penida and Bali business owners. Click any card to view detailed specifications and integrated tech stacks.'
            )}
          </p>
        </div>

        {/* Filter Slider (Horizontal Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-thin no-scrollbar space-x-2 scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all uppercase font-mono cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15 scale-102'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-brand-dark/70 hover:text-brand-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-5 text-[11px] font-bold tracking-wider uppercase text-brand-blue/80 font-mono animate-pulse">
          <span>{t('← Geser untuk melihat portofolio →', '← Swipe to view portfolio →')}</span>
        </div>

        {/* Portfolio Dynamic Grid with animated cards */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
          {filteredItems.map((item) => {
            const displayTitle = language === 'id' && item.titleId ? item.titleId : item.title;
            const displayDesc = language === 'id' && item.descriptionId ? item.descriptionId : item.description;
            const displayLocation = language === 'id' && item.locationId ? item.locationId : item.location;
            const displayCatLabel = language === 'id' && item.categoryLabelId ? item.categoryLabelId : item.categoryLabel;
            const displayFeatures = language === 'id' && item.featuresId ? item.featuresId : item.features;

            return (
              <div
                key={item.id}
                onClick={() => setActiveProject(item)}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center group cursor-pointer rounded-2xl overflow-hidden border border-brand-dark/10 bg-neutral-50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative"
              >
                {/* Image with zoom effect */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={displayTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Badge overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0C1446]/85 backdrop-blur-md rounded-full text-[9px] font-extrabold text-white uppercase tracking-wider font-mono">
                    {displayCatLabel}
                  </span>
                </div>

                {/* Card Details text info */}
                <div className="p-6 text-left">
                  <div className="flex items-center gap-1.5 text-xs text-brand-dark/50 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{displayLocation}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-dark mt-2 tracking-tight group-hover:text-brand-blue transition-colors">
                    {displayTitle}
                  </h3>
                  <p className="text-xs text-brand-dark/75 mt-2 line-clamp-2 leading-relaxed font-sans">
                    {displayDesc}
                  </p>

                  {/* Tags bottom container */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-dark/5 mt-4">
                    {displayFeatures.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="text-[9px] font-semibold bg-brand-blue/5 text-brand-dark/70 px-2 py-0.5 rounded-md">
                        #{feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty placeholder state if filtered category is empty */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-brand-dark/50 space-y-2">
            <Layers className="w-12 h-12 mx-auto stroke-1" />
            <p className="text-sm font-sans font-medium">{t('Belum ada proyek di kategori ini.', 'No projects found in this category yet.')}</p>
          </div>
        )}

        {/* SPECIFICATION DRAWER MODAL OVERLAY */}
        {activeProject && (() => {
          const displayTitle = language === 'id' && activeProject.titleId ? activeProject.titleId : activeProject.title;
          const displayDesc = language === 'id' && activeProject.descriptionId ? activeProject.descriptionId : activeProject.description;
          const displayLocation = language === 'id' && activeProject.locationId ? activeProject.locationId : activeProject.location;
          const displayFeatures = language === 'id' && activeProject.featuresId ? activeProject.featuresId : activeProject.features;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0C1446]/40 backdrop-blur-sm transition-all animate-fade-in">
              <div className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/30 text-left my-auto max-h-[85vh] sm:max-h-[90vh] flex flex-col">
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-[#0C1446]/90 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-brand-dark transition-colors"
                  aria-label="Close Project Drawer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-12 overflow-y-auto flex-1 scrollbar-thin">
                  {/* Hero header Image - left column */}
                  <div className="sm:col-span-5 relative h-36 sm:h-auto">
                    <img
                      src={activeProject.image}
                      alt={displayTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent" />
                  </div>

                  {/* Meta details - right column */}
                  <div className="sm:col-span-7 p-4 sm:p-8 space-y-3.5 sm:space-y-5">
                    <div>
                      <span className="text-[8px] sm:text-[9px] font-extrabold uppercase font-mono tracking-widest text-brand-blue">
                        {t('// Detail Studi Kasus', '// Case Study Showcase')}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight mt-0.5 sm:mt-1 leading-tight">
                        {displayTitle}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-sans text-justify">
                      {displayDesc}
                    </p>

                    {/* Operational stats table */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 bg-[#0C1446]/5 p-2.5 sm:p-3.5 rounded-xl border border-brand-dark/5 text-[11px] sm:text-xs font-sans">
                      <div>
                        <div className="text-[8px] sm:text-[10px] text-brand-dark/50 uppercase font-mono">{t('Grup Klien', 'Client Group')}</div>
                        <div className="font-bold text-brand-dark mt-0.5 truncate">{activeProject.clientName}</div>
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[10px] text-brand-dark/50 uppercase font-mono">{t('Lokasi Geografis', 'Geo Location')}</div>
                        <div className="font-bold text-brand-dark mt-0.5 flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 text-brand-blue flex-shrink-0" />
                          <span>{displayLocation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Specs list */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-dark/55 font-mono">
                        {t('Spesifikasi Teknologi Terintegrasi:', 'Integrated Tech Specs:')}
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {displayFeatures.map((feat, idx) => (
                          <div key={idx} className="flex items-center text-[11px] sm:text-xs text-brand-dark/80 font-sans">
                            <Check className="w-3.5 h-3.5 text-emerald-500 mr-1 sm:mr-1.5 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link button */}
                    <div className="pt-3 border-t border-brand-dark/5 flex items-center justify-between">
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full uppercase">
                        {t('AKTIF & AMAN', 'ACTIVE & SECURED')}
                      </span>
                      {activeProject.url && (
                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-xs font-bold text-[#0C1446] hover:text-brand-blue transition-colors font-mono uppercase tracking-wider"
                        >
                          <span>{t('Kunjungi Demo', 'Visit Demo')}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </a>
                      )}
                    </div>
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
