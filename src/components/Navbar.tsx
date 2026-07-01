import { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  ArrowUpRight, 
  Globe,
  Home,
  Info,
  Layers,
  Briefcase,
  Tag,
  GitMerge,
  BookOpen,
  Phone
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('Beranda', 'Home'), icon: Home },
    { id: 'about', label: t('Tentang', 'About'), icon: Info },
    { id: 'services', label: t('Layanan', 'Services'), icon: Layers },
    { id: 'portfolio', label: t('Portofolio', 'Portfolio'), icon: Briefcase },
    { id: 'pricing', label: t('Harga', 'Pricing'), icon: Tag },
    { id: 'process', label: t('Proses', 'Process'), icon: GitMerge },
    { id: 'blog', label: t('Blog', 'Blog'), icon: BookOpen },
    { id: 'contact', label: t('Kontak', 'Contact'), icon: Phone }
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed z-50 transition-all duration-300 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 mx-auto max-w-7xl ${
        isScrolled || isMobileMenuOpen
          ? 'top-3 py-2 px-4 rounded-2xl md:rounded-full bg-[#0C1446]/85 backdrop-blur-xl border border-white/10 shadow-lg shadow-[#0C1446]/15 text-white'
          : 'top-4 py-2.5 px-4 sm:px-6 rounded-2xl md:rounded-full bg-white/75 backdrop-blur-lg border border-white/40 shadow-sm shadow-brand-blue/5 text-brand-dark'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-0 cursor-pointer group"
            onClick={() => handleItemClick('home')}
          >
            <div className="relative w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <svg 
                viewBox="0 0 100 100" 
                className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(43,92,146,0.15)]"
              >
                <path 
                  d="M50,10 A40,40 0 0,0 50,90 Z" 
                  fill={isScrolled || isMobileMenuOpen ? "#ffffff" : "#2B5C92"} 
                  className="transition-colors duration-300"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-extrabold tracking-tight transition-colors font-sans ${
                isScrolled || isMobileMenuOpen ? 'text-white' : 'text-brand-dark'
              }`}>
                Bale<span className="text-brand-blue">Host</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'bg-white/15 text-white font-semibold'
                      : 'bg-brand-blue/10 text-brand-blue font-semibold'
                    : isScrolled
                      ? 'text-white/70 hover:text-white hover:bg-white/5'
                      : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-blue/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA & Language indicator */}
          <div className="hidden md:flex items-center space-x-3.5">
            <div className={`flex items-center rounded-full p-0.5 border ${
              isScrolled 
                ? 'border-white/15 bg-white/5' 
                : 'border-brand-dark/10 bg-brand-dark/[0.04]'
            }`}>
              <button
                onClick={() => setLanguage('id')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono transition-all duration-200 cursor-pointer ${
                  language === 'id'
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                    : isScrolled ? 'text-white/60 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                    : isScrolled ? 'text-white/60 hover:text-white' : 'text-brand-dark/60 hover:text-brand-dark'
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="nav-cta-button"
              onClick={() => handleItemClick('pricing')}
              className="relative overflow-hidden px-4.5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-brand-blue to-brand-dark text-white shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1">
                {t('Mulai Proyek', 'Start Project')}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-full transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-brand-blue/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Glassmorphic IOS Action Sheet Overlay) */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-[#0C1446]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'top-[calc(100%+8px)] max-h-[80vh] opacity-100 py-4 px-3 shadow-2xl overflow-y-auto' 
            : 'top-[calc(100%+8px)] max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-white/15 text-white pl-4 font-bold shadow-xs'
                    : 'text-white/70 hover:text-white hover:bg-white/5 pl-4'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${activeSection === item.id ? 'text-brand-soft' : 'text-brand-blue'}`} />
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col space-y-3.5">
            <div className="flex items-center justify-between px-3.5 py-2 bg-white/5 rounded-xl border border-white/10">
              <span className="text-xs font-semibold text-white/70 flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-blue" />
                {t('Pilih Bahasa', 'Select Language')}
              </span>
              <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 rounded-full text-[10px] font-extrabold font-mono transition-all duration-200 cursor-pointer ${
                    language === 'id' ? 'bg-brand-blue text-white shadow-sm' : 'text-white/60 hover:text-white'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-[10px] font-extrabold font-mono transition-all duration-200 cursor-pointer ${
                    language === 'en' ? 'bg-brand-blue text-white shadow-sm' : 'text-white/60 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <button
              onClick={() => handleItemClick('pricing')}
              className="w-full py-3.5 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-brand-blue to-brand-soft text-brand-dark shadow-lg shadow-brand-blue/25 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            >
              {t('Mulai Proyek', 'Start Project')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
