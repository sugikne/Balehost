import { useState } from 'react';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Search, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);

  const categories = [
    'All',
    'Website',
    'SEO',
    'Hosting',
    'UI UX',
    'Business',
    'AI',
    'Digital Marketing'
  ];

  // Filtering + Searching logic
  const filteredArticles = BLOG_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    const displayTitle = language === 'id' && article.titleId ? article.titleId : article.title;
    const displaySummary = language === 'id' && article.summaryId ? article.summaryId : article.summary;

    const matchesSearch = displayTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          displaySummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-neutral-50 grid-bg">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Pusat Edukasi', '// Knowledge Hub')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Pusat Edukasi & SEO Lokal BaleHost', 'BaleHost Knowledge & Local SEO Hub')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Baca artikel ahli, konsep pemasaran strategis, dan pembaruan teknis yang dirancang khusus untuk meningkatkan visibilitas lokal dan pemesanan langsung di Bali.',
              'Read expert articles, strategic marketing concepts, and technical updates designed specifically to boost local visibility and direct bookings in Bali.'
            )}
          </p>
        </div>

        {/* Search & Category filter panel */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white/70 backdrop-blur-md border border-brand-dark/10 rounded-2xl p-4 shadow-xs text-left">
          {/* Categories Horizontal Pills */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-thin no-scrollbar space-x-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider font-mono cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                {cat === 'All' ? t('Semua', 'All') :
                 cat === 'Business' ? t('Bisnis', 'Business') :
                 cat === 'Digital Marketing' ? t('Pemasaran Digital', 'Digital Marketing') : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
            <input
              type="text"
              placeholder={t('Cari artikel...', 'Search articles...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-dark/10 bg-white text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-5 text-[11px] font-bold tracking-wider uppercase text-brand-blue/80 font-mono animate-pulse">
          <span>{t('← Geser untuk melihat artikel →', '← Swipe to see articles →')}</span>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
          {filteredArticles.map((article) => {
            const displayTitle = language === 'id' && article.titleId ? article.titleId : article.title;
            const displaySummary = language === 'id' && article.summaryId ? article.summaryId : article.summary;
            const displayCategory = article.category === 'Business' ? t('Bisnis', 'Business') :
                                    article.category === 'Digital Marketing' ? t('Pemasaran Digital', 'Digital Marketing') : article.category;
            const displayRole = article.author.role === 'Lead Web Architect' ? t('Arsitek Web Utama', 'Lead Web Architect') :
                                article.author.role === 'SEO Strategist' ? t('Ahli Strategi SEO', 'SEO Strategist') :
                                article.author.role === 'Digital Branding Coach' ? t('Pelatih Branding Digital', 'Digital Branding Coach') : article.author.role;

            return (
              <div
                key={article.id}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center group flex flex-col justify-between bg-white border border-brand-dark/10 rounded-3xl overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 text-left h-full"
              >
                {/* Banner Cover Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={displayTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-brand-blue text-white rounded-full text-[10px] font-extrabold uppercase tracking-widest font-mono">
                    {displayCategory}
                  </span>
                </div>

                {/* Text Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Article Metadata line */}
                    <div className="flex items-center space-x-4 text-[10px] font-mono text-brand-dark/45 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                        {article.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-blue" />
                        {article.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-brand-dark tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
                      {displayTitle}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-brand-dark/75 leading-relaxed font-sans line-clamp-3 text-justify">
                      {displaySummary}
                    </p>
                  </div>

                  {/* Read More button trigger */}
                  <div className="pt-6 border-t border-brand-dark/5 mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover border border-brand-dark/10"
                      />
                      <span className="text-[10px] font-bold text-brand-dark/70 font-sans">
                        {article.author.name}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => setReadingArticle(article)}
                      className="inline-flex items-center text-xs font-bold text-[#0C1446] hover:text-brand-blue transition-all font-mono uppercase tracking-wider cursor-pointer"
                    >
                      <span>{t('Baca Selengkapnya', 'Read More')}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search/Filter results placeholder */}
        {filteredArticles.length === 0 && (
          <div className="py-20 text-center text-brand-dark/50 space-y-2">
            <FileText className="w-12 h-12 mx-auto stroke-1" />
            <p className="text-sm font-sans font-medium">{t('Tidak ada artikel yang sesuai dengan pencarian atau filter Anda.', 'No articles match your search or filter.')}</p>
          </div>
        )}

        {/* HIGH-FIDELITY FULL ARTICLE READER MODAL (Glassmorphic Backdrop) */}
        {readingArticle && (() => {
          const displayModalTitle = language === 'id' && readingArticle.titleId ? readingArticle.titleId : readingArticle.title;
          const displayModalCategory = readingArticle.category === 'Business' ? t('Bisnis', 'Business') :
                                       readingArticle.category === 'Digital Marketing' ? t('Pemasaran Digital', 'Digital Marketing') : readingArticle.category;
          const displayModalRole = readingArticle.author.role === 'Lead Web Architect' ? t('Arsitek Web Utama', 'Lead Web Architect') :
                                  readingArticle.author.role === 'SEO Strategist' ? t('Ahli Strategi SEO', 'SEO Strategist') :
                                  readingArticle.author.role === 'Digital Branding Coach' ? t('Pelatih Branding Digital', 'Digital Branding Coach') : readingArticle.author.role;

          return (
            <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 bg-[#0C1446]/50 backdrop-blur-md flex items-start justify-center transition-all animate-fade-in">
              <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/30 my-4 sm:my-8">
                
                {/* Floating Top Nav bar inside reader */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-brand-dark/5 p-3 sm:p-4 flex items-center justify-between z-10 text-left">
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="inline-flex items-center text-xs font-bold text-[#0C1446] hover:text-brand-blue transition-colors font-mono uppercase cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    {t('Kembali ke Pusat Edukasi', 'Back to Hub')}
                  </button>
                  <div className="text-[10px] sm:text-xs font-mono text-brand-dark/50 uppercase tracking-widest font-bold hidden xs:block">
                    {t('Ruang Baca BaleHost', 'BaleHost Reading Room')}
                  </div>
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-brand-dark/70 text-xs font-bold font-mono uppercase rounded-lg cursor-pointer"
                  >
                    {t('Tutup', 'Close')}
                  </button>
                </div>

                {/* Cover Banner Image */}
                <div className="relative h-48 sm:h-80 overflow-hidden">
                  <img
                    src={readingArticle.image}
                    alt={displayModalTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left space-y-1.5">
                    <span className="px-2.5 py-0.5 bg-brand-blue text-white rounded-full text-[8px] font-extrabold uppercase tracking-widest font-mono">
                      {displayModalCategory}
                    </span>
                    <h1 className="text-lg sm:text-3xl font-extrabold tracking-tight leading-tight">
                      {displayModalTitle}
                    </h1>
                  </div>
                </div>

                {/* Editorial Content container */}
                <div className="p-4 sm:p-10 text-left max-w-3xl mx-auto space-y-5 sm:space-y-8">
                  {/* Author Credit header */}
                  <div className="flex flex-wrap items-center gap-4 py-4 border-b border-brand-dark/5 font-sans">
                    <img
                      src={readingArticle.author.avatar}
                      alt={readingArticle.author.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-brand-dark/15"
                    />
                    <div>
                      <div className="text-sm font-extrabold text-brand-dark">
                        {t(`Ditulis oleh ${readingArticle.author.name}`, `Written by ${readingArticle.author.name}`)}
                      </div>
                      <div className="text-xs text-brand-dark/50">
                        {displayModalRole} • {t('Inti Teknologi BaleHost', 'BaleHost Tech Core')}
                      </div>
                    </div>
                    <div className="sm:ml-auto flex items-center space-x-4 text-xs font-mono text-brand-dark/45 font-bold">
                      <span>{t('DITERBITKAN:', 'PUBLISHED:')} {readingArticle.publishDate}</span>
                      <span>•</span>
                      <span>{readingArticle.readingTime}</span>
                    </div>
                  </div>

                  {/* Structured Article body (using semantic prose styling) */}
                  <div className="prose prose-blue max-w-none prose-sm sm:prose-base text-brand-dark/90 leading-relaxed font-sans space-y-4">
                    {readingArticle.content.split('\n\n').map((paragraph, index) => {
                      // Quick parser for markdown indicators
                      const trimmed = paragraph.trim();
                      if (trimmed.startsWith('# ')) {
                        return <h2 key={index} className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-dark pt-4 pb-2 border-b border-brand-dark/5">{trimmed.replace('# ', '')}</h2>;
                      }
                      if (trimmed.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-bold text-brand-dark pt-3 pb-1">{trimmed.replace('### ', '')}</h3>;
                      }
                      if (trimmed.startsWith('#### ')) {
                        return <h4 key={index} className="text-lg font-bold text-brand-blue pt-2">{trimmed.replace('#### ', '')}</h4>;
                      }
                      if (trimmed.startsWith('- ')) {
                        return (
                          <ul key={index} className="list-disc pl-6 space-y-2 py-2">
                            {trimmed.split('\n').map((li, i) => (
                              <li key={i} className="text-sm sm:text-base text-brand-dark/85">{li.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      // Tables formatting parsing helper
                      if (trimmed.includes('|')) {
                        return (
                          <div key={index} className="overflow-x-auto my-6 border border-brand-dark/10 rounded-xl bg-neutral-50">
                            <table className="min-w-full divide-y divide-brand-dark/10 text-xs sm:text-sm font-sans">
                              <tbody className="divide-y divide-brand-dark/5">
                                {trimmed.split('\n').map((row, rIdx) => {
                                  const cols = row.split('|').map(c => c.trim()).filter(Boolean);
                                  if (rIdx === 1) return null; // skip divider line
                                  return (
                                    <tr key={rIdx} className={rIdx === 0 ? "bg-[#0C1446]/5 font-bold text-brand-dark" : "hover:bg-[#2B5C92]/5 text-brand-dark/80"}>
                                      {cols.map((col, cIdx) => (
                                        <td key={cIdx} className="px-4 py-3">{col}</td>
                                      ))}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      return <p key={index} className="text-sm sm:text-base leading-relaxed text-brand-dark/85 font-sans text-justify">{trimmed}</p>;
                    })}
                  </div>

                  {/* Article Footer Tag chips */}
                  <div className="pt-6 border-t border-brand-dark/5 flex flex-wrap gap-2 text-left">
                    {readingArticle.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono font-bold bg-[#0C1446]/5 hover:bg-brand-blue/10 text-brand-dark px-3 py-1.5 rounded-full transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom CTA for active reader engagement */}
                  <div className="bg-gradient-to-r from-brand-blue/10 to-brand-soft/10 border border-brand-blue/25 rounded-2xl p-6 text-center space-y-4">
                    <h4 className="text-lg font-extrabold text-[#0C1446]">
                      {t('Butuh Website Profesional untuk Bisnis Anda di Nusa Penida?', 'Need a Professional Website for Your Business in Nusa Penida?')}
                    </h4>
                    <p className="text-xs text-brand-dark/75 font-sans max-w-xl mx-auto">
                      {t(
                        'BaleHost siap membantu Anda mengaplikasikan strategi di atas untuk mendongkrak penjualan langsung dari Google secara instan.',
                        'BaleHost is ready to help you apply the strategies above to boost direct sales from Google instantly.'
                      )}
                    </p>
                    <button
                      onClick={() => {
                        setReadingArticle(null);
                        const el = document.getElementById('pricing');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#0C1446] hover:bg-[#2B5C92] text-white text-xs font-bold font-mono uppercase rounded-xl transition-colors cursor-pointer"
                    >
                      {t('Konsultasi Gratis Sekarang', 'Free Consultation Now')}
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
