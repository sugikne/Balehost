import { ArrowRight, BookOpen, Laptop, Database, Cloud, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-[100dvh] sm:min-h-screen pt-20 sm:pt-32 pb-8 sm:pb-20 flex items-center overflow-hidden grid-bg"
    >
      {/* Background Glows & Blur Artifacts (Blue Radial Blurs) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-brand-soft/20 blur-[100px] pointer-events-none" />
      
      {/* Abstract Wave Line Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,400 500,200 T1100,400 T1700,200 T2300,500" fill="none" stroke="#0C1446" strokeWidth="3" />
          <path d="M-100,250 Q300,100 700,300 T1500,100 T2100,400" fill="none" stroke="#2B5C92" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline and Description */}
          <div className="lg:col-span-7 flex flex-col justify-between sm:justify-start h-[calc(100dvh-140px)] sm:h-auto text-center lg:text-left py-2 sm:py-0">
            
            {/* Top Text Group */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* Tagline Badge */}
              <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0C1446]/5 border border-[#0C1446]/10 text-brand-dark font-sans text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-spin-slow" />
                <span>{t('Jasa Pembuatan Website Nusa Penida & Bali', 'Website Development Services in Nusa Penida & Bali')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-tight">
                {t('Bangun', 'Build Your')} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-blue to-blue-500">
                  {t('Rumah Digital Anda', 'Digital Home')}
                </span> <br className="hidden sm:inline" />
                {t('bersama BaleHost.', 'with BaleHost.')}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base md:text-lg text-brand-dark/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans text-justify sm:text-left">
                <span className="inline sm:hidden">
                  {t(
                    'Kami menghadirkan jasa pembuatan website profesional, super cepat, aman, dan fully SEO-optimized di Nusa Penida & Bali. Khusus dirancang untuk meningkatkan kredibilitas dan penjualan bisnis Anda seperti Villa, Hotel, Resort, Rental Mobil/Motor, Tour & Travel, Restauran, hingga UMKM lokal. Dapatkan desain website premium yang mobile-friendly, terintegrasi tombol WhatsApp/Booking Engine langsung untuk meningkatkan pemesanan tanpa komisi pihak ketiga!',
                    'We offer professional, fast, secure, and SEO-optimized website development in Nusa Penida & Bali. Specially built to boost direct bookings and sales for Villas, Hotels, Rentals, and local UMKM without any commission!'
                  )}
                </span>
                <span className="hidden sm:inline">
                  {t(
                    'Kami menghadirkan jasa pembuatan website profesional, super cepat, aman, dan fully SEO-optimized di Nusa Penida & Bali. Khusus dirancang untuk meningkatkan kredibilitas dan penjualan bisnis Anda seperti Villa, Hotel, Resort, Rental Mobil/Motor, Tour & Travel, Restauran, hingga UMKM lokal. Dapatkan desain website premium yang mobile-friendly, terintegrasi tombol WhatsApp/Booking Engine langsung untuk meningkatkan pemesanan tanpa komisi pihak ketiga!',
                    'Professional Website Development, UI/UX Design, Hosting, SEO, and Digital Solutions for businesses in Nusa Penida and Bali. We build gorgeous, fast-loading digital experiences optimized for hotels, luxury villas, dive centers, motor rentals, and local UMKM.'
                  )}
                </span>
              </p>

              {/* Quick trust metrics */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 pt-1 sm:pt-2 text-[10px] sm:text-xs font-semibold text-brand-dark/70 font-mono">
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span>5.0</span>
                </div>
                <div className="h-3 w-px bg-brand-dark/20" />
                <div>⚡ {t('Optimasi Kecepatan (95+)', 'Speed Optimized (95+)')}</div>
                <div className="h-3 w-px bg-brand-dark/20 hidden xs:block" />
                <div className="hidden xs:block">🔒 {t('Aman dengan SSL', 'SSL Secured')}</div>
              </div>
            </div>

            {/* Call to Actions Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center lg:justify-start pt-4 sm:pt-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="group relative w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-[#0C1446] to-[#2B5C92] hover:to-[#1e4573] text-white text-sm sm:text-base font-bold shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {t('Mulai Proyek Anda', 'Start Your Project')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => onNavigate('services')}
                className="group w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-white/40 border border-brand-dark/10 hover:border-brand-blue/30 text-brand-dark text-sm sm:text-base font-bold hover:bg-brand-blue/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {t('Lihat Paket', 'See Packages')}
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
              </button>
            </div>

            {/* Quick Local Keywords Tagging for Google Bots (Semantic SEO) */}
            <div className="pt-6 hidden sm:block text-[10px] text-brand-dark/40 uppercase tracking-wider leading-relaxed">
              <strong>{t('Optimasi:', 'Optimizations:')}</strong> Website Villa Nusa Penida • Website Hotel Nusa Penida • Web Developer Bali • Jasa Pembuatan Website Nusa Penida • Website Rental Motor • Tour Travel • Digital Agency
            </div>
          </div>

          {/* Right: Beautiful Premium 3D Floating Illustration (Pure CSS + SVG) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center py-6 lg:py-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Circular Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-blue/20 animate-spin-slow pointer-events-none" />
              
              {/* Backdrop Circular Color Disk */}
              <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-soft/20 blur-xl pointer-events-none" />

              {/* 1. MAIN ILLUSTRATION: THE FLOATING WEB LAPTOP MOCKUP (CSS 3D perspective) */}
              <div className="absolute z-20 w-[200px] sm:w-[280px] glass-card-premium rounded-2xl p-2.5 sm:p-3 shadow-2xl animate-float-slow select-none transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                
                {/* Simulated Screen Topbar */}
                <div className="flex items-center justify-between border-b border-brand-dark/10 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2">
                  <div className="flex space-x-1 sm:space-x-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="px-2 sm:px-3 py-0.5 rounded-md bg-[#0C1446]/5 border border-[#0C1446]/10 text-[8px] sm:text-[9px] font-mono text-brand-dark/60 font-semibold tracking-wider">
                    balehost.com
                  </div>
                  <Laptop className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-blue" />
                </div>

                {/* Inside Screen Content: Interactive Dashboard Analytics Grid */}
                <div className="space-y-1.5 sm:space-y-2 font-mono text-[8px] sm:text-[9px] text-brand-dark">
                  <div className="flex justify-between items-center bg-[#0C1446]/5 p-1.5 sm:p-2 rounded-lg">
                    <span className="font-sans font-bold text-[8px] sm:text-[9px]">Booking Revenue</span>
                    <span className="text-emerald-600 font-bold font-sans text-[8px] sm:text-[9px]">+42.8%</span>
                  </div>
                  
                  {/* Miniature SVG Graph Chart */}
                  <div className="w-full h-12 sm:h-16 bg-white/60 rounded-lg p-1 border border-brand-dark/5 flex items-end justify-between relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path
                        d="M0,45 Q15,25 30,35 T60,15 T90,5 T100,2"
                        fill="none"
                        stroke="url(#chart-grad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="chart-grad" x1="0" y1="1" x2="1" y2="0">
                          <stop offset="0%" stopColor="#0C1446" />
                          <stop offset="50%" stopColor="#2B5C92" />
                          <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Visual bar graph indicators */}
                    <span className="w-[10%] h-4 sm:h-5 bg-brand-dark/10 rounded-sm" />
                    <span className="w-[10%] h-7 sm:h-8 bg-brand-dark/15 rounded-sm" />
                    <span className="w-[10%] h-5 sm:h-6 bg-brand-blue/30 rounded-sm" />
                    <span className="w-[10%] h-9 sm:h-11 bg-brand-blue/40 rounded-sm" />
                    <span className="w-[10%] h-11 sm:h-14 bg-gradient-to-t from-brand-blue to-brand-soft rounded-sm" />
                  </div>

                  <div className="grid grid-cols-2 gap-1 sm:gap-1.5 text-center text-[7px] sm:text-[8px]">
                    <div className="bg-brand-blue/10 p-1 sm:p-1.5 rounded-md">
                      <div className="text-brand-dark/50">Uptime</div>
                      <div className="font-bold font-sans">99.98%</div>
                    </div>
                    <div className="bg-brand-blue/10 p-1 sm:p-1.5 rounded-md">
                      <div className="text-brand-dark/50">Load Time</div>
                      <div className="font-bold font-sans text-brand-blue">0.42s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. FLOATING 3D COGNITIVE ITEM: DATABASE CYLINDER */}
              <div className="absolute top-4 right-2 z-10 w-[65px] sm:w-[75px] h-[75px] sm:h-[85px] bg-white/80 backdrop-blur-md rounded-xl p-1.5 sm:p-2 border border-white/40 shadow-xl animate-float-medium flex flex-col justify-between items-center text-center">
                <Database className="w-5 sm:w-6 h-5 sm:h-6 text-brand-blue mt-0.5" />
                <span className="text-[7px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-brand-dark/60">
                  SQL Base
                </span>
                <div className="w-full flex space-x-0.5 justify-center">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400" />
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* 3. FLOATING ITEM: CLOUD SERVER */}
              <div className="absolute -bottom-2 -left-3 z-30 w-[75px] sm:w-[85px] h-[85px] sm:h-[95px] bg-gradient-to-b from-[#0C1446] to-[#2B5C92] rounded-xl p-2 sm:p-2.5 shadow-2xl animate-float-fast text-white flex flex-col justify-between items-center">
                <Cloud className="w-6 sm:w-7 h-6 sm:h-7 text-brand-soft" />
                <div className="text-center">
                  <div className="text-[6px] sm:text-[7px] font-mono text-brand-soft/70">Edge Hosting</div>
                  <div className="text-[8px] sm:text-[9px] font-bold tracking-tight">Cloudflare</div>
                </div>
                <div className="w-full bg-white/20 h-0.5 sm:h-1 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-4/5 animate-pulse" />
                </div>
              </div>

              {/* 4. FLOATING TRANSLUCENT 3D GLASS SPHERE */}
              <div className="absolute -top-4 sm:-top-6 left-4 sm:left-6 z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-white/30 to-brand-soft/60 backdrop-blur-xs border border-white/60 shadow-inner shadow-white/80 animate-float-medium flex items-center justify-center font-mono text-[8px] sm:text-[10px] text-brand-dark font-extrabold">
                .id
              </div>

              {/* 5. FLOATING GLASS CUBE */}
              <div className="absolute bottom-4 sm:bottom-6 right-0 z-15 w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-brand-blue/30 to-transparent backdrop-blur-sm border border-white/50 shadow-md animate-float-slow rotate-12 flex items-center justify-center text-brand-dark font-mono text-[10px] sm:text-xs font-bold">
                .com
              </div>

              {/* Decorative Soft Glowing Spheres */}
              <div className="absolute top-1/2 left-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-cyan-400 blur-xs animate-ping" />
              <div className="absolute bottom-1/4 right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-400 blur-2xs" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
