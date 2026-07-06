import { useEffect } from 'react';
import { Globe, MapPin, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { language, t } = useLanguage();
  
  // Inject highly compliant LocalBusiness & Organization JSON-LD Schema to page head
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove()); // Clean up old scripts to prevent duplicates

    // 1. Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BaleHost",
      "url": "https://balehost.com",
      "logo": "https://balehost.com/logo.png",
      "sameAs": [
        "https://instagram.com/balehost",
        "https://facebook.com/balehost"
      ]
    };

    // 2. Local Business Schema (Hyper-targeted for Nusa Penida & Bali)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "BaleHost - Jasa Pembuatan Website Nusa Penida",
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
      "@id": "https://balehost.com/#localbusiness",
      "url": "https://balehost.com",
      "telephone": "+62 823-2634-7260",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ped, Nusa Penida, Klungkung Regency",
        "addressLocality": "Nusa Penida",
        "addressRegion": "Bali",
        "postalCode": "80771",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.7278,
        "longitude": 115.5444
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "areaServed": [
        { "@type": "Place", "name": "Nusa Penida" },
        { "@type": "Place", "name": "Klungkung" },
        { "@type": "Place", "name": "Sanur" },
        { "@type": "Place", "name": "Denpasar" },
        { "@type": "Place", "name": "Bali" }
      ]
    };

    // Append both schemas to head
    const createScript = (schemaObj: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    createScript(orgSchema);
    createScript(localBusinessSchema);
  }, []);

  return (
    <footer className="relative bg-[#0C1446] text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Background blurs */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-brand-soft/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          
          {/* Logo Brand information - col 4 */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div 
              className="flex items-center space-x-0 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="relative w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-8 h-8 drop-shadow-[0_4px_8px_rgba(255,255,255,0.1)]"
                >
                  <path 
                    d="M50,10 A40,40 0 0,0 50,90 Z" 
                    fill="#ffffff" 
                    className="transition-colors duration-300"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight">
                  Bale<span className="text-brand-blue">Host</span>
                </span>
                <span className="text-[9px] tracking-widest uppercase font-mono text-brand-soft -mt-1 font-bold">
                  {t('Bangun Rumah Digital Anda', 'Build Your Digital Home')}
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-soft/75 leading-relaxed max-w-sm text-justify">
              {t(
                'Digital Agency profesional di Nusa Penida, Bali. Kami merancang website berkinerja tinggi, landing page penjualan, dan solusi hosting lokal untuk membantu bisnis Anda berkembang mandiri.',
                'Professional digital agency in Nusa Penida, Bali. We design high-performance websites, sales landing pages, and local hosting solutions to help your business grow independently.'
              )}
            </p>

            {/* Safety & Compliance badges */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold bg-white/5 p-2 rounded-xl border border-white/5 inline-flex">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('STRUKTUR GOOGLE COMPLIANT AKTIF', 'GOOGLE COMPLIANT STRUCTURES ACTIVE')}</span>
            </div>
          </div>

          {/* Quick Links Column - col 2 */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-soft">
              {t('Navigasi', 'Navigation')}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {['home', 'about', 'services', 'portfolio', 'pricing'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="hover:text-brand-soft transition-colors cursor-pointer"
                  >
                    {item === 'home' ? t('Beranda', 'Home') :
                     item === 'about' ? t('Tentang Kami', 'About') :
                     item === 'services' ? t('Layanan', 'Services') :
                     item === 'portfolio' ? t('Portofolio', 'Portfolio') :
                     item === 'pricing' ? t('Harga', 'Pricing') : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links Column - col 2 */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-soft">
              {t('Sumber Daya', 'Resources')}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-brand-soft transition-colors cursor-pointer">
                  {t('Pusat Edukasi', 'Knowledge Hub')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-brand-soft transition-colors cursor-pointer">
                  {t('Pertanyaan Umum (FAQ)', 'FAQ Accordion')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('local-seo')} className="hover:text-brand-soft transition-colors cursor-pointer">
                  {t('Area Layanan', 'Service Area')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-brand-soft transition-colors cursor-pointer">
                  {t('Kalkulator Proposal', 'Proposal Calculator')}
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Contacts Column - col 4 */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-brand-soft">
              {t('Hubungi Kami', 'Get in Touch')}
            </h4>
            
            <div className="space-y-3.5 text-xs text-white/75">
              <a href="mailto:hello@balehost.com" className="flex items-center gap-2 hover:text-brand-soft transition-colors">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>hello@balehost.com</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Ped, Nusa Penida, Klungkung, Bali 80771</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-blue" />
                <span>{t('Area Layanan: Bali, Indonesia', 'Serving Area: Bali, Indonesia')}</span>
              </div>
            </div>

            {/* Quick outbound CTA links */}
            <div className="pt-2">
              <a
                href="https://wa.me/6282326347260"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-extrabold text-brand-soft hover:text-white transition-colors font-mono uppercase tracking-wider"
              >
                <span>{t('Saluran Chat Langsung', 'Direct Chat Channels')}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/40 font-mono gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} BaleHost. All Rights Reserved.
            </div>
            <div className="text-[9px] text-white/20">
              Jasa Pembuatan Website Nusa Penida • Bali Web Developer • Sitemap XML Active • Robots.txt Configured
            </div>
          </div>

          {/* Heart indicator */}
          <div className="flex items-center gap-1">
            <span>{t('Dibuat dengan', 'Made with')}</span>
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500 animate-pulse" />
            <span>{t('secara lokal di Nusa Penida, Bali', 'locally in Nusa Penida, Bali')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
