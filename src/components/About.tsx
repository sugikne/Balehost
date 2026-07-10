import { useState } from 'react';
import { ShieldCheck, Flame, Users, CalendarClock, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const stats = [
    {
      id: 'stat-projects',
      value: '100+',
      label: t('Proyek Selesai', 'Completed Projects'),
      description: t('Villa, hotel, dan rental aktif di Google.', 'Villas, hotels, and rentals live on Google.'),
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
      color: 'from-blue-500/10 to-transparent'
    },
    {
      id: 'stat-clients',
      value: '98%',
      label: t('Klien Puas', 'Happy Clients'),
      description: t('Diberi rating tinggi dalam layanan & support.', 'Highly rated on service and support.'),
      icon: <Users className="w-5 h-5 text-brand-blue" />,
      color: 'from-brand-blue/15 to-transparent'
    },
    {
      id: 'stat-uptime',
      value: '99.9%',
      label: t('Uptime Hosting', 'Hosting Uptime'),
      description: t('Didukung kecepatan server edge Cloudflare CDN.', 'Cloudflare CDN edge servers speed.'),
      icon: <Flame className="w-5 h-5 text-brand-blue animate-pulse" />,
      color: 'from-cyan-500/10 to-transparent'
    },
    {
      id: 'stat-support',
      value: '24/7',
      label: t('Support Lokal', 'Local Support'),
      description: t('Selalu siap untuk revisi darurat kustom.', 'Always reachable for custom emergency edits.'),
      icon: <CalendarClock className="w-5 h-5 text-brand-blue" />,
      color: 'from-blue-600/10 to-transparent'
    }
  ];

  const values = [
    {
      title: t('Pemahaman Pasar Lokal', 'Deep Local Insight'),
      description: t(
        'Kami sangat memahami karakteristik pasar pariwisata, akomodasi, dan transportasi rental di Nusa Penida & Bali.',
        'We deeply understand the specific travel, rental, and accommodation dynamics of Nusa Penida & Bali.'
      )
    },
    {
      title: t('Estetika Visual Premium', 'Premium Visual Aesthetics'),
      description: t(
        'Desain website yang eksklusif, super responsif, dan berstandar internasional untuk meningkatkan trust klien Anda.',
        'Modern, high-end designs that command trust and stand out globally.'
      )
    },
    {
      title: t('Strategi SEO Berkelanjutan', 'Sustainable SEO Strategy'),
      description: t(
        'Optimasi SEO on-page & off-page agar website Anda berada di peringkat teratas Google & Google Maps secara organik.',
        'We build search engine foundations that rank #1 on Google Maps and search queries organically.'
      )
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="pt-10 sm:pt-16 pb-20 sm:pb-24 relative overflow-hidden bg-white">
      {/* Structural backgrounds */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-soft/10 blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Content & Accordions 
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
              { t('// Siapa Kami', '// Who We Are') }
            </div> */}
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight">
              {t('Tentang BaleHost:', 'About BaleHost:')} <br />
              <span className="text-brand-blue">{t('Arsitek Digital Lokal Anda', 'Your Local Digital Architects')}</span>
            </h2>
            
            <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed font-sans text-justify">
              {t(
                'BaleHost adalah agensi digital di Nusa Penida, Bali yang menghadirkan website premium, cepat, dan fully SEO-optimized. Kami berfokus mendesain jalur booking langsung tanpa komisi untuk Villa, Hotel, Rental, & UMKM lokal.',
                'BaleHost is a specialized digital agency based in the beautiful island of Nusa Penida, Bali. We help businesses establish a strong, professional, and profitable online presence through premium websites, custom UI/UX design, lightning-fast edge hosting, and high-impact search engine optimization (SEO).'
              )}
            </p>

            {/* Accordion / Dropdown Checklist of values */}
            <div className="space-y-2.5 pt-2">
              {values.map((val, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-brand-dark/10 rounded-xl overflow-hidden bg-brand-blue/[0.01] transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer hover:bg-brand-blue/[0.03] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isOpen ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                        }`}>
                          ✓
                        </span>
                        <span className="text-sm font-bold text-brand-dark font-sans">
                          {val.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand-blue" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-brand-dark/50" />
                      )}
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? 'max-h-24 border-t border-brand-dark/5 bg-white/50' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 py-3 text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                        {val.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`relative p-5 sm:p-6 rounded-2xl border border-brand-dark/10 bg-gradient-to-br ${stat.color} hover:bg-brand-blue/[0.02] hover:border-brand-blue/30 transition-all duration-300 group hover:-translate-y-1 shadow-xs`}
                >
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/60 border border-brand-dark/5 shadow-inner">
                    {stat.icon}
                  </div>
                  
                  {/* Stat Value */}
                  <div className="text-3.5xl sm:text-4xl font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors font-sans tracking-tight">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm sm:text-base font-bold text-brand-dark mt-3">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-brand-dark/70 mt-1 font-sans leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Background Glow Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
